import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <section className="relative hero-pattern text-gray-800 py-32 px-10 overflow-hidden">
            <span className="material-symbols-outlined leaf-pattern text-[20rem] -top-16 -left-20 transform -rotate-45">eco</span>
            <span className="material-symbols-outlined leaf-pattern text-[15rem] top-1/2 -right-16 transform rotate-12">eco</span>
            <span className="material-symbols-outlined leaf-pattern text-[10rem] bottom-0 left-1/4 transform rotate-45">eco</span>
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-4 text-gray-900">
                Ayurveda + Nutrition, Digitally Simplified
              </h1>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-gray-700">
                Empowering health through personalized Ayurvedic diet management. Seamlessly integrate ancient wisdom with modern technology for optimal well-being.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/patient/signup"
                  className="flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-soft-sage-green text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="truncate">For Individuals</span>
                </Link>
                <Link 
                  to="/dietician/signup"
                  className="flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-soothing-blue text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="truncate">For Practitioners</span>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-white">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
                <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
                  Explore the core functionalities designed to streamline Ayurvedic diet management for both patients and practitioners.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4 text-center p-6 rounded-lg bg-warm-beige/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-soft-sage-green mx-auto">
                    <span className="material-symbols-outlined text-5xl">person_search</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Patient Records</h3>
                  <p className="text-gray-600">Secure and comprehensive patient data management.</p>
                </div>
                <div className="flex flex-col gap-4 text-center p-6 rounded-lg bg-warm-beige/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-soft-sage-green mx-auto">
                    <span className="material-symbols-outlined text-5xl">eco</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Ayurvedic Food Database</h3>
                  <p className="text-gray-600">Extensive database of Ayurvedic foods with detailed properties.</p>
                </div>
                <div className="flex flex-col gap-4 text-center p-6 rounded-lg bg-warm-beige/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-soft-sage-green mx-auto">
                    <span className="material-symbols-outlined text-5xl">psychology</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">AI Diet Generator</h3>
                  <p className="text-gray-600">Intelligent diet plans tailored to individual needs.</p>
                </div>
                <div className="flex flex-col gap-4 text-center p-6 rounded-lg bg-warm-beige/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-soft-sage-green mx-auto">
                    <span className="material-symbols-outlined text-5xl">analytics</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Analytics & Reports</h3>
                  <p className="text-gray-600">Actionable insights and reports for effective monitoring.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <p className="text-5xl font-bold text-soothing-blue">500+</p>
                <p className="text-lg text-gray-700 mt-2">Foods Digitized</p>
              </div>
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <p className="text-5xl font-bold text-soothing-blue">1000+</p>
                <p className="text-lg text-gray-700 mt-2">Patients Managed</p>
              </div>
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <p className="text-5xl font-bold text-soothing-blue">95%</p>
                <p className="text-lg text-gray-700 mt-2">Dosha Accuracy</p>
              </div>
            </div>
          </section>

          <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900">A Clearer Path to Wellness</h2>
                <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
                  Discover how AyurDiet's modern approach elevates traditional Ayurvedic practices, offering a more intuitive and effective experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-warm-beige/30 rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col">
                  <h3 className="text-2xl font-bold text-center text-gray-500 mb-6">Existing Solutions</h3>
                  <ul className="space-y-6 text-gray-600 flex-grow">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-earthy-accent/70 mt-1">cancel</span>
                      <div>
                        <h4 className="font-semibold">Generic & Static</h4>
                        <p>Often rely on paper charts or basic spreadsheets, leading to one-size-fits-all, inflexible advice.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-earthy-accent/70 mt-1">cancel</span>
                      <div>
                        <h4 className="font-semibold">Manual & Time-Consuming</h4>
                        <p>Requires extensive manual research for food properties and labor-intensive tracking for practitioners and patients.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-earthy-accent/70 mt-1">cancel</span>
                      <div>
                        <h4 className="font-semibold">Fragmented & Inaccessible</h4>
                        <p>Information is scattered, and access to guidance is limited to in-person consultations, making consistency a challenge.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-soothing-blue/10 rounded-2xl p-8 shadow-lg border border-soothing-blue/30 text-gray-800 flex flex-col">
                  <h3 className="text-2xl font-bold text-center text-soft-sage-green mb-6">The AyurDiet Advantage</h3>
                  <ul className="space-y-6 flex-grow">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-soft-sage-green mt-1">check_circle</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Dynamic & Hyper-Personalized</h4>
                        <p>Go beyond static plans. Our AI adapts to your unique Dosha constitution, health goals, and even daily fluctuations, ensuring your path to balance is always relevant.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-soft-sage-green mt-1">check_circle</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Automated & Effortless</h4>
                        <p>Eliminate guesswork. Instantly access a vast, digitized food database, generate meal plans, and track progress with insightful analytics that simplify wellness management.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-soft-sage-green mt-1">check_circle</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Integrated & Holistic</h4>
                        <p>Experience a unified platform where patient records, diet plans, and progress reports converge, fostering seamless collaboration and consistent support.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-warm-beige/70 py-20 px-4">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy & Security First</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Your data is protected with state-of-the-art security and compliance standards, including blockchain technology for ultimate transparency and trust.
              </p>
              <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <div className="p-4 rounded-full bg-soothing-blue/20 text-soothing-blue">
                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                  </div>
                  <span className="font-semibold text-lg">HIPAA Compliant</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <div className="p-4 rounded-full bg-soothing-blue/20 text-soothing-blue">
                    <span className="material-symbols-outlined text-4xl">gpp_good</span>
                  </div>
                  <span className="font-semibold text-lg">GDPR Ready</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-gray-700">
                  <div className="p-4 rounded-full bg-soothing-blue/20 text-soothing-blue">
                    <span className="material-symbols-outlined text-4xl">encrypted</span>
                  </div>
                  <span className="font-semibold text-lg">Blockchain Secured</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;