import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    url: "https://instagram.com/Milosploots",
  },
  {
    name: "Telegram",
    icon: <Send size={24} />,
    url: "https://t.me/Milosploots",
  },
  {
    name: "X",
    icon: <XIcon />,
    url: "https://x.com/Milosploots",
  },
];

const SocialSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase text-foreground mb-12"
        >
          FOLLOW MILO
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-xl font-semibold text-foreground hover:scale-105 transition-transform text-lg"
            >
              {social.icon}
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
