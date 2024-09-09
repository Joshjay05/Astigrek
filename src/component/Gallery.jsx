import GalleryItem from "./GalleryItem";
import concertbg from "../assets/concertbg.jpg";
import christmas from "../assets/christmas.jpg";
import children from "../assets/chil.jpg";
const galleryItems = [
  //   {
  //     image: "https://example.com/batches.jpg",
  //     title: "Batches",
  //     link: "/batches",
  //   },
  {
    image: children,
    title: "Children's photo session",
    link: "/childrens",
  },
  {
    image: christmas,
    title: "Golden Heart Christmas 2015",
    link: "/golden",
  },
  {
    image: concertbg,
    title: "Moments of the support concert-Language of the Heart",
    link: "/dance",
  },
  // Add more gallery items here
];

const Gallery = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
