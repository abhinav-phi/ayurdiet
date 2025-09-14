import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: 'patient',
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  const faqs = [
    {
      question: "What is AyurDiet and how can it help me?",
      answer: "AyurDiet is a personalized diet management platform based on Ayurvedic principles. It helps you understand your unique mind-body type (dosha) and provides tailored meal plans, recipes, and lifestyle recommendations to improve your health and well-being."
    },
    {
      question: "How do I determine my dosha?",
      answer: "AyurDiet offers a comprehensive online quiz to help you determine your dominant dosha (Vata, Pitta, or Kapha). For a more in-depth analysis, we recommend booking a consultation with one of our certified Ayurvedic practitioners."
    },
    {
      question: "Is AyurDiet suitable for specific dietary needs, like vegetarian or gluten-free?",
      answer: "Absolutely. The Ayurvedic diet is highly adaptable. Our platform allows you to customize your meal plans to accommodate various dietary preferences and restrictions, including vegetarian, vegan, gluten-free, and dairy-free options."
    },
    {
      question: "What is the cost of using AyurDiet?",
      answer: "Basic access to our dosha quiz and a selection of recipes is free. We offer premium subscription plans for personalized meal planning, progress tracking, and access to exclusive content. Consultations with practitioners are billed separately."
    },
    {
      question: "How can AyurDiet help practitioners and clinics?",
      answer: "For B2B users, AyurDiet offers a powerful tool to manage clients, create and assign customized diet plans, and monitor their progress remotely. Our platform helps streamline your practice and provide enhanced, data-driven care to your patients."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8">
          <div className="w-16 h-16 bg-[#a8d5ba] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
          </div>
          <h2 className="text-2xl font-bold text-[#333333] mb-2">Message Sent Successfully!</h2>
          <p className="text-gray-500 mb-6">
            Your message has been received. Our support team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#a8d5ba] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      <div className="relative flex h-auto min-h-screen w-full flex-col text-[#333333]">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 py-12 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* Contact Form Section */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-[#333333]">Get in Touch</h2>
                  <p className="mt-2 text-gray-500">
                    We're here to help. Whether you're a patient on your wellness journey or a practitioner looking to enhance your practice, we'd love to hear from you.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#333333]" htmlFor="inquiry-type">
                      I am a...
                    </label>
                    <select 
                      className="mt-2 form-select w-full rounded-md border-gray-300 shadow-sm focus:border-[#a8d5ba] focus:ring focus:ring-[#a8d5ba] focus:ring-opacity-50 bg-white" 
                      id="inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    >
                      <option value="patient">Patient / General Inquiry</option>
                      <option value="practitioner">Practitioner / Clinic</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[#333333]" htmlFor="full-name">
                      Full Name
                    </label>
                    <input 
                      className="mt-2 form-input w-full rounded-md border-gray-300 shadow-sm focus:border-[#a8d5ba] focus:ring focus:ring-[#a8d5ba] focus:ring-opacity-50 bg-white" 
                      id="full-name" 
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[#333333]" htmlFor="email">
                      Email Address
                    </label>
                    <input 
                      className="mt-2 form-input w-full rounded-md border-gray-300 shadow-sm focus:border-[#a8d5ba] focus:ring focus:ring-[#a8d5ba] focus:ring-opacity-50 bg-white" 
                      id="email" 
                      placeholder="Enter your email address" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[#333333]" htmlFor="subject">
                      Subject
                    </label>
                    <input 
                      className="mt-2 form-input w-full rounded-md border-gray-300 shadow-sm focus:border-[#a8d5ba] focus:ring focus:ring-[#a8d5ba] focus:ring-opacity-50 bg-white" 
                      id="subject" 
                      placeholder="Enter the subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[#333333]" htmlFor="message">
                      Message
                    </label>
                    <textarea 
                      className="mt-2 form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-[#a8d5ba] focus:ring focus:ring-[#a8d5ba] focus:ring-opacity-50 bg-white" 
                      id="message" 
                      placeholder="Enter your message" 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <button 
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#a8d5ba] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-all" 
                    type="submit"
                  >
                    <span className="truncate">Submit</span>
                  </button>
                </form>
                
                {/* Direct Contact Info */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#333333]">Direct Contact Info</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#a8d5ba] text-3xl">mail</span>
                      </div>
                      <div>
                        <p className="font-semibold">General Support</p>
                        <a className="text-gray-500 hover:text-[#a8d5ba]" href="mailto:support@ayurdiet.com">
                          support@ayurdiet.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#a8d5ba] text-3xl">business_center</span>
                      </div>
                      <div>
                        <p className="font-semibold">Practitioner Inquiries</p>
                        <a className="text-gray-500 hover:text-[#a8d5ba]" href="mailto:partners@ayurdiet.com">
                          partners@ayurdiet.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#a8d5ba] text-3xl">call</span>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a className="text-gray-500 hover:text-[#a8d5ba]" href="tel:+919876543210">
                          +91-987-654-3210
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold tracking-tight text-[#333333]">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="p-4 border rounded-lg bg-[#fef9e6]/20 group">
                      <summary className="flex cursor-pointer items-center justify-between font-medium text-[#333333]">
                        {faq.question}
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                          expand_more
                        </span>
                      </summary>
                      <p className="mt-2 text-gray-500">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
