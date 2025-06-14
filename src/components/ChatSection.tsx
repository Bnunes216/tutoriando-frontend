
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface Message {
  id: number;
  user: string;
  message: string;
  time: string;
  isInstructor: boolean;
}

interface ChatSectionProps {
  messages: Message[];
  message: string;
  onMessageChange: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
}

const ChatSection = ({ messages, message, onMessageChange, onSendMessage }: ChatSectionProps) => {
  return (
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
        <form onSubmit={onSendMessage} className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
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
  );
};

export default ChatSection;
