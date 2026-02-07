import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Users, Instagram, Clock, DollarSign } from "lucide-react";

export interface EventDetail {
  image: string;
  category: string;
  title: string;
  date: string;
  location: string;
  spotsLeft: number;
  price: number;
  description?: string;
  duration?: string;
  instagram?: string;
  mapUrl?: string;
  coordinates?: { lat: number; lng: number };
}

interface EventDetailDialogProps {
  event: EventDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailDialog = ({ event, open, onOpenChange }: EventDetailDialogProps) => {
  if (!event) return null;

  const defaultDescription = `Junte-se a nós para uma experiência transformadora de ${event.category.toLowerCase()}. 
  Este evento foi cuidadosamente preparado para proporcionar momentos de conexão, autoconhecimento e bem-estar. 
  Venha descobrir novas perspectivas e conectar-se com pessoas que compartilham dos mesmos interesses.`;

  const mapEmbedUrl = event.coordinates 
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${event.coordinates.lng}!3d${event.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr`
    : `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(event.location)}&zoom=14`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Event Image */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
              {event.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="p-6 space-y-6">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight">
              {event.title}
            </DialogTitle>
          </DialogHeader>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <CalendarDays className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Data</p>
                <p className="text-sm font-medium text-foreground">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Duração</p>
                <p className="text-sm font-medium text-foreground">{event.duration || "3 horas"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Vagas</p>
                <p className="text-sm font-medium text-foreground">{event.spotsLeft} restantes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <DollarSign className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Investimento</p>
                <p className="text-sm font-medium text-foreground">R$ {event.price.toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Localização</h3>
            </div>
            <p className="text-sm text-muted-foreground">{event.location}</p>
            
            {/* Map Embed */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa - ${event.location}`}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-foreground">Sobre o evento</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {event.description || defaultDescription}
            </p>
          </div>

          {/* Instagram */}
          {event.instagram && (
            <a
              href={`https://instagram.com/${event.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>{event.instagram}</span>
            </a>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              Inscrever-se — R$ {event.price.toLocaleString("pt-BR")}
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDialog;
