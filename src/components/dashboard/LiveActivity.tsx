import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, ArrowRight, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock live activity data
const liveActivities = [
  {
    id: 1,
    type: 'entry',
    vehicle: 'ABC-1234',
    zone: 'Zone A - Level 1',
    timestamp: '2 minutes ago',
    status: 'active'
  },
  {
    id: 2,
    type: 'exit',
    vehicle: 'XYZ-5678',
    zone: 'Zone B - Level 2',
    timestamp: '5 minutes ago',
    status: 'completed',
    duration: '2h 15m',
    amount: '$12.50'
  },
  {
    id: 3,
    type: 'entry',
    vehicle: 'DEF-9012',
    zone: 'Zone C - Ground',
    timestamp: '8 minutes ago',
    status: 'active'
  },
  {
    id: 4,
    type: 'payment',
    vehicle: 'GHI-3456',
    zone: 'Zone A - Level 3',
    timestamp: '12 minutes ago',
    status: 'completed',
    amount: '$8.75'
  },
  {
    id: 5,
    type: 'entry',
    vehicle: 'JKL-7890',
    zone: 'Zone D - Basement',
    timestamp: '15 minutes ago',
    status: 'active'
  }
];

const ActivityIcon = ({ type }: { type: string }) => {
  const iconClasses = "w-4 h-4";
  
  switch (type) {
    case 'entry':
      return <ArrowRight className={cn(iconClasses, "rotate-90 text-accent-emerald")} />;
    case 'exit':
      return <ArrowRight className={cn(iconClasses, "-rotate-90 text-primary")} />;
    case 'payment':
      return <Car className={cn(iconClasses, "text-accent-gold")} />;
    default:
      return <Car className={iconClasses} />;
  }
};

const getStatusBadge = (type: string, status: string) => {
  if (type === 'entry' || status === 'active') {
    return <Badge variant="outline" className="bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20">Active</Badge>;
  }
  if (type === 'exit' || type === 'payment') {
    return <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Completed</Badge>;
  }
  return <Badge variant="outline">Unknown</Badge>;
};

export function LiveActivity() {
  return (
    <Card className="card-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold font-display mb-2">Live Activity</h3>
          <p className="text-muted-foreground">Real-time parking events</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-accent-emerald">Live</span>
        </div>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
        {liveActivities.map((activity, index) => (
          <div 
            key={activity.id}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md slide-in",
              activity.status === 'active' 
                ? "bg-accent-emerald/5 border-accent-emerald/20" 
                : "bg-card border-border/50"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30">
              <ActivityIcon type={activity.type} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-foreground">{activity.vehicle}</span>
                {getStatusBadge(activity.type, activity.status)}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{activity.zone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>

            {(activity.duration || activity.amount) && (
              <div className="text-right">
                {activity.duration && (
                  <div className="text-sm font-medium text-foreground">{activity.duration}</div>
                )}
                {activity.amount && (
                  <div className="text-lg font-bold text-accent-emerald">{activity.amount}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}