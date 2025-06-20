"use client";

import Image from "next/image";
import Slider from "react-slick";
import WHeader from "../components/WHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CareerPage() {
  const headerNavItems = [
    {
      text: "Career",
      link: "#career",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const slides = [
    {
      image:
        "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/2%202.png.webp?itok=OTLs73iv",
      title: "LifeLong Learning",
      description:
        "Nasscom encourages and supports ongoing personal and professional development, recognizing that learning is a lifelong journey essential for growth and innovation in the rapidly evolving tech landscape.",
    },
    {
      image:
        "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Effective%20Collaboration.png.webp?itok=dfCNRY8E",
      title: "Trustworthiness",
      description:
        "Nasscom maintains an unyielding commitment to trustworthiness and integrity in all its interactions and endeavors, ensuring reliability and confidence in the tech industry.",
    },
    {
      image:
        "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Continuous%20Learning.png.webp?itok=J64T31Sm",
      title: "Collaborative Spirit",
      description:
        "Nasscom promotes and cultivates a culture of seamless and efficient teamwork, harnessing the collective expertise and diverse perspectives of its members and partners to achieve common goals and objectives.",
    },
    {
      image:
        "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Championing%20Inclusion.png.webp?itok=hulbt7bO",
      title: "Impactful Delivery",
      description:
        "Nasscom is dedicated to achieving the greatest positive effect and influence through its actions, projects, and initiatives, driving significant progress in the technology sector.",
    },
  ];

  return (
    <>
      <WHeader headerNavItems={headerNavItems} />

      <section
        id="career"
        className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
      >
        <div>
          <h2 className=" leading-relaxed text-6xl font-bold text-orange-600 ">
            Career
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 ">
          <section className=" col-span-9 text-black ">
            <h4 className=" tracking-tight text-3xl font-bold text-orange-500 mb-7 ">
              Shape your career, unlock your full potential, and make a
              meaningful impact.
            </h4>

            <p className=" leading-relaxed font-medium mb-4 ">
              A WORLD OF INNOVATION, EXPERIENCES AND INCLUSIVITY! OPENING THE
              DOORS TO EEMA&apos;s 800+ MEMBERS PAN INDIA
            </p>

            <p className=" leading-relaxed font-medium mb-4 ">
              EEMA, the only apex national body, seeks to bring together the
              country’s leading Event Management, Sports Management and Brand
              Activation companies, MICE and Wedding Planners, Experiential
              Marketers, Entertainment Professionals, Artist Management
              companies and international counterparts on the same platform.
              EEMA&apos;s members include all significant organised players
              across the length and breadth of the country. It is estimated that
              close to 80% of the organized revenue in this space is represented
              through the EEMA members.
            </p>
            <p className=" leading-relaxed font-medium mb-4 ">
              If you are an enthusiastic, creative, and eager candidate to join
              the experiential industry & passionate about event planning and
              creating unique brand experiences, this is your chance to learn
              and grow in an exciting field!
            </p>
          </section>
          <section className=" col-span-3 relative pt-[66%] ">
            <div className=" flex justify-center items-center sticky top-2/4 z-10 ">
              <a className=" inline-block border-2 py-3 px-9 rounded-4xl bg-orange-600 text-white leading-relaxed font-semibold cursor-pointer ">
                WORK WITH US
              </a>
            </div>
          </section>
        </div>
      </section>

      <div className=" py-11 ">
        <section className=" flex justify-center items-center border-2 -mb-32 ">
          <div className=" relative w-[80%] h-[500px] ">
            <Image
              src="https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/Landing_page_banner/career.jpg.webp?itok=K1J_zqnu"
              alt="career page"
              fill
              className=" object-cover "
            />
          </div>
        </section>

        <section className=" py-11 text-white bg-orange-600 ">
          <div className=" mt-32 w-[80%] m-auto ">
            <h2 className=" leading-relaxed font-bold text-4xl mb-16 mt-4 ">
              EEMA Values
            </h2>

            <div className="w-full">
              <Slider
                {...settings}
                className="[&_.slick-slide]:px-4 [&_.slick-list]:-mx-4"
              >
                {slides.map((data, index) => (
                  <div key={index} className=" border-2 ">
                    <div className="w-full h-[200px] relative rounded-xl overflow-hidden shadow-md ">
                      <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className=" py-7 ">
                      <h2 className=" tracking-tight font-bold mb-4 text-3xl ">
                        {data.title}
                      </h2>
                      <p className=" leading-relaxed font-medium text-gray-100 ">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
