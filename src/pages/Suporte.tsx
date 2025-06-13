
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportSection from '@/components/SupportSection';
import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Suporte = () => {
  return (
    <div className="min-h-screen bg-tutoriando-beige">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="pt-4">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-tutoriando-blue-dark to-tutoriando-blue-gradient-end text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
                Central de Suporte
              </h1>
              <p className="text-xl mb-8 text-gray-200 font-inter max-w-3xl mx-auto">
                Estamos aqui para ajudar você! Encontre respostas para suas dúvidas ou entre em contato conosco
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                    Chat ao Vivo
                  </h3>
                  <p className="text-tutoriando-text-light font-inter mb-4">
                    Converse conosco em tempo real
                  </p>
                  <div className="flex items-center justify-center text-green-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-inter">Online agora</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                    Email
                  </h3>
                  <p className="text-tutoriando-text-light font-inter mb-4">
                    suporte@tutoriando.com
                  </p>
                  <div className="flex items-center justify-center text-tutoriando-text-light">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-inter">Resposta em 24h</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-tutoriando-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-tutoriando-text-dark mb-2 font-inter">
                    Telefone
                  </h3>
                  <p className="text-tutoriando-text-light font-inter mb-4">
                    (11) 9999-9999
                  </p>
                  <div className="flex items-center justify-center text-tutoriando-text-light">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-inter">Seg-Sex 9h-18h</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Section Component */}
            <SupportSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Suporte;
