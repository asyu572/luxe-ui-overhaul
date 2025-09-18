import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, MapPin, Star } from "lucide-react";

const stats = [
  {
    title: "Today's Parking",
    value: "2h 15m",
    change: "+15m from yesterday",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "This Month",
    value: "$127.50",
    change: "-12% from last month",
    icon: DollarSign,
    color: "text-accent-emerald",
    bgColor: "bg-accent-emerald/10"
  },
  {
    title: "Locations Used",
    value: "8",
    change: "2 new this month",
    icon: MapPin,
    color: "text-accent-gold",
    bgColor: "bg-accent-gold/10"
  },
  {
    title: "Avg Rating",
    value: "4.8",
    change: "★★★★★",
    icon: Star,
    color: "text-accent-coral",
    bgColor: "bg-accent-coral/10"
  }
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title}
          className="card-premium p-4 slide-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {stat.title}
              </p>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className={`text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {stat.change}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}