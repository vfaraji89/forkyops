import React, { useState } from 'react';
import { Search, Filter, Zap, Fuel, Battery, ArrowUpDown, Eye, Star } from 'lucide-react';
import { mockForklifts } from '../data/mockData';
import { Forklift } from '../types';

export default function ForkliftDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('model');

  const filteredForklifts = mockForklifts.filter(forklift => {
    const matchesSearch = forklift.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         forklift.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || forklift.fuelType.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getFuelIcon = (fuelType: string) => {
    switch (fuelType) {
      case 'Electric': return <Battery className="w-4 h-4" />;
      case 'Propane': return <Fuel className="w-4 h-4" />;
      case 'Diesel': return <Fuel className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'Maintenance': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Idle': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Forklift Database</h1>
          <p className="text-gray-400">Comprehensive fleet catalog with AI-powered insights</p>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search forklifts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-xl w-full sm:w-64"
            />
          </div>
          
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-3 bg-gray-900/50 border border-gray-800/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-xl"
          >
            <option value="all">All Fuel Types</option>
            <option value="electric">Electric</option>
            <option value="propane">Propane</option>
            <option value="diesel">Diesel</option>
          </select>
          
          <button className="flex items-center space-x-2 px-4 py-3 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 hover:bg-violet-500/20 transition-colors duration-200">
            <Filter className="w-5 h-5" />
            <span>Advanced</span>
          </button>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Recommendations</h3>
        </div>
        <p className="text-gray-300 mb-4">Based on your current fleet utilization and performance data, we recommend considering electric forklifts for indoor operations to improve efficiency and reduce maintenance costs.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cost Savings: $12,000/year</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Efficiency +15%</span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">90% Match Score</span>
        </div>
      </div>

      {/* Forklift Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredForklifts.map((forklift, index) => (
          <div
            key={forklift.id}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 hover:border-gray-700/50 transition-all duration-300 group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Forklift Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">{forklift.brand[0]}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{forklift.brand} {forklift.model}</h3>
                  <p className="text-gray-400 text-sm">{forklift.id}</p>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-lg border text-xs font-medium ${getStatusColor(forklift.status)}`}>
                {forklift.status}
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <ArrowUpDown className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">Capacity</span>
                </div>
                <p className="text-white font-semibold">{forklift.capacity.toLocaleString()} lbs</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  {getFuelIcon(forklift.fuelType)}
                  <span className="text-gray-400">Fuel Type</span>
                </div>
                <p className="text-white font-semibold">{forklift.fuelType}</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Efficiency</span>
                <span className="text-green-400 font-semibold">{forklift.efficiency}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${forklift.efficiency}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Safety Score</span>
                <span className="text-blue-400 font-semibold">{forklift.safetyScore}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${forklift.safetyScore}%` }}
                ></div>
              </div>
            </div>

            {/* Current Status */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
              <div className="text-sm">
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-white font-medium">{forklift.location.split(' - ')[0]}</p>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors duration-200">
                <Eye className="w-4 h-4" />
                <span className="text-sm">View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Tool */}
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Compare Forklifts</h3>
        <p className="text-gray-400 mb-6">Select multiple forklifts to compare specifications, performance, and costs side by side.</p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 font-medium">
          Start Comparison
        </button>
      </div>
    </div>
  );
}