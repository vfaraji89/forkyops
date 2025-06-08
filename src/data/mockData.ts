import { Forklift, FleetMetrics, MaintenanceAlert, SafetyIncident, PerformanceData } from '../types';

export const mockForklifts: Forklift[] = [
  {
    id: 'FL001',
    model: 'E-80',
    brand: 'Toyota',
    capacity: 8000,
    fuelType: 'Electric',
    liftHeight: 240,
    status: 'Active',
    location: 'Warehouse A - Zone 1',
    batteryLevel: 87,
    hoursUsed: 1247,
    lastMaintenance: '2024-01-15',
    nextMaintenance: '2024-03-15',
    operatorId: 'OP001',
    efficiency: 94,
    safetyScore: 98,
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 'FL002',
    model: 'LP-60',
    brand: 'Hyster',
    capacity: 6000,
    fuelType: 'Propane',
    liftHeight: 220,
    status: 'Maintenance',
    location: 'Service Bay 2',
    fuelLevel: 45,
    hoursUsed: 2156,
    lastMaintenance: '2024-02-01',
    nextMaintenance: '2024-02-20',
    efficiency: 78,
    safetyScore: 92,
    coordinates: [40.7580, -73.9855]
  },
  {
    id: 'FL003',
    model: 'D-50',
    brand: 'Caterpillar',
    capacity: 5000,
    fuelType: 'Diesel',
    liftHeight: 200,
    status: 'Active',
    location: 'Warehouse B - Zone 3',
    fuelLevel: 72,
    hoursUsed: 890,
    lastMaintenance: '2024-01-08',
    nextMaintenance: '2024-04-08',
    operatorId: 'OP003',
    efficiency: 91,
    safetyScore: 96,
    coordinates: [40.7489, -73.9680]
  },
  {
    id: 'FL004',
    model: 'E-40',
    brand: 'Crown',
    capacity: 4000,
    fuelType: 'Electric',
    liftHeight: 180,
    status: 'Idle',
    location: 'Parking Area C',
    batteryLevel: 23,
    hoursUsed: 445,
    lastMaintenance: '2024-01-22',
    nextMaintenance: '2024-04-22',
    efficiency: 88,
    safetyScore: 99,
    coordinates: [40.7614, -73.9776]
  },
  {
    id: 'FL005',
    model: 'LP-80',
    brand: 'Yale',
    capacity: 8000,
    fuelType: 'Propane',
    liftHeight: 260,
    status: 'Active',
    location: 'Warehouse A - Zone 2',
    fuelLevel: 91,
    hoursUsed: 1678,
    lastMaintenance: '2024-01-29',
    nextMaintenance: '2024-04-29',
    operatorId: 'OP002',
    efficiency: 96,
    safetyScore: 94,
    coordinates: [40.7505, -73.9934]
  }
];

export const fleetMetrics: FleetMetrics = {
  totalUnits: 24,
  activeUnits: 18,
  idleUnits: 4,
  maintenanceUnits: 2,
  avgUtilization: 78.5,
  avgEfficiency: 89.2,
  totalDowntime: 14.5,
  safetyIncidents: 3
};

export const maintenanceAlerts: MaintenanceAlert[] = [
  {
    id: 'MA001',
    forkliftId: 'FL002',
    type: 'Predictive',
    priority: 'High',
    description: 'Hydraulic system pressure anomaly detected',
    estimatedCost: 850,
    dueDate: '2024-02-20',
    aiConfidence: 87
  },
  {
    id: 'MA002',
    forkliftId: 'FL004',
    type: 'Scheduled',
    priority: 'Medium',
    description: 'Battery inspection and cleaning required',
    estimatedCost: 120,
    dueDate: '2024-02-25',
    aiConfidence: 95
  },
  {
    id: 'MA003',
    forkliftId: 'FL001',
    type: 'Predictive',
    priority: 'Low',
    description: 'Tire wear pattern suggests alignment check',
    estimatedCost: 200,
    dueDate: '2024-03-05',
    aiConfidence: 73
  }
];

export const safetyIncidents: SafetyIncident[] = [
  {
    id: 'SI001',
    forkliftId: 'FL003',
    operatorId: 'OP003',
    type: 'Near collision',
    severity: 'Near Miss',
    timestamp: '2024-02-10T14:30:00Z',
    location: 'Warehouse B - Aisle 7',
    description: 'Proximity sensor triggered during backing maneuver'
  },
  {
    id: 'SI002',
    forkliftId: 'FL005',
    operatorId: 'OP002',
    type: 'Load instability',
    severity: 'Minor',
    timestamp: '2024-02-08T09:15:00Z',
    location: 'Loading Dock 3',
    description: 'Load shifted during transport, no damage reported'
  }
];

export const performanceData: PerformanceData[] = [
  { date: '2024-01-01', efficiency: 85, utilization: 72, fuelConsumption: 45, productivity: 88 },
  { date: '2024-01-08', efficiency: 87, utilization: 75, fuelConsumption: 43, productivity: 91 },
  { date: '2024-01-15', efficiency: 89, utilization: 78, fuelConsumption: 41, productivity: 89 },
  { date: '2024-01-22', efficiency: 91, utilization: 81, fuelConsumption: 39, productivity: 94 },
  { date: '2024-01-29', efficiency: 88, utilization: 76, fuelConsumption: 42, productivity: 92 },
  { date: '2024-02-05', efficiency: 93, utilization: 83, fuelConsumption: 38, productivity: 96 },
  { date: '2024-02-12', efficiency: 90, utilization: 79, fuelConsumption: 40, productivity: 93 }
];