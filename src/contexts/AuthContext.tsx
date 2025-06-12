
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const login = (email: string, password: string) => {
    // Extrair apenas o primeiro nome do email
    const emailUsername = email.split('@')[0];
    const firstName = emailUsername.split('.')[0].split('_')[0].split('-')[0];
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    
    setIsAuthenticated(true);
    setUser({ name: capitalizedFirstName, email });
  };

  const register = (name: string, email: string, password: string) => {
    // Para registro, usar apenas o primeiro nome fornecido
    const firstName = name.split(' ')[0];
    setIsAuthenticated(true);
    setUser({ name: firstName, email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
