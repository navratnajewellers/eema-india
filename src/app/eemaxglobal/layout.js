import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMAX Global | EEMA India",
  description:
    "Explore EEMAX Global – the flagship celebration of creativity and excellence in the Indian events and experiential marketing industry, hosted by EEMA.",
  keywords:
    "EEMAX Global, EEMA India, event excellence, experiential marketing, industry recognition, EEMA platform, EEMAX ceremony",

  openGraph: {
    title: "EEMAX Global | EEMA India",
    description:
      "Discover EEMAX Global, EEMA's prestigious platform to recognize exceptional work in the event and experiential space.",
    url: "https://eemaindia.com/eemaxglobal",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/logo/eemax-2025-logo.png",
        width: 1200,
        height: 630,
        alt: "EEMAX Global Banner",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EEMAX Global | EEMA India",
    description:
      "Get to know EEMAX Global – EEMA's signature celebration of event excellence in India.",
    images: ["/images/logo/eemax-2025-logo.png"],
  },
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
