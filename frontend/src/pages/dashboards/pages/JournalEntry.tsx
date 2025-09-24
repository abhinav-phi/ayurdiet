    import React, { useState } from 'react';

    const JournalEntry: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        entry: '',
        date: '',
        time: '',
        mood: '',
        energy: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Journal entry saved:', formData);
    };

    return (
        <div className="flex flex-col min-h-screen bg-warm-beige font-sans text-gray-800">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-warm-beige/90 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between border-b border-soft-sage-green/20">
                <div className="flex items-center gap-3">
                <div className="text-soft-sage-green">
                    <svg className="h-8 w-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                    <path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c.34 0 .68-.02 1-.06-.57-1.12-1-2.5-1-4.44 0-3.32 2.68-6 6-6 1.94 0 3.32.43 4.44 1 .04-.32.06-.66.06-1 0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">AyurVeda</h1>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                <a className="text-gray-600 hover:text-soft-sage-green transition-colors" href="#">Dashboard</a>
                <a className="text-soft-sage-green border-b-2 border-soft-sage-green pb-1" href="#">Journal</a>
                <a className="text-gray-600 hover:text-soft-sage-green transition-colors" href="#">Diet Plan</a>
                <a className="text-gray-600 hover:text-soft-sage-green transition-colors" href="#">Consult</a>
                </nav>
                <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 hover:bg-soft-sage-green/10 transition-colors text-gray-600 hover:text-soft-sage-green">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </button>
                <div className="h-12 w-12 rounded-full bg-soft-sage-green/20 border-2 border-soft-sage-green/50 flex items-center justify-center">
                    <span className="text-soft-sage-green font-bold">U</span>
                </div>
                </div>
            </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg">
                <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800">New Journal Entry</h2>
                <p className="mt-4 text-lg text-gray-600">Capture your state of mind and body.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                {/* Title */}
                <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="title">
                    Title <span className="text-gray-500">(Optional)</span>
                    </label>
                    <input
                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 placeholder-gray-500 text-base border"
                    id="title"
                    name="title"
                    placeholder="e.g., Morning reflections"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    />
                </div>

                {/* Main Entry */}
                <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="entry">
                    How are you feeling today?
                    </label>
                    <textarea
                    className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 placeholder-gray-500 text-base border"
                    id="entry"
                    name="entry"
                    placeholder="Describe your physical and mental sensations, energy levels, and any notable observations..."
                    rows={10}
                    value={formData.entry}
                    onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Date and Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 placeholder-gray-500 text-base border"
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="time">
                        Time
                    </label>
                    <input
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 placeholder-gray-500 text-base border"
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                    />
                    </div>
                </div>

                {/* Mood and Energy Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="mood">
                        Mood
                    </label>
                    <select
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 text-base border"
                        id="mood"
                        name="mood"
                        value={formData.mood}
                        onChange={handleInputChange}
                        style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                        }}
                    >
                        <option value="">Select mood...</option>
                        <option value="joyful">Joyful</option>
                        <option value="calm">Calm</option>
                        <option value="neutral">Neutral</option>
                        <option value="anxious">Anxious</option>
                        <option value="sad">Sad</option>
                        <option value="irritated">Irritated</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-base font-medium text-gray-800 mb-2" htmlFor="energy">
                        Energy Level
                    </label>
                    <select
                        className="w-full px-4 py-3 rounded-xl border-gray-200 bg-warm-beige/50 focus:border-soft-sage-green focus:ring-soft-sage-green/50 focus:ring-2 text-base border"
                        id="energy"
                        name="energy"
                        value={formData.energy}
                        onChange={handleInputChange}
                        style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                        }}
                    >
                        <option value="">Select energy level...</option>
                        <option value="high">High Energy</option>
                        <option value="moderate">Moderate Energy</option>
                        <option value="low">Low Energy</option>
                        <option value="depleted">Depleted</option>
                    </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-6">
                    <button
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl shadow-md text-white bg-soft-sage-green hover:bg-soft-sage-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-soft-sage-green transition-all duration-300"
                    type="submit"
                    >
                    Save Entry
                    </button>
                </div>
                </form>
            </div>
            </div>
        </main>
        </div>
    );
    };

    export default JournalEntry;
