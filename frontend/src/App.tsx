import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import PatientLogin from './pages/auth/PatientLogin';
import PatientSignup from './pages/auth/PatientSignup';
import DieticianLogin from './pages/auth/DieticianLogin';
import DieticianSignup from './pages/auth/DieticianSignup';
import PatientDashboard from './pages/dashboards/PatientDashboard';
import DieticianDashboard from './pages/dashboards/DieticianDashboard';
import DietPlanGenerator from './pages/dashboards/DietPlanGenerator';
import FAQ from './pages/FAQ';

const ConditionalFooter = () => {
  const location = useLocation();
  const routesWithFooter = [
    '/',
    '/home',
    '/about',
    '/services',
    '/features',
    '/education',
    '/blog',
    '/contact',
    '/faq'
  ];
  
  const shouldShowFooter = routesWithFooter.includes(location.pathname);
  return shouldShowFooter ? <Footer /> : null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/signup" element={<PatientSignup />} />
            <Route path="/dietician/login" element={<DieticianLogin />} />
            <Route path="/dietician/signup" element={<DieticianSignup />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/dietician/dashboard" element={<DieticianDashboard />} />
            <Route path="/dietician/diet-plan-generator" element={<DietPlanGenerator />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

export default App;
