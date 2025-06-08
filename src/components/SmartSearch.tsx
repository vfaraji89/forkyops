import React, { useState } from 'react';
import { Search, Mic, Filter, Zap, Database, TrendingUp, AlertTriangle } from 'lucide-react';
import { mockForklifts } from '../data/mockData';

export default function SmartSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const searchSuggestions = [
    'Show me electric forklifts under $30k with 5000lb capacity',
    'Find units with low battery levels',
    'Which forklifts need maintenance this week?',
    'Compare Toyota vs Hyster efficiency ratings',
    'Show forklifts in Warehouse A with high utilization'
  ];

  const quickFilters = [
    { label: 'Electric Only', icon: Zap, color: 'blue' },
    { label: 'High Efficiency', icon: TrendingUp, color: 'green' },
    { label: 'Needs Maintenance', icon: AlertTriangle, color: 'amber' },
    { label: 'Available Now', icon: Database, color: 'violet' }
  ];

  const searchResults = mockForklifts.filter(forklift => 
    searchQuery === '' || 
    forklift.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    forklift.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    forklift.fuelType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVoiceSearch = () => {
    setIsListening(!isListening);
    // Voice search implementation would go here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Smart Search & AI Assistant</h1>
          <p className="text-gray-400">Natural language search with intelligent recommendations</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg">
          <Zap className="w-4 h-4 text-violet-400" />
          <span className="text-violet-400 text-sm font-medium">AI Powered</span>
        </div>
      </div>

      {/* AI Search Bar */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Ask anything about your fleet... (e.g., 'Show me electric forklifts with low battery')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-16 py-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-xl text-lg"
          />
          <button
            onClick={handleVoiceSearch}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
              isListening 
                ? 'bg-red-500/20 text-red-400 animate-pulse' 
                : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
            }`}
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3">
        {quickFilters.map((filter, index) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.label}
              className={`flex items-center space-x-2 px-4 py-2 bg-${filter.color}-500/10 border border-${filter.color}-500/20 rounded-xl text-${filter.color}-400 hover:bg-${filter.color}-500/20 transition-colors duration-200`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Suggestions */}
      {searchQuery === '' && (
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Try these AI-powered searches:</h3>
          <div className="space-y-3">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(suggestion)}
                className="w-full text-left p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                "{suggestion}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* AI Assistant Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Search Results */}
          {searchQuery && (
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Search Results</h3>
                <span className="text-gray-400 text-sm">{searchResults.length} results found</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((forklift, index) => (
                  <div
                    key={forklift.id}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">{forklift.brand} {forklift.model}</h4>
                        <p className="text-gray-400 text-sm">{forklift.id}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        forklift.status === 'Active' ? 'bg-green-500' :
                        forklift.status === 'Idle' ? 'bg-blue-500' : 'bg-amber-500'
                      }`}></div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Capacity</span>
                        <span className="text-gray-300">{forklift.capacity} lbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fuel Type</span>
                        <span className="text-gray-300">{forklift.fuelType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Efficiency</span>
                        <span className="text-green-400 font-medium">{forklift.efficiency}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!searchQuery && (
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Fleet Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                  <h4 className="text-2xl font-bold text-blue-400 mb-1">24</h4>
                  <p className="text-gray-300 text-sm">Total Units</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                  <h4 className="text-2xl font-bold text-green-400 mb-1">18</h4>
                  <p className="text-gray-300 text-sm">Active</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                  <h4 className="text-2xl font-bold text-amber-400 mb-1">4</h4>
                  <p className="text-gray-300 text-sm">Idle</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                  <h4 className="text-2xl font-bold text-red-400 mb-1">2</h4>
                  <p className="text-gray-300 text-sm">Maintenance</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AI Assistant Panel */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
              <p className="text-violet-400 text-sm mb-2">💡 Smart Insight</p>
              <p className="text-gray-300 text-sm">Based on your search patterns, you might be interested in comparing electric vs propane forklifts for cost efficiency.</p>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-blue-400 text-sm mb-2">🔍 Quick Tip</p>
              <p className="text-gray-300 text-sm">Try asking "Which units have the highest downtime?" to identify maintenance priorities.</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl text-gray-300 hover:text-white transition-colors duration-200 text-sm">
              "Show maintenance schedule for next week"
            </button>
            <button className="w-full text-left p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl text-gray-300 hover:text-white transition-colors duration-200 text-sm">
              "Compare fuel costs by forklift type"
            </button>
            <button className="w-full text-left p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl text-gray-300 hover:text-white transition-colors duration-200 text-sm">
              "Find most efficient operators"
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Search Features */}
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Advanced Search Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Natural Language</h4>
            <p className="text-gray-400 text-sm">Ask questions in plain English and get intelligent results</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">AI Recommendations</h4>
            <p className="text-gray-400 text-sm">Get smart suggestions based on your fleet data and patterns</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Voice Commands</h4>
            <p className="text-gray-400 text-sm">Search hands-free with voice recognition technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}