"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from "next/link"

const TourPackages =  () => {
  // Sample data for tours
  const [tours, setTours] = useState([
    {
      id: 1,
      name: 'Explore Ancient Rome',
      description: 'Discover the rich history of Rome as you explore ancient ruins, including the Colosseum and Roman Forum.',
      price: '$200',
      image: "https://images.unsplash.com/photo-1590600534965-ae0a18301220?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: 'Relaxing Beach Retreat',
      description: 'Escape to a tropical paradise and unwind on pristine beaches with crystal-clear waters and breathtaking sunsets.',
      price: '$300',
      image: "https://plus.unsplash.com/premium_photo-1663045238448-fbabf2e89f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: 'Hiking Adventure in the Swiss Alps',
      description: 'Embark on a thrilling hiking adventure in the Swiss Alps, surrounded by majestic peaks and stunning landscapes.',
      price: '$250',
      image: "https://images.unsplash.com/photo-1641789107384-67a204447ecd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: 'Cultural Experience in Kyoto',
      description: 'Immerse yourself in the unique culture of Kyoto, exploring ancient temples, traditional tea houses, and beautiful gardens.',
      price: '$180',
      image: "https://images.unsplash.com/photo-1526112722470-4393b1a797ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: 'Historical Wonders of Athens',
      description: 'Embark on a journey through time as you explore the ancient wonders of Athens, including the Acropolis and Parthenon.',
      price: '$220',
      image: "https://images.unsplash.com/photo-1620418885516-68d8c2b2f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: 'Safari Adventure in Serengeti',
      description: 'Experience the thrill of a safari in the Serengeti, witnessing the incredible wildlife and breathtaking landscapes of Tanzania.',
      price: '$350',
      image: "https://plus.unsplash.com/premium_photo-1664300517018-dc9208f187be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  // Function to handle tour removal
  const removeTour = (id:any) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <div className="container mx-auto mt-10 mb-20">

      <div className='flex flex-col md:flex-row items-center justify-between'>
          <h1 className="text-2xl md:text-4xl font-normal mb-0 md:mb-8">Popular Tours & Packages</h1>
          <div className='flex items-center justify-center gap-5
                          text-base font-bold text-[#033F73] cursor-pointer mb-4 md:mb-0'>
              <h3><Link href="/tour-packages/usa">USA Tours</Link></h3>
              <h3><Link href="/tour-packages/europe">Europe Tours</Link></h3>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white md:rounded-lg overflow-hidden shadow-md">
            <Image src = {tour.image} alt={`Tour ${tour.id}`} className="w-full h-48 object-cover"  width={300} height={400}/>
            <div className="p-4">
              <h2 className="text-xl font-normal mb-2">{tour.name}</h2>
              <p className="text-gray-700 mb-4">{tour.description}</p>
              <p className="text-[#033F73] text-xl font-normal">{tour.price}</p>
              <button
                className="mt-4 bg-[#055BA6] text-white px-8 py-3 rounded-full"
                onClick={() => removeTour(tour.id)}
              >
                Remove Tour
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TourPackages