import projectTower from "@/assets/project-tower.jpg";
import projectFactory from "@/assets/project-factory.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import projectHighrise from "@/assets/project-highrise.jpg";
import projectTransmission from "@/assets/project-transmission.jpg";
import projectTelecom from "@/assets/project-telecom.jpg";
import projectPeb from "@/assets/project-peb.jpg";

export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  client: string;
  location: string;
  scope: string;
  challenges: string;
  solutions: string;
  tools: string[];
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: "radar-tower",
    title: "40m Radar Communication Tower",
    summary: "Self-supporting lattice tower designed for extreme wind loads",
    image: projectTower,
    client: "Indian Defence Research Organisation",
    location: "Rajasthan, India",
    scope: "Structural Design, Foundation Engineering, Wind Load Analysis, Fabrication Supervision",
    challenges: "The tower needed to withstand sustained wind speeds of 180 km/h in desert terrain while supporting heavy radar equipment at the top platform. Soil conditions presented poor bearing capacity.",
    solutions: "Used advanced finite element analysis in STAAD.Pro for dynamic wind load simulation. Designed deep pile foundations to overcome weak soil. Implemented tuned mass dampers to reduce vibration at the radar platform level.",
    tools: ["STAAD.Pro", "AutoCAD", "ETABS", "GeoStudio"],
    galleryImages: [projectTower, projectTransmission, projectTelecom],
  },
  {
    id: "steel-fabrication",
    title: "Industrial Steel Fabrication Facility",
    summary: "25,000 sq.ft. heavy steel fabrication workshop with crane bays",
    image: projectFactory,
    client: "Tata Advanced Systems",
    location: "Hyderabad, Telangana",
    scope: "Structural Design, PMC, Shop Drawing Review, Erection Supervision",
    challenges: "Accommodating 20-ton EOT cranes required precise column spacing and heavy-duty gantry girder design. The facility needed to be operational within 8 months.",
    solutions: "Employed PEB methodology for rapid construction. Used Tekla Structures for 3D modeling and clash detection, reducing on-site rework by 40%. Parallel foundation and superstructure procurement accelerated the schedule.",
    tools: ["Tekla Structures", "STAAD.Pro", "AutoCAD", "MS Project"],
    galleryImages: [projectFactory, projectPeb, projectHighrise],
  },
  {
    id: "solar-mounting",
    title: "Solar Mounting Structure Project",
    summary: "50 MW solar farm structural mounting system design",
    image: projectSolar,
    client: "Adani Green Energy Ltd.",
    location: "Kutch, Gujarat",
    scope: "Design of Mounting Structures, Foundation Design, Material Optimization",
    challenges: "Extreme temperature variations causing thermal expansion in long module mounting rails. Corrosive saline soil conditions near the coast required special material treatment.",
    solutions: "Designed expansion joints at calculated intervals. Specified hot-dip galvanized structural members and epoxy-coated foundation bolts. Optimized purlin sections to reduce steel consumption by 15%.",
    tools: ["STAAD.Pro", "AutoCAD", "PVsyst", "SolidWorks"],
    galleryImages: [projectSolar, projectTransmission, projectPeb],
  },
  {
    id: "highrise-commercial",
    title: "High-Rise RCC Commercial Building",
    summary: "G+22 commercial complex with seismic-resistant design",
    image: projectHighrise,
    client: "Prestige Group",
    location: "Bengaluru, Karnataka",
    scope: "Structural Analysis, RCC Design, Seismic Analysis, Foundation Design",
    challenges: "Located in Seismic Zone II with varying soil strata. Complex architectural geometry with cantilevered floors and large open spans at the podium level.",
    solutions: "Performed response spectrum analysis in ETABS. Used mat foundation with piles for differential settlement control. Designed transfer girders at podium level to redirect loads from the tower above.",
    tools: ["ETABS", "SAFE", "AutoCAD", "Revit"],
    galleryImages: [projectHighrise, projectFactory, projectTower],
  },
  {
    id: "transmission-foundation",
    title: "Transmission Tower Foundation Design",
    summary: "220 kV transmission line — 85 tower foundations",
    image: projectTransmission,
    client: "Power Grid Corporation of India",
    location: "Madhya Pradesh, India",
    scope: "Foundation Design, Soil Investigation Review, Design Optimization",
    challenges: "Diverse soil conditions across the 120 km route ranging from black cotton soil to rocky terrain. Uplift forces from conductor tension required specialized anchor designs.",
    solutions: "Classified foundations into 5 soil categories and created standardized designs for each. Used under-reamed piles in expansive soil zones. Implemented chimney-type foundations in rocky areas, reducing excavation costs.",
    tools: ["STAAD.Pro", "AutoCAD", "GeoStudio", "Excel VBA"],
    galleryImages: [projectTransmission, projectTower, projectSolar],
  },
  {
    id: "telecom-rooftop",
    title: "Telecom Rooftop Tower Deployment",
    summary: "Pan-India rooftop tower structural audit — 500+ sites",
    image: projectTelecom,
    client: "Bharti Infratel (Indus Towers)",
    location: "Pan-India (Multiple States)",
    scope: "Structural Audit, Retrofit Design, Load Assessment, Feasibility Reports",
    challenges: "Existing buildings had varying structural integrity. Many older structures lacked as-built drawings, requiring non-destructive testing to assess member capacities.",
    solutions: "Developed a standardized rapid assessment methodology using rebound hammer and ultrasonic pulse velocity tests. Created a database of 12 roof-mount configurations to streamline design approval.",
    tools: ["STAAD.Pro", "AutoCAD", "Excel", "Proceq Equipment"],
    galleryImages: [projectTelecom, projectHighrise, projectTower],
  },
  {
    id: "peb-industrial",
    title: "Industrial Shed PEB Structure",
    summary: "40,000 sq.ft. clear-span industrial warehouse",
    image: projectPeb,
    client: "Mahindra Logistics",
    location: "Pune, Maharashtra",
    scope: "PEB Design, Foundation Design, Project Management Consultancy",
    challenges: "Client required a 60m clear span with no intermediate columns for flexible warehouse operations. Mezzanine floor addition mid-project changed the loading pattern significantly.",
    solutions: "Designed tapered built-up sections for optimal material usage. Used haunched connections at the knee for moment resistance. Revised foundation design with isolated footings connected by plinth beams to accommodate mezzanine loads.",
    tools: ["STAAD.Pro", "Tekla", "AutoCAD", "Primavera P6"],
    galleryImages: [projectPeb, projectFactory, projectSolar],
  },
];
