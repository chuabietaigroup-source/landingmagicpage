import React from 'react';
import { Truck, Award, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} />,
    title: "FREESHIP TOÀN QUỐC",
    desc: "Đơn hàng từ 500k"
  },
  {
    icon: <Award size={32} />,
    title: "VOUCHER TÍCH LŨY",
    desc: "Hoàn tiền lên đến 10%"
  },
  {
    icon: <Heart size={32} />,
    title: "ƯU TIÊN HÀNG HÓA",
    desc: "Dành cho thành viên VIP"
  },
  {
    icon: <Clock size={32} />,
    title: "GIAO HÀNG HỎA TỐC",
    desc: "Nhận hàng trong 2h"
  }
];

const FeatureIcons: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-brand-card/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gold-500/50 hover:bg-brand-card transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,168,15,0.1)]">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-black to-brand-dark border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-gold-500/10 group-hover:shadow-gold-500/30 group-hover:border-gold-500">
              {item.icon}
            </div>
            <h3 className="text-gold-100 font-bold mb-1 group-hover:text-gold-400 transition-colors">{item.title}</h3>
            <p className="text-gray-500 text-sm group-hover:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureIcons;