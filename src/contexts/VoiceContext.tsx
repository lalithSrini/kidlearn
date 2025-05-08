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

// Dictionary of known section keywords and their destinations
const sectionKeywords: Record<string, NavigationCommand> = {
  // Animal sections
  'lion': { path: '/animals', section: 'lions' },
  'lions': { path: '/animals', section: 'lions' },
  'endangered': { path: '/animals', section: 'endangered-species' },
  'endangered species': { path: '/animals', section: 'endangered-species' },
  'reptile': { path: '/animals', section: 'reptiles' },
  'reptiles': { path: '/animals', section: 'reptiles' },
  'cheetah': { path: '/animals', section: 'cheethah' }, // Note: section ID matches the heading in the page
  'monkey': { path: '/animals', section: 'monkey' },
  
  // Aquatic life sections
  'ocean': { path: '/aquatic', section: 'ocean-ecosystems' },
  'coral': { path: '/aquatic', section: 'ocean-ecosystems' },
  'reef': { path: '/aquatic', section: 'ocean-ecosystems' },
  'marine mammals': { path: '/aquatic', section: 'marine-mammals' },
  'whale': { path: '/aquatic', section: 'marine-mammals' },
  'whales': { path: '/aquatic', section: 'marine-mammals' },
  'deep sea': { path: '/aquatic', section: 'deep-sea' },
  'frog': { path: '/aquatic', section: 'frogs' },
  'frogs': { path: '/aquatic', section: 'frogs' },
  'amphibian': { path: '/aquatic', section: 'frogs' },
  'amphibians': { path: '/aquatic', section: 'frogs' },
  'mollusk': { path: '/aquatic', section: 'mollusks' },
  'mollusks': { path: '/aquatic', section: 'mollusks' },
  'octopus': { path: '/aquatic', section: 'mollusks' },
  'echinoderm': { path: '/aquatic', section: 'echinoderms' },
  'echinoderms': { path: '/aquatic', section: 'echinoderms' },
  'sea urchin': { path: '/aquatic', section: 'echinoderms' },
  'sea urchins': { path: '/aquatic', section: 'echinoderms' },
  
  // Other page sections - add as needed for other pages
  'team': { path: '/about', section: 'team' },
  'mission': { path: '/about', section: 'mission' },
  'contact form': { path: '/contact', section: 'form' },
  'locations': { path: '/contact', section: 'locations' },
  'features': { path: '/', section: 'features' },
  'testimonials': { path: '/', section: 'testimonials' }
};

// Dictionary of page keywords
const pageKeywords: Record<string, string> = {
  'home': '/',
  'animal': '/animals',
  'animals': '/animals',
  'aquatic': '/aquatic',
  'bird': '/birds',
  'birds': '/birds',
  'fruit': '/fruits',
  'fruits': '/fruits',
  'vegetable': '/vegetables',
  'vegetables': '/vegetables',
  'flower': '/flowers',
  'flowers': '/flowers',
  'vehicle': '/vehicles',
  'vehicles': '/vehicles',
  'math': '/math',
  'game': '/games',
  'games': '/games',
  'test': '/testing',
  'testing': '/testing',
  'about': '/about',
  'contact': '/contact'
};

// Original command map for exact matches
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
  
  // Animal section commands
  'show lions': { path: '/animals', section: 'lions' },
  'show endangered species': { path: '/animals', section: 'endangered-species' },
  'show reptiles': { path: '/animals', section: 'reptiles' },
  'show cheetah': { path: '/animals', section: 'cheethah' },
  'show monkey': { path: '/animals', section: 'monkey' },
  
  // Aquatic section commands
  'show ocean ecosystems': { path: '/aquatic', section: 'ocean-ecosystems' },
  'show coral reefs': { path: '/aquatic', section: 'ocean-ecosystems' },
  'show marine mammals': { path: '/aquatic', section: 'marine-mammals' },
  'show whales': { path: '/aquatic', section: 'marine-mammals' },
  'show deep sea': { path: '/aquatic', section: 'deep-sea' },
  'show deep sea creatures': { path: '/aquatic', section: 'deep-sea' },
  'show frogs': { path: '/aquatic', section: 'frogs' },
  'show amphibians': { path: '/aquatic', section: 'frogs' },
  'show mollusks': { path: '/aquatic', section: 'mollusks' },
  'show octopus': { path: '/aquatic', section: 'mollusks' },
  'show echinoderms': { path: '/aquatic', section: 'echinoderms' },
  'show sea urchins': { path: '/aquatic', section: 'echinoderms' },
  
  // Other section commands
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
  const recognition = new SpeechRecognition();

  const scrollToSection = useCallback((sectionId: string) => {
    setTimeout(() => {
      // Find the section by looking for a heading with matching text first
      let element = document.getElementById(sectionId);
      
      // If no element found by ID, try finding headings with matching text
      if (!element) {
        const headings = document.querySelectorAll('h2, h3');
        for (const heading of headings) {
          // Case-insensitive comparison with section text
          if (heading.textContent && heading.textContent.toLowerCase().includes(sectionId.toLowerCase())) {
            element = heading;
            break;
          }
        }
      }
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight the section briefly to draw attention
        const originalBackground = element.style.backgroundColor || '';
        element.style.backgroundColor = '#FFEB3B';
        setTimeout(() => {
          element.style.backgroundColor = originalBackground;
        }, 2000);
      }
    }, 1000); // Delay to ensure page has loaded
  }, []);

  const handleVoiceCommand = useCallback((transcriptText: string) => {
    const normalizedTranscript = transcriptText.toLowerCase().trim();
    
    // Check for exact command matches first (most specific)
    for (const [command, { path, section }] of Object.entries(commandMap)) {
      if (normalizedTranscript.includes(command)) {
        navigate(path);
        toast.success(`Navigating to ${command}`);
        
        if (section) {
          scrollToSection(section);
        }
        return true;
      }
    }
    
    // Check for individual section keywords (second most specific)
    for (const [keyword, { path, section }] of Object.entries(sectionKeywords)) {
      const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (keywordRegex.test(normalizedTranscript)) {
        navigate(path);
        toast.success(`Navigating to ${keyword}`);
        scrollToSection(section);
        return true;
      }
    }
    
    // Check for page keywords (least specific)
    for (const [keyword, path] of Object.entries(pageKeywords)) {
      const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (keywordRegex.test(normalizedTranscript)) {
        navigate(path);
        toast.success(`Navigating to ${keyword}`);
        return true;
      }
    }
    
    // No match found
    toast.info('Command not recognized. Please try again.');
    return false;
  }, [navigate, scrollToSection]);

  useEffect(() => {
    if (!recognition) {
      toast.error('Speech recognition is not supported in this browser');
      return;
    }

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      toast.info('Listening...');
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = event.resultIndex;
      const transcriptText = event.results[current][0].transcript;
      setTranscript(transcriptText);

      if (event.results[current].isFinal) {
        handleVoiceCommand(transcriptText);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      toast.error('Error with speech recognition');
      setIsListening(false);
    };

    recognition.onend = () => {
      if (isListening) {
        try {
          recognition.start();
        } catch (error) {
          console.error('Error restarting recognition:', error);
        }
      }
    };

    return () => {
      recognition.stop();
    };
  }, [recognition, handleVoiceCommand, isListening]);

  const startListening = useCallback(() => {
    try {
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      toast.error('Failed to start speech recognition');
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    recognition.stop();
    setIsListening(false);
    toast.info('Stopped listening');
  }, [recognition]);

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