import Image from "next/image";
import facial from "@/public/images/services/facial-mask.png";
import hair from "@/public/images/services/hair.png";
import nail from "@/public/images/services/nail-polish.png";
import eyebrow from "@/public/images/services/eyebrow.png";
import eyelashes from "@/public/images/services/eyelash.png";

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

function Services() {
  return (
    <div className="grid grid-cols-2 gap-6 p-1 lg:px-6 lg:py-2 xl:w-[70%]">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`bg-[#FFF8F5] rounded-2xl shadow ${
            index === data.length - 1
              ? "col-span-2 justify-self-center w-[calc(50%-12px)]"
              : ""
          }`}
        >
          <div className="flex justify-center items-center p-3">
            <Image src={item.img} alt={item.text} className="size-20" />
          </div>
          <h3 className="pb-4 font-semibold">{item.text}</h3>
        </div>
      ))}
    </div>
  );
}

export default Services;
