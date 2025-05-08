import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize the game
  useEffect(() => {
    initializeGame();
  }, []);

  // Check for matches when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      
      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        // Match found
        setCards(prevCards => 
          prevCards.map((card, index) => 
            index === firstIndex || index === secondIndex 
              ? { ...card, isMatched: true } 
              : card
          )
        );
      }
      
      // Reset flipped cards after a delay
      const timer = setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [flippedCards, cards]);

  // Check if all cards are matched
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameComplete(true);
    }
  }, [cards]);

  const initializeGame = () => {
    // Create pairs of emoji cards
    const cardPairs = [...emojis, ...emojis].map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    }));
    
    // Shuffle the cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setGameComplete(false);
  };

  const handleCardClick = (index: number) => {
    // Ignore clicks if already two cards flipped or card is already matched
    if (flippedCards.length === 2 || cards[index].isMatched || flippedCards.includes(index)) {
      return;
    }

    // Flip the card
    setCards(prevCards => 
      prevCards.map((card, i) => 
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    
    // Add to flipped cards
    setFlippedCards(prev => [...prev, index]);
    
    // Increment moves if this is the second card
    if (flippedCards.length === 1) {
      setMoves(prev => prev + 1);
    }
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <GameLayout 
      title="Memory Match"
      instructions="Flip cards to find matching pairs. Remember where each card is located to make matches with fewer moves."
    >
      <div className="text-center mb-4">
        <p className="text-lg font-bold text-primary-600">Moves: {moves}</p>
      </div>

      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
            whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
            className="aspect-square"
          >
            <div
              onClick={() => handleCardClick(index)}
              className={`w-full h-full rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center text-4xl ${
                card.isFlipped || card.isMatched
                  ? 'bg-white border-2 border-primary-300 shadow-md'
                  : 'bg-primary-500 shadow-lg'
              }`}
            >
              {(card.isFlipped || card.isMatched) && card.emoji}
            </div>
          </motion.div>
        ))}
      </div>
      
      {gameComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-success-600 mb-4">
            Congratulations! You completed the game in {moves} moves!
          </h3>
          <button 
            onClick={resetGame}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default MemoryGame;