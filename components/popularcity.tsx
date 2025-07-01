import Link from "next/link";
import Image from "next/image";

export default function PopularCities() {
  const cities = [
    { name: "New York, NY", image: "/images/seventh-west-card.jpg" },
    { name: "San Francisco, CA", image: "/images/seventh-west-card.jpg" },
    { name: "Atlanta, GA", image: "/images/seventh-west-card.jpg" },
    { name: "Chicago, IL", image: "/images/seventh-west-card.jpg" },
    { name: "Toronto, ON", image: "/images/seventh-west-card.jpg" }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Heading Section */}
        <div className=" mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Popular cities</h1>
          <p className="text-lg text-gray-600">
            Discover houses and apartments for rent in our most popular locations.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city, index) => (
            <Link 
              key={index}
              href={`/search?location=${city.name.split(',')[0].trim().toLowerCase()}`}
              className="block   overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="py-3 ">
                <span className="text-gray-800 font-bold">{city.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}