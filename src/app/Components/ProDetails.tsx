import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

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
            <div className='bg-[#F9F8FE] py-[30px] px-[20px] sm:py-[60px] sm:px-[60px] md:py-[90px] md:px-[100px] lg:h-[760px] lg:px-[200px] xl:px-[400px]'>
                <div className='flex flex-wrap items-center gap-4 sm:gap-8'>
                    <div><p className='font-JosefinSans text-[16px] sm:text-[18px] lg:text-[20px] underline text-[#151875]'>Description</p></div>
                    <div><p className='font-JosefinSans text-[16px] sm:text-[18px] lg:text-[20px] underline text-[#151875]' style={{ wordSpacing: "3px" }}>Additional Info</p></div>
                    <div><p className='font-JosefinSans text-[16px] sm:text-[18px] lg:text-[20px] underline text-[#151875]'>Reviews</p></div>
                    <div><p className='font-JosefinSans text-[16px] sm:text-[18px] lg:text-[20px] underline text-[#151875]'>Video</p></div>
                </div>
                <p className='font-JosefinSans text-[14px] sm:text-[16px] lg:text-[20px] underline text-[#151875] py-[20px] md:py-[40px]' style={{ wordSpacing: "1px" }}>Varius tempor.</p>
                <p className='text-[14px] sm:text-[15px] lg:text-[16px] text-[#A9ACC6] max-w-full lg:w-[1153px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr Aliquam dis vulputate followed.</p>
                <p className='font-JosefinSans text-[14px] sm:text-[16px] lg:text-[20px] underline text-[#151875] py-[20px] md:py-[40px]' style={{ wordSpacing: "8px" }}>More details</p>

                <div>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='flex items-center gap-4 py-[10px] sm:py-[20px]'>
                            <div>
                                <Image
                                    src="/akar-icons_arrow-up.png"
                                    alt="Cart Icon"
                                    width={24}
                                    height={24}
                                    className="max-w-full h-auto"
                                />
                            </div>
                            <div className='text-[14px] sm:text-[15px] lg:text-[16px] text-[#A9ACC6] max-w-full lg:w-[1154px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* third part has been end */}






{/* --------------------------------------------------- */}
            {/* four part started */}
            <div className="w-full min-h-screen py-[120px] px-4 md:px-[120px] lg:px-[480px]">
  <h1 className="text-[24px] md:text-[28px] font-JosefinSans text-[#101750] mb-8">
    Related Products
  </h1>

  <div className="py-[40px] md:py-[80px] flex flex-wrap items-center gap-7">
    {/* Product Card */}
    {[
      { name: "Mens Fashion Wear", price: "$43.00" },
      { name: "Women’s Fashion", price: "$67.00" },
      { name: "Wolx Fashion", price: "$51.00" },
      { name: "Digital Clock", price: "$48.00" },
    ].map((product, index) => (
      <div key={index} className="flex-1 max-w-[270px]">
        <Image
          src="/Rectangle 128.png"
          alt="Product Image"
          width={270}
          height={340}
          className="max-w-full h-auto"
        />
        <div className="flex items-center justify-between py-[8px]">
          <p className="text-sm text-[#151875]">{product.name}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/ant-design_star-filled.png"
                alt="Star Icon"
                width={12}
                height={12}
                className="max-w-full h-auto"
              />
            ))}
          </div>
        </div>
        <p className="text-[#151875] text-sm">{product.price}</p>
      </div>
    ))}
  </div>

  {/* Footer Image */}
  <div className="mt-8">
    <Image
      src="/maing.png"
      alt="Footer Banner"
      width={904}
      height={93}
      className="max-w-full h-auto"
    />
  </div>
</div>

{/* ---------------------------------------------------------------- */}
            {/* footer */}
            <Footer />

        </div>
    )
}

export default ProDetails
