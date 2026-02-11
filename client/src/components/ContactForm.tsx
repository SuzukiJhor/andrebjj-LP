import { Button } from "@/components/ui/custom-button";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <section
      id="contato"
      className="bg-background py-20 px-4"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6"
        >
          Entre em Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-300 text-lg mb-12"
        >
          Entre em contato pelo WhatsApp ou Instagram e agende sua primeira aula.
          Não é necessário ter experiência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/554499676904"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
                  flex items-center justify-center gap-4 
                  border border-white/20 
                  rounded-lg p-6 
                  transition-all duration-300

                  bg-primary text-black      /* Mobile padrão */

                  md:bg-transparent md:text-white  /* Desktop padrão */
                  md:hover:bg-primary md:hover:text-black
        "
            >
              <FaWhatsapp className="text-3xl" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                Falar no WhatsApp
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/andre_henrique1982/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="
                  flex items-center justify-center gap-4 
                  border border-white/20 
                  rounded-lg p-6 
                  transition-all duration-300

                  bg-primary text-black      /* Mobile padrão */

                  md:bg-transparent md:text-white  /* Desktop padrão */
                  md:hover:bg-primary md:hover:text-black
        ">
              <FaInstagram className="text-3xl" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                Chamar no Instagram
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
