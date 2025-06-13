
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorCard from '@/components/TutorCard';
import { Search, Filter, Star, Users, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Mentores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const mentors = [
    {
      id: 1,
      name: "Ana Silva",
      subject: "Ciência da Computação",
      rating: 4.9,
      isOnline: true,
      avatar: "AS",
      experience: "Estudante"
    },
    {
      id: 2,
      name: "Prof. Carlos Santos",
      subject: "Análise e Desenvolvimento",
      rating: 4.8,
      isOnline: false,
      avatar: "CS",
      experience: "8 anos"
    },
    {
      id: 3,
      name: "Maria Oliveira",
      subject: "Engenharia de Software",
      rating: 4.9,
      isOnline: true,
      avatar: "MO",
      experience: "Estudante"
    },
    {
      id: 4,
      name: "João Pedro",
      subject: "Frontend Development",
      rating: 4.7,
      isOnline: true,
      avatar: "JP",
      experience: "5 anos"
    },
    {
      id: 5,
      name: "Camila Santos",
      subject: "Backend Development",
      rating: 4.8,
      isOnline: false,
      avatar: "CS",
      experience: "6 anos"
    },
    {
      id: 6,
      name: "Rafael Lima",
      subject: "DevOps & Cloud",
      rating: 4.6,
      isOnline: true,
      avatar: "RL",
      experience: "7 anos"
    },
    {
      id: 7,
      name: "Beatriz Costa",
      subject: "Data Science",
      rating: 4.9,
      isOnline: true,
      avatar: "BC",
      experience: "4 anos"
    },
    {
      id: 8,
      name: "Lucas Ferreira",
      subject: "Mobile Development",
      rating: 4.5,
      isOnline: false,
      avatar: "LF",
      experience: "3 anos"
    }
  ];

  const categories = [
    'Todos',
    'Frontend Development',
    'Backend Development',
    'Mobile Development',
    'Data Science',
    'DevOps & Cloud',
    'Ciência da Computação',
    'Engenharia de Software'
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || mentor.subject === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-tutoriando-blue-dark to-tutoriando-blue-gradient-end text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
                Encontre seu Mentor Ideal
              </h1>
              <p className="text-xl mb-8 text-gray-200 font-inter max-w-3xl mx-auto">
                Conecte-se com profissionais experientes em tecnologia e acelere seu aprendizado
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Pesquisar por mentor ou área..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-lg text-tutoriando-text-dark font-inter text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tutoriando-text-dark mb-2 font-inter">50+</h3>
                <p className="text-tutoriando-text-light font-inter">Mentores Ativos</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tutoriando-text-dark mb-2 font-inter">4.8</h3>
                <p className="text-tutoriando-text-light font-inter">Avaliação Média</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tutoriando-text-dark mb-2 font-inter">15+</h3>
                <p className="text-tutoriando-text-light font-inter">Tecnologias</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tutoriando-text-dark mb-2 font-inter">1000+</h3>
                <p className="text-tutoriando-text-light font-inter">Horas de Mentoria</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Mentors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-5 h-5 text-tutoriando-text-dark" />
                <h3 className="text-lg font-semibold text-tutoriando-text-dark font-inter">
                  Filtrar por área:
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`font-inter ${
                      selectedCategory === category
                        ? 'bg-tutoriando-blue-dark text-white'
                        : 'border-tutoriando-blue-dark text-tutoriando-blue-dark'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-tutoriando-text-light font-inter">
                {filteredMentors.length} mentor(es) encontrado(s)
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMentors.map((mentor) => (
                <TutorCard key={mentor.id} {...mentor} />
              ))}
            </div>

            {/* No Results */}
            {filteredMentors.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                  Nenhum mentor encontrado
                </h3>
                <p className="text-tutoriando-text-light font-inter">
                  Tente ajustar seus filtros ou termo de pesquisa
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tutoriando-blue-dark text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 font-inter">
              Não encontrou o mentor ideal?
            </h2>
            <p className="text-xl mb-8 text-gray-200 font-inter">
              Entre em contato conosco e ajudaremos você a encontrar o profissional perfeito
            </p>
            <Button className="bg-white text-tutoriando-text-dark hover:bg-gray-100 font-inter text-lg px-8 py-3">
              Falar com Suporte
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mentores;
