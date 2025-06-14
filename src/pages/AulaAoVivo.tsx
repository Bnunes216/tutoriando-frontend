
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, Video, VideoOff, Users, MessageSquare, Settings, Phone } from 'lucide-react';

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
              {/* Tela Principal */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-32 h-32 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl font-bold">AS</span>
                        </div>
                        <h3 className="text-xl font-semibold font-inter mb-2">{liveClass.tutor}</h3>
                        <p className="text-gray-300 font-inter">Compartilhando tela</p>
                      </div>
                    </div>
                    
                    {/* Controles de Vídeo */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-3 bg-black bg-opacity-50 rounded-lg px-4 py-2">
                        <Button
                          size="sm"
                          variant={isMicOn ? "default" : "secondary"}
                          onClick={() => setIsMicOn(!isMicOn)}
                          className="p-2"
                        >
                          {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant={isCameraOn ? "default" : "secondary"}
                          onClick={() => setIsCameraOn(!isCameraOn)}
                          className="p-2"
                        >
                          {isCameraOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="secondary" className="p-2">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" className="p-2">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informações da Aula */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Participantes</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {liveClass.participants.length} alunos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Duração</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {liveClass.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-tutoriando-blue-dark" />
                      <div>
                        <p className="text-sm text-tutoriando-text-light font-inter">Iniciado às</p>
                        <p className="font-semibold text-tutoriando-text-dark font-inter">
                          {liveClass.startTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Participantes e Chat */}
            <div className="space-y-6">
              {/* Participantes */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-tutoriando-text-dark font-inter mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Participantes ({liveClass.participants.length})
                  </h3>
                  <div className="space-y-2">
                    {liveClass.participants.map((participant, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-tutoriando-blue-dark text-white text-xs">
                            {participant}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-tutoriando-text-dark font-inter">
                          {participant === "AS" ? liveClass.tutor : `Estudante ${participant}`}
                        </span>
                        {participant === "AS" && (
                          <span className="text-xs bg-tutoriando-blue-dark text-white px-2 py-1 rounded">
                            Instrutor
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Chat */}
              <Card className="flex-1">
                <CardContent className="p-4 h-96 flex flex-col">
                  <h3 className="text-lg font-bold text-tutoriando-text-dark font-inter mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Chat
                  </h3>
                  
                  {/* Mensagens */}
                  <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`font-medium font-inter ${
                            msg.isInstructor ? 'text-tutoriando-blue-dark' : 'text-tutoriando-text-dark'
                          }`}>
                            {msg.user}
                          </span>
                          <span className="text-xs text-tutoriando-text-light font-inter">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-tutoriando-text-dark font-inter">
                          {msg.message}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Campo de Mensagem */}
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 text-sm font-inter"
                    />
                    <Button 
                      type="submit" 
                      size="sm"
                      className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end font-inter"
                    >
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AulaAoVivo;
