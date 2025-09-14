import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientLogin = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [useOTP, setUseOTP] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient login attempt:', formData);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden leaf-pattern-bg">
      {/* Decorative leaves */}
      <div className="leaf leaf-1"></div>
      <div className="leaf leaf-2"></div>
      <div className="leaf leaf-3"></div>
      <div className="leaf leaf-4"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5]/80 via-[#F5F5F5]/90 to-[#F5F5F5] rounded-lg"></div>
      
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold text-[#141711] tracking-tight">AyurDiet</h1>
            <p className="mt-2 text-base text-[#4d5942]">Get your personalized Ayurvedic diet plan instantly.</p>
          </div>
          
          {/* Form Container */}
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl" style={{boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'}}>
            {/* Tab Selection */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#F5F5F5]/70 p-1">
                <button className="tab-active rounded-md border py-2.5 text-sm font-bold tracking-wide transition-colors">
                  Login
                </button>
                <Link 
                  to="/patient/signup"
                  className="tab-inactive rounded-md border py-2.5 text-sm font-bold tracking-wide transition-colors text-center block"
                >
                  Signup
                </Link>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="p-8 pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="sr-only" htmlFor="mobile-number">Mobile Number</label>
                  <input
                    className="form-input block w-full rounded-lg border-gray-300 bg-[#F5F5F5] px-4 py-3.5 text-base text-[#141711] placeholder:text-[#4B5563] focus:border-[#7FB069] focus:ring-[#7FB069]"
                    id="mobile-number"
                    placeholder="Mobile Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3" htmlFor="use-otp">
                    <input
                      className="h-4 w-4 rounded border-gray-300 text-[#7FB069] focus:ring-[#7FB069]"
                      id="use-otp"
                      type="checkbox"
                      checked={useOTP}
                      onChange={(e) => setUseOTP(e.target.checked)}
                    />
                    <span className="text-sm text-[#141711]">Use OTP to Login</span>
                  </label>
                  <a className="text-sm font-medium text-[#D97706] hover:text-orange-700" href="#">
                    Forgot Password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#7FB069] py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-[#6f9e5e] focus:outline-none focus:ring-2 focus:ring-[#7FB069] focus:ring-offset-2"
                >
                  Login
                </button>
              </form>
              
              <p className="mt-8 text-center text-xs text-[#4B5563]">
                By continuing, you agree to our{' '}
                <a className="font-medium text-[#D97706] hover:underline" href="#">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a className="font-medium text-[#D97706] hover:underline" href="#">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
