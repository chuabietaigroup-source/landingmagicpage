import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const ProductHighlight: React.FC = () => {
    const scrollToForm = () => {
        document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-black overflow-hidden relative">
      {/* Decorative text */}
      <span className="absolute top-10 left-0 text-[10rem] font-bold text-white opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
        LIP REPAIR
      </span>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-gold-500/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Product Image */}
                <div className="w-full md:w-1/2 flex justify-center group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-400 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" 
                            alt="Lip Repair Gel Detail" 
                            className="relative w-[300px] md:w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:rotate-6 transition-transform duration-500"
                        />
                         {/* Badge */}
                         <div className="absolute top-0 right-0 bg-red-600 text-white font-bold py-2 px-4 rounded-lg transform rotate-12 shadow-lg">
                            BEST SELLER
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                     <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Dành riêng cho Membership</h3>
                     <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                        COMBO <span className="text-gold-500">5 CHAI</span>
                     </h2>
                     <p className="text-2xl text-gray-300 mb-8 font-light">
                        NƯỚC SÚC MIỆNG & GEL DƯỠNG
                     </p>

                     <div className="space-y-4 mb-8">
                        {['Phục hồi môi thâm xỉn màu', 'Cấp ẩm chuyên sâu 24h', 'Làm hồng môi tự nhiên', 'Thành phần thiên nhiên an toàn'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="p-1 rounded-full bg-gold-500/20">
                                    <Check size={14} className="text-gold-400" />
                                </div>
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                     </div>

                     <div className="flex flex-col md:flex-row items-center gap-6">
                         <div className="text-center md:text-left">
                             <span className="block text-gray-500 line-through text-lg">575.000đ</span>
                             <span className="block text-4xl font-bold text-gold-400">445.000đ</span>
                         </div>
                         <button 
                            onClick={scrollToForm}
                            className="px-10 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,168,15,0.4)] hover:shadow-[0_0_30px_rgba(212,168,15,0.6)] transition-all flex items-center gap-2"
                        >
                            <Sparkles size={20} />
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