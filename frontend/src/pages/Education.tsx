    import React, { useState } from 'react';
    import { ArrowRight, BookOpen, Brain, Leaf, Sun, Snowflake, Cloud, Flower2, ChevronLeft, ChevronRight } from 'lucide-react';

    const Education = () => {
    const [activeTab, setActiveTab] = useState('dosha');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState<{[key: number]: string}>({});
    const [showResults, setShowResults] = useState(false);
    const [doshaScores, setDoshaScores] = useState({ vata: 0, pitta: 0, kapha: 0 });

    const tabs = [
        { id: 'dosha', name: 'Dosha Explorer', active: activeTab === 'dosha' },
        { id: 'prakriti', name: 'Prakriti Assessment', active: activeTab === 'prakriti' },
        { id: 'food', name: 'Food Guide', active: activeTab === 'food' },
        { id: 'ritucharya', name: 'Ritucharya', active: activeTab === 'ritucharya' }
    ];

    const questions = [
        {
        id: 1,
        text: 'How would you describe your body frame?',
        options: [
            { value: 'vata', title: 'Slender & Light', description: 'Slender, light, and agile' },
            { value: 'pitta', title: 'Medium & Muscular', description: 'Medium, muscular, well-built' },
            { value: 'kapha', title: 'Broad & Sturdy', description: 'Broad, heavy, sturdy' }
        ]
        },
        {
        id: 2,
        text: 'What is your skin type?',
        options: [
            { value: 'vata', title: 'Dry & Rough', description: 'Dry, rough, cold' },
            { value: 'pitta', title: 'Warm & Sensitive', description: 'Warm, sensitive, prone to acne' },
            { value: 'kapha', title: 'Soft & Oily', description: 'Soft, oily, smooth' }
        ]
        },
        {
        id: 3,
        text: 'How is your appetite?',
        options: [
            { value: 'vata', title: 'Irregular', description: 'Irregular, sometimes low' },
            { value: 'pitta', title: 'Strong', description: 'Strong, can eat a lot' },
            { value: 'kapha', title: 'Moderate', description: 'Moderate, slow digestion' }
        ]
        },
        {
        id: 4,
        text: 'How well do you sleep?',
        options: [
            { value: 'vata', title: 'Light Sleep', description: 'Light, easily disturbed' },
            { value: 'pitta', title: 'Moderate Sleep', description: 'Moderate, sound sleep but sometimes restless' },
            { value: 'kapha', title: 'Deep Sleep', description: 'Heavy, long and deep sleep' }
        ]
        },
        {
        id: 5,
        text: 'How would you describe your energy?',
        options: [
            { value: 'vata', title: 'Quick Bursts', description: 'Quick bursts, tire easily' },
            { value: 'pitta', title: 'Steady & Intense', description: 'Steady, intense' },
            { value: 'kapha', title: 'Slow & Enduring', description: 'Slow but enduring' }
        ]
        },
        {
        id: 6,
        text: 'What is the type of your hair?',
        options: [
            { value: 'vata', title: 'Dry Hair', description: 'Dry with split ends' },
            { value: 'pitta', title: 'Normal Hair', description: 'Normal, thin, more hairfall' },
            { value: 'kapha', title: 'Greasy Hair', description: 'Greasy, heavy' }
        ]
        },
        {
        id: 7,
        text: 'How do you handle stress?',
        options: [
            { value: 'vata', title: 'Worry & Anxiety', description: 'Worry, anxious, restless' },
            { value: 'pitta', title: 'Irritability', description: 'Irritable, frustrated easily' },
            { value: 'kapha', title: 'Calm & Resistant', description: 'Slow to react, calm, but may resist change' }
        ]
        },
        {
        id: 8,
        text: 'How does your body respond to diet?',
        options: [
            { value: 'vata', title: 'Hard to Gain Weight', description: 'Hard to gain weight' },
            { value: 'pitta', title: 'Balanced Weight', description: 'Gains or loses weight easily' },
            { value: 'kapha', title: 'Easy Weight Gain', description: 'Gains weight easily, slow metabolism' }
        ]
        },
        {
        id: 9,
        text: 'How would you describe your grasping power?',
        options: [
            { value: 'vata', title: 'Quick but Forgetful', description: 'Grasps quickly but not completely and forgets quickly' },
            { value: 'pitta', title: 'Quick & Complete', description: 'Grasps quickly completely and have good memory' },
            { value: 'kapha', title: 'Slow but Retentive', description: 'Grasps late but retains for long time' }
        ]
        },
        {
        id: 10,
        text: 'How would you describe your personality?',
        options: [
            { value: 'vata', title: 'Active & Lively', description: 'Active, lively, quick' },
            { value: 'pitta', title: 'Ambitious & Determined', description: 'Ambitious, determined, sharp' },
            { value: 'kapha', title: 'Calm & Patient', description: 'Calm, patient, steady' }
        ]
        },
        {
        id: 11,
        text: 'How do you describe your nails?',
        options: [
            { value: 'vata', title: 'Thin & Brittle', description: 'Thin, brittle' },
            { value: 'pitta', title: 'Soft & Splitting', description: 'Soft, prone to splitting' },
            { value: 'kapha', title: 'Thick & Strong', description: 'Thick, strong' }
        ]
        },
        {
        id: 12,
        text: 'How are your teeth?',
        options: [
            { value: 'vata', title: 'Small & Irregular', description: 'Small and irregular' },
            { value: 'pitta', title: 'Strong & Sharp', description: 'Strong and sharp' },
            { value: 'kapha', title: 'Large & Broad', description: 'Large and broad' }
        ]
        },
        {
        id: 13,
        text: 'What is your voice like?',
        options: [
            { value: 'vata', title: 'High-pitched & Fast', description: 'High-pitched and fast' },
            { value: 'pitta', title: 'Clear & Strong', description: 'Clear and strong' },
            { value: 'kapha', title: 'Deep & Slow', description: 'Deep and slow' }
        ]
        },
        {
        id: 14,
        text: 'How often do you sweat?',
        options: [
            { value: 'vata', title: 'Rarely', description: 'Rarely' },
            { value: 'pitta', title: 'Frequently', description: 'Frequently' },
            { value: 'kapha', title: 'Moderately', description: 'Moderately' }
        ]
        },
        {
        id: 15,
        text: 'What kind of foods do you crave most?',
        options: [
            { value: 'vata', title: 'Unpredictable', description: 'Unpredictable cravings' },
            { value: 'pitta', title: 'Spicy & Sour', description: 'Spicy and sour' },
            { value: 'kapha', title: 'Sweet & Heavy', description: 'Sweet and heavy' }
        ]
        },
        {
        id: 16,
        text: 'How is your motivation for tasks?',
        options: [
            { value: 'vata', title: 'Easily Distracted', description: 'Easily distracted' },
            { value: 'pitta', title: 'Driven & Goal-oriented', description: 'Driven and goal-oriented' },
            { value: 'kapha', title: 'Calm & Steady', description: 'Calm and steady' }
        ]
        },
        {
        id: 17,
        text: 'How would you describe your eating habits?',
        options: [
            { value: 'vata', title: 'Eats Quickly', description: 'Eats quickly without chewing properly' },
            { value: 'pitta', title: 'Moderate Speed', description: 'Eats at moderate speed' },
            { value: 'kapha', title: 'Chews Properly', description: 'Chews food properly' }
        ]
        },
        {
        id: 18,
        text: 'How do you usually make decisions?',
        options: [
            { value: 'vata', title: 'Quick but Changeable', description: 'Quickly, but often change my mind' },
            { value: 'pitta', title: 'Quick & Firm', description: 'Quickly, and I stick to them' },
            { value: 'kapha', title: 'Slow & Thoughtful', description: 'Slowly, after thinking carefully' }
        ]
        },
        {
        id: 19,
        text: 'Which weather do you enjoy the most?',
        options: [
            { value: 'vata', title: 'Cool & Breezy', description: 'Cool and breezy' },
            { value: 'pitta', title: 'Warm & Sunny', description: 'Warm and sunny' },
            { value: 'kapha', title: 'Mild & Stable', description: 'Mild and stable' }
        ]
        },
        {
        id: 20,
        text: 'How do you feel in social gatherings?',
        options: [
            { value: 'vata', title: 'Excited but Tire', description: 'Excited but get tired quickly' },
            { value: 'pitta', title: 'Confident & Outgoing', description: 'Confident and outgoing' },
            { value: 'kapha', title: 'Comfortable with Close Friends', description: 'Comfortable with close friends, reserved in large groups' }
        ]
        }
    ];

    const totalQuestions = questions.length;

    const doshas = [
        {
        name: 'Vata',
        color: 'soothing-blue',
        bgColor: 'bg-[#98D8C8]',
        textColor: 'text-[#98D8C8]',
        description: 'The energy of movement, associated with air and ether. Vata governs breathing, circulation, and nervous system functions. When balanced, Vata brings creativity and flexibility. When imbalanced, it can lead to anxiety and restlessness.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=320&fit=crop'
        },
        {
        name: 'Pitta',
        color: 'sage-green',
        bgColor: 'bg-[#7FB069]',
        textColor: 'text-[#7FB069]',
        description: 'The energy of transformation, associated with fire and water. Pitta governs digestion, metabolism, and body temperature. Balanced Pitta brings intelligence and ambition. Imbalanced Pitta can manifest as irritability and inflammation.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=320&fit=crop'
        },
        {
        name: 'Kapha',
        color: 'earthy-accent',
        bgColor: 'bg-[#A0522D]',
        textColor: 'text-[#A0522D]',
        description: 'The energy of structure and stability, associated with earth and water. Kapha governs lubrication, immunity, and tissue growth. Balanced Kapha brings calmness and strength. Imbalanced Kapha can lead to lethargy and congestion.',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=320&fit=crop'
        }
    ];

    const tastes = [
        { name: 'Sweet', description: 'Nourishing & grounding', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=128&h=128&fit=crop' },
        { name: 'Sour', description: 'Stimulating & hydrating', image: 'https://images.unsplash.com/photo-1571971420935-4221b6a9d888?w=128&h=128&fit=crop' },
        { name: 'Salty', description: 'Moisturizing & grounding', image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=128&h=128&fit=crop' },
        { name: 'Pungent', description: 'Light & warming', image: 'https://images.unsplash.com/photo-1563485881245-8f442da5a007?w=128&h=128&fit=crop' },
        { name: 'Bitter', description: 'Cleansing & cooling', image: 'https://images.unsplash.com/photo-1618628447993-7ad02e4b6b08?w=128&h=128&fit=crop' },
        { name: 'Astringent', description: 'Drying & toning', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=128&h=128&fit=crop' }
    ];

    const seasons = [
        { name: 'Summer', description: 'Focus on cooling and hydrating foods to balance the heat. Favor sweet, bitter, and astringent tastes.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=160&fit=crop', icon: Sun },
        { name: 'Autumn', description: 'Transition to grounding and warming foods. Emphasize sweet, sour, and salty tastes.', image: 'https://images.unsplash.com/photo-1505052444928-4b3d0b6b5d5d?w=200&h=160&fit=crop', icon: Leaf },
        { name: 'Winter', description: 'Nourish with warming foods to combat the cold. Favor sweet, sour, and salty tastes.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=160&fit=crop', icon: Snowflake },
        { name: 'Spring', description: 'Detoxify with lighter foods. Emphasize pungent, bitter, and astringent tastes.', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=160&fit=crop', icon: Flower2 }
    ];

    const handleAnswerSelect = (value: string) => {
        setAnswers(prev => ({
        ...prev,
        [currentQuestion]: value
        }));
    };

    const calculateResults = () => {
        const scores = { vata: 0, pitta: 0, kapha: 0 };
        
        Object.values(answers).forEach((answer) => {
        if (answer === 'vata') scores.vata++;
        else if (answer === 'pitta') scores.pitta++;
        else if (answer === 'kapha') scores.kapha++;
        });

        setDoshaScores(scores);
        setShowResults(true);
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
        } else {
        calculateResults();
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 1) {
        setCurrentQuestion(currentQuestion - 1);
        }
    };

    const resetAssessment = () => {
        setCurrentQuestion(1);
        setAnswers({});
        setShowResults(false);
        setDoshaScores({ vata: 0, pitta: 0, kapha: 0 });
    };

    const getCurrentQuestion = () => {
        return questions.find(q => q.id === currentQuestion);
    };

    const getDominantDosha = () => {
        const { vata, pitta, kapha } = doshaScores;
        if (vata >= pitta && vata >= kapha) return 'Vata';
        if (pitta >= vata && pitta >= kapha) return 'Pitta';
        return 'Kapha';
    };

    const getPercentage = (score: number) => {
        return Math.round((score / totalQuestions) * 100);
    };

    const renderTabContent = () => {
        switch (activeTab) {
        case 'dosha':
            return (
            <section className="mt-12">
                <h2 className="text-[#1a202c] tracking-tight text-4xl font-bold leading-tight text-center">Understanding Your Doshas</h2>
                <p className="text-[#4a5568] text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto text-center">
                In Ayurveda, your unique constitution is determined by three doshas: Vata, Pitta, and Kapha. Each dosha represents a combination of elements and influences your
                physical, mental, and emotional characteristics. Explore each dosha to understand its qualities and how it affects your well-being.
                </p>
                <div className="mt-12 grid gap-12 md:grid-cols-1 lg:gap-16">
                {doshas.map((dosha, index) => (
                    <div key={dosha.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 bg-white p-8 rounded-2xl shadow-sm`}>
                    <div className="w-full md:w-1/2 h-80 bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: `url("${dosha.image}")` }}></div>
                    <div className={`flex w-full md:w-1/2 flex-col items-start justify-center gap-4 ${index % 2 === 1 ? 'text-left md:text-right' : 'text-left'}`}>
                        <h3 className={`${dosha.textColor} text-4xl font-bold leading-tight tracking-tight`}>{dosha.name}</h3>
                        <p className="text-[#4a5568] text-base font-normal leading-relaxed">
                        {dosha.description}
                        </p>
                        <button className={`flex items-center justify-center rounded-md h-10 px-5 ${dosha.bgColor} text-white text-sm font-bold shadow-sm hover:bg-opacity-90 transition-all duration-300 ${index % 2 === 1 ? 'self-start md:self-end' : 'self-start'}`}>
                        <span>Learn More</span>
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </section>
            );

        case 'prakriti':
            return (
            <section className="mt-16 bg-white p-8 sm:p-12 rounded-2xl shadow-sm">
                <h2 className="text-[#1a202c] text-3xl font-bold leading-tight tracking-tight text-center">Prakriti Assessment</h2>
                
                {!showResults ? (
                <>
                    <p className="text-[#4a5568] text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto text-center">
                    Discover your unique Ayurvedic constitution (Prakriti) through our comprehensive assessment. This multi-step questionnaire will help you understand your dominant
                    doshas and provide personalized recommendations for diet and lifestyle.
                    </p>
                    
                    <div className="mt-8 max-w-2xl mx-auto">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-[#1a202c] text-base font-semibold">Assessment Progress</p>
                        <p className="text-[#7FB069] text-sm font-medium">Question {currentQuestion} of {totalQuestions}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#7FB069] h-2.5 rounded-full transition-all duration-300" style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}></div>
                    </div>
                    
                    <div className="mt-8">
                        {getCurrentQuestion() && (
                        <>
                            <label className="block text-lg font-medium text-[#1a202c] mb-3">
                            Question {currentQuestion}: {getCurrentQuestion()?.text}
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {getCurrentQuestion()?.options.map((option) => (
                                <button
                                key={option.value}
                                onClick={() => handleAnswerSelect(option.value)}
                                className={`text-left p-4 border rounded-lg transition-colors ${
                                    answers[currentQuestion] === option.value
                                    ? 'border-[#7FB069] bg-[#7FB069]/10'
                                    : 'border-gray-300 hover:border-[#7FB069] hover:bg-[#7FB069]/10'
                                }`}
                                >
                                <h4 className="font-semibold text-[#1a202c]">{option.title}</h4>
                                <p className="text-[#4a5568] text-sm">{option.description}</p>
                                </button>
                            ))}
                            </div>
                        </>
                        )}
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                        <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 1}
                        className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-md h-11 px-6 bg-gray-200 text-[#1a202c] text-sm font-bold leading-normal tracking-wide hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        <span>Previous</span>
                        </button>
                        <button
                        onClick={handleNext}
                        disabled={!answers[currentQuestion]}
                        className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-md h-11 px-6 bg-[#7FB069] text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        <span>{currentQuestion === totalQuestions ? 'Complete Assessment' : 'Next'}</span>
                        {currentQuestion !== totalQuestions && <ChevronRight className="w-4 h-4 ml-1" />}
                        </button>
                    </div>
                    </div>
                </>
                ) : (
                <div className="mt-8 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Your Prakriti Results</h3>
                    <p className="text-[#4a5568]">Based on your responses, your dominant dosha is:</p>
                    <div className="mt-4 p-6 bg-[#7FB069]/10 rounded-xl">
                        <h4 className="text-3xl font-bold text-[#7FB069]">{getDominantDosha()}</h4>
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#98D8C8]/10 p-6 rounded-xl text-center">
                        <h4 className="text-xl font-semibold text-[#98D8C8] mb-2">Vata</h4>
                        <div className="text-3xl font-bold text-[#1a202c]">{getPercentage(doshaScores.vata)}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#98D8C8] h-2 rounded-full" style={{ width: `${getPercentage(doshaScores.vata)}%` }}></div>
                        </div>
                        <p className="text-sm text-[#4a5568] mt-2">{doshaScores.vata} out of {totalQuestions} answers</p>
                    </div>

                    <div className="bg-[#7FB069]/10 p-6 rounded-xl text-center">
                        <h4 className="text-xl font-semibold text-[#7FB069] mb-2">Pitta</h4>
                        <div className="text-3xl font-bold text-[#1a202c]">{getPercentage(doshaScores.pitta)}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#7FB069] h-2 rounded-full" style={{ width: `${getPercentage(doshaScores.pitta)}%` }}></div>
                        </div>
                        <p className="text-sm text-[#4a5568] mt-2">{doshaScores.pitta} out of {totalQuestions} answers</p>
                    </div>

                    <div className="bg-[#A0522D]/10 p-6 rounded-xl text-center">
                        <h4 className="text-xl font-semibold text-[#A0522D] mb-2">Kapha</h4>
                        <div className="text-3xl font-bold text-[#1a202c]">{getPercentage(doshaScores.kapha)}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#A0522D] h-2 rounded-full" style={{ width: `${getPercentage(doshaScores.kapha)}%` }}></div>
                        </div>
                        <p className="text-sm text-[#4a5568] mt-2">{doshaScores.kapha} out of {totalQuestions} answers</p>
                    </div>
                    </div>

                    <div className="text-center">
                    <button
                        onClick={resetAssessment}
                        className="flex items-center justify-center mx-auto rounded-md h-11 px-6 bg-[#7FB069] text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-opacity-90 transition-all"
                    >
                        <span>Take Assessment Again</span>
                    </button>
                    <p className="text-sm text-[#4a5568] mt-4">
                        Want personalized recommendations? Sign up to get your custom diet plan!
                    </p>
                    </div>
                </div>
                )}
            </section>
            );

        case 'food':
            return (
            <section className="mt-16">
                <h2 className="text-[#1a202c] text-3xl font-bold leading-tight tracking-tight text-center">Ayurvedic Food Properties Guide</h2>
                <p className="text-[#4a5568] text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto text-center">
                Explore our visual guide to Ayurvedic food properties, including tastes (rasas), qualities (gunas), and effects on the doshas. Learn how to choose foods that balance
                your constitution and promote optimal health.
                </p>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {tastes.map((taste) => (
                    <div key={taste.name} className="group flex flex-col items-center text-center gap-3">
                    <div 
                        className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-full shadow-md transform group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url("${taste.image}")` }}
                    ></div>
                    <div>
                        <p className="text-[#1a202c] text-lg font-semibold">{taste.name}</p>
                        <p className="text-[#4a5568] text-sm">{taste.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </section>
            );

        case 'ritucharya':
            return (
            <section className="mt-16">
                <h2 className="text-[#1a202c] text-3xl font-bold leading-tight tracking-tight text-center">Seasonal Eating (Ritucharya)</h2>
                <p className="text-[#4a5568] text-lg font-normal leading-relaxed mt-4 max-w-3xl mx-auto text-center">
                Ayurveda emphasizes aligning your diet and lifestyle with the changing seasons. Our Ritucharya guide provides dynamic recommendations for each season to support your
                well-being throughout the year.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {seasons.map((season) => {
                    const IconComponent = season.icon;
                    return (
                    <div key={season.name} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-full sm:w-1/3 h-40 sm:h-full bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: `url("${season.image}")` }}></div>
                        <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-2">
                            <IconComponent className="w-5 h-5 text-[#7FB069]" />
                            <p className="text-[#1a202c] text-xl font-bold">{season.name}</p>
                        </div>
                        <p className="text-[#4a5568] text-sm leading-relaxed">{season.description}</p>
                        <button className="text-[#7FB069] font-semibold text-sm mt-2 self-start hover:underline">
                            View Recommendations →
                        </button>
                        </div>
                    </div>
                    );
                })}
                </div>
            </section>
            );

        default:
            return null;
        }
    };

    return (
        <div className="bg-[#F5F5DC] min-h-screen" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
            <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
                <div className="layout-content-container flex flex-col max-w-5xl flex-1">
                <section className="w-full">
                    <div 
                    className="flex min-h-[520px] flex-col gap-8 items-center justify-center p-8 rounded-2xl bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=520&fit=crop")'
                    }}
                    >
                    <div className="flex flex-col gap-4 text-center max-w-3xl">
                        <h1 className="text-white text-5xl font-bold leading-tight md:text-6xl">Discover Your Ayurvedic Path to Wellness</h1>
                        <p className="text-white/90 text-lg font-light leading-relaxed">
                        Embark on a personalized journey to balance your mind, body, and spirit with our comprehensive Ayurvedic diet management software.
                        </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-8 bg-[#7FB069] text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        <span className="truncate">Start Your Journey</span>
                    </button>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-[#1a202c] text-3xl font-bold leading-tight tracking-tight text-center">Explore Ayurvedic Education</h2>
                    <div className="mt-8">
                    <div className="flex border-b border-gray-300 justify-center">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors ${
                                tab.active
                                ? 'border-[#7FB069] text-[#7FB069]'
                                : 'border-transparent text-[#4a5568] hover:text-[#1a202c] hover:border-gray-300'
                            }`}
                            >
                            {tab.name}
                            </button>
                        ))}
                        </nav>
                    </div>
                    </div>
                </section>

                {renderTabContent()}
                </div>
            </main>
            </div>
        </div>
        </div>
    );
    };

    export default Education;
