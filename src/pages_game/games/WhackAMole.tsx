import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

const WhackAMole: React.FC = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const moleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    showRandomMole();
  };

  useEffect(() => {
    if (gameActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setGameActive(false);
            setGameOver(true);
            clearInterval(moleTimerRef.current!);
            setActiveMole(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (moleTimerRef.current) clearInterval(moleTimerRef.current);
    };
  }, [gameActive]);

  const showRandomMole = () => {
    if (moleTimerRef.current) clearTimeout(moleTimerRef.current);
    
    // Hide current mole
    setActiveMole(null);
    
    // Show new mole after a small delay
    setTimeout(() => {
      if (!gameActive) return;
      
      const randomMole = Math.floor(Math.random() * 9);
      setActiveMole(randomMole);
      
      // Hide mole after random time
      moleTimerRef.current = setTimeout(() => {
        setActiveMole(null);
        showRandomMole();
      }, Math.random() * 1000 + 800); // Random time between 800ms and 1800ms
    }, 300);
  };

  const whackMole = (moleIndex: number) => {
    if (moleIndex === activeMole) {
      setScore(prev => prev + 1);
      setActiveMole(null);
      showRandomMole();
    }
  };

  return (
    <GameLayout 
      title="Whack-A-Mole"
      instructions="Click on the moles as they appear to score points. Be quick before they hide again!"
    >
      <div className="text-center mb-6">
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-lg font-bold bg-primary-100 px-4 py-2 rounded-md">
            Score: <span className="text-primary-700">{score}</span>
          </div>
          <div className="text-lg font-bold bg-accent-100 px-4 py-2 rounded-md">
            Time: <span className="text-accent-700">{timeLeft}s</span>
          </div>
        </div>
        
        {!gameActive && !gameOver && (
          <button 
            onClick={startGame}
            className="btn btn-primary"
          >
            Start Game
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={index}
            className="relative bg-accent-200 h-24 rounded-full overflow-hidden"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-accent-800 bottom-1/2 rounded-t-full"></div>
            {activeMole === index && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-16 flex justify-center"
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => whackMole(index)}
              >
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center cursor-pointer">
                  <div className="text-3xl">🐹</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      {gameOver && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-primary-600 mb-4">
            Game Over! Your score: {score}
          </h3>
          <button 
            onClick={startGame}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default WhackAMole;