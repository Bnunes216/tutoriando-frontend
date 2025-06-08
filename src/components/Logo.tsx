
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative w-12 h-12">
        {/* Coruja com capelo */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-tutoriando-blue-dark"
        >
          {/* Corpo da coruja */}
          <ellipse cx="24" cy="30" rx="12" ry="10" fill="currentColor" opacity="0.8"/>
          
          {/* Cabeça da coruja */}
          <circle cx="24" cy="20" r="10" fill="currentColor"/>
          
          {/* Olhos */}
          <circle cx="20" cy="18" r="3" fill="white"/>
          <circle cx="28" cy="18" r="3" fill="white"/>
          <circle cx="20" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="28" cy="18" r="1.5" fill="currentColor"/>
          
          {/* Bico */}
          <path d="M24 22 L22 24 L26 24 Z" fill="#F59E0B"/>
          
          {/* Capelo de formatura */}
          <path d="M14 12 L34 12 L32 8 L16 8 Z" fill="currentColor"/>
          <circle cx="32" cy="8" r="2" fill="#F59E0B"/>
          
          {/* Livro pequeno */}
          <rect x="30" y="32" width="6" height="4" rx="1" fill="#F59E0B" opacity="0.7"/>
          <line x1="31" y1="34" x2="35" y2="34" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-tutoriando-text-dark font-inter">Tutoriando</h1>
      </div>
    </div>
  );
};

export default Logo;
