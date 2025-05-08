import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameLayout from '../../components_game/common/GameLayout';
import { Star, Heart, Circle, Square, Triangle } from 'lucide-react';

interface Question {
  shape: React.ReactNode;
  count: number;
  options: number[];
}

const CountingGame: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Generate questions
  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const shapes = [
      (key: string) => <Star key={key} size={24} className="text-yellow-500" />,
      (key: string) => <Heart key={key} size={24} className="text-red-500" />,
      (key: string) => <Circle key={key} size={24} className="text-blue-500" />,
      (key: string) => <Square key={key} size={24} className="text-green-500" />,
      (key: string) => <Triangle key={key} size={24} className="text-purple-500" />
    ];
    
    const newQuestions: Question[] = [];
    
    for (let i = 0; i < 10; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const count = Math.floor(Math.random() * 7) + 1; // 1 to 7 shapes
      
      // Generate options (including the correct answer)
      let options = [count];
      while (options.length < 3) {
        const option = Math.floor(Math.random() * 10) + 1; // 1 to 10
        if (!options.includes(option)) {
          options.push(option);
        }
      }
      
      // Shuffle options
      options = options.sort(() => Math.random() - 0.5);
      
      newQuestions.push({
        shape: Array.from({ length: count }).map((_, index) => shape(`shape-${i}-${index}`)),
        count,
        options
      });
    }
    
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameComplete(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswerClick = (answer: number) => {
    if (selectedAnswer !== null) return; // Already answered
    
    const correctAnswer = questions[currentQuestionIndex].count;
    const correct = answer === correctAnswer;
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex >= questions.length - 1) {
        // Game over
        setGameComplete(true);
      } else {
        // Next question
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      }
    }, 1500);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <GameLayout 
      title="Counting Game"
      instructions="Count the shapes and click on the correct number."
    >
      {questions.length > 0 && !gameComplete && (
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-lg font-bold bg-primary-100 px-4 py-2 rounded-md">
              Question: <span className="text-primary-700">{currentQuestionIndex + 1}/{questions.length}</span>
            </div>
            <div className="text-lg font-bold bg-success-100 px-4 py-2 rounded-md">
              Score: <span className="text-success-700">{score}</span>
            </div>
          </div>
          
          <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold mb-6 text-primary-700">How many shapes do you see?</h3>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8 p-6 bg-gray-50 rounded-lg border-2 border-gray-200 max-w-md mx-auto">
              {currentQuestion.shape}
            </div>
            
            <div className="flex justify-center gap-4">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option}
                  className={`w-16 h-16 rounded-full text-2xl font-bold flex items-center justify-center ${
                    selectedAnswer === null
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : selectedAnswer === option
                        ? isCorrect
                          ? 'bg-success-500 text-white'
                          : 'bg-error-500 text-white'
                        : option === currentQuestion.count && selectedAnswer !== null
                          ? 'bg-success-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                  }`}
                  whileHover={{ scale: selectedAnswer === null ? 1.1 : 1 }}
                  whileTap={{ scale: selectedAnswer === null ? 0.95 : 1 }}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
      
      {gameComplete && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary-600 mb-4">
            Game Complete!
          </h3>
          <p className="text-lg mb-6">
            You scored <span className="font-bold text-success-600">{score}</span> out of <span className="font-bold">{questions.length}</span>!
          </p>
          <button 
            onClick={generateQuestions}
            className="btn btn-primary"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </GameLayout>
  );
};

export default CountingGame;