import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1443px] w-full h-full mx-auto container px-4 lg:px-10 2xl:px-0">
      <div className="flex items-center pt-8 xl:pt-32 h-full">
        <div className="">
          <h1 className="text-[#FFFFFF] 2xl:text-[56px] text-[22px] sm:text-[3.5vw] md:text-[4vw] lg:text-[3.5vw] leading-12 xl:leading-[60px] 2xl:leading-[74px] font-[600]">
            E-Shopi - Next js <br /> e-commerce Template <br /> With Redux Toolkit
          </h1>
          <p className="lg:text-[16px] text-xs sm:text-sm 2xl:max-w-[681px] sm:max-w-[450px] max-w-[380px] lg:max-w-[550px] text-[#FFFFFF] lg:mb-9 mb-5 mt-[14px] leading-6 xl:leading-[30px] ">
            E-Shopi is evaluated as my most unique Multipurpose HTML5 and Next js Template for
            online shop with a clean and modern design.{" "}
          </p>
          <button className="text-[#031424] px-3 sm:px-4 py-[10px] md:px-6 md:py-[14px] xl:px-[33px] xl:py-[18px] font-[500] xl:text-[24px] md:text-[18px] sm:text-[16px] text-sm leading-[36px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate bg-primary">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
