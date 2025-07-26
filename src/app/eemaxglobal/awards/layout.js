export const metadata = {
  title: "EEMAX Global Awards | EEMA India",
  description:
    "Learn about the prestigious EEMAX Global Awards by EEMA – explore award categories, fees, jury panel, process, and shortlisted applicants celebrating excellence in events and experiential marketing.",
  keywords:
    "EEMAX Awards, EEMA Awards, Event Awards, Experiential Marketing Awards, Jury, EEMA Jury, Award Categories, Shortlisted Applicants, Awards Process, Event Industry Awards",

  openGraph: {
    title: "EEMAX Global Awards | EEMA India",
    description:
      "Discover the EEMAX Global Awards – India's leading recognition for outstanding achievements in events and experiential marketing, by EEMA.",
    url: "https://eemaindia.com/eemaxglobal/awards",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/logo/eemax-2025-logo.png",
        width: 1200,
        height: 630,
        alt: "EEMAX Global Awards",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "EEMAX Global Awards | EEMA India",
    description:
      "Explore the EEMAX Global Awards – categories, process, jury, and shortlisted applicants recognizing excellence in the Indian event industry.",
    images: ["/images/logo/eemax-2025-logo.png"],
  },
};

export default function EEmaxAwardsLayout({ children }) {
  return <>{children}</>;
}
