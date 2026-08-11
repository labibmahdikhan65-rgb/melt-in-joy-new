import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Star } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Docklands",
    note: "Right opposite the tram stop.",
    rating: "4.9",
    reviews: 126,
    address: "8 Pearl River Rd, Docklands VIC 3008",
    hours: [
      { day: "Mon", time: "5PM – 11PM" },
      { day: "Tue – Thu", time: "7AM–1PM · 5PM–11PM" },
      { day: "Fri", time: "7AM–1PM · 5:30PM–12:30AM" },
      { day: "Sat", time: "5PM – 12:30AM" },
      { day: "Sun", time: "6PM – 10PM" },
    ],
  },
  {
    id: 2,
    name: "Hoppers Crossing",
    note: "The late-night west-side favourite.",
    rating: "4.8",
    reviews: 492,
    address: "346 Old Geelong Rd, Hoppers Crossing VIC 3029",
    hours: [
      { day: "Mon", time: "6PM – 11:30PM" },
      { day: "Tue", time: "6PM – 11PM" },
      { day: "Wed – Thu", time: "6PM – 12AM" },
      { day: "Fri", time: "6PM – 1AM" },
      { day: "Sat – Sun", time: "5:30PM – 1AM" },
    ],
  },
];

const getDirectionsUrl = (address: string) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
};

const getMapEmbedUrl = (address: string) => {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
};

export default function Locations() {
  return (
    <section
      className="relative mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-32"
      id="locations"
    >
      {/* Header */}
      <div className="max-w-2xl mb-14 md:mb-20">
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-400 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Chapter 02 — Find Us
        </motion.p>
        <motion.h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Two Locations,{" "}
          <span className="font-script text-gold-300">One Obsession.</span>
        </motion.h2>
        <p className="mt-5 text-base md:text-lg text-cream-200">
          Docklands by the tram stop, or the west-side favourite in Hoppers
          Crossing. Same warmth, same melt.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-cocoa-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Map */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              <iframe
                src={getMapEmbedUrl(location.address)}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(0.9) hue-rotate(180deg)",
                }}
                className="grayscale-[0.3] contrast-125"
                loading="lazy"
                title={`Map of ${location.name}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-800" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              {/* Header row */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-caramel">{location.note}</p>
                </div>
                <div className="rounded-full border border-gold-400/40 bg-cocoa-900/60 px-3 py-1.5 flex items-center gap-2 whitespace-nowrap">
                  <Star size={16} fill="#F5D061" className="text-gold-400" />
                  <span className="text-gold-300 font-semibold">
                    {location.rating}
                  </span>
                  <span className="text-cream-400 text-xs">
                    ({location.reviews})
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-cream-200">
                <MapPin size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{location.address}</span>
              </div>

              {/* Hours card */}
              <div className="rounded-2xl border border-white/5 bg-cocoa-900/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-gold-400" />
                  <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-semibold">
                    Hours
                  </span>
                </div>
                <div className="space-y-2">
                  {location.hours.map((hour, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-cream-400">{hour.day}</span>
                      <span className="text-cream-200">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions CTA */}
              <motion.a
                href={getDirectionsUrl(location.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex justify-center gap-2 rounded-full bg-cherry px-6 py-4 font-semibold text-cream shadow-[0_0_25px_rgba(230,57,70,0.4)] hover:shadow-[0_0_40px_rgba(230,57,70,0.65)] transition-all"
                whileTap={{ scale: 0.96 }}
              >
                <Navigation
                  size={18}
                  className="group-hover:-rotate-12 transition-transform"
                />
                Tap for Directions
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
