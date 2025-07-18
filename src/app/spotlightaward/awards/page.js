"use client";

import { useState } from "react";
import { Nav } from "rsuite";
import SaAwardsAboutPage from "./SaAwardsAboutPage";
import SaAwardsProcess from "./SaAwardsProcess";
import SaAwardsFees from "./SaAwardsFees";
import SaAwardsTC from "./SaAwardsTC";

export default function SpotlightAwardsPage() {
  const [activeSection, setActiveSection] = useState("about");
  return (
    <div className=" relative ">
      <div className=" sticky top-0 z-40 bg-gray-50 [&_.rs-nav-pills]:!w-full [&_.rs-nav-pills]:!flex-wrap [&_.rs-nav-pills]:justify-center [&_.rs-nav-pills]:items-center ">
        <div className=" h-28 block md:hidden "></div>
        <Nav
          appearance="pills"
          activeKey={activeSection}
          onSelect={setActiveSection}
        >
          <Nav.Item eventKey="about" as="a" href="#about">
            About
          </Nav.Item>
          <Nav.Item
            eventKey="process-guidelines"
            as="a"
            href="#process-guidelines"
          >
            Process Guidelines
          </Nav.Item>
          <Nav.Item eventKey="fees" as="a" href="#fees">
            Fees
          </Nav.Item>
          <Nav.Item
            eventKey="terms-and-conditions"
            as="a"
            href="#terms-and-conditions"
          >
            Terms & Conditions
          </Nav.Item>
        </Nav>
      </div>

      <SaAwardsAboutPage setActiveSection={setActiveSection} />

      <SaAwardsProcess setActiveSection={setActiveSection} />

      <SaAwardsFees setActiveSection={setActiveSection} />

      <SaAwardsTC setActiveSection={setActiveSection} />
    </div>
  );
}
