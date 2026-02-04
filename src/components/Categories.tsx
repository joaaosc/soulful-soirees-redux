import { Brain, Heart, Mountain, Sparkles, Flame, BookOpen } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "Meditação",
    description: "Encontre paz interior através de práticas meditativas guiadas",
    count: 24,
  },
  {
    icon: Heart,
    title: "Yoga",
    description: "Harmonize corpo, mente e espírito com diversas modalidades",
    count: 18,
  },
  {
    icon: Mountain,
    title: "Retiros",
    description: "Experiências imersivas em lugares de poder e natureza",
    count: 12,
  },
  {
    icon: Sparkles,
    title: "Terapias Holísticas",
    description: "Cura energética, reiki, constelação familiar e mais",
    count: 31,
  },
  {
    icon: Flame,
    title: "Rituais",
    description: "Cerimônias sagradas e práticas ancestrais",
    count: 15,
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Aprenda novas técnicas e desenvolva sua espiritualidade",
    count: 22,
  },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label">Categorias</span>
          <h2 className="section-title mt-3">Explore por Interesse</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Descubra eventos alinhados com sua jornada espiritual em diversas categorias
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="category-card group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium text-secondary">
                    {category.count} eventos disponíveis
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;