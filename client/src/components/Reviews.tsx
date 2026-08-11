import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const reviewChapters = [
  {
    id: 1,
    number: "01",
    title: "The crepes, honestly.",
    body: "People drive across the city for them. Thin, warm, generous — the kind of first bite that ends an argument about where to go.",
  },
  {
    id: 2,
    number: "02",
    title: "Warmth you can taste.",
    body: "Our team is known by name in the reviews for a reason. You're welcomed, looked after, and fed like family from the moment you walk in.",
  },
  {
    id: 3,
    number: "03",
    title: "Portions that share.",
    body: "Nothing arrives shy. Plates land loaded, glossy and made to be passed around the table well into the night.",
  },
];

const reviewQuotes = [
  "Genuinely the best crepes in all of Melbourne.",
  "Portions that honestly feed the whole family.",
  "The staff make you feel like a regular on day one.",
  "Dubai pistachio waffle? Absolutely worth the hype.",
  "Open past midnight — our go-to late-night spot.",
  "Presentation is unreal. You eat with your eyes first.",
  "Cosy, warm, perfect for catching up with friends.",
  "Cheesecake with pistachio sauce is dangerous. Order two.",
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-cocoa-800 py-24 md:py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20">
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-400 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Chapter 03 — The Verdict
        </motion.p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <motion.h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            Why people can't stop{" "}
            <span className="font-script text-gold-300">coming back.</span>
          </motion.h2>

          {/* Badge */}
          <motion.div
            className="flex items-center gap-2 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="#F5D061"
                  className="text-gold-400"
                />
              ))}
            </div>
            <span className="font-display font-bold text-lg">
              <span className="text-gold-300">600+</span> five-star reviews
            </span>
          </motion.div>
        </div>
      </div>

      {/* Chapter cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 mb-20">
        {reviewChapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            className="relative rounded-3xl border border-white/10 bg-cocoa-900/60 p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Quote size={40} className="text-gold-400/50 mb-4" />
            <div className="text-5xl font-display font-black text-gold-400/20 mb-2">
              {chapter.number}
            </div>
            <h3 className="font-display text-2xl font-bold mb-3 text-cream">
              {chapter.title}
            </h3>
            <p className="text-cream-200">{chapter.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Marquee ticker */}
      <div className="border-y border-white/5 py-6">
        <Marquee speed={45} gradient={false} pauseOnHover>
          {reviewQuotes.map((quote, i) => (
            <div
              key={i}
              className="mx-8 inline-flex items-center gap-4 font-display text-2xl md:text-4xl font-bold text-cream/70"
            >
              <span className="text-gold-400">★</span>
              {quote}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
