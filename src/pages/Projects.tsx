import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";

import heroProjects from "@/assets/hero-projects.jpg";
import solar from "@/assets/solar-plant.jpg";
import rescom from "@/assets/rescom.jpg";
import tower from "@/assets/tower.jpg";
import warehouse from "@/assets/warehouse.jpg";
import cons from "@/assets/cons.jpg";
import design from "@/assets/design.jpg";


import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetail {
  image: string;
  title: string;
  category: string;
  location?: string;
  year?: string;
  progress?: number;
  client: string;
  scope?: string;
  duration?: string;
  value?: string;
  description: string;
  highlights: string[];
}

const completed: ProjectDetail[] = [
  { image: solar, title: "3HP Solar Pump Structure", category: "Solar", location: "Raipur", client: "Chhattisgarh Renewable Energy Development Agency (CREDA)", description: "This project involved the design and development of a 3HP solar pump supporting structure for agricultural water supply applications. The system is designed to support solar panels efficiently while ensuring structural stability under wind and environmental load conditions. The structure enables sustainable irrigation by utilizing renewable solar energy.", highlights: ["Structural Design & Detailing", "Solar Structures (Under Structural Design Services)"] },
  { image: rescom, title: "Nandha Gokulam School Building", category: "Commercial", location: "Nellore", client: "Vishwa Samudra Group", description: "This project involved the architectural and structural design of the Nandha Gokulam School Building in Nellore. The multi-storey institutional building was designed to ensure structural safety, functional classroom planning, and long-term durability. The design focused on stability, efficient space utilization, and compliance with applicable building codes.", highlights: ["Architecture Designs", "Structural Design & Detailing", " MEP Services"] },
  { image: tower, title: "Ground-based Antenna ", category: "Antenna", location: "Telangana", client: "Avantel Ltd", description: "This project involved the structural design and development of a ground-based antenna supporting structure for communication applications. The structure was engineered to withstand wind loads and operational forces while ensuring stability, safety, and long-term performance. The design complied with relevant structural standards and project specifications.", highlights: ["Structural Design & Detailing", "Communication Towers", "Tower Analysis"] },
  { image: warehouse, title: "Factory Building – TIF MSME Green Industrial Park", category: "Infrastructure", location: "Telangana", client: "GRID 2 CHIP", description: "This project involved the design and development of a factory building at TIF MSME Green Industrial Park. The industrial structure was designed to accommodate manufacturing operations with optimal space planning, structural stability, and efficient load-bearing systems. The building was engineered to ensure safety, durability, and compliance with industrial standards.", highlights: ["Structural Design & Detailing", "MEP Services", "PMC Services"] },
];

const ongoing: ProjectDetail[] = [
  { image: cons, title: "Evertop Textile Complex – Kakatiya Mega Textile Park", category: "Commercial", location: "Warangal", client: "Ardee Engineering Pvt. Ltd.", description: "This project involved the structural and civil design support for the Evertop Textile Complex located at Kakatiya Mega Textile Park, Warangal. The industrial facility was designed to accommodate large-scale textile operations with robust structural systems, optimized space utilization, and long-term durability. The project focused on ensuring structural stability and compliance with industrial standards.", highlights: ["Structural Design & Detailing", "Industrial Structures"] },
  // { image: layout, title: "Rooftop Solar Installation", category: "Solar Energy", location: "Bangalore", client: "NCC Limited", description: "Rooftop solar installation across 20 commercial buildings in Bangalore with structural load assessment and mounting structure design.", highlights: ["Roof load capacity assessment for 20 buildings", "Custom mounting bracket design", "Wind uplift analysis for each rooftop", "Expected 8MW total generation capacity"] },
  { image: design, title: "Sketch Wood Modular Factory – TSIIC IP Chandan Valley", category: "Industrial", location: "Telangana", client: "Rama Krishna Reddy", description: "This project involved the design and development of a modular factory facility at TSIIC Industrial Park, Chandan Valley. The industrial structure was planned to support large-scale manufacturing operations with efficient space utilization, optimized structural systems, and long-term durability. The design focused on functionality, safety, and compliance with industrial standards.", highlights: ["Structural Design & Detailing", "Industrial Structures", "Architecture Designs"] },
];

const Projects = () => {
  const [selected, setSelected] = useState<ProjectDetail | null>(null);

  return (
    <Layout>
      <PageHero image={heroProjects} title="Our Projects" subtitle="Explore our portfolio of completed and ongoing engineering projects." />

      {/* Completed */}
      <section id="completed" className="section-padding scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            <span className="text-gold">●</span> Completed Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {completed.map((p, i) => (
              <div key={i} onClick={() => setSelected(p)} className="cursor-pointer group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-gold/50 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-gold text-xs font-heading font-semibold">{p.category}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">{p.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-going */}
      <section id="ongoing" className="section-padding section-alt scroll-mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            <span className="text-gold">●</span> On-going Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoing.map((p, i) => (
              <div key={i} onClick={() => setSelected(p)} className="cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-gold/50 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-gold text-xs font-heading font-semibold">{p.category}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">{p.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selected && (
            <ScrollArea className="max-h-[85vh]">
              <div className="relative aspect-[16/9] w-full">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-gold text-xs font-heading font-semibold">{selected.category}</span>
                  <h2 className="text-2xl font-heading font-bold text-white mt-1">{selected.title}</h2>
                  {selected.location && <p className="text-white/70 text-sm mt-1">{selected.location}</p>}
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="bg-accent rounded-lg p-3 w-full">
                  <p className="text-xs text-muted-foreground">Client</p>
                  <p className="font-heading font-semibold text-sm text-foreground">{selected.client}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{selected.description}</p>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selected.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                {selected.progress !== undefined && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-heading font-semibold text-primary">{selected.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-gold rounded-full h-3 transition-all" style={{ width: `${selected.progress}%` }} />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;
