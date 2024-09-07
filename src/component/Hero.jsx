// import React from 'react';

export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/path-to-hero-image.jpg)" }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Success, Our Commitment
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            We provide top-notch solutions to help you achieve your business
            goals.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
