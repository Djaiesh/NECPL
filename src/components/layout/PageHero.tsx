interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[300px] md:h-[350px] overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))/0.65] to-[hsl(var(--navy))/0.4]" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground drop-shadow-lg">{title}</h1>
          {subtitle && <p className="text-navy-foreground/90 mt-3 max-w-xl mx-auto drop-shadow-md">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
