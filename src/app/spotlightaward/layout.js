import WHeader from "../components/WHeader";

export const metadata = {
  title: "Spotlight Awards | EEMA India",
  description:
    "The Spotlight Awards by EEMA recognize emerging talent and excellence in the events and experiential industry. Explore categories, judging criteria, and submission details.",
  keywords:
    "EEMA Spotlight Awards, EEMA Awards, Emerging Talent Awards, Event Industry Awards, EEMA Judging Criteria, Award Submission, Spotlight Recognition",

  openGraph: {
    title: "Spotlight Awards | EEMA India",
    description:
      "Celebrate rising stars in the events industry through EEMA’s Spotlight Awards. Learn more about award categories, criteria, and how to participate.",
    url: "https://eemaindia.com/spotlightaward",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/logo/spotlight-awards-logo.png",
        width: 1200,
        height: 630,
        alt: "Spotlight Awards Banner",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spotlight Awards | EEMA India",
    description:
      "Discover the Spotlight Awards by EEMA – highlighting exceptional contributions and promising talent in India’s events and experiential marketing space.",
    images: ["/images/logo/spotlight-awards-logo.png"],
  },
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
        headerImage="/images/logo/spotlight-awards-logo.png"
      />

      {children}
    </>
  );
}
