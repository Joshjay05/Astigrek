// src/components/Gallery.jsx
import childone from "../assets/childone.jpg";
import childtwo from "../assets/childtwo.jpg";
import childthree from "../assets/childthree.jpg";
const images = [childtwo, childthree, childone];

const ChildrenGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Kids</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-4">
        Head of household: Rima Sederevičienė{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildrenGallery;
