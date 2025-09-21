import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const DietPlanGenerator = () => {
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

  const addMealItem = (mealType: string) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: [...prev[mealType as keyof typeof prev], { food: '', quantity: '', preparation: '' }]
    }));
  };

  const removeMealItem = (mealType: string, index: number) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: prev[mealType as keyof typeof prev].filter((_, i) => i !== index)
    }));
  };

  const updateMealItem = (mealType: string, index: number, field: string, value: string) => {
    setMeals(prev => ({
      ...prev,
      [mealType]: prev[mealType as keyof typeof prev].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handlePatientInfoChange = (field: string, value: string) => {
    setPatientInfo(prev => ({ ...prev, [field]: value }));
  };

  const renderMealSection = (mealType: string, title: string, mealData: any[]) => (
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

  return (
    <div className="min-h-screen bg-[#F5F5DC]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#374151]">Diet Plan Generator</h1>
            <p className="text-[#6B7280] mt-1">Create and manage personalized Ayurvedic diet plans for your patients.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center justify-center px-4 py-2 bg-white text-[#374151] border border-[#E5E7EB] text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
              Save Draft
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-[#7FB069] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-opacity-90 transition-all">
              Generate Plan
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Patient Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="patient-name">
                    Patient Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                    id="patient-name"
                    type="text"
                    value={patientInfo.name}
                    onChange={(e) => handlePatientInfoChange('name', e.target.value)}
                    placeholder="e.g., Priya Patel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="patient-id">
                    Patient ID
                  </label>
                  <input
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                    id="patient-id"
                    type="text"
                    value={patientInfo.id}
                    onChange={(e) => handlePatientInfoChange('id', e.target.value)}
                    placeholder="e.g., P0123"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Ayurvedic Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dosha">
                    Dosha
                  </label>
                  <select
                    className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                    id="dosha"
                    value={patientInfo.dosha}
                    onChange={(e) => handlePatientInfoChange('dosha', e.target.value)}
                  >
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
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="prakriti">
                    Prakriti
                  </label>
                  <select
                    className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                    id="prakriti"
                    value={patientInfo.prakriti}
                    onChange={(e) => handlePatientInfoChange('prakriti', e.target.value)}
                  >
                    <option value="">Select Prakriti</option>
                    <option>Vata</option>
                    <option>Pitta</option>
                    <option>Kapha</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="vikruti">
                    Vikruti
                  </label>
                  <select
                    className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069]"
                    id="vikruti"
                    value={patientInfo.vikruti}
                    onChange={(e) => handlePatientInfoChange('vikruti', e.target.value)}
                  >
                    <option value="">Select Vikruti</option>
                    <option>Vata</option>
                    <option>Pitta</option>
                    <option>Kapha</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Meal Components</h2>
              <div className="space-y-6">
                {renderMealSection('breakfast', 'Breakfast', meals.breakfast)}
                {renderMealSection('lunch', 'Lunch', meals.lunch)}
                {renderMealSection('dinner', 'Dinner', meals.dinner)}
                {renderMealSection('snacks', 'Snacks', meals.snacks)}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <section className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Plan Notes</h2>
              <textarea
                className="w-full h-40 px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FB069] resize-none"
                placeholder="Add general notes, guidelines, or lifestyle recommendations for the patient..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </section>

            <section className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
              <h2 className="text-xl font-semibold text-[#374151] mb-4">Plan Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-[#7FB069] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-opacity-90 transition-all">
                  Generate & Send to Patient
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-[#374151] border border-[#E5E7EB] text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-all">
                  Save as Template
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-white text-red-600 border border-red-200 hover:bg-red-50 text-sm font-semibold rounded-lg shadow-sm transition-all">
                  Discard Plan
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DietPlanGenerator;
