import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Mission & Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver superior, customized, and cost-effective engineering solutions through technical excellence, innovation, and a deeply ingrained culture of integrity and safety.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be one of the top 10 most respected and professionally managed engineering design and project management consulting companies in India. We strive to be the firm that clients prefer, contractors recommend, and employees are proud of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
