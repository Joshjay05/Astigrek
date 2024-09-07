// import React from "react";
import PropTypes from "prop-types";

export function ServicesSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard
            title="Service One"
            description="Brief description of the service."
          />
          <ServiceCard
            title="Service Two"
            description="Brief description of the service."
          />
          <ServiceCard
            title="Service Three"
            description="Brief description of the service."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ServicesSection.propTypes = {};

// No props are required for ServicesSection, so PropTypes is not used here.
