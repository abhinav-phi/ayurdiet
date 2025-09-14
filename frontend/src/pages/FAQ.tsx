import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Search, HelpCircle, 
  Shield, CreditCard, Users, Smartphone, Database, Brain
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'security', name: 'Security & Privacy', icon: Shield },
    { id: 'pricing', name: 'Pricing & Plans', icon: CreditCard },
    { id: 'patients', name: 'For Patients', icon: Users },
    { id: 'dieticians', name: 'For Dieticians', icon: Smartphone },
    { id: 'technical', name: 'Technical', icon: Database },
    { id: 'features', name: 'Features', icon: Brain }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is AyurDiet and how does it work?',
      answer: 'AyurDiet is India\'s first comprehensive digital Ayurvedic nutrition platform. It combines traditional Ayurvedic wisdom with modern AI technology to provide personalized diet plans. Healthcare professionals use our platform to manage patients, create customized diet charts based on dosha analysis, and track treatment progress. Patients receive personalized nutrition guidance through our mobile app.'
    },
    {
      id: 2,
      category: 'patients',
      question: 'Is the AyurDiet app free for patients?',
      answer: 'Yes, the AyurDiet mobile app is completely free for patients. You can access your personalized diet charts, track your progress, communicate with your dietician, and receive health reminders without any cost. The app is available for both iOS and Android devices.'
    },
    {
      id: 3,
      category: 'security',
      question: 'How secure is my health data on AyurDiet?',
      answer: 'We take data security very seriously. AyurDiet is HIPAA-compliant and uses industry-standard encryption (AES-256) to protect all health information. Your data is stored on secure servers with multiple layers of protection, regular security audits, and strict access controls. We never share personal health information without explicit consent.'
    },
    {
      id: 4,
      category: 'dieticians',
      question: 'How does the AI diet generation work?',
      answer: 'Our AI analyzes multiple factors including patient\'s prakriti (constitution), current health condition, symptoms, lifestyle, dietary preferences, and seasonal considerations. It then matches this profile with our comprehensive database of 500+ foods with complete Ayurvedic properties (dosha effects, rasa, virya, vipaka) to generate personalized meal recommendations that align with Ayurvedic principles.'
    },
    {
      id: 5,
      category: 'pricing',
      question: 'What are the different pricing plans available?',
      answer: 'We offer three main plans: Basic (₹2,999/month) for individual practitioners with up to 50 patients, Pro (₹4,999/month) with AI features for up to 200 patients, and Clinic Pack (₹9,999/month) for multi-doctor practices with unlimited patients. All plans include our core features, mobile app access, and support. We also offer annual plans with significant discounts.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'Can AyurDiet integrate with my existing practice management system?',
      answer: 'Yes, AyurDiet provides API access and integration capabilities. We can work with your existing systems to ensure seamless data flow and minimize disruption to your current workflow. Our technical team provides full support during the integration process, and we offer custom integration solutions for larger practices.'
    },
    {
      id: 7,
      category: 'features',
      question: 'What makes AyurDiet different from other nutrition platforms?',
      answer: 'AyurDiet is unique because it\'s the first platform to digitize comprehensive Ayurvedic food properties alongside nutritional data. Our key differentiators include: India\'s largest Ayurvedic food database, AI-powered dosha-based diet generation, food compatibility checker, symptom-diet correlation tracking, and integration with holistic healthcare experts including yoga trainers and homeopathy doctors.'
    },
    {
      id: 8,
      category: 'general',
      question: 'Do I need special training to use AyurDiet?',
      answer: 'No special training is required. AyurDiet is designed to be intuitive for both healthcare professionals and patients. We provide comprehensive onboarding materials, video tutorials, and live training sessions for healthcare professionals. Our support team is always available to help you get started and make the most of the platform.'
    },
    {
      id: 9,
      category: 'patients',
      question: 'How do I find and connect with a dietician on AyurDiet?',
      answer: 'You can browse verified Ayurvedic dieticians in your area through our platform. Each dietician profile shows their qualifications, experience, specializations, and patient reviews. You can book consultations directly through the app, and once you\'re assigned a dietician, you\'ll have direct access to chat, video calls, and receive personalized diet plans.'
    },
    {
      id: 10,
      category: 'dieticians',
      question: 'What credentials do I need to join as a healthcare professional?',
      answer: 'To join as a healthcare professional, you need a valid Ministry of Ayush license (BAMS, MD Ayurveda, or equivalent), along with Aadhaar and PAN verification. We verify all credentials before account activation, which typically takes 24-48 hours. You\'ll also need to provide details about your practice and experience.'
    },
    {
      id: 11,
      category: 'technical',
      question: 'What happens if I need technical support or have issues?',
      answer: 'We offer multiple support channels: email support (response within 24 hours), phone support during business hours, live chat for urgent issues, and 24/7 emergency support for critical technical problems. Our Pro and Clinic Pack users get priority support, and Clinic Pack users have access to a dedicated account manager.'
    },
    {
      id: 12,
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for healthcare professionals with no credit card required. This gives you full access to explore all features, add patients, create diet plans, and experience the platform. After the trial, you can choose the plan that best fits your practice needs.'
    },
    {
      id: 13,
      category: 'features',
      question: 'How does the food compatibility checker work?',
      answer: 'Our food compatibility checker uses traditional Ayurvedic principles to identify potentially incompatible food combinations (like milk with citrus fruits, or honey with hot foods). When creating diet plans, the system automatically flags incompatible combinations and suggests alternatives, helping prevent digestive issues and optimize nutritional benefits.'
    },
    {
      id: 14,
      category: 'security',
      question: 'Can patients control who has access to their health data?',
      answer: 'Absolutely. Patients have complete control over their health data. They can choose which healthcare professionals to share their information with, revoke access at any time, and view a complete audit trail of who has accessed their data. All data sharing requires explicit patient consent, and patients can download or delete their data as needed.'
    },
    {
      id: 15,
      category: 'general',
      question: 'Does AyurDiet work for all types of health conditions?',
      answer: 'AyurDiet is designed to support a wide range of health conditions through personalized nutrition therapy. It\'s particularly effective for digestive disorders, metabolic conditions, lifestyle diseases, and general wellness. However, it\'s meant to complement, not replace, comprehensive medical care. Always consult with qualified healthcare professionals for serious health conditions.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <HelpCircle className="w-4 h-4" />
              <span>Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about AyurDiet features, pricing, 
              security, and how to get the most out of our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="ml-12 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Can't find what you're looking for? Our support team is here to help you 
            get the answers you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </a>
            <a
              href="mailto:support@ayurdiet.com"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              <span>Email Us</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-green-500">
            <div className="grid md:grid-cols-3 gap-6 text-green-100">
              <div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-sm">support@ayurdiet.com</p>
                <p className="text-sm">Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-sm">+91 9876543210</p>
                <p className="text-sm">Mon-Sat, 9 AM - 6 PM IST</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Emergency Support</h4>
                <p className="text-sm">24/7 Technical Issues</p>
                <p className="text-sm">Critical system problems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;