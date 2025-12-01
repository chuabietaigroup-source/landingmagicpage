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
      // Since we don't have the actual Apps Script URL deployed yet, we simulate the network request.
      console.log(`[Mock API] Saving to Sheet ${SHEET_ID}...`);
      console.log(`[Mock API] Data:`, payload);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If you had the URL, the real code would look like this:
      /*
      await fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      */
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
    <div className="w-full max-w-md relative group">
        {/* Glow Effect Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <form onSubmit={handleSubmit} className="relative w-full bg-brand-card/90 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 mb-4 border border-gold-500/30">
                    <ShoppingBag size={24} className="text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Thông Tin Nhận Hàng</h3>
                <p className="text-sm text-gray-500 mt-1">Vui lòng điền đầy đủ thông tin bên dưới</p>
            </div>
        
            <div className="space-y-5">
                <div className="group/input">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1">Họ và Tên</label>
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
                            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl leading-5 bg-black/60 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all" 
                            placeholder="Ví dụ: Nguyễn Văn An" 
                        />
                    </div>
                </div>

                <div className="group/input">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1">Số Điện Thoại</label>
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
                            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl leading-5 bg-black/60 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all" 
                            placeholder="Ví dụ: 0912 345 678" 
                        />
                    </div>
                </div>

                <div className="group/input">
                    <label className="block text-xs font-bold text-gold-500 uppercase tracking-wider mb-2 ml-1">Email</label>
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
                            className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl leading-5 bg-black/60 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 sm:text-sm transition-all" 
                            placeholder="Ví dụ: contact@example.com" 
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent text-base font-bold rounded-xl text-black bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 hover:from-gold-200 hover:to-gold-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gold-500 transition-all shadow-[0_5px_15px_rgba(212,168,15,0.3)] hover:shadow-[0_8px_25px_rgba(212,168,15,0.5)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" />
                            <span>Đang xử lý...</span>
                        </>
                    ) : (
                        <>
                            <span>NHẬN ƯU ĐÃI NGAY</span>
                            <ArrowRight size={20} />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <p className="text-xs text-center text-gray-400">
                        Đăng ký để giữ suất ưu đãi giảm 50%
                    </p>
                </div>
            </div>
        </form>
    </div>
  );
};

export default OrderForm;