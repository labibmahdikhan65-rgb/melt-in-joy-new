import { motion } from "framer-motion";
import { Moon, Clock } from "lucide-react";

export default function OpenLate() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden grain"
      id="open-late"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1733560175037-249f8954789b?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000"
          alt="Flowing molten chocolate"
          className="w-full h-full object-cover"
        />
        {/* Overlay 1: dark veil */}
        <div className="absolute inset-0 bg-cocoa-900/80" />
        {/* Overlay 2: vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,rgba(17,10,8,0.92)_80%)]" />
        {/* Overlay 3: red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(230,57,70,0.18),transparent_50%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          className="rounded-full border border-cherry/50 bg-cherry/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-cherry animate-glow-pulse inline-flex items-center gap-2 mb-8"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <Moon size={16} />
          Open Late
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Cravings don't sleep.{" "}
          <span className="font-script text-gold-300">Neither do we.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-cream-200 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          When the rest of Melbourne closes up, we're still pouring chocolate.
          Both stores run deep into the weekend — pull up a chair after midnight.
        </motion.p>

        {/* Hours cards */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Docklands */}
          <div className="rounded-2xl border border-white/10 bg-cocoa-900/60 px-6 py-4 backdrop-blur-xl flex items-center gap-3">
            <Clock className="text-gold-400" size={22} />
            <div className="text-left">
              <div className="font-semibold text-cream">Docklands</div>
              <div className="text-sm text-cream-200">Fri & Sat till 12:30AM</div>
            </div>
          </div>

          {/* Hoppers Crossing */}
          <div className="rounded-2xl border border-white/10 bg-cocoa-900/60 px-6 py-4 backdrop-blur-xl flex items-center gap-3">
            <Clock className="text-cherry" size={22} />
            <div className="text-left">
              <div className="font-semibold text-cream">Hoppers Crossing</div>
              <div className="text-sm text-cream-200">Fri–Sun till 1AM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
