import { motion } from "framer-motion";
import steps from "../assets/process/process";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black text-white py-20 px-6 md:px-20 relative"
    >
      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-yellow-400 mb-20 tracking-wide">
        OUR PROCESS
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-14 relative">
        {/* Yellow center line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-yellow-400 -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-20 relative ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            viewport={{ once: false, amount: 0.3 }} 
          >
            {/* Image */}
            <div className=" w-65 h-25 flex-1 flex justify-center">
              <img
                src={step.img}
                alt={step.title}
                className="object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text with number above */}
            <div className="flex-1 text-center md:text-left relative">
              {/* Number bubble above text */}
              <div className="absolute -top-10 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-yellow-400 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-black">
                {step.id}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mt-6">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
