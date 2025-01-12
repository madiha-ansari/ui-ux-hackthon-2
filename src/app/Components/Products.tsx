import React from 'react';
import Image from 'next/image';

const Products = () => {
    return (
        <div className="w-full px-6 md:px-12 lg:px-24 py-12">
            {/* Featured Products Section */}
            <h1 className="text-center text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                Featured Products
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Featured product.png"
                        alt="Featured Product 1"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Featured product (1).png"
                        alt="Featured Product 2"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Component 3.png"
                        alt="Featured Product 3"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                    <Image
                        src="/Component 4.png"
                        alt="Featured Product 4"
                        width={270}
                        height={361}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Separator */}
            <div className="mt-12 flex justify-center">
                <Image
                    src="/Group 169.png"
                    alt="Separator Line"
                    width={91}
                    height={4}
                />
            </div>

            {/* Latest Products Section */}
            <div className="pt-16">
                <h1 className="text-center text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                    Latest Products
                </h1>

                {/* Categories Below Latest Heading */}
                <div className="flex justify-center gap-8 mb-8">
                    <span className="text-[#FB2E86] underline underline-offset-4 text-lg font-medium">
                        New Arrival
                    </span>
                    <span className="text-[#151875] text-lg font-medium">Best Seller</span>
                    <span className="text-[#151875] text-lg font-medium">Featured</span>
                    <span className="text-[#151875] text-lg font-medium">Special Offer</span>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Component 9.png"
                            alt="Latest Product 1"
                            width={360}
                            height={306}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Leatest product.png"
                            alt="Latest Product 2"
                            width={270}
                            height={361}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Component 8.png"
                            alt="Latest Product 3"
                            width={270}
                            height={361}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-6 pt-20">
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Component 10.png"
                            alt="Latest Product 4"
                            width={360}
                            height={306}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Component 11.png"
                            alt="Latest Product 5"
                            width={270}
                            height={361}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                        <Image
                            src="/Component 12.png"
                            alt="Latest Product 6"
                            width={270}
                            height={361}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* What Shopex Offers Section */}
            <div className="pt-16">
                <h1 className="text-center text-[38px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                    What Shopex Offers!
                </h1>
                <div className="flex flex-wrap justify-center gap-1">
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
            </div>
        </div>
    );
};

export default Products