import { motion } from "framer-motion";
import vineyardPost from "@/assets/vineyard-post.jpeg";
import { ExternalLink } from "lucide-react";

const ReceiptSection = () => {
  return (
    <section id="receipt" className="py-20 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-foreground mb-4">
            📜 THE 2021 RECEIPT
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            On September 27, 2021, @therufflifeofkimchi posted Kimchi and Milo together at a vineyard. Calling them best of friends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <img
              src={vineyardPost}
              alt="Instagram post from therufflifeofkimchi showing Milo and Kimchi at Jason's Vineyard, September 2021"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">The Original Post</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              "Had so much sipping water at the vineyard with @milosploots 🍷"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is the moment. Documented on Instagram. Two BFFs hanging out at Jason's Vineyard. The friendship was real — and it was on the blockchain of social media long before any token existed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://www.instagram.com/p/CUV0G6JLzyY/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                <ExternalLink size={18} />
                VIEW ORIGINAL POST
              </a>
              <a
                href="https://www.instagram.com/p/CV8w_KBvQpR/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-muted-foreground text-muted-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                <ExternalLink size={18} />
                VIEW SECOND POST
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReceiptSection;
