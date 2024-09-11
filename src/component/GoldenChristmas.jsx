// src/components/Gallery.jsx
// import React from 'react';
import christma from "../assets/christma.jpg";
import christmas from "../assets/christmas.jpg";
import xms from "../assets/xms.jpg";
import xmas from "../assets/xmas.jpg";
import xmsss from "../assets/xmsss.jpg";
import celb from "../assets/celb.jpg";
const images = [christmas, xms, xmas, xmsss, christma, celb];

const GoldenChristmas = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldenChristmas;
