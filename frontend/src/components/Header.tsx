import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsAccountDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white/80 px-10 py-4 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-3 text-soft-sage-green">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M24,4C12.95,4,4,7.25,4,11.27c0,2.74,4.16,5.12,10.31,6.37C8.16,18.88,4,21.26,4,24c0,2.74,4.16,5.12,10.31,6.37C8.16,31.6,4,33.99,4,36.73,4,40.74,12.95,44,24,44s20-3.26,20-7.27c0-2.74-4.16-5.13-10.31-6.37C39.84,29.12,44,26.74,44,24c0-2.74-4.16-5.12-10.31-6.37C39.84,16.39,44,14.01,44,11.27,44,7.25,35.05,4,24,4Zm0,36c-8.84,0-16-2.24-16-5s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Zm0-12c-8.84,0-16-2.24-16-5s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Zm0-12C15.16,16,8,13.76,8,11s7.16-5,16-5,16,2.24,16,5-7.16,5-16,5Z"></path>
        </svg>
        <h2 className="text-2xl font-bold tracking-tight">AyurDiet</h2>
      </Link>

<nav className="hidden md:flex items-center gap-4">
  <Link 
    to="/" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Home
  </Link>
  <Link 
    to="/features" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/features') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Features
  </Link>
  <Link 
    to="/services" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/services') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Services
  </Link>  
  <Link 
    to="/education" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/education') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Education
  </Link>
  <Link 
    to="/about" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/about') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    About
  </Link>
  <Link 
    to="/contact" 
    className={`py-2 px-4 rounded hover:bg-[#7FB069]/10 transition-colors ${
      isActive('/contact') ? 'text-[#7FB069] font-semibold' : 'text-[#4a5568]'
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    Contact
  </Link>
</nav>


      <div className="hidden md:flex items-center">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            className="flex items-center justify-center rounded-full h-12 px-6 bg-soft-sage-green text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-opacity-90"
          >
            <span className="material-symbols-outlined mr-2">account_circle</span>
            <span className="truncate">My Account</span>
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isAccountDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isAccountDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">Choose Dashboard</p>
                <p className="text-xs text-gray-500">Select your role to continue</p>
              </div>
              
              <Link
                to="/patient/dashboard"
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green transition-colors duration-200"
                onClick={() => setIsAccountDropdownOpen(false)}
              >
                <User className="h-4 w-4 mr-3" />
                <div>
                  <div className="font-medium">Patient Dashboard</div>
                  <div className="text-xs text-gray-500">Manage your health journey</div>
                </div>
              </Link>
              
              <Link
                to="/dietician/dashboard"
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green transition-colors duration-200"
                onClick={() => setIsAccountDropdownOpen(false)}
              >
                <Stethoscope className="h-4 w-4 mr-3" />
                <div>
                  <div className="font-medium">Practitioner Dashboard</div>
                  <div className="text-xs text-gray-500">Manage your patients</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 z-40">
          <div className="px-4 py-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/services" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900 mb-2">Dashboard Options</p>
              </div>
              
              <Link
                to="/patient/dashboard"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Patient Dashboard
              </Link>
              
              <Link
                to="/dietician/dashboard"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-soft-sage-green rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Stethoscope className="h-4 w-4 mr-2" />
                Practitioner Dashboard
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
