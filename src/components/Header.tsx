
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-tutoriando-blue-dark border-b-2 border-tutoriando-blue-dark pb-1' 
                  : 'text-tutoriando-text-light hover:text-tutoriando-blue-dark'
              }`}
            >
              Home
            </Link>
            <Link
              to="/cursos"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/cursos') 
                  ? 'text-tutoriando-blue-dark border-b-2 border-tutoriando-blue-dark pb-1' 
                  : 'text-tutoriando-text-light hover:text-tutoriando-blue-dark'
              }`}
            >
              Meus Cursos
            </Link>
            <Link
              to="/comunidade"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/comunidade') 
                  ? 'text-tutoriando-blue-dark border-b-2 border-tutoriando-blue-dark pb-1' 
                  : 'text-tutoriando-text-light hover:text-tutoriando-blue-dark'
              }`}
            >
              Comunidade
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-tutoriando-text-dark font-inter">
                  Olá, {user?.name}
                </span>
                <Avatar className="w-8 h-8 cursor-pointer" onClick={handleLogout}>
                  <AvatarFallback className="bg-tutoriando-blue-dark text-white text-sm font-medium">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-tutoriando-blue-dark text-tutoriando-blue-dark hover:bg-tutoriando-blue-dark hover:text-white font-inter"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter">
                    Registrar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
