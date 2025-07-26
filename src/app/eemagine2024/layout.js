import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMAGINE 2024 | EEMA India",
  description:
    "Relive the magic of EEMAGINE 2024 — India’s premier event industry convention. Explore key moments, speakers, and a stunning image gallery from the event.",
  keywords:
    "EEMAGINE 2024, EEMA event, event industry convention, EEMAGINE highlights, EEMAGINE gallery, EEMA India",

  openGraph: {
    title: "EEMAGINE 2024 | EEMA India",
    description:
      "A recap of EEMAGINE 2024 – the flagship convention by EEMA that brought together leaders, innovators, and creators from the event and entertainment industry.",
    url: "https://eemaindia.com/eemagine2024",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "EEMAGINE 2024 Highlights and Gallery",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EEMAGINE 2024 | EEMA India",
    description:
      "Experience the highlights of EEMAGINE 2024 – the ultimate gathering for the event and experiential marketing industry.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function Eemagine2024Layout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
