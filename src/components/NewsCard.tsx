
import React from 'react';
import { Button } from '@/components/ui/button';

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end flex items-center justify-center">
        <div className="text-white text-center p-4">
          <div className="text-4xl mb-2">📚</div>
          <div className="text-sm opacity-90">{image}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-tutoriando-text-light mb-2 font-inter">{date}</div>
        <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-3 font-inter">{title}</h3>
        <p className="text-tutoriando-text-light mb-4 font-inter leading-relaxed">{description}</p>
        
        <Button 
          variant="outline" 
          className="border-tutoriando-blue-dark text-tutoriando-blue-dark hover:bg-tutoriando-blue-dark hover:text-white font-inter"
        >
          Ver mais
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
