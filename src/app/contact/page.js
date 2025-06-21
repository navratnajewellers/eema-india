"use client";

import { LocationEdit, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/contactComponent/ContactForm";
import WHeader from "../components/WHeader";

export default function ContactPage() {
  return (
    <>
      <WHeader />

      <section className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 ">
        <div className=" max-w-2xl m-auto text-center mt-20 ">
          <h2 className=" leading-relaxed text-4xl font-bold mb-2 ">
            Get in touch with us
          </h2>
          <p className=" leading-relaxed text-lg text-gray-400 ">
            Fill out the form below to send us a message
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-4 py-11 mt-9 md:mt-20 ">
          {/* contact form */}
          <section>
            <ContactForm />
            <p className=" leading-relaxed text-gray-400 pl-11">
              For membership please email us at{" "}
              <span>
                <a
                  className=" inline-block text-orange-600 "
                  href="mailto:info@eemaindia.com"
                >
                  info@eemaindia.com
                </a>
              </span>{" "}
            </p>
          </section>

          {/* address */}
          <section className=" py-7 ">
            <h4 className=" leading-relaxed text-xl font-semibold mb-7 text-center ">
              You can also contact Us via
            </h4>

            <div className=" flex justify-center items-center flex-wrap gap-7 ">
              <div className=" flex justify-center items-center gap-4 ">
                <span className=" border-2 border-gray-200 shadow-md rounded-[50%] p-2 inline-block ">
                  <Mail />
                </span>
                <a
                  className=" inline-block hover:text-orange-600 transition "
                  href="mailto:info@eemaindia.com"
                >
                  info@eemaindia.com
                </a>
              </div>
              <div className=" flex justify-center items-center gap-4 ">
                <span className=" border-2 border-gray-200 shadow-md rounded-[50%] p-2 ">
                  <Phone />
                </span>
                <span className=" inline-block ">
                  <a
                    className=" inline-block hover:text-orange-600 transition "
                    href="tel:+91(11)40074304"
                  >
                    +91(11)40074304
                  </a>
                  <span className=" px-4 ">/</span>
                  <a
                    className=" inline-block hover:text-orange-600 transition "
                    href="tel:+91(11)35108581"
                  >
                    +91(11)35108581
                  </a>
                </span>
              </div>
            </div>

            <div className=" flex justify-center items-center flex-wrap gap-7 px-2 py-11 mt-7 ">
              {[
                {
                  title: "Registered Office",
                  address:
                    "E-330, Ground Floor, Greater Kailash Part – 2, New Delhi - 110048. INDIA",
                },
                {
                  title: "Administration Office",
                  address:
                    "B-9, 3rd Floor, Greater Kailash Enclave part – 2, New Delhi- 110048",
                },
              ].map((data, index) => (
                <address
                  key={index}
                  className=" max-w-52 border-2 border-gray-200 hover:border-orange-600 rounded-2xl shadow-md p-4 transition  "
                >
                  <div className=" flex items-center gap-4 mb-4 ">
                    <span>
                      <MapPin />
                    </span>
                    <span className=" text-black tracking-tight font-semibold ">
                      {data.title}
                    </span>
                  </div>
                  <p>{data.address}</p>
                </address>
              ))}
            </div>
          </section>
        </div>

        <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

        <div className=" py-11 mt-11 ">
          <div className=" w-full h-96 ">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.162905996701!2d77.24079827408988!3d28.534822788513655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce22b6981dfe7%3A0x12cc06a064f08a85!2sEEMA%20-%20Event%20and%20Entertainment%20Management%20Association!5e0!3m2!1sen!2sin!4v1750509895874!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
