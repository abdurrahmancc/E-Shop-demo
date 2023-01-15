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

  return (
    <div
      className={`fixed transition-all duration-300 ease-linear w-full z-50 top-0 ${
        isScroll ? "bg-[#041E42] py-5" : "xl:pt-10 md:pt-5 pt-2"
      }`}
    >
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="navbar p-0  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Demos</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Support</a>
                </li>
              </ul>
            </div>
            <Link href={"/demo"}>
              <Image
                src={logo}
                height={65}
                width={209}
                className="xl:w-[209px] w-[100px] h-auto xl:h-[65px] lg:w-[150px] lg:h-[48px]"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]">
                <a>Demos</a>
              </li>
              <li className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]">
                <a>Features</a>
              </li>
              <li className="text-[#FFFFFF] leading-[30px] text-[20px] font-[600]">
                <a>Support</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="text-[#031424] px-3 sm:px-4 py-[10px] md:px-6 md:py-[14px] xl:px-[33px] xl:py-[18px] font-[500] xl:text-[24px] md:text-[18px] sm:text-[16px] text-sm leading-[36px] bg-gradient-to-r block from-[#f9c536] to-[#f9c536] btn-animate bg-primary">
              Purchase theme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
