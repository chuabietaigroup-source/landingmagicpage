import React from 'react';
import { ShoppingCart, Search, Menu, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold-500/30 shadow-lg shadow-gold-900/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20">
              <span className="text-black font-serif font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-serif font-bold text-gold-100 tracking-wider">DOCTOR MAGIC</h1>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Professional Cosmetics</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md relative">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm..." 
              className="w-full bg-brand-card border border-gray-700 text-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button className="absolute right-1 top-1 p-1.5 bg-gold-500 rounded-full text-black hover:bg-gold-400 transition-colors">
              <Search size={16} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-gold-200">
                <Phone size={18} />
                <span className="font-semibold">1900 633 639</span>
             </div>
             
             <button className="relative p-2 text-gray-300 hover:text-gold-300 transition-colors">
               <ShoppingCart size={24} />
               <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
             </button>
             
             <button className="md:hidden p-2 text-gray-300">
               <Menu size={24} />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;