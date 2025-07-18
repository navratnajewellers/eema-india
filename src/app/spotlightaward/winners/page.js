"use client";

import { motion } from "framer-motion";
import { Divider, Nav } from "rsuite";
import { useState } from "react";

export default function SpotlightWinnersPage() {
  const [active, setActive] = useState("home");

  const navlist = ["2025", "2024"];

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-12 ">
        <section className=" col-span-2 hidden md:block relative bg-black text-white py-28 ">
          <div className=" sticky top-52 z-10 ">
            <h2 className=" font-semibold text-xl text-center tracking-tight text-orange-600 mb-7 ">
              Winner List
            </h2>
            <Nav
              appearance="subtle"
              vertical
              activeKey={active}
              onSelect={setActive}
              className=" w-28 mx-auto "
            >
              {navlist.map((data, index) => (
                <Nav.Item
                  key={index}
                  eventKey={`${data}`}
                  as="a"
                  href={`#${data}`}
                >
                  <span
                    className={` ${active == data ? "text-white font-semibold " : "text-gray-300"} hover:text-white `}
                  >
                    {data}
                  </span>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </section>

        <section className=" relative col-span-10 border-l-2 border-gray-200 ">
          <div className=" block md:hidden sticky top-0 z-40 bg-gray-50 [&_.rs-nav-pills]:!w-full [&_.rs-nav-pills]:!flex-wrap [&_.rs-nav-pills]:justify-center [&_.rs-nav-pills]:items-center ">
            <div className=" h-28 block md:hidden "></div>
            <Nav appearance="pills" activeKey={active} onSelect={setActive}>
              {navlist.map((data, idx) => (
                <Nav.Item
                  key={idx}
                  eventKey={`${data}`}
                  as="a"
                  href={`#${data}`}
                >
                  Winner {data}
                </Nav.Item>
              ))}
            </Nav>
          </div>

          <motion.div id="2025" onViewportEnter={() => setActive("2025")}>
            <div className=" w-full h-screen flex flex-col justify-center items-center  ">
              <h2 className=" tracking-tight font-bold text-3xl md:text-4xl text-center mb-11 ">
                Winner 2023/2024
              </h2>
              <h4 className=" text-2xl md:text-3xl leading-relaxed font-semibold text-gray-400 ">
                Comming Soon...
              </h4>
            </div>
          </motion.div>

          <Divider />

          <motion.div id="2024" onViewportEnter={() => setActive("2024")}>
            <div className=" w-full h-screen flex flex-col justify-center items-center  ">
              <h2 className=" tracking-tight font-bold text-3xl md:text-4xl text-center mb-11 ">
                Winner 2023/2024
              </h2>
              <h4 className=" text-2xl md:text-3xl leading-relaxed font-semibold text-gray-400 ">
                Comming Soon...
              </h4>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
