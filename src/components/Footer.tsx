
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tutoriando-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-white mb-4">
              <img 
                src="/lovable-uploads/9b924697-4d9c-40d6-93e6-b4bd59977b96.png" 
                alt="Tutoriando" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 font-inter">
              Conectando estudantes a conhecimento de qualidade através de tutoria personalizada.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Pesquisa Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Pesquisa</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#tutores" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Tutores
                </a>
              </li>
              <li>
                <a href="/#noticias" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Últimas Notícias
                </a>
              </li>
            </ul>
          </div>

          {/* Meus Cursos Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Meus Cursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/cursos#timeline" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Timeline dos Cursos
                </a>
              </li>
              <li>
                <a href="/cursos#aulas-ao-vivo" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Aulas ao Vivo
                </a>
              </li>
            </ul>
          </div>

          {/* Comunidade Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Comunidade</h3>
            <ul className="space-y-2">
              <li>
                <a href="/comunidade#forum" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Fórum de Debates
                </a>
              </li>
              <li>
                <a href="/comunidade#ranking" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Game-rank
                </a>
              </li>
              <li>
                <a href="/comunidade#suporte" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm font-inter">
            © 2024 Tutoriando. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidade" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-inter">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
