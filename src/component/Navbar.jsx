// import { useState } from "react";
// import PropTypes from "prop-types"; // Import prop-types for validation
// import { Link } from "react-router-dom";

// export function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleMouseEnter = (index) => {
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     // Only close the dropdown after both the link and dropdown are left
//     setActiveDropdown(null);
//   };

//   return (
//     <nav className="bg-gray-800 text-white shadow-md">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <Link to="/" className="text-2xl font-bold">
//           MySite
//         </Link>
//         <div className="flex sm:hidden md:flex space-x-4">
//           <Dropdown
//             title="Who We Are"
//             items={[
//               { to: "/history", title: "Our History" },
//               { to: "/mission", title: "Our Mission and Vision" },
//               { to: "/beliefs", title: "Our Beliefs" },
//               { to: "/structure", title: "Our Structure" },
//             ]}
//             isActive={activeDropdown === 0}
//             onMouseEnter={() => handleMouseEnter(0)}
//             onMouseLeave={handleMouseLeave}
//           />
//           <Dropdown
//             title="What We Do"
//             items={[
//               { to: "/projects", title: "Projects" },
//               { to: "/services", title: "Services" },
//             ]}
//             isActive={activeDropdown === 1}
//             onMouseEnter={() => handleMouseEnter(1)}
//             onMouseLeave={handleMouseLeave}
//           />
//           <Link to="/contact" className="hover:text-gray-400">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Dropdown({ title, items, isActive, onMouseEnter, onMouseLeave }) {
//   return (
//     <div
//       className="relative"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <button className="flex items-center space-x-2 text-gray-50 hover:text-gray-400 focus:outline-none">
//         <span>{title}</span>
//         <svg
//           className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>
//       {isActive && (
//         <div
//           className="absolute bg-white  w-48 bg-gray-700 text-black  rounded-lg z-50"
//           onMouseEnter={onMouseEnter}
//           onMouseLeave={onMouseLeave}
//         >
//           <ul>
//             {items.map((item, index) => (
//               <DropdownItem key={index} {...item} />
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// // Add PropTypes validation for the Dropdown component
// Dropdown.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       to: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   isActive: PropTypes.bool.isRequired,
//   onMouseEnter: PropTypes.func.isRequired,
//   onMouseLeave: PropTypes.func.isRequired,
// };

// function DropdownItem({ to, title }) {
//   return (
//     <li>
//       <Link to={to} className="block p-3 hover:bg-gray-600">
//         {title}
//       </Link>
//     </li>
//   );
// }

// // Add PropTypes validation for the DropdownItem component
// DropdownItem.propTypes = {
//   to: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnterLink = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseEnterDropdown = () => {
    setActiveDropdown(activeDropdown); // Keep dropdown active when hovering over it
  };

  const handleMouseLeaveDropdown = () => {
    setActiveDropdown(null); // Close dropdown only when leaving both link and dropdown area
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          MySite
        </Link>
        <div className="sm:hidden flex md:flex space-x-4">
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown title="About Us" />
          </div>

          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="Family"
              items={[
                { to: "/projects", title: "Kids" },
                { to: "/projects", title: "Children" },
                { to: "/services", title: "Youth Home" },
              ]}
              isActive={activeDropdown === 1}
              onMouseEnterLink={() => handleMouseEnterLink(1)}
              onMouseEnterDropdown={handleMouseEnterDropdown}
            />
          </div>
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="Day Center"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeDropdown === 1}
              onMouseEnterLink={() => handleMouseEnterLink(1)}
              onMouseEnterDropdown={handleMouseEnterDropdown}
            />
          </div>
          <div>
            <Dropdown title="Gallery" />
          </div>
          <div>
            <Dropdown title="Projects" />
          </div>
          <div>
            <Dropdown title="Training" />
          </div>
          <div onMouseLeave={handleMouseLeaveDropdown}>
            <Dropdown
              title="What We Do"
              items={[
                { to: "/projects", title: "Projects" },
                { to: "/services", title: "Services" },
              ]}
              isActive={activeDropdown === 1}
              onMouseEnterLink={() => handleMouseEnterLink(1)}
              onMouseEnterDropdown={handleMouseEnterDropdown}
            />
          </div>
          <Link to="/contact" className="hover:text-gray-400">
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
  onMouseEnterDropdown,
}) {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-50 hover:text-gray-400 focus:outline-none border-b border-gray-400 pb-1" // Added border to nav link
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
      {isActive && (
        <div
          className="absolute left-0 mt-0 w-48 bg-gray-700 text-white shadow-lg rounded-lg z-50 border-t border-gray-400" // Added border to dropdown
          onMouseEnter={onMouseEnterDropdown}
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

// Add PropTypes validation for the Dropdown component
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnterLink: PropTypes.func.isRequired,
  onMouseEnterDropdown: PropTypes.func.isRequired,
};

function DropdownItem({ to, title }) {
  return (
    <li>
      <Link to={to} className="block p-3 hover:bg-gray-600">
        {title}
      </Link>
    </li>
  );
}

// Add PropTypes validation for the DropdownItem component
DropdownItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
