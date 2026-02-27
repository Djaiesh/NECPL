import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroClients from "@/assets/hero-contact.jpg";

import ltLogo from "@/assets/lt-logo.jpg";
import airtel from "@/assets/logos/airtel.jpg";
import ongc from "@/assets/logos/ongc.jpg";
import bel from "@/assets/logos/bh.jpg";
import jindal from "@/assets/logos/jindal.jpg";
import lt from "@/assets/logos/lt.jpg";
import gtl from "@/assets/logos/gtl.jpg";
import power from "@/assets/logos/power.jpg";
import sify from "@/assets/logos/sify.jpg";
import tata from "@/assets/tata.jpg";
import avantell from "@/assets/logos/avantel.jpg";
import ht from "@/assets/logos/ht.jpg";
import amazon from "@/assets/logos/amazon.jpg";
import adree from "@/assets/logos/ardee.jpg";
import drdo from "@/assets/logos/DRDO.jpg";
import air from "@/assets/logos/AIR.jpg";
import more from "@/assets/logos/more.jpg";

import { Star, Quote, Building2 } from "lucide-react";

// Placeholder image - replace individual ones with actual company logos
const placeholderLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23e8e8e8' width='100' height='100'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23999'/%3E%3Cpath d='M30 70 Q50 55 70 70' fill='%23999'/%3E%3C/svg%3E";

const clients = [
  { name: "L&T Technology Services", logo: lt },
  { name: "GTL Infrastructure", logo: gtl },
  { name: "Sify", logo: sify },
  { name: "Airtel", logo: airtel },
  { name: "Avantel", logo: avantell },
  { name: "Amazon", logo: amazon },
  { name: "ONGC", logo: ongc },
  { name: "Bharat Electronics", logo: bel },
  { name: "Tata Communications", logo: tata },
  { name: "Jindal Power", logo: jindal },
  { name: "HT Media", logo: ht },
  { name: "Power Mech", logo: power },
  { name: "Ardee Engineering", logo: adree },
  { name: "DRDO", logo: drdo },
  { name: "All India Radio", logo: air },
  { name: "More", logo: more },
];

const testimonials = [
  { name: "Ramesh Patel", company: "Tata Projects", text: "NAVYA delivered exceptional structural design for our commercial complex. Their attention to detail and adherence to timelines was impressive.", rating: 5 },
  { name: "Sunita Verma", company: "Adani Green Energy", text: "Outstanding solar structure design services. The team optimized our foundation costs by 20% without compromising structural integrity.", rating: 5 },
  { name: "Kiran Reddy", company: "Bharti Airtel", text: "Professional telecom tower design and detailing services. NAVYA's expertise in tower structures is unmatched in the industry.", rating: 5 },
  { name: "Anil Sharma", company: "GMR Group", text: "Reliable PMC services with excellent project coordination and quality control. They helped us complete the project ahead of schedule.", rating: 4 },
];

const Clients = () => {
  return (
    <Layout>
      <PageHero image={heroClients} title="Our Clients" subtitle="Trusted by leading companies across India." />

      <section id="our-clients" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Clients We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center hover:border-gold hover:shadow-md transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
                  <img src={c.logo} alt={c.name} className="w-full h-full object-contain p-2" />
                </div>
                <span className="font-heading font-medium text-sm text-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="testimonials" className="section-padding bg-navy scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy-foreground mb-8 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-navy-foreground/5 rounded-lg p-6 border border-navy-foreground/10">
                <Quote className="h-8 w-8 text-gold/30 mb-3" />
                <p className="text-navy-foreground/80 italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`h-4 w-4 ${si < t.rating ? "text-gold fill-gold" : "text-navy-foreground/30"}`} />
                  ))}
                </div>
                <p className="font-heading font-semibold text-navy-foreground">{t.name}</p>
                <p className="text-gold text-sm">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto mt-16">
          <div className="border-t border-navy-foreground/20" />
        </div>
      </section> */}
    </Layout>
  );
};

export default Clients;
