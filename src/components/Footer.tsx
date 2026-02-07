import { Instagram, Facebook, Youtube } from "lucide-react";
import logoRioHeal from "@/assets/logo-rio-heal.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoRioHeal} alt="Rio Heal" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed">
              Conectando pessoas a experiências transformadoras de 
              espiritualidade e autoconhecimento no Rio de Janeiro.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categorias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facilitadores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4">Categorias</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Meditação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Yoga</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retiros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terapias Holísticas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>contato@rioheal.com.br</li>
              <li>(21) 99999-9999</li>
              <li>Rio de Janeiro, RJ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          <p>© 2026 Rio Heal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
