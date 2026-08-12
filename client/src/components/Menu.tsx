import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Coffee, Utensils, IceCream, CupSoda, Cookie, Wine } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tag?: string;
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
      { name: "Joyful Crepe", price: "$20", desc: "Three Crepes cut into fettucine-style pieces, served with your choice of sauce and a scoop of ice cream on top", tag: "The famous one" },
      { name: "Pistachio Crunch Crepe", price: "$22", desc: "Three Crepes cut into fettucine-style pieces, served with Belgian Chocolate, Pistachio sauce, Crunchy Kataifi and a scoop of ice cream on top", tag: "Signature" },
      { name: "Classic Crepe", price: "$16", desc: "Two Crepes cut into fettucine-style pieces served with your choice of sauce" },
      { name: "Lemon & Sugar Crepe", price: "$15", desc: "Two Crepes cut into fettucine-style pieces, tossed in sugar and served with fresh lemon wedges" },
      { name: "Crepe Fruit", price: "$18", desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries, Pineapple, Kiwi and Banana" },
      { name: "Strawberry Crepe", price: "$17", desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries" },
      { name: "Banana Crepe w Ice Cream", price: "$17", desc: "One banana wrapped in a crepe, cut into bite-sized pieces, Served with your choice of sauce and a scoop of ice cream" },
      { name: "Oreo Crepe", price: "$16", desc: "A crepe filled with cream and crushed Oreo, coated in Belgian milk chocolate" },
      { name: "Brownie Crepe w Ice Cream", price: "$20", desc: "Two crepes cut into fettucine-style pieces, topped with Belgian milk chocolate and covered in brownie chunks with a scoop of ice cream on top" },
      { name: "Cinnamon Crepe", price: "$17", desc: "Two crepes cut into fettucine-style pieces, tossed with cinnamon sugar and a scoop of ice cream on top" },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    icon: IceCream,
    items: [
      { name: "Classic Waffle Pop", price: "$10", desc: "A single waffle served on a stick with your choice of sauce" },
      { name: "Small Waffle Bites", price: "$16", desc: "Two waffles cut into bite-sized pieces, topped with strawberries and your choice of sauce" },
      { name: "Large Waffle Bites", price: "$20", desc: "Three waffles cut into bite-sized pieces, topped with strawberries, ice cream and your choice of sauce", tag: "Popular" },
      { name: "Waffle Fruit", price: "$18", desc: "Two half-waffles filled with fresh strawberries, banana, kiwi and pineapple, topped with luscious Belgian milk chocolate." },
      { name: "Waffle Ice Cream Sandwich", price: "$18", desc: "Two waffles filled with ice cream topped with luscious Belgian milk chocolate." },
      { name: "Salted Caramel Waffle w Ice Cream", price: "$15", desc: "A single waffle lathered in warm salted caramel sauce and paired with a scoop of vanilla ice cream" },
      { name: "Brownie Waffle w Ice Cream", price: "$20", desc: "Two waffles cut into bite-sized pieces, topped with Belgian milk chocolate and chunks of brownies with a scoop of ice cream on top." },
    ],
  },
  {
    id: "strawberries",
    title: "Strawberries & Joyful Goodies",
    icon: Sparkles,
    items: [
      { name: "Cup of Joy", price: "$14", desc: "Strawberries in a cup, covered with Belgian chocolate" },
      { name: "Strawberry Pistachio Crunch Cup", price: "$16", desc: "Strawberries in a cup, covered with Belgian chocolate and a decadent blend of kataifi and pistachio sauce", tag: "Viral" },
      { name: "Small Strawberry Bites", price: "$5", desc: "Two strawberries coated in Belgian chocolate" },
      { name: "Large Strawberry Bites", price: "$8", desc: "Four strawberries coated in Belgian chocolate" },
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
    id: "cakes",
    title: "Cakes & Matcha",
    icon: Cookie,
    items: [
      { name: "Lotus Sweet w Ice Cream", price: "$15", desc: "A Biscoff based cookie, baked fresh in the oven to order. Served w/ Biscoff sauce and a scoop of ice cream" },
      { name: "Cookies w Ice Cream", price: "$15", desc: "A chocolate chip cookie, baked fresh in the oven to order. Served covered in Belgian Chocolate and Ice Cream" },
      { name: "M&M Cookie", price: "$15", desc: "An M&M cookie, baked fresh in the oven to order. Served in Belgian Chocolate and Ice Cream" },
      { name: "San Sebastian Cheese Cake", price: "$16", desc: "With your choice of sauce" },
      { name: "Lava Cake w Ice Cream", price: "$13" },
      { name: "Sticky Date Cake w Ice Cream", price: "$12" },
      { name: "Carrot Cake w Cream (V)", price: "$10" },
      { name: "Red Velvet Cake w Cream (V)", price: "$10" },
      { name: "PB Choc Fudge Brownie (V)", price: "$10" },
      { name: "Biscoff Choc Fudge Brownie (V)", price: "$10" },
      { name: "Iced Matcha", price: "$8" },
      { name: "Matcha Latte", price: "$7" },
      { name: "Spanish Matcha Latte", price: "$10" },
      { name: "Strawberry Matcha", price: "$9" },
      { name: "Matcha Cookie", price: "$15", desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in White Chocolate and Ice Cream" },
      { name: "Strawberry Matcha Cookie", price: "$16", desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in white chocolate, fresh strawberries, syrup and a scoop of Ice Cream" },
      { name: "Matcha and Raspberry Slice (V)", price: "$10" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Cafe",
    icon: CupSoda,
    items: [
      { name: "Thick Hot Choc", price: "$6" },
      { name: "Sahlab", price: "$6" },
      { name: "English Breakfast", price: "$5" },
      { name: "Sage / Habag / Mint Tea", price: "$5" },
      { name: "Lemon & Mint Tea", price: "$5.5" },
      { name: "Creamy Iced Cappuccino", price: "$10" },
      { name: "Creamy Iced Mocha", price: "$10" },
      { name: "Iced Coffee", price: "$10" },
      { name: "Spanish Latte", price: "$10" },
      { name: "Mont Blanc", price: "$10" },
      { name: "Thick Shakes", price: "$10", desc: "Vanilla, Cookies n Cream, Salted Caramel, Biscoff" },
      { name: "Minty Lemonade", price: "$10", desc: "A frozen, sweet and refreshing lemon and mint concoction" },
      { name: "Mocktails", price: "$10", desc: "Green V / Green Apple or Blue V / Pineapple or Code Red / Strawberry" },
      { name: "Hibiscus Iced Tea", price: "$10" },
      { name: "Smoothies", price: "$10", desc: "Vitality (Strawberry, Mango, Raspberry), Reboot (Papaya, Pineapple, Banana), Detox (Dates, Blackberries, Banana, Blueberries), Booster (Lime, Basil, Mango, Banana)" },
      { name: "Water", price: "$3" },
      { name: "Espresso", price: "$4" },
      { name: "Small Coffee", price: "$5.5" },
      { name: "Large Coffee", price: "$6" },
      { name: "Iced Latte", price: "$8" },
      { name: "Iced Long Black", price: "$8" },
      { name: "Long Black", price: "$5.5" },
      { name: "Cold Brew", price: "$8" },
      { name: "Babychino", price: "$2.5" },
      { name: "Mix n Match Fresh Press Juice", price: "$10", desc: "Base of Apple + Lemon and Ginger (Optional) + 3 Seasonal Fruits or Vegetables of your choice from the display" },
      { name: "Saudi Coffee", price: "$6" },
      { name: "Dallah (Saudi Pot of Coffee)", price: "$20" },
      { name: "Dallah with Dates", price: "$24" },
      { name: "Stuffed Dates", price: "$12", desc: "Five dates stuffed with crunchy kataifi coated in pistachio sauce" },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("crepes");

  const currentCategory = menuCategories.find((cat) => cat.id === activeTab) || menuCategories[0];

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
      <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
        {menuCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeTab === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cherry to-gold-400 text-cocoa-900 shadow-[0_0_20px_rgba(234,179,8,0.35)]"
                  : "bg-cocoa-800 text-cream-200 border border-white/10 hover:border-gold-400/40 hover:text-gold-300"
              }`}
            >
              <Icon size={16} />
              {category.title}
            </button>
          );
        })}
      </div>

      {/* Menu Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-cocoa-800/80 p-6 backdrop-blur-md hover:border-gold-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-cream group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl font-bold text-gold-400">
                    {item.price}
                  </span>
                </div>
                {item.desc && (
                  <p className="text-sm text-cream-200/90 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                )}
              </div>
              {item.tag && (
                <span className="inline-block rounded-full bg-gold-400/10 border border-gold-400/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-300 w-fit">
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Add-ons & Notes Banner */}
      <div className="mt-16 rounded-3xl border border-gold-400/30 bg-cocoa-900/90 p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h4 className="font-display text-2xl text-gold-300 mb-2">
            Add-ons & Extras
          </h4>
          <p className="text-sm text-cream-200">
            • Add Strawberries or Cream +$2<br />
            • Add Ice Cream +$4.5<br />
            • Alternative milk +50c | Extra Shot +50c<br />
            • Extra Sauce (Milk/White/Dark Chocolate, Pistachio, Biscoff, Bueno, Nutella) +$3
          </p>
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
