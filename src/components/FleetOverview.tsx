import React from 'react';
import { Truck, Battery, Fuel, Clock, AlertTriangle, TrendingUp, MapPin } from 'lucide-react';
import { fleetMetrics, mockForklifts } from '../data/mockData';

export default function FleetOverview() {
  const metricsCards = [
    {
      title: 'Total Fleet',
      value: fleetMetrics.totalUnits,
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      trend: '+2.3%'
    },
    {
      title: 'Active Units',
      value: fleetMetrics.activeUnits,
      icon: Battery,
      color: 'from-green-500 to-emerald-500',
      trend: '+5.1%'
    },
    {
      title: 'Avg Efficiency',
      value: `${fleetMetrics.avgEfficiency}%`,
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      trend: '+1.2%'
    },
    {
      title: 'Downtime Hours',
      value: fleetMetrics.totalDowntime,
      icon: Clock,
      color: 'from-amber-500 to-orange-500',
      trend: '-8.4%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Fleet Overview</h1>
          <p className="text-gray-400">Real-time insights into your forklift operations</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Live Data</span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsCards.map((metric, index) => {
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
                <span className="text-green-400 text-sm font-medium">{metric.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
              <p className="text-gray-400 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Fleet Status Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Fleet Status Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Active Units</span>
              </div>
              <span className="text-white font-semibold">{fleetMetrics.activeUnits}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(fleetMetrics.activeUnits / fleetMetrics.totalUnits) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Idle Units</span>
              </div>
              <span className="text-white font-semibold">{fleetMetrics.idleUnits}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(fleetMetrics.idleUnits / fleetMetrics.totalUnits) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <span className="text-gray-300">Maintenance</span>
              </div>
              <span className="text-white font-semibold">{fleetMetrics.maintenanceUnits}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(fleetMetrics.maintenanceUnits / fleetMetrics.totalUnits) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors duration-200">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Track Fleet</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-violet-500/10 border border-violet-500/20 rounded-lg hover:bg-violet-500/20 transition-colors duration-200">
              <AlertTriangle className="w-5 h-5 text-violet-400" />
              <span className="text-violet-400 font-medium">View Alerts</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors duration-200">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Performance Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Active Fleet Units</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockForklifts.filter(f => f.status === 'Active').map((forklift) => (
            <div key={forklift.id} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-medium">{forklift.id}</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  forklift.fuelType === 'Electric' 
                    ? forklift.batteryLevel! > 50 ? 'bg-green-500' : 'bg-amber-500'
                    : forklift.fuelLevel! > 50 ? 'bg-green-500' : 'bg-amber-500'
                }`}></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">{forklift.brand} {forklift.model}</span>
                  <span className="text-gray-300">{forklift.capacity} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-gray-300">{forklift.location.split(' - ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    {forklift.fuelType === 'Electric' ? 'Battery' : 'Fuel'}
                  </span>
                  <span className={`font-medium ${
                    (forklift.batteryLevel || forklift.fuelLevel || 0) > 50 
                      ? 'text-green-400' 
                      : 'text-amber-400'
                  }`}>
                    {forklift.fuelType === 'Electric' ? forklift.batteryLevel : forklift.fuelLevel}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}