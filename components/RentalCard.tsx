'use client';

import Image from 'next/image';
import { Bookmark, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { LiaWarehouseSolid } from "react-icons/lia";
const rentals = [
  {
    image: '/images/seventh-west-card.webp',
    tags: ['Featured', 'Rent special'],
    rating: '9.6',
    title: 'Seventh West Apartments',
    address: '1427 7th St, Santa Monica, CA 90401',
    features: 'Studio–2 beds | 1–2 baths\nIn unit laundry | Furnished | Air conditioning',
    price: '$2,695–$4,692',
    age: '2d ago',
  },
  {
    image: '/images/seventh-west-card.webp',
    tags: ['3D tour'],
    rating: '10',
    title: 'Santa Monica Palms',
    address: '2501 Pico Blvd, Santa Monica, CA 90405',
    features: '1 bed | 1 bath\nAir conditioning | On site laundry | Swimming pool',
    price: '$2,300–$2,400',
    age: '1d ago',
  },
  {
    image: '/images/seventh-west-card.webp',
    tags: [],
    rating: '9',
    title: 'Wave @3rd',
    address: '901 3rd St, Santa Monica, CA 90403',
    features: '1–2 beds | 1–2 baths\nIn unit laundry | Air conditioning | Balcony',
    price: '$4,295–$5,995',
    age: '2d ago',
  },
];

function RentalCard({ item }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
      {/* Image + tags */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
          className="rounded-t-md w-full object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Bookmark size={18} className="absolute top-2 right-2 text-white" />
        <span className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-2 py-0.5 rounded">
          {item.age}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center text-sm font-medium gap-1 text-gray-700">
          <span className="font-bold text-blue-700">{item.rating}</span>
          <span>Excellent</span>
          <CheckCircle size={14} className="text-green-600 ml-1" />
          <span>Verified</span>
          <span className="ml-auto text-blue-600 cursor-pointer">Quick look</span>
        </div>

        <h3 className="font-bold text-lg pt-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.address}</p>
        <p className="text-sm text-gray-500 whitespace-pre-line">{item.features}</p>
        <p className="text-md font-bold">{item.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex  gap-2 px-4 pb-4 mt-auto">
        <Link href='/' className=" text-sm  py-1 rounded text-center flex gap-1 items-center">
        <LiaWarehouseSolid className='text-xl'/>
          Tour
        </Link>
        <Link href='/' className="bg-black text-white text-sm px-3 py-1.5 font-semibold  w-full rounded hover:opacity-90 text-center" >
          Check availability
        </Link>
      </div>
    </div>
  );
}

export default function RentalsPage() {
  return (
    <section className="px-4 py-8 max-w-[1200px] mx-auto">
      <h2 className="text-center md:text-3xl text-2xl lg:text-5xl font-semi mb-14 ">
      Find Rentals In Your Area That Fit Your Budget
      </h2>
       <div className='border-b-1 border-gray-200 mb-6 pb-2'>
          <div className="flex flex-wrap gap-4 mb-2 md:mb-0  font-medium">
          <Link href="/">Recommended</Link>
          <Link href="/">Pet-friendly</Link>
          <Link href="/">New</Link>
          
        </div>
       </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentals.map((rental, index) => (
          <RentalCard key={index} item={rental} />
        ))}
      </div>
    </section>
  );
}
