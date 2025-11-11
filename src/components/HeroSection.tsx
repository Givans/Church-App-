import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[70vh] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558211583-d26b0b5b0d6c?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay for dark contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Grace Community Church
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Join us in worship, prayer, and fellowship.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
