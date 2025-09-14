import React, { useState } from 'react';
import { 
  Check, X, Star, ArrowRight, Zap, Crown, Building,
  Users, Database, Brain, BarChart3, Calendar, CreditCard,
  MessageCircle, Video, Shield, Headphones
} from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      icon: Zap,
      description: "Perfect for individual practitioners starting their digital journey",
      price: { monthly: 2999, yearly: 29990 },
      popular: false,
      color: "from-blue-500 to-indigo-500",
      features: {
        included: [
          "Up to 50 patient records",
          "Basic Ayurvedic food database (200+ foods)",
          "Simple diet chart creation",
          "Basic patient communication",
          "Progress tracking",
          "Mobile app access",
          "Email support"
        ],
        excluded: [
          "AI diet generation",
          "Advanced analytics",
          "Video consultations",
          "Billing management",
          "Multi-location support",
          "Custom branding",
          "Priority support"
        ]
      }
    },
    {
      name: "Pro",
      icon: Crown,
      description: "Most popular choice for established practitioners and clinics",
      price: { monthly: 4999, yearly: 49990 },
      popular: true,
      color: "from-green-500 to-teal-500",
      features: {
        included: [
          "Up to 200 patient records",
          "Complete Ayurvedic food database (500+ foods)",
          "AI-powered diet generation",
          "Advanced dosha analysis",
          "Comprehensive analytics & reports",
          "Video consultations",
          "Appointment management",
          "Basic billing features",
          "Mobile app access",
          "Priority email support",
          "Validation engine",
          "Food combo checker"
        ],
        excluded: [
          "Multi-location support",
          "Custom branding",
          "Advanced billing management",
          "Phone support",
          "Dedicated account manager"
        ]
      }
    },
    {
      name: "Clinic Pack",
      icon: Building,
      description: "Comprehensive solution for multi-doctor clinics and healthcare centers",
      price: { monthly: 9999, yearly: 99990 },
      popular: false,
      color: "from-purple-500 to-pink-500",
      features: {
        included: [
          "Unlimited patient records",
          "Complete Ayurvedic food database",
          "Advanced AI diet personalization",
          "Multi-doctor access",
          "Comprehensive analytics dashboard",
          "Video consultations",
          "Advanced appointment management",
          "Complete billing & payment management",
          "Multi-location support",
          "Custom branding",
          "Mobile app access",
          "Priority phone & email support",
          "Dedicated account manager",
          "Training sessions",
          "API access"
        ],
        excluded: []
      }
    }
  ];

  const allFeatures = [
    { name: "Patient Records", basic: "50 patients", pro: "200 patients", clinic: "Unlimited" },
    { name: "Ayurvedic Food Database", basic: "200+ foods", pro: "500+ foods", clinic: "Complete database" },
    { name: "AI Diet Generation", basic: false, pro: true, clinic: true },
    { name: "Dosha Analysis", basic: "Basic", pro: "Advanced", clinic: "Advanced" },
    { name: "Analytics & Reports", basic: "Basic", pro: "Advanced", clinic: "Comprehensive" },
    { name: "Video Consultations", basic: false, pro: true, clinic: true },
    { name: "Appointment Management", basic: "Basic", pro: true, clinic: "Advanced" },
    { name: "Billing Management", basic: false, pro: "Basic", clinic: "Complete" },
    { name: "Multi-location Support", basic: false, pro: false, clinic: true },
    { name: "Custom Branding", basic: false, pro: false, clinic: true },
    { name: "Mobile App Access", basic: true, pro: true, clinic: true },
    { name: "Validation Engine", basic: false, pro: true, clinic: true },
    { name: "Food Combo Checker", basic: false, pro: true, clinic: true },
    { name: "Support Level", basic: "Email", pro: "Priority Email", clinic: "Phone + Email" },
    { name: "Account Manager", basic: false, pro: false, clinic: true }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Simple, Transparent{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your practice. All plans include our core Ayurvedic features 
              with no hidden fees or long-term commitments.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-8">
                    <div className="space-y-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(isYearly ? plan.price.yearly / 12 : plan.price.monthly)}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-gray-500 mt-2">
                        Billed annually {formatPrice(plan.price.yearly)}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.included.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.features.excluded.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-500 text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full mt-8 py-4 px-6 rounded-xl font-semibold text-white transition-all transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                  >
                    {plan.name === 'Basic' ? 'Start Free Trial' : 'Get Started'}
                  </button>

                  {plan.name === 'Basic' && (
                    <p className="text-center text-xs text-gray-500 mt-3">
                      14-day free trial • No credit card required
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compare all features across our pricing plans to find the perfect fit for your practice
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">Basic</th>
                    <th className="px-6 py-4 text-center font-semibold">Pro</th>
                    <th className="px-6 py-4 text-center font-semibold">Clinic Pack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allFeatures.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{feature.name}</td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{feature.basic}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{feature.pro}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof feature.clinic === 'boolean' ? (
                          feature.clinic ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{feature.clinic}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is the app free for patients?",
                answer: "Yes, the AyurDiet mobile app is completely free for patients. They can access their personalized diet charts, track progress, and communicate with their dietician at no cost."
              },
              {
                question: "Can I switch between plans?",
                answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we use industry-standard encryption and are HIPAA-compliant. All patient data is securely stored and protected with multiple layers of security."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for annual plans. If you're not satisfied within the first 30 days, we'll provide a full refund."
              },
              {
                question: "Can I get a demo before purchasing?",
                answer: "Yes! We offer personalized demos for all our plans. Contact our sales team to schedule a demonstration tailored to your specific needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Join thousands of healthcare professionals who trust AyurDiet for their patient care needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              <Headphones className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;