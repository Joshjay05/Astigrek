import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnterLink = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null); // Close dropdown when leaving both link and dropdown area
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          MySite
        </Link>
        <div className="sm:hidden flex space-x-8">
          {/* About Us - No dropdown */}
          <Link to="/about-us" className="hover:text-gray text-gray">
            About Us
          </Link>

          {/* Family - Dropdown */}
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="Family"
              items={[
                { to: "/projects/kids", title: "Kids" },
                { to: "/projects/children", title: "Children" },
                { to: "/services/youth-home", title: "Youth Home" },
              ]}
              isActive={activeDropdown === 1}
              onMouseEnterLink={() => handleMouseEnterLink(1)}
              onMouseLeaveDropdown={handleMouseLeaveDropdown}
            />
          </div>

          {/* Day Center - Dropdown */}
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="Day Center"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeDropdown === 2}
              onMouseEnterLink={() => handleMouseEnterLink(2)}
              onMouseLeaveDropdown={handleMouseLeaveDropdown}
            />
          </div>

          {/* Gallery - No dropdown */}
          <Link to="/gallery" className="hover:text-gray text-gray">
            Gallery
          </Link>

          {/* Projects - No dropdown */}
          <Link to="/projects" className="hover:text-gray text-gray">
            Projects
          </Link>

          {/* Training - No dropdown */}
          <Link to="/training" className="hover:text-gray text-gray">
            Training
          </Link>

          {/* What We Do - Dropdown */}
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="What We Do"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeDropdown === 3}
              onMouseEnterLink={() => handleMouseEnterLink(3)}
              onMouseLeaveDropdown={handleMouseLeaveDropdown}
            />
          </div>

          {/* Contact - No dropdown */}
          <Link to="/contact" className="hover:text-gray text-gray">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Dropdown({
  title,
  items,
  isActive,
  onMouseEnterLink,
  onMouseLeaveDropdown,
}) {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-50 hover:text-gray-300 focus:outline-none pb-1"
        onMouseEnter={onMouseEnterLink}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isActive && items && (
        <div
          className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-lg z-50 border-t border-gray-400"
          onMouseEnter={onMouseEnterLink}
          onMouseLeave={onMouseLeaveDropdown}
        >
          <ul>
            {items.map((item, index) => (
              <DropdownItem key={index} {...item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  isActive: PropTypes.bool.isRequired,
  onMouseEnterLink: PropTypes.func.isRequired,
  onMouseLeaveDropdown: PropTypes.func.isRequired,
};

function DropdownItem({ to, title }) {
  return (
    <li>
      <Link to={to} className="block py-2 px-6 hover:bg-gray-600">
        {title}
      </Link>
    </li>
  );
}

DropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
