import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DieticianSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    licenseNumber: '',
    aadhaarNumber: '',
    panNumber: '',
    mobileNumber: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dietician signup attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
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
          opacity: 0.2;
        }
        
        .leaf-1 { 
          width: 80px; height: 80px; top: 5%; left: 5%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3Cpath d='M17.41,8.59,12,14,6.59,8.59,8,7.17,12,11.17l4-4Z'/%3E%3Cpath d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.41,7.59L12,13.17,8.59,9.76,10,8.34,12,10.34l3.41-3.41Z'/%3E%3C/svg%3E%0A"); 
        }
        .leaf-2 { 
          width: 120px; height: 120px; top: 10%; right: 2%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm1,14.59L11.59,15,9.41,17.17,8,15.76,11.59,12.17,8,8.59,9.41,7.17,13,10.76,16.59,7.17,18,8.59,14.41,12.17,18,15.76l-1.41,1.41L13,14Z'/%3E%3C/svg%3E"); 
        }
        .leaf-3 { 
          width: 60px; height: 60px; top: 25%; left: 15%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3Cpath d='M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8,8-3.59,8-8S16.41,4,12,4Zm0,14c-3.31,0-6-2.69-6-6s2.69-6,6-6,6,2.69,6,6S15.31,18,12,18Z'/%3E%3C/svg%3E"); 
        }
        .leaf-4 { 
          width: 90px; height: 90px; top: 40%; right: 10%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12,2a10,10,0,1,0,10,10A10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'/%3E%3Cpath d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z'/%3E%3C/svg%3E"); 
        }
        .leaf-5 { 
          width: 50px; height: 50px; bottom: 20%; left: 8%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10,10-4.48,10-10S17.52,2,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'/%3E%3C/svg%3E"); 
        }
        .leaf-6 { 
          width: 110px; height: 110px; bottom: 5%; right: 5%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='m12,2a10,10 0 1,0 0,20a10,10 0 1,0 0,-20'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'/%3E%3C/svg%3E"); 
        }
        .leaf-7 { 
          width: 70px; height: 70px; top: 50%; left: 2%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12,22C6.486,22,2,17.514,2,12S6.486,2,12,2s10,4.486,10,10S17.514,22,12,22z M12,4c-4.411,0-8,3.589-8,8 s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z'/%3E%3Cpath d='M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'/%3E%3C/svg%3E"); 
        }
        .leaf-8 { 
          width: 100px; height: 100px; top: 70%; right: 15%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 8.69 9.48 7 12 7c2.76 0 5 2.24 5 5v1h2c1.66 0 3 1.34 3 3s-1.34 3-3 3z'/%3E%3C/svg%3E"); 
        }
        .leaf-9 { 
          width: 40px; height: 40px; bottom: 10%; left: 20%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/%3E%3C/svg%3E"); 
        }
        .leaf-10 { 
          width: 80px; height: 80px; top: 85%; left: 3%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237FB069'%3E%3Cpath d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8z'/%3E%3C/svg%3E"); 
        }
        .leaf-11 { 
          width: 60px; height: 60px; bottom: 2%; right: 25%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2398D8C8'%3E%3Cpath d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z'/%3E%3C/svg%3E"); 
        }
        .leaf-12 { 
          width: 130px; height: 130px; top: -5%; right: -2%; 
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234B5563'%3E%3Cpath d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'/%3E%3C/svg%3E"); 
          transform: rotate(-45deg); 
        }
      `}</style>
      
      <div 
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8 bg-[#F5F5F5]" 
        style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
      >
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="leaf leaf-8"></div>
        <div className="leaf leaf-9"></div>
        <div className="leaf leaf-10"></div>
        <div className="leaf leaf-11"></div>
        <div className="leaf leaf-12"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <div className="mb-8 text-center text-[#141711]">
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
              <h1 className="text-3xl font-bold tracking-tight">AyurDiet</h1>
            </div>
            <p className="text-lg text-[#4B5563]">Secure cloud access to your practice.</p>
          </div>

          <div className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#7FB069]">Create Your Dietician Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="mt-2 flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="licenseNumber">
                    Ministry of Ayush License Number
                  </label>
                  <input
                    className="mt-2 flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                    id="licenseNumber"
                    name="licenseNumber"
                    placeholder="Enter your license number"
                    type="text"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="aadhaarNumber">
                    Aadhaar Card
                  </label>
                  <div className="mt-2 flex items-center gap-4">
                    <input
                      className="flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      placeholder="Aadhaar Number"
                      type="text"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      className="flex-shrink-0 rounded-lg bg-[#f0f5eb] px-4 py-3 text-sm font-medium text-[#7FB069] hover:bg-[#e6efd9] transition-colors"
                      type="button"
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="panNumber">
                    PAN Card
                  </label>
                  <div className="mt-2 flex items-center gap-4">
                    <input
                      className="flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                      id="panNumber"
                      name="panNumber"
                      placeholder="PAN Number"
                      type="text"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      className="flex-shrink-0 rounded-lg bg-[#f0f5eb] px-4 py-3 text-sm font-medium text-[#7FB069] hover:bg-[#e6efd9] transition-colors"
                      type="button"
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="mobileNumber">
                    Mobile Number
                  </label>
                  <div className="mt-2 flex items-center gap-4">
                    <input
                      className="flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
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
                  <label className="text-base font-medium text-[#141711]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="mt-2 flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-[#141711]" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="mt-2 flex w-full rounded-lg border border-[#e0e5dc] bg-white p-3 text-base placeholder:text-[#a1b092] focus:border-[#7FB069] focus:ring-[#7FB069] focus:outline-none focus:ring-2"
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button
                className="w-full rounded-lg bg-[#7FB069] py-3 text-base font-bold text-white shadow-md hover:bg-[#6da05a] focus:outline-none focus:ring-2 focus:ring-[#7FB069] focus:ring-offset-2 transition-colors"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#4B5563]">
              Already have an account?{' '}
              <Link 
                to="/dietician/login"
                className="font-medium text-[#D97706] hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DieticianSignup;