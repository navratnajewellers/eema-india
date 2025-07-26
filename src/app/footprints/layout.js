import WHeader from "../components/WHeader";

export const metadata = {
  title: "Footprints | EEMA India",
  description:
    "Discover the impactful journey of EEMA through visuals – from spectacular events to unforgettable moments captured across India.",
  keywords:
    "EEMA gallery, EEMA footprints, event highlights, EEMA events, EEMA photo gallery, event industry visuals",

  openGraph: {
    title: "Footprints | EEMA India",
    description:
      "Explore EEMA’s visual journey through an engaging gallery of past events, industry milestones, and memorable experiences.",
    url: "https://eemaindia.com/footprints",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Footprints - Event Gallery",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Footprints | EEMA India",
    description:
      "Visualize the legacy of EEMA events and industry milestones through our exclusive gallery.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function FootprintsLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
