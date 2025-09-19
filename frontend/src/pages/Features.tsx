import React from 'react';

const Features = () => {
  const patientFeatures = [
    {
      icon: "psychology",
      title: "AI Prakriti Analysis",
      description: "Understand your unique mind-body constitution with our advanced AI analysis."
    },
    {
      icon: "restaurant_menu",
      title: "Hyper-Personalized Meal Plans",
      description: "Receive meal plans tailored to your dosha, preferences, and health goals."
    },
    {
      icon: "balance",
      title: "Doshic Balance Meter",
      description: "Track and visualize your doshic balance in real-time for informed choices."
    },
    {
      icon: "joystick",
      title: "Gamified Wellness Journey",
      description: "Engage with your wellness journey through interactive challenges and rewards."
    }
  ];

  const practitionerFeatures = [
    {
      icon: "groups",
      title: "Efficient Patient Management",
      description: "Manage patient profiles, appointments, and communication seamlessly."
    },
    {
      icon: "smart_toy",
      title: "AI-Powered Diet Generator",
      description: "Create customized diet plans with AI assistance, saving time and enhancing accuracy."
    },
    {
      icon: "analytics",
      title: "Advanced Clinical Analytics",
      description: "Gain insights into patient progress and trends with comprehensive dashboards."
    },
    {
      icon: "lock_person",
      title: "Immutable Health Records",
      description: "Ensure data integrity and patient consent with blockchain-based records."
    }
  ];

  const comparisonData = [
    {
      feature: "Holistic AI-Powered Dosha Analysis",
      ayurdiet: true,
      traditional: false
    },
    {
      feature: "Dynamic, Generative Recipe Engine",
      ayurdiet: true,
      traditional: false
    },
    {
      feature: "Real-time Doshic Balance Tracking",
      ayurdiet: true,
      traditional: false
    },
    {
      feature: "Gamified & Engaging Wellness Journey",
      ayurdiet: true,
      traditional: "Limited / Static"
    },
    {
      feature: "Integrated B2B Practitioner Dashboard",
      ayurdiet: true,
      traditional: false
    },
    {
      feature: "Blockchain-Based Consent & Data Security",
      ayurdiet: true,
      traditional: false
    }
  ];

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
            <div className="layout-content-container flex flex-col max-w-6xl flex-1 gap-16">
              
              <section className="text-center flex flex-col items-center gap-4">
                <h1 className="text-stone-800 tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                  Powerful Features for Modern Wellness
                </h1>
                <p className="text-stone-600 text-lg max-w-3xl font-normal leading-relaxed">
                  AyurDiet bridges ancient Ayurvedic wisdom with modern technology,
                  offering a personalized and effective path to holistic well-being.
                </p>
              </section>
              
              <section>
                <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                  A Personalized Path to Wellness
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {patientFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex flex-1 gap-4 rounded-xl border border-transparent bg-white p-6 flex-col items-center text-center shadow-lg transition-transform transform hover:-translate-y-2"
                    >
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 inline-flex">
                        <span className="material-symbols-outlined text-4xl">
                          {feature.icon}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-stone-800 text-xl font-bold leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[#708764] text-base font-normal leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                  Streamline Your Practice, Elevate Your Care
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {practitionerFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex flex-1 gap-4 rounded-xl border border-transparent bg-white p-6 flex-col items-center text-center shadow-lg transition-transform transform hover:-translate-y-2"
                    >
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 inline-flex">
                        <span className="material-symbols-outlined text-4xl">
                          {feature.icon}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-stone-800 text-xl font-bold leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[#708764] text-base font-normal leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                  The AyurDiet Advantage
                </h2>
                <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#F5F5DC] border-b border-stone-200">
                      <tr>
                        <th className="px-6 py-4 font-bold text-stone-800">
                          Feature
                        </th>
                        <th className="px-6 py-4 font-bold text-stone-800 text-center">
                          AyurDiet
                        </th>
                        <th className="px-6 py-4 font-bold text-stone-800 text-center">
                          Traditional Methods / Generic Apps
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {comparisonData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-[#F5F5DC]/20' : 'bg-white'}>
                          <td className="px-6 py-4 font-medium text-stone-800">
                            {row.feature}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="material-symbols-outlined text-[#7FB069] text-2xl">
                              check_circle
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {row.traditional === false ? (
                              <span className="material-symbols-outlined text-[#A0522D] text-2xl">
                                cancel
                              </span>
                            ) : typeof row.traditional === 'string' ? (
                              <span className="text-sm font-medium text-stone-600">
                                {row.traditional}
                              </span>
                            ) : (
                              <span className="material-symbols-outlined text-[#7FB069] text-2xl">
                                check_circle
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Features;
