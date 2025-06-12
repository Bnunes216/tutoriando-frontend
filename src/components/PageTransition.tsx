
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
      }, 100);
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
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
