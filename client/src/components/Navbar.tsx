import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import logo from "/logo.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function redirectTOWhatsApp() {
    window.open("https://wa.me/554499676904", "_blank");
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10 py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        <button onClick={() => scrollToSection("hero")}>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-primary group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-shadow">
              <img src={logo} alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
              ANDRÉ <span className="text-primary">VENTRILHO</span>
            </span>
          </div>
        </button>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("metodologia")}
            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Metodologia
          </button>
          <button
            onClick={() => scrollToSection("instrutor")}
            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Instrutor
          </button>
          <button
            onClick={() => scrollToSection("horarios")}
            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            Horários
          </button>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("contato")}
          >
            Aula Experimental
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left py-2 px-4 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary hover:bg-white/5 rounded-sm"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("metodologia")}
            className="text-left py-2 px-4 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary hover:bg-white/5 rounded-sm"
          >
            Metodologia
          </button>
          <button
            onClick={() => scrollToSection("instrutor")}
            className="text-left py-2 px-4 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary hover:bg-white/5 rounded-sm"
          >
            Instrutor
          </button>
          <button
            onClick={() => scrollToSection("horarios")}
            className="text-left py-2 px-4 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary hover:bg-white/5 rounded-sm"
          >
            Horários
          </button>

          <Button
            variant="default"
            className="w-full mt-2"
            onClick={() => redirectTOWhatsApp()}
          >
            Agendar Aula
          </Button>
        </div>
      )}
    </nav>
  );
}
