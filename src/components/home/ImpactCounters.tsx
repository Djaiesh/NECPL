import { useEffect, useRef, useState } from "react";
import { Briefcase, Clock, Users, Globe } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 350, suffix: "+", label: "Projects Delivered" },
  { icon: Clock, value: 11, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients" },
  { icon: Globe, value: 8, suffix: "", label: "Countries Served" },
];

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const CounterCard = ({ icon: Icon, value, suffix, label, inView }: { icon: any; value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="text-center">
      <Icon className="h-8 w-8 text-gold mx-auto mb-3" />
      <div className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">
        {count}{suffix}
      </div>
      <div className="text-navy-foreground/70 text-sm mt-1">{label}</div>
    </div>
  );
};

const ImpactCounters = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mt-2">
            Impact in Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <CounterCard key={i} {...s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
