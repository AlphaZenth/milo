import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import vineyardPost from "@/assets/vineyard-post.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${vineyardPost})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tight text-primary-foreground mb-4"
        >
          MILO IS KIMCHI <span className="text-gradient-gold">BFFS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-primary-foreground/80 mb-6"
        >
          A 2021 Instagram post proved it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/70 text-lg mb-10 leading-relaxed"
        >
          Real friendship.<br />
          Real receipts.<br />
          Real lore.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#receipt"
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:scale-105 transition-transform"
          >
            VIEW THE RECEIPT
          </a>
          <a
            href="#token"
            className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg text-lg hover:scale-105 transition-transform"
          >
            BUY $MILO
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
