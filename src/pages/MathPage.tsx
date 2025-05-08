import React, { useState } from 'react';
import * as math from 'mathjs';

const MathPage: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('calculator');

  const calculateResult = () => {
    try {
      const calculatedResult = math.evaluate(expression);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error: Invalid expression');
    }
  };

  const renderCalculator = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>
      <div className="mb-4">
        <label htmlFor="expression" className="block text-sm font-medium text-gray-700 mb-1">
          Enter a mathematical expression:
        </label>
        <input
          type="text"
          id="expression"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="e.g., 2 + 2 * 3"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={calculateResult}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4">
          <p className="text-lg font-medium">Result: {result}</p>
        </div>
      )}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Supported operations:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Addition: 2 + 2</li>
          <li>Subtraction: 5 - 3</li>
          <li>Multiplication: 4 * 3</li>
          <li>Division: 10 / 2</li>
          <li>Exponents: 2^3 or 2**3</li>
          <li>Parentheses: 2 * (3 + 4)</li>
          <li>Functions: sin(π/2), cos(0), sqrt(16)</li>
        </ul>
      </div>
    </div>
  );

  const renderBasicMath = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Basic Math Concepts</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Addition and Subtraction</h3>
          <p className="mb-2">
            Addition (+) combines numbers to find their sum, while subtraction (-) finds the difference between numbers.
          </p>
          <div className="bg-blue-50 p-3 rounded-md">
            <p><strong>Example:</strong> 5 + 3 = 8, 10 - 4 = 6</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Multiplication and Division</h3>
          <p className="mb-2">
            Multiplication (×) adds a number to itself multiple times, while division (÷) splits a number into equal parts.
          </p>
          <div className="bg-blue-50 p-3 rounded-md">
            <p><strong>Example:</strong> 4 × 3 = 12, 15 ÷ 3 = 5</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Order of Operations (PEMDAS)</h3>
          <p className="mb-2">
            PEMDAS defines the order in which operations should be performed:
          </p>
          <ul className="list-disc pl-5 mb-2">
            <li>Parentheses</li>
            <li>Exponents</li>
            <li>Multiplication and Division (from left to right)</li>
            <li>Addition and Subtraction (from left to right)</li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md">
            <p><strong>Example:</strong> 2 + 3 × 4 = 2 + 12 = 14</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGeometry = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Geometry</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Area Formulas</h3>
          <ul className="list-disc pl-5 mb-2">
            <li>Square: side² = s²</li>
            <li>Rectangle: length × width = l × w</li>
            <li>Circle: π × radius² = πr²</li>
            <li>Triangle: ½ × base × height = ½bh</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Perimeter Formulas</h3>
          <ul className="list-disc pl-5 mb-2">
            <li>Square: 4 × side = 4s</li>
            <li>Rectangle: 2 × (length + width) = 2(l + w)</li>
            <li>Circle (circumference): 2 × π × radius = 2πr</li>
            <li>Triangle: side1 + side2 + side3 = a + b + c</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Volume Formulas</h3>
          <ul className="list-disc pl-5 mb-2">
            <li>Cube: side³ = s³</li>
            <li>Rectangular Prism: length × width × height = l × w × h</li>
            <li>Sphere: (4/3) × π × radius³ = (4/3)πr³</li>
            <li>Cylinder: π × radius² × height = πr²h</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Math Learning Center</h1>
      
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTopic('calculator')}
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'calculator' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Calculator
          </button>
          <button
            onClick={() => setSelectedTopic('basic')}
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'basic' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Basic Math
          </button>
          <button
            onClick={() => setSelectedTopic('geometry')}
            className={`px-4 py-2 rounded-md ${
              selectedTopic === 'geometry' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Geometry
          </button>
        </div>
      </div>

      {selectedTopic === 'calculator' && renderCalculator()}
      {selectedTopic === 'basic' && renderBasicMath()}
      {selectedTopic === 'geometry' && renderGeometry()}
    </div>
  );
};

export default MathPage;