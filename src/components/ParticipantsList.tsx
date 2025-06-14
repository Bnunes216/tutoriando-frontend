
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users } from 'lucide-react';

interface ParticipantsListProps {
  participants: string[];
  tutorName: string;
}

const ParticipantsList = ({ participants, tutorName }: ParticipantsListProps) => {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-tutoriando-text-dark font-inter mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Participantes ({participants.length})
        </h3>
        <div className="space-y-2">
          {participants.map((participant, index) => (
            <div key={index} className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-tutoriando-blue-dark text-white text-xs">
                  {participant}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-tutoriando-text-dark font-inter">
                {participant === "AS" ? tutorName : `Estudante ${participant}`}
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
  );
};

export default ParticipantsList;
