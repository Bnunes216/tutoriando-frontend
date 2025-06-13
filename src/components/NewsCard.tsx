
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
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
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
