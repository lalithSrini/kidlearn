import React from 'react';

export interface QuizScoreData {
  category: string;
  score: number;
  totalQuestions: number;
  date: string;
  timeTaken?: number;
  isExam?: boolean;
}

interface QuizScoreProps {
  scores: QuizScoreData[];
}

function QuizScore({ scores }: QuizScoreProps) {
  const examScores = scores.filter(score => score.isExam);
  const quizScores = scores.filter(score => !score.isExam);

  const renderScoreTable = (scores: QuizScoreData[], title: string) => {
    if (scores.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Score</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Percentage</th>
                {title === 'Exam History' && (
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Time Taken</th>
                )}
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 text-sm text-gray-700">{score.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{score.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {score.score} / {score.totalQuestions}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {((score.score / score.totalQuestions) * 100).toFixed(1)}%
                  </td>
                  {title === 'Exam History' && score.timeTaken && (
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {Math.floor(score.timeTaken / 60)}:{(score.timeTaken % 60).toString().padStart(2, '0')}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {renderScoreTable(examScores, 'Exam History')}
      {renderScoreTable(quizScores, 'Quiz History')}
    </div>
  );
}

export default QuizScore;