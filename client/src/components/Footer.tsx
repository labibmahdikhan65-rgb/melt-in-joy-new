import { MapPin, Navigation, Instagram, Music2 } from "lucide-react";

const IG_HANDLE = "meltinjoy";
const IG_URL = "https://instagram.com/meltinjoy";
const TIKTOK_URL = "https://www.tiktok.com/@meltinjoy?is_from_webapp=1&sender_device=pc";

const locations = [
  {
    name: "Docklands",
    address: "8 Pearl River Rd, Docklands VIC 3008",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=8%20Pearl%20River%20Rd%2C%20Docklands%20VIC%203008",
  },
  {
    name: "Hoppers Crossing",
    address: "346 Old Geelong Rd, Hoppers Crossing VIC 3029",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=346%20Old%20Geelong%20Rd%2C%20Hoppers%20Crossing%20VIC%203029",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black pt-20 pb-10">
      {/* Watermark */}
      <div
        className="absolute inset-0 text-[22vw] font-display font-black text-white/[0.03] text-center select-none pointer-events-none"
        aria-hidden
      >
        Melt in Joy
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <div className="font-display font-black text-2xl mb-4">
              <span className="text-cream">Melt</span>
              <span className="font-script text-3xl text-gold-400 -ml-0.5">
                in Joy
              </span>
            </div>
            <p className="text-cream-200 text-sm mb-4">
              Melbourne's late-night dessert bar. Crepes, waffles, Dubai
              chocolate & Saudi coffee — served warm, generous and glossy.
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold-400/40 px-4 py-2 text-gold-300 hover:bg-gold-400 hover:text-cocoa-900 transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Instagram size={16} />
              @{IG_HANDLE}
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @meltinjoy"
              className="rounded-full border border-gold-400/40 px-4 py-2 text-gold-300 hover:bg-gold-400 hover:text-cocoa-900 transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Music2 size={16} />
              TikTok
            </a>
          </div>

          {/* Column 2: Docklands */}
          <div>
            <h4 className="font-display text-xl text-gold-300 mb-4">
              {locations[0].name}
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <p className="text-cream-200 text-sm">{locations[0].address}</p>
            </div>
            <a
              href={locations[0].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cherry hover:underline text-sm inline-flex items-center gap-1"
            >
              <Navigation size={14} />
              Get directions
            </a>
          </div>

          {/* Column 3: Hoppers Crossing */}
          <div>
            <h4 className="font-display text-xl text-gold-300 mb-4">
              {locations[1].name}
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <p className="text-cream-200 text-sm">{locations[1].address}</p>
            </div>
            <a
              href={locations[1].mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cherry hover:underline text-sm inline-flex items-center gap-1"
            >
              <Navigation size={14} />
              Get directions
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Bottom row */}
        <div className="text-xs text-cream-400 flex flex-col md:flex-row md:justify-between gap-4">
          <p>© {currentYear} Melt In Joy. Made with warmth in Melbourne.</p>
          <p>
            Imagery shown is styled placeholder stock — swap with real
            @meltinjoy photos before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
