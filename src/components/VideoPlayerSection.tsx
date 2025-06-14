
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Video, VideoOff, Settings, Phone } from 'lucide-react';

interface VideoPlayerSectionProps {
  tutorName: string;
  isMicOn: boolean;
  isCameraOn: boolean;
  onToggleMic: () => void;
  onToggleCamera: () => void;
}

const VideoPlayerSection = ({ tutorName, isMicOn, isCameraOn, onToggleMic, onToggleCamera }: VideoPlayerSectionProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold">AS</span>
              </div>
              <h3 className="text-xl font-semibold font-inter mb-2">{tutorName}</h3>
              <p className="text-gray-300 font-inter">Compartilhando tela</p>
            </div>
          </div>
          
          {/* Controles de Vídeo */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-3 bg-black bg-opacity-50 rounded-lg px-4 py-2">
              <Button
                size="sm"
                variant={isMicOn ? "default" : "secondary"}
                onClick={onToggleMic}
                className="p-2"
              >
                {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </Button>
              <Button
                size="sm"
                variant={isCameraOn ? "default" : "secondary"}
                onClick={onToggleCamera}
                className="p-2"
              >
                {isCameraOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Settings className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="destructive" className="p-2">
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayerSection;
