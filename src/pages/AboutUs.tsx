import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroAbout from "@/assets/about-hero.jpg";
import { Target, Eye, Award, Users, Building2, Globe } from "lucide-react";

const impacts = [
  { icon: Building2, value: "350+", label: "Projects Completed" },
  { icon: Users, value: "200+", label: "Satisfied Clients" },
  { icon: Globe, value: "8", label: "Countries Served" },
  { icon: Award, value: "15+", label: "Industry Awards" },
];

const AboutUs = () => {
  return (
    <Layout>
      <PageHero image={heroAbout} title="About Us" subtitle="Learn about our journey, vision, and the team driving engineering excellence." />

      {/* About the Company */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            {/* <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Know NAVYA</span> */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">About NAVYA Engineering</h2>
          </div>
          <div className="max-w-6xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              NAVYA Engineering Consultant Pvt. Ltd. is a premier engineering consultancy firm headquartered in Hyderabad, India. With over 15 years of proven expertise and excellence, we have established ourselves as a trusted partner for engineering solutions across multiple industry verticals.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our firm specializes in comprehensive engineering services including structural design, architectural solutions, project management consulting (PMC), MEP services, and construction management. We serve a diverse clientele ranging from Fortune 500 companies to emerging enterprises across 8 countries.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              What sets us apart is our commitment to innovation, sustainability, and quality. Our team of experienced engineers, architects, and consultants leverages cutting-edge software tools and industry best practices to deliver cost-effective and innovative solutions tailored to each project's unique requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              From residential and commercial buildings to solar power plants, telecom towers, and industrial infrastructure projects, NAVYA brings technical excellence, meticulous planning, and timely execution to every assignment. We believe in building long-term relationships with our clients through transparency, accountability, and superior service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To deliver superior, customized, and cost-effective engineering solutions through technical excellence, innovation, and a deeply ingrained culture of integrity and safety.</p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To be one of the top 10 most respected and professionally managed engineering design and project management consulting companies in India. We strive to be the firm that clients prefer, contractors recommend, and employees are proud of.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impacts */}
      <section id="impacts" className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">Our Reach</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-foreground mt-2">Our Impacts</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((s, i) => (
              <div key={i} className="text-center">
                <s.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-4xl font-heading font-bold text-navy-foreground">{s.value}</div>
                <div className="text-navy-foreground/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Company Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Why Choose NAVYA?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-muted-foreground"><strong>Experienced Team:</strong> Engineers and architects with 15+ years of combined expertise</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-muted-foreground"><strong>Quality Assurance:</strong> Rigorous quality checks and compliance with international standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-muted-foreground"><strong>Innovation:</strong> Cutting-edge technology and sustainable engineering solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-muted-foreground"><strong>On-time Delivery:</strong> Proven track record of meeting deadlines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold mt-1">✓</span>
                  <span className="text-muted-foreground"><strong>Client-Centric:</strong> Dedicated support and personalized solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="space-y-4">
                <div className="bg-card p-5 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Excellence</h4>
                  <p className="text-muted-foreground text-sm">Commitment to delivering superior quality in every project, every time.</p>
                </div>
                <div className="bg-card p-5 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Integrity</h4>
                  <p className="text-muted-foreground text-sm">Operating with transparency, honesty, and accountability in all business dealings.</p>
                </div>
                <div className="bg-card p-5 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Innovation</h4>
                  <p className="text-muted-foreground text-sm">Embracing new technologies and methodologies to provide cutting-edge solutions.</p>
                </div>
                <div className="bg-card p-5 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Sustainability</h4>
                  <p className="text-muted-foreground text-sm">Building a sustainable future through environmentally responsible engineering practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
