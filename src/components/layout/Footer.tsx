import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import navyaLogo from "@/assets/navya-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <img src={navyaLogo} alt="NAVYA Logo" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-bold text-sm block">NAVYA</span>
                <span className="text-[10px] text-gold block">Engineering Consultant Pvt. Ltd.</span>
              </div>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Industry Sectors", path: "/industry" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-navy-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Our Services</h4>
            <div className="space-y-2">
              {[
                "Architecture Designs",
                "Structural Design",
                "PMC Services",
                "MEP Services",
                "Tendering & Cost Estimation",
              ].map((s) => (
                <Link
                  key={s}
                  to="/services"
                  className="block text-sm text-navy-foreground/70 hover:text-gold transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm text-navy-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gold" />
                <span>Flat No:101, Sri Lakshmi Nivas, Phase-1, 5th Road, KPHB Colony, Kukatpally, Hyderabad-500072, Telangana, India</span>
              </div>
              <div className="flex gap-2 text-sm text-navy-foreground/70">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div>040 45134231</div>
                  <div>091-7842788557</div>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-navy-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>navyaengineeringconsultant@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-8 pt-6 text-center text-xs text-navy-foreground/50">
          <p>© {new Date().getFullYear()} NAVYA Engineering Consultant Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
