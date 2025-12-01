import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureIcons from './components/FeatureIcons';
import MembershipTiers from './components/MembershipTiers';
import ProductHighlight from './components/ProductHighlight';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Curved Divider Effect */}
        <div className="w-full h-12 bg-brand-black relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-black to-brand-dark rounded-b-[50%] scale-x-110"></div>
        </div>

        <div className="bg-brand-dark py-8">
           <FeatureIcons />
        </div>

        <MembershipTiers />
        
        <ProductHighlight />
        
        <div id="order-form-section" className="py-16 bg-gradient-to-br from-brand-black via-brand-dark to-black relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-200 mb-4">
                ĐẶT MUA NGAY HÔM NAY
              </h2>
              <p className="text-gray-400">Để lại thông tin để được chuyên gia tư vấn miễn phí</p>
            </div>
            <div className="flex justify-center">
               <OrderForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;