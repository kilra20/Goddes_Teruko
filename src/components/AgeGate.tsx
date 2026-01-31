'use client';

import { useState, useEffect } from 'react';

export default function AgeGate() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem('teruko_age_verified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    }
    setMounted(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('teruko_age_verified', 'true');
    setIsAgeVerified(true);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!mounted) return null;

  if (!isAgeVerified) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="border border-pink-500 rounded-lg p-8 max-w-md w-full mx-4 bg-black bg-opacity-80">
          <h1 className="text-2xl font-bold text-white text-center mb-8">Are you over 18?</h1>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleConfirm}
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Enter
            </button>
            
            <button
              onClick={handleLeave}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
