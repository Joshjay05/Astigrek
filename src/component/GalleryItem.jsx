import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GalleryItem = ({ image, title, link }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <Link to={link}>
          <h2 className="text-lg cursor-pointer font-bold text-gray-800 hover:text-blue-600">
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default GalleryItem;
