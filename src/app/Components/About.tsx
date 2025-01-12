import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full h-[286]'>
       <Image
                            src="/Group 196.png"
                            alt="Featured Product 1"
                            layout="responsive"
                            width={1920}
                            height={285}
                        />
      
    </div>
  )
}

export default About
