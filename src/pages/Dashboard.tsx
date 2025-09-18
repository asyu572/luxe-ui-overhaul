import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";
import { ParkingSpotFinder } from "@/components/user/ParkingSpotFinder";
import { CurrentParking } from "@/components/user/CurrentParking";
import { QuickStats } from "@/components/user/QuickStats";
import { RecentActivity } from "@/components/user/RecentActivity";
import { Bell, Search, QrCode, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/parking-hero.jpg";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background to-secondary/20">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="p-2 hover:bg-muted rounded-lg transition-colors" />
                <div className="hidden md:block">
                  <h1 className="text-2xl font-display font-semibold">Home</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, John</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative hidden lg:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search parking locations..." 
                    className="pl-10 w-64 bg-muted/50 border-0 focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-primary/20"
                  />
                </div>
                
                <Button variant="premium" size="icon">
                  <QrCode className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                </Button>
                
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent-emerald flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                  JD
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="relative h-48 lg:h-56 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent-emerald/80"></div>
            </div>
            <div className="relative z-10 h-full flex items-center px-6">
              <div className="text-white">
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-3">
                  Find Your Perfect Spot
                </h1>
                <p className="text-lg lg:text-xl text-white/90 font-medium max-w-2xl">
                  Discover available parking spaces instantly. Reserve, pay, and navigate with ease using our smart parking solution.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 space-y-8">
            {/* Quick Stats */}
            <div className="slide-in">
              <QuickStats />
            </div>

            {/* Main Features Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="slide-in" style={{ animationDelay: '200ms' }}>
                <ParkingSpotFinder />
              </div>
              <div className="slide-in" style={{ animationDelay: '400ms' }}>
                <CurrentParking />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="slide-in" style={{ animationDelay: '600ms' }}>
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}