// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function ServicesSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard
            title="Gallery"
            path="/gallery" // Define the route for gallery
            description="Explore our gallery of past work and accomplishments."
          />
          <ServiceCard
            title="Training"
            path="/training" // Define the route for training
            description="Learn more about our training services."
          />
          <ServiceCard
            title="Projects"
            path="/projects" // Define the route for projects
            description="Check out our ongoing and past projects."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, path }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {/* Use Link for navigation */}
      <Link to={path}>
        <button className="w-full text-white bg-blue hover:bg-blue-700 px-4 py-2 rounded-md">
          Learn More
        </button>
      </Link>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired, // Define path as a required prop
};

ServicesSection.propTypes = {};
