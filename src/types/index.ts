export interface Forklift {
  id: string;
  model: string;
  brand: string;
  capacity: number;
  fuelType: 'Electric' | 'Propane' | 'Diesel';
  liftHeight: number;
  status: 'Active' | 'Maintenance' | 'Idle';
  location: string;
  batteryLevel?: number;
  fuelLevel?: number;
  hoursUsed: number;
  lastMaintenance: string;
  nextMaintenance: string;
  operatorId?: string;
  efficiency: number;
  safetyScore: number;
  coordinates: [number, number];
}

export interface FleetMetrics {
  totalUnits: number;
  activeUnits: number;
  idleUnits: number;
  maintenanceUnits: number;
  avgUtilization: number;
  avgEfficiency: number;
  totalDowntime: number;
  safetyIncidents: number;
}

export interface MaintenanceAlert {
  id: string;
  forkliftId: string;
  type: 'Scheduled' | 'Predictive' | 'Emergency';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  estimatedCost: number;
  dueDate: string;
  aiConfidence: number;
}

export interface SafetyIncident {
  id: string;
  forkliftId: string;
  operatorId: string;
  type: string;
  severity: 'Near Miss' | 'Minor' | 'Major' | 'Critical';
  timestamp: string;
  location: string;
  description: string;
}

export interface PerformanceData {
  date: string;
  efficiency: number;
  utilization: number;
  fuelConsumption: number;
  productivity: number;
}

export interface NavSection {
  id: string;
  title: string;
  icon: string;
  component: string;
}