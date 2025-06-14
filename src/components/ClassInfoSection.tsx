
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, MessageSquare } from 'lucide-react';

interface ClassInfoSectionProps {
  participantCount: number;
  duration: string;
  startTime: string;
}

const ClassInfoSection = ({ participantCount, duration, startTime }: ClassInfoSectionProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-tutoriando-blue-dark" />
            <div>
              <p className="text-sm text-tutoriando-text-light font-inter">Participantes</p>
              <p className="font-semibold text-tutoriando-text-dark font-inter">
                {participantCount} alunos
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-tutoriando-blue-dark" />
            <div>
              <p className="text-sm text-tutoriando-text-light font-inter">Duração</p>
              <p className="font-semibold text-tutoriando-text-dark font-inter">
                {duration}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-tutoriando-blue-dark" />
            <div>
              <p className="text-sm text-tutoriando-text-light font-inter">Iniciado às</p>
              <p className="font-semibold text-tutoriando-text-dark font-inter">
                {startTime}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassInfoSection;
