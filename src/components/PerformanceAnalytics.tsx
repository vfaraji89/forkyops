import React from 'react';
import { TrendingUp, Activity, Fuel, Clock, Users, Target, BarChart3, Zap } from 'lucide-react';
import { performanceData } from '../data/mockData';

export default function PerformanceAnalytics() {
  const performanceMetrics = [
    {
      title: 'Fleet Efficiency',
      value: '89.2%',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      trend: '+2.4%',
      description: 'Average efficiency across all units'
    },
    {
      title: 'Utilization Rate',
      value: '78.5%',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      trend: '+5.1%',
      description: 'Active time vs. total available time'
    },
    {
      title: 'Fuel Economy',
      value: '14.2L/h',
      icon: Fuel,
      color: 'from-violet-500 to-purple-500',
      trend: '-8.3%',
      description: 'Average fuel consumption per hour'
    },
    {
      title: 'Productivity',
      value: '94.7%',
      icon: Target,
      color: 'from-amber-500 to-orange-500',
      trend: '+3.2%',
      description: 'Tasks completed vs. planned'
    }
  ];

  const chartData = performanceData.slice(-7);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Performance Analytics</h1>
          <p className="text-gray-400">Advanced insights into fleet performance and optimization</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-400 hover:bg-violet-500/20 transition-colors duration-200">
            <Zap className="w-4 h-4" />
            <span>AI Analysis</span>
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Export Report
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
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
                  metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
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

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Efficiency Trend */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Efficiency Trend</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm">Efficiency %</span>
            </div>
          </div>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={data.date} className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm w-16">
                  {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${data.efficiency}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <span className="text-green-400 font-medium text-sm w-12">{data.efficiency}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Utilization Chart */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Utilization Rate</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-blue-400 text-sm">Utilization %</span>
            </div>
          </div>
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={data.date} className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm w-16">
                  {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${data.utilization}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <span className="text-blue-400 font-medium text-sm w-12">{data.utilization}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Performance Insights */}
      <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Performance Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-violet-400 mb-1">+15%</h4>
            <p className="text-gray-300 text-sm">Potential Efficiency Gain</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-green-400 mb-1">$18,500</h4>
            <p className="text-gray-300 text-sm">Annual Cost Savings</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-blue-400 mb-1">2.3h</h4>
            <p className="text-gray-300 text-sm">Avg Idle Reduction</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-amber-400 mb-1">94%</h4>
            <p className="text-gray-300 text-sm">Optimization Score</p>
          </div>
        </div>
      </div>

      {/* Operator Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>Top Operators</span>
          </h3>
          <div className="space-y-4">
            {[
              { id: 'OP001', name: 'John Smith', efficiency: 96, safety: 98 },
              { id: 'OP002', name: 'Maria Garcia', efficiency: 94, safety: 97 },
              { id: 'OP003', name: 'Mike Johnson', efficiency: 91, safety: 95 }
            ].map((operator, index) => (
              <div
                key={operator.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{operator.name}</h4>
                    <p className="text-gray-400 text-sm">{operator.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-semibold">{operator.efficiency}%</p>
                    <p className="text-blue-400 text-sm">{operator.safety}% safety</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Efficiency</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${operator.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Safety</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${operator.safety}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmarking */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-violet-400" />
            <span>Industry Benchmarks</span>
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Fleet Efficiency</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">89.2%</span>
                  <span className="text-green-400 text-sm">+12% vs industry</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '89.2%' }}></div>
                </div>
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gray-600 h-3 rounded-full" style={{ width: '77%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Your Fleet</span>
                <span>Industry Avg</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Utilization</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">78.5%</span>
                  <span className="text-green-400 text-sm">+6% vs industry</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '78.5%' }}></div>
                </div>
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gray-600 h-3 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Your Fleet</span>
                <span>Industry Avg</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Safety Score</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">96.3%</span>
                  <span className="text-green-400 text-sm">+8% vs industry</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-3 rounded-full" style={{ width: '96.3%' }}></div>
                </div>
                <div className="flex-1 bg-gray-800 rounded-full h-3">
                  <div className="bg-gray-600 h-3 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Your Fleet</span>
                <span>Industry Avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}