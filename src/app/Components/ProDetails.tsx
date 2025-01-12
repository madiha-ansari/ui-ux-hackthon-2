import React from 'react'
import Image from 'next/image'

const ProDetails = () => {
    return (
        <div>
            {/* first side started */}
            <div className='bg-[#F6F5FF] py-10 px-6 md:py-[140px] md:px-[200px]'>
                <h1 className='font-JosefinSans text-[24px] text-[#101750] font-semibold md:text-[29px] text-3xl'>
                    Products Details
                </h1>

                <div className='flex flex-wrap gap-2 py-4'>
                    <div>
                        <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Home ,</p>
                    </div>
                    <div>
                        <p className='text-[14px] md:text-[16px] font-light text-[#000000]'>Page ,</p>
                    </div>
                    <div>
                        <p className='text-[14px] md:text-[16px] text-[#FB2E86]'>Products Details</p>
                    </div>
                </div>
            </div>
            {/* first side completed  */}

            {/* second side started */}
            <div className="py-[120px] px-[20px] md:px-[80px] lg:px-[120px] xl:px-[280px]">
                <div className="w-full max-w-[1170px] mx-auto h-auto bg-white flex flex-col lg:flex-row gap-4 py-[20px] px-[8px] shadow-lg">
                    {/* Images Column */}
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        <div>
                            <Image
                                src="/Rectangle 134.svg"
                                alt="Image 1"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div>
                            <Image
                                src="/Rectangle 136.svg"
                                alt="Image 2"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div>
                            <Image
                                src="/Rectangle 137.svg"
                                alt="Image 3"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/Rectangle 138.svg"
                            alt="Main Image"
                            width={375}
                            height={487}
                            className="max-w-full h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-[600px] h-auto py-[20px] px-[8px]">
                        <h1 className="font-JosefinSans text-[24px] text-[#0D134E] font-semibold md:text-[29px] text-3xl">
                            Playwood arm chair
                        </h1>
                        <div className="flex gap-2 items-center py-[10px]">
                            <div>
                                <Image
                                    src="/Group 236.png"
                                    alt="Rating"
                                    width={69}
                                    height={12}
                                    className="max-w-full h-auto"
                                />
                            </div>
                            <div>
                                <p className="text-[#171875]">(22)</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center py-[10px]">
                            <div className="text-[#171875]">$32.00</div>
                            <div className="text-[#FB2E86]">
                                <del>$32.00</del>
                            </div>
                        </div>
                        <p className="py-[10px] text-[#0D134E]">Color</p>
                        <p className="text-[#A9ACC6] leading-[29px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
                            porttitor purus, et volutpat sit.
                        </p>
                        <div className="py-[20px] flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="h-[29px] w-[89px] text-[#171875]">Add to card</div>
                            <div>
                                <Image
                                    src="/Group 235.png"
                                    alt="Cart Icon"
                                    width={31}
                                    height={31}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <p className="h-[29px] w-[89px] text-[#171875]">Categories</p>
                        <p className="h-[29px] w-[89px] text-[#171875]">Tags</p>
                        <div className="flex items-center gap-4">
                            <p className="h-[29px] w-[89px] text-[#171875]">Share</p>
                            <div>
                                <Image
                                    src="/Group 205.png"
                                    alt="Share Icons"
                                    width={56}
                                    height={12}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second completed */}

            {/* third part has been started */}
            <div className='h-[649px] w-[1920] bg-[#F9F8FE]'>

            </div>


            {/* third part has been started */}












        </div>
    )
}

export default ProDetails
