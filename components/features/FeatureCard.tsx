import Image from "next/image";
import React from "react";
import responsive from "../../assets/responsive.svg";

const FeatureCard = () => {
  return (
    <div className="bg-[#FFFFFF] max-w-[350px] xl:max-w-[460px] mx-auto duration-150 transition-all ease-linear border-[#fff] border-[2.5px] hover:border-primary xl:px-[38px] px-3 md:px-5 xl:py-[68px] py-10 rounded-[10.05px]">
      <div className="lg:w-[93px] lg:h-[93px] w-16 h-16 mx-auto flex items-center justify-center bg-primary  rounded-full">
        <Image
          height={46}
          width={46}
          src={responsive}
          className="lg:w-[46px] lg:h-[46px] h-[32px] w-[32px]"
          alt="responsive"
        />
      </div>
      <h3 className="font-[500] mt-5 pb-3 text-[#031424] text-2xl xl:text-[30px] xl:leading-[45px] text-center">
        Responsive Design
      </h3>
      <p className="xl:text-[20px] text-sm md:text-[16px] text-[#6F6F6F] mx-auto lg:max-w-[383.25px] lg:leading-[32px] text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim tincidunt ligula.
      </p>
    </div>
  );
};

export default FeatureCard;
