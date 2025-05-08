import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';

// Simple word list for kids
const wordSets = [
  ['CAT', 'DOG', 'PIG', 'COW', 'BIRD'],
  ['RED', 'BLUE', 'GREEN', 'PINK', 'YELLOW'],
  ['SUN', 'MOON', 'STAR', 'SKY', 'CLOUD'],
  ['BALL', 'DOLL', 'KITE', 'BIKE', 'BOOK']
];

interface Cell {
  row: number;
  col: number;
  letter: string;
  isSelected: boolean;
  isRevealed: boolean;
}

interface WordPlacement {
  word: string;
  cells: Cell[];
}

const WordSearch: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium'>('easy');
  const [hintUsed, setHintUsed] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  // Check if game is complete
  useEffect(() => {
    if (words.length > 0 && foundWords.length === words.length) {
      setGameComplete(true);
    }
  }, [foundWords, words]);

  const initializeGame = () => {
    const gridSize = difficulty === 'easy' ? 8 : 10;
    const wordSet = wordSets[Math.floor(Math.random() * wordSets.length)];
    
    // Create empty grid
    const newGrid: Cell[][] = Array(gridSize).fill(null).map((_, row) => 
      Array(gridSize).fill(null).map((_, col) => ({
        row,
        col,
        letter: '',
        isSelected: false,
        isRevealed: false
      }))
    );
    
    // Place words in the grid
    const placements: WordPlacement[] = [];
    const placedWords: string[] = [];
    
    // Try to place each word
    for (const word of wordSet) {
      const placement = placeWord(newGrid, word);
      if (placement) {
        placements.push(placement);
        placedWords.push(word);
        
        // Update grid with placed word
        for (const cell of placement.cells) {
          newGrid[cell.row][cell.col].letter = cell.letter;
        }
      }
      
      // Stop after placing 5 words
      if (placedWords.length >= 5) break;
    }
    
    // Fill empty cells with random letters
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (!newGrid[row][col].letter) {
          newGrid[row][col].letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }
    
    setGrid(newGrid);
    setWords(placedWords);
    setFoundWords([]);
    setSelectedCells([]);
    setGameComplete(false);
    setHintUsed(false);
  };

  const placeWord = (grid: Cell[][], word: string): WordPlacement | null => {
    const gridSize = grid.length;
    const directions = [
      [0, 1],   // right
      [1, 0],   // down
      [1, 1],   // diagonal down-right
      [-1, 1],  // diagonal up-right
      [1, -1],  // diagonal down-left
    ];
    
    // Try 20 random positions
    for (let attempt = 0; attempt < 20; attempt++) {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const [dx, dy] = direction;
      
      const startRow = Math.floor(Math.random() * gridSize);
      const startCol = Math.floor(Math.random() * gridSize);
      
      // Check if word fits at this position
      let fits = true;
      const cells: Cell[] = [];
      
      for (let i = 0; i < word.length; i++) {
        const row = startRow + i * dx;
        const col = startCol + i * dy;
        
        // Check if out of bounds
        if (row < 0 || row >= gridSize || col < 0 || col >= gridSize) {
          fits = false;
          break;
        }
        
        // Check if cell is already occupied with a different letter
        if (grid[row][col].letter && grid[row][col].letter !== word[i]) {
          fits = false;
          break;
        }
        
        cells.push({
          row,
          col,
          letter: word[i],
          isSelected: false,
          isRevealed: false
        });
      }
      
      if (fits) {
        return { word, cells };
      }
    }
    
    return null; // Could not place word
  };

  const handleCellClick = (row: number, col: number) => {
    if (gameComplete) return;
    
    const cell = grid[row][col];
    
    // If no cells selected yet, select this one
    if (selectedCells.length === 0) {
      setSelectedCells([cell]);
      setGrid(prevGrid => {
        const newGrid = [...prevGrid];
        newGrid[row][col] = { ...cell, isSelected: true };
        return newGrid;
      });
      return;
    }
    
    // If this cell is already selected, deselect it if it's the last one
    if (selectedCells.some(c => c.row === row && c.col === col)) {
      if (selectedCells[selectedCells.length - 1].row === row && selectedCells[selectedCells.length - 1].col === col) {
        // Remove last cell
        const newSelected = selectedCells.slice(0, -1);
        setSelectedCells(newSelected);
        
        setGrid(prevGrid => {
          const newGrid = [...prevGrid];
          newGrid[row][col] = { ...cell, isSelected: false };
          return newGrid;
        });
      }
      return;
    }
    
    // Check if this is a valid next cell (adjacent to last selected)
    const lastCell = selectedCells[selectedCells.length - 1];
    const rowDiff = Math.abs(lastCell.row - row);
    const colDiff = Math.abs(lastCell.col - col);
    
    // Must be adjacent in some direction (including diagonals)
    if (rowDiff > 1 || colDiff > 1) return;
    
    // Must continue in the same direction if more than one cell selected
    if (selectedCells.length > 1) {
      const prevCell = selectedCells[selectedCells.length - 2];
      const prevRowDiff = lastCell.row - prevCell.row;
      const prevColDiff = lastCell.col - prevCell.col;
      const currRowDiff = row - lastCell.row;
      const currColDiff = col - lastCell.col;
      
      // Check if same direction
      if (prevRowDiff !== currRowDiff || prevColDiff !== currColDiff) return;
    }
    
    // Add to selected cells
    const newSelected = [...selectedCells, cell];
    setSelectedCells(newSelected);
    
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = { ...cell, isSelected: true };
      return newGrid;
    });
    
    // Check if a word is formed
    const selectedWord = newSelected.map(c => c.letter).join('');
    if (words.includes(selectedWord) && !foundWords.includes(selectedWord)) {
      // Word found!
      setFoundWords(prev => [...prev, selectedWord]);
      
      // Mark cells as revealed
      setGrid(prevGrid => {
        const newGrid = [...prevGrid.map(row => [...row])];
        for (const cell of newSelected) {
          newGrid[cell.row][cell.col] = { 
            ...newGrid[cell.row][cell.col], 
            isSelected: false,
            isRevealed: true 
          };
        }
        return newGrid;
      });
      
      // Clear selected cells
      setSelectedCells([]);
    }
  };

  const clearSelection = () => {
    setSelectedCells([]);
    setGrid(prevGrid => {
      const newGrid = [...prevGrid.map(row => [...row])];
      for (let row = 0; row < newGrid.length; row++) {
        for (let col = 0; col < newGrid[row].length; col++) {
          if (newGrid[row][col].isSelected && !newGrid[row][col].isRevealed) {
            newGrid[row][col] = { ...newGrid[row][col], isSelected: false };
          }
        }
      }
      return newGrid;
    });
  };

  const showHint = () => {
    if (gameComplete || hintUsed || foundWords.length >= words.length) return;
    
    // Find a word that hasn't been found yet
    const remainingWords = words.filter(word => !foundWords.includes(word));
    if (remainingWords.length === 0) return;
    
    const wordToHint = remainingWords[0];
    
    // Highlight the first letter of the word
    setGrid(prevGrid => {
      const newGrid = [...prevGrid.map(row => [...row])];
      
      // Find the first letter of the word
      for (let row = 0; row < newGrid.length; row++) {
        for (let col = 0; col < newGrid[row].length; col++) {
          if (newGrid[row][col].letter === wordToHint[0]) {
            // Check if this is actually the start of the word
            for (const [dx, dy] of [[0, 1], [1, 0], [1, 1], [-1, 1], [1, -1]]) {
              let isWordStart = true;
              
              for (let i = 1; i < wordToHint.length; i++) {
                const newRow = row + i * dx;
                const newCol = col + i * dy;
                
                if (
                  newRow < 0 || 
                  newRow >= newGrid.length || 
                  newCol < 0 || 
                  newCol >= newGrid[row].length || 
                  newGrid[newRow][newCol].letter !== wordToHint[i]
                ) {
                  isWordStart = false;
                  break;
                }
              }
              
              if (isWordStart) {
                // This is a valid word start - highlight first two letters
                newGrid[row][col] = { 
                  ...newGrid[row][col], 
                  isSelected: true
                };
                
                const nextRow = row + dx;
                const nextCol = col + dy;
                if (
                  nextRow >= 0 && 
                  nextRow < newGrid.length && 
                  nextCol >= 0 && 
                  nextCol < newGrid[row].length
                ) {
                  newGrid[nextRow][nextCol] = { 
                    ...newGrid[nextRow][nextCol], 
                    isSelected: true
                  };
                }
                
                setSelectedCells([
                  newGrid[row][col],
                  newGrid[nextRow][nextCol]
                ]);
                
                setHintUsed(true);
                return newGrid;
              }
            }
          }
        }
      }
      
      return newGrid;
    });
  };

  return (
    <GameLayout 
      title="Word Search"
      instructions="Find the hidden words in the grid. Click and drag to select letters in a straight line."
    >
      <div className="text-center mb-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setDifficulty('easy')}
            className={`btn ${difficulty === 'easy' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Easy (8×8)
          </button>
          <button
            onClick={() => setDifficulty('medium')}
            className={`btn ${difficulty === 'medium' ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Medium (10×10)
          </button>
        </div>
        
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={clearSelection}
            className="btn btn-secondary text-sm"
            disabled={selectedCells.length === 0}
          >
            Clear Selection
          </button>
          <button 
            onClick={showHint}
            className="btn btn-accent text-sm"
            disabled={hintUsed || gameComplete}
          >
            Hint
          </button>
          <button 
            onClick={initializeGame}
            className="btn bg-gray-200 hover:bg-gray-300 text-sm"
          >
            New Game
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Word list */}
        <div className="w-full md:w-1/3">
          <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
            <h3 className="font-bold text-primary-700 mb-2">Words to Find:</h3>
            <ul className="space-y-2">
              {words.map((word) => (
                <li 
                  key={word}
                  className={`text-lg font-medium p-2 rounded ${
                    foundWords.includes(word) 
                      ? 'bg-success-100 text-success-700 line-through' 
                      : 'text-primary-800'
                  }`}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid gap-1 mx-auto" style={{ 
            gridTemplateColumns: `repeat(${grid.length}, 1fr)` 
          }}>
            {grid.flat().map((cell, index) => (
              <motion.div
                key={index}
                className={`aspect-square flex items-center justify-center cursor-pointer text-lg font-bold rounded ${
                  cell.isRevealed 
                    ? 'bg-success-200 text-success-800' 
                    : cell.isSelected 
                      ? 'bg-primary-300 text-primary-800'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCellClick(cell.row, cell.col)}
              >
                {cell.letter}
              </motion.div>
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
            Congratulations! You found all the words!
          </h3>
          <button 
            onClick={initializeGame}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default WordSearch;