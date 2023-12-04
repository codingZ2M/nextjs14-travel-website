import { MdOutlinePlace } from "react-icons/md";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import Image from 'next/image'

const Features = () => {
  return (
    <section className="container mx-auto flex flex-col xl:flex-row py-0 md:py-20">

      {/* Left Column with Features Headings & Descriptions */}
        <div className="flex-1 p-8">
            <h2 className="text-2xl md:text-4xl font-normal mb-4"> Features</h2>

            {/* Two-column grid for features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Feature 1 */}
                <div>
                      <div className="flex gap-2 items-center  mb-2 text-[#032340]" >
                          <MdOutlinePlace className="h-8 w-8 text-[#055ba6]"/>
                          <h3 className="text-xl font-normal">Amazing Places</h3>
                      </div>
                      <p className=" text-justify text-base">
                          Discover breathtaking landscapes and iconic landmarks in every corner of the globe. Whether you seek serene beaches, vibrant cities, or rugged mountains, our destinations promise unforgettable experiences.
                      </p>
                </div>

                {/* Feature 2 */}
                <div>
                    <div className="flex gap-2 items-center  mb-2 text-[#032340]" >
                          <PiAirplaneTakeoff className="h-8 w-8 text-[#055ba6]"/>
                          <h3 className="text-xl font-normal">Seamless Booking Process</h3>
                    </div>
                    <p className=" text-justify text-base">
                        Enjoy a stress-free booking experience. Our user-friendly platform allows you to easily plan your entire trip, from flights and accommodations to activities, ensuring a smooth and convenient journey.
                    </p>
                </div>

                {/* Feature 3 */}
                <div>
                      <div className="flex gap-2 items-center  mb-2 text-[#032340]" >
                          <MdOutlineTipsAndUpdates className="h-8 w-8 text-[#055ba6]"/>
                          <h3 className="text-xl font-normal">Insider Travel Tips</h3>
                      </div>
                      <p className=" text-justify text-base">
                            Gain insights from seasoned travelers. Access a wealth of insider tips, local recommendations, and travel hacks to make the most of your adventure. We provide the information you need for a truly authentic experience.
                      </p>
                </div>

                {/* Feature 4 */}
                <div>
                      <div className="flex gap-2 items-center  mb-2 text-[#032340]" >
                          <MdOutlineLocalOffer className="h-8 w-8 text-[#055ba6]"/>
                          <h3 className="text-xl font-normal">Exclusive Travel Deals</h3>
                      </div>
                      <p className=" text-justify text-base">
                          Save on your travels with our exclusive deals. Benefit from special discounts on flights, hotels, and activities, making your dream vacation more affordable. Unlock unique offers to enhance your travel experience.
                      </p>
                </div>
            </div>
        </div>

        {/* Right Column with Background Image */}
         <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="popular-package" width={600} height={400} className='flex-1 bg-cover bg-center'/>
    </section>
  )
}

export default Features