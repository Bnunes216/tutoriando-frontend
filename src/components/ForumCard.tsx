
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Heart } from 'lucide-react';
import CommentModal from './CommentModal';

interface Comment {
  id: number;
  author: string;
  content: string;
  avatar: string;
  time: string;
}

interface ForumCardProps {
  id: number;
  author: string;
  title: string;
  description: string;
  comments: number;
  likes: number;
  avatar: string;
}

const ForumCard = ({ id, author, title, description, comments, likes, avatar }: ForumCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [postComments, setPostComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Pedro Santos",
      content: "Muito interessante! Também tenho essa dúvida.",
      avatar: "PS",
      time: "2h atrás"
    },
    {
      id: 2,
      author: "Julia Lima",
      content: "Recomendo dar uma olhada na documentação oficial, tem exemplos bem claros.",
      avatar: "JL",
      time: "1h atrás"
    }
  ]);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleAddComment = (comment: string) => {
    const newComment: Comment = {
      id: postComments.length + 1,
      author: "Você",
      content: comment,
      avatar: "VC",
      time: "agora"
    };
    setPostComments(prev => [...prev, newComment]);
    setCommentCount(prev => prev + 1);
  };

  return (
    <>
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
                <button
                  onClick={() => setIsCommentModalOpen(true)}
                  className="flex items-center gap-2 hover:text-tutoriando-blue-dark transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-tutoriando-text-light" />
                  <span className="text-sm text-tutoriando-text-light font-inter">
                    {commentCount} comentários
                  </span>
                </button>
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors"
                >
                  <Heart 
                    className={`w-4 h-4 transition-colors ${
                      isLiked ? 'text-red-500 fill-red-500' : 'text-tutoriando-text-light'
                    }`} 
                  />
                  <span className="text-sm text-tutoriando-text-light font-inter">
                    {likeCount} curtidas
                  </span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        postTitle={title}
        comments={postComments}
        onAddComment={handleAddComment}
      />
    </>
  );
};

export default ForumCard;
