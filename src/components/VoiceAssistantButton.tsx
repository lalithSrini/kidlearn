import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { VoiceAssistantStatus } from '../types/voice';

interface VoiceAssistantButtonProps {
  status: VoiceAssistantStatus;
  onClick: () => void;
  className?: string;
}

const VoiceAssistantButton: React.FC<VoiceAssistantButtonProps> = ({ 
  status, 
  onClick, 
  className = '' 
}) => {
  const isActive = status === 'listening' || status === 'processing';
  
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center rounded-full p-3 transition-all duration-300
        ${isActive 
          ? 'bg-purple-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        ${className}
      `}
      aria-label={isActive ? 'Stop voice assistant' : 'Start voice assistant'}
    >
      {status === 'listening' && (
        <div className="absolute w-12 h-12 rounded-full bg-purple-400 opacity-75 animate-ping"></div>
      )}
      <div className="relative">
        {isActive ? <Mic size={24} /> : <MicOff size={24} />}
      </div>
    </button>
  );
};

export default VoiceAssistantButton;