import React from 'react';
import { 
  Heart, Target, Users, Award, Leaf, Lightbulb, 
  Globe, Shield, TrendingUp, Star, ArrowRight, CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Every feature we build prioritizes patient wellbeing and healthcare outcomes"
    },
    {
      icon: Lightbulb,
      title: "Innovation with Tradition",
      description: "Bridging ancient Ayurvedic wisdom with modern technological capabilities"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Maintaining the highest standards of data privacy and healthcare compliance"
    },
    {
      icon: Globe,
      title: "Accessible Healthcare",
      description: "Making quality Ayurvedic care accessible to everyone, everywhere"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "AyurDiet was founded with the vision to digitize Ayurvedic nutrition"
    },
    {
      year: "2024",
      title: "Product Launch",
      description: "Launched India's first comprehensive Ayurvedic nutrition platform"
    },
    {
      year: "2024",
      title: "500+ Foods",
      description: "Completed digitization of 500+ traditional foods with dosha properties"
    },
    {
      year: "2025",
      title: "1000+ Patients",
      description: "Successfully managed 1000+ patients across 50+ healthcare providers"
    }
  ];

  const team = [
    {
      name: "Dr. Priya Krishnan",
      role: "Founder & Chief Medical Officer",
      expertise: "BAMS, MD Ayurveda, 15+ years experience",
      description: "Leading Ayurvedic practitioner and researcher focused on nutrition therapy"
    },
    {
      name: "Rajesh Kumar",
      role: "Co-Founder & CTO",
      expertise: "MS Computer Science, 12+ years in HealthTech",
      description: "Technology leader specializing in AI/ML applications in healthcare"
    },
    {
      name: "Dr. Meera Sharma",
      role: "Head of Clinical Research",
      expertise: "PhD Ayurveda, Research Specialist",
      description: "Expert in clinical validation and evidence-based Ayurvedic treatments"
    }
  ];

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Transforming Healthcare with{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Ancient Wisdom
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AyurDiet bridges the gap between traditional Ayurvedic knowledge and modern healthcare technology, 
              making personalized nutrition therapy accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize Ayurvedic healthcare by creating India's most comprehensive digital nutrition platform. 
                  We empower healthcare professionals with AI-driven tools and evidence-based insights while making 
                  personalized Ayurvedic care accessible to patients worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the global leader in digital Ayurvedic healthcare, where every individual has access to 
                  personalized, scientifically-validated nutrition therapy that honors traditional wisdom while 
                  embracing modern innovation.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <p className="text-gray-600 font-medium">Foods Digitized</p>
                <p className="text-sm text-gray-500 mt-2">Complete Ayurvedic properties mapped</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-gray-600 font-medium">Patients Managed</p>
                <p className="text-sm text-gray-500 mt-2">Across 50+ healthcare providers</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600 font-medium">Dosha Accuracy</p>
                <p className="text-sm text-gray-500 mt-2">AI-powered analysis precision</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Expert Support</p>
                <p className="text-sm text-gray-500 mt-2">Round-the-clock healthcare assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at AyurDiet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to digitize Ayurvedic healthcare
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-500 to-teal-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                          <p className="text-green-600 font-medium">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind AyurDiet's innovative healthcare solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.expertise}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AyurDiet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why AyurDiet Exists
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional Ayurvedic knowledge has been passed down through generations, but modern healthcare 
                lacks accessible tools to apply this wisdom effectively. AyurDiet was born from the need to 
                bridge this gap and make personalized Ayurvedic care a reality for everyone.
              </p>
              <div className="space-y-4">
                {[
                  "First comprehensive digital Ayurvedic food database",
                  "AI-powered personalization based on individual constitution",
                  "Evidence-based approach to traditional medicine",
                  "Seamless integration for healthcare professionals",
                  "Patient empowerment through technology"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-8 rounded-2xl text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Our Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">89%</div>
                    <p className="text-green-100">Patient Compliance Improvement</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">67%</div>
                    <p className="text-green-100">Symptom Reduction Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <p className="text-green-100">Healthcare Partners</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <p className="text-green-100">Practitioner Satisfaction</p>
                  </div>
                </div>
                <p className="text-green-100 leading-relaxed">
                  "AyurDiet has transformed how I practice Ayurvedic medicine. The platform's 
                  precision in matching treatments to patient needs is unprecedented."
                </p>
                <p className="text-green-200 text-sm">- Dr. Rajesh Gupta, Senior Ayurvedic Physician</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Be part of the healthcare revolution that honors tradition while embracing innovation. 
            Together, we can make personalized Ayurvedic care accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
              <Users className="w-5 h-5" />
              <span>Join as Healthcare Provider</span>
            </button>
            <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;