import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, IceCream, Sparkles, Cookie, CupSoda, Flame, Coffee } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tag?: string;
  image?: string;
  span?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: any;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "crepes",
    title: "Crepes",
    icon: Utensils,
    items: [
      {
        name: "Joyful Crepe",
        price: "$20",
        desc: "Three Crepes cut into fettucine-style pieces, served with your choice of sauce and a scoop of ice cream on top",
        tag: "The famous one",
        image: "https://images.unsplash.com/photo-1734056650146-bde92ed41f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        span: "lg:col-span-7",
      },
      {
        name: "Pistachio Crunch Crepe",
        price: "$22",
        desc: "Three Crepes cut into fettucine-style pieces, served with Belgian Chocolate, Pistachio sauce, Crunchy Kataifi and a scoop of ice cream on top",
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1723029343498-b061d6594a42?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-5",
      },
      {
        name: "Classic Crepe",
        price: "$16",
        desc: "Two Crepes cut into fettucine-style pieces served with your choice of sauce",
      },
      {
        name: "Lemon & Sugar Crepe",
        price: "$15",
        desc: "Two Crepes cut into fettucine-style pieces, tossed in sugar and served with fresh lemon wedges",
      },
      {
        name: "Crepe Fruit",
        price: "$18",
        desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries, Pineapple, Kiwi and Banana",
      },
      {
        name: "Strawberry Crepe",
        price: "$17",
        desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries",
      },
      {
        name: "Banana Crepe w Ice Cream",
        price: "$17",
        desc: "One banana wrapped in a crepe, cut into bite-sized pieces, Served with your choice of sauce and a scoop of ice cream",
      },
      {
        name: "Oreo Crepe",
        price: "$16",
        desc: "A crepe filled with cream and crushed Oreo, coated in Belgian milk chocolate",
      },
      {
        name: "Brownie Crepe w Ice Cream",
        price: "$20",
        desc: "Two crepes cut into fettucine-style pieces, topped with Belgian milk chocolate and covered in brownie chunks with a scoop of ice cream on top",
      },
      {
        name: "Cinnamon Crepe",
        price: "$17",
        desc: "Two crepes cut into fettucine-style pieces, tossed with cinnamon sugar and a scoop of ice cream on top",
      },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    icon: IceCream,
    items: [
      {
        name: "Large Waffle Bites",
        price: "$20",
        desc: "Three waffles cut into bite-sized pieces, topped with strawberries, ice cream and your choice of sauce",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1773516035322-e413a151ad14?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-5",
      },
      {
        name: "Brownie Waffle w Ice Cream",
        price: "$20",
        desc: "Two waffles cut into bite-sized pieces, topped with Belgian milk chocolate and chunks of brownies with a scoop of ice cream on top.",
        tag: "Warm & indulgent",
        image: "https://images.unsplash.com/photo-1551578657-a7e74acb0135?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        span: "lg:col-span-7",
      },
      {
        name: "Classic Waffle Pop",
        price: "$10",
        desc: "A single waffle served on a stick with your choice of sauce",
      },
      {
        name: "Small Waffle Bites",
        price: "$16",
        desc: "Two waffles cut into bite-sized pieces, topped with strawberries and your choice of sauce",
      },
      {
        name: "Waffle Fruit",
        price: "$18",
        desc: "Two half-waffles filled with fresh strawberries, banana, kiwi and pineapple, topped with luscious Belgian milk chocolate.",
      },
      {
        name: "Waffle Ice Cream Sandwich",
        price: "$18",
        desc: "Two waffles filled with ice cream topped with luscious Belgian milk chocolate.",
      },
      {
        name: "Salted Caramel Waffle w Ice Cream",
        price: "$15",
        desc: "A single waffle lathered in warm salted caramel sauce and paired with a scoop of vanilla ice cream",
      },
    ],
  },
  {
    id: "strawberries",
    title: "Strawberries",
    icon: Sparkles,
    items: [
      {
        name: "Strawberry Pistachio Crunch Cup",
        price: "$16",
        desc: "Strawberries in a cup, covered with Belgian chocolate and a decadent blend of kataifi and pistachio sauce",
        tag: "Viral sensation",
        image: "https://images.unsplash.com/photo-1543255006-d639546f3c7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
        span: "lg:col-span-7",
      },
      {
        name: "Cup of Joy",
        price: "$14",
        desc: "Strawberries in a cup, covered with Belgian chocolate",
        tag: "Fresh daily",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-5",
      },
      {
        name: "Small Strawberry Bites",
        price: "$5",
        desc: "Two strawberries coated in Belgian chocolate",
      },
      {
        name: "Large Strawberry Bites",
        price: "$8",
        desc: "Four strawberries coated in Belgian chocolate",
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    icon: Cookie,
    items: [
      {
        name: "San Sebastian Cheese Cake",
        price: "$16",
        desc: "With your choice of sauce",
        tag: "Rich & creamy",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-6",
      },
      {
        name: "Lotus Sweet w Ice Cream",
        price: "$15",
        desc: "A Biscoff based cookie, baked fresh in the oven to order. Served w/ Biscoff sauce and a scoop of ice cream",
        tag: "Biscoff favorite",
        image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-6",
      },
      {
        name: "Cookies w Ice Cream",
        price: "$15",
        desc: "A chocolate chip cookie, baked fresh in the oven to order. Served covered in Belgian Chocolate and Ice Cream",
      },
      {
        name: "M&M Cookie",
        price: "$15",
        desc: "An M&M cookie, baked fresh in the oven to order. Served in Belgian Chocolate and Ice Cream",
      },
      {
        name: "Lava Cake w Ice Cream",
        price: "$13",
      },
      {
        name: "Sticky Date Cake w Ice Cream",
        price: "$12",
      },
      {
        name: "Carrot Cake w Cream (V)",
        price: "$10",
      },
      {
        name: "Red Velvet Cake w Cream (V)",
        price: "$10",
      },
      {
        name: "PB Choc Fudge Brownie (V)",
        price: "$10",
      },
      {
        name: "Biscoff Choc Fudge Brownie (V)",
        price: "$10",
      },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    icon: CupSoda,
    items: [
      {
        name: "Strawberry Matcha",
        price: "$9",
        tag: "Best seller",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-6",
      },
      {
        name: "Spanish Matcha Latte",
        price: "$10",
        tag: "Smooth",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-6",
      },
      { name: "Iced Matcha", price: "$8" },
      { name: "Matcha Latte", price: "$7" },
      {
        name: "Matcha Cookie",
        price: "$15",
        desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in White Chocolate and Ice Cream",
      },
      {
        name: "Strawberry Matcha Cookie",
        price: "$16",
        desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in white chocolate, fresh strawberries, syrup and a scoop of Ice Cream",
      },
      { name: "Matcha and Raspberry Slice (V)", price: "$10" },
    ],
  },
  {
    id: "goodies",
    title: "Joyful Goodies",
    icon: Sparkles,
    items: [
      { name: "Sunveil Blend 250g Coffee Beans", price: "$20" },
      { name: "Sunveil Blend 1kg Coffee Beans", price: "$60" },
      { name: "Salmas Coffee Beans Dark 250g", price: "$15" },
      { name: "Salmas Coffee Beans Light 250g", price: "$15" },
      { name: "Salmas Coffee Grounds Spiced 250g", price: "$17" },
      { name: "Belgian Milk Chocolate Buds 250g", price: "$11" },
      { name: "Belgian White Chocolate Buds 250g", price: "$11" },
      { name: "Belgian Dark Chocolate Buds 250g", price: "$11" },
    ],
  },
  {
    id: "hotdrinks",
    title: "Hot Drinks",
    icon: Flame,
    items: [
      { name: "Thick Hot Choc", price: "$6" },
      { name: "Sahlab", price: "$6" },
      { name: "English Breakfast", price: "$5" },
      { name: "Sage / Habag / Mint Tea", price: "$5" },
      { name: "Lemon & Mint Tea", price: "$5.5" },
    ],
  },
  {
    id: "colddrinks",
    title: "Cold Drinks",
    icon: CupSoda,
    items: [
      {
        name: "Spanish Latte",
        price: "$10",
        tag: "Iced favourite",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-12",
      },
      { name: "Creamy Iced Cappuccino", price: "$10" },
      { name: "Creamy Iced Mocha", price: "$10" },
      { name: "Iced Coffee", price: "$10" },
      { name: "Mont Blanc", price: "$10" },
      { name: "Thick Shakes", price: "$10", desc: "Vanilla, Cookies n Cream, Salted Caramel, Biscoff" },
      { name: "Minty Lemonade", price: "$10", desc: "A frozen, sweet and refreshing lemon and mint concoction" },
      { name: "Mocktails", price: "$10", desc: "Green V / Green Apple or Blue V / Pineapple or Code Red / Strawberry" },
      { name: "Hibiscus Iced Tea", price: "$10" },
      {
        name: "Smoothies",
        price: "$10",
        desc: "Vitality (Strawberry, Mango, Raspberry), Reboot (Papaya, Pineapple, Banana), Detox (Dates, Blackberries, Banana, Blueberries), Booster (Lime, Basil, Mango, Banana)",
      },
      { name: "Water", price: "$3" },
    ],
  },
  {
    id: "cafe",
    title: "Cafe",
    icon: Coffee,
    items: [
      {
        name: "Saudi Coffee",
        price: "$6",
        tag: "Traditional",
        image: "https://images.unsplash.com/photo-1661685249298-3d2dbe68d309?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
        span: "lg:col-span-12",
      },
      { name: "Espresso", price: "$4" },
      { name: "Small Coffee", price: "$5.5" },
      { name: "Large Coffee", price: "$6" },
      { name: "Iced Latte", price: "$8" },
      { name: "Iced Long Black", price: "$8" },
      { name: "Long Black", price: "$5.5" },
      { name: "Cold Brew", price: "$8" },
      { name: "Babychino", price: "$2.5" },
    ],
  },
  {
    id: "juice",
    title: "Fresh Press Juice",
    icon: CupSoda,
    items: [
      {
        name: "Mix n Match",
        price: "$10",
        desc: "Base of Apple + Lemon and Ginger (Optional) + 3 Seasonal Fruits or Vegetables of your choice from the display",
      },
    ],
  },
  {
    id: "dates",
    title: "Dates",
    icon: Sparkles,
    items: [
      { name: "Saudi Coffee", price: "$6" },
      { name: "Dallah (Saudi Pot of Coffee)", price: "$20" },
      { name: "Dallah with Dates", price: "$24" },
      {
        name: "Stuffed Dates",
        price: "$12",
        desc: "Five dates stuffed with crunchy kataifi coated in pistachio sauce",
      },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("strawberries");

  const currentCategory = menuCategories.find((cat) => cat.id === activeTab) || menuCategories[2];

  const featuredCards = currentCategory.items.filter((item) => item.image);
  const listItems = currentCategory.items.filter((item) => !item.image);

  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-32" id="menu">
      {/* Header */}
      <div className="max-w-2xl mb-12 md:mb-16">
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

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12 border-b border-white/10 pb-6">
        {menuCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeTab === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cherry to-gold-400 text-cocoa-900 shadow-[0_0_20px_rgba(234,179,8,0.35)]"
                  : "bg-cocoa-800 text-cream-200 border border-white/10 hover:border-gold-400/40 hover:text-gold-300"
              }`}
            >
              <Icon size={15} />
              {category.title}
            </button>
          );
        })}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Featured Image Cards (if any in category) */}
          {featuredCards.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
              {featuredCards.map((item, index) => (
                <motion.article
                  key={item.name}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-cocoa-800 ${item.span || "lg:col-span-6"} min-h-[300px] md:min-h-[360px]`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/40 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      {item.tag && (
                        <span className="rounded-full border border-gold-400/40 bg-cocoa-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-300 backdrop-blur-md">
                          {item.tag}
                        </span>
                      )}
                      <span className="font-display text-2xl font-bold text-gold-400 bg-cocoa-900/80 px-3 py-1 rounded-full border border-gold-400/30">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
                      {item.name}
                    </h3>
                    {item.desc && (
                      <p className="text-sm text-cream-200">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* List Items Grid */}
          {listItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-cocoa-800/80 p-5 backdrop-blur-md hover:border-gold-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h4 className="font-display text-xl font-bold text-cream group-hover:text-gold-300 transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-display text-xl font-bold text-gold-400">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-xs md:text-sm text-cream-200/80 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Add-ons & Notes Banner */}
      <div className="mt-16 rounded-3xl border border-gold-400/30 bg-cocoa-900/90 p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h4 className="font-display text-2xl text-gold-300 mb-2">
            Extra Sauce +$3
          </h4>
          <p className="text-sm text-cream-200 leading-relaxed">
            Milk / White / Dark Chocolate, Pistachio, Biscoff, Bueno, Nutella
          </p>
          <div className="mt-3 text-xs text-cream-300 space-y-1">
            <p>• Add Strawberries or Cream +$2</p>
            <p>• Add Ice Cream +$4.5</p>
            <p>• Alternative milk +50c | Extra Shot +50c</p>
          </div>
        </div>
        <div className="text-xs text-cream-400 bg-cocoa-800/80 p-4 rounded-2xl border border-white/10 max-w-xs text-left">
          <span className="font-semibold text-gold-400 block mb-1">Important Notice:</span>
          FRESHLY PREPARED TO ORDER — PLEASE ALLOW 20 MINUTES FOR COOKING.<br />
          ALLERGEN WARNING: MAY CONTAIN PEANUTS, NUTS, AND EGG.
        </div>
      </div>
    </section>
  );
}
