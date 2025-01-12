import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-auto w-full bg-[#F2F0FF] flex flex-col lg:flex-row gap-4 p-6 lg:p-[40px_130px]">

      {/* Left Image */}
      <div className="flex justify-center lg:w-[387px] lg:h-[387px]">
        <Image
          src="/image 32.png"
          alt="Phone Icon"
          width={387}
          height={387}
          className="max-w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center text-center lg:text-left lg:w-[644px] lg:pl-8">
        <p className="text-[#FB2E86] font-bold font-lato text-sm md:text-base lg:text-lg leading-7">
          Best Furniture For Your Castle....
        </p>
        <h1 className="text-black font-sans text-3xl md:text-4xl lg:text-4xl leading-tight mt-4">
          New Furniture Collection <br />
          Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] font-lato font-semibold text-sm md:text-base lg:text-lg mt-4 md:tracking-normal lg:tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.
        </p>
        <button className="mt-6 bg-[#FB2E86] text-white font-sans text-sm md:text-base lg:text-lg rounded-md py-2 px-6 lg:w-[163px]">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:w-[706px] lg:h-[689px]">
        <Image
          src="/sofa promotional header.png"
          alt="Sofa Image"
          width={708}
          height={689}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Hero
