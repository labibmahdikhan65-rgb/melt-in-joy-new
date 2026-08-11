import { motion } from "framer-motion";

const menuItems = [
  {
    id: 1,
    name: "Chocolate Joyful Crepe",
    tag: "The famous one",
    accent: "gold",
    span: "lg:col-span-7",
    image:
      "https://images.unsplash.com/photo-1734056650146-bde92ed41f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    desc: "Thin, lacy, folded warm and flooded with molten chocolate. Locals call these the best crepes in Melbourne — we won't argue.",
  },
  {
    id: 2,
    name: "Pistachio Crunch Crepe",
    tag: "Signature",
    accent: "pistachio",
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1723029343498-b061d6594a42?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    desc: "Silky pistachio cream, toasted crunch, a whisper of gold.",
  },
  {
    id: 3,
    name: "Dubai Pistachio Waffle",
    tag: "Warm & fluffy",
    accent: "pistachio",
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1773516035322-e413a151ad14?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    desc: "Golden waffle under a rich, creamy Dubai pistachio-chocolate cascade.",
  },
  {
    id: 4,
    name: "Chocolate Dubai Bar",
    tag: "Viral",
    accent: "gold",
    span: "lg:col-span-7",
    image:
      "https://images.unsplash.com/photo-1551578657-a7e74acb0135?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    desc: "That crackling chocolate shell over kunafa & pistachio. Snap it.",
  },
  {
    id: 5,
    name: "Homemade Cheesecake",
    tag: "House-made",
    accent: "gold",
    span: "lg:col-span-4",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    desc: "Dense, creamy, poured over with our pistachio sauce.",
  },
  {
    id: 6,
    name: "Lotus Cake",
    tag: "Crowd favourite",
    accent: "caramel",
    span: "lg:col-span-4",
    image:
      "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    desc: "Layered caramelised biscuit dream, soft all the way through.",
  },
  {
    id: 7,
    name: "Saudi Coffee",
    tag: "Sip slow",
    accent: "caramel",
    span: "lg:col-span-4",
    image:
      "https://images.unsplash.com/photo-1661685249298-3d2dbe68d309?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    desc: "Fragrant, cardamom-warm, the perfect after-dessert ritual.",
  },
];

const accentMap = {
  gold: "text-gold-300 border-gold-400/40",
  pistachio: "text-pistachio border-pistachio/40",
  caramel: "text-caramel border-caramel/40",
};

export default function Menu() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-32" id="menu">
      {/* Header */}
      <div className="max-w-2xl mb-14 md:mb-20">
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-400 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Chapter 01 — The Cravings
        </motion.p>
        <motion.h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Our{" "}
          <span className="font-script text-gold-300">Menu</span>, made to be
          photographed & devoured.
        </motion.h2>
        <p className="mt-5 text-base md:text-lg text-cream-200">
          Every plate leaves the kitchen glossy, generous and warm. Order with
          your eyes — we designed it that way.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
        {menuItems.map((item, index) => (
          <motion.article
            key={item.id}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-cocoa-800 ${item.span} min-h-[340px] md:min-h-[420px]`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: (index % 2) * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
            />

            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/45 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
              {/* Tag */}
              <div
                className={`rounded-full border bg-cocoa-900/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur-md w-fit mb-3 ${
                  accentMap[item.accent as keyof typeof accentMap]
                }`}
              >
                {item.tag}
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-cream text-shadow-soft mb-2">
                {item.name}
              </h3>

              {/* Description - hidden by default, shown on hover */}
              <p className="text-sm md:text-base text-cream-200 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {item.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
