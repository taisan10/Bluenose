import { useState } from "react";
import servicesData from "../assets/ourservice/servicesData";

export default function OurServices() {
  const categories = Object.keys(servicesData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = servicesData[activeCategory];

  // Videos per view depending on screen size
  const videosPerView =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const handleNext = () => {
    if (currentIndex < videos.length - videosPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div id="services" className="bg-black text-white py-12">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
        OUR SERVICES
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentIndex(0);
            }}
            className={`px-5 py-2 rounded-full font-semibold ${
              activeCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Slider */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center px-6">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 md:-left-10 z-10 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-lg disabled:opacity-40"
        >
          ←
        </button>

        {/* Video Container */}
        <div className="flex gap-4 overflow-hidden justify-center">
          {videos.slice(currentIndex, currentIndex + videosPerView).map((video) => (
            <video
              key={video.id}
              src={video.src}
              className="w-full sm:w-72 lg:w-80 h-64 sm:h-72 md:h-96 object-cover rounded-xl shadow-lg"
              controls
              muted
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= videos.length - videosPerView}
          className="absolute right-0 md:-right-10 z-10 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow-lg disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
