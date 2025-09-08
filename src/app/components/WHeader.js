import NavSection from "./home/NavSection";
import "../styles/header.css";
import WHeaderHomeLink from "./WHeaderHomeLink";

export default function WHeader({ headerNavItems, headerImage }) {
  return (
    <header className=" h-full w-full bg-gray-50 relative shadow-md border-b-2 border-gray-200 pb-24  ">
      <WHeaderHomeLink />

      <NavSection headerNavItems={headerNavItems} headerImage={headerImage} />
    </header>
  );
}
