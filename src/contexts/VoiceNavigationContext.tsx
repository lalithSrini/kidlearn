import React, { createContext, useContext, useState, useCallback } from 'react';
import { VoiceCommand, VoiceNavigationContextType } from '../types/voice';
import { matchVoiceCommand } from '../utils/voiceCommandMatcher';
import { useNavigate } from 'react-router-dom';

const VoiceNavigationContext = createContext<VoiceNavigationContextType | null>(null);

interface VoiceNavigationProviderProps {
  children: React.ReactNode;
}

export const VoiceNavigationProvider: React.FC<VoiceNavigationProviderProps> = ({ children }) => {
  const [commands, setCommands] = useState<VoiceCommand[]>([]);
  const navigate = useNavigate();

  const registerNavigationCommand = useCallback((command: VoiceCommand) => {
    setCommands(prevCommands => {
      // Don't add duplicate commands
      if (prevCommands.some(cmd => cmd.command === command.command)) {
        return prevCommands;
      }
      return [...prevCommands, command];
    });
  }, []);

  const unregisterNavigationCommand = useCallback((command: string) => {
    setCommands(prevCommands => 
      prevCommands.filter(cmd => cmd.command !== command)
    );
  }, []);

  const navigateToPage = useCallback((page: string) => {
    navigate(`/${page}`);
  }, [navigate]);

  const navigateToSection = useCallback((page: string, section: string) => {
    navigate(`/${page}`);
    
    // Give a small delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }, [navigate]);

  const executeVoiceCommand = useCallback((transcript: string) => {
    const matchedCommand = matchVoiceCommand(transcript, commands);
    if (matchedCommand) {
      matchedCommand.action();
      return true;
    }
    return false;
  }, [commands]);

  const value = {
    registerNavigationCommand,
    unregisterNavigationCommand,
    navigateToPage,
    navigateToSection,
    commands,
    executeVoiceCommand
  };

  return (
    <VoiceNavigationContext.Provider value={value}>
      {children}
    </VoiceNavigationContext.Provider>
  );
};

export const useVoiceNavigation = () => {
  const context = useContext(VoiceNavigationContext);
  if (!context) {
    throw new Error('useVoiceNavigation must be used within a VoiceNavigationProvider');
  }
  return context;
};