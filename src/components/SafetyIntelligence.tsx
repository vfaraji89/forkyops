import React from 'react';
import { Shield, AlertTriangle, Eye, TrendingDown, Users, MapPin, Clock, Zap } from 'lucide-react';
import { safetyIncidents } from '../data/mockData';

export default function SafetyIntelligence() {
  const safetyMetrics = [
    {
      title: 'Safety Score',
      value: '96.3%',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      trend: '+2.1%',
      description: 'Overall fleet safety rating'
    },
    {
      title: 'Incidents',
      value: safetyIncidents.length,
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      trend: '-35%',
      description: 'Total incidents this month'
    },
    {
      title: 'Near Misses',
      value: '12',
      icon: Eye,
      color: 'from-amber-500 to-orange-500',
      trend: '-18%',
      description: 'AI-detected near miss events'
    },
    {
      title: 'Response Time',
      value: '2.3m',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      trend: '-42%',
      description: 'Average incident response time'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'Major': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'Minor': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'Near Miss': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Safety Intelligence</h1>
          <p className="text-gray-400">AI-powered safety monitoring and incident prevention</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400 hover:bg-violet-500/20 transition-colors duration-200">
            <Zap className="w-4 h-4" />
            <span>AI Insights</span>
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
            Report Incident
          </button>
        </div>
      </div>

      {/* Safety Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.title}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  metric.trend.startsWith('+') && metric.title === 'Safety Score' 
                    ? 'text-green-400' 
                    : metric.trend.startsWith('-') 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {metric.trend}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-gray-400 text-sm mb-2">{metric.title}</p>
              <p className="text-gray-500 text-xs">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* AI Risk Prediction */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Risk Prediction</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-400 mb-1">Low</h4>
            <p className="text-gray-300 text-sm">Current Risk Level</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-400 mb-1">92%</h4>
            <p className="text-gray-300 text-sm">Prediction Accuracy</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-violet-400 mb-1">5.2m</h4>
            <p className="text-gray-300 text-sm">Early Warning Time</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-amber-400 mb-1">3</h4>
            <p className="text-gray-300 text-sm">Alerts Today</p>
          </div>
        </div>
      </div>

      {/* Safety Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Incidents */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span>Recent Incidents</span>
          </h3>
          <div className="space-y-4">
            {safetyIncidents.map((incident, index) => (
              <div
                key={incident.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors duration-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-white font-medium">{incident.forkliftId}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-lg border text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-2">{incident.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{incident.location}</span>
                  <span className="text-gray-400">
                    {new Date(incident.timestamp).toLocaleDateString()} - {new Date(incident.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            <button className="w-full p-3 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:border-gray-600 hover:text-gray-300 transition-colors duration-200">
              View All Incidents
            </button>
          </div>
        </div>

        {/* Safety Zones */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Risk Zones</span>
          </h3>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-red-400 font-medium">Loading Dock 3</h4>
                <span className="text-red-400 text-sm font-semibold">High Risk</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Congestion and visibility issues detected</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">2 incidents this week</span>
                <span className="text-red-400">AI Alert Active</span>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-amber-400 font-medium">Warehouse B - Aisle 7</h4>
                <span className="text-amber-400 text-sm font-semibold">Medium Risk</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Narrow passages require extra caution</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">1 near miss this week</span>
                <span className="text-amber-400">Monitoring</span>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-green-400 font-medium">Warehouse A - Zone 1</h4>
                <span className="text-green-400 text-sm font-semibold">Low Risk</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">Optimal safety conditions maintained</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">No incidents this month</span>
                <span className="text-green-400">All Clear</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Training & Compliance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Training Status */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>Training Compliance</span>
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Basic Safety Training', completion: 98, due: 'Annual' },
              { name: 'Equipment Certification', completion: 95, due: '6 Months' },
              { name: 'Emergency Procedures', completion: 89, due: 'Quarterly' },
              { name: 'Hazmat Handling', completion: 76, due: 'Bi-annual' }
            ].map((training, index) => (
              <div key={training.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">{training.name}</span>
                  <span className={`font-semibold text-sm ${
                    training.completion >= 95 ? 'text-green-400' :
                    training.completion >= 85 ? 'text-amber-400' : 'text-red-400'
                  }`}>
                    {training.completion}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      training.completion >= 95 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      training.completion >= 85 ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                      'bg-gradient-to-r from-red-500 to-pink-500'
                    }`}
                    style={{ 
                      width: `${training.completion}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Renewal: {training.due}</span>
                  <span>Next Review Due</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Score Trend */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-green-400" />
            <span>Safety Trend</span>
          </h3>
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-green-400 mb-2">96.3%</h4>
              <p className="text-gray-400">Current Safety Score</p>
              <span className="text-green-400 text-sm font-medium">+2.1% from last month</span>
            </div>
            
            <div className="space-y-4">
              {[
                { month: 'Jan', score: 94 },
                { month: 'Feb', score: 95 },
                { month: 'Mar', score: 93 },
                { month: 'Apr', score: 96 },
                { month: 'May', score: 96.3 }
              ].map((data, index) => (
                <div key={data.month} className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm w-8">{data.month}</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${data.score}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  <span className="text-green-400 font-medium text-sm w-12">{data.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}