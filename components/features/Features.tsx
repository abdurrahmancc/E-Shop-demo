import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
      <h2 className="text-[#031424] text-center pb-1 font-[600] font-[#031424] xl:text-[46px] md:text-[36px] text-[24px] sm:text-[28px] xl:leading-[69px]">
        We have Impressive <br /> Features{" "}
      </h2>
      <div className="xl:mt-[68px] md:mt-12 mt-8">
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-[38px] xl:gap-x-[30px] gap-x-5 gap-y-6 xl:max-w-full sm:max-w-[720px] lg:max-w-[1090px]">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default Features;
