import Image from 'next/image'
import { FcRating } from "react-icons/fc";

const PopularPackages = () => {
  return (
      <section className="container mx-auto py-12">
        <h2 className="text-2xl md:text-5xl font-normal text-center mb-2 md:mb-12">Popular Packages</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Package Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1491086609819-ad138a561b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="popular-package" width={600} height={400} className='p-4'/>
              <div className="p-6">
                  <div className='flex justify-between'>
                      <h3 className="text-xl font-normal mb-2">Adventure in Paradise</h3>
                      <div className='flex gap-2 items-center justify-center'>
                          <FcRating className="h-8 w-8"/> 
                          <span>5.0</span>
                      </div>
                  </div>
                  <p className="text-gray-700 mb-4">Explore exotic landscapes and thrilling activities</p>
                  <div className="flex justify-between items-center">
                      <span className="text-[#033F73] text-xl font-normal">$999</span>
                      <button className="bg-[#055BA6] text-white px-8 py-3 rounded-full">Book Now</button>
                  </div>
            </div>
          </div>
  
          {/* Package Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="popular-package" width={600} height={400} className='p-4'/>
              <div className="p-6">
                  <div className='flex justify-between'>
                      <h3 className="text-xl font-normal mb-2">Relaxation Retreat</h3>
                      <div className='flex gap-2 items-center justify-center'>
                          <FcRating className="h-8 w-8"/> 
                          <span>4.9</span>
                      </div>
                  </div>
                  <p className="text-gray-700 mb-4">Indulge in luxury and unwind in serene surroundings</p>
                  <div className="flex justify-between items-center">
                      <span className="text-[#033F73] text-xl font-normal">$1499</span>
                      <button className="bg-[#055BA6] text-white px-8 py-3 rounded-full">Book Now</button>
                  </div>
              </div>
          </div>
  
          {/* Package Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src="https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="popular-package" width={600} height={400} className='p-4'/>
              <div className="p-6">
                  <div className='flex justify-between'>
                      <h3 className="text-xl font-normal mb-2">Cultural Discovery</h3>
                      <div className='flex gap-2 items-center justify-center'>
                          <FcRating className="h-8 w-8"/> 
                          <span>4.8</span>
                      </div>
                  </div>
                  <p className="text-gray-700 mb-4">Immerse yourself in rich cultures and vibrant traditions</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#033F73] text-xl font-normal">$1199</span>
                    <button className="bg-[#055BA6] text-white px-8 py-3 rounded-full">Book Now</button>
                  </div>
              </div>
          </div>

        </div>
      </section>
  )
}

export default PopularPackages