// src/pages/TestingPage.tsx
import React, { useState, useEffect, useMemo } from 'react';
import Quiz from '../components/Quiz';
import { allQuestions, Question } from '../data/quizData';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { db} from '../firebase/config';

function TestingPage() {
  const { currentUser } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Memoize categories to prevent unnecessary recalculations
  const categories = useMemo(() => [
    'All Categories',
    ...Array.from(new Set(allQuestions.map((q) => q.category)))
  ], []);

  useEffect(() => {
    const fetchUserResults = async () => {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        // const results = await getUserExamResults(currentUser.uid);
        // setQuizScores(results);
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserResults();
  }, [currentUser]);

  useEffect(() => {
    if (!selectedCategory) return;

    // Optimize question selection by using memoization
    const getQuestions = () => {
      if (selectedCategory === 'All Categories') {
        // Pre-shuffle the questions once and take 20
        return [...allQuestions]
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
      } else {
        return allQuestions.filter((q) => q.category === selectedCategory);
      }
    };

    setCategoryQuestions(getQuestions());
  }, [selectedCategory]);

  const handleQuizComplete = async (score: number, timeTaken: number) => {
    if (!currentUser) {
      alert('Please log in to save your results');
      return;
    }

    // Store the quiz attempt in Firebase Realtime Database
    try {
      const userResultsRef = ref(db, `quiz-results/${currentUser.uid}`);
      await push(userResultsRef, {
        category: selectedCategory,
        score: score,
        timeTaken: timeTaken,
        timestamp: Date.now(),
        totalQuestions: categoryQuestions.length
      });
      
    } catch (error) {
      console.error('Error saving quiz results:', error);
      alert('Failed to save your results. Please try again.');
    }

  };

  const handleBack = () => {
    setSelectedCategory('');
  };

  // Show a better loading indicator
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
          <p className="text-gray-600">Loading your quiz data...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-700">Test Your Knowledge</h1>
        <p className="text-lg mb-6 text-gray-600">Log in to take quizzes and track your progress!</p>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
            Login
          </Link>
          <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Test Your Knowledge</h1>
        <div className="flex items-center gap-4">
          <Link to="/results" className="text-blue-600 hover:text-blue-800 font-medium">
            View My Results
          </Link>
          <p className="text-sm text-gray-500">
            Logged in as: <span className="font-semibold">{currentUser.email}</span>
          </p>
        </div>
      </div>

      {!selectedCategory ? (
        <>
          <div className="mb-6">
            <p className="text-lg text-blue-700 font-medium">
              All quizzes include a 30-minute timer
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="bg-white border border-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-1">{category}</h3>
                <p className="text-gray-600 text-sm">
                  {category === 'All Categories'
                    ? 'Comprehensive timed exam'
                    : `Focused exam on ${category}`}
                </p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button
            onClick={handleBack}
            className="mb-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Categories
          </button>

          <Quiz
            questions={categoryQuestions}
            category={selectedCategory}
            onComplete={handleQuizComplete}
            isExam={true} // Always in exam mode
          />
        </div>
      )}
    </div>
  );
}

export default TestingPage;