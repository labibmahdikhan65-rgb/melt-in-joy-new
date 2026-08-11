import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const wordVariants = {
  hidden: { y: "115%", opacity: 0, skewY: 8 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: {
      delay: 0.35 + i * 0.16,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const overlineVariants = {
  hidden: { opacity: 0, letterSpacing: "0.1em" },
  show: {
    opacity: 1,
    letterSpacing: "0.4em",
    transition: { delay: 0.15, duration: 1 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: 1.15, duration: 0.9 } },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: 1.35, duration: 0.9 } },
};

const ratingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.6 + i * 0.15, duration: 0.8 },
  }),
};

const scrollCueVariants = {
  animate: {
    y: [0, 10, 0],
    transition: { repeat: Infinity, duration: 2 },
  },
};

export default function Hero() {
  const words = ["Melt", "in", "Joy"];
  const ratings = [
    { rating: "4.9", location: "DOCKLANDS", reviews: "126 reviews" },
    { rating: "4.8", location: "HOPPERS CROSSING", reviews: "492 reviews" },
  ];

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden grain"
      id="top"
    >
      {/* Parallax background */}
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
        {/* Overlay 1: gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa-900/70 via-cocoa-900/55 to-cocoa-900" />
        {/* Overlay 2: warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(234,179,8,0.18),transparent_55%)]" />
      </motion.div>

      {/* Content column */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Overline */}
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold-300 mb-6"
          initial="hidden"
          animate="show"
          variants={overlineVariants}
        >
          Melbourne · Late-Night Dessert Bar
        </motion.p>

        {/* Title with masked word reveal */}
        <h1 className="sr-only">Melt in Joy</h1>
        <div className="font-sugar font-normal leading-[1.2] tracking-normal py-[0.2em]">
          <div className="block text-[22vw] md:text-[17vw] lg:text-[15vw]" aria-hidden>
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.28em]">
                <motion.span
                  className="inline-block px-[0.06em] melt-text"
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-xl text-base md:text-lg text-cream-200 text-shadow-soft"
          initial="hidden"
          animate="show"
          variants={subtitleVariants}
        >
          Crepes that Melbourne swears by. Warm Dubai-pistachio waffles, molten
          chocolate, Saudi coffee — served generously, well past midnight.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
          initial="hidden"
          animate="show"
          variants={ctaVariants}
        >
          {/* Primary CTA */}
          <motion.a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-4 font-semibold text-cocoa-900 shadow-[0_0_30px_rgba(234,179,8,0.45)] hover:shadow-[0_0_45px_rgba(234,179,8,0.7)] transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Explore the Menu
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#locations"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold text-cream hover:border-gold-400 hover:text-gold-300 transition-colors"
            whileTap={{ scale: 0.96 }}
          >
            <MapPin size={18} className="inline mr-2" />
            Find a Store
          </motion.a>
        </motion.div>

        {/* Rating pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {ratings.map((pill, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 rounded-2xl backdrop-blur-xl bg-cocoa-900/50 border border-white/10 px-5 py-3"
              custom={i}
              initial="hidden"
              animate="show"
              variants={ratingVariants}
            >
              <div>
                <div className="text-2xl font-display font-black text-gold-300">
                  {pill.rating}
                </div>
                <div className="text-[10px] tracking-[0.18em] text-cream-400 uppercase">
                  {pill.location}
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="#F5D061"
                      className="text-gold-400"
                    >
                      <path d="M6.5 1L8.5 5.5H13L9.5 8.5L10.5 13L6.5 10L2.5 13L3.5 8.5L0 5.5H4.5L6.5 1Z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-cream-200">{pill.reviews}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-400"
        animate="animate"
        variants={scrollCueVariants}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
