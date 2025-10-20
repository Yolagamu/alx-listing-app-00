import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function HomePage() {
  const filters = ["Top Villa", "Self Checkin", "Luxury", "Pet Friendly", "Free Parking"];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-32"
        style={{
          backgroundImage: "url('https://example.com/hero-image.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex flex-wrap gap-3 justify-center">
          {filters.map((filter, index) => (
            <span
              key={index}
              className="bg-white shadow px-4 py-2 rounded-full cursor-pointer hover:bg-green-100"
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{property.name}</h2>
            <p className="text-gray-600 text-sm">
              {property.address.city}, {property.address.country}
            </p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-green-600 font-bold">${property.price}</p>
              <p className="text-yellow-500 text-sm">{property.rating} ⭐</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
