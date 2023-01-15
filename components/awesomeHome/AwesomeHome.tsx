import Image from "next/image";
import React from "react";
import img1 from "../../assets/1_Home.png";

const AwesomeHome = () => {
  return (
    <div>
      <h2 className="text-[#031424] text-center pb-1 font-[600] font-[#031424] xl:text-[46px] md:text-[36px] text-[24px] sm:text-[28px] xl:leading-[69px]">
        Awesome Home Pages
      </h2>
      <p className="text-[#666666] text-center xl:text-[24px] text-[16px] sm:text-lg md:text-xl xl:leading-[36px]">
        3 e-commerce Home Pages
      </p>
      <div className="xl:mt-[68px] md:mt-12 mt-8">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-5 xl:gap-x-[30px]">
          <div>
            <div className="relative">
              <div
                style={{
                  background: `linear-gradient(90deg, rgba(71, 118, 230, 0.75) 0%, rgba(142, 84, 233, 0.75) 100%)`,
                }}
                className="absolute w-full h-full opacity-0 hover:opacity-100 duration-150 transition-all ease-linear"
              >
                <div className="flex items-center justify-center h-full">
                  <button className=" bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[#031424] leading-[24px] text-[16px] px-[24px] py-[14px] font-[500]">
                    View Demo
                  </button>
                </div>
              </div>
              <figure style={{ boxShadow: `0px 4px 24px 8px rgba(0, 0, 0, 0.04)` }}>
                <Image
                  src={img1}
                  width={460}
                  height={460}
                  className="w-full h-auto"
                  alt="e-shop home page demo"
                />
              </figure>
            </div>
            <h3 className="lg:mt-[30px]  mt-5 text-[#3E3E3E] lg:leading-9 text-lg md:text-xl lg:text-[24px] text-center">
              {" "}
              Home Page Style 1
            </h3>
          </div>
          <div>
            <div className="relative">
              <div
                style={{
                  background: `linear-gradient(90deg, rgba(71, 118, 230, 0.75) 0%, rgba(142, 84, 233, 0.75) 100%)`,
                }}
                className="absolute w-full h-full opacity-0 hover:opacity-100 duration-150 transition-all ease-linear"
              >
                <div className="flex items-center justify-center h-full">
                  <button className=" bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[#031424] leading-[24px] text-[16px] px-[24px] py-[14px] font-[500]">
                    View Demo
                  </button>
                </div>
              </div>
              <figure style={{ boxShadow: `0px 4px 24px 8px rgba(0, 0, 0, 0.04)` }}>
                <Image
                  src={img1}
                  width={460}
                  height={460}
                  className="w-full h-auto"
                  alt="e-shop home page demo"
                />
              </figure>
            </div>
            <h3 className="lg:mt-[30px]  mt-5 text-[#3E3E3E] lg:leading-9 text-lg md:text-xl lg:text-[24px] text-center">
              {" "}
              Home Page Style 1
            </h3>
          </div>
          <div>
            <div className="relative">
              <div
                style={{
                  background: `linear-gradient(90deg, rgba(71, 118, 230, 0.75) 0%, rgba(142, 84, 233, 0.75) 100%)`,
                }}
                className="absolute w-full h-full opacity-0 hover:opacity-100 duration-150 transition-all ease-linear"
              >
                <div className="flex items-center justify-center h-full">
                  <button className=" bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[#031424] leading-[24px] text-[16px] px-[24px] py-[14px] font-[500]">
                    View Demo
                  </button>
                </div>
              </div>
              <figure style={{ boxShadow: `0px 4px 24px 8px rgba(0, 0, 0, 0.04)` }}>
                <Image
                  src={img1}
                  width={460}
                  height={460}
                  className="w-full h-auto"
                  alt="e-shop home page demo"
                />
              </figure>
            </div>
            <h3 className="lg:mt-[30px]  mt-5 text-[#3E3E3E] lg:leading-9 text-lg md:text-xl lg:text-[24px] text-center">
              {" "}
              Home Page Style 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeHome;
