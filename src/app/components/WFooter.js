"use client";

import { ArrowUpRight } from "lucide-react";

const WFooter = () => {
  const sec1Data = [
    {
      title: "info@eemaindia.com",
      link: "mailto:info@eemaindia.com",
    },
    {
      title: "+91(11)29211029/30",
      link: "tel:+91(11)29211029",
    },
  ];

  const sec2Data = [
    {
      title: "Regional Initiative",
      link: "#",
    },
    {
      title: "About Us",
      link: "#about",
    },
    {
      title: "Privacy",
      link: "#",
    },
    {
      title: "Careers",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
    {
      title: "EEMAX GLOBAL",
      link: "#",
    },
    {
      title: "Events",
      link: "#",
    },
    {
      title: "News",
      link: "#news",
    },
  ];

  const sec3Data = [
    {
      title: "EEMA Board Resolution For Representative For EEMA 2024 Form",
      link: "https://eemaindia.com/files/docs/EEMA-Board-Resolution-FOR-REPRESENTATIVE-FOR-EEMA-2024-Form.doc",
    },
    {
      title: "Annexure 1 – Nomination form for EEMA elections 2024-26",
      link: "https://eemaindia.com/files/docs/Annexure-1%E2%80%93NOMINATION-FORM-For-EEMA-ELECTIONS-2024-26.docx",
    },
    {
      title: "KRA for Zonal Joint Secretary",
      link: "https://eemaindia.com/files/docs/KRA-for-Zonal-Joint-Secretary.docx",
    },
    {
      title: "KRA For Zonal Committee Members",
      link: "https://eemaindia.com/files/docs/KRA-for-zonal-committee-members.docx",
    },
    {
      title: "EEMA Amended Constitution",
      link: "https://eemaindia.com/files/docs/NEW_EEMA_Constitution_FINAL_AMENDED_COPY_August_2023_24_.pdf",
    },
    {
      title: "EEMA Election Schedule 2024",
      link: "https://eemaindia.com/files/docs/EEMA_Election_Schedule_2024_VP_.pdf",
    },
    {
      title: "EEMA Election Process Manual 2024",
      link: "https://eemaindia.com/files/docs/EEMA_Election_Process_Manual_2024_VP_.pdf",
    },
    {
      title: "EEMA AUDIT REPORT & BALANCE SHEET FY 2023-24 (AY 2024-25)",
      link: "https://eemaindia.com/files/docs/EEMA_AUDIT_REPORT_&_BALANCE_SHEET_FY_2023_24_AY_2024-25_4.pdf",
    },
    {
      title: "EEMA Spotlight Awards - South Winners List 2024",
      link: "https://eemaindia.com/spotlightaward/winners-2024.php",
    },
  ];

  const sec4Data = [
    {
      title: "FACEBOOK",
      link: "https://www.facebook.com/eemaindia/",
    },
    {
      title: "LINKEDIN",
      link: "https://in.linkedin.com/company/event-entertainment-management-association",
    },
    {
      title: "INSTAGRAM",
      link: "https://www.instagram.com/eema.india/",
    },
    {
      title: "TWITTER",
      link: "https://twitter.com/eemaindia?lang=en",
    },
    {
      title: "YOUTUBE",
      link: "https://www.youtube.com/@theeemaindia",
    },
  ];

  return (
    <>
      <div className=" h-[140vh] md:h-screen w-0.5 "></div>

      <section className=" fixed top-0 left-0 z-[1] h-full w-full pl-6 pr-6 pt-9 overflow-scroll xl:overflow-hidden no-scrollbar ">
        <div className="  bg-black text-white w-full rounded-t-4xl py-4 px-11 ">
          <div className=" grid grid-cols-1 xl:grid-cols-12 mt-24 gap-20 xl:gap-0.5 ">
            <div className=" tracking-tight flex flex-col gap-7 md:col-span-4 ">
              <h4 className=" text-lg ">(LET&apos;S CONNECT)</h4>
              <h2 className=" text-3xl ">
                E-330, Ground Floor, Greater Kailash Part – 2, New Delhi. 110048
                INDIA
              </h2>

              {sec1Data.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  className=" h-nav-link-container group relative h-7 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-white text-2xl font-extrabold transition-all duration-300 hover:text-black "
                >
                  <span className="transition-all duration-300 group-hover:text-3xl ">
                    {data.title}
                  </span>
                  <ArrowUpRight className="w-5 h-5 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black font-bold " />
                </a>
              ))}
            </div>

            <div className=" flex flex-col gap-2 md:col-span-2 pl-2.5 ">
              <h4 className=" mb-5 tracking-tight ">Company</h4>

              {sec2Data.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-white text-sm font-semibold transition-all duration-300 hover:text-black "
                >
                  <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
                    {data.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
                </a>
              ))}
            </div>

            <div className=" flex flex-col gap-2 md:col-span-4 ">
              <h4 className="mb-5 tracking-tight">Documents</h4>

              {sec3Data.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  className=" h-nav-link-container group relative h-1.5 hover:h-fit w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-white text-sm font-semibold transition-all duration-300 hover:text-black "
                >
                  <span className="transition-all duration-300 group-hover:opacity-0 group-hover:hidden text-nowrap ">
                    {data.title.length > 40
                      ? `${data.title.slice(0, 40)}...`
                      : data.title}
                  </span>
                  <span className="transition-all duration-300 opacity-0 group-hover:text-[16px] group-hover:opacity-100">
                    {data.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
                </a>
              ))}
            </div>

            <div className=" flex flex-col gap-2 md:col-span-2 pl-4 ">
              <h4 className="mb-5 tracking-tight">(FOLLOW US)</h4>

              {sec4Data.map((data, index) => (
                <a
                  key={index}
                  href={data.link}
                  className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-white text-sm font-semibold transition-all duration-300 hover:text-black "
                >
                  <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
                    {data.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
                </a>
              ))}
            </div>
          </div>

          <div className=" flex flex-col items-end md:justify-end md:flex-row md:items-center py-4 mt-9 md:mt-1 ">
            <section>
              <span>&copy; </span>
              <span>{new Date().getFullYear()} BY </span>
              <span className=" text-orange-600 font-bold tracking-tight ">
                EEMA INDIA
              </span>
            </section>

            <section className=" ml-4 ">
              <span>
                MADE BY
                <a
                  href="#"
                  className=" text-orange-600 font-bold tracking-tight ml-1 "
                >
                  SAHATYA
                </a>
              </span>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default WFooter;
