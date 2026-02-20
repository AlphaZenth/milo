import { motion } from "framer-motion";
import miloLogo from "@/assets/milo-logo.jpeg";

const CharacterSection = () => {
  return (
    <section className="py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="gold-border rounded-full p-2 shadow-xl">
              <img
                src={miloLogo}
                alt="Milo logo — corgi vector art in gold circle"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-black uppercase text-gradient-gold">MILO</h2>
            <p className="text-xl text-foreground font-semibold leading-relaxed">
              The Loyal One.<br />
              The Forgotten BFF.<br />
              Since 2021.
            </p>
            <p className="text-muted-foreground text-sm pt-4">
              Community inspired project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
