// src/components/Gallery.jsx
// import React from 'react';
import concert from "../assets/chil.jpg";
import concertbg from "../assets/concertbg.jpg";
import attnconcert from "../assets/bnb.jpg";
import concerttwo from "../assets/childv.jpg";
import chl from "../assets/chl.jpg";
import chldm from "../assets/chldm.jpg";
const images = [concert, concertbg, attnconcert, concerttwo, chl, chldm];

const Childsession = () => {
  return (
    <div className="container mx-auto px-4 py-4 mt-24">
      <h1 className="text-3xl font-bold text-center mb-8">Children Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full  h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Childsession;
