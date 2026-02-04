import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-secondary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Soulful
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#eventos" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Eventos
            </a>
            <a href="#categorias" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Categorias
            </a>
            <a href="#facilitadores" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Facilitadores
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Sobre
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Entrar
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Criar Conta
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;