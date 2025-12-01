import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 lg:py-0 relative z-10 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 h-full">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
              <Star size={14} className="text-gold-400 fill-gold-400" />
              <span className="text-xs font-bold text-gold-200 uppercase tracking-wider">Siêu phẩm tháng 4</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="block text-white">Đánh Thức</span>
              <span className="gold-text-gradient text-glow">Vẻ Đẹp Đôi Môi</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Lip Repair Gel - Giải pháp phục hồi chuyên sâu từ Doctor Magic. 
              Trị thâm, dưỡng ẩm và trả lại sắc hồng tự nhiên chỉ sau 7 ngày sử dụng.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
               <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold rounded-full shadow-lg shadow-gold-500/30 hover:scale-105 hover:shadow-gold-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
               >
                 <span>MUA NGAY - GIẢM 50%</span>
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
               
               <div className="flex flex-col items-center sm:items-start">
                  <span className="text-gray-500 line-through text-sm">900.000 VNĐ</span>
                  <span className="text-2xl font-bold text-white">450.000 VNĐ</span>
               </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
               <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-gold-500" />
                 <span>Chính hãng 100%</span>
               </div>
               <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-gold-500" />
                 <span>Hoàn tiền nếu không hiệu quả</span>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Decorative Circle Behind */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-gold-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[380px] sm:h-[380px] border border-gold-500/40 rounded-full"></div>
            
            {/* Product Image Placeholder - Simulating the Doctor Magic Box */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
               {/* This represents the provided product image */}
               <img 
                 src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
                 alt="Doctor Magic Lip Repair Gel" 
                 className="w-auto h-[400px] sm:h-[550px] object-contain drop-shadow-2xl"
               />
               
               {/* Floating Tag */}
               <div className="absolute -bottom-4 -right-4 bg-white text-black p-4 rounded-xl shadow-2xl animate-bounce">
                  <span className="block text-xs font-bold text-gray-500">COMBO 2 HỘP</span>
                  <span className="block text-xl font-bold text-red-600">GIẢM THÊM 10%</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;