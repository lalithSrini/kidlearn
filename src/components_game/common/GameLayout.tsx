import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface GameLayoutProps {
  title: string;
  children: ReactNode;
  instructions?: string;
}

const GameLayout: React.FC<GameLayoutProps> = ({ title, children, instructions }) => {
  return (
    <motion.div 
      className="game-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="game-title">{title}</h2>
      
      {instructions && (
        <div className="bg-primary-50 p-4 rounded-lg mb-6 border border-primary-200">
          <h3 className="font-bold text-primary-700 mb-2">How to Play:</h3>
          <p className="text-primary-800">{instructions}</p>
        </div>
      )}
      
      <div className="mb-8">
        {children}
      </div>
      
      <div className="text-center mt-6">
        <Link to="/" className="inline-flex items-center gap-2 btn btn-primary">
          <Home size={18} />
          Back to Games
        </Link>
      </div>
    </motion.div>
  );
};

export default GameLayout;