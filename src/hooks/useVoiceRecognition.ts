import { useState, useEffect, useCallback, useRef } from 'react';
import { VoiceRecognitionResult, VoiceAssistantStatus } from '../types/voice';

// Define the SpeechRecognition types since they're not in standard TypeScript definitions
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechGrammarList {
  addFromString: (string: string, weight?: number) => void;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  grammars: SpeechGrammarList;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: any) => void;
  onend: () => void;
  onstart: () => void;
  onnomatch: () => void;
  onaudioend: () => void;
  onaudiostart: () => void;
  onsoundend: () => void;
  onsoundstart: () => void;
  onspeechend: () => void;
  onspeechstart: () => void;
}

// Setup Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

export function useVoiceRecognition(onCommand: (transcript: string) => void) {
  const [status, setStatus] = useState<VoiceAssistantStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isListeningRef = useRef<boolean>(false);
  
  useEffect(() => {
    // Check if browser supports speech recognition
    if (!SpeechRecognition) {
      setErrorMessage('Speech recognition is not supported in this browser.');
      return;
    }
    
    // Initialize speech recognition
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      setStatus('listening');
      isListeningRef.current = true;
    };
    
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const resultIndex = event.resultIndex;
      const result = event.results[resultIndex][0];
      const currentTranscript = result.transcript.trim();
      
      setTranscript(currentTranscript);
      
      if (event.results[resultIndex].isFinal) {
        setStatus('processing');
        onCommand(currentTranscript);
      }
    };
    
    recognition.onerror = (event: any) => {
      setStatus('error');
      setErrorMessage(`Error: ${event.error}`);
      isListeningRef.current = false;
    };
    
    recognition.onend = () => {
      if (isListeningRef.current) {
        setStatus('idle');
      }
      isListeningRef.current = false;
    };
    
    recognitionRef.current = recognition;
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [onCommand]);
  
  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListeningRef.current) {
      try {
        recognitionRef.current.start();
        setErrorMessage(null);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        setErrorMessage('Failed to start speech recognition.');
        setStatus('error');
      }
    }
  }, []);
  
  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListeningRef.current) {
      recognitionRef.current.stop();
      setStatus('idle');
      isListeningRef.current = false;
    }
  }, []);
  
  return {
    startListening,
    stopListening,
    status,
    errorMessage,
    transcript,
    isListening: isListeningRef.current
  };
}