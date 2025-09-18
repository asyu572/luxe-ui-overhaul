import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, DollarSign, Filter } from "lucide-react";

const nearbySpots = [
  {
    id: 1,
    name: "City Mall Parking",
    distance: "0.2 miles",
    price: "$3/hour",
    availability: 45,
    total: 200,
    rating: 4.8,
    walkTime: "2 min walk"
  },
  {
    id: 2,
    name: "Downtown Plaza",
    distance: "0.4 miles",
    price: "$4/hour",
    availability: 12,
    total: 150,
    rating: 4.6,
    walkTime: "5 min walk"
  },
  {
    id: 3,
    name: "Business District",
    distance: "0.6 miles",
    price: "$5/hour",
    availability: 89,
    total: 300,
    rating: 4.9,
    walkTime: "8 min walk"
  }
];

export function ParkingSpotFinder() {
  const [searchLocation, setSearchLocation] = useState("");

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "bg-accent-emerald";
    if (percentage > 20) return "bg-accent-gold";
    return "bg-accent-coral";
  };

  const getAvailabilityStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "High";
    if (percentage > 20) return "Medium";
    return "Low";
  };

  return (
    <Card className="card-premium p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold mb-2">Find Parking</h2>
        <p className="text-muted-foreground">Discover available spots near you</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search location or address..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="input-premium pl-11 pr-16"
        />
        <Button 
          size="sm" 
          variant="premium"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Parking Spots List */}
      <div className="space-y-4">
        {nearbySpots.map((spot, index) => (
          <div
            key={spot.id}
            className="slide-in bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg mb-1">{spot.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {spot.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {spot.walkTime}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{spot.price}</div>
                <div className="text-xs text-muted-foreground">per hour</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(spot.availability, spot.total)}`}></div>
                <span className="text-sm font-medium">
                  {spot.availability}/{spot.total} available
                </span>
                <Badge variant="outline" className="text-xs">
                  {getAvailabilityStatus(spot.availability, spot.total)}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">★ {spot.rating}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="emerald" size="sm" className="flex-1">
                <Navigation className="h-4 w-4 mr-2" />
                Navigate
              </Button>
              <Button variant="premium" size="sm" className="flex-1">
                Reserve Spot
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}