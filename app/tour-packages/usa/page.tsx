import Image from 'next/image';

const USATour = () => {

  const tourPackages = [
    {
      id: 1,
      name: 'Grand Canyon Adventure',
      description: 'Explore the stunning Grand Canyon with our guided tour.',
      price: '$999',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'New York City Experience',
      description: 'Discover the vibrant culture of New York City.',
      price: '$1499',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'National Park Getaway',
      description: 'Escape to the tranquility of the national parks.',
      price: '$1299',
      image: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Beach Resort Retreat',
      description: 'Relax and unwind at our luxurious beach resort.',
      price: '$1799',
      image: 'https://images.unsplash.com/photo-1582498683310-b125e09e9441?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Historical City Tour',
      description: 'Journey through time with our historical city tour.',
      price: '$1199',
      image: 'https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Mountain Adventure Expedition',
      description: 'Embark on an exciting mountain adventure.',
      price: '$1599',
      image: 'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  
  return (
    <div className="container mx-auto mt-10 mb-20">

        <h1 className="text-2xl md:text-4xl font-normal mb-0 md:mb-6 ml-4">USA Tour Packages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
                  <div key={tour.id} className="bg-white p-3 md:p-6 rounded-lg shadow-md">
                      <Image src = {tour.image} alt={`Tour ${tour.id}`} className="w-full h-48 object-cover"  width={300} height={400}/>
                      <h2 className="text-xl md:text-2xl font-normal py-2">{tour.name}</h2>
                      <p className="text-gray-600 py-2">{tour.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{tour.price}</span>
                        <button className="mt-4 bg-[#055BA6] text-white px-8 py-3 rounded-full">
                            Book Now
                        </button>
                      </div>
                  </div>
            ))}
        </div>

    </div>
  )
}

export default USATour