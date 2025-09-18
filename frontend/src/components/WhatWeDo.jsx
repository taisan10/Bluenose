import { motion } from "framer-motion";
import items from "../assets/what we do/wedo";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="bg-black text-white py-16 px-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
          THINK OF US AS YOUR BRAND'S BEST FRIEND WHO
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-4 text-center max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ amount: 0.3 }} 
            className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-20 h-20 mb-4 object-contain"
            />
            <p className="text-lg font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
