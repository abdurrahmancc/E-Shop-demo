import AwesomeHome from "@/components/awesomeHome/AwesomeHome";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/Header/Banner";
import Header from "@/components/Header/Header";
import InnerPages from "@/components/InnerPages/InnerPages";
import ScrollUpBtn from "@/components/ScrollUpBtn";
import SEO from "@/components/SEO/SEO";
import bg from "../assets/header.png";

export default function DemoPage() {
  return (
    <>
      <SEO pageTitle="Demo" />
      <header
        style={{ backgroundImage: `url(${bg.src})` }}
        className="2xl:h-[914px] xl:h-[800px] md:h-[600px] h-[450px] lg:h-[700px] w-full bg-no-repeat  lg:bg-center bg-cover"
      >
        <Header />
        <Banner />
      </header>
      <main>
        <section className="max-w-[1443px] my-20 lg:my-[130px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
          <AwesomeHome />
        </section>
        <section className="bg-[#F2F4F8] py-[130px]">
          <Features />
        </section>
        <section className="max-w-[1443px] my-[130px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
          <InnerPages />
        </section>
        <ScrollUpBtn />
      </main>
      <footer className="mt-20 lg:mt-[120px]">
        <Footer />
      </footer>
    </>
  );
}
