
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import TutorCard from '@/components/TutorCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Home = () => {
  // Mock data para demonstração
  const newsData = [
    {
      title: "Nova Metodologia de Ensino",
      description: "Conheça as novas técnicas de aprendizado adaptativo que estão revolucionando a educação online.",
      image: "Metodologia",
      date: "15 de Junho, 2024"
    },
    {
      title: "Tutores Certificados",
      description: "Agora todos os nossos tutores passam por um processo rigoroso de certificação para garantir qualidade.",
      image: "Certificação",
      date: "12 de Junho, 2024"
    },
    {
      title: "Novo Curso de Matemática",
      description: "Lançamos um curso completo de matemática avançada com exercícios práticos e resolução de problemas.",
      image: "Matemática",
      date: "10 de Junho, 2024"
    }
  ];

  const tutorsData = [
    {
      name: "Ana Silva",
      subject: "Matemática e Física",
      rating: 4.9,
      isOnline: true,
      avatar: "AS",
      experience: "5 anos"
    },
    {
      name: "Carlos Mendes",
      subject: "Programação",
      rating: 4.8,
      isOnline: true,
      avatar: "CM",
      experience: "3 anos"
    },
    {
      name: "Marina Santos",
      subject: "Idiomas",
      rating: 4.7,
      isOnline: false,
      avatar: "MS",
      experience: "7 anos"
    },
    {
      name: "João Oliveira",
      subject: "História e Geografia",
      rating: 4.9,
      isOnline: true,
      avatar: "JO",
      experience: "4 anos"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-tutoriando-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-tutoriando-text-dark mb-6 font-inter">
              Bem-vindo ao Tutoriando
            </h1>
            <p className="text-xl text-tutoriando-text-light mb-8 max-w-3xl mx-auto font-inter">
              Conecte-se com os melhores tutores e acelere seu aprendizado com aulas personalizadas
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Buscar matérias, tutores..."
                className="pl-12 pr-4 py-3 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-tutoriando-blue-dark focus:border-transparent font-inter"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-4 font-inter">
              Últimas Notícias
            </h2>
            <p className="text-tutoriando-text-light font-inter">
              Fique por dentro das novidades da plataforma
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                description={news.description}
                image={news.image}
                date={news.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section className="py-16 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-inter">
              Nossos Tutores em Destaque
            </h2>
            <p className="text-white/90 font-inter">
              Conheça alguns dos nossos melhores educadores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorsData.map((tutor, index) => (
              <TutorCard
                key={index}
                name={tutor.name}
                subject={tutor.subject}
                rating={tutor.rating}
                isOnline={tutor.isOnline}
                avatar={tutor.avatar}
                experience={tutor.experience}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-tutoriando-blue-dark hover:bg-gray-100 font-inter px-8 py-3">
              Ver Todos os Tutores
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
