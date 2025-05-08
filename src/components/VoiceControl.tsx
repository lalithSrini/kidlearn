import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useVoice } from '../contexts/VoiceContext';
import { toast } from 'react-toastify';

const VoiceControl: React.FC = () => {
  const { isListening, startListening, stopListening, transcript } = useVoice();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isListening && !transcript) {
        setShowHint(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isListening, transcript]);

  useEffect(() => {
    if (transcript) {
      setShowHint(false);
    }
  }, [transcript]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
      setShowHint(false);
    } else {
      startListening();
      toast.info('Voice control activated');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
      {showHint && (
        <div className="bg-white p-3 rounded-lg shadow-lg mb-2 max-w-xs">
          <p className="text-sm text-gray-600">Try saying:</p>
          <ul className="text-xs text-gray-500 mt-1">
            <li>"Show animals"</li>
            <li>"Show lions"</li>
            <li>"Show team"</li>
          </ul>
        </div>
      )}
      {transcript && (
        <div className="bg-white p-2 rounded-lg shadow-lg mb-2 max-w-xs">
          <p className="text-sm text-gray-600">{transcript}</p>
        </div>
      )}
      <button
        onClick={toggleListening}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isListening ? (
          <MicOff className="h-6 w-6 text-white" />
        ) : (
          <Mic className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default VoiceControl;