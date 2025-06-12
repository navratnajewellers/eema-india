"use client";

import { Table, useMediaQuery } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";
import { motion } from "framer-motion";

export default function NLTPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [isTablet] = useMediaQuery("(max-width: 1111px)");

  const NECData = [
    {
      name: "Samit Garg",
      company_name: "E Factor Experiences Limited",
      designation: "President",
      email: "president@eemaindia.com",
    },
    {
      name: "PVN Vidyasagar",
      company_name: "Catpro Events",
      designation: "Executive Vice President",
      email: "evp@eemaindia.com",
    },
    {
      name: "Ankur Kalra",
      company_name: "Vibgyor Brand Services",
      designation: "General Secretary",
      email: "generalsecretary@eemaindia.com",
    },
    {
      name: "Taranbir Sahni",
      company_name: "White Horse Event Management",
      designation: "Secretary",
      email: "secretary@eemaindia.com",
    },
    {
      name: "Jagmohan Singh",
      company_name: "TNBT Marketing Services Pvt. Ltd.",
      designation: "Treasurer",
      email: "treasurer@eemaindia.com",
    },
    {
      name: "Ruchin Kohli",
      company_name: "Occasion Experts Pvt. Ltd.",
      designation: "Vice President - North",
      email: "vpnorth@eemaindia.com",
    },
    {
      name: "DV Vinod Gopal",
      company_name: "Red Chariots Event Management & Marketing",
      designation: "Vice President - South",
      email: "vpsouth@eemaindia.com",
    },
    {
      name: "Harshal Kothari",
      company_name: "Rising Events",
      designation: "Vice President - West",
      email: "vpwest@eemaindia.com",
    },
    {
      name: "Sonu Nanda",
      company_name: "Prelude Novel Ventures",
      designation: "Vice President - East",
      email: "vpeast@eemaindia.com",
    },
  ];

  const jointSecretaryData = [
    {
      name: "Vanessa Williams",
      company_name: "Concept Conferences Pvt. Ltd.",
      designation: "Joint Secretary - North",
      email: "jsnorth@eemaindia.com",
    },
    {
      name: "Anupama Deshmukh",
      company_name: "Eventronicx",
      designation: "Joint Secretary - South",
      email: "jssouth@eemaindia.com",
    },
    {
      name: "Sanjay Agarwal",
      company_name: "Solitaire Events",
      designation: "Joint Secretary - East",
      email: "jseast@eemaindia.com",
    },
    {
      name: "Ravi Mehta",
      company_name: "Robust Events",
      designation: "Joint Secretary - West",
      email: "jswest@eemaindia.com",
    },
    {
      name: "Naveen Gupta",
      company_name: "Expro Events & Exhibits",
      designation: "Committee Member 1- North",
      email: "",
    },
    {
      name: "Vipul Agarwal",
      company_name: "Expro Events & Exhibits",
      designation: "Committee Member 2- North",
      email: "",
    },
    {
      name: "R. Ramkumar",
      company_name: "Varsham Events And Entertainment Pvt. Ltd.",
      designation: "Committee Member 1- South",
      email: "",
    },
    {
      name: "G Rajesh",
      company_name: "Ergo Consulting Services (India) Pvt. Ltd.",
      designation: "Committee Member 2 - South",
      email: "",
    },
    {
      name: "Hemant Matai",
      company_name: "Trinity Entertainment And Strategic Consultants LLP",
      designation: "Committee Member 1 - West",
      email: "",
    },
    {
      name: "Kiran Shetty",
      company_name: "Collective Heads Experiential Mkt. Solutions Pvt. Ltd.",
      designation: "Committee Member 2 - West",
      email: "",
    },
    {
      name: "Pramod Lunawat",
      company_name: "Millennium Accolades Promotions Pvt. Ltd.",
      designation: "	Committee Member 1- East",
      email: "",
    },
    {
      name: "Sanjay Bhandari",
      company_name: "Encore Events Pvt. Ltd.",
      designation: "Committee Member 2- East",
      email: "",
    },
  ];

  const secretariatTeamData = [
    {
      name: "Priti Khanna",
      designation: "Executive Director",
      email: "executive.director@eemaindia.com",
    },
    {
      name: "Tushar Malik",
      designation: "Sr. Zonal Manager - North & East",
      email: "zmnorth@eemaindia.com",
    },
    {
      name: "Ankita Mukherjee",
      designation: "Zonal Manager - West & South",
      email: "zmwest@eemaindia.com",
    },
    {
      name: "Rimi Bhattacharya",
      designation: "Operations Manager",
      email: "operations@eemaindia.com",
    },
    {
      name: "Shishu Kumar",
      designation: "Assistant Finance Manager",
      email: "accounts@eemaindia.com",
    },
  ];

  return (
    <section
      id="national-leadership-team"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-36 "
    >
      <h4 className=" text-2xl text-black font-semibold sticky top-40 z-[12] w-fit py-4 bg-gray-50 ">
        (National Leadership Team)
      </h4>

      {/* first table */}
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 relative mt-16 ">
        <section className=" md:col-span-2 pl-11 ">
          <div className=" sticky top-60 z-10 ">
            <motion.h4
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className=" text-2xl mb-4 mt-4 "
            >
              National Executive Committee
            </motion.h4>
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              className=" bg-orange-600 inline-block h-4 w-4 rotate-slow ml-11 "
            ></motion.span>
          </div>
        </section>

        <section className=" flex justify-center items-center md:col-span-4 ">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Table
              // height={300}
              width={isMobile ? 400 : isTablet ? 500 : 770}
              data={NECData}
              bordered
              cellBordered
              autoHeight
              wordWrap="break-word"
            >
              <Column width={150}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Name
                </HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={250}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Company Name
                </HeaderCell>
                <Cell dataKey="company_name" />
              </Column>

              <Column width={120}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Designation
                </HeaderCell>
                <Cell dataKey="designation" />
              </Column>

              <Column width={250}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Email
                </HeaderCell>
                <Cell dataKey="email" />
              </Column>
            </Table>
          </motion.div>
        </section>
      </div>

      {/* second table */}
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 relative mt-16 ">
        <section className=" md:col-span-2 pl-11 ">
          <div className=" sticky top-60 z-10 ">
            <motion.h4
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className=" text-2xl mb-4 mt-4 "
            >
              Joint Secretary and Committee Members
            </motion.h4>
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              className=" bg-orange-600 inline-block h-4 w-4 rotate-slow ml-11 "
            ></motion.span>
          </div>
        </section>

        <section className=" flex justify-center items-center md:col-span-4 ">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Table
              // height={300}
              width={isMobile ? 400 : isTablet ? 500 : 750}
              data={jointSecretaryData}
              bordered
              cellBordered
              autoHeight
              wordWrap="break-word"
            >
              <Column width={150}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Name
                </HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={250}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Company Name
                </HeaderCell>
                <Cell dataKey="company_name" />
              </Column>

              <Column width={160}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Designation
                </HeaderCell>
                <Cell dataKey="designation" />
              </Column>

              <Column width={190}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Email
                </HeaderCell>
                <Cell dataKey="email" />
              </Column>
            </Table>
          </motion.div>
        </section>
      </div>

      {/* third table */}
      <div className=" grid grid-cols-1 md:grid-cols-6 gap-2 relative mt-16 ">
        <section className=" md:col-span-2 pl-11 ">
          <div className=" sticky top-60 z-10 ">
            <motion.h4
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className=" text-2xl mb-4 mt-4 "
            >
              Secretariat Team
            </motion.h4>
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              className=" bg-orange-600 inline-block h-4 w-4 rotate-slow ml-11 "
            ></motion.span>
          </div>
        </section>

        <section className=" flex justify-center items-center md:col-span-4 ">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Table
              // height={300}
              width={isMobile ? 400 : isTablet ? 500 : 580}
              data={secretariatTeamData}
              bordered
              cellBordered
              autoHeight
              wordWrap="break-word"
            >
              <Column width={150}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Name
                </HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={160}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Designation
                </HeaderCell>
                <Cell dataKey="designation" />
              </Column>

              <Column width={270}>
                <HeaderCell className=" nlt-table-header text-white ">
                  Email
                </HeaderCell>
                <Cell dataKey="email" />
              </Column>
            </Table>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
