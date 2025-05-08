import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="text-primary-600 bg-primary-100 p-2 rounded-full">
              <Home size={24} />
            </span>
            <h1 className="text-2xl font-bold text-primary-700">Kids Game Zone</h1>
          </Link>
        </motion.div>
        
        {!isHomePage && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="btn btn-primary text-sm"
            >
              Back to Games
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;