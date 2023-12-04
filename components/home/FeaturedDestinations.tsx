import { GiCommercialAirplane } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";

interface FeaturedSpotProps {
  bgImage: string;
  title: string;
  subTitle: string;
  happyTravelers: string;
}

// Creating Reusable Component & Displaying Data with Props
const FeaturedSpot = ({bgImage, title, subTitle,  happyTravelers}: FeaturedSpotProps) => {
  return (
      <div className= "h-full w-full bg-cover bg-no-repeat rounded-2xl"
            style={{
                  backgroundImage: `url(${bgImage})`
              }}     
      >    
              <div className='flex flex-col gap-4 justify-between h-full items-start p-6 lg:px-20 lg:py-10'>
                  <div className="flex items-center gap-4">
                      <div className='rounded-full bg-[#032340] p-5 md:p-8'>
                          <GiCommercialAirplane className="h-10 w-10 text-[#ffff]"/>
                      </div>
                      <div className="flex flex-col gap-1 text-[#ffffff]">
                          <h4 className="text-2xl md:text-6xl font-bold">{title}</h4>
                          <p className="hidden md:flex text-lg font-normal">{subTitle}</p>
                      </div>
                  </div>    
                  <div className="flex items-center justify-center gap-3">
                      <div className='rounded-full bg-[#032340] p-4 md:p-6'>
                          <BsPeople className="h-8 w-8 text-[#ffff]"/>
                      </div>
                      <h4 className="text-2xl text-white font-bold">{happyTravelers}</h4>
                  </div>
                  
              </div>
      </div>
  )
}


const FeaturedDestinations = () => {
  return (
    <section className='container mx-auto px-4 sm:px-4 relative flex mb-4 lg:mb-10 xl:mb-20'>        
        <div className='flex flex-col lg:flex-row h-full w-full items-center justify-center gap-6 md:gap-12
                         overflow-hidden'>

           <FeaturedSpot bgImage="https://images.unsplash.com/photo-1682685797795-5640f369a70a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         title="Uncover Hidden Gems" 
                         subTitle="From Cultural Marvels to Natural Wonders"  
                         happyTravelers="3K+ Joined" />
                        
            <FeaturedSpot bgImage="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         title="Journey to Paradise" 
                         subTitle="Your Next Adventure Begins Here"  
                         happyTravelers="5K+ Joined"/>
        </div>
    </section>
  )
}

export default FeaturedDestinations