import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, IceCream, Sparkles, Cookie, CupSoda, Flame, Coffee } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  tag?: string;
  image?: string;
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
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Folded crepe ribbons
      },
      {
        name: "Pistachio Crunch Crepe",
        price: "$22",
        desc: "Three Crepes cut into fettucine-style pieces, served with Belgian Chocolate, Pistachio sauce, Crunchy Kataifi and a scoop of ice cream on top",
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1723029343498-b061d6594a42?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Pistachio drizzled crepe
      },
      {
        name: "Classic Crepe",
        price: "$16",
        desc: "Two Crepes cut into fettucine-style pieces served with your choice of sauce",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Classic crepe ribbons
      },
      {
        name: "Lemon & Sugar Crepe",
        price: "$15",
        desc: "Two Crepes cut into fettucine-style pieces, tossed in sugar and served with fresh lemon wedges",
        image: "https://images.unsplash.com/photo-1734056650146-bde92ed41f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Folded crepe with citrus
      },
      {
        name: "Crepe Fruit",
        price: "$18",
        desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries, Pineapple, Kiwi and Banana",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Fruit topped crepe
      },
      {
        name: "Strawberry Crepe",
        price: "$17",
        desc: "Two Crepes cut into fettucine-style pieces, served with Belgian chocolate and covered in Strawberries",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Strawberry crepe
      },
      {
        name: "Banana Crepe w Ice Cream",
        price: "$17",
        desc: "One banana wrapped in a crepe, cut into bite-sized pieces, Served with your choice of sauce and a scoop of ice cream",
        image: "https://images.unsplash.com/photo-1723029343498-b061d6594a42?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Banana crepe roll
      },
      {
        name: "Oreo Crepe",
        price: "$16",
        desc: "A crepe filled with cream and crushed Oreo, coated in Belgian milk chocolate",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Chocolate crepe roll
      },
      {
        name: "Brownie Crepe w Ice Cream",
        price: "$20",
        desc: "Two crepes cut into fettucine-style pieces, topped with Belgian milk chocolate and covered in brownie chunks with a scoop of ice cream on top",
        image: "https://images.unsplash.com/photo-1734056650146-bde92ed41f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Rich chocolate crepe
      },
      {
        name: "Cinnamon Crepe",
        price: "$17",
        desc: "Two crepes cut into fettucine-style pieces, tossed with cinnamon sugar and a scoop of ice cream on top",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", // Cinnamon crepe
      },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    icon: IceCream,
    items: [
      { name: "Classic Waffle Pop", price: "$10", desc: "A single waffle served on a stick with your choice of sauce", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Small Waffle Bites", price: "$16", desc: "Two waffles cut into bite-sized pieces, topped with strawberries and your choice of sauce", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Large Waffle Bites", price: "$20", desc: "Three waffles cut into bite-sized pieces, topped with strawberries, ice cream and your choice of sauce", tag: "Popular", image: "https://images.unsplash.com/photo-1773516035322-e413a151ad14?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Waffle Fruit", price: "$18", desc: "Two half-waffles filled with fresh strawberries, banana, kiwi and pineapple, topped with luscious Belgian milk chocolate.", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Waffle Ice Cream Sandwich", price: "$18", desc: "Two waffles filled with ice cream topped with luscious Belgian milk chocolate.", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Salted Caramel Waffle w Ice Cream", price: "$15", desc: "A single waffle lathered in warm salted caramel sauce and paired with a scoop of vanilla ice cream", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Brownie Waffle w Ice Cream", price: "$20", desc: "Two waffles cut into bite-sized pieces, topped with Belgian milk chocolate and chunks of brownies with a scoop of ice cream on top.", tag: "Indulgent", image: "https://images.unsplash.com/photo-1773516035322-e413a151ad14?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "strawberries",
    title: "Strawberries",
    icon: Sparkles,
    items: [
      { name: "Cup of Joy", price: "$14", desc: "Strawberries in a cup, covered with Belgian chocolate", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Strawberry Pistachio Crunch Cup", price: "$16", desc: "Strawberries in a cup, covered with Belgian chocolate and a decadent blend of kataifi and pistachio sauce", tag: "Viral sensation", image: "https://images.unsplash.com/photo-1543255006-d639546f3c7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Small Strawberry Bites", price: "$5", desc: "Two strawberries coated in Belgian chocolate", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Large Strawberry Bites", price: "$8", desc: "Four strawberries coated in Belgian chocolate", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "cakes",
    title: "Cakes",
    icon: Cookie,
    items: [
      { name: "Lotus Sweet w Ice Cream", price: "$15", desc: "A Biscoff based cookie, baked fresh in the oven to order. Served w/ Biscoff sauce and a scoop of ice cream", image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Cookies w Ice Cream", price: "$15", desc: "A chocolate chip cookie, baked fresh in the oven to order. Served covered in Belgian Chocolate and Ice Cream", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "M&M Cookie", price: "$15", desc: "An M&M cookie, baked fresh in the oven to order. Served in Belgian Chocolate and Ice Cream", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "San Sebastian Cheese Cake", price: "$16", desc: "With your choice of sauce", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Lava Cake w Ice Cream", price: "$13", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Sticky Date Cake w Ice Cream", price: "$12", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Carrot Cake w Cream (V)", price: "$10", image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Red Velvet Cake w Cream (V)", price: "$10", image: "https://images.unsplash.com/photo-1586788224325-9945037d2f97?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "PB Choc Fudge Brownie (V)", price: "$10", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Biscoff Choc Fudge Brownie (V)", price: "$10", image: "https://images.unsplash.com/photo-1708175313856-8573b2bf8a3a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    icon: CupSoda,
    items: [
      { name: "Iced Matcha", price: "$8", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Matcha Latte", price: "$7", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Spanish Matcha Latte", price: "$10", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Strawberry Matcha", price: "$9", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Matcha Cookie", price: "$15", desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in White Chocolate and Ice Cream", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Strawberry Matcha Cookie", price: "$16", desc: "A Matcha based cookie, baked fresh in the oven to order. served covered in white chocolate, fresh strawberries, syrup and a scoop of Ice Cream", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Matcha and Raspberry Slice (V)", price: "$10", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "goodies",
    title: "Joyful Goodies",
    icon: Sparkles,
    items: [
      { name: "Sunveil Blend 250g Coffee Beans", price: "$20", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Sunveil Blend 1kg Coffee Beans", price: "$60", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Salmas Coffee Beans Dark 250g", price: "$15", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Salmas Coffee Beans Light 250g", price: "$15", image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Salmas Coffee Grounds Spiced 250g", price: "$17", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Belgian Milk Chocolate Buds 250g", price: "$11", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Belgian White Chocolate Buds 250g", price: "$11", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Belgian Dark Chocolate Buds 250g", price: "$11", image: "https://images.unsplash.com/photo-1548877773-84061a9fbdfa?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "hotdrinks",
    title: "Hot Drinks",
    icon: Flame,
    items: [
      { name: "Thick Hot Choc", price: "$6", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Sahlab", price: "$6", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "English Breakfast", price: "$5", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Sage / Habag / Mint Tea", price: "$5", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Lemon & Mint Tea", price: "$5.5", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "colddrinks",
    title: "Cold Drinks",
    icon: CupSoda,
    items: [
      { name: "Creamy Iced Cappuccino", price: "$10", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Creamy Iced Mocha", price: "$10", image: "https://images.unsplash.com/photo-1578314675249-a6919f3cb6e0?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Iced Coffee", price: "$10", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Spanish Latte", price: "$10", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Mont Blanc", price: "$10", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Thick Shakes", price: "$10", desc: "Vanilla, Cookies n Cream, Salted Caramel, Biscoff", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Minty Lemonade", price: "$10", desc: "A frozen, sweet and refreshing lemon and mint concoction", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Mocktails", price: "$10", desc: "Green V / Green Apple or Blue V / Pineapple or Code Red / Strawberry", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Hibiscus Iced Tea", price: "$10", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Smoothies", price: "$10", desc: "Vitality (Strawberry, Mango, Raspberry), Reboot (Papaya, Pineapple, Banana), Detox (Dates, Blackberries, Banana, Blueberries), Booster (Lime, Basil, Mango, Banana)", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Water", price: "$3", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "cafe",
    title: "Cafe",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "$4", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Small Coffee", price: "$5.5", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Large Coffee", price: "$6", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Iced Latte", price: "$8", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Iced Long Black", price: "$8", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Long Black", price: "$5.5", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Cold Brew", price: "$8", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Babychino", price: "$2.5", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "juice",
    title: "Fresh Press Juice",
    icon: CupSoda,
    items: [
      { name: "Mix n Match", price: "$10", desc: "Base of Apple + Lemon and Ginger (Optional) + 3 Seasonal Fruits or Vegetables of your choice from the display", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
    ],
  },
  {
    id: "dates",
    title: "Dates",
    icon: Sparkles,
    items: [
      { name: "Saudi Coffee", price: "$6", image: "https://images.unsplash.com/photo-1661685249298-3d2dbe68d309?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Dallah (Saudi Pot of Coffee)", price: "$20", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Dallah with Dates", price: "$24", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
      { name: "Stuffed Dates", price: "$12", desc: "Five dates stuffed with crunchy kataifi coated in pistachio sauce", image: "https://images.unsplash.com/photo-1543255006-d639546f3c7e?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategory.items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-cocoa-800 flex flex-col justify-between hover:border-gold-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Item Image */}
              <div className="relative h-48 w-full overflow-hidden bg-cocoa-900">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?crop=entropy&cs=srgb&fm=jpg&q=85&w=800";
                    }}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms] ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-cocoa-900 text-gold-400/40 font-display text-sm tracking-widest uppercase">
                    Melt In Joy
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/30 to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 left-3 rounded-full border border-gold-400/40 bg-cocoa-900/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-300 backdrop-blur-md">
                    {item.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 font-display text-lg font-bold text-gold-400 bg-cocoa-900/85 px-3 py-1 rounded-full border border-gold-400/30 shadow-lg">
                  {item.price}
                </span>
              </div>

              {/* Item Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-display text-xl font-bold text-cream group-hover:text-gold-300 transition-colors mb-2">
                    {item.name}
                  </h4>
                  {item.desc && (
                    <p className="text-xs md:text-sm text-cream-200/80 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
