// import { Link } from "react-router-dom";
// import { Building2, HardHat, Calculator, Zap, PenTool } from "lucide-react";

// const services = [
//   { icon: PenTool, title: "Architecture Designs", desc: "Innovative architectural solutions blending aesthetics with structural integrity." },
//   { icon: Building2, title: "Structural Design & Detailing", desc: "Comprehensive structural engineering design and precise steel/concrete detailing." },
//   { icon: HardHat, title: "PMC Services", desc: "End-to-end project management consulting, quantity surveying and structural audits." },
//   { icon: Calculator, title: "Tendering & Cost Estimation", desc: "Accurate BOQ preparation, cost estimation and tender documentation." },
//   { icon: Zap, title: "MEP Services", desc: "Mechanical, Electrical and Plumbing engineering services for all building types." },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="section-padding">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">What We Do</span>
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
//             Comprehensive Engineering Solutions
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             From concept to completion, we deliver expert engineering consultancy across diverse sectors.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((s, i) => (
//             <Link
//               key={i}
//               to="/services"
//               className="group bg-card rounded-lg p-6 border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
//                 <s.icon className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
//               </div>
//               <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
//               <p className="text-muted-foreground text-sm">{s.desc}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;

import { Link } from "react-router-dom";
import { Building2, HardHat, Calculator, Zap, PenTool } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Architecture Designs",
    desc: "Innovative architectural solutions blending aesthetics with structural integrity.",
  },
  {
    icon: Building2,
    title: "Structural Design & Detailing",
    desc: "Comprehensive structural engineering design and precise steel/concrete detailing.",
  },
  {
    icon: HardHat,
    title: "PMC Services",
    desc: "End-to-end project management consulting, quantity surveying and structural audits.",
  },
  {
    icon: Calculator,
    title: "Tendering & Cost Estimation",
    desc: "Accurate BOQ preparation, cost estimation and tender documentation.",
  },
  {
    icon: Zap,
    title: "MEP Services",
    desc: "Mechanical, Electrical and Plumbing engineering services for all building types.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From concept to completion, we deliver expert engineering consultancy across diverse sectors.
          </p>
        </div>

        {/* Flex layout to center last row */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              to="/services"
              className="group bg-card rounded-lg p-6 border border-border 
                         hover:border-gold/50 hover:shadow-lg transition-all duration-300
                         w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <s.icon className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;