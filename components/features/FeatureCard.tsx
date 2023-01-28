import Image from "next/image";
import React from "react";

type FeatureItems = {
  _id: string;
  title: string;
  description: string;
  img: any;
};

type Item = {
  item: FeatureItems;
};

const FeatureCard = ({ item }: Item) => {
  return (
    <div className="bg-[#FFFFFF] border-[#DEDEDE] max-w-[350px] xl:max-w-[460px] mx-auto duration-150 transition-all ease-linear border-[2.5px] hover:border-primary xl:px-[38px] px-3 md:px-5 xl:py-[68px] py-10 rounded-[10.05px]">
      <div className="lg:w-[93px] lg:h-[93px] w-16 h-16 mx-auto flex items-center justify-center bg-primary  rounded-full">
        <Image
          height={46}
          width={46}
          src={item?.img}
          className="lg:w-[46px] lg:h-[46px] h-[32px] w-[32px]"
          alt="responsive"
        />
      </div>
      <h3 className="font-[500] mt-5 pb-3 text-[#031424] text-2xl xl:text-[30px] xl:leading-[45px] text-center">
        {item?.title}
      </h3>
      <p className="xl:text-[20px] text-sm md:text-[16px] text-[#6F6F6F] mx-auto lg:max-w-[383.25px] lg:leading-[32px] text-center ">
        {item?.description}
      </p>
    </div>
  );
};

export default FeatureCard;
