import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('order-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute top-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-pink-900/10 rounded-full blur-[80px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-0 relative z-10 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 h-full">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(212,168,15,0.2)] hover:shadow-[0_0_25px_rgba(212,168,15,0.4)] transition-all cursor-default">
              <Star size={14} className="text-gold-400 fill-gold-400 animate-pulse" />
              <span className="text-xs font-bold text-gold-200 uppercase tracking-wider">Siêu phẩm tháng 4</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="block text-white drop-shadow-xl">Đánh Thức</span>
              <span className="gold-text-gradient text-glow drop-shadow-xl">Vẻ Đẹp Đôi Môi</span>
            </h1>
            
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed border-l-2 border-gold-500/30 pl-4">
              Lip Repair Gel - Giải pháp phục hồi chuyên sâu từ Doctor Magic. 
              <span className="text-white font-semibold"> Trị thâm</span>, <span className="text-white font-semibold">dưỡng ẩm</span> và trả lại sắc hồng tự nhiên chỉ sau <span className="text-gold-400 font-bold">7 ngày</span> sử dụng.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full pt-4">
               <button 
                onClick={scrollToForm}
                className="relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(212,168,15,0.4)] hover:shadow-[0_0_40px_rgba(212,168,15,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden"
               >
                 <div className="absolute inset-0 bg-white/30 w-[50%] skew-x-12 -translate-x-[200%] group-hover:animate-[shimmer_1s_infinite]"></div>
                 <span className="relative z-10">MUA NGAY - GIẢM 50%</span>
                 <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
               </button>
               
               <div className="flex flex-col items-center sm:items-start group cursor-default">
                  <span className="text-gray-500 line-through text-sm group-hover:text-gray-400 transition-colors">900.000 VNĐ</span>
                  <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-bold text-white group-hover:text-gold-300 transition-colors">450.000đ</span>
                     <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded animate-bounce">-50%</span>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400 pt-6 border-t border-gray-800 w-full lg:w-3/4 justify-center lg:justify-start">
               <div className="flex items-center gap-2 group cursor-pointer">
                 <ShieldCheck size={18} className="text-gold-500 group-hover:scale-110 transition-transform" />
                 <span className="group-hover:text-gold-200 transition-colors">Chính hãng 100%</span>
               </div>
               <div className="flex items-center gap-2 group cursor-pointer">
                 <ShieldCheck size={18} className="text-gold-500 group-hover:scale-110 transition-transform" />
                 <span className="group-hover:text-gold-200 transition-colors">Hoàn tiền nếu không hiệu quả</span>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center relative perspective-1000">
            {/* Decorative Circle Behind */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-gold-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] border border-gold-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            
            {/* Glow behind product */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gold-500/30 blur-[60px] animate-pulse"></div>

            {/* Product Image - Simulating the Doctor Magic Box */}
            <div className="relative z-10 animate-float">
               <img 
                 src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
                 alt="Doctor Magic Lip Repair Gel" 
                 className="w-auto h-[380px] sm:h-[550px] object-contain drop-shadow-[0_20px_50px_rgba(212,168,15,0.15)] transform transition-transform duration-500 hover:rotate-2"
               />
               
               {/* Floating Tag */}
               <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md text-black p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-[bounce_3s_infinite]">
                  <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <Star size={20} className="text-red-600 fill-red-600" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-gray-500 uppercase">Ưu đãi độc quyền</span>
                        <span className="block text-xl font-bold text-red-600">MUA 2 TẶNG 1</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;