    import React, { useState } from 'react';

    const LogMeal: React.FC = () => {
    const [formData, setFormData] = useState({
        mealType: '',
        datetime: '',
        foodItems: '',
        quantity: '',
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
        console.log('Meal logged:', formData);
    };

    return (
        <div className="flex flex-col min-h-screen bg-warm-beige dark:bg-gray-900 font-display text-gray-800 dark:text-gray-200">
        {/* Header */}
        <header className="bg-warm-beige dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-soft-sage-green" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                </svg>
                <h1 className="text-xl font-bold text-soft-sage-green">AyurBalance</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium hover:text-soft-sage-green transition-colors" href="#">Dashboard</a>
                <a className="text-sm font-medium text-soft-sage-green" href="#">Diet</a>
                <a className="text-sm font-medium hover:text-soft-sage-green transition-colors" href="#">Exercise</a>
                <a className="text-sm font-medium hover:text-soft-sage-green transition-colors" href="#">Mindfulness</a>
                <a className="text-sm font-medium hover:text-soft-sage-green transition-colors" href="#">Community</a>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-sage-green/20 flex items-center justify-center">
                <span className="text-soft-sage-green font-bold">U</span>
                </div>
            </div>
            </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-xl space-y-10">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 tracking-tight">Log Your Meal</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                A mindful meal is a step towards wellness. Let's record it.
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                {/* Meal Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2" htmlFor="mealType">
                    Meal Type
                    </label>
                    <select
                    className="mt-1 block w-full pl-4 pr-10 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-soft-sage-green focus:border-soft-sage-green rounded-lg bg-warm-beige dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200"
                    id="mealType"
                    name="mealType"
                    value={formData.mealType}
                    onChange={handleInputChange}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23757575' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                    }}
                    >
                    <option value="">Select Meal Type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                    </select>
                </div>

                {/* Date & Time */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2" htmlFor="datetime">
                    Date & Time
                    </label>
                    <input
                    className="mt-1 block w-full pl-4 pr-4 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-soft-sage-green focus:border-soft-sage-green rounded-lg bg-warm-beige dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200"
                    id="datetime"
                    name="datetime"
                    type="datetime-local"
                    value={formData.datetime}
                    onChange={handleInputChange}
                    />
                </div>

                {/* Food Items */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2" htmlFor="foodItems">
                    Food Items Consumed
                    </label>
                    <input
                    className="mt-1 block w-full pl-4 pr-4 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-soft-sage-green focus:border-soft-sage-green rounded-lg bg-warm-beige dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200"
                    id="foodItems"
                    name="foodItems"
                    placeholder="e.g., Kitchari, Turmeric Milk"
                    type="text"
                    value={formData.foodItems}
                    onChange={handleInputChange}
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2" htmlFor="quantity">
                    Quantity
                    </label>
                    <input
                    className="mt-1 block w-full pl-4 pr-4 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-soft-sage-green focus:border-soft-sage-green rounded-lg bg-warm-beige dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-gray-200"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 1 bowl, 2 slices"
                    type="text"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2" htmlFor="notes">
                    Notes/Observations
                    </label>
                    <textarea
                    className="mt-1 block w-full pl-4 pr-4 py-3 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-soft-sage-green focus:border-soft-sage-green rounded-lg bg-warm-beige dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 resize-none text-gray-800 dark:text-gray-200"
                    id="notes"
                    name="notes"
                    placeholder="How did this meal make you feel?"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-soft-sage-green hover:bg-soft-sage-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-warm-beige dark:focus:ring-offset-gray-900 focus:ring-soft-sage-green transition-all"
                    type="submit"
                    >
                    Log Meal
                    </button>
                </div>
                </form>
            </div>
            </div>
        </main>
        </div>
    );
    };

    export default LogMeal;
