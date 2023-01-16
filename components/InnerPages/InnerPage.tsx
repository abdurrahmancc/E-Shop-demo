import Image from "next/image";
import Link from "next/link";
import React from "react";

type InnerPageItems = {
  _id: string;
  img: any;
  name: string;
  link: string;
};

type ItemsTypes = {
  item: InnerPageItems;
};

const InnerPage = ({ item }: ItemsTypes) => {
  return (
    <div>
      <div className="relative">
        <div
          style={{
            background: `linear-gradient(90deg, rgba(71, 118, 230, 0.75) 0%, rgba(142, 84, 233, 0.75) 100%)`,
          }}
          className="absolute w-full h-full opacity-0 hover:opacity-100 duration-150 transition-all ease-linear"
        >
          <div className="flex items-center justify-center h-full">
            <Link
              href={item?.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[#031424] leading-[24px] text-[16px] px-[24px] py-[14px] font-[500]"
            >
              View Demo
            </Link>
          </div>
        </div>
        <figure style={{ boxShadow: `0px 4px 24px 8px rgba(0, 0, 0, 0.04)` }}>
          <Image
            src={item?.img}
            width={460}
            height={460}
            className="w-full h-auto"
            alt="e-shop home page demo"
          />
        </figure>
      </div>
      <h3 className="lg:mt-[30px]  mt-5 text-[#3E3E3E] lg:leading-9 text-lg md:text-xl lg:text-[24px] text-center">
        {" "}
        {item?.name}
      </h3>
    </div>
  );
};

export default InnerPage;
