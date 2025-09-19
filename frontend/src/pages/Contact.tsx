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

  if (isSubmitted) {
    return (
      <div className="bg-[#F5F5DC] min-h-screen flex items-center justify-center" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="leaf leaf-4"></div>
        </div>
        
        <div className="max-w-lg mx-auto text-center p-8 bg-white rounded-xl shadow-lg relative z-10">
          <div className="w-16 h-16 bg-[#7FB069] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Message Sent Successfully!</h2>
          <p className="text-stone-600 mb-6">
            Your message has been received. Our support team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#7FB069] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5DC] min-h-screen" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="leaf leaf-4"></div>
        </div>
        
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <main className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 lg:py-20">
            <div className="layout-content-container flex flex-col max-w-6xl flex-1 gap-12">
              
              <section className="text-center flex flex-col items-center gap-4">
                <h1 className="text-stone-800 tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                  Get in Touch
                </h1>
                <p className="text-stone-600 text-lg max-w-3xl font-normal leading-relaxed">
                  We're here to help. Whether you're a patient on your wellness journey or a practitioner looking to enhance your practice, we'd love to hear from you.
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-stone-800 mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <label className="text-sm font-medium text-stone-800" htmlFor="inquiry-type">
                        I am a...
                      </label>
                      <select 
                        className="mt-2 form-select w-full rounded-md border-stone-300 shadow-sm focus:border-[#7FB069] focus:ring focus:ring-[#7FB069] focus:ring-opacity-50 bg-white" 
                        id="inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      >
                        <option value="patient">Patient / General Inquiry</option>
                        <option value="practitioner">Practitioner / Clinic</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-stone-800" htmlFor="full-name">
                        Full Name
                      </label>
                      <input 
                        className="mt-2 form-input w-full rounded-md border-stone-300 shadow-sm focus:border-[#7FB069] focus:ring focus:ring-[#7FB069] focus:ring-opacity-50 bg-white" 
                        id="full-name" 
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-stone-800" htmlFor="email">
                        Email Address
                      </label>
                      <input 
                        className="mt-2 form-input w-full rounded-md border-stone-300 shadow-sm focus:border-[#7FB069] focus:ring focus:ring-[#7FB069] focus:ring-opacity-50 bg-white" 
                        id="email" 
                        placeholder="Enter your email address" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-stone-800" htmlFor="subject">
                        Subject
                      </label>
                      <input 
                        className="mt-2 form-input w-full rounded-md border-stone-300 shadow-sm focus:border-[#7FB069] focus:ring focus:ring-[#7FB069] focus:ring-opacity-50 bg-white" 
                        id="subject" 
                        placeholder="Enter the subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-stone-800" htmlFor="message">
                        Message
                      </label>
                      <textarea 
                        className="mt-2 form-textarea w-full rounded-md border-stone-300 shadow-sm focus:border-[#7FB069] focus:ring focus:ring-[#7FB069] focus:ring-opacity-50 bg-white" 
                        id="message" 
                        placeholder="Enter your message" 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    
                    <button 
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7FB069] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-all" 
                      type="submit"
                    >
                      <span className="truncate">Submit</span>
                    </button>
                  </form>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6">Direct Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 mb-1">General Support</p>
                        <a className="text-stone-600 hover:text-[#7FB069] transition-colors" href="mailto:support@ayurdiet.com">
                          support@ayurdiet.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-2xl">business_center</span>
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 mb-1">Practitioner Inquiries</p>
                        <a className="text-stone-600 hover:text-[#7FB069] transition-colors" href="mailto:partners@ayurdiet.com">
                          partners@ayurdiet.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 flex-shrink-0">
                        <span className="material-symbols-outlined text-2xl">call</span>
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 mb-1">Phone</p>
                        <a className="text-stone-600 hover:text-[#7FB069] transition-colors" href="tel:+919876543210">
                          +91-987-654-3210
                        </a>
                      </div>
                    </div>
                  </div>
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
