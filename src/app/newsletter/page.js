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
      link: "/documents/published-newsletters/newsletters-2022/1-newsletter-sept-2022.pdf",
      image: "/images/published-newsletter/newsletter-2022/sep-2022.jpg",
      date: "Sept 2022",
      year: 2022,
    },
    {
      link: "/documents/published-newsletters/newsletters-2022/2-newsletter-oct-2022.pdf",
      image: "/images/published-newsletter/newsletter-2022/oct-2022.jpg",
      date: "Oct 2022",
      year: 2022,
    },
    {
      link: "/documents/published-newsletters/newsletters-2022/3-newsletter-nov-2022.pdf",
      image: "/images/published-newsletter/newsletter-2022/nov-2022.jpg",
      date: "Nov 2022",
      year: 2022,
    },
    {
      link: "/documents/published-newsletters/newsletters-2023/1-newsletter-jan-2023.pdf",
      image:
        "/images/published-newsletter/newsletter-2023/newsletter-jan-2023.jpg",
      date: "Jan 2023",
      year: 2023,
    },
    {
      link: "/documents/published-newsletters/newsletters-2023/2-newsletter-apr-2023.pdf",
      image:
        "/images/published-newsletter/newsletter-2023/newsletter-april-2023.jpg",
      date: "April 2023",
      year: 2023,
    },
    {
      link: "/documents/published-newsletters/newsletters-2023/3-newsletter-jun-2023.pdf",
      image:
        "/images/published-newsletter/newsletter-2023/newsletter-june-2023.jpg",
      date: "June 2023",
      year: 2023,
    },
    {
      link: "/documents/published-newsletters/newsletters-2023/4-newsletter-oct-2023.pdf",
      image:
        "/images/published-newsletter/newsletter-2023/newsletter-oct-2023.png",
      date: "Oct 2023",
      year: 2023,
    },
    {
      link: "/documents/published-newsletters/newsletters-2023/5-newsletter-dec-2023.pdf",
      image:
        "/images/published-newsletter/newsletter-2023/newsletter-dec-2023.png",
      date: "Dec 2023",
      year: 2023,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/1-newsletter-feb-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-feb-2024.png",
      date: "Feb 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/2-newsletter-apr-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-apr-2024.png",
      date: "April 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/3-newsletter-june-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-june-2024.png",
      date: "June 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/4-newsletter-oct-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-oct-2024.png",
      date: "Oct 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/5-newsletter-nov-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-november_2024.png",
      date: "Nov 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2024/6-newsletter-dec-2024.pdf",
      image:
        "/images/published-newsletter/newsletter-2024/newsletter-dec_2024.png",
      date: "Dec 2024",
      year: 2024,
    },
    {
      link: "/documents/published-newsletters/newsletters-2025/jan-2025-newsletter.pdf",
      image:
        "/images/published-newsletter/newsletter-2025/newsletter-january_2025.png",
      date: "Jan 2025",
      year: 2025,
    },
    {
      link: "/documents/published-newsletters/newsletters-2025/feb-2025-newsletter.pdf",
      image:
        "/images/published-newsletter/newsletter-2025/newsletter-february_2025.png",
      date: "Feb 2025",
      year: 2025,
    },
    {
      link: "/documents/published-newsletters/newsletters-2025/march-newsletter.pdf",
      image:
        "/images/published-newsletter/newsletter-2025/newsletter-march_2025.png",
      date: "March 2025",
      year: 2025,
    },
    {
      link: "/documents/published-newsletters/newsletters-2025/april-2025_newsletter.pdf",
      image:
        "/images/published-newsletter/newsletter-2025/newsletter-april_2025.png",
      date: "April 2025",
      year: 2025,
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
