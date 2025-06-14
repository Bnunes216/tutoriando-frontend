
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users, MessageSquare, Calendar, Award } from 'lucide-react';

const PerfilTutor = () => {
  const { id } = useParams();

  // Dados simulados do tutor baseado no ID
  const tutor = {
    id: id || '1',
    name: "Ana Silva",
    subject: "Ciência da Computação",
    rating: 4.9,
    isOnline: true,
    avatar: "AS",
    experience: "Estudante",
    bio: "Estudante de Ciência da Computação apaixonada por algoritmos e estruturas de dados. Tenho experiência em linguagens como Python, Java e C++, e adoro ajudar outros estudantes a compreender conceitos complexos de programação.",
    specialties: ["Algoritmos", "Estruturas de Dados", "Python", "Java", "C++"],
    stats: {
      totalStudents: 47,
      completedSessions: 89,
      responseTime: "2 horas"
    },
    reviews: [
      {
        id: 1,
        student: "Carlos M.",
        rating: 5,
        comment: "Excelente explicação sobre algoritmos de ordenação! Muito didática.",
        date: "há 2 dias"
      },
      {
        id: 2,
        student: "Maria L.",
        rating: 5,
        comment: "Ana me ajudou muito com estruturas de dados. Recomendo!",
        date: "há 1 semana"
      },
      {
        id: 3,
        student: "João P.",
        rating: 4,
        comment: "Ótima mentora, sempre disposta a esclarecer dúvidas.",
        date: "há 2 semanas"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/mentores" className="text-tutoriando-text-light hover:text-tutoriando-blue-dark font-inter">
              ← Voltar aos Mentores
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Perfil Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header do Perfil */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {tutor.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-3xl font-bold text-tutoriando-text-dark font-inter">
                          {tutor.name}
                        </h1>
                        <div className={`w-3 h-3 rounded-full ${tutor.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      </div>
                      <p className="text-lg text-tutoriando-text-light font-inter mb-3">
                        {tutor.subject} • {tutor.experience}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="font-semibold text-tutoriando-text-dark font-inter">{tutor.rating}</span>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          tutor.isOnline 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {tutor.isOnline ? 'Online' : 'Offline'}
                        </span>
                      </div>
                      <p className="text-tutoriando-text-dark font-inter leading-relaxed">
                        {tutor.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Especialidades */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-tutoriando-text-dark font-inter mb-4">
                    Especialidades
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-tutoriando-blue-dark text-white rounded-full text-sm font-inter"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Avaliações */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-tutoriando-text-dark font-inter mb-6">
                    Avaliações dos Estudantes
                  </h2>
                  <div className="space-y-4">
                    {tutor.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-tutoriando-text-dark font-inter">
                              {review.student}
                            </span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-tutoriando-text-light font-inter">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-tutoriando-text-dark font-inter">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Estatísticas */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-tutoriando-text-dark font-inter mb-4">
                    Estatísticas
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Estudantes</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {tutor.stats.totalStudents}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Sessões</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {tutor.stats.completedSessions}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Tempo de Resposta</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {tutor.stats.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ações */}
              <div className="space-y-3">
                <Button className="w-full bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
                <Button variant="outline" className="w-full border-tutoriando-blue-dark text-tutoriando-blue-dark font-inter">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Sessão
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerfilTutor;
