'use client';

import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function OnboardingFlow() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userData, setUserData] = useState({
    firstName: '',
    email: '',
    password: '',
    goal: '',
    age: '',
    motivations: [] as string[],
    bettingFrequency: '',
    bettingTypes: [] as string[],
    weeklyBets: 5,
    weeklyLoss: 100,
    productivityImpact: '',
    socialImpact: '',
    beliefInChange: null as number | null,
    wantsSupport: null as number | null,
    wantsTracking: null as number | null
  });

  const updateUserData = (field: string, value: any) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const toggleMotivation = (motivation: string) => {
    setUserData(prev => ({
      ...prev,
      motivations: prev.motivations.includes(motivation)
        ? prev.motivations.filter(m => m !== motivation)
        : [...prev.motivations, motivation]
    }));
  };

  const toggleBettingType = (type: string) => {
    setUserData(prev => ({
      ...prev,
      bettingTypes: prev.bettingTypes.includes(type)
        ? prev.bettingTypes.filter(t => t !== type)
        : [...prev.bettingTypes, type]
    }));
  };

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(prev => prev - 1);
    }
  };

  // Calculate financial projections
  const calculateProjections = () => {
    const monthlyLoss = userData.weeklyLoss * 4.33;
    const yearlyLoss = monthlyLoss * 12;
    const recoveryAmount = Math.round(yearlyLoss * 0.80); // 80% recovery target
    const timeWasted = userData.weeklyBets * 2 * 52; // 2 hours per betting session

    return {
      monthlyLoss: Math.round(monthlyLoss),
      yearlyLoss: Math.round(yearlyLoss),
      recoveryAmount,
      timeWasted: Math.round(timeWasted)
    };
  };

  const screens = [
    // Screen 0: Hero/Trust
    () => (
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8">
        <div className="mt-8" />
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-2xl">
          <h1 className="text-6xl font-bold leading-tight">
            Break Free.<br />Stay Free.
          </h1>

          <div className="w-full max-w-md py-12">
            <svg viewBox="0 0 600 300" className="w-full h-auto">
              {/* Stylized world map with gradient dots */}
              <defs>
                <radialGradient id="dotGrad">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.4" />
                </radialGradient>
              </defs>
              {/* North America */}
              <circle cx="120" cy="80" r="8" fill="url(#dotGrad)" />
              <circle cx="140" cy="100" r="6" fill="url(#dotGrad)" />
              <circle cx="160" cy="90" r="7" fill="url(#dotGrad)" />
              {/* Europe */}
              <circle cx="300" cy="70" r="7" fill="url(#dotGrad)" />
              <circle cx="320" cy="85" r="6" fill="url(#dotGrad)" />
              <circle cx="340" cy="75" r="8" fill="url(#dotGrad)" />
              {/* Asia */}
              <circle cx="420" cy="90" r="9" fill="url(#dotGrad)" />
              <circle cx="450" cy="100" r="7" fill="url(#dotGrad)" />
              <circle cx="480" cy="95" r="6" fill="url(#dotGrad)" />
              {/* Australia */}
              <circle cx="480" cy="180" r="7" fill="url(#dotGrad)" />
              {/* South America */}
              <circle cx="180" cy="180" r="6" fill="url(#dotGrad)" />
              <circle cx="200" cy="200" r="5" fill="url(#dotGrad)" />
              {/* Africa */}
              <circle cx="320" cy="160" r="6" fill="url(#dotGrad)" />
              {/* Connection lines */}
              <line x1="140" y1="100" x2="300" y2="70" stroke="white" strokeWidth="1" opacity="0.2" />
              <line x1="320" y1="85" x2="420" y2="90" stroke="white" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>

          <h2 className="text-3xl font-semibold leading-snug px-4">
            Join thousands taking control<br />
            of their relationship with gambling
          </h2>

          <div className="text-xl opacity-90 font-medium">
            12-week peer support program
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-2xl bg-white text-emerald-700 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
        >
          Start Your Journey
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 1: Science & Credibility
    () => (
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8">
        <button onClick={handleBack} className="self-start">
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-2xl px-4">
          <h1 className="text-5xl font-bold leading-tight">
            Science-backed.<br />
            Proven results.
          </h1>

          <div className="space-y-6 w-full">
            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-7xl mb-4">🧠</div>
              <p className="text-2xl font-bold mb-2">CBT Framework</p>
              <p className="text-base opacity-90">Cognitive Behavioral Therapy techniques proven to break gambling patterns</p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-7xl mb-4">👥</div>
              <p className="text-2xl font-bold mb-2">Peer Accountability</p>
              <p className="text-base opacity-90">Weekly group sessions with others who understand your struggle</p>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-7xl mb-4">📱</div>
              <p className="text-2xl font-bold mb-2">Real-Time Support</p>
              <p className="text-base opacity-90">24/7 tools to help you resist urges when they strike</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <p className="text-lg font-semibold">
              Average member reduces betting by 78% in 12 weeks
            </p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-2xl bg-white text-emerald-700 py-5 rounded-full font-bold text-xl shadow-2xl"
        >
          Continue
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 2: Create Account
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-8 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Create Your Account
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Your information is completely private and secure.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="First Name"
              value={userData.firstName}
              onChange={(e) => updateUserData('firstName', e.target.value)}
              className="w-full p-5 border-2 border-gray-300 rounded-2xl text-xl focus:border-emerald-500 focus:outline-none transition-colors"
              autoFocus
            />

            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) => updateUserData('email', e.target.value)}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl text-xl focus:border-emerald-500 focus:outline-none transition-colors"
            />

            <input
              type="password"
              placeholder="Password (min. 8 characters)"
              value={userData.password}
              onChange={(e) => updateUserData('password', e.target.value)}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl text-xl focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔒</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Your privacy matters</p>
                <p className="text-sm text-gray-600">We never share your information. Your journey is completely confidential.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!userData.firstName || !userData.email || userData.password.length < 8}
          className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
        >
          Continue
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 3: Goal Selection
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-base font-semibold">
            About You
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Everyone starts somewhere.
          </h1>
          <p className="text-2xl font-bold text-gray-900 mb-8">
            What&apos;s your goal?
          </p>

          <div className="space-y-4">
            {[
              { icon: '🛑', text: 'Stop gambling completely', value: 'quit' },
              { icon: '📉', text: 'Reduce how much I bet', value: 'reduce' },
              { icon: '🌱', text: 'Stay gambling-free', value: 'maintain' },
              { icon: '⏸️', text: 'Take a break for now', value: 'break' },
              { icon: '🤔', text: "I'm exploring my options", value: 'unsure' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateUserData('goal', option.value);
                  handleNext();
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center space-x-4 group"
              >
                <span className="text-4xl">{option.icon}</span>
                <span className="text-xl font-medium group-hover:text-emerald-700 transition-colors">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 4: Age
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-base font-semibold">
            About You
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            What&apos;s your age?
          </h1>

          <div className="w-full max-w-md">
            <input
              type="number"
              value={userData.age}
              onChange={(e) => updateUserData('age', e.target.value)}
              className="w-full text-center text-6xl font-bold p-8 border-2 border-gray-300 rounded-3xl focus:border-emerald-500 focus:outline-none transition-colors"
              placeholder="25"
              min="18"
              max="99"
              autoFocus
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!userData.age || parseInt(userData.age) < 18}
          className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors"
        >
          Continue
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 5: Motivations (Multi-select)
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-base font-semibold">
            About You
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            What&apos;s driving your decision to change?
          </h1>
          <p className="text-lg text-gray-600 mb-8">Select all that apply</p>

          <div className="space-y-4">
            {[
              { icon: '💰', text: 'Save money / Get out of debt', value: 'money' },
              { icon: '❤️', text: 'Improve relationships', value: 'relationships' },
              { icon: '🧘', text: 'Reduce stress and anxiety', value: 'mental_health' },
              { icon: '⚡', text: 'Get my energy back', value: 'energy' },
              { icon: '🎯', text: 'Focus on my goals', value: 'goals' },
              { icon: '😊', text: 'Feel better about myself', value: 'self_esteem' },
              { icon: '👨‍👩‍👧', text: 'Be there for my family', value: 'family' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => toggleMotivation(option.value)}
                className={`w-full p-6 border-2 rounded-2xl text-left transition-all flex items-center space-x-4 ${
                  userData.motivations.includes(option.value)
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
              >
                <span className="text-4xl">{option.icon}</span>
                <span className="text-xl font-medium flex-1">{option.text}</span>
                {userData.motivations.includes(option.value) && (
                  <div className="text-emerald-600 text-2xl">✓</div>
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={userData.motivations.length === 0}
          className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-700 transition-colors mt-6"
        >
          Continue
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 6: Reassurance / You're in Good Hands
    () => (
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8">
        <button onClick={handleBack} className="self-start">
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-2xl px-4">
          <div className="text-8xl animate-bounce">👍</div>

          <h1 className="text-6xl font-bold leading-tight">
            You&apos;re in good hands!
          </h1>

          <p className="text-2xl leading-relaxed opacity-95">
            Our program has helped thousands of people just like you take control and build a healthier future.
          </p>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full">
            <div className="text-6xl mb-4">🎯</div>
            <p className="text-3xl font-bold mb-3">78% Success Rate</p>
            <p className="text-lg opacity-90">
              Members report significant reduction in gambling behavior within 12 weeks
            </p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-2xl bg-white text-emerald-700 py-5 rounded-full font-bold text-xl shadow-2xl"
        >
          Let&apos;s Keep Going
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 7: Betting Frequency
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Habits
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            How often do you bet in a typical week?
          </h1>

          <div className="space-y-4">
            {[
              { icon: '☀️', text: 'Every day - it\'s part of my routine', value: 'daily' },
              { icon: '🗓️', text: 'Several days - especially game days', value: 'several' },
              { icon: '💪', text: 'Once or twice - usually weekends', value: 'weekly' },
              { icon: '🍀', text: 'Rarely or never during the week', value: 'rare' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateUserData('bettingFrequency', option.value);
                  handleNext();
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center space-x-4"
              >
                <span className="text-4xl">{option.icon}</span>
                <span className="text-xl font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 8: Social/Event Betting
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Habits
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            When do you typically feel the urge to bet?
          </h1>

          <div className="space-y-4">
            {[
              { text: 'When watching games with friends', value: 'social' },
              { text: 'When I\'m bored or alone', value: 'bored' },
              { text: 'After a stressful day', value: 'stress' },
              { text: 'When I see betting ads or content', value: 'triggered' },
              { text: 'When I\'m trying to win back losses', value: 'chasing' },
              { text: 'Pretty much all the time', value: 'constant' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateUserData('socialImpact', option.value);
                  handleNext();
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-50 transition-all"
              >
                <span className="text-xl font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 9: Weekly Betting Amount (Sliders)
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-cyan-100 text-cyan-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Habits
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Let&apos;s talk numbers.
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            This helps us create accurate projections for your recovery.
          </p>

          <div className="space-y-12">
            {/* Number of Bets */}
            <div>
              <label className="text-xl font-semibold text-gray-900 mb-4 block">
                Bets per week
              </label>
              <div className="text-5xl font-bold text-emerald-600 mb-6 text-center">
                {userData.weeklyBets}
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={userData.weeklyBets}
                onChange={(e) => updateUserData('weeklyBets', parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1</span>
                <span>50+</span>
              </div>
            </div>

            {/* Average Loss */}
            <div>
              <label className="text-xl font-semibold text-gray-900 mb-4 block">
                Average weekly loss
              </label>
              <div className="text-5xl font-bold text-red-600 mb-6 text-center">
                ${userData.weeklyLoss}
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="25"
                value={userData.weeklyLoss}
                onChange={(e) => updateUserData('weeklyLoss', parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">💡</div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">These numbers are just estimates</p>
                <p className="text-sm text-gray-700">We know it&apos;s hard to track exact amounts. Your best guess helps us personalize your program.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-colors mt-6"
        >
          Continue
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 10: THE REALITY CHECK - Financial Impact (Big Numbers)
    () => {
      const projections = calculateProjections();
      return (
        <div className="flex flex-col min-h-screen bg-white p-6">
          <button onClick={handleBack} className="mb-6 self-start">
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>

          <div className="flex-1 max-w-2xl mx-auto w-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Here&apos;s what gambling is costing you:
            </h1>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-2 border-red-200">
                <p className="text-lg text-gray-700 mb-2">Per Month</p>
                <p className="text-6xl font-bold text-red-600 mb-2">
                  ${projections.monthlyLoss.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">That&apos;s {Math.round(projections.monthlyLoss / 100)} nice dinners out</p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-8 border-2 border-red-300">
                <p className="text-lg text-gray-700 mb-2">Per Year</p>
                <p className="text-7xl font-bold text-red-700 mb-2">
                  ${projections.yearlyLoss.toLocaleString()}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  That could be: a car, a vacation, rent payments, college fund, retirement savings...
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-300">
                <p className="text-lg text-gray-700 mb-2">Time spent betting per year</p>
                <p className="text-6xl font-bold text-gray-800 mb-2">
                  {projections.timeWasted} hours
                </p>
                <p className="text-sm text-gray-600">That&apos;s {Math.round(projections.timeWasted / 24)} full days of your life</p>
              </div>
            </div>

            <div className="mt-10 bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
              <p className="text-center text-xl font-bold text-emerald-900">
                But here&apos;s the good news: this can change.
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-colors mt-6"
          >
            Show Me How
          </button>
          <div className="mb-4" />
        </div>
      );
    },

    // Screen 11: Social Proof with Personalization
    () => (
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8">
        <button onClick={handleBack} className="self-start">
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-2xl px-4">
          <div className="w-full">
            {/* Comparison Chart */}
            <svg viewBox="0 0 400 300" className="w-full h-auto mb-8">
              {/* Before Breakaway */}
              <text x="100" y="30" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">Before Breakaway</text>
              {/* After Breakaway */}
              <text x="300" y="30" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">With Breakaway</text>

              {/* Grid lines */}
              <line x1="40" y1="60" x2="360" y2="60" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4" />
              <line x1="40" y1="120" x2="360" y2="120" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4" />
              <line x1="40" y1="180" x2="360" y2="180" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4" />
              <line x1="40" y1="240" x2="360" y2="240" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4" />

              {/* Y-axis labels */}
              <text x="30" y="65" fill="white" fontSize="14" textAnchor="end">$500</text>
              <text x="30" y="125" fill="white" fontSize="14" textAnchor="end">$400</text>
              <text x="30" y="185" fill="white" fontSize="14" textAnchor="end">$200</text>
              <text x="30" y="245" fill="white" fontSize="14" textAnchor="end">$50</text>

              {/* Before line (declining slowly) */}
              <path
                d="M 60 70 L 100 90 L 140 120 L 180 150"
                stroke="#ff6b6b"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="60" cy="70" r="6" fill="#ff6b6b" />
              <circle cx="100" cy="90" r="6" fill="#ff6b6b" />
              <circle cx="140" cy="120" r="6" fill="#ff6b6b" />
              <circle cx="180" cy="150" r="6" fill="#ff6b6b" />

              {/* After line (declining rapidly) */}
              <path
                d="M 220 70 L 260 140 L 300 210 L 340 235"
                stroke="#4ade80"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="220" cy="70" r="6" fill="#4ade80" />
              <circle cx="260" cy="140" r="6" fill="#4ade80" />
              <circle cx="300" cy="210" r="6" fill="#4ade80" />
              <circle cx="340" cy="235" r="6" fill="#4ade80" />

              {/* X-axis labels */}
              <text x="100" y="270" fill="white" fontSize="14" textAnchor="middle">Week 1</text>
              <text x="140" y="270" fill="white" fontSize="14" textAnchor="middle">Week 4</text>
              <text x="180" y="270" fill="white" fontSize="14" textAnchor="middle">Week 8</text>
              <text x="260" y="270" fill="white" fontSize="14" textAnchor="middle">Week 4</text>
              <text x="300" y="270" fill="white" fontSize="14" textAnchor="middle">Week 8</text>
              <text x="340" y="270" fill="white" fontSize="14" textAnchor="middle">Week 12</text>
            </svg>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Members like you see an average 78% reduction in betting
          </h1>

          <p className="text-2xl leading-relaxed opacity-95">
            People who bet {userData.weeklyBets}+ times per week and started with similar losses have successfully transformed their relationship with gambling.
          </p>

          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full">
            <p className="text-3xl font-bold mb-3">Real Results</p>
            <p className="text-lg opacity-90">
              &quot;I went from betting $300/week to $40/week in 8 weeks. The peer support made all the difference.&quot;
            </p>
            <p className="text-sm mt-4 opacity-75">- Mike, 32, Program Graduate</p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full max-w-2xl bg-white text-emerald-700 py-5 rounded-full font-bold text-xl shadow-2xl"
        >
          I&apos;m Ready
        </button>
        <div className="mb-4" />
      </div>
    ),

    // Screen 12: Impact on Life
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Life
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            How does betting affect your work or daily productivity?
          </h1>
          <p className="text-lg text-gray-600 mb-8">Be honest - this stays private</p>

          <div className="space-y-4">
            {[
              { text: 'It significantly impacts my focus and performance', value: 'major' },
              { text: 'I feel tired or distracted the next day', value: 'moderate' },
              { text: 'I notice some anxiety and stress', value: 'minor' },
              { text: "It doesn't impact my work performance", value: 'none' },
              { text: "I haven't noticed a difference", value: 'unaware' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateUserData('productivityImpact', option.value);
                  handleNext();
                }}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-50 transition-all"
              >
                <span className="text-xl font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 13: Timeline Projection (Personalized)
    () => {
      const projections = calculateProjections();
      return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8">
          <button onClick={handleBack} className="self-start">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 max-w-2xl px-4">
            {/* Visual Timeline */}
            <div className="w-full">
              <svg viewBox="0 0 600 200" className="w-full h-auto">
                {/* Timeline path */}
                <path
                  d="M 50 150 Q 200 140, 300 80 T 550 60"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="8,4"
                  opacity="0.6"
                />

                {/* Start point */}
                <circle cx="50" cy="150" r="12" fill="white" opacity="0.9" />
                <text x="50" y="185" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">You are here</text>
                <text x="50" y="135" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">Start</text>

                {/* Milestone */}
                <circle cx="300" cy="80" r="8" fill="#4ade80" opacity="0.9" />
                <line x1="300" y1="80" x2="300" y2="110" stroke="white" strokeWidth="2" opacity="0.6" />
                <text x="300" y="125" fill="white" fontSize="14" textAnchor="middle">6 weeks</text>

                {/* End point (goal) */}
                <circle cx="550" cy="60" r="14" fill="#4ade80" />
                <text x="550" y="45" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">Your GOAL</text>
                <text x="550" y="95" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">12 weeks</text>
              </svg>
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              We estimate you could reach your goal in just 12 weeks
            </h1>

            <p className="text-2xl leading-relaxed opacity-95">
              Based on your patterns, motivation level, and our proven framework.
            </p>

            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full">
              <p className="text-lg mb-4 opacity-90">By week 12, you could:</p>
              <div className="space-y-3 text-left">
                <p className="text-xl font-semibold">✓ Reduce betting by 78%</p>
                <p className="text-xl font-semibold">✓ Save ${projections.recoveryAmount.toLocaleString()} annually</p>
                <p className="text-xl font-semibold">✓ Reclaim {Math.round(projections.timeWasted * 0.78)} hours per year</p>
                <p className="text-xl font-semibold">✓ Feel in control again</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full max-w-2xl bg-white text-emerald-700 py-5 rounded-full font-bold text-xl shadow-2xl"
          >
            Let&apos;s Do This
          </button>
          <div className="mb-4" />
        </div>
      );
    },

    // Screen 14: Mindset Question 1
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Mindset
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            I believe that changing my relationship with gambling will significantly improve my life.
          </h1>

          <p className="text-lg text-gray-600 mb-8">Rate this statement</p>

          <div className="space-y-6">
            <div className="flex justify-between items-center px-4">
              {['✊', '👎', '🤷', '👍', '👏'].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => {
                    updateUserData('beliefInChange', index + 1);
                    setTimeout(handleNext, 300);
                  }}
                  className="flex flex-col items-center space-y-2 p-4 hover:bg-gray-50 rounded-xl transition-all transform hover:scale-110"
                >
                  <span className="text-5xl">{emoji}</span>
                  <span className="text-xs text-gray-500 font-medium">
                    {index === 0 && 'Strongly disagree'}
                    {index === 2 && 'Neutral'}
                    {index === 4 && 'Strongly agree'}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600 px-4 mt-4">
              <span>Strongly disagree</span>
              <span>Strongly agree</span>
            </div>
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 15: Mindset Question 2
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Mindset
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Stories of others who successfully quit or reduced gambling inspire me on my own journey.
          </h1>

          <p className="text-lg text-gray-600 mb-8">Rate this statement</p>

          <div className="space-y-6">
            <div className="flex justify-between items-center px-4">
              {['✊', '👎', '🤷', '👍', '👏'].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => {
                    updateUserData('wantsSupport', index + 1);
                    setTimeout(handleNext, 300);
                  }}
                  className="flex flex-col items-center space-y-2 p-4 hover:bg-gray-50 rounded-xl transition-all transform hover:scale-110"
                >
                  <span className="text-5xl">{emoji}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600 px-4 mt-4">
              <span>Strongly disagree</span>
              <span>Strongly agree</span>
            </div>
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 16: Mindset Question 3
    () => (
      <div className="flex flex-col min-h-screen bg-white p-6">
        <button onClick={handleBack} className="mb-6 self-start">
          <ChevronLeft className="w-7 h-7 text-gray-700" />
        </button>

        <div className="mb-6">
          <span className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-base font-semibold">
            Your Mindset
          </span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Tracking my progress and celebrating small wins keeps me motivated.
          </h1>

          <p className="text-lg text-gray-600 mb-8">Rate this statement</p>

          <div className="space-y-6">
            <div className="flex justify-between items-center px-4">
              {['✊', '👎', '🤷', '👍', '👏'].map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => {
                    updateUserData('wantsTracking', index + 1);
                    setTimeout(handleNext, 300);
                  }}
                  className="flex flex-col items-center space-y-2 p-4 hover:bg-gray-50 rounded-xl transition-all transform hover:scale-110"
                >
                  <span className="text-5xl">{emoji}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600 px-4 mt-4">
              <span>Strongly disagree</span>
              <span>Strongly agree</span>
            </div>
          </div>
        </div>
        <div className="mb-4" />
      </div>
    ),

    // Screen 17: Loading / Building Plan
    () => {
      const [loadingProgress, setLoadingProgress] = React.useState(0);

      React.useEffect(() => {
        const steps = [
          { label: 'Analyzing your betting patterns...', duration: 1000 },
          { label: 'Understanding your triggers...', duration: 1200 },
          { label: 'Calculating your recovery timeline...', duration: 1000 },
          { label: 'Matching you with a support cohort...', duration: 1300 },
          { label: 'Building your personalized plan...', duration: 1000 }
        ];

        const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);

        const interval = setInterval(() => {
          setLoadingProgress(prev => {
            const newProgress = prev + (100 / (totalDuration / 50));
            if (newProgress >= 100) {
              clearInterval(interval);
              setTimeout(handleNext, 500);
              return 100;
            }
            return newProgress;
          });
        }, 50);

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
          <div className="max-w-2xl w-full space-y-12">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Building your personalized recovery plan
            </h1>

            <div className="space-y-8">
              {[
                { label: 'Analyzing your betting patterns', value: Math.min(loadingProgress, 100) },
                { label: 'Understanding your triggers', value: Math.max(0, Math.min(loadingProgress - 20, 100)) },
                { label: 'Calculating your timeline', value: Math.max(0, Math.min(loadingProgress - 40, 100)) },
                { label: 'Matching your cohort', value: Math.max(0, Math.min(loadingProgress - 60, 100)) },
                { label: 'Building your plan', value: Math.max(0, Math.min(loadingProgress - 80, 100)) }
              ].map((step, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-medium text-gray-700">{step.label}</span>
                    <span className="text-lg font-bold text-emerald-600">{Math.round(step.value)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${step.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-600"></div>
            </div>
          </div>
        </div>
      );
    },

    // Screen 18: Future Vision (Big Reveal)
    () => {
      const projections = calculateProjections();
      return (
        <div className="flex flex-col min-h-screen bg-white p-6">
          <button onClick={handleBack} className="mb-6 self-start">
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>

          <div className="flex-1 max-w-2xl mx-auto w-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center leading-tight">
              Here&apos;s what life looks like a year from now:
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">With Breakaway&apos;s support</p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200">
                <div className="text-center">
                  <p className="text-7xl font-bold text-emerald-600 mb-2">
                    ${projections.recoveryAmount.toLocaleString()}
                  </p>
                  <p className="text-xl text-gray-700 font-semibold uppercase tracking-wide">SAVED</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200">
                <div className="text-center">
                  <p className="text-7xl font-bold text-blue-600 mb-2">
                    {Math.round(projections.timeWasted * 0.78)}
                  </p>
                  <p className="text-xl text-gray-700 font-semibold uppercase tracking-wide">HOURS RECLAIMED</p>
                  <p className="text-sm text-gray-600 mt-2">Time for hobbies, family, and goals</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">✅</div>
                    <p className="text-lg font-semibold text-gray-800">No more hiding or shame</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">✅</div>
                    <p className="text-lg font-semibold text-gray-800">Stronger relationships</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">✅</div>
                    <p className="text-lg font-semibold text-gray-800">Peace of mind</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">✅</div>
                    <p className="text-lg font-semibold text-gray-800">Control over your life</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <p className="text-center text-xl font-bold text-gray-900">
                This isn&apos;t a fantasy. This is your future with Breakaway.
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full max-w-2xl mx-auto bg-emerald-600 text-white py-5 rounded-full font-bold text-xl hover:bg-emerald-700 transition-colors mt-6"
          >
            I&apos;m In - Let&apos;s Start
          </button>
          <div className="mb-4" />
        </div>
      );
    },

    // Screen 19: Paywall / Pricing
    () => (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="flex justify-between items-center mb-8">
          <button onClick={handleBack}>
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>
          <button className="text-emerald-600 font-semibold text-lg">Support</button>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full">
          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 mb-8 text-white">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">78%</p>
                <p className="text-sm opacity-90">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.8★</p>
                <p className="text-sm opacity-90">App Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm opacity-90">Week Program</p>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Start Your Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Join thousands who&apos;ve taken control with Breakaway
          </p>

          <div className="space-y-4 mb-8">
            {/* 30-Day Trial Option (Highlighted) */}
            <div className="bg-white rounded-3xl p-8 border-4 border-emerald-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">30-Day Trial</p>
                  <p className="text-4xl font-bold text-emerald-600 mt-2">$4.99</p>
                </div>
                <div className="w-8 h-8 rounded-full border-4 border-emerald-500 bg-emerald-500 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Full access to 12-week program</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Weekly peer support sessions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 urge resistance tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Progress tracking & insights</span>
                </li>
              </ul>
            </div>

            {/* 7-Day Free Trial */}
            <button className="w-full bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-emerald-300 transition-all text-left">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">7-Day Trial</p>
                  <p className="text-4xl font-bold text-gray-600 mt-2">FREE</p>
                  <p className="text-sm text-gray-500 mt-1">Then $14.99/month</p>
                </div>
                <div className="w-8 h-8 rounded-full border-4 border-gray-300"></div>
              </div>
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
            <p className="text-center text-lg font-semibold text-gray-900 mb-4">
              After your trial, continue for just $14.99/month
            </p>
            <p className="text-center text-sm text-gray-600">
              That&apos;s less than one typical bet. Cancel anytime with one click.
            </p>
          </div>

          {/* Money Back Guarantee Badge */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-4xl">🏆</div>
            <div>
              <p className="font-bold text-gray-900">30-Day Money-Back Guarantee</p>
              <p className="text-sm text-gray-600">No questions asked</p>
            </div>
          </div>

          <button
            onClick={() => {
              alert('Success! Welcome to Breakaway 🎉');
            }}
            className="w-full bg-emerald-600 text-white py-6 rounded-full font-bold text-2xl hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Start 30-Day Trial
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            ✓ Cancel anytime  •  ✓ Secure payment  •  ✓ Join 10,000+ members
          </p>
        </div>
        <div className="mb-4" />
      </div>
    )
  ];

  return (
    <div className="min-h-screen bg-white">
      {screens[currentScreen]()}
    </div>
  );
}
