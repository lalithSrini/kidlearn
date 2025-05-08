import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

interface Balloon {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const colors = ['#ff0000', '#ff9900', '#ffff00', '#00ff00', '#0099ff', '#6633ff', '#ff66cc'];

const BalloonPop: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastBalloonAddedRef = useRef<number>(0);

  // Start the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setBalloons([]);
    setGameActive(true);
    setGameOver(false);
    lastBalloonAddedRef.current = Date.now();
  };

  // Game timer
  useEffect(() => {
    if (gameActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setGameActive(false);
            setGameOver(true);
            cancelAnimationFrame(frameRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [gameActive]);

  // Game animation loop
  useEffect(() => {
    if (!gameActive) return;
    
    const gameLoop = () => {
      // Add new balloons randomly
      const now = Date.now();
      if (now - lastBalloonAddedRef.current > 600) {
        addBalloon();
        lastBalloonAddedRef.current = now;
      }
      
      // Move balloons
      setBalloons(prevBalloons => 
        prevBalloons
          .map(balloon => ({
            ...balloon,
            y: balloon.y - balloon.speed
          }))
          .filter(balloon => balloon.y + balloon.size > 0) // Remove balloons that have gone off screen
      );
      
      frameRef.current = requestAnimationFrame(gameLoop);
    };
    
    frameRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [gameActive]);

  const addBalloon = () => {
    if (!gameAreaRef.current) return;
    
    const gameArea = gameAreaRef.current;
    const maxX = gameArea.clientWidth;
    
    const newBalloon: Balloon = {
      id: Date.now(),
      x: Math.random() * (maxX - 60),
      y: gameArea.clientHeight,
      size: Math.random() * 40 + 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1
    };
    
    setBalloons(prevBalloons => [...prevBalloons, newBalloon]);
  };

  const popBalloon = (id: number) => {
    setBalloons(prevBalloons => prevBalloons.filter(balloon => balloon.id !== id));
    setScore(prevScore => prevScore + 1);
  };

  return (
    <GameLayout 
      title="Balloon Pop"
      instructions="Pop as many balloons as you can before time runs out! Click on the balloons to pop them."
    >
      <div className="text-center mb-4">
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

      <div 
        ref={gameAreaRef}
        className="relative bg-gradient-to-b from-sky-200 to-sky-400 h-96 rounded-lg overflow-hidden border-2 border-primary-300"
      >
        {balloons.map(balloon => (
          <motion.div
            key={balloon.id}
            className="absolute cursor-pointer"
            style={{
              left: balloon.x,
              top: balloon.y,
              width: balloon.size,
              height: balloon.size * 1.2,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 1.2, opacity: 0 }}
            onClick={() => popBalloon(balloon.id)}
          >
            {/* Balloon */}
            <div 
              className="absolute w-full h-[83%] rounded-full" 
              style={{ backgroundColor: balloon.color }}
            ></div>
            {/* Balloon knot */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-[20%] rounded-full" 
              style={{ backgroundColor: balloon.color }}
            ></div>
            {/* String */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[15%] bg-gray-300"
            ></div>
          </motion.div>
        ))}
        
        {!gameActive && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
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
            Game Over! You popped {score} balloons!
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

export default BalloonPop;