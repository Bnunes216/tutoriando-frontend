import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorCard from '@/components/TutorCard';
import NewsCard from '@/components/NewsCard';
import { Search, Star, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const tutors = [
    {
      id: 1,
      name: "Dr. Ana Silva",
      subject: "Matemática",
      rating: 4.9,
      isOnline: true,
      avatar: "AS",
      experience: "10 anos"
    },
    {
      id: 2,
      name: "Prof. Carlos Santos",
      subject: "Física",
      rating: 4.8,
      isOnline: false,
      avatar: "CS",
      experience: "8 anos"
    },
    {
      id: 3,
      name: "Dra. Maria Oliveira",
      subject: "Química",
      rating: 4.9,
      isOnline: true,
      avatar: "MO",
      experience: "12 anos"
    }
  ];

  const news = [
    {
      id: 1,
      title: "Nova Metodologia de Ensino Online",
      description: "Descubra como nossa nova abordagem está revolucionando o aprendizado digital.",
      date: "15 de Dezembro, 2024",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    },
    {
      id: 2,
      title: "Expansão para Novos Cursos",
      description: "Anunciamos a chegada de novos cursos em áreas como Design e Marketing Digital.",
      date: "12 de Dezembro, 2024",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    },
    {
      id: 3,
      title: "Parcerias com Universidades",
      description: "Firmamos parcerias estratégicas com as principais universidades do país.",
      date: "10 de Dezembro, 2024",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    }
  ];

  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-tutoriando-blue-dark to-tutoriando-blue-gradient-end text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter leading-tight">
                  Aprenda com os Melhores 
                  <span className="text-tutoriando-beige"> Tutores</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200 font-inter">
                  Conecte-se com tutores especializados e acelere seu aprendizado com aulas personalizadas
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-tutoriando-text-dark hover:bg-gray-100 font-inter text-lg px-8 py-3">
                    Encontrar Tutor
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-black bg-white hover:bg-gray-100 hover:text-black font-inter text-lg px-8 py-3"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-8xl">🎓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-4 font-inter">
                Por que escolher o Tutoriando?
              </h2>
              <p className="text-lg text-tutoriando-text-light font-inter max-w-2xl mx-auto">
                Oferecemos a melhor experiência de aprendizado personalizado
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                  Encontre o Tutor Ideal
                </h3>
                <p className="text-tutoriando-text-light font-inter">
                  Sistema inteligente de matching que conecta você ao tutor perfeito para suas necessidades
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                  Qualidade Garantida
                </h3>
                <p className="text-tutoriando-text-light font-inter">
                  Todos os tutores são avaliados e certificados, garantindo a melhor experiência de aprendizado
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                  Comunidade Ativa
                </h3>
                <p className="text-tutoriando-text-light font-inter">
                  Participe de uma comunidade engajada com fóruns, eventos e networking
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tutors Section */}
        <section id="tutores" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-4 font-inter">
                Nossos Melhores Tutores
              </h2>
              <p className="text-lg text-tutoriando-text-light font-inter">
                Conheça alguns dos profissionais mais qualificados da nossa plataforma
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tutors.map((tutor) => (
                <TutorCard key={tutor.id} {...tutor} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-dark/90 text-white font-inter">
                Ver Todos os Tutores
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="noticias" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-4 font-inter">
                Últimas Notícias
              </h2>
              <p className="text-lg text-tutoriando-text-light font-inter">
                Fique por dentro das novidades e atualizações da plataforma
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-tutoriando-blue-dark text-tutoriando-blue-dark font-inter">
                Ver Todas as Notícias
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tutoriando-blue-dark text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 font-inter">
              Pronto para começar sua jornada de aprendizado?
            </h2>
            <p className="text-xl mb-8 text-gray-200 font-inter">
              Junte-se a milhares de estudantes que já transformaram seus estudos com nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-tutoriando-text-dark hover:bg-gray-100 font-inter text-lg px-8 py-3">
                Começar Agora
                <BookOpen className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-black bg-white hover:bg-gray-100 hover:text-black font-inter text-lg px-8 py-3"
              >
                Falar com Suporte
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
