import React from 'react'
import Image from 'next/image'

const NewsLetter = () => {
    return (
        <div>
            <div className='w-full'>
                <Image
                    src="/Group 162 (1).png"
                    alt="Featured Product 1"
                    layout="responsive"
                    width={1920}
                    height={462}
                />
            </div>

            <br /><br />
            <div className='mx-[508px] my-8'>
                <Image
                    src="/image 1174.png"
                    alt="Featured Product 1"
                    layout="responsive"
                    width={9064}
                    height={93}
                />
            </div>

            <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto py-10">
                Latest Blog
            </h1>



            <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Leatest blog.svg"
                        alt="Latest Product 1"
                        width={360}
                        height={306}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Leatest blog (1).svg"
                        alt="Latest Product 2"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Leatest blog (2).svg"
                        alt="Latest Product 3"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
            </div>


            <div>

                <Image
                    src="/footer.svg"
                    alt="Latest Product 3"
                    width={1920}
                    height={532}
                    className="w-full h-auto"
                />
            </div>


        </div>
    )
}

export default NewsLetter
