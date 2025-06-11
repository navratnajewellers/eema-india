import Image from "next/image";
import WHeader from "../components/WHeader";

export default function NewsletterPage() {
  const headerNavItems = [
    {
      text: "News Letter",
      link: "#newsletter",
    },
  ];

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
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2025",
      year: 2025,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2025",
      year: 2025,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2024",
      year: 2024,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2024",
      year: 2024,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2023",
      year: 2023,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2022",
      year: 2022,
    },
    {
      link: "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.pdf",
      image:
        "https://www.eemaindia.com/theme/FrontThemeTemplate/pdf/april_2025.png",
      date: "April 2022",
      year: 2022,
    },
  ];

  return (
    <>
      <WHeader headerNavItems={headerNavItems} />

      <section
        id="newsletter"
        className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
      >
        <h2 className=" text-black text-5xl tracking-tight text-center py-20 ">
          News Letter
        </h2>

        <h4 className=" text-black text-left sticky top-40 z-10 w-fit bg-gray-50 ">
          News Letter
        </h4>

        <div>
          {newsLetterYears.reverse().map((yData, idx) => (
            <div key={idx} className=" relative py-11 px-4 ">
              <h4 className=" text-black font-semibold leading-relaxed text-left sticky top-56 z-[8] ">
                {yData.year}
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
                      <a
                        href={data.link}
                        className=" block rounded-2xl overflow-hidden"
                        key={index}
                        target="_blank"
                      >
                        <div className=" relative h-72 w-full ">
                          <Image src={data.image} alt="20254" fill />
                        </div>
                        <div className=" bg-orange-600 text-white ">
                          <h4 className=" py-2 text-xl font-semibold leading-relaxed text-center ">
                            {data.date}
                          </h4>
                        </div>
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>

        {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 pl-36 ">
          {newsLetterDocument.map((data, index) => (
            <a
              href={data.link}
              className=" block rounded-2xl overflow-hidden"
              key={index}
              target="_blank"
            >
              <div className=" relative h-72 w-full ">
                <Image src={data.image} alt="20254" fill />
              </div>
              <div className=" bg-orange-600 text-white ">
                <h4 className=" py-2 text-xl font-semibold leading-relaxed text-center ">
                  {data.date}
                </h4>
              </div>
            </a>
          ))}
        </div> */}
      </section>
    </>
  );
}
