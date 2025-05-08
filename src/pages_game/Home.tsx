import React from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components_game/common/GameCard';
import { Brain, Hammer, Palette, Puzzle as PuzzlePiece, Moon as Balloon, Settings as AlphabetLatin, Calculator, Triangle, Star, Music } from 'lucide-react';

const Home_game: React.FC = () => {
  const games = [
    {
      title: 'Memory Match',
      path: '/memory-game',
      icon: Brain,
      color: 'text-primary-500',
      description: 'Find matching pairs of cards'
    },
    {
      title: 'Whack-A-Mole',
      path: '/whack-a-mole',
      icon: Hammer,
      color: 'text-accent-500',
      description: 'Tap the moles as they appear'
    },
    {
      title: 'Coloring Book',
      path: '/coloring-book',
      icon: Palette,
      color: 'text-secondary-500',
      description: 'Color fun pictures'
    },
    {
      title: 'Simple Puzzle',
      path: '/simple-puzzle',
      icon: PuzzlePiece,
      color: 'text-success-500',
      description: 'Solve picture puzzles'
    },
    {
      title: 'Balloon Pop',
      path: '/balloon-pop',
      icon: Balloon,
      color: 'text-error-500',
      description: 'Pop colorful balloons'
    },
    {
      title: 'Word Search',
      path: '/word-search',
      icon: AlphabetLatin,
      color: 'text-primary-700',
      description: 'Find hidden words'
    },
    {
      title: 'Counting Game',
      path: '/counting-game',
      icon: Calculator,
      color: 'text-warning-500',
      description: 'Count objects and learn numbers'
    },
    {
      title: 'Shape Sorter',
      path: '/shape-sorter',
      icon: Triangle,
      color: 'text-secondary-700',
      description: 'Match shapes to their spots'
    },
    {
      title: 'Catch Stars',
      path: '/catch-stars',
      icon: Star,
      color: 'text-accent-700',
      description: 'Catch falling stars'
    },
    {
      title: 'Animal Sounds',
      path: '/animal-sounds',
      icon: Music,
      color: 'text-success-700',
      description: 'Match animals to their sounds'
    }
  ];

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-primary-700 mb-3">Welcome to Kids Game Zone!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pick a fun game to play. Each game is designed to be simple, 
          fun, and help you learn while playing!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            path={game.path}
            icon={game.icon}
            color={game.color}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home_game;