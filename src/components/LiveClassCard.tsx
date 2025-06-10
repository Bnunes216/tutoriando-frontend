
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface LiveClassCardProps {
  title: string;
  tutor: string;
  participants: string[];
  isLive: boolean;
}

const LiveClassCard = ({ title, tutor, participants, isLive }: LiveClassCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {isLive && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-red-500 uppercase font-inter">
                    Ao Vivo
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold text-tutoriando-text-dark mb-1 font-inter">
              {title}
            </h3>
            <p className="text-sm text-tutoriando-text-light font-inter mb-3">
              {tutor}
            </p>
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {participants.slice(0, 4).map((participant, index) => (
                  <Avatar key={index} className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-tutoriando-blue-dark text-white text-xs font-medium">
                      {participant}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              {participants.length > 4 && (
                <span className="text-sm text-tutoriando-text-light font-inter ml-2">
                  {participants[participants.length - 1]}
                </span>
              )}
            </div>
          </div>
          
          <Button className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter">
            Participar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveClassCard;
