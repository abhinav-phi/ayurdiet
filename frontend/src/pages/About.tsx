import React from 'react';

const About = () => {
  const values = [
    {
      icon: "favorite",
      title: "Empathy", 
      description: "We approach every user with compassion and understanding, recognizing the emotional aspects of dietary changes."
    },
    {
      icon: "groups",
      title: "Community",
      description: "We foster a supportive community where users can share their journeys, learn from each other, and find encouragement."
    },
    {
      icon: "eco", 
      title: "Sustainability",
      description: "We are committed to sustainable practices, respecting the natural world and promoting eco-friendly choices."
    }
  ];

  const team = [
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    },
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    },
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    },
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    },
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    },
    {
      name: "--",
      role: "---",
      image: "https://images.unsplash.com/photo",
      description: "===="
    }
  ];

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10 lg:py-20">
            <div className="layout-content-container flex flex-col max-w-5xl flex-1 gap-12">
              
              <section className="text-center flex flex-col items-center gap-4">
                <h1 className="text-stone-800 tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                  About AyurDiet
                </h1>
                <p className="text-stone-600 text-lg max-w-3xl font-normal leading-relaxed">
                  At AyurDiet, we're on a mission to harmonize ancient Ayurvedic wisdom with modern technology, 
                  creating a personalized diet management experience that nurtures both body and mind. Our platform 
                  is designed with emotional intelligence at its core, ensuring that every interaction is supportive, 
                  encouraging, and tailored to your unique needs.
                </p>
              </section>

              <section>
                <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="flex flex-1 gap-4 rounded-xl border border-transparent bg-white p-6 flex-col items-center text-center shadow-lg transition-transform transform hover:-translate-y-2"
                    >
                      <div className="bg-[#F5F5DC] text-[#7FB069] rounded-full p-3 inline-flex">
                        <span className="material-symbols-outlined text-4xl">{value.icon}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-stone-800 text-xl font-bold leading-tight">
                          {value.title}
                        </h3>
                        <p className="text-[#708764] text-base font-normal leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight text-center mb-8">
                  Meet the Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="flex flex-col gap-4 text-center pb-3 items-center">
                      <div className="w-40 h-40">
                        <div 
                          className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-full shadow-lg border-4 border-white"
                          style={{ backgroundImage: `url("${member.image}")` }}
                        ></div>
                      </div>
                      <div>
                        <p className="text-stone-800 text-lg font-bold leading-normal">
                          {member.name}
                        </p>
                        <p className="text-[#7FB069] text-base font-medium leading-normal">
                          {member.role}
                        </p>
                        <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-stone-600 text-lg text-center mt-8 max-w-3xl mx-auto leading-relaxed">
                  Our team comprises experienced Ayurvedic practitioners, nutritionists, and technology experts 
                  who are passionate about holistic health. We believe in the power of personalized care and are 
                  dedicated to guiding you on your path to wellness.
                </p>
              </section>

              <section className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <h2 className="text-stone-800 text-3xl font-bold leading-tight tracking-tight mb-4">
                      Our Approach: Emotionally Intelligent Design
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                      We blend traditional Ayurvedic principles with cutting-edge technology to create a platform 
                      that's both effective and user-friendly. Our 'Emotionally Intelligent Design' ensures that 
                      the platform adapts to your emotional state, providing support and encouragement when you need 
                      it most. We focus on creating a positive and empowering experience, helping you achieve your 
                      health goals with confidence and joy.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      alt="A person meditating peacefully in a natural setting" 
                      className="rounded-lg shadow-md w-full h-auto" 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop"
                    />
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;
