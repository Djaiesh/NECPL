import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroIndustry from "@/assets/hero-industry.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroTelecom from "@/assets/hero-telecom.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroEngineers from "@/assets/hero-engineers.jpg";
import rescom from "@/assets/rescom.jpg"
import ware from "@/assets/warehouse.jpg"


import { Building, Radio, Factory, Sun, Landmark } from "lucide-react";

const sectors = [
  {
    id: "residential", icon: Building, title: "Residential & Commercial Building", image: rescom,
    desc: "We provide comprehensive structural engineering and Project Management Consultancy (PMC) specifically tailored for residential and commercial builders. Utilizing advanced industry software such as Autodesk Revit, Navisworks, and ETABS, we deliver innovative, cost-effective, and customized designs for complex building projects. Our team, which includes experts from prestigious institutions like IIT and NIT, brings between 5 to 30 years of experience to ensure technical excellence in every structure we design.",
    capabilities: ["High-Rise Buildings", "Residential Villas", "Commercial Complexes", "Shopping Malls", "Office Towers"],
  },
  {
    id: "towers", icon: Radio, title: "Power Transmission & Communication Tower", image: heroTelecom,
    desc: "Our services include the full lifecycle management—survey, design, detailing, and auditing—of critical tower infrastructure across India. We manage high-volume projects, including over 100 R-Jio Towers and 50 TATA Communication Towers, as well as OPTCL 220Kv Transmission Towers. By leveraging specialized tools like Tower CAD and STAAD.Pro, we ensure the structural integrity of everything from FM angular towers to mobile communication and roof-top mast structures.",
    capabilities: ["Self-Supporting Towers", "Guyed Masts", "Monopoles", "Transmission Line Towers", "Rooftop Towers","Power Transmission Towers"],
  },
  {
    id: "industrials", icon: Factory, title: "Industrials", image: ware,
    desc: "We offer robust engineering solutions for industrial applications, focusing on the development of precise General Arrangement (GA) and highly detailed Fabrication Drawings for steel structures. Our industrial expertise extends to rigorous site audits, where we physically inspect welding, check for structural damages, and verify the use of approved grades for nuts, bolts, and washers. We ensure that every industrial component is fixed as per technical drawings to guarantee operational safety and durability",
    capabilities: ["Factory Buildings", "Warehouses", "PEB Structures", "Process Plants", "Cold Storage"],
  },
  {
    id: "solar", icon: Sun, title: "Solar Energy", image: heroSolar,
    desc: "We provide specialized structural design and analysis for renewable energy infrastructure, ensuring that mounting systems are both resilient and efficient. A key highlight of our work in this sector includes the successful design and implementation of 2HP and 3HP Solar Pump Structures for the Chhattisgarh Renewable Energy Development Agency (CREDA). Our engineering approach focuses on creating sustainable solutions that meet the unique environmental demands of solar utility projects.",
    capabilities: ["Ground-Mounted Solar", "Rooftop Solar", "Solar Carports", "Floating Solar", "Tracker Systems"],
  },
  {
    id: "infrastructure", icon: Landmark, title: "Infrastructure", image: heroConstruction,
    desc: "We provide end-to-end engineering services for large-scale public infrastructure projects, partnering with government bodies and private developers to build the backbone of modern cities. Our expertise spans the design and management of Bridges & Flyovers, Highway Structures, and Public Buildings. Additionally, we deliver specialized engineering for essential utility systems, including Drainage Systems and Water Treatment Facilities, ensuring durable and efficient public works that meet stringent regulatory standards.",
    capabilities: ["Bridges & Flyovers", "Highway Structures", "Water Treatment Plants", "Drainage Systems", "Public Buildings"],
  },
];

const IndustrySector = () => {
  return (
    <Layout>
      <PageHero image={heroIndustry} title="Industry Sectors" subtitle="Serving diverse sectors with specialized engineering expertise." />

      <section className="section-padding">
        <div className="container mx-auto space-y-12">
          {sectors.map((s, idx) => (
            <div key={s.id} id={s.id} className={`scroll-mt-20 grid md:grid-cols-2 gap-8 items-center`}>
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.capabilities.map((c) => (
                    <span key={c} className="text-xs font-heading font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground">{c}</span>
                  ))}
                </div>
              </div>
              <div className={`rounded-lg overflow-hidden aspect-video ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default IndustrySector;
