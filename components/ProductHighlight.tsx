import React from 'react';
import { Check, Sparkles, Star } from 'lucide-react';

const ProductHighlight: React.FC = () => {
    const scrollToForm = () => {
        document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-brand-black overflow-hidden relative">
      {/* Decorative text - Slow Parallax/Marquee */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
          <div className="whitespace-nowrap animate-[shimmer_20s_linear_infinite]">
             <span className="text-[10rem] font-bold text-white mr-20">LIP REPAIR GEL</span>
             <span className="text-[10rem] font-bold text-white mr-20">LIP REPAIR GEL</span>
          </div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div 
            key={i}
            className="absolute rounded-full bg-gold-400/20 blur-sm animate-float"
            style={{
                width: Math.random() * 20 + 10 + 'px',
                height: Math.random() * 20 + 10 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: Math.random() * 5 + 5 + 's',
                animationDelay: Math.random() * 2 + 's'
            }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-gold-500/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2 group-hover:bg-gold-500/10 transition-colors duration-1000"></div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Product Image */}
                <div className="w-full md:w-1/2 flex justify-center group/img">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-400 rounded-full blur-[60px] opacity-20 group-hover/img:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" 
                            alt="Lip Repair Gel Detail" 
                            className="relative w-[300px] md:w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover/img:rotate-6 group-hover/img:scale-105 transition-all duration-500 z-10"
                        />
                         {/* Badge */}
                         <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-2 px-6 rounded-full transform rotate-12 shadow-lg shadow-red-500/30 z-20 animate-[bounce_4s_infinite]">
                            BEST SELLER
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
                     <div className="inline-flex items-center gap-2 mb-4">
                        <Star className="text-gold-500 fill-gold-500" size={16} />
                        <h3 className="text-gold-400 font-bold tracking-widest uppercase">Dành riêng cho Membership</h3>
                     </div>
                     
                     <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        COMBO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">5 CHAI</span>
                     </h2>
                     <p className="text-2xl text-gray-300 mb-8 font-light border-b border-gray-800 pb-6">
                        NƯỚC SÚC MIỆNG & GEL DƯỠNG
                     </p>

                     <div className="space-y-4 mb-10">
                        {['Phục hồi môi thâm xỉn màu', 'Cấp ẩm chuyên sâu 24h', 'Làm hồng môi tự nhiên', 'Thành phần thiên nhiên an toàn'].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 justify-center md:justify-start group/item">
                                <div className="p-1 rounded-full bg-gold-500/20 group-hover/item:bg-gold-500/40 transition-colors">
                                    <Check size={16} className="text-gold-400 group-hover/item:text-gold-200" />
                                </div>
                                <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                            </div>
                        ))}
                     </div>

                     <div className="flex flex-col md:flex-row items-center gap-8">
                         <div className="text-center md:text-left">
                             <span className="block text-gray-500 line-through text-lg">575.000đ</span>
                             <span className="block text-5xl font-bold text-gold-400 drop-shadow-lg">445.000đ</span>
                         </div>
                         <button 
                            onClick={scrollToForm}
                            className="px-10 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,168,15,0.4)] hover:shadow-[0_0_40px_rgba(212,168,15,0.6)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                        >
                            <Sparkles size={20} className="animate-spin-slow" />
                            MUA NGAY
                         </button>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;