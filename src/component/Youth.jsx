// src/components/Gallery.jsx
import childone from "../assets/childone.jpg";
import childtwo from "../assets/childtwo.jpg";
import childthree from "../assets/childthree.jpg";
const images = [childtwo, childthree, childone];

const YouthGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Youth</h1>
      <p>Head of household:Victoria Malachovska </p>
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

export default YouthGallery;
