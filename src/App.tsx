import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Home, Leaf, Bird, Fish, Apple, Carrot, GraduationCap, Calculator, LogOut, CarTaxiFront, Flower2Icon, Loader, Gamepad2Icon, Menu, X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AquaticPage from './pages/AquaticPage';
import BirdsPage from './pages/BirdsPage';
import FruitsPage from './pages/FruitsPage';
import VegetablesPage from './pages/VegetablesPage';
import FlowerPage from './pages/FlowersPage';
import VehiclesPage from './pages/VehiclesPage';
import MathPage from './pages/MathPage';
import TestingPage from './pages/TestingPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResultsPage from './pages/ResultsPage';

import image from "./boy.svg";

import Home_game from './pages_game/Home';
import MemoryGame from './pages_game/games/MemoryGame';
import WhackAMole from './pages_game/games/WhackAMole';
import ColoringBook from './pages_game/games/ColoringBook';
import SimplePuzzle from './pages_game/games/SimplePuzzle';
import BalloonPop from './pages_game/games/BalloonPop';
import WordSearch from './pages_game/games/WordSearch';
import CountingGame from './pages_game/games/CountingGame';
import ShapeSorter from './pages_game/games/ShapeSorter';
import CatchStars from './pages_game/games/CatchStars';
import AnimalSounds from './pages_game/games/AnimalSounds';

import WebcamCapture from './WebcamCapture';
import { loadModels, detectEmotion } from './utils/emotionUtils';
import { EmotionResults } from './types/emotion';
import { getEmotionEmoji, getEmotionColor } from './utils/emotionUtils';
import FaceReg from './Face';
import { VoiceNavigationProvider } from './contexts/VoiceNavigationContext';
import { VoiceContext } from './contexts/VoiceContext';
import VoiceAssistant from './components/VoiceAssistant';
import VoiceControl from './components/VoiceControl';

// Define theme colors for each navigation item
const navColors = {
  home: 'text-blue-600',
  animals: 'text-green-600',
  aquatic: 'text-cyan-600',
  birds: 'text-yellow-600',
  fruits: 'text-orange-600',
  vegetables: 'text-emerald-600',
  flowers: 'text-pink-600',
  vehicles: 'text-purple-600',
  math: 'text-indigo-600',
  tests: 'text-red-600',
  games: 'text-pink-600',
};

// Navigation items data
const navItems = [
  { path: "/", label: "Home", icon: Home, color: navColors.home },
  { path: "/animals", label: "Animals", icon: Leaf, color: navColors.animals },
  { path: "/aquatic", label: "Aquatic", icon: Fish, color: navColors.aquatic },
  { path: "/birds", label: "Birds", icon: Bird, color: navColors.birds },
  { path: "/fruits", label: "Fruits", icon: Apple, color: navColors.fruits },
  { path: "/vegetables", label: "Vegetables", icon: Carrot, color: navColors.vegetables },
  { path: "/flowers", label: "Flowers", icon: Flower2Icon, color: navColors.flowers },
  { path: "/vehicles", label: "Vehicle", icon: CarTaxiFront, color: navColors.vehicles },
  { path: "/math", label: "Math", icon: Calculator, color: navColors.math },
  { path: "/games", label: "Games", icon: Gamepad2Icon, color: navColors.games },
  { path: "/testing", label: "Tests", icon: GraduationCap, color: navColors.tests, requireAuth: true },
];

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
  const [currentEmotion, setCurrentEmotion] = useState<EmotionResults | null>(null);
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastSadToastTime, setLastSadToastTime] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Define game paths for checking current location
  const gamePaths = [
    '/games', 
    '/memory-game', 
    '/whack-a-mole', 
    '/coloring-book', 
    '/simple-puzzle', 
    '/balloon-pop', 
    '/word-search', 
    '/counting-game', 
    '/shape-sorter', 
    '/catch-stars', 
    '/animal-sounds'
  ];

  useEffect(() => {
    const initializeModels = async () => {
      setIsModelLoading(true);
      try {
        const success = await loadModels();
        setIsModelLoaded(success);
      } catch (error) {
        console.error('Failed to initialize models:', error);
      } finally {
        setIsModelLoading(false);
      }
    };

    initializeModels();
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastDetectionTime = 0;
    const detectionInterval = 500;

    const detectionLoop = async (timestamp: number) => {
      if (videoElement && isModelLoaded) {
        if (timestamp - lastDetectionTime >= detectionInterval) {
          const result = await detectEmotion(videoElement);
          if (result) {
            setCurrentEmotion(result);
          }
          lastDetectionTime = timestamp;
        }
      }
      animationFrameId = requestAnimationFrame(detectionLoop);
    };

    if (videoElement && isModelLoaded) {
      animationFrameId = requestAnimationFrame(detectionLoop);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [videoElement, isModelLoaded]);

  // Custom toast for sad emotion with redirect
  const showSadEmotionToast = () => {
    // Using React Toastify's toast.info with autoClose and custom styling
    return toast.info(
      <div className="flex items-center">
        <span className="text-xl mr-2">😢</span>
        <p>Looks like you're feeling sad. Taking you to games to cheer you up!</p>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => navigate('/games'),
        className: 'bg-blue-50',
        bodyClassName: 'text-blue-700',
        progressClassName: 'bg-blue-500',
      }
    );
  };

  // Updated effect for handling sad emotion detection with rate limiting
  useEffect(() => {
    // Check if current path is already a game path
    const isOnGamePath = gamePaths.some(path => location.pathname === path);
    
    // Current time for rate limiting
    const now = Date.now();
    const cooldownPeriod = 30000; // 30 seconds cooldown
    
    if (currentEmotion && 
        currentEmotion.dominantEmotion === 'sad' && 
        !isOnGamePath &&
        now - lastSadToastTime > cooldownPeriod) {
      
      // Update last toast time for rate limiting
      setLastSadToastTime(now);
      
      // Show the toastify notification which will handle redirect
      showSadEmotionToast();
    }
  }, [currentEmotion, navigate, location.pathname, lastSadToastTime]);

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to render a navigation item
  const renderNavItem = (item: any) => {
    if (item.requireAuth && !currentUser) return null;
    
    return (
      <NavLink 
        key={item.path}
        to={item.path} 
        className={({ isActive }) => 
          `flex items-center whitespace-nowrap ${isActive ? item.color : 'hover:' + item.color} px-3 py-2 rounded-md text-sm font-medium`
        }
        onClick={closeMobileMenu}
      >
        {({ isActive }) => (
          <>
            <item.icon className={`w-5 h-5 mr-2 ${isActive ? item.color : ''}`} />
            <span>{item.label}</span>
          </>
        )}
      </NavLink>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <WebcamCapture onWebcamReady={setVideoElement} />
      
      {/* React Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex justify-between h-16">
            {/* App Logo and Name */}
            <div className="flex items-center pr-2 border-r">
              <NavLink to="/" className="flex items-center">
                <img src={image} alt="Kid Learning Logo" className="h-8 w-8" />
                <span className="ml-1 text-base font-semibold text-gray-900">KL</span>
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1 overflow-x-auto scrollbar-hide">
              {navItems.map(renderNavItem)}
            </div>

            {/* Emotion Display for Desktop */}
            <div className="hidden md:flex items-center">
              {isModelLoading ? (
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm">
                  <Loader className="h-4 w-4 animate-spin" />
                  <span>...</span>
                </div>
              ) : !isModelLoaded ? (
                <div className="flex items-center space-x-1 px-3 py-1 bg-red-50 rounded-full text-red-600 text-sm">
                  <span>Failed</span>
                </div>
              ) : currentEmotion ? (
                <div 
                  className="flex items-center px-2 py-0.5 rounded-full transition-all duration-300 text-sm"
                  style={{ backgroundColor: `${getEmotionColor(currentEmotion.dominantEmotion)}20` }}
                >
                  <span className="text-xl mr-1">
                    {getEmotionEmoji(currentEmotion.dominantEmotion)}
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 px-3 py-1 bg-gray-50 rounded-full text-gray-600 text-sm">
                  <span>Waiting...</span>
                </div>
              )}
            </div>

            {/* Auth Controls for Desktop */}
            <div className="hidden md:flex items-center space-x-2 ml-2">
              {currentUser ? (
                <button
                  onClick={logout}
                  className="flex items-center text-red-600 hover:text-red-800 text-sm"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  <span>Logout</span>
                </button>
              ) : (
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => isActive 
                    ? 'text-blue-600 font-medium text-sm' 
                    : 'text-blue-600 hover:text-blue-800 text-sm'}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            {navItems.map(renderNavItem)}
            
            {/* Auth Controls for Mobile */}
            {currentUser ? (
              <button
                onClick={() => {
                  logout();
                  closeMobileMenu();
                }}
                className="flex w-full items-center text-red-600 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                <LogOut className="w-5 h-5 mr-2" />
                <span>Logout</span>
              </button>
            ) : (
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  `flex items-center ${isActive ? 'text-blue-600 font-medium' : 'text-blue-600 hover:text-blue-800'} px-3 py-2 rounded-md text-sm font-medium`
                }
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            )}
            
            {/* Emotion Display for Mobile */}
            <div className="px-3 py-2">
              {isModelLoading ? (
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm">
                  <Loader className="h-4 w-4 animate-spin" />
                  <span>Loading emotion detection...</span>
                </div>
              ) : !isModelLoaded ? (
                <div className="flex items-center space-x-2 px-3 py-1 bg-red-50 rounded-full text-red-600 text-sm">
                  <span>Failed to load emotion detection</span>
                </div>
              ) : currentEmotion ? (
                <div 
                  className="flex items-center px-3 py-1 rounded-full transition-all duration-300 text-sm"
                  style={{ backgroundColor: `${getEmotionColor(currentEmotion.dominantEmotion)}20` }}
                >
                  <span className="text-xl mr-1">
                    {getEmotionEmoji(currentEmotion.dominantEmotion)}
                  </span>
                  <span className="font-medium capitalize" style={{ color: getEmotionColor(currentEmotion.dominantEmotion) }}>
                    {currentEmotion.dominantEmotion}
                  </span>
                  <span className="ml-1 text-xs text-gray-500">
                    {Math.round(currentEmotion.emotions[currentEmotion.dominantEmotion] * 100)}%
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full text-gray-600 text-sm">
                  <span>Waiting for emotion detection...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Content with padding to account for fixed navbar */}
      <div className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/face" element={<FaceReg/>} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/aquatic" element={<AquaticPage />} />
          <Route path="/birds" element={<BirdsPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/vegetables" element={<VegetablesPage />} />
          <Route path="/flowers" element={<FlowerPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/results" element={<PrivateRoute><ResultsPage /></PrivateRoute>} />
          <Route
            path="/testing"
            element={
              <PrivateRoute>
                <TestingPage />
              </PrivateRoute>
            }
          />

          <Route path="/games" element={<Home_game />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/whack-a-mole" element={<WhackAMole />} />
          <Route path="/coloring-book" element={<ColoringBook />} />
          <Route path="/simple-puzzle" element={<SimplePuzzle />} />
          <Route path="/balloon-pop" element={<BalloonPop />} />
          <Route path="/word-search" element={<WordSearch />} />
          <Route path="/counting-game" element={<CountingGame />} />
          <Route path="/shape-sorter" element={<ShapeSorter />} />
          <Route path="/catch-stars" element={<CatchStars />} />
          <Route path="/animal-sounds" element={<AnimalSounds />} />
        </Routes>
        {/* <VoiceAssistant /> */}
            <VoiceControl />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
    <VoiceNavigationProvider>
      <VoiceContext>
      <AppRoutes />
      </VoiceContext>
      </VoiceNavigationProvider>
    </AuthProvider>
  );
}

export default App;