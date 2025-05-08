import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';
import { Circle, Square, Triangle, Star, Heart } from 'lucide-react';

interface Shape {
  id: string;
  type: string;
  color: string;
  placed: boolean;
}

const ShapeSorter: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [draggedShape, setDraggedShape] = useState<string | null>(null);
  const [droppedCount, setDroppedCount] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium'>('easy');

  // Initialize game
  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const resetGame = () => {
    const shapeTypes = ['circle', 'square', 'triangle', 'star', 'heart'];
    const colors = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#d946ef'];
    
    const shapeCount = difficulty === 'easy' ? 5 : 10;
    const newShapes: Shape[] = [];
    
    for (let i = 0; i < shapeCount; i++) {
      const typeIndex = i % shapeTypes.length;
      const colorIndex = i % colors.length;
      
      newShapes.push({
        id: `shape-${i}`,
        type: shapeTypes[typeIndex],
        color: colors[colorIndex],
        placed: false
      });
    }
    
    // Shuffle shapes
    const shuffledShapes = [...newShapes].sort(() => Math.random() - 0.5);
    
    setShapes(shuffledShapes);
    setDraggedShape(null);
    setDroppedCount(0);
    setGameComplete(false);
  };

  // Check if game is complete
  useEffect(() => {
    if (shapes.length > 0 && droppedCount === shapes.length) {
      setGameComplete(true);
    }
  }, [droppedCount, shapes.length]);

  const handleDragStart = (id: string) => {
    setDraggedShape(id);
  };

  const handleDragEnd = () => {
    setDraggedShape(null);
  };

  const handleDrop = (targetType: string) => {
    if (!draggedShape) return;
    
    const draggedShapeObj = shapes.find(shape => shape.id === draggedShape);
    if (!draggedShapeObj || draggedShapeObj.placed) return;
    
    if (draggedShapeObj.type === targetType) {
      // Correct drop
      setShapes(prevShapes => 
        prevShapes.map(shape => 
          shape.id === draggedShape ? { ...shape, placed: true } : shape
        )
      );
      setDroppedCount(prev => prev + 1);
    }
  };

  const getShapeIcon = (type: string, color: string, size: number = 40) => {
    switch (type) {
      case 'circle':
        return <Circle size={size} color={color} />;
      case 'square':
        return <Square size={size} color={color} />;
      case 'triangle':
        return <Triangle size={size} color={color} />;
      case 'star':
        return <Star size={size} color={color} />;
      case 'heart':
        return <Heart size={size} color={color} />;
      default:
        return null;
    }
  };

  return (
    <GameLayout 
      title="Shape Sorter"
      instructions="Drag each shape to its matching outline. Match all shapes to complete the game."
    >
      <div className="text-center mb-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setDifficulty('easy')}
            className={`btn ${difficulty === 'easy' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Easy (5 Shapes)
          </button>
          <button
            onClick={() => setDifficulty('medium')}
            className={`btn ${difficulty === 'medium' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Medium (10 Shapes)
          </button>
        </div>
        
        <div className="text-lg font-bold">
          Placed: <span className="text-primary-700">{droppedCount}/{shapes.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shape targets */}
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center text-primary-700">Drop Shapes Here</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center aspect-square"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('circle')}
            >
              <Circle size={60} className="text-gray-300" />
            </div>
            
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center aspect-square"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('square')}
            >
              <Square size={60} className="text-gray-300" />
            </div>
            
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center aspect-square"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('triangle')}
            >
              <Triangle size={60} className="text-gray-300" />
            </div>
            
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center aspect-square"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('star')}
            >
              <Star size={60} className="text-gray-300" />
            </div>
            
            <div 
              className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center aspect-square"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('heart')}
            >
              <Heart size={60} className="text-gray-300" />
            </div>
          </div>
        </div>
        
        {/* Draggable shapes */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center text-primary-700">Drag Shapes</h3>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {shapes.map((shape) => (
              !shape.placed && (
                <motion.div
                  key={shape.id}
                  className="cursor-grab active:cursor-grabbing"
                  whileHover={{ scale: 1.1 }}
                  whileDrag={{ scale: 1.1 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  onDragStart={() => handleDragStart(shape.id)}
                  onDragEnd={handleDragEnd}
                  draggable="true"
                  onDragOver={(e) => e.preventDefault()}
                >
                  {getShapeIcon(shape.type, shape.color, 50)}
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {gameComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-bold text-success-600 mb-4">
            Great job! You sorted all the shapes!
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

export default ShapeSorter;