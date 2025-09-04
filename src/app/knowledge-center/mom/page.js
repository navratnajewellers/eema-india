import { Eye } from "lucide-react";
import Image from "next/image";

export default function MomNecPage() {
  const newsLetterYears = [
    {
      year: 2022,
    },
    {
      year: 2023,
    },
    {
      year: 2024,
    },
    {
      year: 2025,
    },
  ];

  const newsLetterDocument = [
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/1st_NEC_Meeting_17th_September_2022_Final.pdf",
      link: "/documents/knowledge-center/mom/1st_NEC_Meeting_17th_September_2022_Final.pdf",
      description: "National Executive Council Meeting",
      date: "17th September, 2022",
      year: 2022,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/2nd_NEC_MoM_OCT22-2.pdf",
      link: "/documents/knowledge-center/mom/2nd_NEC_MoM_OCT22-2.pdf",
      description: "National Executive Council Meeting",
      date: "8th October, 2022",
      year: 2022,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/SGBM_18_Oct_2022_MoM_-_signed.pdf",
      link: "/documents/knowledge-center/mom/SGBM_18_Oct_2022_MoM_-_signed.pdf",
      description: "Special General Body Meeting",
      date: "18th October, 2022",
      year: 2022,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/3rd_NEC_Meeting_9th%20November_2022_signed.pdf",
      link: "/documents/knowledge-center/mom/3rd_NEC_Meeting_9th November_2022_signed.pdf",
      description: "National Executive Council Meeting",
      date: "9th November, 2022",
      year: 2022,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/4th_NEC_Meeting_24th_Dec_2022.pdf",
      link: "/documents/knowledge-center/mom/4th_NEC_Meeting_24th_Dec_2022.pdf",
      description: "National Executive Council Meeting",
      date: "24th December, 2022",
      year: 2022,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/5th_NEC_Meeting_24th_Jan_2023_signed.pdf",
      link: "/documents/knowledge-center/mom/5th_NEC_Meeting_24th_Jan_2023_signed.pdf",
      description: "National Executive Council Meeting",
      date: "24th January, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/6th-NEC_on_17Mar2023_Final%20MOM_1_.pdf",
      link: "/documents/knowledge-center/mom/6th-NEC_on_17Mar2023_Final MOM_1_.pdf",
      description: "National Executive Council Meeting",
      date: "17th March, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/7th_NEC_on_19Apr2023_FinalMOM_1_.pdf",
      link: "/documents/knowledge-center/mom/7th_NEC_on_19Apr2023_FinalMOM_1_.pdf",
      description: "National Executive Council Meeting",
      date: "19th April, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/AGM_MoM_EEMA%20_2023.pdf",
      link: "/documents/knowledge-center/mom/AGM_MoM_EEMA _2023.pdf",
      description: "Annual General Meeting, EEMA",
      date: "9th August, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/NEW_EEMA_Constitution_FINAL_AMENDED_COPY_August_2023_24_.pdf",
      link: "/documents/knowledge-center/mom/NEW_EEMA_Constitution_FINAL_AMENDED_COPY_August_2023_24_.pdf",
      description: "New EEMA Constitution",
      date: "15th August, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20230929_29_Sept_2023.pdf",
      link: "/documents/knowledge-center/mom/20230929_29_Sept_2023.pdf",
      description: "National Executive Council Meeting",
      date: "29th September, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20231124__24_Nov_2023.pdf",
      link: "/documents/knowledge-center/mom/20231124__24_Nov_2023.pdf",
      description: "National Executive Council Meeting",
      date: "24th November, 2023",
      year: 2023,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20240102_2_January_2024.pdf",
      link: "/documents/knowledge-center/mom/20240102_2_January_2024.pdf",
      description: "National Executive Council Meeting",
      date: "2nd January, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20240201_1st_February_2024.pdf",
      link: "/documents/knowledge-center/mom/20240201_1st_February_2024.pdf",
      description: "COREA.2O Event Details",
      date: "1st February, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20240412__12th_April_2024.pdf",
      link: "/documents/knowledge-center/mom/20240412__12th_April_2024.pdf",
      description: "National Executive Council Meeting",
      date: "12th April, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20240518_Final_18th_May_2024.pdf",
      link: "/documents/knowledge-center/mom/20240518_Final_18th_May_2024.pdf",
      description: "National Executive Council Meeting",
      date: "18th May, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/agm_09082024.pdf",
      link: "/documents/knowledge-center/mom/agm_09082024.pdf",
      description: "AGM with National Executive Council Members",
      date: "9th August, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/20240518_Final_18th_May_2024.pdf",
      link: "/documents/knowledge-center/mom/20240518_Final_18th_May_2024.pdf",
      description: "National Executive Council Meeting",
      date: "18th May, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/agm_09082024.pdf",
      link: "/documents/knowledge-center/mom/agm_09082024.pdf",
      description: "AGM with National Executive Council Members",
      date: "9th August, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/necm_09092024.pdf",
      link: "/documents/knowledge-center/mom/necm_09092024.pdf",
      description: "National Executive Council Meeting",
      date: "6th September, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/2nd_nec_mtg_26092024.pdf",
      link: "/documents/knowledge-center/mom/2nd_nec_mtg_26092024.pdf",
      description: "National Executive Council Meeting",
      date: "26th September, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/3rd_nec_mtg_07102024.pdf",
      link: "/documents/knowledge-center/mom/3rd_nec_mtg_07102024.pdf",
      description: "National Executive Council Meeting",
      date: "7th October, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/4th_nec_mtg_29112024.pdf",
      link: "/documents/knowledge-center/mom/4th_nec_mtg_29112024.pdf",
      description: "National Executive Council Meeting",
      date: "29th November, 2024",
      year: 2024,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/5th-NEC-Mtg-28012025.pdf",
      link: "/documents/knowledge-center/mom/5th-NEC-Mtg-28012025.pdf",
      description: "National Executive Council Meeting",
      date: "28th January, 2025",
      year: 2025,
    },
    {
      // link: "https://eemaindia.com/theme/FrontThemeTemplate/pdf/6th-NEC-Mtg-MOM.pdf",
      link: "/documents/knowledge-center/mom/6th-NEC-Mtg-MOM.pdf",
      description: "National Executive Council Meeting",
      date: "20th March, 2025",
      year: 2025,
    },
  ];

  return (
    <>
      <section
        id="newsletter"
        className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
      >
        <h2 className=" text-black font-bold text-3xl md:text-4xl tracking-tight text-center my-20 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          MINUTES OF MEETING
        </h2>

        <h4 className=" text-black text-left sticky top-40 z-10 w-fit bg-gray-50 ">
          MOM
        </h4>

        <div>
          {newsLetterYears.reverse().map((yData, idx) => (
            <div key={idx} className=" relative py-11 px-4 ">
              <h4 className=" text-black font-extrabold leading-relaxed text-left sticky top-56 z-[8] ">
                ({yData.year})
              </h4>
              <div
                // key={idx}
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 pl-36 py-7 "
              >
                {newsLetterDocument.map((data, index) => {
                  if (yData.year != data.year) {
                    return;
                  }

                  if (yData.year == data.year) {
                    return (
                      <div
                        className=" rounded-2xl shadow-md overflow-hidden p-6 text-center bg-orange-50 "
                        key={index}
                      >
                        <div className=" mb-7 ">
                          <h4 className=" text-lg font-semibold text-black mb-2 ">
                            {data.description}
                          </h4>
                          <h6 className=" text-xs font-bold text-gray-500 ">
                            {data.date}
                          </h6>
                        </div>
                        <div className=" bg-orange-600 text-black hover:text-white hover:bg-orange-700 rounded-xl ">
                          <a
                            href={data.link}
                            target="_blank"
                            className=" block py-2 text-xl font-semibold leading-relaxed text-center "
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
