import React from "react";
import notFound from "../../assets/404.png";
import shop1 from "../../assets/Shop-1.png";
import shop2 from "../../assets/Shop-2.png";
import shop3 from "../../assets/Shop-3.png";
import shop4 from "../../assets/Shop-4.png";
import about from "../../assets/about.png";
import billing from "../../assets/billing.png";
import contact from "../../assets/contact.png";
import blogs1 from "../../assets/blogs.png";
import blogs2 from "../../assets/blogs-2.png";
import blogDetails from "../../assets/blogs-details.png";
import cart from "../../assets/cart.png";
import compare from "../../assets/compare.png";
import dashboard from "../../assets/dashboard.png";
import faq from "../../assets/faq.png";
import comingSoon from "../../assets/comingSoon.png";
import wishlist from "../../assets/wishlist.png";
import details from "../../assets/product-details.png";
import InnerPage from "./InnerPage";

type InnerPageItems = {
  _id: string;
  img: any;
  name: string;
  link: string;
};

const baseUrl: string = "https://e-shop-commerce.vercel.app";

const innerPageItems: InnerPageItems[] = [
  { _id: "1", link: `${baseUrl}/shop/1`, img: shop1, name: "Shop Default" },
  { _id: "2", link: `${baseUrl}/shop/2`, img: shop2, name: "Shop Right sidebar" },
  { _id: "3", link: `${baseUrl}/shop/4`, img: shop3, name: "Horizontal Shop" },
  { _id: "4", link: `${baseUrl}/shop/3`, img: shop4, name: "Shop Wide" },
  { _id: "5", link: `${baseUrl}/shop/product-details/9`, img: details, name: "Product Details" },
  { _id: "6", link: `${baseUrl}/cart`, img: cart, name: "Cart Page" },
  { _id: "7", link: `${baseUrl}/wishlist`, img: wishlist, name: "Wishlist Page" },
  { _id: "8", link: `${baseUrl}/blogs/blogs1`, img: blogs1, name: "Blogs page 01" },
  { _id: "9", link: `${baseUrl}/blogs/blogs2`, img: blogs2, name: "Blog page 02" },
  { _id: "10", link: `${baseUrl}/blogs/1`, img: blogDetails, name: "Blog details" },
  { _id: "11", link: `${baseUrl}/contact`, img: contact, name: "Contact Page" },
  { _id: "12", link: `${baseUrl}/checkout`, img: billing, name: "Checkout Page" },
  { _id: "13", link: `${baseUrl}/about`, img: about, name: "About Us page" },
  { _id: "14", link: `${baseUrl}/faq`, img: faq, name: "FAQ page" },
  { _id: "15", link: `${baseUrl}/compare`, img: compare, name: "Compare page" },
  { _id: "16", link: `${baseUrl}/dashboard/userDashboard`, img: dashboard, name: "Dashboard Page" },
  { _id: "16", link: `${baseUrl}/404`, img: notFound, name: "404 page" },
  { _id: "16", link: `${baseUrl}/`, img: comingSoon, name: "Coming Soon" },
];

const InnerPages = () => {
  return (
    <div>
      <h2 className="text-[#031424] text-center pb-1 font-[600] font-[#031424] xl:text-[46px] md:text-[36px] text-[24px] sm:text-[28px] xl:leading-[69px]">
        E-Shop inner Pages
      </h2>
      <p className="text-[#666666] text-center xl:text-[24px] text-[16px] sm:text-lg md:text-xl xl:leading-[36px]">
        20+ e-commerce inner Pages
      </p>
      <div className="xl:mt-[68px] md:mt-12 mt-8">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-5 xl:gap-x-[30px]">
          {innerPageItems.map((item) => (
            <InnerPage key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerPages;
