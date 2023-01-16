import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import bg from "../../assets/footer.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="py-[107px] text-center bg-no-repeat bg-contain bg-center"
    >
      <Image
        src={logo}
        width={209}
        height={65}
        className="md:w-[209px] w-[180px] mx-auto h-auto xl:h-[65px] lg:w-[150px] lg:h-[48px]"
        alt="logo"
      />
      <p className="text-[#FFFFFF] xl:max-w-[1042px] lg:max-w-[800px] md:max-w-[700px] lg:my-14 my-10  md:leading-10 mx-auto font-[600] xl:text-[42px] text-xl md:text-[32px] sm:text-2xl lg:leading-[46px] xl:leading-[63px] text-center ">
        Let&apos;`s buy our super fast and easy e-commerce website template
      </p>
      <a className="text-[#031424] px-3 sm:px-4 py-[10px] md:px-6 md:py-[14px] xl:px-[33px] xl:py-[18px] font-[500] xl:text-[24px] md:text-[18px] sm:text-[16px] inline-block text-sm leading-[36px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate bg-primary">
        Purchase theme
      </a>
    </div>
  );
};

export default Footer;
