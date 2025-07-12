"use client";

import { Nav } from "rsuite";
import EemaxAwardsCatergory from "./EemaxAwardsCatergory";
import { useState } from "react";
import EemaxAwardsFees from "./EemaxAwardsFees";

export default function EEmaxAwardsPage() {
  const [activeSection, setActiveSection] = useState("categories");
  return (
    <div className=" relative ">
      <div className=" sticky top-0 z-40 bg-gray-50 [&_.rs-nav-pills]:!w-full [&_.rs-nav-pills]:!flex-wrap [&_.rs-nav-pills]:justify-center [&_.rs-nav-pills]:items-center ">
        <div className=" h-28 block md:hidden "></div>
        <Nav
          appearance="pills"
          activeKey={activeSection}
          onSelect={setActiveSection}
        >
          <Nav.Item eventKey="categories" as="a" href="#categories">
            Categories
          </Nav.Item>
          <Nav.Item eventKey="fees" as="a" href="#fees">
            Fees
          </Nav.Item>
          <Nav.Item eventKey="jury" as="a" href="#jury">
            Jury
          </Nav.Item>
          <Nav.Item eventKey="award-process" as="a" href="#award-process">
            Award Process
          </Nav.Item>
          <Nav.Item
            eventKey="shortlisted-applicants"
            as="a"
            href="#shortlisted-applicants"
          >
            Shortlisted Applicants
          </Nav.Item>
        </Nav>
      </div>

      <EemaxAwardsCatergory setActiveSection={setActiveSection} />

      {/* <EemaxAwardsFees setActiveSection={setActiveSection} /> */}
    </div>
  );
}
