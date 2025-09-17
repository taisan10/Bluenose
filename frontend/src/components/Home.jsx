import React, { useRef, useState } from "react";
import bgVideo from "../assets/Home/bg1.mp4";


export default function Home() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
  const video = videoRef.current;
  if (video) {
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted) {
      video.play(); // 
    }
  }
};

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={bgVideo}// replace with your video path
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-1"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">Bluenose digital Marketing</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Creative Strategy • Branding • Digital Growth
        </p>

        {/* Connect Button */}
        <a
          href="#contact"
          className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-md hover:bg-yellow-500 transition"
        >
          LET’S CONNECT
        </a>
      </div>

      {/* Audio Toggle Button */}
            <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 bg-white p-3 rounded-full shadow-md hover:scale-110 transition z-10"
      >
        {isMuted ? (
          <span className="text-black text-xl">🔇</span>
        ) : (
          <span className="text-black text-xl">🔊</span>
        )}
      </button>

    </section>
  );
}
