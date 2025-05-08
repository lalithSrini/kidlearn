import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface VoiceContextType {
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  transcript: string;
}

const VoiceContextInstance = createContext<VoiceContextType | null>(null);

export const useVoice = () => {
  const context = useContext(VoiceContextInstance);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
};

interface VoiceProviderProps {
  children: React.ReactNode;
}

interface NavigationCommand {
  path: string;
  section?: string;
}

const commandMap: Record<string, NavigationCommand> = {
  'go to home': { path: '/' },
  'show animals': { path: '/animals' },
  'show aquatic': { path: '/aquatic' },
  'show birds': { path: '/birds' },
  'show fruits': { path: '/fruits' },
  'show vegetables': { path: '/vegetables' },
  'show flowers': { path: '/flowers' },
  'show vehicles': { path: '/vehicles' },
  'show math': { path: '/math' },
  'show games': { path: '/games' },
  'show tests': { path: '/testing' },
  // Section-specific commands
  'show lions': { path: '/animals', section: 'lions' },
  'show endangered species': { path: '/animals', section: 'endangered-species' },
  'show reptiles': { path: '/animals', section: 'reptiles' },
  'show cheetah': { path: '/animals', section: 'cheetah' },
  'show monkey': { path: '/animals', section: 'monkey' },
  'show team': { path: '/about', section: 'team' },
  'show mission': { path: '/about', section: 'mission' },
  'show contact form': { path: '/contact', section: 'form' },
  'show locations': { path: '/contact', section: 'locations' },
  'show features': { path: '/', section: 'features' },
  'show testimonials': { path: '/', section: 'testimonials' }
};

export const VoiceContext: React.FC<VoiceProviderProps> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  // Initialize speech recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const speechRecognition = SpeechRecognition ? new SpeechRecognition() : null;

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toast.success(`Navigated to ${sectionId} section`);
      }
    }, 500);
  };

  const handleVoiceCommand = (transcriptText: string) => {
    const normalizedTranscript = transcriptText.toLowerCase().trim();
    
    let commandExecuted = false;
    
    Object.entries(commandMap).forEach(([command, { path, section }]) => {
      if (normalizedTranscript.includes(command)) {
        navigate(path);
        if (section) {
          scrollToSection(section);
        }
        commandExecuted = true;
        toast.success(`Navigating to ${command}`);
      }
    });

    if (!commandExecuted) {
      toast.info('Command not recognized. Try again.');
    }
  };

  useEffect(() => {
    if (speechRecognition) {
      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;
      speechRecognition.lang = 'en-US';

      speechRecognition.onstart = () => {
        setIsListening(true);
        toast.info('Listening...');
      };

      speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript(transcriptText);

        if (event.results[current].isFinal) {
          handleVoiceCommand(transcriptText);
        }
      };

      speechRecognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        toast.error('Error with speech recognition');
        setIsListening(false);
      };

      speechRecognition.onend = () => {
        if (isListening) {
          speechRecognition.start();
        }
      };
    } else {
      toast.error('Speech recognition is not supported in this browser');
    }

    return () => {
      if (speechRecognition) {
        speechRecognition.stop();
      }
    };
  }, [speechRecognition, navigate, isListening]);

  const startListening = useCallback(() => {
    if (speechRecognition) {
      try {
        speechRecognition.start();
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        toast.error('Failed to start speech recognition');
      }
    }
  }, [speechRecognition]);

  const stopListening = useCallback(() => {
    if (speechRecognition) {
      speechRecognition.stop();
      setIsListening(false);
      toast.info('Stopped listening');
    }
  }, [speechRecognition]);

  return (
    <VoiceContextInstance.Provider
      value={{
        isListening,
        startListening,
        stopListening,
        transcript,
      }}
    >
      {children}
    </VoiceContextInstance.Provider>
  );
};