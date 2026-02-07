import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-rio.jpg";
import meditationImg from "@/assets/event-meditation.jpg";
import yogaImg from "@/assets/event-yoga.jpg";
import healingImg from "@/assets/event-healing.jpg";
import ritualImg from "@/assets/event-ritual.jpg";
import cardBuddhaImg from "@/assets/card-buddha.jpg";
import cardYogaBeachImg from "@/assets/card-yoga-beach.jpg";
import cardRitualImg from "@/assets/card-ritual.jpg";
import cardCrystalsImg from "@/assets/card-crystals.jpg";

const slides = [
  {
    image: meditationImg,
    title: "Meditação Mindfulness",
    description: "Encontre paz interior através de práticas guiadas no Jardim Botânico.",
  },
  {
    image: yogaImg,
    title: "Retiros de Yoga",
    description: "Experiências imersivas em Petrópolis com natureza e autoconhecimento.",
  },
  {
    image: healingImg,
    title: "Terapias Holísticas",
    description: "Reiki, constelação familiar e cura energética em Santa Teresa.",
  },
  {
    image: ritualImg,
    title: "Rituais Sagrados",
    description: "Cerimônias do fogo e práticas ancestrais em Itacoatiara.",
  },
];

const AppleLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Apple-like "soft gray" with translucency.
  // Used where we previously had the heavy dark background.
  const softSurface = "rgba(245, 245, 247, 0.82)";

  const tiles = useMemo(
    () => [
      {
        image: cardBuddhaImg,
        title: "Meditação",
        description: "Silêncio que transforma.",
        bg: "#78350f",
        text: "text-white",
      },
      {
        image: cardYogaBeachImg,
        title: "Yoga na Praia",
        description: "Corpo e mente em harmonia.",
        bg: "#deeffb",
        text: "text-foreground",
      },
      {
        image: cardRitualImg,
        title: "Rituais",
        description: "Conexão com o sagrado.",
        bg: "#ffedd5",
        text: "text-foreground",
      },
      {
        image: cardCrystalsImg,
        title: "Cristais",
        description: "Energia e equilíbrio.",
        bg: "#faf5ff",
        text: "text-foreground",
      },
    ],
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Swiss-style Header — minimal, functional */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold text-foreground">Rio Heal</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs text-foreground/70">
              <button onClick={() => scrollToSection("plataforma")} className="hover:text-foreground transition-colors">
                Plataforma
              </button>
              <button onClick={() => scrollToSection("retiros")} className="hover:text-foreground transition-colors">
                Retiros
              </button>
              <button onClick={() => scrollToSection("terapias")} className="hover:text-foreground transition-colors">
                Terapias
              </button>
              <button onClick={() => scrollToSection("rituais")} className="hover:text-foreground transition-colors">
                Rituais
              </button>
            </nav>

            {/* intentionally empty for balance */}
            <div className="w-[76px] hidden md:block" aria-hidden />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold mb-6 tracking-tight animate-fade-in">
            Rio Heal
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-light animate-fade-in-up">
            Transforme sua jornada espiritual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/home">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 rounded-full px-10 py-6 text-base transition-transform duration-300 hover:scale-[1.01]"
              >
                Explorar Eventos
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("plataforma")}
              className="border-white/50 text-white hover:bg-white hover:text-foreground rounded-full px-10 py-6 text-base bg-transparent transition-transform duration-300 hover:scale-[1.01]"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("plataforma")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </button>
      </section>

      {/* Platform section (light + translucent instead of dark) */}
      <section id="plataforma" className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">
              Plataforma
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold mb-6 tracking-tight animate-fade-in-up">
              A sua agenda de bem-estar no Rio.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Curadoria de meditação, yoga, retiros, terapias e rituais no RJ.{" "}
              <span className="text-foreground/80">
                Veja datas, locais e detalhes — e reserve em poucos cliques.
              </span>
            </p>
          </div>

          {/* "glass surface" behind media (subtle Apple vibe) */}
          <div className="relative max-w-5xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-2xl"
              style={{ backgroundColor: softSurface }}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-3xl">
                <img
                  src={meditationImg}
                  alt="Experiências Rio Heal"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(700px 240px at 50% 0%, rgba(0,0,0,0.06), transparent 70%)",
              }}
            />
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <Link to="/home#eventos">
              <Button className="rounded-full bg-foreground text-white hover:bg-foreground/90 px-8 transition-transform duration-300 hover:scale-[1.01]">
                Explorar eventos
              </Button>
            </Link>
            <Link to="/home#eventos" className="hidden sm:block">
              <Button variant="link" className="text-foreground/70 hover:text-foreground">
                Como funciona →
              </Button>
            </Link>
          </div>

          {/* small Swiss-like footnote */}
          <p className="mt-10 text-center text-xs text-foreground/45">
            RJ • Curadoria • Eventos e experiências
          </p>
        </div>
      </section>

      {/* Apple-like Tiles: Retiros + Terapias + Rituais */}
      <section id="retiros" className="bg-background text-foreground">
        <div className="px-3 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-3">
              {/* Tile 1 — Retiros */}
              <Link
                to="/home#eventos"
                className="group block border border-border rounded-none bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-[1px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 md:p-14 flex flex-col justify-center text-center lg:text-left">
                    <p className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-4">Retiros</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">Imersão total.</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-prose lg:max-w-none">
                      Experiências transformadoras em locais de poder e natureza exuberante.
                    </p>
                  </div>

                  <div className="relative min-h-[320px] lg:min-h-[520px] bg-muted">
                    <img
                      src={yogaImg}
                      alt="Retiro de Yoga"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>

              {/* Tile 2 — Terapias */}
              <Link
                id="terapias"
                to="/home#eventos"
                className="group block border border-border rounded-none bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-[1px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative min-h-[320px] lg:min-h-[520px] bg-muted order-1 lg:order-1">
                    <img
                      src={healingImg}
                      alt="Terapias Holísticas"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-10 md:p-14 flex flex-col justify-center text-center lg:text-left order-2 lg:order-2">
                    <p className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-4">Terapias Holísticas</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">Cura profunda.</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-prose lg:max-w-none">
                      Reiki, constelação familiar, terapia energética e muito mais com terapeutas especializados.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Tile 3 — Rituais */}
              <Link
                id="rituais"
                to="/home#eventos"
                className="group block border border-border rounded-none bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-[1px]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 md:p-14 flex flex-col justify-center text-center lg:text-left">
                    <p className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-4">Rituais</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-4">
                      Conexão ancestral.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-prose lg:max-w-none">
                      Cerimônias sagradas e práticas ancestrais que conectam você às tradições espirituais mais profundas.
                    </p>
                  </div>

                  <div className="relative min-h-[320px] lg:min-h-[520px] bg-muted">
                    <img
                      src={ritualImg}
                      alt="Rituais Sagrados"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid - Full Bleed */}
      <section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {tiles.map((card, index) => (
            <div
              key={index}
              className={`aspect-square flex flex-col items-center justify-start text-center px-10 md:px-14 py-12 ${card.text} transition-transform duration-300 hover:scale-[1.005]`}
              style={{ backgroundColor: card.bg }}
            >
              <h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm md:text-base opacity-70 mb-10">{card.description}</p>

              <div className="w-full flex-1 flex items-center justify-center">
                <div className="w-full max-w-[480px] aspect-square">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer between cards and slideshow */}
      <div className="h-10 bg-background" />

      {/* Slideshow section: light surface instead of dark */}
      <section className="bg-background text-foreground">
        <div className="px-3 pb-16 md:pb-20">
          <div
            className="mx-auto max-w-6xl overflow-hidden rounded-none border border-black/10"
            style={{ backgroundColor: softSurface }}
          >
            {/* Slideshow - full width inside the surface */}
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  {/* keep text readable on images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 text-center text-white">
                    <h3 className="text-3xl md:text-5xl font-serif font-semibold mb-3 tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">{slide.description}</p>
                  </div>
                </div>
              ))}

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white/90 w-8" : "bg-white/35 hover:bg-white/55 w-2.5"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Below Slideshow */}
            <div className="text-center py-14">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-6 animate-fade-in" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 tracking-tight animate-fade-in-up">
                Comece sua jornada.
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up">
                Mais de 100 eventos transformadores esperando por você.
              </p>
              <Link to="/home">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-white hover:bg-foreground/90 px-12 py-7 text-lg transition-transform duration-300 hover:scale-[1.01]"
                >
                  Explorar Todos os Eventos
                </Button>
              </Link>
            </div>
          </div>

          {/* small detail line */}
          <div className="mx-auto max-w-6xl px-1">
            <div className="mt-6 h-px bg-black/10" />
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-10 bg-background border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/60">
            <p>© 2026 Rio Heal. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppleLanding;
