
// Dynamically import all logos
const logos = import.meta.glob("../assets/brands/*.{png,jpg,jpeg,svg}", { eager: true });

export default function Brands() {
  const brands = Object.values(logos).map((mod) => mod.default);

  return (
    <section id="brands"className="bg-white py-12">
      {/* Heading */}
      <h2 className="text-center text-xl md:text-4xl font-bold text-sky-800 mb-10">
        Associated With Leading Names
      </h2>

      {/* Slider container */}
      <div className="max-w-6xl mx-auto overflow-hidden h-35"> 
        <div className="flex w-fit animate-scroll ">
          {brands.concat(brands).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-${index}`}
              className="h-25 md:h-20 object-contain mx-[25px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


