import React, { useState, useEffect } from 'react';
import { VoiceAssistantStatus } from '../types/voice';

interface VoiceAssistantFeedbackProps {
  status: VoiceAssistantStatus;
  transcript: string;
  suggestions: string[];
  errorMessage: string | null;
}

const VoiceAssistantFeedback: React.FC<VoiceAssistantFeedbackProps> = ({
  status,
  transcript,
  suggestions,
  errorMessage
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (status !== 'idle') {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-white rounded-lg shadow-lg p-4 z-50 transition-all duration-300">
      <div className="flex flex-col gap-2">
        {status === 'error' && errorMessage && (
          <div className="text-red-500 text-sm font-medium mb-2">
            {errorMessage}
          </div>
        )}
        
        {status === 'listening' && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Listening...</span>
          </div>
        )}
        
        {status === 'processing' && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Processing...</span>
          </div>
        )}
        
        {transcript && (
          <div className="bg-gray-100 p-3 rounded mb-3">
            <p className="text-gray-800">{transcript}</p>
          </div>
        )}
        
        {status === 'listening' && suggestions.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Try saying:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.slice(0, 5).map((suggestion, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {suggestion}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistantFeedback;