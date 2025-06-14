
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SocialButton from './SocialButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do login:', formData);
    login(formData.email, formData.password);
    navigate('/');
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`Login com ${provider}`);
    login('usuario@exemplo.com', 'senha');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Seção esquerda - Formulário */}
      <div className="flex-1 bg-tutoriando-beige flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in">
          <Logo />
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-2 font-inter">
              Login
            </h2>
            <p className="text-tutoriando-text-light font-inter">
              Acesse sua conta e continue aprendendo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tutoriando-blue-dark focus:border-transparent font-inter"
                required
              />
            </div>

            <div>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tutoriando-blue-dark focus:border-transparent font-inter"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                  />
                  <label htmlFor="rememberMe" className="text-sm text-tutoriando-text-light font-inter">
                    Manter-me conectado
                  </label>
                </div>
                <a href="#" className="text-sm text-tutoriando-blue-dark hover:underline font-inter">
                  Esqueceu sua senha?
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                  }
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-tutoriando-text-light font-inter leading-relaxed">
                  Concordo com os{' '}
                  <a href="#" className="text-tutoriando-blue-dark hover:underline">
                    termos e condições
                  </a>{' '}
                  da plataforma
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white py-3 rounded-lg font-medium transition-colors duration-200 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-tutoriando-beige text-tutoriando-text-light font-inter">
                  Ou
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <SocialButton
                provider="google"
                onClick={() => handleSocialLogin('google')}
              />
              <SocialButton
                provider="facebook"
                onClick={() => handleSocialLogin('facebook')}
              />
            </div>
          </div>

          <p className="mt-8 text-center text-tutoriando-text-light font-inter">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-tutoriando-blue-dark hover:underline font-medium">
              Registre-se
            </Link>
          </p>
        </div>
      </div>

      {/* Seção direita - Elementos decorativos animados */}
      <div className="flex-1 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end relative overflow-hidden">
        {/* Elementos decorativos animados - maiores e mais visíveis */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white/30 rounded-lg transform rotate-12 animate-bounce-slow"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-white/30 rounded-lg transform -rotate-12 animate-float-up"></div>
        <div className="absolute top-32 right-16 w-10 h-10 border-2 border-white/25 rounded-lg transform rotate-45 animate-float-down"></div>
        <div className="absolute bottom-32 left-16 w-14 h-14 border-2 border-white/35 rounded-lg transform -rotate-45 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white/20 rounded-lg transform rotate-12 animate-float-up"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-white/25 rounded-lg transform -rotate-12 animate-float-down"></div>
        <div className="absolute top-20 left-1/2 w-6 h-6 border border-white/20 rounded-lg transform rotate-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-10 h-10 border-2 border-white/30 rounded-lg transform -rotate-30 animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-8 w-8 h-8 border border-white/25 rounded-lg transform rotate-60 animate-float-up"></div>
      </div>
    </div>
  );
};

export default Login;
