"use client";

import WHeader from "../components/WHeader";

export default function CareerPage() {
  const headerNavItems = [
    {
      text: "Career",
      link: "#career",
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
          <section className=" col-span-9 ">
            <h4 className=" leading-relaxed text-3xl font-bold text-orange-500 ">
              Shape your career, unlock your full potential, and make a
              meaningful impact.
            </h4>

            <p>
              A WORLD OF INNOVATION, EXPERIENCES AND INCLUSIVITY! OPENING THE
              DOORS TO EEMA&apos;s 800+ MEMBERS PAN INDIA
            </p>

            <p>
              Build a career in the Events & Experiential Industry that is
              pegged at ₹500000 crores and growing at an average rate of 20%
              year on year! A career in the events & experiential industry is
              for people who are dynamic, entrepreneurial, out of the box
              thinkers and for whom nothing is impossible!
            </p>
            <p>
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
            <p>
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
    </>
  );
}
