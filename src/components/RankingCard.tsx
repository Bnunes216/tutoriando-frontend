
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Award } from 'lucide-react';

interface RankingCardProps {
  name: string;
  position: number;
  points: number;
  avatar: string;
}

const RankingCard = ({ name, position, points, avatar }: RankingCardProps) => {
  const getPositionIcon = () => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return <span className="text-lg font-bold text-tutoriando-text-dark">#{position}</span>;
    }
  };

  const getCardStyle = () => {
    switch (position) {
      case 1:
        return "border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-white";
      case 2:
        return "border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-white";
      case 3:
        return "border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-white";
      default:
        return "";
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${getCardStyle()}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {getPositionIcon()}
          </div>
          
          <Avatar className="w-12 h-12 flex-shrink-0">
            <AvatarFallback className="bg-tutoriando-blue-dark text-white text-sm font-medium">
              {avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-tutoriando-text-dark mb-1 font-inter">
              {name}
            </h3>
            <p className="text-tutoriando-blue-dark font-medium font-inter">
              {points.toLocaleString()} pontos
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingCard;
