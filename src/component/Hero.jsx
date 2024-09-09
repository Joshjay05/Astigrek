import { Link } from "react-router-dom";
import bg from "../assets/hero.jpg";
export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-4 md:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Your Success, Our Commitment
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            We provide comprehensive social care services to support
            individuals, families, and communities in their time of need
          </p>
          <Link
            to="/family"
            className="bg-yellow text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-base md:text-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
