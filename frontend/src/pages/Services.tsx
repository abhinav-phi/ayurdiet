import React, { useState } from 'react';
import { Check, Users, Brain, BarChart3, Calendar, CreditCard, Smartphone, MessageCircle, Video, TrendingUp, CheckCircle2, ArrowRight, Stethoscope, Target, Heart, Activity, Clock, Shield } from 'lucide-react';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState<'patients' | 'practitioners'>('patients');

  const patientPlans = [
    {
      name: "Basic",
      price: "₹19",
      period: "month",
      description: "Perfect for individuals starting their wellness journey",
      features: [
        "Personalized Diet Plans",
        "Symptom Tracking", 
        "Food Database Access",
        "Basic Progress Reports"
      ],
      recommended: false,
      buttonStyle: "bg-stone-100 text-stone-800 hover:bg-stone-200"
    },
    {
      name: "Standard", 
      price: "₹39",
      period: "month",
      description: "Most popular choice for comprehensive wellness tracking",
      features: [
        "All Basic Features",
        "Weekly Check-ins",
        "Recipe Recommendations",
        "Advanced Analytics",
        "Priority Support"
      ],
      recommended: true,
      buttonStyle: "bg-[#7FB069] text-white hover:bg-opacity-90"
    },
    {
      name: "Premium",
      price: "₹59", 
      period: "month",
      description: "Complete wellness solution with unlimited features",
      features: [
        "All Standard Features",
        "Unlimited Support",
        "Advanced Analytics",
        "Custom Meal Planning",
        "One-on-One Consultations"
      ],
      recommended: false,
      buttonStyle: "bg-stone-100 text-stone-800 hover:bg-stone-200"
    }
  ];

  const practitionerPlans = [
    {
      name: "Professional",
      price: "₹99",
      period: "month", 
      description: "Essential tools for individual practitioners",
      features: [
        "Patient Management Tools",
        "Diet Plan Generation", 
        "Basic Analytics",
        "Appointment Scheduling",
        "Email Support"
      ],
      recommended: false,
      buttonStyle: "bg-stone-100 text-stone-800 hover:bg-stone-200"
    },
    {
      name: "Enterprise",
      price: "₹199",
      period: "month",
      description: "Complete practice management solution",
      features: [
        "All Professional Features",
        "Advanced Analytics",
        "Customizable Templates", 
        "Priority Support",
        "Multi-location Access"
      ],
      recommended: true,
      buttonStyle: "bg-[#98D8C8] text-white hover:bg-opacity-90"
    },
    {
      name: "Elite",
      price: "₹299",
      period: "month",
      description: "Enterprise-grade solution with white-label options", 
      features: [
        "All Enterprise Features",
        "Dedicated Account Manager",
        "White-Label Options",
        "Team Collaboration",
        "Custom Integration"
      ],
      recommended: false,
      buttonStyle: "bg-stone-100 text-stone-800 hover:bg-stone-200"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Diet Plans",
      description: "Personalized nutrition recommendations based on Ayurvedic principles and modern science"
    },
    {
      icon: BarChart3, 
      title: "Progress Analytics",
      description: "Comprehensive tracking and insights to monitor your wellness journey"
    },
    {
      icon: Calendar,
      title: "Appointment Management", 
      description: "Seamless scheduling and management of consultations with practitioners"
    },
    {
      icon: Video,
      title: "Virtual Consultations",
      description: "Connect with certified Ayurvedic practitioners from anywhere"
    },
    {
      icon: Smartphone,
      title: "Mobile App Access",
      description: "Access your wellness plan on-the-go with our intuitive mobile application"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security"
    }
  ];

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">
              Services & Pricing
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-600">
              Choose the plan that best fits your needs. Whether you're a patient seeking personalized wellness or a practitioner managing clients, we have a solution for you.
            </p>
          </div>

          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight mb-4">
                Comprehensive Wellness Solutions
              </h2>
              <p className="text-stone-600 max-w-3xl mx-auto">
                Experience the perfect blend of ancient Ayurvedic wisdom and modern technology through our comprehensive suite of wellness services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex flex-1 gap-4 rounded-xl border border-transparent bg-white p-6 flex-col items-center text-center shadow-lg transition-transform transform hover:-translate-y-2"
                >
                  <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 inline-flex">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-stone-800 text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#708764] text-base font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm border border-stone-200">
                <button
                  onClick={() => setSelectedTab('patients')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    selectedTab === 'patients'
                      ? 'bg-[#7FB069] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  For Patients
                </button>
                <button
                  onClick={() => setSelectedTab('practitioners')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    selectedTab === 'practitioners'
                      ? 'bg-[#98D8C8] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  For Practitioners
                </button>
              </div>
            </div>

            {selectedTab === 'patients' && (
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-stone-800 tracking-tight">For Patients</h2>
                  <p className="mt-2 text-stone-600 max-w-3xl mx-auto">
                    Embark on your wellness journey with personalized diet plans, symptom tracking, and access to a comprehensive food database. Our plans are designed to support your individual needs and help you achieve optimal health.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {patientPlans.map((plan, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col gap-6 rounded-2xl border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                        plan.recommended 
                          ? 'border-2 border-[#7FB069] bg-white shadow-xl hover:shadow-2xl relative' 
                          : 'border border-stone-200 bg-white'
                      }`}
                    >
                      {plan.recommended && (
                        <p className="absolute top-0 -translate-y-1/2 rounded-full bg-[#7FB069] px-4 py-1 text-xs font-semibold text-white">
                          RECOMMENDED
                        </p>
                      )}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-stone-800">{plan.name}</h3>
                        <p className="flex items-baseline gap-1 mt-2">
                          <span className="text-4xl font-extrabold text-stone-900 tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-stone-600 font-medium">/{plan.period}</span>
                        </p>
                        <p className="text-stone-600 mt-2 mb-6">{plan.description}</p>
                        <ul className="space-y-4 text-stone-600">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#7FB069]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className={`w-full rounded-lg h-12 px-6 font-bold transition-colors ${plan.buttonStyle}`}>
                        Choose {plan.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'practitioners' && (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-stone-800 tracking-tight">For Practitioners</h2>
                  <p className="mt-2 text-stone-600 max-w-3xl mx-auto">
                    Manage your clients effectively with our practitioner tools, including diet plan generation, analytics, and appointment scheduling. Our professional plans are tailored to streamline your practice and enhance client outcomes.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {practitionerPlans.map((plan, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col gap-6 rounded-2xl border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                        plan.recommended 
                          ? 'border-2 border-[#98D8C8] bg-white shadow-xl hover:shadow-2xl relative' 
                          : 'border border-stone-200 bg-white'
                      }`}
                    >
                      {plan.recommended && (
                        <p className="absolute top-0 -translate-y-1/2 rounded-full bg-[#98D8C8] px-4 py-1 text-xs font-semibold text-white">
                          RECOMMENDED
                        </p>
                      )}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-stone-800">{plan.name}</h3>
                        <p className="flex items-baseline gap-1 mt-2">
                          <span className="text-4xl font-extrabold text-stone-900 tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-stone-600 font-medium">/{plan.period}</span>
                        </p>
                        <p className="text-stone-600 mt-2 mb-6">{plan.description}</p>
                        <ul className="space-y-4 text-stone-600">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#98D8C8]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className={`w-full rounded-lg h-12 px-6 font-bold transition-colors ${plan.buttonStyle}`}>
                        Choose {plan.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;
