import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  path: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, path, icon: Icon, color, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={path} className="block">
        <div className={`game-card ${color} h-full`}>
          <div className={`p-3 rounded-full bg-${color} bg-opacity-20 mb-2`}>
            <Icon size={36} className={`text-${color}`} />
          </div>
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;