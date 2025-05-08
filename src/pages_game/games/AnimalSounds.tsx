import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

interface Animal {
  id: number;
  name: string;
  image: string;
  sound: string;
  matched: boolean;
}

const animals = [
  {
    name: 'Dog',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Woof woof!'
  },
  {
    name: 'Cat',
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Meow meow!'
  },
  {
    name: 'Cow',
    image: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Moo moo!'
  },
  {
    name: 'Duck',
    image: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Quack quack!'
  },
  {
    name: 'Horse',
    image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Neigh neigh!'
  },
  {
    name: 'Pig',
    image: 'https://images.pexels.com/photos/51311/pig-piglet-small-pig-cute-51311.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Oink oink!'
  },
  {
    name: 'Sheep',
    image: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Baa baa!'
  },
  {
    name: 'Chicken',
    image: 'https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg?auto=compress&cs=tinysrgb&w=300',
    sound: 'Cluck cluck!'
  }
];

const AnimalSounds: React.FC = () => {
  const [animalImages, setAnimalImages] = useState<Animal[]>([]);
  const [animalSounds, setAnimalSounds] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [selectedSound, setSelectedSound] = useState<Animal | null>(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [matchResult, setMatchResult] = useState<'correct' | 'incorrect' | null>(null);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Select 4 random animals for the game
    const gameAnimals = [...animals].sort(() => Math.random() - 0.5).slice(0, 4);
    
    // Create animal images array
    const images = gameAnimals.map((animal, index) => ({
      id: index,
      name: animal.name,
      image: animal.image,
      sound: animal.sound,
      matched: false
    }));
    
    // Create animal sounds array
    const sounds = gameAnimals.map((animal, index) => ({
      id: index + 4, // offset IDs to avoid conflicts
      name: animal.name,
      image: animal.image,
      sound: animal.sound,
      matched: false
    }));
    
    // Shuffle both arrays
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    const shuffledSounds = [...sounds].sort(() => Math.random() - 0.5);
    
    setAnimalImages(shuffledImages);
    setAnimalSounds(shuffledSounds);
    setSelectedAnimal(null);
    setSelectedSound(null);
    setMatchedPairs(0);
    setGameComplete(false);
    setMatchResult(null);
  };

  // Check if game is complete
  useEffect(() => {
    if (animalImages.length > 0 && matchedPairs === animalImages.length) {
      setGameComplete(true);
    }
  }, [matchedPairs, animalImages.length]);

  const handleAnimalClick = (animal: Animal) => {
    if (animal.matched || selectedAnimal?.id === animal.id || matchResult) return;
    
    setSelectedAnimal(animal);
    
    // If a sound is already selected, check for a match
    if (selectedSound) {
      checkMatch(animal, selectedSound);
    }
  };

  const handleSoundClick = (sound: Animal) => {
    if (sound.matched || selectedSound?.id === sound.id || matchResult) return;
    
    setSelectedSound(sound);
    
    // If an animal is already selected, check for a match
    if (selectedAnimal) {
      checkMatch(selectedAnimal, sound);
    }
  };

  const checkMatch = (animal: Animal, sound: Animal) => {
    if (animal.name === sound.name) {
      // Match!
      setMatchResult('correct');
      
      setTimeout(() => {
        // Mark as matched
        setAnimalImages(prev => 
          prev.map(a => a.id === animal.id ? { ...a, matched: true } : a)
        );
        setAnimalSounds(prev => 
          prev.map(s => s.id === sound.id ? { ...s, matched: true } : s)
        );
        
        setMatchedPairs(prev => prev + 1);
        setSelectedAnimal(null);
        setSelectedSound(null);
        setMatchResult(null);
      }, 1000);
    } else {
      // No match
      setMatchResult('incorrect');
      
      setTimeout(() => {
        setSelectedAnimal(null);
        setSelectedSound(null);
        setMatchResult(null);
      }, 1000);
    }
  };

  return (
    <GameLayout 
      title="Animal Sounds"
      instructions="Match each animal to the sound it makes. Select an animal, then select the correct sound to make a match."
    >
      <div className="text-center mb-6">
        <div className="text-lg font-bold">
          Matches: <span className="text-primary-700">{matchedPairs}/{animalImages.length}</span>
        </div>
        
        {matchResult && (
          <div className={`mt-2 text-lg font-bold ${
            matchResult === 'correct' ? 'text-success-600' : 'text-error-600'
          }`}>
            {matchResult === 'correct' ? 'Correct match!' : 'Try again!'}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Animal images */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center text-primary-700">Animals</h3>
          <div className="grid grid-cols-2 gap-4">
            {animalImages.map((animal) => (
              <motion.div
                key={animal.id}
                className={`bg-white rounded-lg overflow-hidden cursor-pointer border-2 ${
                  animal.matched 
                    ? 'border-success-500' 
                    : selectedAnimal?.id === animal.id
                      ? 'border-primary-500'
                      : 'border-gray-200 hover:border-primary-300'
                }`}
                whileHover={{ scale: animal.matched ? 1 : 1.03 }}
                whileTap={{ scale: animal.matched ? 1 : 0.98 }}
                onClick={() => handleAnimalClick(animal)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-center font-bold">
                  {animal.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Animal sounds */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center text-primary-700">Sounds</h3>
          <div className="grid grid-cols-1 gap-4">
            {animalSounds.map((sound) => (
              <motion.div
                key={sound.id}
                className={`bg-white rounded-lg p-4 cursor-pointer border-2 ${
                  sound.matched 
                    ? 'border-success-500' 
                    : selectedSound?.id === sound.id
                      ? 'border-primary-500'
                      : 'border-gray-200 hover:border-primary-300'
                }`}
                whileHover={{ scale: sound.matched ? 1 : 1.02 }}
                whileTap={{ scale: sound.matched ? 1 : 0.98 }}
                onClick={() => handleSoundClick(sound)}
              >
                <div className="text-center text-xl font-bold">
                  {sound.sound}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {gameComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-success-600 mb-4">
            Great job! You matched all the animals with their sounds!
          </h3>
          <button 
            onClick={initializeGame}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default AnimalSounds;