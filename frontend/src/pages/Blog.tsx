import React from 'react';
import { 
  Calendar, User, ArrowRight, Clock, Tag, 
  Leaf, Heart, Brain, Target, TrendingUp, BookOpen
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Science Behind AI-Powered Ayurvedic Diet Planning",
    excerpt: "Discover how artificial intelligence is revolutionizing traditional Ayurvedic practice by analyzing dosha patterns, seasonal variations, and individual constitution to create personalized nutrition plans.",
    author: "Dr. Priya Krishnan",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Your Dosha: A Complete Guide to Ayurvedic Constitution",
      excerpt: "Learn how to identify your unique dosha combination and understand how it influences your health, metabolism, and dietary requirements.",
      author: "Dr. Meera Sharma",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Ayurveda Basics",
      image: "https://images.pexels.com/photos/4047036/pexels-photo-4047036.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Seasonal Eating in Ayurveda: Adapting Your Diet Throughout the Year",
      excerpt: "Explore how seasonal changes affect your body's needs and learn to adjust your diet according to Ayurvedic principles for optimal health.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Case Study: Reversing Diabetes Through Personalized Ayurvedic Nutrition",
      excerpt: "A detailed case study showing how personalized Ayurvedic diet plans helped a patient achieve significant improvement in diabetes management.",
      author: "Dr. Priya Krishnan",
      date: "2025-01-08",
      readTime: "12 min read",
      category: "Case Studies",
      image: "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "The Role of Agni (Digestive Fire) in Modern Health Issues",
      excerpt: "Understanding how the concept of Agni from Ayurveda explains modern digestive problems and metabolic disorders.",
      author: "Dr. Meera Sharma",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Health Insights",
      image: "https://images.pexels.com/photos/4047164/pexels-photo-4047164.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Food Combinations in Ayurveda: What to Eat Together and What to Avoid",
      excerpt: "Learn about Ayurvedic food combining principles and how certain combinations can enhance or hinder digestion and nutrition.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      title: "Digital Transformation in Ayurvedic Practice: Opportunities and Challenges",
      excerpt: "Examining how digital tools are reshaping traditional Ayurvedic practice and the considerations for healthcare providers.",
      author: "Dr. Priya Krishnan",
      date: "2025-01-01",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = [
    { name: "All Posts", count: 7, icon: BookOpen },
    { name: "Ayurveda Basics", count: 1, icon: Leaf },
    { name: "Nutrition", count: 2, icon: Heart },
    { name: "Technology", count: 2, icon: Brain },
    { name: "Case Studies", count: 1, icon: Target },
    { name: "Health Insights", count: 1, icon: TrendingUp }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              AyurDiet{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, research, and expert guidance on Ayurvedic nutrition, technology in healthcare, 
              and the future of personalized medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                          <span className="text-gray-700 group-hover:text-gray-900">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-green-500 to-teal-500 p-6 rounded-2xl text-white">
                  <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Get the latest insights on Ayurvedic health and nutrition delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <button className="w-full bg-white text-green-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-16">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(featuredPost.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Posts Grid */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
                  <button className="text-green-600 hover:text-green-500 font-medium flex items-center space-x-1">
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="group">
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <button className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-500 font-medium group">
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Share Your Knowledge
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Are you an Ayurvedic expert or healthcare professional? Share your insights 
            and contribute to our growing knowledge community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
              <span>Contribute Article</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              <BookOpen className="w-5 h-5" />
              <span>Writing Guidelines</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;