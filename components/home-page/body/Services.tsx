import Image from "next/image";

import facial from "@/public/images/services/facial-mask.png";
import hair from "@/public/images/services/hair.png";
import nail from "@/public/images/services/nail-polish.png";
import eyebrow from "@/public/images/services/eyebrow.png";
import eyelashes from "@/public/images/services/eyelash.png";

const data = [
  {
    id: 1,
    img: facial,
    text: "فیشیال",
  },
  {
    id: 2,
    img: hair,
    text: "مو",
  },
  {
    id: 3,
    img: nail,
    text: "ناخن",
  },
  {
    id: 4,
    img: eyebrow,
    text: "ابرو",
  },
  {
    id: 5,
    img: eyelashes,
    text: "مژه",
  },
];

function Services() {
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-y-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-y-0">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`
            flex flex-col items-center gap-y-3
            ${index === data.length - 1 ? "col-span-2 lg:col-span-1" : ""}
          `}
        >
          <div className="flex size-24 items-center justify-center rounded-full bg-[#FFF5F2] sm:size-28">
            <Image
              src={item.img}
              alt={item.text}
              className="size-20 object-contain sm:size-24"
            />
          </div>

          <span className="font-medium text-[#2F2020] sm:text-lg">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Services;
