import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

const colors = [
  '#ff0000', // Red
  '#ff9900', // Orange
  '#ffff00', // Yellow
  '#00ff00', // Green
  '#0099ff', // Blue
  '#6633ff', // Purple
  '#ff66cc', // Pink
  '#663300', // Brown
  '#000000', // Black
  '#ffffff', // White
];

const ColoringBook: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const [brushSize, setBrushSize] = useState(10);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      if (context) {
        // Fill with white background
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw a simple outline for coloring
        drawOutline(context, canvas.width, canvas.height);
        
        setCanvasLoaded(true);
      }
    }
  }, []);

  const drawOutline = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw a simple sun and house outline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    
    // Sun
    ctx.beginPath();
    ctx.arc(width * 0.8, height * 0.2, 40, 0, Math.PI * 2);
    ctx.stroke();
    
    // Sun rays
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const x1 = width * 0.8 + Math.cos(angle) * 40;
      const y1 = height * 0.2 + Math.sin(angle) * 40;
      const x2 = width * 0.8 + Math.cos(angle) * 60;
      const y2 = height * 0.2 + Math.sin(angle) * 60;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // House
    ctx.beginPath();
    // Main house square
    ctx.rect(width * 0.3, height * 0.5, width * 0.4, height * 0.3);
    ctx.stroke();
    
    // Roof
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.5);
    ctx.lineTo(width * 0.5, height * 0.3);
    ctx.lineTo(width * 0.7, height * 0.5);
    ctx.stroke();
    
    // Door
    ctx.beginPath();
    ctx.rect(width * 0.45, height * 0.65, width * 0.1, height * 0.15);
    ctx.stroke();
    
    // Window
    ctx.beginPath();
    ctx.rect(width * 0.55, height * 0.55, width * 0.1, height * 0.1);
    ctx.stroke();
    
    // Ground
    ctx.beginPath();
    ctx.moveTo(0, height * 0.85);
    ctx.lineTo(width, height * 0.85);
    ctx.stroke();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      context.strokeStyle = selectedColor;
      context.lineWidth = brushSize;
      context.lineCap = 'round';
      
      // Get coordinates
      let clientX, clientY;
      
      if ('touches' in e) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      context.beginPath();
      context.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Get coordinates
      let clientX, clientY;
      
      if ('touches' in e) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        e.preventDefault(); // Prevent scrolling on touch devices
      } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      context.lineTo(x, y);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Clear canvas
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Redraw outline
      drawOutline(context, canvas.width, canvas.height);
    }
  };

  const handleBrushSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrushSize(Number(e.target.value));
  };

  return (
    <GameLayout 
      title="Coloring Book"
      instructions="Select a color and brush size, then color the picture. You can clear the canvas to start over."
    >
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {colors.map((color) => (
            <motion.div
              key={color}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full cursor-pointer ${
                color === selectedColor ? 'ring-4 ring-primary-500' : ''
              }`}
              style={{ backgroundColor: color, border: '1px solid #ccc' }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="text-sm">Brush Size:</span>
          <input
            type="range"
            min="1"
            max="30"
            value={brushSize}
            onChange={handleBrushSizeChange}
            className="w-48"
          />
          <span className="text-sm">{brushSize}px</span>
        </div>
        
        <div className="text-center">
          <button 
            onClick={clearCanvas}
            className="btn btn-secondary text-sm"
          >
            Clear Canvas
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="w-full touch-none"
          style={{ height: '400px' }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
    </GameLayout>
  );
};

export default ColoringBook;