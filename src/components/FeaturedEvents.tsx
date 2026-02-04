import EventCard from "./EventCard";
import { ArrowRight } from "lucide-react";
import meditationImg from "@/assets/event-meditation.jpg";
import yogaImg from "@/assets/event-yoga.jpg";
import healingImg from "@/assets/event-healing.jpg";
import ritualImg from "@/assets/event-ritual.jpg";

const events = [
  {
    image: meditationImg,
    category: "Meditação",
    title: "Jornada de Meditação Mindfulness",
    date: "15 de Fevereiro, 2026",
    location: "Jardim Botânico, RJ",
    spotsLeft: 12,
    price: 180,
  },
  {
    image: yogaImg,
    category: "Retiro",
    title: "Retiro de Yoga em Petrópolis",
    date: "22-24 de Fevereiro, 2026",
    location: "Petrópolis, RJ",
    spotsLeft: 8,
    price: 1200,
  },
  {
    image: healingImg,
    category: "Terapia Holística",
    title: "Círculo de Cura e Conexão Interior",
    date: "28 de Fevereiro, 2026",
    location: "Santa Teresa, RJ",
    spotsLeft: 15,
    price: 250,
  },
  {
    image: ritualImg,
    category: "Ritual",
    title: "Cerimônia do Fogo Sagrado",
    date: "5 de Março, 2026",
    location: "Itacoatiara, Niterói",
    spotsLeft: 20,
    price: 350,
  },
];

const FeaturedEvents = () => {
  return (
    <section id="eventos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="section-label">Em Destaque</span>
            <h2 className="section-title mt-3">Próximos Eventos</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Experiências transformadoras selecionadas especialmente para você
            </p>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver todos os eventos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;