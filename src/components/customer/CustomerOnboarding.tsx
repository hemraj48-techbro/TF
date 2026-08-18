import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CustomerOnboarding: React.FC = () => {
  const { setCustomerOnboarded, showToast } = useApp();
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [phone, setPhone] = useState('9823456789');
  const [otp, setOtp] = useState(['4', '0', '2', '1']);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number');
      return;
    }
    setStep('otp');
    showToast('OTP sent to +91 ' + phone);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      setCustomerOnboarded(true);
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-4 max-w-sm mx-auto">
      {step === 'phone' && (
        <div 
          className="bg-white p-6 rounded-2xl shadow-sm border border-[#eae2d6] text-center"
        >
          <div className="w-14 h-14 bg-[#f6e8e2] text-[#c85a32] rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-7 h-7" />
          </div>

          <h2 className="text-xl font-extrabold text-[#2b2d42] mb-1">Enter your phone</h2>
          <p className="text-xs text-gray-500 mb-6">We'll send a 4-digit code to verify your Nashik account</p>

          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="flex items-center border border-[#eae2d6] rounded-xl px-3 py-2.5 bg-gray-50 text-xs font-bold text-[#2b2d42]">
              <span className="text-gray-400 mr-2">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile number"
                className="bg-transparent flex-1 outline-none font-bold text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#c85a32] text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-[#b54a24] transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#2a9d8f]" />
            <span>100% verified & secure login</span>
          </div>
        </div>
      )}

      {step === 'otp' && (
        <div 
          className="bg-white p-6 rounded-2xl shadow-sm border border-[#eae2d6] text-center"
        >
          <h2 className="text-xl font-extrabold text-[#2b2d42] mb-1">Verify OTP</h2>
          <p className="text-xs text-gray-500 mb-6">Enter code sent to +91 {phone}</p>

          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="flex justify-center gap-3">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    newOtp[idx] = e.target.value;
                    setOtp(newOtp);
                  }}
                  className="w-12 h-12 text-center text-lg font-black bg-gray-50 border border-[#eae2d6] rounded-xl outline-none focus:border-[#c85a32]"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#c85a32] text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Verify & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {step === 'success' && (
        <div 
          className="bg-white p-8 rounded-2xl shadow-sm border border-[#eae2d6] text-center space-y-4"
        >
          <div className="w-16 h-16 bg-[#e6f4f1] text-[#2a9d8f] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-extrabold text-[#2b2d42]">Welcome to TiffinFinder!</h2>
          <p className="text-xs text-gray-500">Discovering home cooks in Nashik...</p>
        </div>
      )}
    </div>
  );
};
