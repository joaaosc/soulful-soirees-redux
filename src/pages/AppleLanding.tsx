import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-rio.jpg";
import meditationImg from "@/assets/event-meditation.jpg";
import yogaImg from "@/assets/event-yoga.jpg";
import healingImg from "@/assets/event-healing.jpg";
import ritualImg from "@/assets/event-ritual.jpg";

const AppleLanding = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-foreground text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-12 gap-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">Soulful</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-xs">
              <button onClick={() => scrollToSection("meditacao")} className="text-white/80 hover:text-white transition-colors">
                Meditação
              </button>
              <button onClick={() => scrollToSection("retiros")} className="text-white/80 hover:text-white transition-colors">
                Retiros
              </button>
              <button onClick={() => scrollToSection("terapias")} className="text-white/80 hover:text-white transition-colors">
                Terapias
              </button>
              <button onClick={() => scrollToSection("rituais")} className="text-white/80 hover:text-white transition-colors">
                Rituais
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold mb-6 tracking-tight">
            Soulful
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
            Transforme sua jornada espiritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/home">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base"
              >
                Explorar Eventos
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("meditacao")}
              className="border-white/40 text-white hover:bg-white hover:text-foreground rounded-full px-8 py-6 text-base bg-transparent"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection("meditacao")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-white/60" />
        </button>
      </section>

      {/* Meditação Section */}
      <section id="meditacao" className="min-h-screen flex items-center justify-center bg-foreground">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Meditação</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6">
              Encontre sua paz interior.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Práticas guiadas que transformam sua mente e elevam sua consciência.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden">
              <img 
                src={meditationImg} 
                alt="Meditação" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <Link to="/home#eventos">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Ver Eventos
              </Button>
            </Link>
            <Link to="/home#eventos">
              <Button variant="link" className="text-primary hover:text-primary/80">
                Saiba mais →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Retiros Section - Light Background */}
      <section id="retiros" className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Retiros</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6">
              Imersão total.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiências transformadoras em locais de poder e natureza exuberante.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={yogaImg} 
                alt="Retiro de Yoga" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <Link to="/home#eventos">
              <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-white px-8">
                Explorar Retiros
              </Button>
            </Link>
            <Link to="/home#eventos">
              <Button variant="link" className="text-foreground hover:text-foreground/80">
                Saiba mais →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Terapias Section */}
      <section id="terapias" className="min-h-screen flex items-center justify-center bg-foreground">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Terapias Holísticas</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Cura profunda.
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Reiki, constelação familiar, terapia energética e muito mais. 
                Encontre a cura que você procura através de práticas ancestrais 
                e terapeutas especializados.
              </p>
              <div className="flex gap-4">
                <Link to="/home#eventos">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Descobrir Terapias
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src={healingImg} 
                  alt="Terapias Holísticas" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituais Section - Light */}
      <section id="rituais" className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ritualImg} 
                  alt="Rituais Sagrados" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Rituais</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Conexão ancestral.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Cerimônias sagradas, círculos de fogo e práticas ancestrais 
                que conectam você às tradições espirituais mais profundas.
              </p>
              <div className="flex gap-4">
                <Link to="/home#eventos">
                  <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-white px-8">
                    Ver Rituais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-foreground to-foreground/95">
        <div className="container mx-auto px-6 text-center">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
            Comece sua jornada.
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Mais de 100 eventos transformadores esperando por você no Rio de Janeiro.
          </p>
          <Link to="/home">
            <Button 
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg"
            >
              Explorar Todos os Eventos
            </Button>
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-foreground border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>© 2026 Soulful. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppleLanding;
