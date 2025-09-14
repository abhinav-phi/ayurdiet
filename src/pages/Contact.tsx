import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Headphones, Users, ArrowRight, Leaf, CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@ayurdiet.com",
      description: "Get help via email - we respond within 24 hours",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91 9876543210",
      description: "Speak directly with our support team",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "Bangalore, Karnataka",
      description: "HSR Layout, Sector 1, Bangalore 560102",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat, 9 AM - 6 PM IST",
      description: "24/7 emergency support available",
      color: "from-orange-500 to-red-500"
    }
  ];

  const supportCategories = [
    {
      value: 'general',
      label: 'General Inquiry',
      icon: MessageCircle
    },
    {
      value: 'technical',
      label: 'Technical Support',
      icon: Headphones
    },
    {
      value: 'sales',
      label: 'Sales & Pricing',
      icon: Users
    },
    {
      value: 'partnership',
      label: 'Partnership',
      icon: ArrowRight
    }
  ];

  const faqs = [
    {
      question: "How do I get started with AyurDiet?",
      answer: "Healthcare professionals can sign up for a free trial, while patients can download our mobile app for free."
    },
    {
      question: "Is patient data secure on your platform?",
      answer: "Yes, we maintain the highest security standards with HIPAA compliance and end-to-end encryption."
    },
    {
      question: "Do you offer training for new users?",
      answer: "We provide comprehensive onboarding and training sessions for all healthcare professionals."
    },
    {
      question: "Can I integrate AyurDiet with my existing practice management system?",
      answer: "Yes, we offer API access and integration support for seamless workflow integration."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
          <p className="text-gray-600 leading-relaxed">
            Your message has been received. Our support team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Help
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about AyurDiet? Need technical support? Want to explore partnership opportunities? 
              Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-green-600 mb-3">{info.details}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      required
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {supportCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please provide detailed information about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Quick answers to common questions about AyurDiet.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Support Categories */}
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-4">How Can We Help?</h3>
                <div className="space-y-3">
                  {supportCategories.map((category) => (
                    <div key={category.value} className="flex items-center space-x-3">
                      <category.icon className="w-5 h-5 text-green-200" />
                      <span className="text-green-100">{category.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-green-400">
                  <p className="text-green-100 text-sm">
                    <strong>Emergency Support:</strong> For urgent technical issues, 
                    call our 24/7 support line at +91 9876543210.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Visit Our Office
          </h2>
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto" />
              <p className="text-gray-600 text-lg">
                HSR Layout, Sector 1<br />
                Bangalore, Karnataka 560102<br />
                India
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;