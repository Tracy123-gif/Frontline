import React from 'react';
import { useNavigate } from 'react-router-dom';

const Handle404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Replace with your homepage route if different
  };

  return (
    <div className="not-found-page bg-gray-100 text-gray-800 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={handleGoHome}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default Handle404;
