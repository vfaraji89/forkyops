import React from 'react';
import { 
  BarChart3, 
  Wrench, 
  Activity, 
  Shield, 
  Search,
  Database
} from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'overview', icon: BarChart3, label: 'Fleet Overview' },
  { id: 'database', icon: Database, label: 'Forklift Database' },
  { id: 'maintenance', icon: Wrench, label: 'Maintenance Hub' },
  { id: 'performance', icon: Activity, label: 'Performance Analytics' },
  { id: 'safety', icon: Shield, label: 'Safety Intelligence' },
  { id: 'search', icon: Search, label: 'Smart Search' }
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 z-40 flex flex-col items-center py-8">
      <div className="mb-8">
        <Logo size="sm" variant="default" showText={false} />
      </div>
      
      <nav className="flex flex-col space-y-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => onSectionChange(item.id)}
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}