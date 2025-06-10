
import React from 'react';
import { Button } from '@/components/ui/button';

interface TimelineEventProps {
  icon: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

const TimelineEvent = ({ icon, date, time, title, description }: TimelineEventProps) => {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex-shrink-0 w-12 h-12 bg-tutoriando-beige rounded-full flex items-center justify-center text-lg">
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-sm font-medium text-tutoriando-blue-dark font-inter">
            {date}
          </span>
          <span className="text-sm text-tutoriando-text-light font-inter">
            {time}
          </span>
        </div>
        <h4 className="text-base font-semibold text-tutoriando-text-dark mb-1 font-inter">
          {title}
        </h4>
        <p className="text-sm text-tutoriando-text-light font-inter">
          {description}
        </p>
      </div>
      
      <Button 
        size="sm"
        className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter rounded-full px-4"
      >
        Visualizar
      </Button>
    </div>
  );
};

export default TimelineEvent;
