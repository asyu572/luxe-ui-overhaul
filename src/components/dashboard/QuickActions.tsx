import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Car, CreditCard, BarChart3, Settings, Download } from "lucide-react";

const quickActions = [
  {
    title: "Add New Zone",
    description: "Create parking area",
    icon: Plus,
    variant: "premium" as const,
    action: "add-zone"
  },
  {
    title: "View Reports",
    description: "Analytics dashboard",
    icon: BarChart3,
    variant: "emerald" as const,
    action: "reports"
  },
  {
    title: "Process Payments",
    description: "Billing management",
    icon: CreditCard,
    variant: "gold" as const,
    action: "payments"
  },
  {
    title: "Export Data",
    description: "Download reports",
    icon: Download,
    variant: "coral" as const,
    action: "export"
  }
];

export function QuickActions() {
  const handleAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    // In a real app, this would trigger the appropriate action
  };

  return (
    <Card className="card-premium p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold font-display mb-2">Quick Actions</h3>
        <p className="text-muted-foreground">Frequently used operations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quickActions.map((action, index) => (
          <div 
            key={action.action}
            className="slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Button
              variant={action.variant}
              size="lg"
              onClick={() => handleAction(action.action)}
              className="w-full h-auto p-4 flex-col gap-3 group"
            >
              <action.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="font-semibold text-base">{action.title}</div>
                <div className="text-sm opacity-90">{action.description}</div>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}