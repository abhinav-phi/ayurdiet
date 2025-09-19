import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DieticianLogin = () => {
  const [useOTP, setUseOTP] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = 'http://localhost:3000/signin';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Your backend expects 'email' and 'password' keys in the body
            body: JSON.stringify({
                email: formData.identifier,
                password: formData.password
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle errors from the server (e.g., 401 Invalid credentials)
            throw new Error(data.error || 'Login failed. Please try again.');
        }

        alert("login done!")

    } catch (error: any) {
        console.log(error);
        alert("err");
    }
};

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-transparent overflow-x-hidden p-4 leaf-pattern-bg">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 m-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#7FB069]">AyurDiet</h1>
          <p className="text-gray-600 mt-2">Secure cloud access to your practice.</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button className="w-1/2 py-4 text-center text-lg font-semibold text-[#7FB069] border-b-2 border-[#7FB069]">
              Login
            </button>
            <Link
              to="/dietician/signup"
              className="w-1/2 py-4 text-center text-lg font-semibold text-gray-500 hover:text-[#7FB069] hover:border-b-2 hover:border-gray-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="sr-only" htmlFor="login-identifier">
              Mobile Number or Email
            </label>
            <input
              className="form-input w-full rounded-lg border-gray-300 p-4 text-base focus:ring-[#7FB069] focus:border-[#7FB069]"
              id="login-identifier"
              placeholder={useOTP ? "Mobile Number" : "Mobile Number or Email"}
              type="text"
              value={formData.identifier}
              onChange={(e) => setFormData({...formData, identifier: e.target.value})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <label className="relative inline-flex cursor-pointer items-center" htmlFor="use-otp">
                <input
                  className="sr-only peer"
                  id="use-otp"
                  type="checkbox"
                  checked={useOTP}
                  onChange={(e) => setUseOTP(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-[#7FB069] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7FB069]"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">Use OTP to Login</span>
              </label>
            </div>
          </div>

          {!useOTP && (
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                className="form-input w-full rounded-lg border-gray-300 p-4 text-base focus:ring-[#7FB069] focus:border-[#7FB069]"
                id="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          )}

          <button
            className="w-full bg-[#7FB069] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#6a995a] transition-colors text-lg"
            type="submit"
          >
            Login
          </button>

          <div className="text-center">
            <a className="text-sm text-[#D97706] hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DieticianLogin;
