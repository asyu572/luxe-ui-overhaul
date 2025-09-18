import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock revenue data
const revenueData = [
  { day: 'Mon', revenue: 12400, vehicles: 340 },
  { day: 'Tue', revenue: 15600, vehicles: 420 },
  { day: 'Wed', revenue: 18900, vehicles: 510 },
  { day: 'Thu', revenue: 16200, vehicles: 440 },
  { day: 'Fri', revenue: 21300, vehicles: 580 },
  { day: 'Sat', revenue: 19800, vehicles: 520 },
  { day: 'Sun', revenue: 14700, vehicles: 390 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 rounded-xl border border-white/20 shadow-xl">
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-accent-emerald font-medium">
          Revenue: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-primary font-medium">
          Vehicles: {payload[0].payload.vehicles}
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <Card className="card-premium p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold font-display mb-2">Weekly Revenue</h3>
        <p className="text-muted-foreground">Revenue trends across the week</p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="revenue" 
              fill="url(#revenueGradient)" 
              radius={[8, 8, 0, 0]}
              className="hover:opacity-80 transition-opacity duration-200"
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent-emerald))" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}