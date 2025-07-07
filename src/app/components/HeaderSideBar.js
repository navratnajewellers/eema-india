"use client";

import Hamburger from "hamburger-react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Drawer, useMediaQuery } from "rsuite";

// for mobile drop down
const originalDropDownList = {
  about: false,
  member: false,
  eemagine: false,
  news: false,
};

export default function HeaderSideBar() {
  const [isTablet] = useMediaQuery("(max-width: 1111px)");

  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdowns, setOpenDropdowns] = useState(originalDropDownList);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const SpecialTextEffect = ({ text = "text", link = "#" }) => {
    return (
      <a
        href={link}
        className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
      >
        <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
          {text}
        </span>
        <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
      </a>
    );
  };

  const SpecialButtonEffect = ({ text = "text", toggleText = "" }) => {
    return (
      <button
        className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
        onClick={() => toggleDropdown(`${toggleText}`)}
      >
        <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
          {text}
        </span>
        <ArrowDown className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
      </button>
    );
  };

  return (
    <>
      <div className=" fixed right-11 md:right-20 top-8 md:top-16 z-50 bg-gray-50 rounded-2xl ">
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          size={24}
          duration={0.5}
          color="#000"
        />
      </div>

      <Drawer
        size="350px"
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false);
          setOpenDropdowns(originalDropDownList);
        }}
      >
        <Drawer.Body>
          <nav>
            <Link
              href="/"
              className=" block text-2xl font-bold leading-relaxed text-orange-600 text-center "
            >
              EEMA India
            </Link>
            <ul className=" flex flex-col mt-7 ">
              <li className=" relative group py-2 ">
                <SpecialButtonEffect text="About Us" toggleText="about" />
                <ul
                  className={` absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 transform -translate-y-2 transition-all duration-200 z-50 invisible ${openDropdowns.about && isTablet ? "visible opacity-100 translate-y-0" : " group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible "} `}
                >
                  <li>
                    <a
                      href="/about"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      About EEMA
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/#national-leadership-team"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      National Leadership Team
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="Gallery" link="#" />
              </li>
              <li className=" relative group py-2 ">
                <SpecialButtonEffect text="Members" toggleText="member" />
                <ul
                  className={` absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 transform -translate-y-2 transition-all duration-200 z-50 invisible ${openDropdowns.member && isTablet ? "visible opacity-100 translate-y-0" : " group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible "} `}
                >
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      Member Lists
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      New member
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      MOM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      Artiste Committee
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" relative group py-2 ">
                <SpecialButtonEffect text="News" toggleText="news" />
                <ul
                  className={` absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 transform -translate-y-2 transition-all duration-200 z-50 invisible ${openDropdowns.news && isTablet ? "visible opacity-100 translate-y-0" : " group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible "} `}
                >
                  <li>
                    <a
                      href="/press-coverage-eema/"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      Press Coverage
                    </a>
                  </li>
                  <li>
                    <a
                      href="/press-coverage-eema/#eema-initiatives"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      EEMA Initiative
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="Newsletter" link="/newsletter" />
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect
                  text="Regional Initiative"
                  link="/eema-regional-initiatives"
                />
              </li>
              <li className=" relative group py-2 ">
                <SpecialButtonEffect text="EEMAGINE" toggleText="eemagine" />
                <ul
                  className={` absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 transform -translate-y-2 transition-all duration-200 z-50 invisible ${openDropdowns.eemagine && isTablet ? "visible opacity-100 translate-y-0" : " group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible "} `}
                >
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      Eemagine 2025
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" block px-4 py-2 hover:bg-gray-100 text-gray-800 hover:text-orange-600 hover:font-semibold transition-all "
                    >
                      Eemagine 2024
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="EEMAX Global" link="/eemaxglobal" />
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="SpotLight Awards" link="#" />
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="Career" link="/career" />
              </li>
              <li className=" py-2 ">
                <SpecialTextEffect text="Contact Us" link="/contact" />
              </li>
            </ul>
          </nav>
        </Drawer.Body>
      </Drawer>
    </>
  );
}
