import React from 'react';
import Image from 'next/image';

const Section = () => {
    return (

        <div className='w-full '>
            {/* h-[2100px] */}

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '140px 0',
                }}

            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0', // Removed gap between the two sections
                        maxWidth: '1200px',
                    }}
                >
                    {/* Image Section */}
                    <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src="/Rectangle 56.png"
                            alt="Business History Image"
                            width={400}
                            height={300}
                            style={{
                                borderRadius: '10px',
                                objectFit: 'cover',
                                boxShadow: '-19px 19px 0px 0px blue',
                            }}
                        />
                    </div>

                    {/* Text Content Section */}
                    <div style={{ flex: '1', textAlign: 'left', marginLeft: '0' }}>
                        <h1
                            style={{
                                fontSize: '28px',
                                fontWeight: 'bold',
                                color: '#1A0B5B',
                                marginBottom: '20px',
                            }}
                        >
                            Know About Our Ecommerce Business, History
                        </h1>
                        <p
                            style={{
                                fontSize: '16px',
                                color: '#8A8FB9',
                                lineHeight: '1.6',
                                marginBottom: '60px',
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
                            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
                            quis bibendum quam.
                        </p>
                        <button
                            style={{
                                background: '#FB2E86',
                                color: '#fff',
                                padding: '10px 20px',
                                fontSize: '16px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>



            <div><h1 className="text-center text-[38px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto pt-[80px]">
                Our Features
            </h1></div>



            <div className="flex flex-wrap justify-center gap-1 py-[40px] px-[150px]">
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <div>
                        <div>
                            <Image
                                src="/what shopex offer (2).png"
                                alt="Offer Product 1"
                                width={271}
                                height={85}
                                className="w-full h-auto"
                            /></div>

                    </div>
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/what shopex offer (3).png"
                        alt="Offer Product 1"
                        width={271}
                        height={85}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/what shopex offer (3).png" alt="Offer Product 1"
                        width={271}
                        height={85}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/what shopex offer (3).png" alt="Offer Product 1"
                        width={271}
                        height={85}
                        className="w-full h-auto"
                    />
                </div>
            </div>



            <div className='w-full h-[503px] bg-[#FBFBFF] px-[600px] '>
                <h1 className="text-center text-[38px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto pt-[80px] pb-[60px]">
                    Our Client Say!
                </h1>


                <Image
                    src="/Comments and images (2).svg" alt="Offer Product 1"
                    width={689}
                    height={256}
                    className="w-full h-auto pb-[260px]"
                />
            </div>


            <div className='w-full h-[532px]'></div>

            <Image
                src="/footer.svg"
                alt="Latest Product 3"
                width={1920}
                height={532}
                className="w-full h-auto"
            />
        </div>

    );
};

export default Section;
