import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import WhatWeDo from "@/components/home/WhatWeDo";
import IndustrySectors from "@/components/home/IndustrySectors";
import ProjectCarousel from "@/components/home/ProjectCarousel";
import ImpactCounters from "@/components/home/ImpactCounters";
import SoftwareExpertise from "@/components/home/SoftwareExpertise";
import MissionVision from "@/components/home/MissionVision";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <WhatWeDo />
      <IndustrySectors />
      <ProjectCarousel />
      <ImpactCounters />
      <SoftwareExpertise />
      <div className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">About NAVYA</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Company Overview</h2>
          </div>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established in 2015, NAVYA Engineering Consultant Pvt. Ltd. (NECPL) is a premier Civil and Structural Consulting firm headquartered in Hyderabad. We specialize in providing end-to-end engineering, design, and project management services tailored to the modern built environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of leadership experience, our team of qualified engineers and architects has carved a niche in delivering complex infrastructure solutions. We leverage cutting-edge software tools and industry best practices to provide cost-effective, innovative, and sustainable engineering solutions across diverse sectors—from high-tech communication towers and Pre-Engineered Buildings (PEB) to sophisticated residential and commercial developments, solar power plants, and renewable energy installations. Excellence, precision, and innovation define every project we undertake.
            </p>
          </div>
        </div>
      </div>
      <MissionVision />
      <ContactSection />
    </Layout>
  );
};

export default Index;
