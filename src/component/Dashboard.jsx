// import React from 'react';
import { Link } from "react-router-dom";
// import './Dashboard.css';

const categories = [
  {
    name: "Aging",
    image: "/images/aging.jpg",
    description: "Services for older adults",
  },
  {
    name: "Behavioral Health",
    image: "/images/behavioral.jpg",
    description: "Mental health services",
  },
  {
    name: "Child Welfare",
    image: "/images/child.jpg",
    description: "Care for children in need",
  },
  {
    name: "Health",
    image: "/images/health.jpg",
    description: "Health services and resources",
  },
  {
    name: "School Social Work",
    image: "/images/school.jpg",
    description: "Social work in schools",
  },
  {
    name: "Ethnicity & Race",
    image: "/images/ethnicity.jpg",
    description: "Equity and diversity services",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className=" my-10 flex justify-center gap-6 items-center">
        {" "}
        <h1 className="text-[3rem] font-bold">Practice</h1>
        <p className="text-gray-700 leading-[2.2em] text-lg mb-4">
          Social work practice consists of the professional application of
          social work values, principles, and techniques to one or more of the
          following ends: helping people obtain tangible services; counseling
          and psychotherapy with individuals, families, and groups; helping
          communities or groups provide or improve social and health services;
          and participating in legislative processes. <br />
          <br />
          The practice of social work requires knowledge of human development
          and behavior; of social, economic, and cultural institutions; and of
          the interaction of all these factors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
        {categories.map((category, index) => (
          <Link
            to={`/practice/${category.name.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="category-card cursor-pointer"
          >
            <img src={category.image} alt={category.name} />
            <h3 className="text-xl font-semibold mb-2 hover:text-unde">
              {category.name}
            </h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
