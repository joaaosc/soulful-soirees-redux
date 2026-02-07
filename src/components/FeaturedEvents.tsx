import { useState } from "react";
import EventCard, { EventCardProps } from "./EventCard";
import EventDetailDialog, { EventDetail } from "./EventDetailDialog";
import { ArrowRight } from "lucide-react";
import meditationImg from "@/assets/event-meditation.jpg";
import yogaImg from "@/assets/event-yoga.jpg";
import healingImg from "@/assets/event-healing.jpg";
import ritualImg from "@/assets/event-ritual.jpg";

const events: EventDetail[] = [
  {
    image: meditationImg,
    category: "Meditação",
    title: "Jornada de Meditação Mindfulness",
    date: "15 de Fevereiro, 2026",
    location: "Jardim Botânico, RJ",
    spotsLeft: 12,
    price: 180,
    duration: "3 horas",
    description: "Uma imersão profunda nas técnicas de meditação mindfulness, guiada por instrutores certificados. Você aprenderá a cultivar a atenção plena, reduzir o estresse e encontrar equilíbrio interior em meio à natureza exuberante do Jardim Botânico.",
    instagram: "@meditacaorj",
    coordinates: { lat: -22.9711, lng: -43.2242 },
  },
  {
    image: yogaImg,
    category: "Retiro",
    title: "Retiro de Yoga em Petrópolis",
    date: "22-24 de Fevereiro, 2026",
    location: "Petrópolis, RJ",
    spotsLeft: 8,
    price: 1200,
    duration: "3 dias",
    description: "Um final de semana transformador nas montanhas de Petrópolis. Inclui práticas diárias de yoga, meditação ao nascer do sol, alimentação vegetariana orgânica e trilhas pela Mata Atlântica. Hospedagem em chalés aconchegantes com vista para as montanhas.",
    instagram: "@retiroyogapetropolis",
    coordinates: { lat: -22.5047, lng: -43.1823 },
  },
  {
    image: healingImg,
    category: "Terapia Holística",
    title: "Círculo de Cura e Conexão Interior",
    date: "28 de Fevereiro, 2026",
    location: "Santa Teresa, RJ",
    spotsLeft: 15,
    price: 250,
    duration: "4 horas",
    description: "Uma experiência de cura coletiva que combina técnicas de Reiki, constelação familiar sistêmica e terapia energética. Em um ambiente acolhedor no coração de Santa Teresa, você terá a oportunidade de liberar bloqueios emocionais e reconectar-se com sua essência.",
    instagram: "@curasantateresa",
    coordinates: { lat: -22.9219, lng: -43.1856 },
  },
  {
    image: ritualImg,
    category: "Ritual",
    title: "Cerimônia do Fogo Sagrado",
    date: "5 de Março, 2026",
    location: "Itacoatiara, Niterói",
    spotsLeft: 20,
    price: 350,
    duration: "5 horas",
    description: "Uma cerimônia ancestral realizada ao pôr do sol na praia de Itacoatiara. Inclui meditação guiada, cantos sagrados, dança circular e o ritual do fogo para renovação e conexão com as forças da natureza. Encerra com partilha de alimentos e integração em grupo.",
    instagram: "@fogosagradorio",
    coordinates: { lat: -22.9764, lng: -43.0297 },
  },
];

const FeaturedEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEventClick = (event: EventDetail) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

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
            <EventCard 
              key={event.title} 
              {...event} 
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>
      </div>

      {/* Event Detail Dialog */}
      <EventDetailDialog
        event={selectedEvent}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};

export default FeaturedEvents;
