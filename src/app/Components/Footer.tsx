import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
         <Image
                  src="/footer.png"
                  alt="Phone Icon"
                  width={1920}
                  height={532}
                  className="max-w-full h-auto"
                />
      
    </div>
  )
}

export default Footer
