
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  avatar: string;
  time: string;
}

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  postTitle: string;
  comments: Comment[];
  onAddComment: (comment: string) => void;
}

const CommentModal = ({ isOpen, onClose, postTitle, comments, onAddComment }: CommentModalProps) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-tutoriando-text-dark font-inter flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Comentários
          </DialogTitle>
          <p className="text-sm text-tutoriando-text-light font-inter mt-1">
            {postTitle}
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Lista de comentários */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarFallback className="bg-tutoriando-blue-dark text-white text-xs">
                    {comment.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-tutoriando-text-dark font-inter">
                      {comment.author}
                    </span>
                    <span className="text-xs text-tutoriando-text-light font-inter">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-sm text-tutoriando-text-dark font-inter">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-center text-tutoriando-text-light font-inter py-8">
                Ainda não há comentários. Seja o primeiro a comentar!
              </p>
            )}
          </div>

          {/* Formulário para novo comentário */}
          <form onSubmit={handleSubmit} className="flex gap-2 pt-4 border-t">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escreva seu comentário..."
              className="flex-1 font-inter"
            />
            <Button 
              type="submit" 
              disabled={!newComment.trim()}
              className="bg-tutoriando-blue-dark hover:bg-tutoriando-blue-gradient-end text-white px-6 font-inter"
            >
              Comentar
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
