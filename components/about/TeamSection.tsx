import Image from "next/image";

const team = [
  {
    name: "سارا احمدی",
    role: "مدیریت و متخصص زیبایی",
    image: "/images/about/manager.jpg",
  },
  {
    name: "مریم رضایی",
    role: "متخصص مو",
    image: "/images/about/hair.jpg",
  },
  {
    name: "نگار کریمی",
    role: "متخصص ناخن",
    image: "/images/about/nail.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-[#EF617D]">تیم ما</span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            پشت هر تجربه خوب، یک تیم حرفه‌ای است
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base">
            تیم سالن لوکس از افرادی تشکیل شده که تخصصشان را با دقت، خلاقیت و
            توجه به خواسته‌های شما ترکیب می‌کنند.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white"
            >
              <div className="overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-neutral-900">{member.name}</h3>

                <p className="mt-1 text-sm text-neutral-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
