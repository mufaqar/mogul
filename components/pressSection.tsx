import Link from "next/link";
import Image from "next/image";

const pressItems = [
  {
    name: "Forbes",
    image: "/images/tc.png", 
  },
  {
    name: "TechCrunch",
    image: "/images/tc.png",
  },
  {
    name: "Bloomberg",
    image: "/images/tc.png", 
  },
  {
    name: "Wired",
    image: "/images/tc.png",
  },
  {
    name: "CNN",
    image: "/images/tc.png", 
  },
];

export default function PressSection() {
  return (
    <div className="container mx-auto px-4 max-w-[1200px]">
      <div>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Find us in the press</h2>
          <Link
            href="/newsroom"
            className="inline-block hover:underline text-base font-medium rounded-md text-indigo-600"
          >
            Visit the newsroom
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 py-10">
          {pressItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg h-40">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={60}
                  className="object-contain h-20"
                />
              ) : (
                <span className="text-2xl font-bold text-gray-800 border border-gray-200 bg-gray-100 w-full h-40 flex justify-center items-center">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
