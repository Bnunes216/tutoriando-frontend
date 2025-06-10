
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Heart } from 'lucide-react';

interface ForumCardProps {
  author: string;
  title: string;
  description: string;
  comments: number;
  likes: number;
  avatar: string;
}

const ForumCard = ({ author, title, description, comments, likes, avatar }: ForumCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarFallback className="bg-tutoriando-blue-dark text-white text-sm font-medium">
              {avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-tutoriando-text-dark mb-1 font-inter">
              {title}
            </h3>
            <p className="text-sm text-tutoriando-text-light font-inter mb-2">
              por {author}
            </p>
            <p className="text-tutoriando-text-dark font-inter mb-4 line-clamp-2">
              {description}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-tutoriando-text-light" />
                <span className="text-sm text-tutoriando-text-light font-inter">
                  {comments} comentários
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-tutoriando-text-light" />
                <span className="text-sm text-tutoriando-text-light font-inter">
                  {likes} curtidas
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumCard;
