// src/pages/ResultsPage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

interface QuizResult {
  id: string;
  category: string;
  score: number;
  timeTaken: number; // in seconds
  timestamp: number;
  totalQuestions: number;
}

function ResultsPage() {
  const { currentUser } = useAuth();
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    // Reference to the user's quiz results in Firebase
    const resultsRef = ref(db, `quiz-results/${currentUser.uid}`);
    
    // Set up a real-time listener for quiz results
    const unsubscribe = onValue(resultsRef, (snapshot) => {
      if (snapshot.exists()) {
        const resultsData = snapshot.val();
        const formattedResults: QuizResult[] = Object.keys(resultsData).map((key) => ({
          id: key,
          ...resultsData[key]
        }));
        
        // Sort results by timestamp (newest first)
        formattedResults.sort((a, b) => b.timestamp - a.timestamp);
        setResults(formattedResults);
      } else {
        setResults([]);
      }
      setLoading(false);
    });

    // Clean up listener on unmount
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  // Filter results by category
  const filteredResults = filter === 'all' 
    ? results 
    : results.filter(result => result.category === filter);

  // Get unique categories for filter
  const categories = ['all', ...new Set(results.map(result => result.category))];

  // Format timestamp to readable date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  // Format time taken in seconds to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-700">Quiz Results</h1>
        <p className="text-lg mb-6 text-gray-600">Please log in to view your quiz results.</p>
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Quiz Results</h1>
        <Link to="/testing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all">
          Take Another Quiz
        </Link>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-400 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Quiz Results Yet</h2>
          <p className="text-gray-600 mb-6">Take your first quiz to start tracking your progress!</p>
          <Link to="/testing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
            Start a Quiz
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center gap-4">
            <label htmlFor="filter" className="font-medium text-gray-700">Filter by Category:</label>
            <select 
              id="filter" 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Taken</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredResults.map((result) => (
                    <tr key={result.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(result.timestamp)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {result.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {result.score} / {result.totalQuestions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                (result.score / result.totalQuestions) >= 0.7 
                                  ? 'bg-green-600' 
                                  : (result.score / result.totalQuestions) >= 0.4 
                                    ? 'bg-yellow-500' 
                                    : 'bg-red-600'
                              }`} 
                              style={{ width: `${(result.score / result.totalQuestions) * 100}%` }}
                            />
                          </div>
                          <span className="ml-3 text-sm font-medium">
                            {Math.round((result.score / result.totalQuestions) * 100)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatTime(result.timeTaken)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ResultsPage;