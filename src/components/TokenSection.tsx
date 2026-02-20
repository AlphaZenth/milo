import { motion } from "framer-motion";

const tokenInfo = [
  { label: "Chain", value: "Solana" },
  { label: "Supply", value: "1,000,000,000" },
  { label: "Tax", value: "0%" },
  { label: "LP", value: "Burned / Locked" },
];

const TokenSection = () => {
  return (
    <section id="token" className="py-20 px-6 section-alt">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase text-foreground mb-12"
        >
          $MILO TOKEN INFO
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {tokenInfo.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:scale-105 transition-transform"
          >
            BUY $MILO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
