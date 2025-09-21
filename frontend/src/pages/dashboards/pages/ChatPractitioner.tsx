    import React, { useState } from 'react';

    interface Message {
    id: number;
    sender: 'doctor' | 'user';
    content: string;
    timestamp: string;
    senderName: string;
    avatar: string;
    }

    const ChatPractitioner: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
        id: 1,
        sender: 'doctor',
        content: 'Hello, Sarah! How are you feeling today? Any changes in your symptoms or diet?',
        timestamp: '10:30 AM',
        senderName: 'Dr. Anya Sharma',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
        },
        {
        id: 2,
        sender: 'user',
        content: "Hi Dr. Sharma, I'm feeling a bit better, thank you! My digestion has improved slightly, but I still have some bloating after meals.",
        timestamp: '10:32 AM',
        senderName: 'Sarah',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        }
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
        const newMessage: Message = {
            id: messages.length + 1,
            sender: 'user',
            content: message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            senderName: 'Sarah',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        };
        setMessages([...messages, newMessage]);
        setMessage('');
        }
    };

    return (
        <div className="flex h-screen bg-warm-beige dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
        {/* Sidebar */}
        <aside className="w-80 bg-white dark:bg-gray-800/50 flex flex-col p-8 space-y-10 border-r border-gray-200 dark:border-gray-700">
            {/* Doctor Profile */}
            <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-cover bg-center bg-soft-sage-green/20 flex items-center justify-center">
                <span className="text-soft-sage-green font-bold text-xl">DS</span>
            </div>
            <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-white">Dr. Anya Sharma</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ayurvedic Practitioner</p>
            </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col space-y-3">
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                </svg>
                <span className="font-medium">Dashboard</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                </svg>
                <span className="font-medium">Consultations</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"></path>
                </svg>
                <span className="font-medium">Diet Plans</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-soft-sage-green/20 dark:bg-soft-sage-green/30 text-soft-sage-green font-semibold" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z"></path>
                </svg>
                <span className="font-semibold">Chat</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
                <span className="font-medium">Settings</span>
            </a>
            </nav>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-warm-beige/50 dark:bg-gray-800/80">
            {/* Chat Header */}
            <header className="p-8 border-b border-gray-200/80 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Chat with Dr. Anya Sharma</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Dr. Anya Sharma is currently{' '}
                <span className="text-soft-sage-green font-semibold">online</span>. Feel free to send a message.
            </p>
            </header>

            {/* Messages Area */}
            <div className="flex-1 p-8 overflow-y-auto space-y-8">
            <div className="text-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-warm-beige dark:bg-gray-700/80 px-3 py-1 rounded-full">
                Today
                </span>
            </div>

            {messages.map((msg) => (
                <div
                key={msg.id}
                className={`bg-white/80 dark:bg-gray-700/50 p-6 rounded-xl shadow-sm ${
                    msg.sender === 'user' ? 'bg-soothing-blue/20 dark:bg-soothing-blue/10 ml-auto max-w-2xl' : 'max-w-2xl'
                }`}
                >
                <div className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-soft-sage-green/20 flex items-center justify-center shrink-0">
                    <span className="text-soft-sage-green font-bold">
                        {msg.sender === 'doctor' ? 'DS' : 'U'}
                    </span>
                    </div>
                    <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-xl`}>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {msg.senderName}
                    </span>
                    <div className={`${
                        msg.sender === 'user' 
                        ? 'bg-soothing-blue text-white rounded-lg rounded-br-none' 
                        : 'bg-gray-100 dark:bg-gray-600/50 text-gray-800 dark:text-gray-200 rounded-lg rounded-bl-none'
                    } p-4`}>
                        <p>{msg.content}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {msg.timestamp}
                    </span>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Message Input */}
            <footer className="p-8 border-t border-gray-200/80 dark:border-gray-700/50">
            <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-sage-green/20 flex items-center justify-center shrink-0">
                <span className="text-soft-sage-green font-bold">U</span>
                </div>
                <div className="flex-1 relative">
                <input
                    className="w-full h-14 px-5 pr-32 bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-soft-sage-green focus:border-soft-sage-green placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-200"
                    placeholder="Type a message..."
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 gap-2">
                    <button
                    type="button"
                    className="p-2.5 rounded-full hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-500 dark:text-gray-400 transition-colors"
                    >
                    <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
                    </svg>
                    </button>
                    <button
                    type="button"
                    className="p-2.5 rounded-full hover:bg-soft-sage-green/10 dark:hover:bg-soft-sage-green/20 text-gray-500 dark:text-gray-400 transition-colors"
                    >
                    <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path>
                    </svg>
                    </button>
                </div>
                </div>
                <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-soft-sage-green text-white font-semibold hover:bg-soft-sage-green/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-sage-green"
                >
                Send
                </button>
            </form>
            </footer>
        </main>
        </div>
    );
    };

    export default ChatPractitioner;
