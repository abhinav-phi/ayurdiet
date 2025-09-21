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
import DietPlanGenerator from './pages/dashboards/pages/DietPlanGenerator';
import FAQ from './pages/FAQ';
import LogMeal from './pages/dashboards/pages/LogMeal';
import TrackSymptoms from './pages/dashboards/pages/TrackSymptoms';
import JournalEntry from './pages/dashboards/pages/JournalEntry';
import ChatPractitioner from './pages/dashboards/pages/ChatPractitioner';

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

const ConditionalHeader = () => {
  const location = useLocation();
  const routesWithoutHeader = [
    // '/patient/dashboard',
    // '/patient/log-meal',
    // '/patient/track-symptoms',
    // '/patient/journal-entry',
    // '/patient/chat-practitioner',
    // '/dietician/dashboard',
    // '/dietician/dietplangenerator'
  ];
  
  const shouldShowHeader = !routesWithoutHeader.includes(location.pathname);
  return shouldShowHeader ? <Header /> : null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ConditionalHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/signup" element={<PatientSignup />} />
            <Route path="/dietician/login" element={<DieticianLogin />} />
            <Route path="/dietician/signup" element={<DieticianSignup />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/log-meal" element={<LogMeal />} />
            <Route path="/patient/track-symptoms" element={<TrackSymptoms />} />
            <Route path="/patient/journal-entry" element={<JournalEntry />} />
            <Route path="/patient/chat-practitioner" element={<ChatPractitioner />} />
            <Route path="/dietician/dashboard" element={<DieticianDashboard />} />
            <Route path="/dietician/dietplangenerator" element={<DietPlanGenerator />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

export default App;
