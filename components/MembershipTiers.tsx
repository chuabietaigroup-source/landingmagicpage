import React from 'react';
import { Crown, Gift } from 'lucide-react';

const tiers = [
  {
    name: "BẠC",
    color: "from-gray-300 to-gray-500",
    gift: "Mặt Nạ Dưỡng Ẩm",
    price: "Trị giá 50K",
    req: "Chi tiêu < 2 triệu",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "VÀNG",
    color: "from-yellow-300 to-yellow-500",
    gift: "Son Dưỡng Mini",
    price: "Trị giá 150K",
    req: "Chi tiêu 2 - 5 triệu",
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "BẠCH KIM",
    color: "from-cyan-200 to-cyan-400",
    gift: "Serum Tế Bào Gốc",
    price: "Trị giá 300K",
    req: "Chi tiêu 5 - 10 triệu",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "KIM CƯƠNG",
    color: "from-purple-300 to-purple-500",
    gift: "Bộ Full Skincare",
    price: "Trị giá 1 Triệu",
    req: "Chi tiêu > 10 triệu",
    img: "https://images.unsplash.com/photo-1556228720-19173eb6498b?auto=format&fit=crop&q=80&w=200"
  }
];

const MembershipTiers: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
            <div className="inline-block p-3 rounded-full bg-brand-card border border-gold-500/50 mb-4 shadow-[0_0_15px_rgba(212,168,15,0.3)]">
                <Gift size={32} className="text-gold-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                QUÀ TẶNG <span className="text-gold-400">KHÁCH THÂN THIẾT</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
            <p className="mt-4 text-gray-400">Lưu ý: Mỗi khách hàng chỉ nhận 1 quà tặng/tháng</p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {tiers.map((tier, idx) => (
                <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-2xl transform transition-transform group-hover:-translate-y-2 duration-300"></div>
                    <div className="relative h-full bg-brand-card border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden group-hover:border-gold-500/30 transition-colors">
                        
                        {/* Crown Icon */}
                        <div className="mb-4">
                            <Crown size={32} className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`} fill="currentColor" fillOpacity={0.2} />
                        </div>

                        {/* Rank Name */}
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6 uppercase tracking-widest`}>
                            {tier.name}
                        </h3>

                        {/* Gift Image */}
                        <div className="w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-r from-gray-700 to-gray-900 shadow-inner">
                             <img src={tier.img} alt={tier.gift} className="w-full h-full object-cover rounded-full" />
                        </div>

                        {/* Details */}
                        <div className="mt-auto space-y-2">
                             <p className="text-white font-semibold text-lg">{tier.gift}</p>
                             <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs text-gold-300 border border-gold-500/20">
                                {tier.price}
                             </span>
                             <div className="w-full h-[1px] bg-gray-800 my-4"></div>
                             <p className="text-gray-500 text-sm">{tier.req}</p>
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