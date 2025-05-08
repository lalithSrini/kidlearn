import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

interface PuzzlePiece {
  id: number;
  correctPosition: number;
  currentPosition: number;
}

// Image URL from Pexels
const imageUrl = 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=600';

const SimplePuzzle: React.FC = () => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium'>('easy');
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);

  // Initialize puzzle
  useEffect(() => {
    initializePuzzle();
  }, [difficulty]);

  // Check if puzzle is solved
  useEffect(() => {
    if (pieces.length > 0 && pieces.every(piece => piece.currentPosition === piece.correctPosition)) {
      setGameComplete(true);
    }
  }, [pieces]);

  const initializePuzzle = () => {
    const gridSize = difficulty === 'easy' ? 3 : 4;
    const totalPieces = gridSize * gridSize;
    
    // Create array of pieces with correct initial positions
    const initialPieces: PuzzlePiece[] = Array.from({ length: totalPieces }, (_, i) => ({
      id: i,
      correctPosition: i,
      currentPosition: i
    }));
    
    // Shuffle pieces
    const shuffledPieces = [...initialPieces];
    for (let i = shuffledPieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPieces[i].currentPosition, shuffledPieces[j].currentPosition] = 
      [shuffledPieces[j].currentPosition, shuffledPieces[i].currentPosition];
    }
    
    setPieces(shuffledPieces);
    setSelectedPiece(null);
    setGameComplete(false);
    setMoves(0);
  };

  const handlePieceClick = (id: number) => {
    if (gameComplete) return;
    
    if (selectedPiece === null) {
      // Select first piece
      setSelectedPiece(id);
    } else {
      // Swap pieces
      setPieces(prevPieces => {
        const newPieces = [...prevPieces];
        const piece1 = newPieces.find(p => p.id === selectedPiece)!;
        const piece2 = newPieces.find(p => p.id === id)!;
        
        // Swap current positions
        const temp = piece1.currentPosition;
        piece1.currentPosition = piece2.currentPosition;
        piece2.currentPosition = temp;
        
        return newPieces;
      });
      
      setSelectedPiece(null);
      setMoves(prev => prev + 1);
    }
  };

  const getPieceStyle = (piece: PuzzlePiece, gridSize: number) => {
    const size = 100 / gridSize;
    const row = Math.floor(piece.correctPosition / gridSize);
    const col = piece.correctPosition % gridSize;
    
    return {
      width: `${size}%`,
      height: `${size}%`,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: `${gridSize * 100}%`,
      backgroundPosition: `${col * 100 / (gridSize - 1)}% ${row * 100 / (gridSize - 1)}%`
    };
  };

  return (
    <GameLayout 
      title="Simple Puzzle"
      instructions="Click on two pieces to swap their positions. Try to arrange the picture correctly with the fewest moves."
    >
      <div className="text-center mb-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setDifficulty('easy')}
            className={`btn ${difficulty === 'easy' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Easy (3×3)
          </button>
          <button
            onClick={() => setDifficulty('medium')}
            className={`btn ${difficulty === 'medium' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Medium (4×4)
          </button>
        </div>
        
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-lg font-bold">
            Moves: <span className="text-primary-700">{moves}</span>
          </div>
          <button 
            onClick={initializePuzzle}
            className="btn btn-secondary"
          >
            Shuffle
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto aspect-square border-4 border-primary-600 rounded-lg overflow-hidden">
        <div className="relative w-full h-full">
          {pieces.sort((a, b) => a.currentPosition - b.currentPosition).map((piece) => {
            const gridSize = difficulty === 'easy' ? 3 : 4;
            const pieceSize = 100 / gridSize;
            const row = Math.floor(piece.currentPosition / gridSize);
            const col = piece.currentPosition % gridSize;
            
            return (
              <motion.div
                key={piece.id}
                className={`absolute cursor-pointer ${
                  selectedPiece === piece.id ? 'ring-4 ring-primary-500 z-10' : ''
                }`}
                style={{
                  ...getPieceStyle(piece, gridSize),
                  top: `${row * pieceSize}%`,
                  left: `${col * pieceSize}%`,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePieceClick(piece.id)}
              />
            );
          })}
        </div>
      </div>
      
      {gameComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-success-600 mb-4">
            Puzzle Solved in {moves} moves!
          </h3>
          <button 
            onClick={initializePuzzle}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default SimplePuzzle;