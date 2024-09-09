import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMouseEnterLink = (index) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null); // Close dropdown when leaving both link and dropdown area
  };

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };
  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen]);
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl text-black font-bold">
          <img src={logo} alt="Logo" className="h-24" />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className=" text-gray-500 hover:text-gray-300 focus:outline-none lg:hidden fixed top-4 right-4 z-50"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Full menu for large screens */}
        <div className="lg:flex hidden  space-x-8">
          <Link to="/about-us" className="hover:text-gray text-gray">
            About Us
          </Link>
          {/* <Link to="/family" className="hover:text-gray text-gray"> */}
          <Dropdown
            title="Family"
            //    title="Family"
            linkTo="/family"
            items={[
              { to: "/children", title: "Children" },
              { to: "/youth", title: "Youth" },
              //   { to: "/services/youth-home", title: "Youth Home" },
            ]}
            isActive={activeDropdown === 1}
            onMouseEnterLink={() => handleMouseEnterLink(1)}
            onMouseLeaveDropdown={handleMouseLeaveDropdown}
          />
          {/* </Link> */}

          <Link to="/center" className="hover:text-gray text-gray">
            Day Center
          </Link>
          <Link to="/gallery" className="hover:text-gray text-gray">
            Gallery
          </Link>
          <Link to="/projects" className="hover:text-gray text-gray">
            Projects
          </Link>
          <Link to="/training" className="hover:text-gray text-gray">
            Training
          </Link>

          <a href="#footer" className="hover:text-gray text-gray">
            Contact
          </a>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-slate-200 fixed inset-0 z-50 flex flex-col space-y-4 mt-16 pt-14 px-9 overflow-y- gap-4">
            <Link to="/about-us" className="hover:text-gray text-gray">
              About Us
            </Link>
            <Accordion
              title="Family"
              items={[
                { to: "/projects/kids", title: "Kids" },
                { to: "/projects/children", title: "Children" },
                { to: "/services/youth-home", title: "Youth Home" },
              ]}
              isActive={activeAccordion === 1}
              toggleAccordion={() => toggleAccordion(1)}
            />
            <Accordion
              title="Day Center"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeAccordion === 2}
              toggleAccordion={() => toggleAccordion(2)}
            />
            <Link to="/gallery" className="hover:text-gray text-gray">
              Gallery
            </Link>
            <Link to="/projects" className="hover:text-gray text-gray">
              Projects
            </Link>
            <Link to="/training" className="hover:text-gray text-gray">
              Training
            </Link>
            <Accordion
              title="What We Do"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeAccordion === 3}
              toggleAccordion={() => toggleAccordion(3)}
            />
            <a href="#footer" className="hover:text-gray text-gray">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Accordion({ title, items, isActive, toggleAccordion }) {
  return (
    <div>
      <button
        className="flex items-center gap-4 w-full py-2 text-left text-gray-50 hover:text-gray-300 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
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
      {isActive && (
        <div className="pl-4">
          {items.map((item, index) => (
            <Link key={index} to={item.to} className="block py-2 text-gray-400">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  isActive: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};

function Dropdown({
  title,
  items,
  isActive,
  isAccordionActive,
  onMouseEnterLink,
  onMouseLeaveDropdown,
  toggleAccordion,
  linkTo,
}) {
  return (
    <div className="relative">
      {/* Wrap the title in a Link */}
      <Link
        to={linkTo} // Use the linkTo prop for the title link
        className="flex items-center space-x-2 text-gray-50 hover:text-gray-300 focus:outline-none pb-1"
        onMouseEnter={onMouseEnterLink}
        onClick={toggleAccordion} // Toggle accordion on mobile
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isActive || isAccordionActive ? "rotate-180" : ""
          }`}
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
      </Link>

      {/* Dropdown for larger screens */}
      {isActive && window.innerWidth >= 1024 && (
        <div
          className="absolute top-2 mt-2 w-48 bg-[#fdfdfdb6] text-black py-4 shadow-lg rounded-lg z-50 border-t border-gray-400"
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

      {/* Accordion for mobile screens */}
      {isAccordionActive && window.innerWidth < 1024 && (
        <div className="mt-2 w-full bg-gray-700 text-white rounded-lg">
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
  ).isRequired,
  isActive: PropTypes.bool.isRequired,
  isAccordionActive: PropTypes.bool.isRequired,
  onMouseEnterLink: PropTypes.func.isRequired,
  onMouseLeaveDropdown: PropTypes.func.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  linkTo: PropTypes.string.isRequired, // Prop for the title link
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
