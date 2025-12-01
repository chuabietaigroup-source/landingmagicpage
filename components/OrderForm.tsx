import React, { useState } from 'react';
import { User, Mail, Phone, ShoppingBag, Loader2, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

/* 
  INSTRUCTION FOR GOOGLE SHEETS INTEGRATION:
  To make this form actually save to your Google Sheet (ID: 11xf5jZDz50hwKlWEFXnLIKmbiPMUn_k0qITyBDfBV6M),
  you need to deploy a Google Apps Script.

  1. Open your Google Sheet.
  2. Go to Extensions > Apps Script.
  3. Paste the following code:

  function doPost(e) {
    var sheet = SpreadsheetApp.openById("11xf5jZDz50hwKlWEFXnLIKmbiPMUn_k0qITyBDfBV6M").getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    
    // Columns: A: Name, B: Phone, C: Email, D: Status
    sheet.appendRow([data.name, data.phone, data.email, "PENDING"]);
    
    return ContentService.createTextOutput(JSON.stringify({"result":"success", "row": sheet.getLastRow()}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  4. Click "Deploy" > "New deployment".
  5. Select type: "Web app".
  6. Description: "Order Form API".
  7. Execute as: "Me".
  8. Who has access: "Anyone" (Important!).
  9. Click "Deploy" and copy the "Web app URL".
  10. Replace 'YOUR_GOOGLE_SCRIPT_URL' in the fetch call below with your new URL.
*/

const SHEET_ID = "11xf5jZDz50hwKlWEFXnLIKmbiPMUn_k0qITyBDfBV6M";

const OrderForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Prepare payload
    const payload = {
      name: formData.name,      // Column A
      phone: formData.phone,    // Column B
      email: formData.email,    // Column C
      status: "PENDING"         // Column D (Implicit in logic)
    };

    try {
      // --- SIMULATION START ---
      console.log(`[Mock API] Saving to Sheet ${SHEET_ID}...`);
      console.log(`[Mock API] Data:`, payload);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      // --- SIMULATION END ---

      setSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({ name: '', phone: '', email: '' });
  };

  if (success) {
      return (
          <div className="bg-brand-card/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gold-500/30 text-center max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all animate-in fade-in zoom-in duration-300">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                   <CheckCircle className="text-white w-12 h-12" />
                </div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 text-gold-400 animate-bounce delay-100"><Sparkles size={20} /></div>
                <div className="absolute -bottom-2 -left-2 text-gold-400 animate-bounce delay-300"><Sparkles size={16} /></div>
              </div>

              <h3 className="text-3xl font-serif font-bold text-white mb-2">Đặt Hàng Thành Công!</h3>
              <div className="h-1 w-16 bg-gold-500 mx-auto mb-4 rounded-full"></div>
              
              <div className="space-y-2 text-gray-300 mb-8">
                  <p>Cảm ơn quý khách <span className="text-gold-400 font-bold">{formData.name}</span>.</p>
                  <p>Thông tin đơn hàng đã được gửi tới hệ thống.</p>
                  <p className="text-sm bg-black/40 py-2 px-4 rounded-lg inline-block border border-gray-700">
                    Chúng tôi sẽ liên hệ SĐT <span className="text-white font-mono font-bold">{formData.phone}</span> để xác nhận ngay.
                  </p>
              </div>

              <button 
                onClick={handleReset}
                className="w-full py-3 px-6 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all border border-gray-600 hover:border-gold-500/50 flex items-center justify-center gap-2 group"
              >
                  <span>Tiếp tục mua sắm</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-gold-500" />
              </button>
          </div>
      )
  }

  return (
    <div className="w-full max-w-md relative group mx-auto">
        {/* Animated Gradient Border */}
        <div className="absolute -inset-[3px] bg-gradient-to-r from-gold-500 via-purple-500 to-gold-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]"></div>
        
        <form onSubmit={handleSubmit} className="relative w-full bg-[#121212] p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            {/* Form Header */}
            <div className="mb-8 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent mb-4 border border-gold-500/30 shadow-[0_0_15px_rgba(212,168,15,0.2)]">
                    <ShoppingBag size={28} className="text-gold-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thông Tin Nhận Hàng</h3>
                <p className="text-sm text-gray-400">Điền thông tin để nhận tư vấn từ chuyên gia</p>
            </div>
        
            <div className="space-y-6 relative z-10">
                <div className="group/input relative">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1 transition-colors group-focus-within/input:text-white">Họ và Tên</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500 group-focus-within/input:text-gold-400 transition-colors" />
                        </div>
                        <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            className="block w-full pl-10 pr-3 py-3.5 border border-gray-700 rounded-xl leading-5 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all shadow-inner" 
                            placeholder="Ví dụ: Nguyễn Văn An" 
                        />
                    </div>
                </div>

                <div className="group/input relative">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1 transition-colors group-focus-within/input:text-white">Số Điện Thoại</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-500 group-focus-within/input:text-gold-400 transition-colors" />
                        </div>
                        <input 
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel" 
                            pattern="[0-9]{10,11}"
                            title="Vui lòng nhập số điện thoại hợp lệ (10-11 số)"
                            className="block w-full pl-10 pr-3 py-3.5 border border-gray-700 rounded-xl leading-5 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all shadow-inner" 
                            placeholder="Ví dụ: 0912 345 678" 
                        />
                    </div>
                </div>

                <div className="group/input relative">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1 transition-colors group-focus-within/input:text-white">Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-500 group-focus-within/input:text-gold-400 transition-colors" />
                        </div>
                        <input 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            className="block w-full pl-10 pr-3 py-3.5 border border-gray-700 rounded-xl leading-5 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all shadow-inner" 
                            placeholder="Ví dụ: contact@example.com" 
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full relative overflow-hidden flex justify-center items-center gap-2 py-4 px-4 border border-transparent text-base font-bold rounded-xl text-black bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 hover:from-gold-200 hover:to-gold-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gold-500 transition-all shadow-[0_5px_15px_rgba(212,168,15,0.3)] hover:shadow-[0_10px_30px_rgba(212,168,15,0.5)] transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-6 group/btn"
                >
                     {/* Shimmer effect inside button */}
                     <div className="absolute inset-0 bg-white/20 w-[40%] skew-x-12 -translate-x-[300%] group-hover/btn:animate-[shimmer_1s_infinite]"></div>

                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" />
                            <span>Đang xử lý...</span>
                        </>
                    ) : (
                        <>
                            <span className="relative z-10">NHẬN ƯU ĐÃI NGAY</span>
                            <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
                     <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                     <p className="text-xs text-center text-gray-400">
                        Hơn <span className="text-white font-bold">1,240</span> khách hàng đã đăng ký hôm nay
                    </p>
                </div>
            </div>
        </form>
    </div>
  );
};

export default OrderForm;