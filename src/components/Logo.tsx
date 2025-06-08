import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'gradient';
  showText?: boolean;
}

export default function Logo({ size = 'md', variant = 'default', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  const getTextColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Minimal Logotype */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl flex items-center justify-center relative overflow-hidden`}>
        {/* Abstract Fork Symbol */}
        <div className="relative">
          {/* Fork Prongs */}
          <div className={`${iconSizeClasses[size]} relative`}>
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
              {/* Main Body */}
              <rect x="10" y="8" width="4" height="12" rx="1" fill="currentColor" />
              {/* Left Prong */}
              <rect x="6" y="4" width="3" height="8" rx="1" fill="currentColor" />
              {/* Right Prong */}
              <rect x="15" y="4" width="3" height="8" rx="1" fill="currentColor" />
              {/* Connection */}
              <rect x="8" y="10" width="8" height="2" rx="1" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-xl"></div>
      </div>

      {/* Text */}
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${getTextColor()} tracking-tight`}>
            Forky<span className="font-light">Ops</span>
          </h1>
          {size === 'lg' || size === 'xl' ? (
            <p className="text-blue-400 font-medium text-sm">Intelligent Fleet Management</p>
          ) : null}
        </div>
      )}
    </div>
  );
}