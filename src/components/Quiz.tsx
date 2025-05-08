import React, { useState, useEffect } from 'react';
import { Question } from '../data/quizData';

interface QuizProps {
  questions: Question[];
  category: string;
  onComplete?: (score: number, timeTaken: number) => void;
  isExam?: boolean;
}

function Quiz({ questions, category, onComplete, isExam = false }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(isExam ? 30 * 60 : 0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  useEffect(() => {
    if (isExam && !isInitialized) {
      setStartTime(new Date());
      setIsInitialized(true);
    }
  }, [isExam, isInitialized]);

  useEffect(() => {
    if (isExam && timeLeft > 0 && !showScore) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (isExam && timeLeft === 0 && !showScore) {
      handleExamComplete();
    }
  }, [isExam, timeLeft, showScore]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerClick = (answer: string) => {
    const updatedAnswers = [...answers];
    const prevAnswer = answers[currentQuestion];
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (prevAnswer === correctAnswer) {
      if (answer !== correctAnswer) setScore(prev => prev - 1);
    } else {
      if (answer === correctAnswer) setScore(prev => prev + 1);
    }

    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setIsReadyToSubmit(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleExamComplete = () => {
    const end = new Date();
    const timeTaken =
      startTime
        ? Math.floor((end.getTime() - startTime.getTime()) / 1000)
        : 0;

    setEndTime(end);
    setShowScore(true);
    onComplete?.(score, timeTaken);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(isExam ? 30 * 60 : 0);
    setStartTime(null);
    setEndTime(null);
    setIsInitialized(false);
    setAnswers(Array(questions.length).fill(null));
    setIsReadyToSubmit(false);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const selectedAnswer = answers[currentQuestion];

  if (isExam && !isInitialized) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Starting Exam...</h3>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h3 className="text-2xl font-semibold mb-4">
        {isExam ? 'Exam Mode' : 'Test Your'} {category} Knowledge
      </h3>

      {isExam && !showScore && (
        <div className="mb-4 text-right">
          <span className="text-lg font-semibold">
            Time Remaining: {formatTime(timeLeft)}
          </span>
        </div>
      )}

      {showScore ? (
        <div className="text-center">
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}!
          </p>
          {isExam && (
            <div className="mb-4">
              <p className="text-lg">
                Time Taken:{' '}
                {formatTime(
                  endTime && startTime
                    ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
                    : 0
                )}
              </p>
              <p className="text-lg">
                Percentage: {((score / questions.length) * 100).toFixed(1)}%
              </p>
            </div>
          )}
          <button
            onClick={resetQuiz}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-4">
            Question {currentQuestion + 1} of {questions.length}
            {category === 'All Categories' && (
              <span className="ml-2 text-sm text-gray-500">
                (Category: {questions[currentQuestion].category})
              </span>
            )}
          </p>
          <p className="text-xl mb-6">{questions[currentQuestion].question}</p>

          {questions[currentQuestion].image && (
            <div className="mb-6 flex justify-center">
              <img
                src={questions[currentQuestion].image}
                alt="Question Visual"
                className="w-48 h-auto rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full text-left p-3 rounded-lg transition-colors border ${
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-lg ${
                currentQuestion === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Previous
            </button>

            {currentQuestion === questions.length - 1 ? (
              isReadyToSubmit ? (
                <button
                  onClick={handleExamComplete}
                  className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className={`px-4 py-2 rounded-lg ${
                    selectedAnswer
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              )
            ) : (
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`px-4 py-2 rounded-lg ${
                  selectedAnswer
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
