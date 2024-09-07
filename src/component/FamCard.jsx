import PropTypes from "prop-types";

const FamilyCard = ({ image, title, address, contact }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <div className="h-1 w-10 bg-blue-500 my-2"></div>
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">Tel. {contact}</p>
      </div>
    </div>
  );
};

FamilyCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

export default FamilyCard;
