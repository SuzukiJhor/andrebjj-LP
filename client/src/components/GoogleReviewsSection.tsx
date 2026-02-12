import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Thiago Carvalho",
    time: "há 4 meses",
    text: "Venha treinar na maior escola de Jiu-Jitsu de Maringá. Ambiente familiar e altamente profissional."
  },
  {
    name: "Francini Valieri",
    time: "há 5 meses",
    text: "Melhor academia de Maringá. Se você procura disciplina e evolução, esse é o lugar certo."
  },
  {
    name: "Fernando Carvalho",
    time: "há 5 meses",
    text: "Excelente ambiente e professor extremamente dedicado. Recomendo muito!"
  }
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Avaliações no <span className="text-primary">Google</span>
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">5.0</span>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://g.page/r/SEU_LINK_GOOGLE_REVIEW"
            target="_blank"
            className="bg-primary text-black px-6 py-3 font-semibold uppercase tracking-wide hover:scale-105 transition-all"
          >
            Avalie-nos no Google
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card border border-white/5 p-8 hover:border-primary/40 transition-colors"
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-white font-semibold">{review.name}</h4>
                <span className="text-gray-500 text-sm">{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
