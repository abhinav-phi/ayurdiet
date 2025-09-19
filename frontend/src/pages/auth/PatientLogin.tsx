import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientLogin = () => {
  const [useOTP, setUseOTP] = useState(false);
  const [loginData, setLoginData] = useState({
    phone: '',
    email: '',
    password: '',
    otp: ''
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient login attempt:', loginData);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <style>{`
        body {
          background-color: #F5F5F5;
          background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(245, 245, 245, 0.8) 100%);
        }
        
        .leaf {
          position: absolute;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.15;
        }
        
        .leaf-1 { 
          width: 80px; height: 80px; top: 8%; left: 5%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E"); 
        }
        .leaf-2 { 
          width: 120px; height: 120px; top: 12%; right: 3%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm1,14.59L11.59,15,9.41,17.17,8,15.76,11.59,12.17,8,8.59,9.41,7.17,13,10.76,16.59,7.17,18,8.59,14.41,12.17,18,15.76l-1.41,1.41L13,14Z'/%3E%3C/svg%3E"); 
        }
        .leaf-3 { 
          width: 60px; height: 60px; top: 30%; left: 10%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E"); 
        }
        .leaf-4 { 
          width: 90px; height: 90px; bottom: 15%; right: 8%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'/%3E%3C/svg%3E"); 
        }
        .leaf-5 { 
          width: 70px; height: 70px; bottom: 25%; left: 12%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'/%3E%3C/svg%3E"); 
        }
        .leaf-6 { 
          width: 50px; height: 50px; top: 60%; right: 15%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z'/%3E%3C/svg%3E"); 
        }
        
        .tab-active {
          background-color: white;
          border-color: #7FB069;
          color: #7FB069;
          box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        
        .tab-inactive {
          background-color: transparent;
          border-color: transparent;
          color: #4B5563;
        }
        
        .tab-inactive:hover {
          color: #7FB069;
        }
      `}</style>
      
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5]/80 via-[#F5F5F5]/90 to-[#F5F5F5]"></div>
        
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 py-8">
          <div className="w-full max-w-md">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <svg className="h-10 w-10 text-[#7FB069]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_543)">
                    <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543">
                      <rect fill="white" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="text-4xl font-bold text-[#141711] tracking-tight">AyurDiet</h1>
              </div>
              <p className="text-base text-[#4d5942]">Welcome back! Please log in to your account.</p>
            </div>
            
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl" style={{boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)'}}>
              <div className="p-8">
                <h2 className="text-center text-3xl font-bold text-[#7FB069] mb-6">Log In</h2>
                
                <div className="mb-6 flex rounded-lg bg-[#F5F5F5]/70 p-1">
                  <button 
                    className={`flex-1 rounded-md border py-2.5 text-sm font-bold tracking-wide transition-colors ${
                      !useOTP ? 'tab-active' : 'tab-inactive'
                    }`}
                    onClick={() => setUseOTP(false)}
                    type="button"
                  >
                    Email & Password
                  </button>
                  <button 
                    className={`flex-1 rounded-md border py-2.5 text-sm font-bold tracking-wide transition-colors ${
                      useOTP ? 'tab-active' : 'tab-inactive'
                    }`}
                    onClick={() => setUseOTP(true)}
                    type="button"
                  >
                    Mobile OTP
                  </button>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {!useOTP ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-[#141711] mb-2" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          className="block w-full rounded-lg border-gray-300 bg-[#F5F5F5] px-4 py-3.5 text-base text-[#141711] placeholder:text-[#4B5563] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          type="email"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required={!useOTP}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#141711] mb-2" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="block w-full rounded-lg border-gray-300 bg-[#F5F5F5] px-4 py-3.5 text-base text-[#141711] placeholder:text-[#4B5563] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                          type="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required={!useOTP}
                        />
                      </div>

                      <div className="text-right">
                        <Link 
                          to="/patient/forgot-password"
                          className="text-sm font-medium text-[#D97706] hover:text-orange-700 hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-[#141711] mb-2" htmlFor="mobile-number">
                          Mobile Number
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            className="flex-1 block w-full rounded-lg border-gray-300 bg-[#F5F5F5] px-4 py-3.5 text-base text-[#141711] placeholder:text-[#4B5563] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                            id="mobile-number"
                            name="phone"
                            placeholder="Enter mobile number"
                            type="tel"
                            value={loginData.phone}
                            onChange={handleLoginChange}
                            required={useOTP}
                          />
                          <button
                            className="flex-shrink-0 rounded-lg bg-[#f0f5eb] px-4 py-3 text-sm font-medium text-[#7FB069] hover:bg-[#e6efd9] transition-colors"
                            type="button"
                          >
                            Send OTP
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#141711] mb-2" htmlFor="otp">
                          Enter OTP
                        </label>
                        <input
                          className="block w-full rounded-lg border-gray-300 bg-[#F5F5F5] px-4 py-3.5 text-base text-[#141711] placeholder:text-[#4B5563] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                          id="otp"
                          name="otp"
                          placeholder="Enter 6-digit OTP"
                          type="text"
                          maxLength="6"
                          value={loginData.otp}
                          onChange={handleLoginChange}
                          required={useOTP}
                        />
                      </div>
                    </>
                  )}
                  
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#7FB069] py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-[#6f9e5e] focus:outline-none focus:ring-2 focus:ring-[#7FB069] focus:ring-offset-2"
                  >
                    Log In
                  </button>
                </form>
                
                <p className="mt-8 text-center text-sm text-[#4B5563]">
                  Don't have an account?{' '}
                  <Link 
                    to="/patient/signup"
                    className="font-medium text-[#D97706] hover:underline"
                  >
                    Sign up
                  </Link>
                </p>

                <p className="mt-4 text-center text-xs text-[#4B5563]">
                  By continuing, you agree to our{' '}
                  <Link className="font-medium text-[#D97706] hover:underline" to="/terms">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link className="font-medium text-[#D97706] hover:underline" to="/privacy">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientLogin;