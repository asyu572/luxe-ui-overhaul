import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, DollarSign, Plus, Navigation, Camera } from "lucide-react";

export function CurrentParking() {
  const currentSession = {
    location: "City Mall Parking - Level 2, Spot A-45",
    startTime: "2:30 PM",
    duration: "1h 23m",
    cost: "$4.50",
    endTime: "4:00 PM",
    timeLeft: "37 minutes",
    status: "active"
  };

  return (
    <Card className="card-premium p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-display font-bold">Current Parking</h2>
          <Badge variant="default" className="animate-pulse bg-accent-emerald text-white border-accent-emerald">
            Active
          </Badge>
        </div>
        <p className="text-muted-foreground">Your ongoing parking session</p>
      </div>

      <div className="space-y-6">
        {/* Location & Spot */}
        <div className="bg-gradient-to-r from-primary/10 to-accent-emerald/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">Parking Location</h3>
              <p className="text-muted-foreground text-sm">{currentSession.location}</p>
            </div>
            <Button variant="outline" size="sm">
              <Navigation className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Time & Cost Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card/50 rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-accent-gold" />
              <span className="text-sm font-medium text-muted-foreground">Time Remaining</span>
            </div>
            <div className="text-xl font-bold text-accent-gold">{currentSession.timeLeft}</div>
            <div className="text-xs text-muted-foreground">Until {currentSession.endTime}</div>
          </div>

          <div className="bg-card/50 rounded-xl p-4 border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Current Cost</span>
            </div>
            <div className="text-xl font-bold text-primary">{currentSession.cost}</div>
            <div className="text-xs text-muted-foreground">Duration: {currentSession.duration}</div>
          </div>
        </div>

        {/* Session Timeline */}
        <div className="bg-muted/30 rounded-xl p-4">
          <h4 className="font-semibold mb-3">Session Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Started:</span>
              <span className="font-medium">{currentSession.startTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Scheduled End:</span>
              <span className="font-medium">{currentSession.endTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rate:</span>
              <span className="font-medium">$3.50/hour</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="premium" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Extend Time
          </Button>
          <Button variant="outline" className="w-full">
            <Camera className="h-4 w-4 mr-2" />
            Take Photo
          </Button>
        </div>

        <Button variant="coral" size="lg" className="w-full">
          End Parking Session
        </Button>
      </div>
    </Card>
  );
}