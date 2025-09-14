import React from 'react';
import { 
  Database, Brain, TrendingUp, Shield, Users, Calendar, 
  FileText, BarChart3, MessageCircle, Smartphone, CheckCircle2,
  Leaf, Heart, Target, Award, Zap, Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Ayurvedic Food Database",
      description: "India's first comprehensive digital database with 500+ foods mapped with complete Ayurvedic properties including dosha effects, rasa, virya, vipaka, and nutritional values.",
      benefits: ["500+ digitized foods", "Complete dosha mapping", "Nutritional analysis", "Seasonal recommendations"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Brain,
      title: "AI Diet Personalization",
      description: "Advanced AI algorithms that consider patient's prakriti, current imbalances, lifestyle factors, symptoms, and seasonal variations to create perfectly tailored diet plans.",
      benefits: ["Prakriti-based planning", "Symptom consideration", "Seasonal adaptations", "Lifestyle integration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Validation Engine",
      description: "Scientific approach to track diet compliance against symptom improvement, providing data-driven insights for better treatment outcomes.",
      benefits: ["Compliance tracking", "Symptom correlation", "Progress analytics", "Treatment validation"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Patient Records Management",
      description: "Comprehensive patient management system with detailed health records, treatment history, and progress tracking all in one secure platform.",
      benefits: ["Secure health records", "Treatment history", "Progress tracking", "Easy data access"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Detailed analytics dashboard with insights on patient progress, treatment effectiveness, compliance rates, and practice growth metrics.",
      benefits: ["Practice analytics", "Patient insights", "Progress reports", "Growth tracking"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: MessageCircle,
      title: "Integrated Communication",
      description: "Secure chat and video calling features for seamless communication between practitioners and patients, supporting continuous care.",
      benefits: ["Secure messaging", "Video consultations", "File sharing", "Real-time support"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  const uniqueFeatures = [
    {
      icon: Globe,
      title: "India's First Ayurvedic Nutrition Database",
      description: "Pioneering digital platform combining traditional Ayurvedic knowledge with modern nutrition science"
    },
    {
      icon: Target,
      title: "AI Diet Personalization Engine",
      description: "Smart algorithms that consider prakriti, lifestyle, symptoms, and seasonal variations"
    },
    {
      icon: Award,
      title: "Scientific Validation System",
      description: "Link diet compliance with symptom improvement for evidence-based treatment"
    },
    {
      icon: Heart,
      title: "Holistic Expert Network",
      description: "Connect with dieticians, yoga trainers, fitness coaches, and homeopathy doctors"
    },
    {
      icon: Zap,
      title: "Food Compatibility Checker",
      description: "Ayurvedic food combination validation to prevent incompatible meal planning"
    },
    {
      icon: Smartphone,
      title: "\"AstroTalk of Health\"",
      description: "Real-time personalized holistic health advice and instant expert consultation"
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
              <span>Revolutionary Features</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Modern Ayurveda
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how AyurDiet combines ancient Ayurvedic wisdom with cutting-edge technology 
              to transform healthcare delivery and patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional Ayurvedic healthcare in one integrated platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes AyurDiet Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary features that set us apart from traditional healthcare platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AyurDiet vs Traditional Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how AyurDiet compares to existing solutions in the market
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Features</th>
                    <th className="px-6 py-4 text-center font-semibold">AyurDiet</th>
                    <th className="px-6 py-4 text-center font-semibold">Ntuitive</th>
                    <th className="px-6 py-4 text-center font-semibold">AyurEHR</th>
                    <th className="px-6 py-4 text-center font-semibold">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      feature: "Ayurvedic Food Database",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: false,
                      others: false
                    },
                    {
                      feature: "AI Diet Generation",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: false,
                      others: false
                    },
                    {
                      feature: "Dosha Analysis",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: true,
                      others: false
                    },
                    {
                      feature: "Food Combo Checker",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: false,
                      others: false
                    },
                    {
                      feature: "Patient Management",
                      ayurdiet: true,
                      ntuitive: true,
                      ayurehr: true,
                      others: true
                    },
                    {
                      feature: "Mobile App",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: false,
                      others: false
                    },
                    {
                      feature: "Validation Engine",
                      ayurdiet: true,
                      ntuitive: false,
                      ayurehr: false,
                      others: false
                    }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.ayurdiet ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.ntuitive ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.ayurehr ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.others ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
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
    </div>
  );
};

export default Features;