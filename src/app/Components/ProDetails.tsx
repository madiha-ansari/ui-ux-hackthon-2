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
            <div className='py-[120px] px-[280px]'>
                <div className='w-[1170px] h-[509px] bg-white flex gap-4 py-[5px] px-[8px] shadow-lg'>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <Image
                                src="/Rectangle 134.svg"
                                alt="Phone Icon"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div>
                            <Image
                                src="/Rectangle 136.svg"
                                alt="Phone Icon"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div>
                            <Image
                                src="/Rectangle 137.svg"
                                alt="Phone Icon"
                                width={151}
                                height={151}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                    {/* 1 img */}
                    <div>
                        <Image
                            src="/Rectangle 138.svg"
                            alt="Phone Icon"
                            width={375}
                            height={487}
                            className="max-w-full h-auto"
                        />
                    </div>
                    {/* text */}
                    <div className='w-[600px] h-[500px] py-[40px] px-[8px]'>
                        <h1 className='font-JosefinSans text-[24px] text-[#0D134E] font-semibold md:text-[29px] text-3xl'>
                            Playwood arm chair
                        </h1>
                        <div className='flex gap-2 items-center py-[10px]'>
                            <div>
                                <Image
                                    src="/Group 236.png"
                                    alt="Phone Icon"
                                    width={69}
                                    height={12}
                                    className="max-w-full h-auto"
                                />
                            </div>
                            <div>
                                <p className='text-[#171875]'>(22)</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center py-[10px]'>
                            <div className='text-[#171875]'>$32.00</div>
                            <div className='text-[#FB2E86]'><del>$32.00</del></div>
                        </div>
                        <p className='py-[10px] text-[#0D134E]'>Color</p>
                        <p className='w-[594px] h-[45px] font-JosefinSans text-[16px] leading-[29px] text-[#A9ACC6]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
                        </p>
                        <div className='py-[30px] px-[90px] flex items-center gap-4'>
                            <div className='h-[29px] w-[89px] text-[#171875]'>Add to card</div>
                            <div>
                                <Image
                                    src="/Group 235.png"
                                    alt="Phone Icon"
                                    width={31}
                                    height={31}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <p className='h-[29px] w-[89px] text-[#171875]'>Categories</p>
                        <p className='h-[29px] w-[89px] text-[#171875]'>Tags</p>
                        <div className='flex items-center gap-4'>
                            <div><p className='h-[29px] w-[89px] text-[#171875]'>Share</p></div>
                            <div>
                                <Image
                                    src="/Group 205.png"
                                    alt="Phone Icon"
                                    width={56}
                                    height={12}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    {/* text div */}
                </div>
            </div>
            {/* second completed */}













        </div>
    )
}

export default ProDetails
