import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import LiveClassCard from '@/components/LiveClassCard';
import TimelineEvent from '@/components/TimelineEvent';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';

const MeusCursos = () => {
  const courses = [
    {
      id: 1,
      title: "Cálculo Diferencial e Integral",
      category: "Matemática",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    },
    {
      id: 2,
      title: "Física Quântica Avançada",
      category: "Física",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    },
    {
      id: 3,
      title: "Química Orgânica",
      category: "Química",
      image: "/lovable-uploads/cde9d2ba-bedf-4b27-b89c-7e78cc6ded56.png"
    }
  ];

  const liveClasses = [
    {
      id: 1,
      title: "Resolução de Limites",
      tutor: "Dr. Ana Silva",
      participants: ["AS", "JP", "IC"],
      isLive: true
    },
    {
      id: 2,
      title: "Mecânica Quântica - Fundamentos",
      tutor: "Prof. Carlos Santos",
      participants: ["CS", "RL", "MO"],
      isLive: false
    },
    {
      id: 3,
      title: "Reações de Substituição",
      tutor: "Dra. Maria Oliveira",
      participants: ["MO", "AS", "JP", "IC", "RL"],
      isLive: false
    }
  ];

  const timelineEvents = [
    {
      id: 1,
      icon: "📝",
      date: "20/12",
      time: "23:59",
      title: "Entrega do Projeto Final - Cálculo",
      description: "Prazo final para entrega do projeto de cálculo diferencial"
    },
    {
      id: 2,
      icon: "📊",
      date: "18/12",
      time: "14:00",
      title: "Prova - Física Quântica",
      description: "Avaliação sobre os fundamentos da física quântica"
    },
    {
      id: 3,
      icon: "🎥",
      date: "15/12",
      time: "15:30",
      title: "Aula ao Vivo - Química Orgânica",
      description: "Discussão sobre reações de substituição nucleofílica"
    },
    {
      id: 4,
      icon: "🔬",
      date: "12/12",
      time: "10:00",
      title: "Workshop - Métodos Numéricos",
      description: "Workshop prático sobre aplicação de métodos numéricos"
    }
  ];

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
              Acompanhe seu progresso e mantenha-se atualizado com suas atividades acadêmicas
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
                  <p className="text-sm text-tutoriando-text-light font-inter">Horas Estudadas</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">8</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Tutores</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-tutoriando-blue-dark mr-3" />
                <div>
                  <p className="text-2xl font-bold text-tutoriando-text-dark font-inter">5</p>
                  <p className="text-sm text-tutoriando-text-light font-inter">Eventos esta Semana</p>
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
              Timeline dos Cursos
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
              Próximas Aulas ao Vivo
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
