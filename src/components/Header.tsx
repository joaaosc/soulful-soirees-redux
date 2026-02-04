import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-secondary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Soulful
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/home"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Eventos
            </Link>

            <Link
              to="/home#categorias"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Categorias
            </Link>

            <Link
              to="/home#facilitadores"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Facilitadores
            </Link>

            <Link
              to="/sobre"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Sobre
            </Link>
          </nav>

          {/* Placeholder (sem auth por enquanto) */}
          <div className="w-[120px]" aria-hidden />
        </div>
      </div>
    </header>
  );
};

export default Header;
