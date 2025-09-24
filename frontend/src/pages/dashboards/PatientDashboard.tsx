import React, { useState } from 'react';
import { 
  Home, Calendar, TrendingUp, MessageCircle, User, 
  CheckCircle2, Clock, Target, Heart, Apple, 
  Phone, Video, Bell, Settings, LogOut, Trophy,
  Star, Flower, X
} from 'lucide-react';

const LogMeal = () => {
  const [formData, setFormData] = useState({
    mealType: '',
    datetime: '',
    foodItems: '',
    quantity: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meal logged:', formData);
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Log Your Meal</h2>
        <p className="text-gray-600">A mindful meal is a step towards wellness. Let's record it.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Meal Type</label>
          <select name="mealType" value={formData.mealType} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]">
            <option value="">Select Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
          <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Food Items Consumed</label>
          <input type="text" name="foodItems" placeholder="e.g., Kitchari, Turmeric Milk" value={formData.foodItems} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input type="text" name="quantity" placeholder="e.g., 1 bowl, 2 slices" value={formData.quantity} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes/Observations</label>
          <textarea name="notes" placeholder="How did this meal make you feel?" value={formData.notes} onChange={handleInputChange} rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069] resize-none"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-[#7FB069] text-white py-3 rounded-lg font-semibold hover:bg-[#6ea055] transition-colors">
          Log Meal
        </button>
      </form>
    </div>
  );
};

const TrackSymptoms = () => {
  const [formData, setFormData] = useState({
    symptom: '',
    datetime: '',
    severity: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Symptom tracked:', formData);
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">How are you feeling today?</h2>
        <p className="text-gray-600">Log your symptoms to track your wellness journey.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Symptom</label>
          <select name="symptom" value={formData.symptom} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]">
            <option value="">Select a symptom...</option>
            <option value="headache">Headache</option>
            <option value="fatigue">Fatigue</option>
            <option value="bloating">Bloating</option>
            <option value="skin-rash">Skin Rash</option>
            <option value="indigestion">Indigestion</option>
            <option value="anxiety">Anxiety</option>
            <option value="insomnia">Insomnia</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
          <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Severity Level</label>
          <select name="severity" value={formData.severity} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]">
            <option value="">Select severity...</option>
            <option value="mild">Mild (1-3)</option>
            <option value="moderate">Moderate (4-6)</option>
            <option value="severe">Severe (7-10)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Notes/Context</label>
          <textarea name="notes" placeholder="e.g., Occurred after eating spicy food, felt better after a walk..." value={formData.notes} onChange={handleInputChange} rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069] resize-none"></textarea>
        </div>
        
        <button type="submit" className="w-full bg-[#7FB069] text-white py-3 rounded-lg font-semibold hover:bg-[#6ea055] transition-colors">
          Track Symptom
        </button>
      </form>
    </div>
  );
};

const JournalEntry = () => {
  const [formData, setFormData] = useState({
    title: '',
    entry: '',
    date: '',
    time: '',
    mood: '',
    energy: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Journal entry saved:', formData);
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">New Journal Entry</h2>
        <p className="text-gray-600">Capture your state of mind and body.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title <span className="text-gray-500">(Optional)</span></label>
          <input type="text" name="title" placeholder="e.g., Morning reflections" value={formData.title} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">How are you feeling today?</label>
          <textarea name="entry" placeholder="Describe your physical and mental sensations, energy levels, and any notable observations..." value={formData.entry} onChange={handleInputChange} rows="8" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069] resize-none"></textarea>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input type="time" name="time" value={formData.time} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]" />
          </div>
        </div>
        
        <button type="submit" className="w-full bg-[#7FB069] text-white py-3 rounded-lg font-semibold hover:bg-[#6ea055] transition-colors">
          Save Entry
        </button>
      </form>
    </div>
  );
};

const ChatPractitioner = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      content: 'Hello! How are you feeling today? Any changes in your symptoms or diet?',
      timestamp: '10:30 AM',
      senderName: 'Dr. Anya Sharma',
      type: 'text'
    },
    {
      id: 2,
      sender: 'user',
      content: "Hi Dr. Sharma, I'm feeling a bit better, thank you! My digestion has improved slightly, but I still have some bloating after meals.",
      timestamp: '10:32 AM',
      senderName: 'You',
      type: 'text'
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderName: 'You',
        type: 'text'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      
      const chunks = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const sendVoiceMessage = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: audioUrl,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderName: 'You',
        type: 'audio'
      };
      setMessages([...messages, newMessage]);
      setAudioBlob(null);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size should be less than 10MB');
        return;
      }

      const fileUrl = URL.createObjectURL(file);
      let messageType = 'file';
      
      if (file.type.startsWith('image/')) {
        messageType = 'image';
      } else if (file.type.startsWith('video/')) {
        messageType = 'video';
      } else if (file.type === 'application/pdf') {
        messageType = 'pdf';
      }

      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: fileUrl,
        fileName: file.name,
        fileSize: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderName: 'You',
        type: messageType
      };
      setMessages([...messages, newMessage]);
      
      event.target.value = '';
    }
  };

  const renderMessageContent = (msg) => {
    switch (msg.type) {
      case 'audio':
        return (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <audio controls className="max-w-xs">
              <source src={msg.content} type="audio/wav" />
              Your browser does not support audio playback.
            </audio>
          </div>
        );
      
      case 'image':
        return (
          <div>
            <img 
              src={msg.content} 
              alt={msg.fileName} 
              className="max-w-xs max-h-48 rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => window.open(msg.content, '_blank')}
            />
            <p className="text-xs mt-1 opacity-70">{msg.fileName}</p>
          </div>
        );
      
      case 'video':
        return (
          <div>
            <video 
              controls 
              className="max-w-xs max-h-48 rounded-lg"
              preload="metadata"
            >
              <source src={msg.content} />
              Your browser does not support video playback.
            </video>
            <p className="text-xs mt-1 opacity-70">{msg.fileName}</p>
          </div>
        );
      
      case 'pdf':
      case 'file':
        return (
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg max-w-xs">
            <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{msg.fileName}</p>
              <p className="text-xs text-gray-500">{msg.fileSize}</p>
            </div>
            <button
              onClick={() => window.open(msg.content, '_blank')}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Open
            </button>
          </div>
        );
      
      default:
        return <p>{msg.content}</p>;
    }
  };

  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Chat with Dr. Anya Sharma</h2>
        <p className="text-gray-600">Dr. Anya Sharma is currently <span className="text-[#7FB069] font-semibold">online</span>. Feel free to send a message.</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              msg.sender === 'user' 
                ? 'bg-[#7FB069] text-white' 
                : 'bg-white text-gray-800 border border-gray-200'
            }`}>
              <p className="text-sm font-semibold mb-1">{msg.senderName}</p>
              {renderMessageContent(msg)}
              <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      
      {audioBlob && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-green-700">Voice message recorded</span>
            <audio controls className="h-8">
              <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
            </audio>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setAudioBlob(null)}
              className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
            >
              Cancel
            </button>
            <button
              onClick={sendVoiceMessage}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSendMessage} className="flex gap-2 items-end">
        <div className="flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7FB069] focus:border-[#7FB069]"
          />
        </div>
        
        <div className="relative">
          <input
            type="file"
            id="file-upload"
            onChange={handleFileUpload}
            accept="image/*,video/*,.pdf,.doc,.docx,.txt"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button
            type="button"
            className="p-3 text-gray-500 hover:text-[#7FB069] hover:bg-gray-100 rounded-lg transition-colors"
            title="Upload file"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
        </div>
        
        <button
          type="button"
          onClick={isRecording ? stopRecording : startRecording}
          className={`p-3 rounded-lg transition-colors ${
            isRecording 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'text-gray-500 hover:text-[#7FB069] hover:bg-gray-100'
          }`}
          title={isRecording ? "Stop recording" : "Start voice recording"}
        >
          {isRecording ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a2 2 0 114 0v4a2 2 0 11-4 0V7z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        <button
          type="submit"
          disabled={!message.trim()}
          className="px-6 py-3 bg-[#7FB069] text-white rounded-lg font-semibold hover:bg-[#6ea055] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
      
      {isRecording && (
        <div className="mt-2 flex items-center justify-center gap-2 text-red-500">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm">Recording... Click microphone to stop</span>
        </div>
      )}
    </div>
  );
};


const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeModal, setActiveModal] = useState(null);

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'education', label: 'Education', icon: Apple },
    { id: 'privacy', label: 'Privacy', icon: Settings },
    { id: 'support', label: 'Support', icon: User }
  ];

  const todayMeals = [
    {
      name: 'Oatmeal with Berries',
      image: '/assets/breakfast.webp',
      completed: true,
      meal: 'Breakfast'
    },
    {
      name: 'Quinoa Salad with Avocado',
      image: '/assets/lunch.jpg',
      completed: false,
      meal: 'Lunch'
    },
    {
      name: 'Lentil Soup with Vegetables',
      image: '/assets/dinner.jpg',
      completed: false,
      meal: 'Dinner'
    }
  ];

  const handleLogMeal = () => setActiveModal('logmeal');
  const handleTrackSymptoms = () => setActiveModal('symptoms');
  const handleJournalEntry = () => setActiveModal('journal');
  const handleChatPractitioner = () => setActiveModal('chat');
  const closeModal = () => setActiveModal(null);

  const renderHome = () => (
    <div className="grid grid-cols-3 grid-rows-[auto_1fr_1fr] gap-8 h-full">
      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">Welcome back, User</h1>
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
          <button 
            onClick={handleLogMeal}
            className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#7FB069] text-white font-semibold hover:bg-[#6ea055] transition-colors"
          >
            <Apple className="w-4 h-4" />
            Log Meal
          </button>
          <button 
            onClick={handleTrackSymptoms}
            className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors"
          >
            <TrendingUp className="w-4 h-4" />
            Track Symptoms
          </button>
          <button 
            onClick={handleJournalEntry}
            className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Journal Entry
          </button>
          <button 
            onClick={handleChatPractitioner}
            className="flex items-center justify-center gap-2 rounded-lg py-2 bg-[#F5F5DC] hover:bg-[#98D8C8] font-semibold text-stone-700 transition-colors"
          >
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

  const renderModal = () => {
    if (!activeModal) return null;

    let ModalComponent;
    let title;

    switch (activeModal) {
      case 'logmeal':
        ModalComponent = LogMeal;
        title = 'Log Meal';
        break;
      case 'symptoms':
        ModalComponent = TrackSymptoms;
        title = 'Track Symptoms';
        break;
      case 'journal':
        ModalComponent = JournalEntry;
        title = 'Journal Entry';
        break;
      case 'chat':
        ModalComponent = ChatPractitioner;
        title = 'Chat with Practitioner';
        break;
      default:
        return null;
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#F5F5DC]">
            <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
            <button
              onClick={closeModal}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-stone-600" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <ModalComponent />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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

      {renderModal()}
    </>
  );
};

export default PatientDashboard;
