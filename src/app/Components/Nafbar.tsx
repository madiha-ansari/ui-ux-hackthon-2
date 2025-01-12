import React from "react";
import Image from "next/image";

const Nafbar = () => {
  return (
    <div>
      {/* Navbar Container */}
      <div className="w-full h-11 bg-purple-700 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Left Section: Email and Phone */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Image src="/Vector.png" alt="Email Icon" width={13} height={10} />
            <a
              href="#"
              className="text-white text-xs sm:text-sm md:text-base font-medium no-underline"
            >
              mhhasanul@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Image
              src="/bx_bx-phone-call.png"
              alt="Phone Icon"
              width={13}
              height={10}
            />
            <a
              href="#"
              className="text-white text-xs sm:text-sm md:text-base font-medium no-underline"
            >
              (12345)67890
            </a>
          </div>
        </div>

        {/* Right Section: Language, Currency, Login, Wishlist */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-white text-xs sm:text-sm md:text-base font-medium">
            English
          </div>
          <div className="text-white text-xs sm:text-sm md:text-base font-medium">USD</div>
          <div className="text-white text-xs sm:text-sm md:text-base font-medium">Login</div>
          <div className="text-white text-xs sm:text-sm md:text-base font-medium">
            Wishlist
          </div>
          <div>
            <Image src="/Group.png" alt="Cart Icon" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nafbar;
