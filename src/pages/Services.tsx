import React from 'react';
import { 
  Users, Brain, BarChart3, Calendar, CreditCard, Smartphone,
  MessageCircle, Video, TrendingUp, CheckCircle2, ArrowRight,
  Stethoscope, Target, Heart, Activity, Clock, Shield
} from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Comprehensive Services for{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Every Healthcare Need
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a healthcare professional or a patient, AyurDiet provides 
              tailored solutions to enhance your Ayurvedic healthcare journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Split View */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Dieticians */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Stethoscope className="w-4 h-4" />
                  <span>For Healthcare Professionals</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Advanced Tools for Dieticians
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Comprehensive practice management with AI-powered insights and patient care tools
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Patient Records Management",
                    description: "Complete patient profiles with health history, prakriti analysis, and treatment progress tracking"
                  },
                  {
                    icon: Brain,
                    title: "AI Diet Generator",
                    description: "Intelligent meal planning based on patient's dosha, symptoms, lifestyle, and seasonal requirements"
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics & Insights",
                    description: "Detailed reports on patient progress, treatment effectiveness, and practice growth metrics"
                  },
                  {
                    icon: Calendar,
                    title: "Appointment Management",
                    description: "Integrated scheduling system with automated reminders and consultation tracking"
                  },
                  {
                    icon: CreditCard,
                    title: "Billing & Payments",
                    description: "Streamlined invoicing, payment tracking, and financial reporting for your practice"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* For Patients */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Heart className="w-4 h-4" />
                  <span>For Patients</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Personalized Health Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Easy-to-use mobile app for tracking your personalized Ayurvedic diet and wellness plan
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Personalized Diet Charts",
                    description: "Custom meal plans tailored to your dosha, health goals, and dietary preferences"
                  },
                  {
                    icon: Clock,
                    title: "Smart Reminders",
                    description: "Timely notifications for meals, medications, and lifestyle activities"
                  },
                  {
                    icon: MessageCircle,
                    title: "Expert Chat Support",
                    description: "Direct communication with your assigned dietician for continuous guidance"
                  },
                  {
                    icon: TrendingUp,
                    title: "Progress Tracking",
                    description: "Visual analytics showing symptom improvement and dietary compliance over time"
                  },
                  {
                    icon: Video,
                    title: "Video Consultations",
                    description: "One-on-one video calls with dieticians, yoga trainers, and wellness coaches"
                  }
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  <span>Download App</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Healthcare Network */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Holistic Healthcare Network
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with a comprehensive team of wellness experts for complete healthcare support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Ayurvedic Dieticians",
                description: "Certified professionals specializing in traditional nutrition therapy",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Activity,
                title: "Yoga Trainers",
                description: "Experienced instructors for personalized yoga and meditation practices",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "Fitness Coaches",
                description: "Personal trainers with expertise in holistic fitness approaches",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Heart,
                title: "Homeopathy Doctors",
                description: "Qualified homeopathic practitioners for complementary treatment",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((expert, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${expert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <expert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{expert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{expert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Experience the "AstroTalk of Health" - Real-time personalized holistic health advice
            </p>
            <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-teal-700 transition-all">
              Connect with Experts
            </button>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of integrated Ayurvedic healthcare technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "HIPAA-compliant platform ensuring complete data privacy and security for all health information",
                benefits: ["End-to-end encryption", "Secure data storage", "Privacy compliance", "Regular security audits"]
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock access to your health data, expert consultations, and emergency support",
                benefits: ["Always accessible", "Emergency support", "Global time zones", "Instant notifications"]
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Evidence-based approach with validated outcomes and measurable health improvements",
                benefits: ["95% patient satisfaction", "Measurable improvements", "Scientific validation", "Continuous monitoring"]
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-2 pt-4">
                    {benefit.benefits.map((item, i) => (
                      <div key={i} className="flex items-center justify-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;