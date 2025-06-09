
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialButton from './SocialButton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
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
    // Aqui você implementaria a lógica de login
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`Login com ${provider}`);
    // Aqui você implementaria a lógica de login social
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

      {/* Seção direita - Ilustração */}
      <div className="flex-1 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-white/20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-32 right-16 w-8 h-8 border border-white/20 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 border border-white/20 rounded-lg transform -rotate-45"></div>

        {/* Ilustração central da coruja */}
        <div className="flex items-center justify-center h-full">
          <div className="relative animate-fade-in">
            <svg 
              width="518" 
              height="507" 
              viewBox="0 0 518 507" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              {/* Corpo principal da coruja */}
              <ellipse cx="259" cy="350" rx="120" ry="100" fill="currentColor" opacity="0.9"/>
              
              {/* Cabeça da coruja */}
              <circle cx="259" cy="200" r="100" fill="currentColor"/>
              
              {/* Tufos das orelhas */}
              <path d="M180 120 L200 80 L220 120 Z" fill="currentColor"/>
              <path d="M298 120 L318 80 L338 120 Z" fill="currentColor"/>
              
              {/* Olhos grandes */}
              <circle cx="220" cy="180" r="35" fill="white"/>
              <circle cx="298" cy="180" r="35" fill="white"/>
              <circle cx="220" cy="180" r="20" fill="#1E3A8A"/>
              <circle cx="298" cy="180" r="20" fill="#1E3A8A"/>
              <circle cx="225" cy="175" r="8" fill="white"/>
              <circle cx="303" cy="175" r="8" fill="white"/>
              
              {/* Bico */}
              <path d="M259 220 L240 250 L278 250 Z" fill="#F59E0B"/>
              
              {/* Capelo de formatura */}
              <path d="M150 100 L368 100 L350 50 L168 50 Z" fill="currentColor"/>
              <path d="M350 50 L380 30 L370 80 Z" fill="#F59E0B"/>
              <circle cx="380" cy="30" r="8" fill="#F59E0B"/>
              
              {/* Livro aberto */}
              <g transform="translate(320, 380)">
                <rect x="0" y="0" width="80" height="60" rx="4" fill="white" opacity="0.9"/>
                <rect x="0" y="0" width="40" height="60" rx="4" fill="#F3F4F6"/>
                <rect x="40" y="0" width="40" height="60" rx="4" fill="white"/>
                <line x1="5" y1="15" x2="35" y2="15" stroke="#6B7280" strokeWidth="2"/>
                <line x1="5" y1="25" x2="30" y2="25" stroke="#6B7280" strokeWidth="2"/>
                <line x1="5" y1="35" x2="35" y2="35" stroke="#6B7280" strokeWidth="2"/>
                <line x1="45" y1="15" x2="75" y2="15" stroke="#6B7280" strokeWidth="2"/>
                <line x1="45" y1="25" x2="70" y2="25" stroke="#6B7280" strokeWidth="2"/>
                <line x1="45" y1="35" x2="75" y2="35" stroke="#6B7280" strokeWidth="2"/>
              </g>
              
              {/* Lápis */}
              <g transform="translate(420, 350)">
                <rect x="0" y="0" width="8" height="80" fill="#F59E0B"/>
                <rect x="0" y="70" width="8" height="10" fill="#8B5CF6"/>
                <path d="M0 80 L4 90 L8 80 Z" fill="#374151"/>
              </g>
              
              {/* Asas */}
              <ellipse cx="160" cy="300" rx="40" ry="80" fill="currentColor" opacity="0.8" transform="rotate(-20 160 300)"/>
              <ellipse cx="358" cy="300" rx="40" ry="80" fill="currentColor" opacity="0.8" transform="rotate(20 358 300)"/>
              
              {/* Patas */}
              <ellipse cx="220" cy="440" rx="15" ry="25" fill="#F59E0B"/>
              <ellipse cx="298" cy="440" rx="15" ry="25" fill="#F59E0B"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
