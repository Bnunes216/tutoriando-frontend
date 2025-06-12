
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const location = useLocation();

  useEffect(() => {
    if (location !== displayLocation) {
      setIsVisible(false);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsVisible(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, location]);

  useEffect(() => {
    if (location === displayLocation) {
      setIsVisible(true);
    }
  }, [location, displayLocation]);

  return (
    <div 
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-6 scale-98'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
