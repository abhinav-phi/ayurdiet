import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-10">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">AyurLife</h3>
          <p className="text-gray-400">Digitally Simplifying Ayurveda + Nutrition.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link className="text-gray-400 hover:text-white" to="/">Home</Link></li>
            <li><Link className="text-gray-400 hover:text-white" to="/features">Features</Link></li>
            <li><Link className="text-gray-400 hover:text-white" to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link className="text-gray-400 hover:text-white" to="/about">About Us</Link></li>
            <li><Link className="text-gray-400 hover:text-white" to="/contact">Contact Us</Link></li>
            <li><Link className="text-gray-400 hover:text-white" to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link className="text-gray-400 hover:text-white" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="text-gray-400 hover:text-white" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>© 2024 AyurLife. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;