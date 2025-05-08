import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-700 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-error-400 animate-pulse" /> for kids
        </p>
        <p className="text-sm mt-1 text-primary-200">© {year} Kids Game Zone</p>
      </div>
    </footer>
  );
};

export default Footer;