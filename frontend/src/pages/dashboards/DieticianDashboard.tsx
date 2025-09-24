import React, { useState } from 'react';
import { 
  Home, Users, FileText, Database, BarChart3, 
  Calendar, CreditCard, Settings, Plus, Search,
  Bell, User, LogOut, TrendingUp, Target,
  MessageCircle, Video, CheckCircle, AlertCircle,
  Trash2, ArrowLeft, Filter, Edit2
} from 'lucide-react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DieticianDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDietPlanGenerator, setShowDietPlanGenerator] = useState(false);
  
  // Food Database states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  // FIXED: Moved dosha values to component level state
  const [doshaValues] = useState({
    vata: 35.2,
    pitta: 28.1,
    kapha: 36.7
  });

  const [patientInfo, setPatientInfo] = useState({
    name: '',
    id: '',
    dosha: 'Vata',
    prakriti: '',
    vikruti: ''
  });

  const [meals, setMeals] = useState({
    breakfast: [{ food: 'Warm Spiced Oatmeal', quantity: '1 bowl', preparation: 'Cook with water, add cardamom and ginger' }],
    lunch: [
      { food: 'Kitchari', quantity: '1.5 cups', preparation: 'Made with split mung beans, basmati rice, and seasonal vegetables.' },
      { food: 'Steamed Asparagus', quantity: '1/2 cup', preparation: 'Lightly steamed with a pinch of black pepper.' }
    ],
    dinner: [{ food: 'Vegetable Soup', quantity: '1 large bowl', preparation: 'Well-cooked root vegetables in a light broth.' }],
    snacks: [{ food: 'Stewed Apple', quantity: '1 apple', preparation: 'Stewed with a pinch of cinnamon.' }]
  });

  const [notes, setNotes] = useState('');

  // FIXED: Moved calculation functions to component level
  const calculateBalanceReduction = () => {
    const idealBalance = 33.33;
    const totalDeviation = Math.abs(doshaValues.vata - idealBalance) + 
                          Math.abs(doshaValues.pitta - idealBalance) + 
                          Math.abs(doshaValues.kapha - idealBalance);
    return Math.round((totalDeviation / 100) * 100);
  };

  const getDoshaColor = (dosha) => {
    const baseColors = {
      vata: '#87CEEB',  // Sky blue (air element)
      pitta: '#FF6B6B', // Red-orange (fire element) 
      kapha: '#98D8C8'  // Green (earth/water element)
    };
    return baseColors[dosha];
  };

  const balanceReduction = calculateBalanceReduction();
  const balanceStatus = balanceReduction <= 5 ? 'Balanced' : 
                       balanceReduction <= 15 ? 'Mildly Imbalanced' : 
                       'Significantly Imbalanced';

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'diet-plans', label: 'Diet Plans', icon: FileText },
    { id: 'food-db', label: 'Food Database', icon: Database },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  const recentPatients = [
    { id: 1, name: 'Priya Patel', age: 32, gender: 'Female', dosha: 'Vata', lastVisit: '2 weeks ago', compliance: 87, status: 'active' },
    { id: 2, name: 'Arjun Singh', age: 45, gender: 'Male', dosha: 'Pitta', lastVisit: '1 month ago', compliance: 92, status: 'active' },
    { id: 3, name: 'Meera Iyer', age: 28, gender: 'Female', dosha: 'Kapha', lastVisit: '3 weeks ago', compliance: 78, status: 'needs-attention' },
    { id: 4, name: 'Rohan Verma', age: 50, gender: 'Male', dosha: 'Vata-Pitta', lastVisit: '2 months ago', compliance: 95, status: 'active' },
    { id: 5, name: 'Divya Krishnan', age: 35, gender: 'Female', dosha: 'Pitta-Kapha', lastVisit: '1 week ago', compliance: 89, status: 'active' }
  ];

  // Food Database Data
  const foodData = [
    {
      id: 1,
      name: 'Quinoa',
      calories: 120,
      doshaEffect: { vata: '-', pitta: '=', kapha: '+' },
      rasa: 'Sweet',
      guna: 'Light, Dry',
      virya: 'Cooling',
      vipaka: 'Sweet'
    },
    {
      id: 2,
      name: 'Spinach',
      calories: 23,
      doshaEffect: { vata: '=', pitta: '-', kapha: '+' },
      rasa: 'Astringent, Bitter',
      guna: 'Light, Dry',
      virya: 'Cooling',
      vipaka: 'Pungent'
    },
    {
      id: 3,
      name: 'Almonds',
      calories: 579,
      doshaEffect: { vata: '+', pitta: '=', kapha: '-' },
      rasa: 'Sweet',
      guna: 'Heavy, Oily',
      virya: 'Warming',
      vipaka: 'Sweet'
    },
    {
      id: 4,
      name: 'Mango',
      calories: 60,
      doshaEffect: { vata: '-', pitta: '+', kapha: '+' },
      rasa: 'Sweet, Sour',
      guna: 'Heavy, Oily',
      virya: 'Cooling',
      vipaka: 'Sweet'
    },
    {
      id: 5,
      name: 'Ginger',
      calories: 80,
      doshaEffect: { vata: '-', pitta: '+', kapha: '-' },
      rasa: 'Pungent',
      guna: 'Light, Dry',
      virya: 'Warming',
      vipaka: 'Pungent'
    },
    {
      id: 6,
      name: 'Brown Rice',
      calories: 111,
      doshaEffect: { vata: '-', pitta: '=', kapha: '+' },
      rasa: 'Sweet',
      guna: 'Heavy, Oily',
      virya: 'Cooling',
      vipaka: 'Sweet'
    }
  ];

  const getDoshaEffectStyle = (effect) => {
    const baseClasses = "rounded px-2 py-1 text-xs font-medium";
    
    switch (effect) {
      case '+':
        return `${baseClasses} bg-[#7FB069] bg-opacity-20 text-[#7FB069]`;
      case '-':
        return `${baseClasses} bg-[#98D8C8] bg-opacity-30 text-[#7FB069]`;
      case '=':
        return `${baseClasses} bg-gray-100 text-gray-600`;
      default:
        return baseClasses;
    }
  };

  const filteredFoods = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.rasa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.guna.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMealItem = (mealType) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: [...prev[mealType], { food: '', quantity: '', preparation: '' }]
    }));
  };

  const removeMealItem = (mealType, index) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: prev[mealType].filter((_, i) => i !== index)
    }));
  };

  const updateMealItem = (mealType, index, field, value) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: prev[mealType].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handlePatientInfoChange = (field, value) => {
    setPatientInfo(prev => ({ ...prev, [field]: value }));
  };

  const exportToPDF = () => {
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Diet Plan - ${patientInfo.name}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
          .header { text-align: center; border-bottom: 2px solid #7FB069; padding-bottom: 20px; margin-bottom: 30px; }
          .patient-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
          .meal-section { margin-bottom: 30px; }
          .meal-title { color: #7FB069; font-size: 18px; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 15px; }
          .meal-item { margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 5px; }
          .notes-section { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 30px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
          th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
          th { background-color: #7FB069; color: white; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Ayurvedic Diet Plan</h1>
          <p>Prepared by Dr. Anya Sharma | Ayurvedic Practitioner</p>
        </div>
        
        <div class="patient-info">
          <h2>Patient Information</h2>
          <table>
            <tr><th>Name:</th><td>${patientInfo.name}</td></tr>
            <tr><th>Patient ID:</th><td>${patientInfo.id}</td></tr>
            <tr><th>Dosha:</th><td>${patientInfo.dosha}</td></tr>
            <tr><th>Prakriti:</th><td>${patientInfo.prakriti || 'Not specified'}</td></tr>
            <tr><th>Vikruti:</th><td>${patientInfo.vikruti || 'Not specified'}</td></tr>
          </table>
        </div>

        ${Object.entries(meals).map(([mealType, items]) => `
          <div class="meal-section">
            <h3 class="meal-title">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
            ${items.map(item => `
              <div class="meal-item">
                <strong>${item.food}</strong> - ${item.quantity}<br>
                <em>Preparation: ${item.preparation}</em>
              </div>
            `).join('')}
          </div>
        `).join('')}

        ${notes ? `
          <div class="notes-section">
            <h3>Additional Notes & Guidelines</h3>
            <p>${notes}</p>
          </div>
        ` : ''}

        <div style="margin-top: 50px; text-align: center; color: #666; font-size: 12px;">
          <p>Generated on ${new Date().toLocaleDateString()}</p>
          <p>This diet plan is personalized based on Ayurvedic principles. Please follow the recommendations and consult if you have any concerns.</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Diet_Plan_${patientInfo.name || 'Patient'}_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Diet plan exported successfully! The file will be downloaded as an HTML file that can be printed as PDF.');
  };

  const renderMealSection = (mealType, title, mealData) => (
    <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#7FB069]">{title}</h3>
        <button 
          onClick={() => addMealItem(mealType)}
          className="flex items-center justify-center px-3 py-2 bg-white text-[#374151] border border-[#E5E7EB] text-xs font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all"
        >
          Add Item
        </button>
      </div>
      <div className="space-y-4">
        {mealData.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-4">
              {index === 0 && <label className="block text-sm font-medium text-gray-700 mb-1">Food Recommendation</label>}
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                type="text"
                value={item.food}
                onChange={(e) => updateMealItem(mealType, index, 'food', e.target.value)}
                placeholder="e.g., Oatmeal with cinnamon"
              />
            </div>
            <div className="col-span-2">
              {index === 0 && <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>}
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                type="text"
                value={item.quantity}
                onChange={(e) => updateMealItem(mealType, index, 'quantity', e.target.value)}
                placeholder="e.g., 1 cup"
              />
            </div>
            <div className="col-span-5">
              {index === 0 && <label className="block text-sm font-medium text-gray-700 mb-1">Preparation</label>}
              <input
                className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                type="text"
                value={item.preparation}
                onChange={(e) => updateMealItem(mealType, index, 'preparation', e.target.value)}
                placeholder="e.g., Cooked with almond milk"
              />
            </div>
            <div className="col-span-1 flex items-end pb-2">
              <button 
                onClick={() => removeMealItem(mealType, index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFoodDatabase = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-stone-800">Food Database</h1>
          <p className="text-stone-600">Manage and customize your Ayurvedic food database.</p>
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#7FB069] bg-opacity-20 px-4 text-sm font-bold text-[#7FB069] hover:bg-[#7FB069] hover:bg-opacity-30 transition-colors sm:w-auto"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#7FB069] px-4 text-sm font-bold text-white hover:bg-opacity-90 transition-colors sm:w-auto">
            <Plus className="w-4 h-4" />
            <span>Add New Food</span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            className="w-full rounded-lg border border-stone-300 bg-white py-3 pl-12 pr-4 text-stone-800 placeholder:text-gray-400 focus:border-[#7FB069] focus:ring-2 focus:ring-[#7FB069] focus:ring-opacity-20 focus:outline-none transition-colors" 
            placeholder="Search food by name or properties"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Panel (collapsible) */}
      {filterOpen && (
        <div className="mb-6 p-4 bg-white rounded-lg border border-stone-300 shadow-lg">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Filter Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Dosha Effect</label>
              <select className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-[#7FB069] focus:ring-2 focus:ring-[#7FB069] focus:ring-opacity-20 focus:outline-none">
                <option value="">All Effects</option>
                <option value="vata+">Vata Increasing</option>
                <option value="vata-">Vata Decreasing</option>
                <option value="pitta+">Pitta Increasing</option>
                <option value="pitta-">Pitta Decreasing</option>
                <option value="kapha+">Kapha Increasing</option>
                <option value="kapha-">Kapha Decreasing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Taste (Rasa)</label>
              <select className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-[#7FB069] focus:ring-2 focus:ring-[#7FB069] focus:ring-opacity-20 focus:outline-none">
                <option value="">All Tastes</option>
                <option value="sweet">Sweet</option>
                <option value="sour">Sour</option>
                <option value="salty">Salty</option>
                <option value="bitter">Bitter</option>
                <option value="pungent">Pungent</option>
                <option value="astringent">Astringent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Potency (Virya)</label>
              <select className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-[#7FB069] focus:ring-2 focus:ring-[#7FB069] focus:ring-opacity-20 focus:outline-none">
                <option value="">All</option>
                <option value="warming">Warming</option>
                <option value="cooling">Cooling</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Food Table */}
      <div className="overflow-x-auto rounded-lg border border-stone-300 bg-white shadow-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-stone-300 text-sm text-stone-600 bg-[#F5F5DC]">
              <th className="px-6 py-4 font-medium">Food Name</th>
              <th className="px-6 py-4 font-medium text-center">Calories</th>
              <th className="px-6 py-4 font-medium">Dosha Effect</th>
              <th className="px-6 py-4 font-medium">Rasa (Taste)</th>
              <th className="px-6 py-4 font-medium">Guna (Qualities)</th>
              <th className="px-6 py-4 font-medium">Virya (Potency)</th>
              <th className="px-6 py-4 font-medium">Vipaka</th>
              <th className="px-6 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-300 text-sm text-stone-800">
            {filteredFoods.map((food) => (
              <tr key={food.id} className="hover:bg-[#F5F5DC] hover:bg-opacity-50 transition-colors">
                <td className="px-6 py-4 font-medium">{food.name}</td>
                <td className="px-6 py-4 text-center text-stone-600">{food.calories}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={getDoshaEffectStyle(food.doshaEffect.vata)}>
                      V{food.doshaEffect.vata}
                    </span>
                    <span className={getDoshaEffectStyle(food.doshaEffect.pitta)}>
                      P{food.doshaEffect.pitta}
                    </span>
                    <span className={getDoshaEffectStyle(food.doshaEffect.kapha)}>
                      K{food.doshaEffect.kapha}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-stone-600">{food.rasa}</td>
                <td className="px-6 py-4 text-stone-600">{food.guna}</td>
                <td className="px-6 py-4 text-stone-600">{food.virya}</td>
                <td className="px-6 py-4 text-stone-600">{food.vipaka}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-[#7FB069] transition-colors rounded-lg hover:bg-[#7FB069] hover:bg-opacity-10">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredFoods.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-stone-600 mb-2">No foods found</h3>
          <p className="text-stone-500 mb-6">Try adjusting your search terms or filters.</p>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#7FB069] text-white rounded-lg hover:bg-opacity-90 transition-colors">
            <Plus className="w-4 h-4" />
            Add New Food
          </button>
        </div>
      )}
    </div>
  );

  const renderDietPlanGenerator = () => (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowDietPlanGenerator(false)}
            className="flex items-center justify-center p-2 text-[#374151] hover:bg-gray-100 rounded-lg transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Diet Plan Generator</h1>
            <p className="text-stone-600 mt-1">Create and manage personalized Ayurvedic diet plans for your patients.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center justify-center px-4 py-2 bg-white text-stone-800 border border-stone-300 text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
            Save Draft
          </button>
          <button 
            onClick={exportToPDF}
            className="flex items-center justify-center px-4 py-2 bg-[#7FB069] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-opacity-90 transition-all"
          >
            Export Plan
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-6 rounded-xl border border-stone-300 shadow-lg">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Patient Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="patient-name">
                  Patient Name
                </label>
                <input
                  className="w-full px-3 py-2 text-stone-700 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                  id="patient-name"
                  type="text"
                  value={patientInfo.name}
                  onChange={(e) => handlePatientInfoChange('name', e.target.value)}
                  placeholder="e.g., Priya Patel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="patient-id">
                  Patient ID
                </label>
                <input
                  className="w-full px-3 py-2 text-stone-700 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                  id="patient-id"
                  type="text"
                  value={patientInfo.id}
                  onChange={(e) => handlePatientInfoChange('id', e.target.value)}
                  placeholder="e.g., P0123"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-stone-300 shadow-lg">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Ayurvedic Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="dosha">
                  Dosha
                </label>
                <select
                  className="w-full px-3 py-2 text-stone-700 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                  id="dosha"
                  value={patientInfo.dosha}
                  onChange={(e) => handlePatientInfoChange('dosha', e.target.value)}
                >
                  <option value="">Select Dosha</option>
                  <option>Vata</option>
                  <option>Pitta</option>
                  <option>Kapha</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="prakriti">
                  Prakriti
                </label>
                <select
                  className="w-full px-3 py-2 text-stone-700 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                  id="prakriti"
                  value={patientInfo.prakriti}
                  onChange={(e) => handlePatientInfoChange('prakriti', e.target.value)}
                >
                  <option value="">Select Prakriti</option>
                  <option>Vata</option>
                  <option>Pitta</option>
                  <option>Kapha</option>
                  <option>Vata-Pitta</option>
                  <option>Vata-Kapha</option>
                  <option>Pitta-Kapha</option>
                  <option>Tridoshic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="vikruti">
                  Vikruti
                </label>
                <select
                  className="w-full px-3 py-2 text-stone-700 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                  id="vikruti"
                  value={patientInfo.vikruti}
                  onChange={(e) => handlePatientInfoChange('vikruti', e.target.value)}
                >
                  <option value="">Select Vikruti</option>
                  <option>Vata</option>
                  <option>Pitta</option>
                  <option>Kapha</option>
                  <option>Vata-Pitta</option>
                  <option>Vata-Kapha</option>
                  <option>Pitta-Kapha</option>
                  <option>Tridoshic</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Meal Components</h2>
            <div className="space-y-6">
              {renderMealSection('breakfast', 'Breakfast', meals.breakfast)}
              {renderMealSection('lunch', 'Lunch', meals.lunch)}
              {renderMealSection('dinner', 'Dinner', meals.dinner)}
              {renderMealSection('snacks', 'Snacks', meals.snacks)}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <section className="bg-white p-6 rounded-xl border border-stone-300 shadow-lg">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Plan Notes</h2>
            <textarea
              className="w-full h-40 px-3 py-2 text-stone-700 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069] resize-none"
              placeholder="Add general notes, guidelines, or lifestyle recommendations for the patient..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </section>

          <section className="bg-white p-6 rounded-xl border border-stone-300 shadow-lg">
            <h2 className="text-xl font-semibold text-stone-800 mb-4">Plan Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={exportToPDF}
                className="w-full flex items-center justify-center px-4 py-2 bg-[#7FB069] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-opacity-90 transition-all"
              >
                Generate & Send to Patient
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-stone-800 border border-stone-300 text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
                Save as Template
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-red-600 border border-red-200 hover:bg-red-50 text-sm font-semibold rounded-lg shadow-sm transition-all">
                Discard Plan
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-stone-800">Practitioner Dashboard</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Patient Management</h2>
        
        <div className="border-b border-stone-300 mb-4">
          <nav className="flex gap-8">
            <button className="pb-3 border-b-2 border-[#7FB069] text-stone-800 font-semibold">
              Patient Profiles
            </button>
            <button className="pb-3 border-b-2 border-transparent text-stone-600 hover:border-[#7FB069] hover:text-stone-800 font-semibold">
              Intake Forms
            </button>
          </nav>
        </div>

        <div className="bg-white rounded-lg border border-stone-300 overflow-x-auto shadow-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-stone-800 uppercase bg-[#F5F5DC]">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Dosha</th>
                <th className="px-6 py-3">Last Visit</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="bg-white border-b border-stone-300">
                  <td className="px-6 py-4 font-medium text-stone-800 whitespace-nowrap">
                    {patient.name}
                  </td>
                  <td className="px-6 py-4 text-stone-600">{patient.age}</td>
                  <td className="px-6 py-4 text-stone-600">{patient.gender}</td>
                  <td className="px-6 py-4">
                    <span className="bg-[#98D8C8] text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {patient.dosha}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-600">{patient.lastVisit}</td>
                  <td className="px-6 py-4">
                    <button className="font-medium text-[#7FB069] hover:underline">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Diet Plan Generator</h2>
          <div className="bg-white p-6 rounded-lg border border-stone-300 shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="patient-search">
                Search for a patient
              </label>
              <input
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-[#7FB069] focus:border-[#7FB069]"
                id="patient-search"
                placeholder="Enter patient name"
                type="text"
              />
            </div>
            <button 
              onClick={() => setShowDietPlanGenerator(true)}
              className="w-full bg-[#7FB069] text-white font-bold py-2 px-4 rounded-md hover:bg-[#6ea055] transition-colors"
            >
              Generate Diet Plan
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Patient Summary Reports</h2>
          <div className="bg-white p-6 rounded-lg border border-stone-300 shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-stone-700 mb-2" htmlFor="patient-select">
                Select a patient
              </label>
              <input
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-[#7FB069] focus:border-[#7FB069]"
                id="patient-select"
                placeholder="Select a patient"
                type="text"
              />
            </div>
            <button className="w-full bg-[#7FB069] text-white font-bold py-2 px-4 rounded-md hover:bg-[#6ea055] transition-colors">
              Generate Report
            </button>
          </div>
        </section>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Analytics Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border border-stone-300 shadow-lg">
            <h3 className="text-lg font-semibold text-stone-800">Patient Compliance</h3>
            <p className="text-3xl font-bold text-stone-800">
              85% <span className="text-sm font-medium text-[#7FB069]">+5%</span>
            </p>
            <p className="text-sm text-stone-600">Last 3 Months</p>
            <div className="mt-4 h-40">
              <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%">
                <path
                  d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                  fill="url(#paint0_linear_1)"
                  stroke="#7FB069"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1" x1="236" x2="236" y1="1" y2="149">
                    <stop stopColor="#98D8C8" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#98D8C8" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* FIXED: Dosha Balance Trends Section */}
          <div className="bg-white p-6 rounded-lg border border-stone-300 shadow-lg">
            <h3 className="text-lg font-semibold text-stone-800">Dosha Balance Trends</h3>
            
            <div className="flex items-center gap-2 mb-2">
              <p className="text-3xl font-bold text-stone-800">{balanceStatus}</p>
              <span className={`text-sm font-medium ${balanceReduction <= 5 ? 'text-green-600' : balanceReduction <= 15 ? 'text-yellow-600' : 'text-red-600'}`}>
                {balanceReduction > 0 ? `-${balanceReduction}%` : 'Perfect'}
              </span>
            </div>
            
            <p className="text-sm text-stone-600 mb-4">Last 6 Months</p>
            
            {/* Interactive Bar Chart */}
            <div className="mt-4 h-48 flex items-end gap-6 bg-gray-50 p-4 rounded-lg">
              {/* Vata Bar */}
              <div className="flex-1 text-center relative">
                <div className="relative h-40 flex items-end">
                  <div 
                    className="w-full rounded-t-md transition-all duration-500 ease-in-out relative"
                    style={{ 
                      height: `${(doshaValues.vata / 100) * 100}%`,
                      backgroundColor: getDoshaColor('vata'),
                      minHeight: '12px'
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-stone-700">
                      {doshaValues.vata.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-stone-600 mt-2">Vata</p>
                <p className="text-xs text-stone-500">(Air + Space)</p>
              </div>
              
              {/* Pitta Bar */}
              <div className="flex-1 text-center relative">
                <div className="relative h-40 flex items-end">
                  <div 
                    className="w-full rounded-t-md transition-all duration-500 ease-in-out relative"
                    style={{ 
                      height: `${(doshaValues.pitta / 100) * 100}%`,
                      backgroundColor: getDoshaColor('pitta'),
                      minHeight: '12px'
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-stone-700">
                      {doshaValues.pitta.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-stone-600 mt-2">Pitta</p>
                <p className="text-xs text-stone-500">(Fire + Water)</p>
              </div>
              
              {/* Kapha Bar */}
              <div className="flex-1 text-center relative">
                <div className="relative h-40 flex items-end">
                  <div 
                    className="w-full rounded-t-md transition-all duration-500 ease-in-out relative"
                    style={{ 
                      height: `${(doshaValues.kapha / 100) * 100}%`,
                      backgroundColor: getDoshaColor('kapha'),
                      minHeight: '12px'
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-stone-700">
                      {doshaValues.kapha.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-stone-600 mt-2">Kapha</p>
                <p className="text-xs text-stone-500">(Earth + Water)</p>
              </div>
            </div>
            
            {/* Balance Analysis */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
              <h4 className="text-sm font-semibold text-stone-800 mb-2">Balance Analysis</h4>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="text-center">
                  <div className={`font-medium ${doshaValues.vata > 40 ? 'text-orange-600' : doshaValues.vata < 25 ? 'text-blue-600' : 'text-green-600'}`}>
                    {doshaValues.vata > 40 ? 'High' : doshaValues.vata < 25 ? 'Low' : 'Normal'}
                  </div>
                  <div className="text-stone-600">Vata Level</div>
                </div>
                <div className="text-center">
                  <div className={`font-medium ${doshaValues.pitta > 40 ? 'text-red-600' : doshaValues.pitta < 25 ? 'text-blue-600' : 'text-green-600'}`}>
                    {doshaValues.pitta > 40 ? 'High' : doshaValues.pitta < 25 ? 'Low' : 'Normal'}
                  </div>
                  <div className="text-stone-600">Pitta Level</div>
                </div>
                <div className="text-center">
                  <div className={`font-medium ${doshaValues.kapha > 40 ? 'text-indigo-600' : doshaValues.kapha < 25 ? 'text-orange-600' : 'text-green-600'}`}>
                    {doshaValues.kapha > 40 ? 'High' : doshaValues.kapha < 25 ? 'Low' : 'Normal'}
                  </div>
                  <div className="text-stone-600">Kapha Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Food Database</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md focus:ring-[#7FB069] focus:border-[#7FB069]"
              placeholder="Search for foods"
              type="text"
            />
          </div>
          <div className="bg-white rounded-lg border border-stone-300 overflow-x-auto shadow-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-stone-800 uppercase bg-[#F5F5DC]">
                <tr>
                  <th className="px-6 py-3">Food Item</th>
                  <th className="px-6 py-3">Dosha Impact</th>
                  <th className="px-6 py-3">Properties</th>
                  <th className="px-6 py-3">Category</th>
                </tr>
              </thead>
              <tbody>
                {foodData.slice(0,5).map((food, index) => (
                  <tr key={index} className="bg-white border-b border-stone-300">
                    <td className="px-6 py-4 font-medium text-stone-800 whitespace-nowrap">
                      {food.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-[#98D8C8] text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {food.doshaEffect.vata === '+' ? 'Vata +' : food.doshaEffect.pitta === '+' ? 'Pitta +' : 'Kapha +'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-stone-600">{food.guna}</td>
                    <td className="px-6 py-4 text-stone-600">Food</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Appointments</h2>
          <div className="bg-white p-4 rounded-lg border border-stone-300 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <span className="text-xl text-gray-600 hover:text-gray-800">‹</span>
              </button>
              <h4 className="font-semibold text-lg text-stone-800">September 2025</h4>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <span className="text-xl text-gray-600 hover:text-gray-800">›</span>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {/* Day Headers */}
              <div className="font-semibold text-gray-500 py-2">S</div>
              <div className="font-semibold text-gray-500 py-2">M</div>
              <div className="font-semibold text-gray-500 py-2">T</div>
              <div className="font-semibold text-gray-500 py-2">W</div>
              <div className="font-semibold text-gray-500 py-2">T</div>
              <div className="font-semibold text-gray-500 py-2">F</div>
              <div className="font-semibold text-gray-500 py-2">S</div>
              
              {/* Calendar Days */}
              {/* Empty cells for start of month */}
              <div></div>
              <div></div>
              <div></div>
              
              {/* Days 1-30 */}
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                const isToday = day === 25; // Current date
                const hasAppointment = [5, 12, 18, 26].includes(day); // Days with appointments
                const isWeekend = (day + 2) % 7 === 0 || (day + 3) % 7 === 0; // Saturday/Sunday
                
                return (
                  <div
                    key={day}
                    className={`
                      relative w-8 h-8 mx-auto flex items-center justify-center rounded-full cursor-pointer
                      transition-all duration-200 ease-in-out
                      ${isToday 
                        ? 'bg-[#7FB069] text-white font-bold ring-2 ring-[#98D8C8] ring-offset-1' 
                        : hasAppointment 
                        ? 'bg-[#98D8C8] text-stone-800 font-semibold hover:bg-[#7FB069] hover:text-white hover:scale-110' 
                        : isWeekend 
                        ? 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                        : 'text-stone-700 hover:bg-[#F5F5DC] hover:text-stone-900 hover:scale-105'
                      }
                    `}
                  >
                    {day}
                    {hasAppointment && !isToday && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#7FB069] rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#7FB069] rounded-full"></div>
                <span>Today</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#98D8C8] rounded-full"></div>
                <span>Appointments</span>
              </div>
            </div>
            
            {/* Upcoming Appointments Preview */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h5 className="text-sm font-semibold text-stone-800 mb-2">Upcoming Appointments</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Sep 26 - 10:00 AM</span>
                  <span className="text-[#7FB069] font-medium">Follow-up</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Sep 28 - 2:30 PM</span>
                  <span className="text-[#7FB069] font-medium">New Patient</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-stone-800">Patient Management</h2>
        <button className="flex items-center space-x-2 bg-[#7FB069] text-white px-4 py-2 rounded-lg hover:bg-[#6ea055] transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Patient</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-stone-300 shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-[#7FB069] focus:border-[#7FB069]"
            />
          </div>
          <select className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-[#7FB069] focus:border-[#7FB069]">
            <option>All Doshas</option>
            <option>Vata</option>
            <option>Pitta</option>
            <option>Kapha</option>
            <option>Vata-Pitta</option>
            <option>Pitta-Kapha</option>
          </select>
          <select className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-[#7FB069] focus:border-[#7FB069]">
            <option>All Status</option>
            <option>Active</option>
            <option>Needs Attention</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-stone-300 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5F5DC] border-b border-stone-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Dosha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Compliance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-stone-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-300">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-[#F5F5DC]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#7FB069] to-[#98D8C8] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-stone-800">{patient.name}</div>
                        <div className="text-sm text-stone-600">Age {patient.age}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-[#98D8C8] text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {patient.dosha}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-gradient-to-r from-[#7FB069] to-[#98D8C8] h-2 rounded-full"
                          style={{ width: `${patient.compliance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-stone-800">{patient.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      patient.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status === 'active' ? 'Active' : 'Needs Attention'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-[#7FB069] hover:text-stone-800">View</button>
                      <button className="text-[#7FB069] hover:text-stone-800">Edit</button>
                      <button 
                        onClick={() => setShowDietPlanGenerator(true)}
                        className="text-[#7FB069] hover:text-stone-800"
                      >
                        Diet Plan
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (showDietPlanGenerator) {
      return renderDietPlanGenerator();
    }

    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'patients': return renderPatients();
      case 'diet-plans': return <div className="text-center py-20 text-stone-600">Diet Plans module coming soon...</div>;
      case 'food-db': return renderFoodDatabase();
      case 'analytics': return <div className="text-center py-20 text-stone-600">Analytics module coming soon...</div>;
      case 'appointments': return <div className="text-center py-20 text-stone-600">Appointments module coming soon...</div>;
      case 'billing': return <div className="text-center py-20 text-stone-600">Billing module coming soon...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex">
      {/* FIXED: Sidebar is now always visible */}
      <aside className="flex-shrink-0 w-64 bg-[#F5F5DC] p-6 border-r border-stone-300">
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL6LCXZXnGqZqY_Y-T1BepYlhu15Uoxz7voeVKNX7bt8zzsXHucUfWjgic9llY85L2X8YWS9EslXZRbwGKiVqpw7yCmLEXMenVtKnA3XgL7njOfaEl5KM7HWeAMSNwNx_od_QBcJ4GW9qqQ2rtEZ4ZjI3C7c71_KjTXP59KY6NR-saxpXwGl12dMfUIRGOqYvAYlK5lRleBCMrztrOjYxEdeTPiwLbckhwAMZNIb4ES6HgNBqSg3Wp1EMKa6xou52RUGqb8N1vrYUm")'
            }}
          ></div>
          <div>
            <h1 className="text-stone-800 text-base font-bold">Dr. Anya Sharma</h1>
            <p className="text-stone-600 text-sm">Ayurvedic Practitioner</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setShowDietPlanGenerator(false); // Close diet plan generator when switching tabs
              }}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-[#98D8C8] text-stone-800'
                  : 'text-stone-600 hover:bg-[#98D8C8] hover:text-stone-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default DieticianDashboard;
