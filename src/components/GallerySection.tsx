import { motion } from "framer-motion";
import vineyardPost from "@/assets/vineyard-post.jpeg";
import vineyardLabeled from "@/assets/vineyard-labeled.jpeg";
import gallerySquad from "@/assets/gallery-squad.png";

const images = [
  { src: vineyardPost, alt: "Kimchi & Milo at vineyard – original 2021 post" },
  { src: vineyardLabeled, alt: "Kimchi & Milo labeled at vineyard" },
  { src: gallerySquad, alt: "Milo, Kimchi & friends – squad goals" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase text-foreground mb-4"
        >
          KIMCHI & MILO <span className="text-gradient-gold">BFF</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 text-lg"
        >
          Documented friendship since 2021.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
