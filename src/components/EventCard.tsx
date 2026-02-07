import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Users } from "lucide-react";

export interface EventCardProps {
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
  onClick?: () => void;
}

const EventCard = ({
  image,
  category,
  title,
  date,
  location,
  spotsLeft,
  price,
  onClick,
}: EventCardProps) => {
  return (
    <div 
      className="event-card group cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2">
          {title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{spotsLeft} vagas restantes</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">A partir de</span>
            <p className="text-lg font-semibold text-foreground">
              R$ {price.toLocaleString("pt-BR")}
            </p>
          </div>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
