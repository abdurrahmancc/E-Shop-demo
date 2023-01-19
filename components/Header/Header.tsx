import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isScroll, setIsScroll] = useState<Boolean>(false);

  const handleChangeBg = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBg);
  }, []);

  function scrollToFeatures() {
    const access: any = document.getElementById("features");
    access.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function scrollToDemo() {
    const access: any = document.getElementById("demo");
    access.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className={`fixed transition-all duration-300 ease-linear w-full z-50 top-0 ${
        isScroll ? "bg-[#041E42] py-5" : "xl:pt-10 md:pt-5 pt-2"
      }`}
    >
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="navbar p-0  ">
          <div className="navbar-start">
            <Link
              href={"https://e-shop-commerce.vercel.app"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo}
                height={65}
                width={209}
                className="lg:w-[209px] md:w-[180px] h-auto w-[120px] lg:h-[65px]"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li
                onClick={() => scrollToDemo()}
                className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]"
              >
                <a>Demos</a>
              </li>
              <li
                onClick={() => scrollToFeatures()}
                className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]"
              >
                <a>Features</a>
              </li>
              <li className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]">
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="text-[#031424] px-3 sm:px-4 py-[10px] md:px-6 md:py-[14px] xl:px-[33px] xl:py-[18px] font-[500] xl:text-[24px] md:text-[18px] sm:text-[16px] text-sm leading-[36px] bg-gradient-to-r cursor-pointer block from-[#f9c536] to-[#f9c536] btn-animate bg-primary">
              Purchase theme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
