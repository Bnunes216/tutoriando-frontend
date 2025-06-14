
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search } from 'lucide-react';

const SupportSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 'item-1',
      question: 'Como faço para me inscrever em um curso?',
      answer: 'Para se inscrever em um curso, acesse a página "Meus Cursos", encontre o curso desejado e clique no botão "Inscrever-se". Você será direcionado para o processo de pagamento.'
    },
    {
      id: 'item-2',
      question: 'Posso cancelar minha inscrição?',
      answer: 'Sim, você pode cancelar sua inscrição até 7 dias após a compra para reembolso total. Após esse período, consulte nossa política de cancelamento.'
    },
    {
      id: 'item-3',
      question: 'Como funciona o sistema de pontuação?',
      answer: 'Você ganha pontos completando aulas, participando de fóruns, fazendo exercícios e ajudando outros estudantes. Os pontos são usados no ranking da comunidade.'
    },
    {
      id: 'item-4',
      question: 'Posso baixar as aulas para assistir offline?',
      answer: 'Atualmente, nossas aulas são apenas online. Estamos trabalhando para implementar a funcionalidade de download em breve.'
    },
    {
      id: 'item-5',
      question: 'Como entro em contato com um tutor?',
      answer: 'Você pode entrar em contato com tutores através da plataforma de mensagens interna, disponível na página do curso ou perfil do tutor.'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2">
        {/* Search Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tutoriando-text-light w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar dúvidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tutoriando-blue-dark focus:border-transparent font-inter"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-6 font-inter">
              Dúvidas Frequentes
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-inter">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-tutoriando-text-light font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
      
      {/* Support Illustration */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-64 h-64 bg-gradient-to-br from-tutoriando-blue-dark to-tutoriando-blue-gradient-end rounded-lg flex items-center justify-center">
          <div className="text-6xl">🎧</div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
