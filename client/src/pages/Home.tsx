import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/custom-button";
import { Trophy, Users, Shield, Clock, MapPin, Instagram, Facebook, Phone } from "lucide-react";
import heroImg from "/img-01.jpg";
import instructorImg from "/img02.jpg";
import ScheduleSection from "@/components/ScheduleSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import LazyVideo from "@/components/LazyVideo";
import AnimatedPhrase from "@/components/AnimatedPhrase";

const words = [
  { text: "Cada", highlight: false },
  { text: "treino", highlight: true },
  { text: "é", highlight: false },
  { text: "uma", highlight: false },
  { text: "evolução.", highlight: true },
  { text: "Cada", highlight: false },
  { text: "queda,", highlight: true },
  { text: "um", highlight: false },
  { text: "aprendizado.", highlight: true }
];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen md:h-screen flex flex-col overflow-hidden bg-black">
        {/* Container da Imagem */}
        <div className="relative h-[45vh] md:absolute md:inset-0 md:h-full w-full z-0">
          <img
            src={heroImg}
            className="w-full h-full object-cover object-top md:object-center md:scale-105 animate-in fade-in duration-1000"
            alt="Hero"
          />
          {/* Overlay que escurece a base da imagem no mobile e o fundo todo no desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 md:via-black/60 to-transparent md:bg-black/40" />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 container relative z-10 px-4 flex items-center">
          <div className="w-full py-12 md:py-0 text-center md:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs md:text-base">
                  Academia de Jiu-Jitsu
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 uppercase">
                Disciplina<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Respeito</span><br />
                <span className="text-primary">Evolução</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-gray-300 text-base md:text-xl max-w-2xl mb-10 leading-relaxed font-light mx-auto md:mx-0">
                Treine com o Professor André Ventrilho.
                <br className="hidden md:block" />
                Jiu-Jitsu com método e disciplina em um ambiente que forma atletas.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Agendar Aula Experimental
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black"
                  onClick={() => document.getElementById('horarios')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Horários
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section id="metodologia" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="container relative z-10 px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Nossa Filosofia</span>
            <h2 className="text-4xl md:text-5xl text-white mb-6">Metodologia Exclusiva</h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Defesa Pessoal",
                description: "Técnicas eficientes para situações reais. Aprenda a se proteger e ganhe confiança inabalável."
              },
              {
                icon: Trophy,
                title: "Competição",
                description: "Treinamento de alto nível para quem busca testar seus limites em campeonatos e torneios."
              },
              {
                icon: Users,
                title: "Comunidade",
                description: "Um ambiente de respeito e camaradagem onde todos evoluem juntos, do faixa branca ao preta."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-card border border-white/5 p-8 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <item.icon size={80} className="text-primary" />
                </div>
                <div className="h-14 w-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  <item.icon size={28} className="text-primary group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR SECTION */}
      <section id="instrutor" className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 border-2 border-primary/30 p-2">
                <img
                  src={instructorImg}
                  alt="Head Instructor"
                  className="w-full h-auto md:grayscale md:hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Head Coach</span>
              <h2 className="text-4xl md:text-5xl text-white mt-2 mb-6">Professor Mestre</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Com mais de 10 anos de experiência nos tatames, o Professor dedica sua vida ao ensino e disseminação do verdadeiro Jiu-Jitsu Brasileiro.
                Focado na formação de caráter e na excelência técnica.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-white font-medium">Faixa Preta</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-white font-medium">Bicampeão Sulamericano</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-white font-medium">Defesa Pessoal</span>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-l-4 border-primary">
                <p className="italic text-gray-400">
                  "O Jiu-Jitsu não é sobre ser melhor que o outro. É sobre ser melhor do que você era ontem."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">

        {/* VIDEO */}
        <LazyVideo src="https://iulfmfgpbuhnoosdmktj.supabase.co/storage/v1/object/public/videos/bjj.mp4" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">

          <AnimatedPhrase words={words}/>
        </div>

      </section>

      {/* SCHEDULE SECTION */}
      <ScheduleSection />

      {/* CONTACT SECTION */}
      <section id="contato" className="py-24 bg-[#050505] relative border-t border-white/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">Comece Hoje</span>
              <h2 className="text-4xl md:text-5xl text-white mb-8">Agende sua Aula Experimental Gratuita</h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                Fale conosco pelo WhatsApp ou Instagram e agende sua primeira aula. Esperamos você no tatame.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Localização</h4>
                    <p className="text-gray-400">Av. Mandacaru, 649 - Zona 06, 87080-000</p>
                    <p className="text-gray-400">Sobreloja</p>
                    <p className="text-gray-400">Maringá - PR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Contato</h4>
                    <p className="text-gray-400">(44)9967-6904</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg mb-1">Funcionamento</h4>
                    <p className="text-gray-400">Seg - Sex: 06:00 - 22:00</p>
                    <p className="text-gray-400">Sáb: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-white/10 p-8 rounded-sm shadow-2xl relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full pointer-events-none"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-white tracking-wide">
                ANDRÉ <span className="text-primary">VENTRILHO</span>
              </span>
            </div>

            <div className="flex gap-6">
              <a href="https://www.instagram.com/andre_henrique1982" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.instagram.com/andre_henrique1982" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
            </div>

            <p className="text-gray-600 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} André Ventrilho Brazilian Jiu-Jitsu. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
