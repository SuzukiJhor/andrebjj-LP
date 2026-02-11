import { Button } from "@/components/ui/custom-button";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-14 h-14 text-primary" />
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-widest mb-6">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-6">
            Página não encontrada
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Assim como no tatame, cada movimento tem direção.
            <br />
            Parece que você saiu da área de combate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="uppercase tracking-wide"
              onClick={() => setLocation("/")}
            >
              Voltar para o Início
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black uppercase tracking-wide"
              onClick={() =>
                window.open("https://wa.me/554499676904", "_blank")
              }
            >
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
