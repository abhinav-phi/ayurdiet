    import React, { useState } from 'react';

    const TrackSymptoms: React.FC = () => {
    const [formData, setFormData] = useState({
        symptom: '',
        datetime: '',
        severity: '',
        notes: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Symptom tracked:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex flex-col min-h-screen bg-warm-beige dark:bg-gray-900 font-sans text-gray-700 dark:text-gray-300">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-warm-beige/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-300 dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-soft-sage-green">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">AyurTrack</h1>
                </div>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                <a className="text-base font-medium text-soft-sage-green border-b-2 border-soft-sage-green pb-1" href="#">Symptoms</a>
                <a className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-soft-sage-green transition-colors" href="#">Diet</a>
                <a className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-soft-sage-green transition-colors" href="#">Lifestyle</a>
                <a className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-soft-sage-green transition-colors" href="#">Reports</a>
                </nav>
                <div className="flex items-center gap-4">
                <button className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-soothing-blue/20 dark:hover:bg-soothing-blue/30 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                </button>
                <div className="w-12 h-12 rounded-full bg-soothing-blue/20 border-2 border-soothing-blue flex items-center justify-center">
                    <span className="text-soft-sage-green font-bold">U</span>
                </div>
                </div>
            </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-2xl mx-auto">
            <div className="bg-white/50 dark:bg-gray-800/50 p-8 sm:p-10 rounded-xl shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">How are you feeling today?</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Log your symptoms to track your wellness journey.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                {/* Symptom Selection */}
                <div>
                    <label className="block text-base font-medium mb-3 text-gray-800 dark:text-gray-200" htmlFor="symptom">
                    Symptom
                    </label>
                    <select
                    className="w-full py-3 px-4 rounded-lg bg-warm-beige/50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-soft-sage-green/50 focus:border-soft-sage-green transition text-base text-gray-800 dark:text-gray-200"
                    id="symptom"
                    name="symptom"
                    value={formData.symptom}
                    onChange={handleInputChange}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                    }}
                    >
                    <option value="">Select a symptom...</option>
                    <option value="headache">Headache</option>
                    <option value="fatigue">Fatigue</option>
                    <option value="bloating">Bloating</option>
                    <option value="skin-rash">Skin Rash</option>
                    <option value="indigestion">Indigestion</option>
                    <option value="anxiety">Anxiety</option>
                    <option value="insomnia">Insomnia</option>
                    <option value="joint-pain">Joint Pain</option>
                    </select>
                </div>

                {/* Date & Time */}
                <div>
                    <label className="block text-base font-medium mb-3 text-gray-800 dark:text-gray-200" htmlFor="datetime">
                    Date & Time
                    </label>
                    <input
                    className="w-full py-3 px-4 rounded-lg bg-warm-beige/50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-soft-sage-green/50 focus:border-soft-sage-green transition text-base text-gray-800 dark:text-gray-200"
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    value={formData.datetime}
                    onChange={handleInputChange}
                    />
                </div>

                {/* Severity Level */}
                <div>
                    <label className="block text-base font-medium mb-3 text-gray-800 dark:text-gray-200" htmlFor="severity">
                    Severity Level
                    </label>
                    <select
                    className="w-full py-3 px-4 rounded-lg bg-warm-beige/50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-soft-sage-green/50 focus:border-soft-sage-green transition text-base text-gray-800 dark:text-gray-200"
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleInputChange}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                    }}
                    >
                    <option value="">Select severity...</option>
                    <option value="mild">Mild (1-3)</option>
                    <option value="moderate">Moderate (4-6)</option>
                    <option value="severe">Severe (7-10)</option>
                    </select>
                </div>

                {/* Notes/Context */}
                <div>
                    <label className="block text-base font-medium mb-3 text-gray-800 dark:text-gray-200" htmlFor="notes">
                    Notes/Context
                    </label>
                    <textarea
                    className="w-full py-3 px-4 rounded-lg bg-warm-beige/50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-soft-sage-green/50 focus:border-soft-sage-green transition placeholder-gray-500 dark:placeholder-gray-400 text-base text-gray-800 dark:text-gray-200"
                    id="notes"
                    name="notes"
                    placeholder="e.g., Occurred after eating spicy food, felt better after a walk..."
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                    <button
                    className="w-full bg-soft-sage-green text-white font-bold py-4 px-4 rounded-lg hover:bg-soft-sage-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-warm-beige dark:focus:ring-offset-gray-900 focus:ring-soft-sage-green transition-colors text-lg"
                    type="submit"
                    >
                    Track Symptom
                    </button>
                </div>
                </form>
            </div>
            </div>
        </main>
        </div>
    );
    };

    export default TrackSymptoms;
