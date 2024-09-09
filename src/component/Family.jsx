import FamilyCard from "./FamCard";
import children from "../assets/childone.jpg";
import youth from "../assets/youth.jpg";
const families = [
  {
    image: children,
    title: "Children's home",
    address: "Žemynos str. 3-24",
    contact: "8 686 72350",
  },
  {
    image: youth,
    title: "Youth home",
    address: "S. Konarskios str. 32-10",
    contact: "8 699 42861",
  },
  // {
  //   image: "https://example.com/dreams.jpg",
  //   title: "DREAMS",
  //   address: "Fabijoniškių str. 43-71",
  //   contact: "8 690 37,574",
  // },
  // Add more family objects as needed
];

const FamilySection = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Families</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {families.map((family, index) => (
          <FamilyCard
            key={index}
            image={family.image}
            title={family.title}
            address={family.address}
            contact={family.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default FamilySection;
