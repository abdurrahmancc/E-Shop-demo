import React from "react";
import FeatureCard from "./FeatureCard";
import support from "../../assets/24-hours-support.svg";
import document from "../../assets/document.svg";
import edit from "../../assets/edit.svg";
import responsive from "../../assets/responsive.svg";
import seo from "../../assets/seo.svg";
import speedometer from "../../assets/speedometer.svg";
import user from "../../assets/user.svg";
import webDesign from "../../assets/web-design.svg";
import upgrade from "../../assets/upgrade.svg";

type FeatureItems = {
  _id: string;
  title: string;
  description: string;
  img: any;
};

const featuresItems: FeatureItems[] = [
  {
    _id: "1",
    title: "Responsive Design",
    description:
      "Our Template is fully responsive for all devices. You can visit our template on all devices easily.",
    img: responsive,
  },
  {
    _id: "2",
    title: "Easy Customization",
    description: "We have provided a lot of useful built-in components for very easy to customize.",
    img: edit,
  },
  {
    _id: "3",
    title: "SEO Friendly",
    description:
      "For managing your SEO, we used Next.js, which is much simpler for any of your Next.js projects.",
    img: seo,
  },
  {
    _id: "4",
    title: "Well Documented",
    description:
      "The e-shopi code is excellent and well-documented. Additionally, customizing it is really simple.",
    img: document,
  },
  {
    _id: "5",
    title: "User Friendly",
    description:
      "we used a simple layout and a lot of useful built-in components that are very user friendly",
    img: user,
  },
  {
    _id: "6",
    title: "24/7 Support",
    description:
      "We provide 24/7 hours support for all customers. You can buy it without hesitation.",
    img: support,
  },
  {
    _id: "7",
    title: "Fast Loading Speed",
    description:
      "e-shopi is a very faster loading speed. Optimized for smaller build size, and faster dev compilation.",
    img: speedometer,
  },
  {
    _id: "8",
    title: "Modern Design",
    description:
      "e-shopi is a modern template for eCommerce Sites, supermarkets, and online stores, etc...",
    img: webDesign,
  },
  {
    _id: "9",
    title: "Life Time Updates",
    description:
      "We work hard every day to perfect the products. Free lifetime updates in this template.",
    img: upgrade,
  },
];

const Features = () => {
  return (
    <div>
      <h2 className="text-[#031424] text-center pb-1 font-[600] font-[#031424] xl:text-[46px] md:text-[36px] text-[24px] sm:text-[28px] xl:leading-[69px]">
        We have Impressive <br /> Features{" "}
      </h2>
      <div className="xl:mt-[68px] md:mt-12 mt-8">
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-[38px] xl:gap-x-[30px] gap-x-5 gap-y-6 xl:max-w-full sm:max-w-[720px] lg:max-w-[1090px]">
          {featuresItems.map((item) => (
            <FeatureCard key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
