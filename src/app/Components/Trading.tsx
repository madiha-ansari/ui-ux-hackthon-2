import React from 'react';
import Image from 'next/image';

const Trading = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-[140px] px-4 sm:px-[20px] md:px-[40px] lg:px-[180px]'>
            {/* Section Heading */}
            <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#151875] leading-[49px] mb-8 md:w-[367px] mx-auto">
                Trading Products
            </h1>

            {/* Product Grid */}
            <div className="flex flex-wrap justify-center gap-4">
                {["/Trending products@2x.png", "/Trending products.svg", "/Trending products.png", "/Trending products (1).png"].map((src, index) => (
                    <div key={index} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)]">
                        <Image
                            src={src}
                            alt={`Featured Product ${index + 1}`}
                            width={270}
                            height={350}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>

            {/* Latest Products */}
            <div className="flex flex-wrap gap-6 pt-8">
                <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)]">
                    <Image
                        src="/Group 154.png"
                        alt="Latest Product 1"
                        width={420}
                        height={270}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)]">
                    <Image
                        src="/Group 155.png"
                        alt="Latest Product 2"
                        width={240}
                        height={270}
                        className="w-full h-auto"
                    />
                </div>

                {/* List of Trending Products */}
                <div className="w-full md:w-[420px] flex flex-col gap-2">
                    {["/Trnding products list.png", "/Trnding products list (1).png", "/Trnding products list (2).png"].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Trending Product List ${index + 1}`}
                            width={267}
                            height={74}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            </div>

            {/* Discount Section */}
            <div className="pt-16">
                <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                    Discount Item
                </h1>

                <div className="flex justify-center gap-8 mb-8">
                    <span className="text-[#FB2E86] underline underline-offset-4 text-lg font-medium">
                        Wood Chair
                    </span>
                    <span className="text-[#151875] text-lg font-medium">Plastic Chair</span>
                    <span className="text-[#151875] text-lg font-medium">Sofa Collection</span>
                </div>


                <div className="w-full max-w-[1214px] py-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Text Section */}
                        <div className="max-w-[600px]">
                            <h2 className="text-[12px] sm:text-[26px] font-bold text-[#1A0B5B] mb-4">
                                20% Discount Of All Products
                            </h2>
                            <p className="text-[#FB2E86] text-lg mb-4">Eams Sofa Compact</p>
                            <p className="text-[#B7BACB] text-base leading-[30px] tracking-[2px] mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                            </p>

                            {/* Features Grid */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-[#B7BACB]">
                                    <Image src="/Vectorsess.png" alt="checkmark" width={20} height={20} />
                                    <span>Material expose like metals</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#B7BACB]">
                                    <Image src="/Vectorsess.png" alt="checkmark" width={20} height={20} />
                                    <span>Clear lines and geometric figures</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#B7BACB]">
                                    <Image src="/Vectorsess.png" alt="checkmark" width={20} height={20} />
                                    <span>Single neutral colors</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#B7BACB]">
                                    <Image src="/Vectorsess.png" alt="checkmark" width={20} height={20} />
                                    <span>Mixed modern life methods</span>
                                </div>
                            </div>
                        </div>

                        {/* Sofa Image */}
                        <div className="flex justify-center items-center">
                            <Image
                                src="/tortuga-01-b 1.png"
                                alt="Sofa"
                                width={699}
                                height={597}
                                className="w-full h-auto max-w-[400px] lg:max-w-[600px]"
                            />
                        </div>


                    </div>
                    <br />
                    <button style={{ width: "200px", height: "57px", backgroundColor: "#FB2E86", fontSize: '17px', letterSpacing: "2%", color: "#FFFFFF" }}>Shop Now</button>
                </div>
{/* 
                <br /><br />
                <div>
                    <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                        Discount Item
                    </h1>

                </div> */}





            </div>
        </div>
    );
};

export default Trading;
