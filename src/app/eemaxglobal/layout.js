import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMAX Global | EEMA India",
  description: "EEMA India Organization",
};

export default function EemaxglobalLayout({ children }) {
  const headerNavItems = [
    {
      text: "EEMAX Global",
      link: "/eemaxglobal/",
    },
    {
      text: "Winners",
      link: "/eemaxglobal/winners",
    },
    {
      text: "Awards",
      link: "/eemaxglobal/awards",
    },
    {
      text: "Contacts Us",
      link: "/eemaxglobal/contact",
    },
    {
      text: "Apply Now",
      link: "https://eemax.eemaindia.com/signup",
    },
  ];

  return (
    <>
      <WHeader
        headerNavItems={headerNavItems}
        headerImage="/images/logo/eemax-2025-logo.png"
      />
      {children}
    </>
  );
}
