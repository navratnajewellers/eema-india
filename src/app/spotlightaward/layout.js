import WHeader from "../components/WHeader";

export const metadata = {
  title: "Spotlight Awards | EEMA India",
  description: "EEMA India Organization",
};

export default function SpotlightLayout({ children }) {
  const headerNavItems = [
    {
      text: "Home",
      link: "/spotlightaward/",
    },
    {
      text: "Awards",
      link: "/spotlightaward/awards",
    },
    {
      text: "Categories",
      link: "/spotlightaward/categories",
    },
    {
      text: "Winners",
      link: "/spotlightaward/winners",
    },
    {
      text: "Apply Now",
      link: "https://spotlight.eemaindia.com/",
    },
  ];

  return (
    <>
      <WHeader
        headerNavItems={headerNavItems}
        headerImage="https://www.eemaindia.com/spotlightaward/assets/images/logo.png"
      />

      {children}
    </>
  );
}
