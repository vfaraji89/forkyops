import React from 'react';
import { AlertTriangle, Clock, DollarSign, Wrench, TrendingUp, Calendar, Zap } from 'lucide-react';
import { maintenanceAlerts } from '../data/mockData';

export default function MaintenanceHub() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'High': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'Low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Predictive': return <Zap className="w-4 h-4" />;
      case 'Scheduled': return <Calendar className="w-4 h-4" />;
      case 'Emergency': return <AlertTriangle className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  const maintenanceStats = [
    {
      title: 'Pending Alerts',
      value: maintenanceAlerts.length,
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      trend: '+2'
    },
    {
      title: 'Avg Cost',
      value: `$${Math.round(maintenanceAlerts.reduce((sum, alert) => sum + alert.estimatedCost, 0) / maintenanceAlerts.length)}`,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      trend: '-12%'
    },
    {
      title: 'AI Confidence',
      value: `${Math.round(maintenanceAlerts.reduce((sum, alert) => sum + alert.aiConfidence, 0) / maintenanceAlerts.length)}%`,
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      trend: '+5%'
    },
    {
      title: 'Response Time',
      value: '2.4h',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      trend: '-18%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Predictive Maintenance Hub</h1>
          <p className="text-gray-400">AI-powered maintenance scheduling and cost optimization</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400 hover:bg-violet-500/20 transition-colors duration-200">
            <Zap className="w-4 h-4" />
            <span>AI Insights</span>
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Schedule Maintenance
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {maintenanceStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* AI Maintenance Predictions */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Maintenance Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-violet-400 mb-1">$24,500</h4>
            <p className="text-gray-300 text-sm">Potential Cost Savings</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-400 mb-1">87%</h4>
            <p className="text-gray-300 text-sm">Prediction Accuracy</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-400 mb-1">3.2 days</h4>
            <p className="text-gray-300 text-sm">Early Warning</p>
          </div>
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Active Alerts</span>
          </h3>
          <div className="space-y-4">
            {maintenanceAlerts.map((alert, index) => (
              <div
                key={alert.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors duration-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(alert.type)}
                    <span className="text-white font-medium">{alert.forkliftId}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-lg border text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                    {alert.priority}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{alert.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">Cost: <span className="text-green-400 font-medium">${alert.estimatedCost}</span></span>
                    <span className="text-gray-400">Due: <span className="text-white">{new Date(alert.dueDate).toLocaleDateString()}</span></span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-violet-400 text-xs">{alert.aiConfidence}% AI</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span>Upcoming Schedule</span>
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <div>
                <h4 className="text-blue-400 font-medium">Today</h4>
                <p className="text-gray-300 text-sm">Routine inspections - Bay 1</p>
              </div>
              <span className="text-blue-400 text-sm">3 units</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div>
                <h4 className="text-amber-400 font-medium">Tomorrow</h4>
                <p className="text-gray-300 text-sm">Battery maintenance - FL004</p>
              </div>
              <span className="text-amber-400 text-sm">2h</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl">
              <div>
                <h4 className="text-gray-300 font-medium">Feb 25</h4>
                <p className="text-gray-400 text-sm">Hydraulic system check</p>
              </div>
              <span className="text-gray-400 text-sm">4h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Maintenance Cost Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">$125,400</h4>
            <p className="text-gray-400">Total YTD Costs</p>
            <span className="text-green-400 text-sm font-medium">-15.2% vs last year</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">89%</h4>
            <p className="text-gray-400">Preventive Ratio</p>
            <span className="text-blue-400 text-sm font-medium">+8.3% improvement</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">2.1h</h4>
            <p className="text-gray-400">Avg Response Time</p>
            <span className="text-violet-400 text-sm font-medium">-22% faster</span>
          </div>
        </div>
      </div>
    </div>
  );
}