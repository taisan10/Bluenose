import logo from "../assets/logo 3.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo + Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-6">
            {/* Replace with your logo image if available */}
            <img src={logo} alt="Cheesecake Digital" className="h-12 mr-2" />
            <span className="text-2xl font-bold leading-tight">
              Bluenose <br /> digital
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/919974543555"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white bg-white p-2 rounded-md hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-2 rounded-md hover:bg-pink-600 transition"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center">
            Quick Links
            <span className="ml-2 border-b-2 border-yellow-400 w-10"></span>
          </h3>
          <ul className="space-y-2">
            <li
              id="home"
              className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer"
            >
              <span>»</span> 
               <a href="#home" className="hover:text-yellow-400">Home</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
              <span>»</span> <a href="#brands" className="hover:text-yellow-400">Brands</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
              <span>»</span> <a href="#services" className="hover:text-yellow-400">Services</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
              <span>»</span> <a href="#process" className="hover:text-yellow-400">Process</a>
            </li>
            <li className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer">
              <span>»</span> <a href="#whatwedo" className="hover:text-yellow-400">What We Do</a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center">
            Contact Us
            <span className="ml-2 border-b-2 border-yellow-400 w-10"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:contact@cheesecakedigital.in"
                className="hover:text-yellow-400 transition"
              >
                contact@cheesecakedigital.in
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <a
                href="tel:+19027189007"
                className="hover:text-yellow-400 transition"
              >
                +91 99745 43555
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <FaGlobe className="text-yellow-400" />
              <a
                href="https://cheesecakedigital.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                cheesecakedigital.in
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <a
                href="https://www.google.com/maps?q=610,611+Homeland+city,+Surat+Gujarat-395007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                610,611 Homeland city, Surat <br /> Gujarat-395007
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <a
                href="https://www.google.com/maps?q=STELLAR,+Sindhu+Bhavan,+Sindhu+Bhavan+Marg,+Friends+Colony,+Bodakdev,+Ahmedabad,+Gujarat+380054"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                STELLAR, Sindhu Bhavan, Sindhu Bhavan Marg, Friends Colony,{" "}
                <br />
                Bodakdev, Ahmedabad, Gujarat 380054
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
