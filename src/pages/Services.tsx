import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroServices from "@/assets/hero-services.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import heroTelecom from "@/assets/hero-telecom.jpg";
import heroEngineers from "@/assets/hero-engineers.jpg";
import arch from "@/assets/arch.jpeg";
import tend from "@/assets/tend.jpeg";
import str from "@/assets/str.jpeg";
import det_drf from "@/assets/det&drf.jpeg";
import audit from "@/assets/audit.jpeg";
import consul from "@/assets/consul.jpeg";
import pmc from "@/assets/pmc.jpeg";
import mep from "@/assets/mep.jpeg";
import quantity from "@/assets/quantity.jpeg";

import { PenTool, Building2, HardHat, Calculator, Zap, ClipboardCheck } from "lucide-react";

const services = [
  {
    id: "architecture",
    icon: PenTool,
    title: "Architecture Designs",
    image: arch,
    desc: "We have successfully delivered architectural planning and design services for industrial, commercial, and institutional projects. Our scope includes layout planning, building design coordination, MEP integration, and stability certification across diverse developments.",
    features: ["School Buildings","Industrial Buildings","Function Halls","Retail Layouts","Factory Planning"],
  },
  {
    id: "structural",
    title: "Structural Design & Detailing",
    icon: Building2,
    image: heroEngineers,
    desc: "Comprehensive structural engineering services including analysis, design, and detailed drafting for all types of structures.",
    features: ["RCC & Steel Structure Design", "Foundation Design", "Seismic Analysis", "Wind Load Analysis"],
    sub: [
      { id: "structural-design", title: "Structural Design", image: str, desc: "We provide comprehensive structural analysis and design solutions for buildings, towers, industrial structures, and infrastructure projects using advanced engineering software. Our experience covers communication towers, transmission systems, solar structures, and complex steel frameworks.", features: ["Communication Towers", "Power Transmission Towers", "Solar Structures", "Bridge Structures"] },
      { id: "detailing", title: "Detailing & Drafting", image: det_drf, desc: "We deliver precise structural detailing and fabrication-ready drawings for steel and concrete structures. Our team ensures accurate shop drawings, connection detailing, and complete documentation aligned with project specifications and standards.", features: ["Steel Connection", "Rebar Detailing", "Fabrication Drawings", "Shop Drawing Production"] },
    ],
  },
  {
    id: "pmc",
    title: "PMC Services",
    icon: HardHat,
    image: pmc,
    desc: "We offer complete Project Management Consultancy services including planning, coordination, supervision, and quality audits to ensure timely and cost-effective project execution.",
    features: ["Project Planning", "Site Supervision", "Quality Audits", "Vendor Coordination","Progress Monitoring","Structural Audits"],
    sub: [
      { id: "pmc-consulting", title: "Project Management Consulting", image: consul, desc: "We provide end-to-end Project Management Consultancy services for industrial buildings, commercial establishments, communication towers, and infrastructure projects. Our team oversees planning, site execution, structural audits, and quality inspections to ensure projects are delivered safely, efficiently, and as per approved designs.", features: ["Project Planning", "Milestone Tracking", "Vendor Coordination", "Progress Reporting"] },
      { id: "quantity-surveying", title: "Quantity Surveying", image: quantity, desc: "We offer accurate quantity take-offs, estimation, and cost control services for tower projects, industrial buildings, commercial store establishments, and infrastructure works. Our team supports project documentation aligned with project specifications and standards.", features: ["BOQ Preparation", "Cost Estimation", "Rate Analysis", "Variation Management"] },
      { id: "structural-audits", title: "Structural Audits", image: audit, desc: "We conduct structural stability assessments, inspection services, and condition evaluations for existing buildings and tower structures.", features: ["Tower Inspection", "NDT Testing", "Retrofit Design", "Safety Evaluation"] },
    ],
  },
  {
    id: "tendering",
    icon: Calculator,
    title: "Tendering & Cost Estimation",
    image: tend,
    desc: "We provide professional BOQ preparation, cost estimation, and documentation services to support competitive bidding and effective budget control.",
    features: ["Bill of Quantities (BOQ)", "Cost Estimation", "Tender Documentation", "Tender Documentation"],
  },
  {
    id: "mep",
    icon: Zap,
    title: "MEP Services",
    image: mep,
    desc: "Integrated Mechanical, Electrical and Plumbing engineering services for efficient building systems design and coordination.",
    features: ["HVAC Design", "Electrical Systems", "Plumbing & Fire Protection", "Energy Efficiency"],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero image={heroServices} title="Our Services" subtitle="Comprehensive engineering consultancy services tailored to your project needs." />

      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {services.map((s, idx) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              {/* Main service row */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  {s.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.features.map((f, i) => (
                        <span key={i} className="text-xs font-heading font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground flex items-center gap-1.5">
                          <ClipboardCheck className="h-3 w-3 text-gold" />
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`rounded-lg overflow-hidden aspect-video ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Sub-services rendered as alternating rows like industry sector page */}
              {s.sub && (
                <div className="mt-10 space-y-10">
                  <h3 className="text-lg font-heading font-semibold text-primary text-center">
                    Services under {s.title}
                  </h3>
                  {s.sub.map((sub, si) => (
                    <div key={sub.id} id={sub.id} className="scroll-mt-20 grid md:grid-cols-2 gap-8 items-center bg-card rounded-lg border border-border p-6 md:p-0 md:overflow-hidden">
                      <div className={`${si % 2 === 1 ? "md:order-2" : ""} md:p-8`}>
                        <h4 className="font-heading font-bold text-xl text-foreground mb-3">{sub.title}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">{sub.desc}</p>
                        {sub.features && (
                          <div className="flex flex-wrap gap-2">
                            {sub.features.map((f) => (
                              <span key={f} className="text-xs font-heading font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground flex items-center gap-1.5">
                                <ClipboardCheck className="h-3 w-3 text-gold" />
                                {f}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className={`rounded-lg md:rounded-none overflow-hidden aspect-video ${si % 2 === 1 ? "md:order-1" : ""}`}>
                        <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
