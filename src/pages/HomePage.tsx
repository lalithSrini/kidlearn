import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Bird, Fish, Apple, Carrot, Flower2, Car, Calculator,Computer,Diamond,Code ,Box} from 'lucide-react';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to GameX</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-2xl font-semibold ml-3">{category.title}</h2>
            </div>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const categories = [
  
  {
    title: 'Programming',
    path: '/C',
    icon: <Computer className="w-8 h-8 text-green-600" />,
    description: 'Programming isn’t about typing code; it’s about thinking, problem-solving, and creating something meaningful from logic.'
  },
  
  {
    title: 'FrontEnd',
    path: '/front',
    icon: <Diamond className="w-8 h-8 text-blue-600" />,
    description: 'Frontend development is the part of web development that focuses on what users see and interact with. It combines coding, design, and creativity to create websites and applications that are both visually appealing and user-friendly.'
  },
  {
    title: 'BackEnd',
    path: '/back',
    icon: <Code className="w-8 h-8 text-yellow-600" />,
    description: 'Backend technologies are used to build the server-side of applications, manage data, and handle business logic. Node.js allows developers to use JavaScript on the server to create fast and scalable applications.'
  },
  {
    title: 'Development Tools',
    path: '/deve',
    icon: <Box className="w-8 h-8 text-yellow-600" />,
    description: 'Development tools are software applications that help developers build, test, and optimize mobile apps efficiently.'
  },
  {
    title: 'Animals',
    path: '/animals',
    icon: <PawPrint className="w-8 h-8 text-green-600" />,
    description: 'Discover the diverse world of land animals, from majestic mammals to fascinating reptiles.'
  },
  {
    title: 'Aquatic Life',
    path: '/aquatic',
    icon: <Fish className="w-8 h-8 text-blue-600" />,
    description: 'Explore the mysterious depths of oceans and learn about marine life.'
  },
  {
    title: 'Birds',
    path: '/birds',
    icon: <Bird className="w-8 h-8 text-yellow-600" />,
    description: 'Learn about various bird species, their habitats, and behaviors.'
  },
  
  {
    title: 'Vehicles',
    path: '/vehicles',
    icon: <Car className="w-8 h-8 text-gray-600" />,
    description: 'Learn about different types of vehicles and how they help us in daily life.'
  },
  {
    title: 'Math',
    path: '/math',
    icon: <Calculator className="w-8 h-8 text-purple-600" />,
    description: 'Explore the world of mathematics, from basic concepts to advanced theories and practical applications.'
  }
];

export default HomePage;