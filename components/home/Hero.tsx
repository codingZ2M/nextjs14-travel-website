
const Hero = () => {
  const carImageUrl ="https://images.unsplash.com/photo-1508193428481-d1037616ea8a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <section
          className="relative bg-cover bg-center py-16 flex flex-col items-center justify-center mb-16 md:mb-24"
          style={{
                backgroundImage: `url(${carImageUrl})`,
              }}
    >

        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="z-10 text-white flex flex-col items-center justify-center ">
            <h1 className="text-center text-white text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] 
                            font-bold leading-tight sm:leading-none mb-4">
                Explore Uncharted Destinations
            </h1>
            <button className="flex items-center justify-center text-xl 
                                font-thin tracking-wide bg-[#055BA6] text-white
                                 px-16 sm:px-20 py-5 sm:py-6  rounded-full cursor-pointer mt-4 md:mt-10">
                    Discover Now
            </button>
        </div>


        {/* Travel Statistic Cards */}
        <div className="container mt-14 md:mt-10 z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  text-center">
                {/* Travel Statistic Card 1 */}
                <div className="bg-transparent text-white p-4 md:p-6">
                    <h1 className="text-4xl md:text-5xl font-bold">100K+</h1>
                    <p className="text-lg">Destinations</p>
                </div>
 
                {/* Travel Statistic Card 2 */}
                <div className="bg-transparent text-white p-4 md:p-6  ">
                    <h1 className="text-4xl sm:text-5xl font-bold ">500K+</h1>
                    <p className="text-lg">Happy Travelers</p>
                </div>
 
                {/* Travel Statistic Card 3 */}
                <div className="bg-transparent text-white p-4 md:p-6   ">
                    <h1 className="text-4xl sm:text-5xl  font-bold ">200K+</h1>
                    <p className="text-lg">Bookings</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Hero