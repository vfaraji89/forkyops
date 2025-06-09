import React, { useEffect, useState } from 'react';
import { Database, Activity, Shield, Search, Zap } from 'lucide-react';
import Logo from './Logo';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      icon: Activity,
      title: 'Fleet Overview',
      description: 'Real-time monitoring of your entire forklift fleet',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Smart Database',
      description: 'AI-powered forklift catalog with intelligent recommendations',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Activity,
      title: 'Performance Analytics',
      description: 'Advanced insights into efficiency and productivity metrics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Safety Intelligence',
      description: 'Predictive safety monitoring and incident prevention',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Search,
      title: 'AI Assistant',
      description: 'Natural language search and intelligent recommendations',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          // Start fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-[#0E1117] to-gray-900 z-50 transition-opacity duration-500 opacity-0" />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-[#0E1117] to-gray-900 z-50 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/Image.jpeg" 
          alt="Warehouse operations"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-[#0E1117]/95 to-gray-900/90"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>

      <div className="text-center max-w-2xl mx-auto px-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Logo size="xl" variant="default" showText={true} />
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to the Future of Fleet Management
          </h2>
          <p className="text-xl text-gray-300">
            Initializing AI-powered analytics and real-time monitoring systems...
          </p>
        </div>

        {/* Feature Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            
            return (
              <div
                key={step.title}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 backdrop-blur-sm ${
                  isActive 
                    ? 'bg-gray-800/50 border border-gray-700/50 scale-105' 
                    : isCompleted 
                    ? 'bg-gray-800/30 border border-gray-700/30' 
                    : 'bg-gray-900/30 border border-gray-800/30 opacity-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'scale-110 shadow-lg' : ''
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className={`font-semibold transition-colors duration-500 ${
                    isActive ? 'text-white' : isCompleted ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-500 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {step.description}
                  </p>
                </div>
                {isCompleted && (
                  <div className="ml-auto">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
                {isActive && (
                  <div className="ml-auto">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <span className="ml-2">Preparing your dashboard...</span>
        </div>
      </div>
    </div>
  );
}