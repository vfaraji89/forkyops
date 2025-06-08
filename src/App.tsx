import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import IntroAnimation from './components/IntroAnimation';
import Sidebar from './components/Sidebar';
import FleetOverview from './components/FleetOverview';
import ForkliftDatabase from './components/ForkliftDatabase';
import MaintenanceHub from './components/MaintenanceHub';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import SafetyIntelligence from './components/SafetyIntelligence';
import SmartSearch from './components/SmartSearch';

type AppState = 'login' | 'intro' | 'dashboard';

function App() {
  const [appState, setAppState] = useState<AppState>('login');
  const [activeSection, setActiveSection] = useState('overview');

  const handleLogin = () => {
    setAppState('intro');
  };

  const handleIntroComplete = () => {
    setAppState('dashboard');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <FleetOverview />;
      case 'database':
        return <ForkliftDatabase />;
      case 'maintenance':
        return <MaintenanceHub />;
      case 'performance':
        return <PerformanceAnalytics />;
      case 'safety':
        return <SafetyIntelligence />;
      case 'search':
        return <SmartSearch />;
      default:
        return <FleetOverview />;
    }
  };

  if (appState === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (appState === 'intro') {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0E1117] to-gray-900">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="ml-20 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </main>
      
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;