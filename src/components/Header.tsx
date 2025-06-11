
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <header className="bg-tutoriando-text-dark shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f4f5a461-b655-4ad3-8b46-c3d0ab2e67e6.png" 
              alt="Tutoriando" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/cursos"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/cursos') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Meus Cursos
            </Link>
            <Link
              to="/comunidade"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/comunidade') 
                  ? 'text-white border-b-2 border-white pb-1' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Comunidade
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-white font-inter">
                  Olá, {user?.name}
                </span>
                <Avatar className="w-8 h-8 cursor-pointer" onClick={handleLogout}>
                  <AvatarFallback className="bg-white text-tutoriando-text-dark text-sm font-medium">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-white text-tutoriando-text-dark bg-white hover:bg-gray-100 font-inter"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-white hover:bg-gray-100 text-tutoriando-text-dark font-inter">
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
