import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import LiveClassCard from '@/components/LiveClassCard';
import TimelineEvent from '@/components/TimelineEvent';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const MeusCursos = () => {
  const { isAuthenticated } = useAuth();

  const courses = [
    {
      id: 1,
      title: "Estruturas de Dados e Algoritmos",
      category: "Ciência da Computação",
      image: "/lovable-uploads/a3dc2dc5-29a8-464a-9882-9b5decd045f4.png"
    },
    {
      id: 2,
      title: "Desenvolvimento Web Full Stack",
      category: "Análise e Desenvolvimento",
      image: "/lovable-uploads/92ce04dd-2e57-4ab8-98ff-49c49fb8ed48.png"
    },
    {
      id: 3,
      title: "Engenharia de Software",
      category: "Engenharia da Computação",
      image: "/lovable-uploads/8cb58e97-171a-4e4b-9f92-7b9015936d1b.png"
    }
  ];

  const availableCourses = [
    {
      id: 1,
      title: "Introdução à Programação",
      category: "Fundamentos",
      image: "/lovable-uploads/8427182f-2e0f-4e44-b801-3d37c91c1e52.png"
    },
    {
      id: 2,
      title: "Python para Iniciantes",
      category: "Linguagens de Programação",
      image: "/lovable-uploads/48519ffb-a8cb-4b2e-ada7-8770bdb1ffed.png"
    },
    {
      id: 3,
      title: "JavaScript Moderno",
      category: "Desenvolvimento Web",
      image: "/lovable-uploads/1ce7b675-94a9-475d-a02b-64564aa83a4e.png"
    },
    {
      id: 4,
      title: "React.js Completo",
      category: "Frontend",
      image: "/lovable-uploads/2a81fe6d-e1be-4a9a-a337-bc4e068e96c3.png"
    },
    {
      id: 5,
      title: "Node.js e Express",
      category: "Backend",
      image: "/lovable-uploads/9558cf66-f6f4-4ba2-a5c1-c9d92a631a79.png"
    },
    {
      id: 6,
      title: "Banco de Dados MySQL",
      category: "Database",
      image: "/lovable-uploads/c7cf7ce9-b215-403e-995f-560876270286.png"
    }
  ];

  const liveClasses = [
    {
      id: 1,
      title: "Algoritmos de Ordenação",
      tutor: "Dr. Ana Silva",
      participants: ["AS", "JP", "IC"],
      isLive: true
    },
    {
      id: 2,
      title: "React.js - Fundamentos",
      tutor: "Prof. Carlos Santos",
      participants: ["CS", "RL", "MO"],
      isLive: false
    },
    {
      id: 3,
      title: "Design Patterns em Python",
      tutor: "Dra. Maria Oliveira",
      participants: ["MO", "AS", "JP", "IC", "RL"],
      isLive: false
    }
  ];

  const timelineEvents = [
    {
      id: 1,
      icon: "💻",
      date: "20/12",
      time: "23:59",
      title: "Entrega do Projeto Final - Sistema Web",
      description: "Prazo final para entrega do projeto de desenvolvimento web"
    },
    {
      id: 2,
      icon: "📊",
      date: "18/12",
      time: "14:00",
      title: "Prova - Estruturas de Dados",
      description: "Avaliação sobre algoritmos e estruturas de dados"
    },
    {
      id: 3,
      icon: "🎥",
      date: "15/12",
      time: "15:30",
      title: "Aula ao Vivo - Engenharia de Software",
      description: "Discussão sobre metodologias ágeis e design patterns"
    },
    {
      id: 4,
      icon: "🔧",
      date: "12/12",
      time: "10:00",
      title: "Workshop - DevOps e CI/CD",
      description: "Workshop prático sobre integração e entrega contínua"
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-tutoriando-beige">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header for Non-Authenticated */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-tutoriando-text-dark mb-4 font-inter">
                Cursos Disponíveis
              </h1>
              <p className="text-lg text-tutoriando-text-light font-inter max-w-2xl mx-auto mb-8">
                Descubra nossa seleção de cursos de tecnologia e programação. Faça login para começar sua jornada de aprendizado!
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/login">
                  <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter">
                    Fazer Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="border-tutoriando-blue-dark text-tutoriando-blue-dark hover:bg-tutoriando-blue-dark hover:text-white font-inter">
                    Registrar-se
                  </Button>
                </Link>
              </div>
            </div>

            {/* Available Courses Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-8 font-inter">
                Todos os Cursos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {availableCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-tutoriando-text-dark mb-4 font-inter">
                Pronto para começar?
              </h3>
              <p className="text-tutoriando-text-light font-inter mb-6">
                Crie sua conta gratuitamente e tenha acesso a todos os cursos, aulas ao vivo e uma comunidade de desenvolvedores.
              </p>
              <Link to="/register">
                <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter px-8 py-3">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-tutoriando-text-dark mb-4 font-inter">
              Meus Cursos
            </h1>
            <p className="text-lg text-tutoriando-text-light font-inter max-w-2xl mx-auto">
              Acompanhe seu progresso em tecnologia e mantenha-se atualizado com suas atividades de programação
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">3</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Cursos Ativos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">127</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Horas de Código</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">8</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Instrutores</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">5</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Projetos esta Semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-8 font-inter">
              Cursos em Andamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="mb-16">
            <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-8 font-inter">
              Timeline dos Projetos
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-6">
                {timelineEvents.map((event) => (
                  <TimelineEvent key={event.id} {...event} />
                ))}
              </div>
            </div>
          </section>

          {/* Live Classes Section */}
          <section id="aulas-ao-vivo" className="mb-16">
            <h2 className="text-3xl font-bold text-tutoriando-text-dark mb-8 font-inter">
              Próximas Sessões de Código
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {liveClasses.map((liveClass) => (
                <LiveClassCard key={liveClass.id} {...liveClass} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeusCursos;
