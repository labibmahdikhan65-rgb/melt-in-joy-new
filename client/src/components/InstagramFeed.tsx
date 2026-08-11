import { motion } from "framer-motion";
import { Instagram, Heart, ArrowUpRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const IG_HANDLE = "meltinjoy";
const IG_URL = "https://instagram.com/meltinjoy";

const igTiles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1734056650146-bde92ed41f5b?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Chocolate Joyful Crepe 🍫",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1773516035322-e413a151ad14?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Dubai pistachio waffle 💚",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Late-night cheesecake",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1723029343498-b061d6594a42?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Strawberries & cream crepe",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Lotus cake, layered",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1661685249298-3d2dbe68d309?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Saudi coffee ritual ☕",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1561767035-353bd695992c?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Molten & glossy",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1734772045171-2af52aea78af?crop=entropy&cs=srgb&fm=jpg&q=80&w=700",
    caption: "Loaded, always",
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative overflow-hidden bg-cocoa-900 py-24 md:py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 md:mb-20">
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-400 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Chapter 04 — The Feed
        </motion.p>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <motion.h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            Fresh from the pan,{" "}
            <span className="font-script text-gold-300">straight to the feed.</span>
          </motion.h2>

          {/* Follow button */}
          <motion.a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cherry to-gold-400 px-6 py-3.5 font-semibold text-cocoa-900 shadow-[0_0_25px_rgba(234,179,8,0.35)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all whitespace-nowrap"
            whileTap={{ scale: 0.96 }}
          >
            <Instagram size={18} />
            Follow @{IG_HANDLE}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.a>
        </div>
      </div>

      {/* Gallery */}
      <motion.div
        className="mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <Marquee speed={40} gradient={false} pauseOnHover autoFill>
          {igTiles.map((tile) => (
            <a
              key={tile.id}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-3 block h-56 w-56 md:h-72 md:w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={tile.image}
                alt={tile.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/90 via-cocoa-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2">
                <div className="flex gap-2">
                  <Heart size={15} fill="#E63946" className="text-cherry" />
                  <Instagram size={15} className="text-gold-400" />
                </div>
                <p className="text-sm text-cream text-center px-4">
                  {tile.caption}
                </p>
              </div>
            </a>
          ))}
        </Marquee>
      </motion.div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8">
        <p className="text-xs text-cream-400/70">
          Placeholder gallery — connect the Instagram Graph API or a widget
          service to stream @meltinjoy's latest posts automatically.
        </p>
      </div>
    </section>
  );
}
