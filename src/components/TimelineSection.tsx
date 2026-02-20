import { motion } from "framer-motion";

const events = [
  { year: "2021", label: "Vineyard Post" },
  { year: "2022", label: "Quiet Era" },
  { year: "2023", label: "Market Cycles" },
  { year: "2024", label: "Kimchi Narrative" },
  { year: "2025", label: "Milo Awakens" },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase text-foreground mb-16"
        >
          THE TIMELINE
        </motion.h2>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-border" />
          <div className="flex justify-between relative">
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md mb-4" />
                <span className="text-xl font-bold text-foreground">{event.year}</span>
                <span className="text-sm text-muted-foreground mt-1">{event.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-8 relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
          {events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-4"
            >
              <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
              <div className="text-left">
                <span className="text-lg font-bold text-foreground">{event.year}</span>
                <span className="text-sm text-muted-foreground ml-2">{event.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
