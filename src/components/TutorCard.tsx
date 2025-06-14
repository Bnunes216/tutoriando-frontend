
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';

interface TutorCardProps {
  id?: number;
  name: string;
  subject: string;
  rating: number;
  isOnline: boolean;
  avatar: string;
  experience: string;
}

const TutorCard: React.FC<TutorCardProps> = ({ 
  id = 1,
  name, 
  subject, 
  rating, 
  isOnline, 
  avatar, 
  experience 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-tutoriando-blue-gradient-start to-tutoriando-blue-gradient-end rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-semibold text-tutoriando-text-dark font-inter">{name}</h3>
          <p className="text-tutoriando-text-light font-inter">{subject}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
      </div>
      
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-tutoriando-text-dark font-inter">{rating}</span>
        </div>
        <span className="mx-2 text-gray-300">•</span>
        <div className="flex items-center text-tutoriando-text-light">
          <Clock className="w-4 h-4 mr-1" />
          <span className="text-sm font-inter">{experience}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          isOnline 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
      
      <Link to={`/tutor/${id}`}>
        <Button className="w-full bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white font-inter">
          Ver Perfil
        </Button>
      </Link>
    </div>
  );
};

export default TutorCard;
