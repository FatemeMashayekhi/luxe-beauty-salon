"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import facial from "@/public/images/samples/facial.jpg";
import hair from "@/public/images/samples/hair.jpg";
import nail from "@/public/images/samples/nail.jpg";
import eyebrow from "@/public/images/samples/eyebrow.png";
import eyelashes from "@/public/images/samples/eyelashes.jpg";
import { useEffect, useState } from "react";

const data = [
  {
    img: facial,
    id: 1,
    text: "فیشیال",
  },
  {
    img: hair,
    id: 2,
    text: "مو",
  },
  {
    img: nail,
    id: 3,
    text: "ناخون",
  },
  {
    img: eyebrow,
    id: 4,
    text: "ابرو",
  },
  {
    img: eyelashes,
    id: 5,
    text: "مژه",
  },
];

export default function Samples() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    variableWidth: false,
  };

  return (
    <div className="slider-container min-w-0 w-full overflow-hidden">
      <Slider key={slidesToShow} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2 py-1">
            <div className="rounded-2xl bg-[#FFF8F5] shadow">
              <div className="relative min-h-40 w-full lg:min-h-60">
                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
