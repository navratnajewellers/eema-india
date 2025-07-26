import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMAGINE 2025 | EEMA India",
  description:
    "Join the experience at EEMAGINE 2025 — the premier convention by EEMA for event and entertainment professionals. Register now and be a part of the future.",
  keywords:
    "EEMAGINE 2025, EEMA event 2025, EEMA registration, EEMAGINE convention, event industry, experiential marketing, EEMA India",

  openGraph: {
    title: "EEMAGINE 2025 | EEMA India",
    description:
      "EEMAGINE 2025 is back! Register now to attend India’s leading event industry convention organized by EEMA.",
    url: "https://eemaindia.com/eemagine2025",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg",
        width: 1200,
        height: 630,
        alt: "EEMAGINE 2025 Registration and Event Details",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EEMAGINE 2025 | EEMA India",
    description:
      "Be part of the most awaited event of the year — EEMAGINE 2025 by EEMA. Register now!",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function Eemagine2025Layout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
