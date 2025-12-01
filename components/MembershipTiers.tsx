import React from 'react';
import { Crown, Gift, Star } from 'lucide-react';

const tiers = [
  {
    name: "BẠC",
    color: "from-gray-300 to-gray-500",
    shadow: "shadow-gray-400/20",
    gift: "Mặt Nạ Dưỡng Ẩm",
    price: "Trị giá 50K",
    req: "Chi tiêu < 2 triệu",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "VÀNG",
    color: "from-yellow-300 to-yellow-500",
    shadow: "shadow-yellow-400/20",
    gift: "Son Dưỡng Mini",
    price: "Trị giá 150K",
    req: "Chi tiêu 2 - 5 triệu",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "BẠCH KIM",
    color: "from-cyan-200 to-cyan-400",
    shadow: "shadow-cyan-400/20",
    gift: "Serum Tế Bào Gốc",
    price: "Trị giá 300K",
    req: "Chi tiêu 5 - 10 triệu",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "KIM CƯƠNG",
    color: "from-purple-300 to-purple-500",
    shadow: "shadow-purple-400/20",
    gift: "Bộ Full Skincare",
    price: "Trị giá 1 Triệu",
    req: "Chi tiêu > 10 triệu",
    img: "https://images.unsplash.com/photo-1556228720-19173eb6498b?auto=format&fit=crop&q=80&w=200"
  }
];

const MembershipTiers: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gold-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-white rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
            <div className="inline-block p-4 rounded-full bg-brand-card border border-gold-500/50 mb-6 shadow-[0_0_25px_rgba(212,168,15,0.2)] animate-[bounce_3s_infinite]">
                <Gift size={32} className="text-gold-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                QUÀ TẶNG <span className="text-gold-400">KHÁCH THÂN THIẾT</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Tham gia chương trình thành viên để nhận hàng ngàn ưu đãi độc quyền và quà tặng giá trị từ Doctor Magic.</p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {tiers.map((tier, idx) => (
                <div key={idx} className="relative group cursor-pointer perspective-1000">
                    {/* Hover Glow Background */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-b ${tier.color} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}></div>
                    
                    <div className="relative h-full bg-brand-card/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                        
                        {/* Shine Effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                        {/* Crown Icon */}
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Crown size={32} className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color} drop-shadow-md`} fill="currentColor" fillOpacity={0.1} />
                        </div>

                        {/* Rank Name */}
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6 uppercase tracking-widest`}>
                            {tier.name}
                        </h3>

                        {/* Gift Image with Ring */}
                        <div className="relative mb-6">
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tier.color} blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-gray-700 to-gray-900 shadow-inner relative z-10 group-hover:scale-105 transition-transform duration-500">
                                <img src={tier.img} alt={tier.gift} className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="mt-auto space-y-3 w-full">
                             <p className="text-white font-semibold text-lg group-hover:text-gold-200 transition-colors">{tier.gift}</p>
                             <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gray-900/80 rounded-full text-xs text-white border border-gray-700 group-hover:border-white/30 transition-colors`}>
                                <Star size={10} className="fill-current text-gold-500" />
                                {tier.price}
                             </div>
                             <div className="w-full h-[1px] bg-gray-800 my-4 group-hover:bg-gray-700 transition-colors"></div>
                             <p className="text-gray-500 text-sm group-hover:text-gray-300">{tier.req}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;