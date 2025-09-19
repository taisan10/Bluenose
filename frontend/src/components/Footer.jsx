import logo from "../assets/logo 3.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
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
          <a href="https://www.bluenosemarketing.com/">
            <span className="text-2xl font-bold ">
            Bluenose Digital Marketing
            </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/19027189007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white bg-white p-2 rounded-md hover:bg-green-200 transition"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
            </a>
            <a
              href="https://www.instagram.com/bluenose_marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white bg-white p-2 rounded-md hover:bg-pink-300 transition"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbluenose-marketing-digital-marketing-agency%2Fabout%2F%3FviewAsMember%3Dtrue"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white bg-white p-2 rounded-md hover:bg-blue-200 transition"
            >
              <FaLinkedin className="text-blue-500 text-xl" />
            </a>
            <a
              href="https://www.instagram.com/bluenose_marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white bg-white p-2 rounded-md transition"
            >
              <FaTiktok className="text-pink-600 text-xl" />
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
                href="mailto:sales@bluenosemarketing.com"
                className="hover:text-yellow-400 transition"
              >               
                 sales@bluenosemarketing.com
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <a
                href="https://wa.me/19027189007"
                className="hover:text-yellow-400 transition"
              >
             +1 (902) 718-9007
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <FaGlobe className="text-yellow-400" />
              <a
                href="https://www.bluenosemarketing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
              bluenosemarketing.com
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <a
                href="https://www.google.com/maps/place/5,+19+Alma+Crescent,+Halifax,+NS+B3N+2C4,+Canada/@44.6594793,-63.6325108,619m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4b5a21a8365c5ea1:0x2348b261468a7e12!8m2!3d44.6594793!4d-63.6325108!16s%2Fg%2F11bw3yfxpp!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                19 Alma Crescent, Halifax, <br /> NS B3N 2C4
              </a>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <a
                href="https://www.google.com/maps/place/5,+19+Alma+Crescent,+Halifax,+NS+B3N+2C4,+Canada/@44.6594793,-63.6325108,619m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4b5a21a8365c5ea1:0x2348b261468a7e12!8m2!3d44.6594793!4d-63.6325108!16s%2Fg%2F11bw3yfxpp!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                STELLAR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
