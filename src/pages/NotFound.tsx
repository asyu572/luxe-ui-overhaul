import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 p-6">
      <div className="text-center max-w-md mx-auto slide-in">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent-emerald/20 flex items-center justify-center">
            <Search className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-6xl font-display font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-3">Page Not Found</h2>
          <p className="text-muted-foreground leading-relaxed">
            Looks like you've ventured into uncharted parking territory. 
            The page you're looking for doesn't exist in our system.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 hover:bg-primary/5"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
