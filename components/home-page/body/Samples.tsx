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

function Samples() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,

    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2 py-1">
            <div className="bg-[#FFF8F5] rounded-2xl shadow">
              <div className="relative min-h-40 lg:min-h-60 w-full">
                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover rounded-2xl"
                />
              </div>
              {/* <h3 className="p-4">{item.text}</h3> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Samples;
