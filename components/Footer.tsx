import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#032340] text-white py-10">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between">
       
        <div className='flex flex-col justify-center items-center'>
          <h3 className="text-xl md:text-2xl font-bold text-white">CZ2M Travel </h3>
          <p className="text-base">Exploring the world with you</p>
        </div>
        
        <div className="text-base flex flex-col justify-center items-center">
          <p>Contact Us: contact@cz2m.com</p>
          <p>123 Travel Street, Cityville</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer