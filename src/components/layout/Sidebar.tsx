import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Car, 
  CreditCard, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut, 
  ChevronLeft,
  ParkingSquare,
  Zap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: LayoutDashboard,
    description: "Overview & Analytics"
  },
  { 
    title: "Parking Zones", 
    url: "/zones", 
    icon: ParkingSquare,
    description: "Manage Areas"
  },
  { 
    title: "Live Monitoring", 
    url: "/monitoring", 
    icon: Car,
    description: "Real-time Status"
  },
  { 
    title: "Payments", 
    url: "/payments", 
    icon: CreditCard,
    description: "Billing & Revenue"
  },
  { 
    title: "Analytics", 
    url: "/analytics", 
    icon: BarChart3,
    description: "Reports & Insights"
  },
  { 
    title: "Users", 
    url: "/users", 
    icon: Users,
    description: "Customer Management"
  },
];

const bottomItems = [
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings,
    description: "System Config"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClasses = (path: string) => {
    const active = isActive(path);
    return cn(
      "group relative flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
      active 
        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    );
  };

  return (
    <Sidebar
      className="border-r border-border/50 bg-card/95 backdrop-blur-xl"
      variant="sidebar"
    >
      <SidebarContent className="p-4">
        {/* Logo & Brand */}
        <div className={cn(
          "flex items-center gap-3 px-3 py-4 mb-6",
          isCollapsed && "justify-center"
        )}>
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent-emerald rounded-xl shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-display text-xl font-bold text-gradient">
                GatelessPark
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Pro Management Suite
              </p>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Main Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses(item.url)}>
                      <item.icon className={cn(
                        "h-5 w-5 transition-all duration-300",
                        isActive(item.url) && "scale-110"
                      )} />
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground/80 truncate">
                            {item.description}
                          </div>
                        </div>
                      )}
                      {isActive(item.url) && !isCollapsed && (
                        <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Navigation */}
        <div className="mt-auto pt-4 border-t border-border/50">
          <SidebarMenu className="space-y-1">
            {bottomItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.url} className={getNavClasses(item.url)}>
                    <item.icon className="h-5 w-5" />
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground/80 truncate">
                          {item.description}
                        </div>
                      </div>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          {/* User Profile */}
          <div className={cn(
            "mt-4 p-3 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50",
            isCollapsed && "p-2"
          )}>
            {!isCollapsed ? (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-accent-emerald flex items-center justify-center text-white font-semibold text-sm">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">John Doe</div>
                  <div className="text-xs text-muted-foreground">System Admin</div>
                </div>
                <button className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors">
                  <LogOut className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent-emerald flex items-center justify-center text-white font-semibold text-xs">
                  JD
                </div>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}