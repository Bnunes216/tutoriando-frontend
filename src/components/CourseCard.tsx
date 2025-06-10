
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  category: string;
  image: string;
}

const CourseCard = ({ title, category, image }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-tutoriando-text-dark mb-2 font-inter">
          {title}
        </h3>
        <p className="text-sm text-tutoriando-text-light font-inter">
          {category}
        </p>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
