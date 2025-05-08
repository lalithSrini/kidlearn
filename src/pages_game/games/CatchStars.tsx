import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';
import { Star } from 'lucide-react';

interface FallingStar {
  id: number;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  size: number;
  color: string;
}

const CatchStars: React.FC = () => {
  const [stars, setStars] = useState<FallingStar[]>([]);
  const [basketPosition, setBasketPosition] = useState(50);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const lastStarAddedRef = useRef(0);
  const speedMultiplierRef = useRef(1);
  
  const colors = ['#f59e0b', '#d946ef', '#3b82f6', '#ef4444', '#22c55e'];

  // Start the game
  const startGame = () => {
    setStars([]);
    setScore(0);
    setLives(3);
    setGameActive(true);
    setGameOver(false);
    speedMultiplierRef.current = 1;
    lastStarAddedRef.current = 0;
  };

  // Game animation loop
  useEffect(() => {
    if (!gameActive) return;
    
    const gameLoop = (timestamp: number) => {
      // Add new stars occasionally
      if (timestamp - lastStarAddedRef.current > 800) {
        addStar();
        lastStarAddedRef.current = timestamp;
      }
      
      // Update star positions
      setStars(prevStars => {
        const gameHeight = gameAreaRef.current?.clientHeight || 400;
        const newStars = prevStars.map(star => ({
          ...star,
          y: star.y + star.speed * speedMultiplierRef.current
        }));
        
        // Check for stars that reached bottom
        const bottomStars = newStars.filter(star => star.y > gameHeight);
        
        // Check if any stars were caught
        const caughtStars = bottomStars.filter(star => {
          const basketWidth = 80;
          const starCenterX = star.x + star.size / 2;
          const basketLeft = (basketPosition * gameAreaRef.current!.clientWidth) / 100 - basketWidth / 2;
          const basketRight = basketLeft + basketWidth;
          
          return starCenterX >= basketLeft && starCenterX <= basketRight;
        });
        
        // Update score for caught stars
        setScore(prev => prev + caughtStars.length);
        
        // Update lives for missed stars
        const missedStars = bottomStars.length - caughtStars.length;
        if (missedStars > 0) {
          setLives(prev => {
            const newLives = prev - missedStars;
            if (newLives <= 0) {
              setGameActive(false);
              setGameOver(true);
              return 0;
            }
            return newLives;
          });
        }
        
        // Increase difficulty over time
        speedMultiplierRef.current += 0.0002;
        
        // Remove stars that reached bottom
        return newStars.filter(star => star.y <= gameHeight);
      });
      
      requestRef.current = requestAnimationFrame(gameLoop);
    };
    
    requestRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [gameActive, basketPosition]);

  const addStar = () => {
    if (!gameAreaRef.current) return;
    
    const gameWidth = gameAreaRef.current.clientWidth;
    const starSize = Math.random() * 20 + 30; // 30-50px
    
    const newStar: FallingStar = {
      id: Date.now(),
      x: Math.random() * (gameWidth - starSize),
      y: -starSize,
      speed: Math.random() * 2 + 2, // 2-4px per frame
      rotation: Math.random() * 360,
      size: starSize,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    
    setStars(prevStars => [...prevStars, newStar]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gameAreaRef.current || !gameActive) return;
    
    const gameWidth = gameAreaRef.current.clientWidth;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    // Convert to percentage of game width
    const newPosition = (mouseX / gameWidth) * 100;
    setBasketPosition(Math.max(10, Math.min(90, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!gameAreaRef.current || !gameActive) return;
    
    const gameWidth = gameAreaRef.current.clientWidth;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    
    // Convert to percentage of game width
    const newPosition = (touchX / gameWidth) * 100;
    setBasketPosition(Math.max(10, Math.min(90, newPosition)));
  };

  return (
    <GameLayout 
      title="Catch the Stars"
      instructions="Move the basket left and right to catch falling stars. Don't let them hit the ground!"
    >
      <div className="text-center mb-4">
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-lg font-bold bg-primary-100 px-4 py-2 rounded-md">
            Score: <span className="text-primary-700">{score}</span>
          </div>
          <div className="text-lg font-bold bg-accent-100 px-4 py-2 rounded-md">
            Lives: <span className="text-accent-700">{lives}</span>
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

      <div 
        ref={gameAreaRef}
        className="relative bg-gradient-to-b from-blue-900 to-purple-900 h-96 rounded-lg overflow-hidden border-2 border-primary-300"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Stars */}
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              transform: `rotate(${star.rotation}deg)`,
              color: star.color
            }}
            animate={{ rotate: star.rotation + 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Star size={star.size} fill={star.color} />
          </motion.div>
        ))}
        
        {/* Basket */}
        <div 
          className="absolute bottom-0"
          style={{ 
            left: `calc(${basketPosition}% - 40px)`,
            transition: 'left 0.1s ease-out'
          }}
        >
          <div className="w-80 h-16 flex justify-center">
            <div className="w-60 h-12 bg-accent-500 rounded-t-3xl border-t-2 border-l-2 border-r-2 border-accent-300"></div>
          </div>
        </div>
        
        {!gameActive && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="text-3xl font-bold text-white shadow-lg">Click Start to Play</div>
          </div>
        )}
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

export default CatchStars;