
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ForumCard from '@/components/ForumCard';
import RankingCard from '@/components/RankingCard';
import SupportSection from '@/components/SupportSection';
import { MessageSquare, Trophy, HelpCircle } from 'lucide-react';

const Comunidade = () => {
  const forumPosts = [
    {
      id: 1,
      author: "Ana Silva",
      title: "Dúvidas sobre Cálculo Diferencial",
      description: "Estou com dificuldades para entender os conceitos de limite. Alguém pode me ajudar com exercícios práticos?",
      comments: 12,
      likes: 8,
      avatar: "AS"
    },
    {
      id: 2,
      author: "Carlos Santos",
      title: "Dicas de Estudo para Física Quântica",
      description: "Compartilho aqui algumas técnicas que me ajudaram muito no aprendizado de física quântica...",
      comments: 5,
      likes: 15,
      avatar: "CS"
    },
    {
      id: 3,
      author: "Maria Oliveira",
      title: "Grupo de Estudos - Literatura Brasileira",
      description: "Estou formando um grupo de estudos sobre literatura brasileira. Quem tem interesse?",
      comments: 18,
      likes: 22,
      avatar: "MO"
    }
  ];

  const rankings = [
    {
      id: 1,
      name: "João Pedro",
      position: 1,
      points: 2840,
      avatar: "JP"
    },
    {
      id: 2,
      name: "Isabella Costa",
      position: 2,
      points: 2720,
      avatar: "IC"
    },
    {
      id: 3,
      name: "Rafael Lima",
      position: 3,
      points: 2650,
      avatar: "RL"
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
              Comunidade
            </h1>
            <p className="text-lg text-tutoriando-text-light font-inter max-w-2xl mx-auto">
              Conecte-se com outros estudantes, participe de discussões e acompanhe seu progresso
            </p>
          </div>

          {/* Forum Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-tutoriando-blue-dark" />
                <h2 className="text-3xl font-bold text-tutoriando-text-dark font-inter">
                  Fórum de Debates
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                {forumPosts.map((post) => (
                  <ForumCard key={post.id} {...post} />
                ))}
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-64 bg-gradient-to-br from-tutoriando-blue-dark to-tutoriando-blue-gradient-end rounded-full flex items-center justify-center">
                  <div className="text-6xl">🎓</div>
                </div>
              </div>
            </div>
          </section>

          {/* Game Rank Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-8 h-8 text-tutoriando-blue-dark" />
              <h2 className="text-3xl font-bold text-tutoriando-text-dark font-inter">
                Game-rank
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rankings.map((rank) => (
                <RankingCard key={rank.id} {...rank} />
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <HelpCircle className="w-8 h-8 text-tutoriando-blue-dark" />
              <h2 className="text-3xl font-bold text-tutoriando-text-dark font-inter">
                Suporte
              </h2>
            </div>
            
            <SupportSection />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Comunidade;
