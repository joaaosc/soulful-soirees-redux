import { Button } from "@/components/ui/button";
import { CalendarDays, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-rio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="hero-badge mx-auto w-fit">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Conecte-se com sua essência</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-tight">
            Descubra Eventos que{" "}
            <span className="italic text-primary">Transformam</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Encontre retiros, meditações, workshops e experiências espirituais no 
            Rio de Janeiro que irão elevar sua jornada interior.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8 py-6"
            >
              <CalendarDays className="h-5 w-5" />
              Explorar Eventos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm text-base px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;