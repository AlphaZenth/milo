import { motion } from "framer-motion";
import vineyardLabeled from "@/assets/vineyard-labeled.jpeg";

const StorySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={vineyardLabeled}
              alt="Milo and Kimchi labeled at the vineyard"
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
            <h2 className="text-4xl md:text-5xl font-black uppercase text-foreground">
              THE SIDEKICK ARC
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Before the pumps.<br />
                Before the hype.<br />
                Before memecoin madness.
              </p>
              <p className="font-semibold text-foreground">
                There was just friendship.
              </p>
              <p>
                Kimchi pumped.
              </p>
              <p className="text-2xl font-bold text-primary">
                Now it's Milo's turn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
