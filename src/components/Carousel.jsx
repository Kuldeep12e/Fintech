import { useState, useEffect } from "react";
import { discount , robot , accept, transfer  } from "../assets";

import styles from "../style";
import GetStarted from "./GetStarted";

function Carousel() {
  const slides = [
    {
      title1: "The Next",
      title2: "Generation",
      title3: "Payment Method.",
      desc: "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.",
      img: robot,
    },
    {
      title1: "Manage",
      title2: "Finances",
      title3: "Effortlessly.",
      desc: "Track spending, set budgets, and reach your financial goals with smart automation.",
      img: accept,
    },
   
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // auto slide every 4 sec
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <>
      
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-white via-blue-50 to-cyan-100 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-dimgrey`}>
            <span className="text-dimgrey">20%</span> Discount For{" "}
            <span className="text-secondary">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full transition-all duration-500">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-dimgrey ss:leading-[100.8px] leading-[75px]">
            {slide.title1} <br className="sm:block hidden" />{" "}
            <span className="text-secondary">{slide.title2}</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dimgrey ss:leading-[100.8px] leading-[75px] w-full">
          {slide.title3}
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {slide.desc}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative transition-all duration-500`}>
        <img src={slide.img} alt="hero" className="w-[100%] h-[100%] z-[5]" />

        <div className="absolute z-[0] w-[0%] h-[85%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[70%] h-[70%] right-20 bottom-20 blue__gradient" />
      </div>
    </>
  );
}

export default Carousel;
