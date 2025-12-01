import React from 'react';
import { Facebook, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                        <span className="text-black font-serif font-bold">D</span>
                    </div>
                    <span className="text-xl font-serif font-bold text-white">DOCTOR MAGIC</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Thương hiệu mỹ phẩm cao cấp hàng đầu, mang lại vẻ đẹp tự nhiên và sự tự tin cho hàng triệu phụ nữ Việt Nam.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-gray-400"><Facebook size={18} /></a>
                    <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-red-600 hover:text-white transition-colors text-gray-400"><Youtube size={18} /></a>
                    <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-pink-600 hover:text-white transition-colors text-gray-400"><Instagram size={18} /></a>
                </div>
            </div>

            {/* Column 2: Support */}
            <div>
                <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Hỗ trợ khách hàng</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Hướng dẫn mua hàng</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Chính sách đổi trả</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Phương thức thanh toán</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Vận chuyển & Giao nhận</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Câu hỏi thường gặp</li>
                </ul>
            </div>

             {/* Column 3: Contact */}
             <div>
                <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Liên hệ</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                        <span>280F31 Lương Định Của, Phường An Phú, Quận 2, TP. Hồ Chí Minh</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={18} className="text-gold-500 shrink-0" />
                        <span>info@doctormagic.vn</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={18} className="text-gold-500 shrink-0" />
                        <span className="text-lg font-bold text-white">1900 633 639</span>
                    </li>
                </ul>
            </div>

             {/* Column 4: Policy */}
             <div>
                <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Chính sách</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Chính sách bảo mật</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Điều khoản sử dụng</li>
                    <li className="hover:text-gold-400 cursor-pointer transition-colors">Chính sách đại lý</li>
                </ul>
                <div className="mt-8">
                     <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=4d9e9e63-311e-4503-a1c9-63301842065e" alt="DMCA Protected" className="opacity-80 hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2024 Doctor Magic. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 bg-white p-0.5 rounded" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 bg-white p-0.5 rounded" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;