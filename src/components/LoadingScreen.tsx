import { useEffect, useState } from "react";
import navyaLogo from "@/assets/navya-logo.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center transition-opacity duration-500">
      <img src={navyaLogo} alt="NAVYA" className="w-20 h-20 mb-6 animate-pulse" />
      <h1 className="font-heading font-bold text-2xl text-navy-foreground mb-2">NAVYA Engineering</h1>
      <p className="text-gold text-sm font-heading">Loading...</p>
      <div className="mt-6 w-48 h-1 bg-navy-foreground/20 rounded-full overflow-hidden">
        <div className="h-full bg-gold rounded-full animate-loading-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
