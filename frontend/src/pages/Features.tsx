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
      ayurmind: true,
      traditional: false
    },
    {
      feature: "Dynamic, Generative Recipe Engine",
      ayurmind: true,
      traditional: false
    },
    {
      feature: "Real-time Doshic Balance Tracking",
      ayurmind: true,
      traditional: false
    },
    {
      feature: "Gamified & Engaging Wellness Journey",
      ayurmind: true,
      traditional: "Limited / Static"
    },
    {
      feature: "Integrated B2B Practitioner Dashboard",
      ayurmind: true,
      traditional: false
    },
    {
      feature: "Blockchain-Based Consent & Data Security",
      ayurmind: true,
      traditional: false
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 px-4 sm:px-10 lg:px-20 py-16">
            <div className="mx-auto max-w-6xl">
              
              {/* Hero Section */}
              <section className="text-center mb-24">
                <h1 className="text-4xl md:text-5xl font-bold text-[#262626] mb-4">
                  Powerful Features for Modern Wellness
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  AyurDiet bridges ancient Ayurvedic wisdom with modern technology,
                  offering a personalized and effective path to holistic well-being.
                </p>
              </section>
              
              {/* Patient Features */}
              <section className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#262626]">
                  A Personalized Path to Wellness
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {patientFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-[#fef9c3] p-6 flex flex-col items-center text-center rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="bg-white rounded-full p-4 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-4xl text-[#4caf50]">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-[#262626]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Practitioner Features */}
              <section className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#262626]">
                  Streamline Your Practice, Elevate Your Care
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {practitionerFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="bg-[#fef9c3] p-6 flex flex-col items-center text-center rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="bg-white rounded-full p-4 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-4xl text-[#4caf50]">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-[#262626]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Comparison Table */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-12 text-[#262626]">
                  The AyurDiet Advantage
                </h2>
                <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 font-bold text-[#262626]">
                          Feature
                        </th>
                        <th className="px-6 py-4 font-bold text-[#262626] text-center">
                          AyurDiet
                        </th>
                        <th className="px-6 py-4 font-bold text-[#262626] text-center">
                          Traditional Methods / Generic Apps
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonData.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 font-medium text-[#262626]">
                            {row.feature}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="material-symbols-outlined text-[#4caf50] text-2xl">
                              check_circle
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {row.traditional === false ? (
                              <span className="material-symbols-outlined text-[#ef5350] text-2xl">
                                cancel
                              </span>
                            ) : typeof row.traditional === 'string' ? (
                              <span className="text-sm font-medium text-gray-500">
                                {row.traditional}
                              </span>
                            ) : (
                              <span className="material-symbols-outlined text-[#4caf50] text-2xl">
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
