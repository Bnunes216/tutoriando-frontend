
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoPlayerSection from '@/components/VideoPlayerSection';
import ClassInfoSection from '@/components/ClassInfoSection';
import ParticipantsList from '@/components/ParticipantsList';
import ChatSection from '@/components/ChatSection';

const AulaAoVivo = () => {
  const { id } = useParams();
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Ana Silva",
      message: "Bem-vindos à aula sobre Algoritmos de Ordenação!",
      time: "14:32",
      isInstructor: true
    },
    {
      id: 2,
      user: "Carlos S.",
      message: "Obrigado professora!",
      time: "14:33",
      isInstructor: false
    },
    {
      id: 3,
      user: "Maria L.",
      message: "Estou ansiosa para aprender sobre Quick Sort",
      time: "14:34",
      isInstructor: false
    }
  ]);

  // Dados simulados da aula baseado no ID
  const liveClass = {
    id: id || '1',
    title: "Algoritmos de Ordenação",
    tutor: "Dr. Ana Silva",
    participants: ["AS", "JP", "IC", "CS", "RL"],
    isLive: true,
    startTime: "14:30",
    duration: "1h 30min",
    topic: "Quick Sort e Merge Sort"
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "Você",
        message: message.trim(),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isInstructor: false
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/cursos" className="text-tutoriando-text-light hover:text-tutoriando-blue-dark font-inter">
              ← Voltar aos Meus Cursos
            </Link>
          </div>

          {/* Header da Aula */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-red-500 uppercase font-inter">
                Ao Vivo
              </span>
            </div>
            <h1 className="text-3xl font-bold text-tutoriando-text-dark font-inter mb-2">
              {liveClass.title}
            </h1>
            <p className="text-lg text-tutoriando-text-light font-inter">
              {liveClass.tutor} • {liveClass.topic}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Área Principal do Vídeo */}
            <div className="lg:col-span-3 space-y-6">
              <VideoPlayerSection
                tutorName={liveClass.tutor}
                isMicOn={isMicOn}
                isCameraOn={isCameraOn}
                onToggleMic={() => setIsMicOn(!isMicOn)}
                onToggleCamera={() => setIsCameraOn(!isCameraOn)}
              />

              <ClassInfoSection
                participantCount={liveClass.participants.length}
                duration={liveClass.duration}
                startTime={liveClass.startTime}
              />
            </div>

            {/* Sidebar - Participantes e Chat */}
            <div className="space-y-6">
              <ParticipantsList
                participants={liveClass.participants}
                tutorName={liveClass.tutor}
              />

              <ChatSection
                messages={messages}
                message={message}
                onMessageChange={setMessage}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AulaAoVivo;
