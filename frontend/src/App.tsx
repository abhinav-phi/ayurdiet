import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PatientLogin from './pages/auth/PatientLogin';
import PatientSignup from './pages/auth/PatientSignup';
import DieticianLogin from './pages/auth/DieticianLogin';
import DieticianSignup from './pages/auth/DieticianSignup';
import PatientDashboard from './pages/dashboards/PatientDashboard';
import DieticianDashboard from './pages/dashboards/DieticianDashboard';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="bg-[#F5F5DC] text-gray-800" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
        <Header />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            {/* Remove separate pricing route since it's merged with services */}
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/signup" element={<PatientSignup />} />
            <Route path="/dietician/login" element={<DieticianLogin />} />
            <Route path="/dietician/signup" element={<DieticianSignup />} />
            {/* Dashboard Routes */}
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/dietician-dashboard" element={<DieticianDashboard />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/dietician/dashboard" element={<DieticianDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
