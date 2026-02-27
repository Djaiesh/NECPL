import leaderJaiesh from "@/assets/leader-jaiesh.jpg";
import leaderRajesh from "@/assets/leader-rajesh.jpg";
import leaderPriya from "@/assets/leader-priya.jpg";

const leaders = [
  { name: "D. Jaiesh Kumar", role: "Managing Director", desc: "20+ years of experience in structural engineering and project management.", image: leaderJaiesh },
  { name: "Rajesh Sharma", role: "Chief Engineer", desc: "Expert in steel structures and telecom tower design.", image: leaderRajesh },
  { name: "Priya Reddy", role: "Head of Architecture", desc: "Specialist in modern architectural design and sustainable building.", image: leaderPriya },
];

const Leadership = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Our Leadership Team
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground">{l.name}</h3>
                <p className="text-gold text-sm font-heading font-medium mt-1">{l.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
