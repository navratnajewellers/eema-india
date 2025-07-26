export const metadata = {
  title: "Value Added Tie-Ups | Knowledge Center | EEMA India",
  description:
    "Discover exclusive value-added partnerships and collaborations curated by EEMA to benefit members and elevate industry standards.",
  keywords:
    "EEMA tie-ups, value added benefits, EEMA partnerships, industry collaboration, member benefits, EEMA India",

  openGraph: {
    title: "Value Added Tie-Ups | Knowledge Center | EEMA India",
    description:
      "Explore EEMA’s strategic tie-ups offering added value and benefits to members across the events and entertainment industry.",
    url: "https://eemaindia.com/knowledge-center/value-added-tieups",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Value Added Tie-Ups",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Value Added Tie-Ups | Knowledge Center | EEMA India",
    description:
      "Learn more about the value-added collaborations and industry partnerships offered by EEMA for its members.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function VATLayout({ children }) {
  return <>{children}</>;
}
