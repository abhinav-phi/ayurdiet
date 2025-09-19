import React, { useState } from 'react';
import { 
  Home, Users, FileText, Database, BarChart3, 
  Calendar, CreditCard, Settings, Plus, Search,
  Bell, User, LogOut, TrendingUp, Target,
  MessageCircle, Video, CheckCircle, AlertCircle
} from 'lucide-react';

const DieticianDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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

  const todayAppointments = [
    { time: '10:00 AM', patient: 'Priya Patel', type: 'Follow-up', duration: '30 min' },
    { time: '11:30 AM', patient: 'New Patient', type: 'Initial Consultation', duration: '60 min' },
    { time: '2:00 PM', patient: 'Arjun Singh', type: 'Diet Review', duration: '30 min' },
    { time: '3:30 PM', patient: 'Meera Iyer', type: 'Progress Check', duration: '30 min' }
  ];

  const foodDatabase = [
    { name: 'Quinoa', dosha: 'Tridoshic', properties: 'Light, Dry', category: 'Grain' },
    { name: 'Spinach', dosha: 'Pitta Pacifying', properties: 'Cooling, Light', category: 'Vegetable' },
    { name: 'Almonds', dosha: 'Vata Pacifying', properties: 'Nourishing, Heavy', category: 'Nut' },
    { name: 'Ghee', dosha: 'Tridoshic', properties: 'Nourishing, Oily', category: 'Dairy' },
    { name: 'Mango', dosha: 'Pitta Pacifying', properties: 'Sweet, Cooling', category: 'Fruit' }
  ];

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
              onClick={() => window.location.href = '/dietician/diet-plan-generator'}
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

          <div className="bg-white p-6 rounded-lg border border-stone-300 shadow-lg">
            <h3 className="text-lg font-semibold text-stone-800">Dosha Balance Trends</h3>
            <p className="text-3xl font-bold text-stone-800">
              Balanced <span className="text-sm font-medium text-[#A0522D]">-2%</span>
            </p>
            <p className="text-sm text-stone-600">Last 6 Months</p>
            <div className="mt-4 h-40 flex items-end gap-4">
              <div className="flex-1 text-center">
                <div className="bg-[#98D8C8] rounded-t-md mx-auto" style={{ height: '90%', width: '50%' }}></div>
                <p className="text-sm font-medium text-stone-600 mt-2">Vata</p>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-[#98D8C8] rounded-t-md mx-auto" style={{ height: '20%', width: '50%' }}></div>
                <p className="text-sm font-medium text-stone-600 mt-2">Pitta</p>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-[#98D8C8] rounded-t-md mx-auto" style={{ height: '100%', width: '50%' }}></div>
                <p className="text-sm font-medium text-stone-600 mt-2">Kapha</p>
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
                {foodDatabase.map((food, index) => (
                  <tr key={index} className="bg-white border-b border-stone-300">
                    <td className="px-6 py-4 font-medium text-stone-800 whitespace-nowrap">
                      {food.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-[#98D8C8] text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {food.dosha}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-stone-600">{food.properties}</td>
                    <td className="px-6 py-4 text-stone-600">{food.category}</td>
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
              <button className="p-1 rounded-full hover:bg-gray-100">
                <span className="text-xl">‹</span>
              </button>
              <h4 className="font-semibold text-lg">July 2024</h4>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <span className="text-xl">›</span>
              </button>
            </div>
            <div className="grid grid-cols-7 text-center text-sm">
              <div className="font-semibold text-gray-500">S</div>
              <div className="font-semibold text-gray-500">M</div>
              <div className="font-semibold text-gray-500">T</div>
              <div className="font-semibold text-gray-500">W</div>
              <div className="font-semibold text-gray-500">T</div>
              <div className="font-semibold text-gray-500">F</div>
              <div className="font-semibold text-gray-500">S</div>
              <div className="col-start-4">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div className="bg-[#7FB069] text-white font-bold rounded-full w-8 h-8 mx-auto flex items-center justify-center">5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
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
                        onClick={() => window.location.href = '/dietician/diet-plan-generator'}
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
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'patients': return renderPatients();
      case 'diet-plans': return <div className="text-center py-20 text-stone-600">Diet Plans module coming soon...</div>;
      case 'food-db': return <div className="text-center py-20 text-stone-600">Food Database module coming soon...</div>;
      case 'analytics': return <div className="text-center py-20 text-stone-600">Analytics module coming soon...</div>;
      case 'appointments': return <div className="text-center py-20 text-stone-600">Appointments module coming soon...</div>;
      case 'billing': return <div className="text-center py-20 text-stone-600">Billing module coming soon...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex">
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
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-semibold ${
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
