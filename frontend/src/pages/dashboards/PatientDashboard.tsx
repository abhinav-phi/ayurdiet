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
      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">Welcome back, Sophia</h1>
        <p className="text-stone-600">Here's a look at your personalized Ayurvedic journey today.</p>
      </div>

      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center border border-stone-300">
        <h2 className="text-2xl font-bold mb-4 text-stone-800">Doshic Balance</h2>
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-200"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-[#7FB069]"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="60, 100"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-[#98D8C8]"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="40, 100"
              strokeDashoffset="-60"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              className="stroke-current text-[#A0522D]"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeDasharray="50, 100"
              strokeDashoffset="-100"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold text-stone-800">Balanced</p>
            <p className="text-sm text-stone-600">Today</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-6 text-center">
          <div>
            <p className="font-bold text-[#7FB069]">Vata</p>
            <p className="text-stone-700">60%</p>
          </div>
          <div>
            <p className="font-bold text-[#98D8C8]">Pitta</p>
            <p className="text-stone-700">40%</p>
          </div>
          <div>
            <p className="font-bold text-[#A0522D]">Kapha</p>
            <p className="text-stone-700">50%</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-stone-300">
        <h2 className="text-2xl font-bold mb-4 text-stone-800">Today's Plan</h2>
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
                  <button className="text-white bg-[#7FB069] px-3 py-1 rounded-md text-sm">
                    View Recipe
                  </button>
                </div>
              </div>
              <p className="font-semibold text-stone-800">{meal.meal}: {meal.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#7FB069] text-white font-semibold hover:bg-[#6ea055] transition-colors">
            <Apple className="w-4 h-4" />
            Log Meal
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors">
            <TrendingUp className="w-4 h-4" />
            Track Symptoms
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors">
            <Calendar className="w-4 h-4" />
            Journal Entry
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Chat Practitioner
          </button>
        </div>
      </div>

      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-stone-300">
        <h2 className="text-2xl font-bold mb-4 text-stone-800">Digestive Strength (Agni)</h2>
        <p className="text-4xl font-bold text-[#7FB069]">85%</p>
        <p className="text-sm text-[#7FB069] font-semibold">+5% vs last 7 days</p>
        <div className="h-48 mt-4">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 300 120" width="100%">
            <path
              d="M 0 80 C 40 20, 60 40, 100 90 S 160 30, 200 60 S 260 100, 300 20"
              fill="none"
              stroke="#7FB069"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <div className="col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-stone-300">
        <h2 className="text-2xl font-bold mb-4 text-stone-800">Adherence</h2>
        <p className="text-4xl font-bold text-[#98D8C8]">92%</p>
        <p className="text-sm text-[#7FB069] font-semibold">+2% vs last 7 days</p>
        <div className="h-48 mt-4 grid grid-cols-7 gap-2 items-end">
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '50%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '70%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '60%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '90%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '80%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '95%'}}></div>
          <div className="bg-[#98D8C8] rounded-t-md" style={{height: '100%'}}></div>
        </div>
      </div>

      <div className="col-span-1 bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-end p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#7FB069] via-[#7FB069]/80 to-transparent"></div>
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
      case 'education': return <div className="text-center py-20 text-stone-600">Education module coming soon...</div>;
      case 'community': return <div className="text-center py-20 text-stone-600">Community module coming soon...</div>;
      case 'privacy': return <div className="text-center py-20 text-stone-600">Privacy settings coming soon...</div>;
      case 'support': return <div className="text-center py-20 text-stone-600">Support center coming soon...</div>;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex">
      <div className="w-64 bg-[#F5F5DC] p-6 border-r border-stone-300 flex flex-col">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-gradient-to-br from-[#7FB069] to-[#98D8C8] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-stone-800">User</h1>
            <p className="text-sm text-stone-600">Patient</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mb-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-[#98D8C8] text-stone-800 font-bold'
                  : 'text-stone-700 hover:bg-[#98D8C8]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="bg-[#7FB069] p-6 rounded-lg text-white">
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

      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default PatientDashboard;