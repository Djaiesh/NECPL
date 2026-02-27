import { useState, useRef, useEffect } from "react";
import navyaLogo from "@/assets/navya-logo.png";
import portfolioPdf from "@/assets/portfolio.pdf";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Download } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About Us", path: "/about",
    children: [
      { label: "Vision & Mission", path: "/about#vision-mission" },
      { label: "Our Impacts", path: "/about#impacts" },
    ],
  },
  {
    label: "Services", path: "/services",
    children: [
      { label: "Architecture Designs", path: "/services#architecture" },
      {
        label: "Structural Design & Detailing", path: "/services#structural",
        children: [
          { label: "Structural Design", path: "/services#structural-design" },
          { label: "Detailing & Drafting", path: "/services#detailing" },
        ],
      },
      {
        label: "PMC Services", path: "/services#pmc",
        children: [
          { label: "Project Management Consulting", path: "/services#pmc-consulting" },
          { label: "Quantity Surveying", path: "/services#quantity-surveying" },
          { label: "Structural Audits", path: "/services#structural-audits" },
        ],
      },
      { label: "Tendering & Cost Estimation", path: "/services#tendering" },
      { label: "MEP Services", path: "/services#mep" },
    ],
  },
  {
    label: "Industry Sector", path: "/industry",
    children: [
      { label: "Residential & Commercial Building", path: "/industry#residential" },
      { label: "Power Transmission & Communication Tower", path: "/industry#towers" },
      { label: "Industrials", path: "/industry#industrials" },
      { label: "Solar Energy", path: "/industry#solar" },
      { label: "Infrastructure", path: "/industry#infrastructure" },
    ],
  },
  {
    label: "Projects", path: "/projects",
    children: [
      { label: "Completed Projects", path: "/projects#completed" },
      { label: "On-going Projects", path: "/projects#ongoing" },
    ],
  },
  {
    label: "Clients", path: "/clients",
    children: [
      { label: "Our Clients", path: "/clients#our-clients" },
      // { label: "Client Testimonials", path: "/clients#testimonials" },
    ],
  },
  { label: "Software Expertise", path: "/software-expertise" },
  { label: "Contact", path: "/contact" },
];

const DropdownItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link to={item.path} className="nav-dropdown-item whitespace-nowrap">
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative group/sub"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="nav-dropdown-item flex items-center justify-between cursor-pointer whitespace-nowrap">
        {item.label}
        <ChevronDown className="ml-2 h-3 w-3 -rotate-90" />
      </span>
      {open && (
        <div className="absolute left-full top-0 bg-popover border border-border rounded-md shadow-lg min-w-[220px] z-50">
          {item.children.map((child) => (
            <Link key={child.path} to={child.path} className="nav-dropdown-item whitespace-nowrap">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-18 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={navyaLogo} alt="NAVYA" className="w-10 h-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-sm text-navy-foreground leading-tight block">
              NAVYA
            </span>
            <span className="text-[10px] text-gold leading-tight block">
              Engineering Consultant Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.path}
                className={`px-3 py-2 text-[13px] font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-navy-foreground hover:text-gold"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <DropdownItem key={child.path} item={child} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioPdf}
            download="NAVYA-Portfolio.pdf"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-md hover:brightness-110 transition-all"
          >
            <Download className="h-4 w-4" />
            Portfolio
          </a>
          <button
            className="xl:hidden text-navy-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy border-t border-navy/50 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto py-4 px-4 space-y-1">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} />
            ))}
            <a
              href={portfolioPdf}
              download="NAVYA-Portfolio.pdf"
              className="flex items-center justify-center gap-2 bg-gold text-gold-foreground font-heading font-semibold text-sm px-5 py-3 rounded-md mt-4"
            >
              <Download className="h-4 w-4" />
              Portfolio
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={item.path}
          className="block py-2.5 text-sm text-navy-foreground hover:text-gold transition-colors"
        >
          {item.label}
        </Link>
        {item.children && (
          <button onClick={() => setOpen(!open)} className="p-2 text-navy-foreground">
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {open && item.children && (
        <div className="pl-4 space-y-0.5 border-l-2 border-gold/30 ml-2">
          {item.children.map((child) => (
            <div key={child.path}>
              <Link
                to={child.path}
                className="block py-2 text-sm text-navy-foreground/80 hover:text-gold transition-colors"
              >
                {child.label}
              </Link>
              {child.children && (
                <div className="pl-4 space-y-0.5">
                  {child.children.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block py-1.5 text-xs text-navy-foreground/60 hover:text-gold transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
