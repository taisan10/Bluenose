import { motion } from "framer-motion";
import stats from "../assets/stats/stats";
// import reviews from "../assets/stats/review";
import Arrow from "../assets/arrow.png"
import people from "../assets/man.png"
import { useState } from "react";



const StatsSection = () => {
  return (
    <section className="bg-stone-100 py-14 px-6 max-w-7xl mx-auto rounded-4xl mt-15">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{  amount: 0.5 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-gray-900 mb-16"
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
                <img src={item.img} alt={item.label} className="w-18 h-15 mb-2 mx-auto object-contain" />
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
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            WHAT PEOPLE SAY ABOUT US
          </motion.h2>
 </div>
  </div>
 <div className="flex flex-col md:flex-col gap-2  md:gap-18" >
          {/* Star Rating and Reviews Count */}
          <div className="flex items-center mb-8 flex-start">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <p className="ml-2 text-xl font-medium">15k+ (Reviews)</p>
          </div>
       

        {/* Right Side - Review Cards */}
     


 <div className="w-full sm:w flex flex-raw gap-8 mt-8 ">
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
              "Bluenose Digital is proof that marketing doesn't have to be boring."
            </p>
          </motion.div>
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
              "Bluenose Digital is proof that marketing doesn't have to be boring."
            </p>
          </motion.div>
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
              "Bluenose Digital is proof that marketing doesn't have to be boring."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    );
};



 function Contact({ index = 0 }) {
  const [formData, setFormData] = useState({ brand: "", phone: "", location: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    if (name === "brand") {
      if (!value) return "Name is required.";
      return "";
    }
    if (name === "phone") {
      if (!value) return "Phone number is required.";
      if (!/^\d{10,}$/.test(value)) return "Phone number must be at least 10 digits (digits only).";
      return "";
    }
    if (name === "location") {
      if (!value) return "Location is required.";
      return "";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // allow only digits while typing into phone
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData((s) => ({ ...s, [name]: value }));

    // Live-validate if touched or attempted submit
    if (touched[name] || submitted) {
      const err = validateField(name, name === "phone" ? value.trim() : value);
      setErrors((p) => ({ ...p, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const err = validateField(name, formData[name]);
    setErrors((p) => ({ ...p, [name]: err }));
  };
const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);

  const newErrors = {
    brand: validateField("brand", formData.brand),
    phone: validateField("phone", formData.phone),
    location: validateField("location", formData.location),
  };
  setErrors(newErrors);

  const hasError = Object.values(newErrors).some(Boolean);

  if (!hasError) {

    const whatsappNumber = "19027189007";
const message = `Hello I am ${formData.brand} My phone number is ${formData.phone} My location is ${formData.location}`;
const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

console.log("Encoded Message:", encodedMessage);
console.log("Final URL:", whatsappUrl);

window.location.href = whatsappUrl;

    // ✅ Reset form
    setFormData({ brand: "", phone: "", location: "" });
    setTouched({});
    setSubmitted(false);
    setErrors({});
  }
};


  const showError = (name) => Boolean(errors[name] && (touched[name] || submitted));

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80  }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.25 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-black text-white py-16"
    >
      {/* Outer wrapper: 10% left/right margins -> inner area = 80% */}
      <div className="w-full">
        <div
          className="mx-[10vw] flex flex-col md:flex-row justify-between items-start  md:items-center pl-16"
          style={{ minHeight: "50vh" }} // adjust vertical centering area
        >
          {/* LEFT: heading area (40% viewport on md+) */}
          <div className="w-full md:w-[40vw] flex ">
            <h2 className="text-xl md:text-5xl font-extrabold ">
              LET'S TALK ABOUT <br /> YOUR BRAND
            </h2>
          </div>

          {/* RIGHT: form area (40% viewport on md+) */}
          <form onSubmit={handleSubmit} className="w-full md:w-[40vw] mt-8 md:mt-0">
            {/* Brand + Phone row */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2  gap-4 py-14 ">
              <div>
                <label htmlFor="brand" className="block mb-2 text-sm font-medium">
                  Name of the brand:
                </label>
                <input
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                  className={`w-full p-3 rounded-md bg-white text-black border ${
                    showError("brand") ? "border-red-500" : "border-transparent"
                  }`}
                  aria-invalid={Boolean(errors.brand)}
                />
                {showError("brand") && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Phone Number:
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Number"
                  className={`w-full p-3 rounded-md bg-white text-black border ${
                    showError("phone") ? "border-red-500" : "border-transparent"
                  }`}
                  aria-invalid={Boolean(errors.phone)}
                />
                {showError("phone") && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Location */}
            <div className="mt-4">
              <label htmlFor="location" className="block mb-2 text-sm font-medium">
                Location:
              </label>
              <textarea
                id="location"
                name="location"
                rows={4}
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Location"
                className={`w-full p-3 rounded-md bg-white text-black border ${
                  showError("location") ? "border-red-500" : "border-transparent"
                }`}
                aria-invalid={Boolean(errors.location)}
              />
              {showError("location") && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
              >
                LET'S CONNECT
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
  
const  CallToAction =()=>{
  return (
    <section className="bg-yellow-400 py-10 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left - Image of people */}
        <div className="flex-shrink-1">
          <img
            src={people}
            alt="People"
            className="w-56 md:w-72 object-contain"
          />
        </div>

        {/* Middle - Text */}
        <div className="text-center md:text-center flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Still confused? Don't overthink it
          </h2>
        </div>

        {/* Right - Arrow + Button */}
        <div className="flex items-center gap-4">
          <img
            src={Arrow}
            alt="Arrow"
            className="w-16  md:w-20 object-contain"
          />
        <a
  href="#contact"
  className="relative overflow-hidden group font-bold px-6 py-3 rounded-md text-white bg-black transition-all duration-500"
>
  <span className="relative z-10">LET'S CONNECT</span>

  {/* Fill effect */}
 <span
  className="absolute inset-0 bg-sky-400 transform -skew-x-20 translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-out md:-skew-x-12"
></span>

</a>
        </div>
      </div>
    </section>
  );
}



export default () => (
  <>
    <StatsSection />
    <ReviewSection />
    <CallToAction />
    <Contact/>
  </>
);





