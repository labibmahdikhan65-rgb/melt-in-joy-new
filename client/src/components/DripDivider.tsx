import { motion } from "framer-motion";

/**
 * DripDivider - Melting chocolate seam between sections
 * Positioned absolutely at top of each section wrapper
 * SVG with 8 rounded U-shaped drips + falling droplets animation
 */
export default function DripDivider() {
  return (
    <div
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen leading-[0] z-20"
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[64px] drop-shadow-[0_10px_14px_rgba(0,0,0,0.45)]"
      >
        <defs>
          {/* Drip chocolate gradient */}
          <linearGradient id="dripChoco" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2F27" />
            <stop offset="45%" stopColor="#3E2723" />
            <stop offset="100%" stopColor="#2A1C17" />
          </linearGradient>

          {/* Drip sheen gradient */}
          <linearGradient id="dripSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAB308" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main drip path with 8 U-shaped drips */}
        <path
          fill="url(#dripChoco)"
          d="M0,0 H1200 V28
          C1160,60 1090,60 1050,28
          C1010,82 940,82 900,28
          C860,64 790,64 750,28
          C710,84 640,84 600,28
          C560,66 490,66 450,28
          C410,80 340,80 300,28
          C260,62 190,62 150,28
          C110,82 40,82 0,28 Z"
        />

        {/* Top sheen */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="10"
          fill="url(#dripSheen)"
        />
      </svg>

      {/* Falling droplets */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute h-3 w-2 rounded-full bg-[#3E2723]"
          style={{
            left: ["25%", "50%", "75%"][i],
            top: [44, 46, 44][i],
          }}
          initial={{ y: 0, opacity: 0, scaleY: 0.6 }}
          animate={{ y: [0, 26], opacity: [0, 1, 0], scaleY: [0.6, 1.4, 1] }}
          transition={{
            duration: 1.8,
            delay: [0, 1.1, 0.5][i],
            repeat: Infinity,
            repeatDelay: 1.6,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
