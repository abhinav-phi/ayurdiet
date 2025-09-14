import React, { useState } from 'react';
import { 
  Home, Calendar, TrendingUp, MessageCircle, User, 
  CheckCircle2, Clock, Target, Heart, Apple, 
  Phone, Video, Bell, Settings, LogOut, Trophy,
  Star, Flower
} from 'lucide-react';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'education', label: 'Education', icon: Apple },
    { id: 'community', label: 'Community', icon: MessageCircle },
    { id: 'privacy', label: 'Privacy', icon: Settings },
    { id: 'support', label: 'Support', icon: User }
  ];

  const todayMeals = [
    {
      name: 'Oatmeal with Berries',
      image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=300&h=200&fit=crop',
      completed: true,
      meal: 'Breakfast'
    },
    {
      name: 'Quinoa Salad with Avocado',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop',
      completed: false,
      meal: 'Lunch'
    },
    {
      name: 'Lentil Soup with Vegetables',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop',
      completed: false,
      meal: 'Dinner'
    }
  ];

  const renderHome = () => (
    <div className="grid grid-cols-3 grid-rows-[auto_1fr_1fr] gap-8 h-full">
      {/* Header */}
      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Sophia</h1>
        <p className="text-gray-600">Here's a look at your personalized Ayurvedic journey today.</p>
      </div>

      {/* Doshic Balance */}
      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Doshic Balance</h2>
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-200"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-green-500"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="60, 100"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-blue-400"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="40, 100"
              strokeDashoffset="-60"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-amber-600"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="50, 100"
              strokeDashoffset="-100"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold text-gray-900">Balanced</p>
            <p className="text-sm text-gray-500">Today</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-6 text-center">
          <div>
            <p className="font-bold text-green-500">Vata</p>
            <p className="text-gray-700">60%</p>
          </div>
          <div>
            <p className="font-bold text-blue-400">Pitta</p>
            <p className="text-gray-700">40%</p>
          </div>
          <div>
            <p className="font-bold text-amber-600">Kapha</p>
            <p className="text-gray-700">50%</p>
          </div>
        </div>
      </div>

      {/* Today's Plan */}
      <div className="col-span-2 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Today's Plan</h2>
        <div className="grid grid-cols-3 gap-6">
          {todayMeals.map((meal, index) => (
            <div key={index} className="flex flex-col gap-2 group">
              <div className="relative">
                <img
                  alt={meal.name}
                  className="w-full h-32 object-cover rounded-lg"
                  src={meal.image}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <button className="text-white bg-green-600 px-3 py-1 rounded-md text-sm">
                    View Recipe
                  </button>
                </div>
              </div>
              <p className="font-semibold text-gray-900">{meal.meal}: {meal.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
            <Apple className="w-4 h-4" />
            Log Meal
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700 transition-colors">
            <TrendingUp className="w-4 h-4" />
            Track Symptoms
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700 transition-colors">
            <Calendar className="w-4 h-4" />
            Journal Entry
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Chat Practitioner
          </button>
        </div>
      </div>

      {/* Digestive Strength */}
      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Digestive Strength (Agni)</h2>
        <p className="text-4xl font-bold text-green-600">85%</p>
        <p className="text-sm text-green-600 font-semibold">+5% vs last 7 days</p>
        <div className="h-48 mt-4">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 300 120" width="100%">
            <path
              d="M 0 80 C 40 20, 60 40, 100 90 S 160 30, 200 60 S 260 100, 300 20"
              fill="none"
              stroke="rgb(34 197 94)"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Adherence */}
      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Adherence</h2>
        <p className="text-4xl font-bold text-blue-400">92%</p>
        <p className="text-sm text-green-600 font-semibold">+2% vs last 7 days</p>
        <div className="h-48 mt-4 grid grid-cols-7 gap-2 items-end">
          <div className="bg-blue-400 rounded-t-md" style={{height: '50%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '70%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '60%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '90%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '80%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '95%'}}></div>
          <div className="bg-blue-400 rounded-t-md" style={{height: '100%'}}></div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="col-span-1 bg-cover bg-center rounded-2xl shadow-md flex flex-col justify-end p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop")'
        }}></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">AI Insight</h2>
          <p className="text-sm">Incorporate warming spices like ginger and cinnamon today to support your digestive fire.</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return renderHome();
      case 'education': return <div className="text-center py-20 text-gray-500">Education module coming soon...</div>;
      case 'community': return <div className="text-center py-20 text-gray-500">Community module coming soon...</div>;
      case 'privacy': return <div className="text-center py-20 text-gray-500">Privacy settings coming soon...</div>;
      case 'support': return <div className="text-center py-20 text-gray-500">Support center coming soon...</div>;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 p-6 border-r border-gray-200 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Sophia Clark</h1>
            <p className="text-sm text-gray-600">Patient</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mb-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-teal-400 text-white font-bold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Stats Card */}
        <div className="bg-green-600 p-6 rounded-lg text-white">
          <h3 className="text-lg font-bold mb-2">Streak</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold">12</span>
            <span className="text-sm">days</span>
          </div>
          <h3 className="text-lg font-bold mb-2">Ojas Points</h3>
          <p className="text-3xl font-bold mb-4">1,250</p>
          <h3 className="text-lg font-bold mb-2">Achievements</h3>
          <div className="flex gap-2">
            <Trophy className="w-8 h-8" />
            <Flower className="w-8 h-8" />
            <Star className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default PatientDashboard;