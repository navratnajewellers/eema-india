// app/components/NavSection.tsx or your components folder
import { MoveDown } from "lucide-react";
import AnimatedSquare2 from "./AnimatedSquare2";

const navItems = [
  {
    text: "About Us",
    link: "#about",
  },
  {
    text: "Members",
    link: "#members",
  },
  {
    text: "Eemagine 2024",
    link: "/eemagine-2024",
  },
  {
    text: "EEMAX Global",
    link: "/eemax-global",
  },
  {
    text: "Careers",
    link: "/careers",
  },
];

export default function NavSection() {
  return (
    <section className=" bg-gray-50 h-[75vh] md:h-full ">
      <div className=" grid sm:grid-cols-3 gap-4 px-11 ">
        <div className="flex flex-col gap-4 p-2 max-w-xl xl:ml-12 md:col-span-2">
          {navItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className=" h-nav-link-container group relative h-9 flex items-center justify-between px-4 py-3 cursor-pointer text-black text-2xl sm:text-4xl font-extrabold transition-all duration-300 hover:text-white"
            >
              <span className="transition-all duration-300 group-hover:text-5xl ">
                {item.text}
              </span>
              <MoveDown className="w-5 h-5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
            </a>
          ))}
        </div>

        <div className="  mx-2 md:col-span-1">
          <h2 className=" tracking-tight text-black text-2xl font-bold mb-4 mt-11 sm:mt-0 ">
            EEMA India
          </h2>
          <p className=" leading-relaxed text-lg text-gray-500 font-semibold ">
            EEMA is an autonomous, non-profit body of registered companies,
            institutions, and professionals operating within India’s Events and
            Experiential Marketing industry.
          </p>
        </div>
      </div>

      <div className=" absolute right-1/12 bottom-[40%] sm:bottom-1/3 xl:bottom-[40%] xl:z-[2] ">
        <AnimatedSquare2 />
      </div>

      <div className=" relative md:absolute xl:relative bottom-0 left-0 w-full bg-gray-50 mt-8 overflow-hidden ">
        <div className=" flex justify-center items-center p-0  ">
          <h1 className=" text-[100px] sm:text-[160px] md:text-[240px] xl:text-[250px] text-orange-600 font-extrabold  ">
            EEMA®
          </h1>
        </div>
      </div>
    </section>
  );
}
