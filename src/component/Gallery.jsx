import GalleryItem from "./GalleryItem";

const galleryItems = [
  {
    image: "https://example.com/batches.jpg",
    title: "Batches",
    link: "/batches",
  },
  {
    image: "https://example.com/childrens-photo-session.jpg",
    title: "Children's photo session",
    link: "/childrens-photo-session",
  },
  {
    image: "https://example.com/golden-heart-christmas.jpg",
    title: "Golden Heart Christmas 2015",
    link: "/golden-heart-christmas",
  },
  {
    image: "https://example.com/dance-performance.jpg",
    title: "Dance Performance",
    link: "/dance-performance",
  },
  // Add more gallery items here
];

const Gallery = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
