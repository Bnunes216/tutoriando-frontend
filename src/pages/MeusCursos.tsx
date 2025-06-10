
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import TimelineEvent from '@/components/TimelineEvent';
import LiveClassCard from '@/components/LiveClassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const MeusCursos = () => {
  // Mock data para demonstração
  const coursesData = [
    {
      title: "Matemática Básica",
      category: "Matemática",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
    },
    {
      title: "Programação Web",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Inglês Intermediário",
      category: "Idiomas",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      title: "História do Brasil",
      category: "História",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      title: "Física Aplicada",
      category: "Física",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=250&fit=crop"
    },
    {
      title: "Redação ENEM",
      category: "Português",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    }
  ];

  const timelineEvents = [
    {
      icon: "📝",
      date: "15 Jun",
      time: "14:00",
      title: "Entrega do Projeto Final - Matemática",
      description: "Prazo para entrega do projeto de cálculo"
    },
    {
      icon: "📚",
      date: "16 Jun",
      time: "10:30",
      title: "Aula de Revisão - Inglês",
      description: "Revisão para prova de gramática"
    },
    {
      icon: "🎯",
      date: "18 Jun",
      time: "16:00",
      title: "Prova Online - História",
      description: "Avaliação sobre período colonial"
    },
    {
      icon: "💡",
      date: "20 Jun",
      time: "09:00",
      title: "Workshop de Programação",
      description: "Introdução ao React e TypeScript"
    }
  ];

  const liveClasses = [
    {
      title: "Aula de Álgebra Linear",
      tutor: "Prof. Ana Silva",
      participants: ["AS", "CM", "MS", "JO", "+5"],
      isLive: true
    },
    {
      title: "Conversação em Inglês",
      tutor: "Prof. Carlos Mendes",
      participants: ["CM", "AS", "LR", "+3"],
      isLive: true
    },
    {
      title: "Revisão de História",
      tutor: "Prof. Marina Santos",
      participants: ["MS", "JO", "AS", "+7"],
      isLive: true
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F1E4' }}>
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-tutoriando-text-dark mb-4 font-inter">
            Nossos Cursos
          </h1>
          <p className="text-lg text-tutoriando-text-light font-inter">
            Explore nossa seleção de cursos e continue sua jornada de aprendizado
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Buscar cursos..."
                className="pl-12 pr-4 py-3 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-tutoriando-blue-dark focus:border-transparent font-inter"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button
              variant="outline"
              className="px-4 py-3 border-tutoriando-blue-dark text-tutoriando-blue-dark hover:bg-tutoriando-blue-dark hover:text-white"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {coursesData.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                category={course.category}
                image={course.image}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter px-8 py-3">
              Mostrar Mais
            </Button>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-6 font-inter">
            Timeline
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  icon={event.icon}
                  date={event.date}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live Classes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-6 font-inter">
            Aulas ao Vivo
          </h2>
          <div className="space-y-4">
            {liveClasses.map((liveClass, index) => (
              <LiveClassCard
                key={index}
                title={liveClass.title}
                tutor={liveClass.tutor}
                participants={liveClass.participants}
                isLive={liveClass.isLive}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeusCursos;
