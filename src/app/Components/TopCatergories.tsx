import React from 'react';
import Image from 'next/image';

const TopCategories = () => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-16"> {/* Added left and right margins */}
            <div>
                <h1 className="text-center text-[32px] sm:text-[42px] font-bold text-[#1A0B5B] leading-[49px] mb-8 md:w-[367px] mx-auto">
                    Top Categories
                </h1>

                <div className="w-full px-6 md:px-12 lg:px-24 py-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                            <Image
                                src="/Top catagories.png"
                                alt="Featured Product 1"
                                width={269}
                                height={345}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                            <Image
                                src="/mmm.png"
                                alt="Featured Product 2"
                                width={269}
                                height={345}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                            <Image
                                src="/Top catagories (2).png"
                                alt="Featured Product 3"
                                width={269}
                                height={345}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
                            <Image
                                src="/Top catagories (1).png"
                                alt="Featured Product 4"
                                width={269}
                                height={345}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    );
};

export default TopCategories;
