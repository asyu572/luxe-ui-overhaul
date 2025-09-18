import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign, MoreVertical } from "lucide-react";

const recentSessions = [
  {
    id: 1,
    location: "City Mall Parking",
    date: "Today, 2:30 PM",
    duration: "1h 23m",
    cost: "$4.50",
    status: "active",
    spot: "Level 2, A-45"
  },
  {
    id: 2,
    location: "Downtown Plaza",
    date: "Yesterday, 10:15 AM",
    duration: "3h 45m",
    cost: "$15.00",
    status: "completed",
    spot: "Street Level, B-12"
  },
  {
    id: 3,
    location: "Business District",
    date: "Dec 16, 4:20 PM",
    duration: "2h 10m",
    cost: "$10.50",
    status: "completed",
    spot: "Level 1, C-08"
  },
  {
    id: 4,
    location: "Airport Parking",
    date: "Dec 15, 6:30 AM",
    duration: "8h 30m",
    cost: "$42.50",
    status: "completed",
    spot: "Long Term, E-156"
  }
];

export function RecentActivity() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default" className="animate-pulse bg-accent-emerald text-white border-accent-emerald">Active</Badge>;
      case 'completed':
        return <Badge variant="outline">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card className="card-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold mb-2">Recent Activity</h2>
          <p className="text-muted-foreground">Your parking history</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentSessions.map((session, index) => (
          <div
            key={session.id}
            className="slide-in bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{session.location}</h3>
                  {getStatusBadge(session.status)}
                </div>
                <p className="text-sm text-muted-foreground">{session.spot}</p>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{session.duration}</div>
                  <div className="text-xs text-muted-foreground">{session.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-bold text-primary">{session.cost}</div>
                  <div className="text-xs text-muted-foreground">Total cost</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">Rate</div>
                  <div className="text-xs text-muted-foreground">$4.00/hr</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}