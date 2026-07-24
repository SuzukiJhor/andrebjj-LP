import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Trophy,
  Users,
  Clock,
  MapPin,
  Instagram,
  Sparkles,
  Facebook,
  Phone,
  MessageCircle,
  Award,
  ArrowRight,
  X,
  Menu,
  HeartHandshake,
  Target,
  Dumbbell,
  GraduationCap
} from "lucide-react";
import heroImg from "/img-01.jpg";
import galeria01 from "/galeria01.jpg";
import galeria02 from "/galeria02.jpg";
import galeria03 from "/galeria03.jpg";
import galeria04 from "/galeria04.jpg";
import galeria05 from "/galeria05.jpg";
import galeria06 from "/galeria06.jpg";
import galeria07 from "/galeria07.jpg";
import dennisAndre from "/dennis-andre.jpg";
import instructorImg from "/img02.jpg";
import logo from "/logo.jpg";

// --- LOGO SVG DENNIS JIU JITSU (DISTINTIVO PREMIUM) ---
const DennisLogo = () => (
  <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-primary group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-shadow">
        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
      </div>
      <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
        ANDRÉ <span className="text-primary">VENTRILHO</span>
      </span>
    </div>
  </button>
);

// --- ANIMAÇÕES REUTILIZÁVEIS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"todos" | "adulto" | "kids" | "competicao">("todos");
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("todas");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Estados do Formulário
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formLevel, setFormLevel] = useState("Iniciante");
  const [formPeriod, setFormPeriod] = useState("Noite");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formName}. Gostaria de agendar uma Aula Experimental na Dennis Jiu Jitsu (Equipe André).\n\nNível: ${formLevel}\nPreferência de Horário: ${formPeriod}\nTelefone: ${formPhone}`;
    const url = `https://wa.me/554499676904?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-slate-100 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">

      {/* NAVBAR STICKY / GLASSMORPHISM */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07080C]/80 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Brand identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <DennisLogo />
          </div>

          {/* Nav links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-slate-300">
            <button onClick={() => scrollTo("sobre")} className="hover:text-amber-400 transition-colors">A Academia</button>            <button onClick={() => scrollTo("professor")} className="hover:text-amber-400 transition-colors">Head Coach</button>
            <button onClick={() => scrollTo("diferenciais")} className="hover:text-amber-400 transition-colors">Diferenciais</button>
            <button onClick={() => scrollTo("horarios")} className="hover:text-amber-400 transition-colors">Horários</button>
            <button onClick={() => scrollTo("galeria")} className="hover:text-amber-400 transition-colors">Galeria</button>
            <button onClick={() => scrollTo("contato")} className="hover:text-amber-400 transition-colors">Contato</button>
          </nav>

          {/* Action button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollTo("contato")}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-xs uppercase tracking-widest"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 rounded-full transition-all group-hover:scale-105" />
              <span className="relative block px-6 py-2.5 rounded-full bg-[#07080C] text-amber-300 transition-colors group-hover:bg-transparent group-hover:text-black">
                Aula Experimental
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400"
            aria-label="Alternar Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Drawer Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0B0D14] border-b border-amber-500/20 px-6 py-6 space-y-4 text-center uppercase text-sm tracking-wider"
            >
              <button onClick={() => scrollTo("sobre")} className="block w-full py-2 text-slate-300 hover:text-amber-400">A Academia</button>              <button onClick={() => scrollTo("professor")} className="block w-full py-2 text-slate-300 hover:text-amber-400">Head Coach</button>
              <button onClick={() => scrollTo("diferenciais")} className="block w-full py-2 text-slate-300 hover:text-amber-400">Diferenciais</button>
              <button onClick={() => scrollTo("horarios")} className="block w-full py-2 text-slate-300 hover:text-amber-400">Horários</button>
              <button onClick={() => scrollTo("galeria")} className="block w-full py-2 text-slate-300 hover:text-amber-400">Galeria</button>
              <button onClick={() => scrollTo("contato")} className="block w-full py-2 text-slate-300 hover:text-amber-400">Contato</button>
              <button
                onClick={() => scrollTo("contato")}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full mt-4"
              >
                Agendar Aula Experimental
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Overlay & Visuals */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Professor Andre"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-[#07080C]/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Selo de Aliança */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>ANDRÉ VENTRILHO &bull; Dennis Jiu Jitsu</span>
            </motion.div>

            {/* Logo Central Highlight */}
            <motion.div variants={fadeInUp} className="mb-6">
              <DennisLogo />
            </motion.div>

            {/* Título Principal Monumental */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold uppercase text-white tracking-tight leading-[1.05] mb-6">
              Forma <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Campeões.</span><br />
              Transforma <span className="text-slate-200">Pessoas.</span>
            </motion.h1>

            {/* Subtítulo Institucional */}
            <motion.p variants={fadeInUp} className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-10">
              A <strong className="text-white font-semibold">Dennis Jiu Jitsu</strong>, em parceria estratégica com a <strong className="text-amber-400 font-semibold">o professor André Ventrilho</strong>, oferece metodologia de padrão internacional para iniciantes, praticantes de defesa pessoal e atletas de alto rendimento.
            </motion.p>

            {/* Botões CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("contato")}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Agendar Aula Experimental</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("equipes")}
                className="px-8 py-4 bg-white/5 border border-white/15 hover:border-amber-500/50 text-white font-semibold uppercase tracking-wider text-sm rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Conhecer a Equipe</span>
              </button>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10 w-full max-w-4xl text-left">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Defesa Pessoal</h4>
                  <p className="text-slate-400 text-xs">Técnicas Reais</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Alto Nível</h4>
                  <p className="text-slate-400 text-xs">Atletas e Campeões</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Ambiente Familiar</h4>
                  <p className="text-slate-400 text-xs">Respeito e União</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">Metodologia</h4>
                  <p className="text-slate-400 text-xs">Didática Progressiva</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOBRE A ACADEMIA ================= */}
      <section id="sobre" className="py-28 bg-[#0B0D14] relative border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual Column / Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-b from-white/5 to-transparent p-2">
                <img
                  src={dennisAndre}
                  alt="Aulas Dennis Jiu Jitsu"
                  className="rounded-xl w-full h-[480px] object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-transparent opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#07080C]/90 border border-amber-500/30 backdrop-blur-md">
                  <div>
                    <h4 className="text-amber-400 font-bold uppercase text-sm tracking-wider">Excelência & Tradição</h4>
                    <p className="text-slate-300 text-xs mt-1">Sua jornada da faixa branca à faixa preta em um ambiente estruturado e acolhedor.</p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-500/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/40 rounded-br-2xl pointer-events-none" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">Sobre a Nossa Academia</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-6 uppercase leading-tight">
                Uma Aliança Fundada na <span className="text-amber-400">Excelência Técnica</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                Treine com o Professor André Ventrilho.
                Jiu-Jitsu com método e disciplina em um ambiente que forma atletas.
                <strong className="text-white"> Técnicas eficientes para situações reais.</strong> Aprenda a se proteger e ganhe confiança inabalável.
                Treinamento de alto nível para quem busca testar seus  <strong className="text-white">limites</strong> em campeonatos e torneios.

                Um ambiente de <strong className="text-white">respeito </strong> e camaradagem onde todos evoluem juntos, do faixa branca ao preta.
              </p>

              {/* Grid de Valores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                  <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Foco & Disciplina</h4>
                    <p className="text-slate-400 text-xs mt-1">Formação de caráter através da constância no tatame.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Comunidade Viva</h4>
                    <p className="text-slate-400 text-xs mt-1">Suporte mútuo entre colegas de treino e mestres.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= PROFESSOR / HEAD COACH ================= */}
      <section id="professor" className="py-28 bg-[#0B0D14] border-y border-amber-500/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Instructor Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-[#07080C]">
                <img
                  src={instructorImg}
                  alt="Professor André Ventrilho"
                  className="w-full h-[540px] object-cover object-top filter  hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded bg-amber-500 text-black font-bold text-xs uppercase tracking-wider">
                    Head Coach
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-2">André Ventrilho</h3>
                  <p className="text-xs text-amber-300 uppercase tracking-widest">Faixa Preta &bull; Professor</p>
                </div>
              </div>

              {/* Decorative Shield Backdrop */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-amber-500/10 rounded-full filter blur-2xl pointer-events-none" />
            </motion.div>

            {/* Content & Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">Liderança Técnica</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-6 uppercase leading-tight">
                Professor André Ventrilho
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
                Com mais de 10 anos de experiência nos tatames, o Professor dedica sua vida ao ensino e disseminação do verdadeiro Jiu-Jitsu Brasileiro. Focado na formação de caráter e na excelência técnica.              </p>

              {/* Conquistas & Highlights */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Faixa Preta Certificado</h4>
                    <p className="text-slate-400 text-xs">Graduação reconhecida pelas principais federações mundiais.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Multicampeão de Jiu-Jitsu</h4>
                    <p className="text-slate-400 text-xs">Pódios expressivos em campeonatos estaduais e nacionais.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Especialista em Defesa Pessoal</h4>
                    <p className="text-slate-400 text-xs">Técnicas com aplicação no mundo real para todas as idades.</p>
                  </div>
                </div>
              </div>

              {/* Citação Inspiradora */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
                <p className="text-slate-200 italic text-sm sm:text-base font-serif">
                  "O Jiu-Jitsu não é sobre ser melhor que o outro. É sobre ser melhor do que você era ontem."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DIFERENCIAIS ================= */}
      <section id="diferenciais" className="py-28 bg-[#07080C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">Por Que Treinar Conosco</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-4 uppercase">
              Diferenciais de uma Academia Premium
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Estrutura planejada para garantir segurança, alto aprendizado técnico e resultados reais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Defesa Pessoal",
                desc: "Aprenda a se defender em situações reais com controle técnico e inteligência emocional."
              },
              {
                icon: Trophy,
                title: "Alta Competição",
                desc: "Treinos específicos, periodização e suporte completo para atletas de rendimento."
              },
              {
                icon: Users,
                title: "Jiu-Jitsu Infantil",
                desc: "Metodologia lúdica que desenvolve disciplina, foco e respeito desde os primeiros anos."
              },
              {
                icon: Dumbbell,
                title: "Jiu-Jitsu Adulto",
                desc: "Turmas para iniciantes e avançados em horários flexíveis para adaptar à sua rotina."
              },
              {
                icon: Sparkles,
                title: "Condicionamento",
                desc: "Queima calórica intensa, ganho de força funcional e flexibilidade no tatame."
              },
              {
                icon: HeartHandshake,
                title: "Ambiente Familiar",
                desc: "Espaço acolhedor, limpo e seguro onde toda a família treina com tranquilidade."
              },
              {
                icon: GraduationCap,
                title: "Professores Qualificados",
                desc: "Instrução por Faixas Pretas credenciados e em constante atualização técnica."
              },
              {
                icon: Target,
                title: "Evolução Técnica",
                desc: "Acompanhamento passo a passo do seu progresso, da branca à faixa preta."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0B0D14] border border-white/5 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2 uppercase">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HORÁRIOS ================= */}
      <section
        id="horarios"
        className="py-28 bg-[#0B0D14] border-t border-amber-500/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">
              Grade de Treinos
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-4 uppercase">
              Horários de Aulas
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-light">
              Escolha o programa ideal para a sua rotina e agende sua aula
              experimental.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "todos", label: "Todas as Turmas" },
                { id: "adulto", label: "Jiu-Jitsu Adulto" },
                { id: "kids", label: "Jiu-Jitsu Kids" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                      ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Centralizados */}
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {/* Bloco Manhã */}
            <div className="w-full md:max-w-[460px] flex-1 rounded-2xl bg-[#07080C] border border-amber-500/20 p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Clock className="text-amber-400" size={24} />

                <div>
                  <h3 className="text-lg font-serif font-bold text-white uppercase">
                    Turno Manhã
                  </h3>

                  <span className="text-xs text-slate-400">
                    Segunda a Sexta
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold">
                      12:00 - 13:00
                    </span>

                    <span className="text-[10px] uppercase font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">
                      Adulto
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mt-2">
                    Jiu-Jitsu Todos os Níveis
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco Noite */}
            <div className="w-full md:max-w-[460px] flex-1 rounded-2xl bg-[#07080C] border border-amber-500/20 p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Clock className="text-amber-400" size={24} />

                <div>
                  <h3 className="text-lg font-serif font-bold text-white uppercase">
                    Turno Noite
                  </h3>

                  <span className="text-xs text-slate-400">
                    Segunda a Sexta
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold">
                      19:30 - 21:00
                    </span>

                    <span className="text-[10px] uppercase font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">
                      Todas as Turmas
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mt-2">
                    Jiu-Jitsu Todos os Níveis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALERIA DE FOTOS ================= */}
      <section id="galeria" className="py-28 bg-[#07080C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">Vida no Tatame</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-4 uppercase">
              Galeria da Academia
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Confira os bastidores do nosso dia a dia, eventos e conquistas.
            </p>
          </div>

          {/* Masonry Grid Simulation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                url: galeria01,
                title: "Treino Geral de Sexta"
              },
              {
                url: galeria02,
                title: "Graduação de Faixas"
              },
              {
                url: galeria03,
                title: "Turma Kids em Ação"
              },
              {
                url: galeria04,
                title: "Preparação para Campeonato"
              },
              {
                url: galeria05,
                title: "Aulão de Defesa Pessoal"
              },
              {
                url: galeria06,
                title: "Espírito de Equipe"
              },
              {
                url: galeria07,
                title: "Espírito de Equipe"
              }
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedImage(photo.url)}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer border border-white/10 hover:border-amber-500/50"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{photo.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-amber-500/30">
              <img src={selectedImage} alt="Preview" className="w-full h-full object-contain" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-amber-400"
              >
                <X size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CALL TO ACTION (CTA) ================= */}
      <section className="py-24 bg-gradient-to-b from-[#0B0D14] to-[#07080C] relative overflow-hidden border-t border-amber-500/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <DennisLogo />
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white uppercase tracking-tight mb-6">
            Venha Fazer Parte da <span className="text-amber-400">Dennis Jiu Jitsu</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light mb-10">
            Dê o primeiro passo no tatame com uma aula experimental gratuita. Nossa equipe técnica está pronta para receber você e sua família.
          </p>

          <button
            onClick={() => scrollTo("contato")}
            className="px-10 py-5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-black font-extrabold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <span>Garantir Minha Aula Experimental</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contato" className="py-28 bg-[#07080C] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info & Map Column */}
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">Entre em Contato</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-3 mb-6 uppercase">
                Agende Sua Aula Experimental
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light mb-10">
                Preencha o formulário ou entre em contato diretamente pelo WhatsApp. Ficaremos felizes em responder suas dúvidas.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Endereço</h4>
                    <p className="text-slate-400 text-xs mt-1">Av. Brasil, 5829 - Zona 05 &bull; Maringá - PR</p>
                    <p className="text-slate-400 text-xs">CEP: 87014-140</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">WhatsApp / Telefone</h4>
                    <p className="text-slate-400 text-xs mt-1">(44) 9967-6904</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg shrink-0">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase">Instagram</h4>
                    <a
                      href="https://www.instagram.com/andre_henrique1982/"
                      target="_blank"
                      rel="noopener noreferrer">

                      <p className="text-slate-400 text-xs mt-1">@andre_henrique1982</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-amber-500/20">
                <iframe
                  title="Mapa da Academia Dennis Jiu Jitsu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.1783850165565!2d-51.94218968841407!3d-23.418790078809063!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd08620df9491%3A0xbbf16e398939c381!2sAv.%20Brasil%2C%205829%20-%20Zona%2005%2C%20Maring%C3%A1%20-%20PR%2C%2087014-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Interactive Form Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0B0D14] border border-amber-500/30 shadow-2xl relative">
              <h3 className="text-2xl font-serif font-bold text-white uppercase mb-2">
                Agendamento Rápido
              </h3>
              <p className="text-slate-400 text-xs font-light mb-8">
                Preencha os dados e fale direto no WhatsApp do Head Coach.
              </p>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(44) 99999-9999"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                      Experiência
                    </label>
                    <select
                      value={formLevel}
                      onChange={(e) => setFormLevel(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#07080C] border border-white/10 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value="Iniciante">Iniciante (Nunca treinou)</option>
                      <option value="Faixa Branca">Faixa Branca</option>
                      <option value="Graduado">Graduado (Azul/Roxa/Marrom)</option>
                      <option value="Kids">Infantil (Kids)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                      Turno Preferido
                    </label>
                    <select
                      value={formPeriod}
                      onChange={(e) => setFormPeriod(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#07080C] border border-white/10 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value="Manhã">Manhã</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noite">Noite</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold uppercase tracking-wider text-xs rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <MessageCircle size={18} />
                  <span>Agendar no WhatsApp</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#05060A] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">

            {/* Logo e Institucional */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <DennisLogo />
              <div>
                <h4 className="text-white font-serif font-bold text-lg uppercase">
                  DENNIS <span className="text-amber-400">JIU JITSU</span>
                </h4>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  Parceria Oficial com o Professor André &bull; Maringá - PR
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/andre_henrique1982"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Instagram da Equipe André"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/554499676904"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Dennis Jiu Jitsu &bull; Professor André. Todos os direitos reservados.</p>
            <p className="uppercase tracking-widest text-[10px]">Tradição &bull; Disciplina &bull; Excelência</p>
          </div>
        </div>
      </footer>

    </div>
  );
}