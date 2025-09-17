import { motion } from "framer-motion";
import stats from "../assets/stats/stats";




const StatsSection = () => {
  return (
    <section className="bg-stone-100 py-14 px-6 max-w-7xl mx-auto rounded-4xl mt-15">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-16"
      >
        Creative Digital Marketing in Halifax
      </motion.h2>

      {/* Grid - Two rows of 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="relative bg-white text-black p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center"
          >
            {/* Yellow left border */}
            <div className="absolute top-0 left-0 h-full w-1 bg-yellow-400 rounded-l-xl" />

            <div className="relative z-10">
              {item.number ? (
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{item.number}</h3>
              ) : (
                <img src={item.img} alt={item.label} className="w-10 h-10 mb-2 mx-auto object-contain" />
              )}
              <p className="text-md font-medium text-gray-800">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ReviewSection 
const ReviewSection = () => {
  return (
    <section className=" bg-black px-6 py-16 max-w-7xl mx-auto rounded-4xl text-white">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Side - Heading and Rating */}
        <div className="w-full md:w-1/2 mt-8">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            WHAT PEOPLE SAY ABOUT US
          </motion.h2>

          {/* Star Rating and Reviews Count */}
          <div className="flex items-center mb-8">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <p className="ml-2 text-xl font-medium">15k+ (Reviews)</p>
          </div>
        </div>

        {/* Right Side - Review Cards */}
        <div className="w-full md:w-3/5 flex flex-raw gap-8 mt-8">
          {/* Review 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="flex justify-center mb-4">
              <span className="text-orange-500">★★★★★</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Siddharth Nair</h3>
            <p className="text-md font-medium text-gray-600">
              "Supercreative guys these are, always fun to work with them"
            </p>
          </motion.div>

          {/* Review 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false}}
            className="bg-white text-black p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="flex justify-center mb-4">
              <span className="text-orange-500">★★★★★</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Neha Raghavan</h3>
            <p className="text-md font-medium text-gray-600">
              "Cheesecake Digital is proof that marketing doesn't have to be boring."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default () => (
  <>
    <StatsSection />
    <ReviewSection />
  </>
);