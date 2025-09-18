import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Car, Users, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock parking zones data
const parkingZones = [
  {
    id: 1,
    name: "Zone A - Main Entrance",
    totalSpaces: 150,
    occupiedSpaces: 142,
    revenue: 1850,
    status: "high",
    trend: "+12%"
  },
  {
    id: 2,
    name: "Zone B - Shopping Center",
    totalSpaces: 200,
    occupiedSpaces: 156,
    revenue: 2340,
    status: "medium",
    trend: "+8%"
  },
  {
    id: 3,
    name: "Zone C - Office Building",
    totalSpaces: 100,
    occupiedSpaces: 89,
    revenue: 1120,
    status: "medium", 
    trend: "+15%"
  },
  {
    id: 4,
    name: "Zone D - Residential",
    totalSpaces: 75,
    occupiedSpaces: 12,
    revenue: 180,
    status: "low",
    trend: "-2%"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "high":
      return "bg-destructive/10 text-destructive border-destructive/20";
    case "medium":
      return "bg-accent-gold/10 text-accent-gold border-accent-gold/20";
    case "low":
      return "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getOccupancyPercentage = (occupied: number, total: number) => {
  return Math.round((occupied / total) * 100);
};

export function ParkingZones() {
  return (
    <Card className="card-premium p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold font-display mb-2">Parking Zones</h3>
        <p className="text-muted-foreground">Real-time zone monitoring</p>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {parkingZones.map((zone, index) => {
          const occupancyPercentage = getOccupancyPercentage(zone.occupiedSpaces, zone.totalSpaces);
          
          return (
            <div
              key={zone.id}
              className={cn(
                "p-4 rounded-xl border bg-gradient-to-r from-card to-card/50 hover:shadow-md transition-all duration-300 slide-in",
                zone.status === "high" && "border-destructive/20 hover:border-destructive/30",
                zone.status === "medium" && "border-accent-gold/20 hover:border-accent-gold/30",
                zone.status === "low" && "border-accent-emerald/20 hover:border-accent-emerald/30"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{zone.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {zone.occupiedSpaces}/{zone.totalSpaces} spaces occupied
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={getStatusColor(zone.status)}
                  >
                    {occupancyPercentage}% full
                  </Badge>
                  {zone.status === "high" && (
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  )}
                </div>
              </div>

              {/* Occupancy Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Occupancy</span>
                  <span className="font-medium">{occupancyPercentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={cn(
                      "h-2 rounded-full transition-all duration-500",
                      zone.status === "high" && "bg-gradient-to-r from-destructive to-destructive/80",
                      zone.status === "medium" && "bg-gradient-to-r from-accent-gold to-accent-gold/80", 
                      zone.status === "low" && "bg-gradient-to-r from-accent-emerald to-accent-emerald/80"
                    )}
                    style={{ width: `${occupancyPercentage}%` }}
                  />
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Car className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{zone.occupiedSpaces} vehicles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-accent-emerald" />
                    <span className="text-accent-emerald font-medium">{zone.trend}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-lg">${zone.revenue}</div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}