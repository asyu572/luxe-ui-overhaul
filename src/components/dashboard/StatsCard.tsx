import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon: LucideIcon;
  iconColor?: 'primary' | 'emerald' | 'gold' | 'coral';
  className?: string;
  children?: ReactNode;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  iconColor = 'primary',
  className,
  children 
}: StatsCardProps) {
  const iconColorClasses = {
    primary: "bg-gradient-to-r from-primary to-primary-hover text-white",
    emerald: "bg-gradient-to-r from-accent-emerald to-emerald-600 text-white", 
    gold: "bg-gradient-to-r from-accent-gold to-yellow-500 text-white",
    coral: "bg-gradient-to-r from-accent-coral to-orange-500 text-white"
  };

  const changeColorClasses = {
    up: "text-accent-emerald bg-accent-emerald/10",
    down: "text-destructive bg-destructive/10", 
    neutral: "text-muted-foreground bg-muted"
  };

  return (
    <Card className={cn(
      "card-premium p-6 group hover:scale-[1.02] transition-all duration-300",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            {title}
          </p>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-3xl font-bold font-display tracking-tight">
              {value}
            </h3>
            {change && (
              <span className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold",
                changeColorClasses[change.trend]
              )}>
                {change.value}
              </span>
            )}
          </div>
          {children}
        </div>
        
        <div className={cn(
          "flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110",
          iconColorClasses[iconColor]
        )}>
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </Card>
  );
}