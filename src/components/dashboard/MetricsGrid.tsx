import { Car, DollarSign, Clock, TrendingUp, Users, MapPin } from "lucide-react";
import { StatsCard } from "./StatsCard";

// Mock data - in real app this would come from API
const metricsData = {
  activeVehicles: 1247,
  totalRevenue: 84650,
  avgParkingTime: "2h 15m",
  occupancyRate: 87.3,
  registeredUsers: 8952,
  parkingZones: 24
};

const changes = {
  activeVehicles: { value: "+12.3%", trend: "up" as const },
  totalRevenue: { value: "+8.7%", trend: "up" as const },
  avgParkingTime: { value: "-5.2%", trend: "down" as const },
  occupancyRate: { value: "+3.1%", trend: "up" as const },
  registeredUsers: { value: "+15.6%", trend: "up" as const },
  parkingZones: { value: "+2", trend: "up" as const }
};

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Active Vehicles"
        value={metricsData.activeVehicles.toLocaleString()}
        change={changes.activeVehicles}
        icon={Car}
        iconColor="primary"
      />
      
      <StatsCard
        title="Daily Revenue"
        value={`$${metricsData.totalRevenue.toLocaleString()}`}
        change={changes.totalRevenue}
        icon={DollarSign}
        iconColor="emerald"
      />
      
      <StatsCard
        title="Avg. Parking Time"
        value={metricsData.avgParkingTime}
        change={changes.avgParkingTime}
        icon={Clock}
        iconColor="coral"
      />
      
      <StatsCard
        title="Occupancy Rate"
        value={`${metricsData.occupancyRate}%`}
        change={changes.occupancyRate}
        icon={TrendingUp}
        iconColor="gold"
      />
      
      <StatsCard
        title="Registered Users"
        value={metricsData.registeredUsers.toLocaleString()}
        change={changes.registeredUsers}
        icon={Users}
        iconColor="primary"
      />
      
      <StatsCard
        title="Parking Zones"
        value={metricsData.parkingZones}
        change={changes.parkingZones}
        icon={MapPin}
        iconColor="emerald"
      />
    </div>
  );
}