export const metadata = {
  title: "Press Coverage | EEMA India",
  description:
    "Stay informed with the latest press coverage of EEMA – featured articles, news highlights, and media recognition from across the country.",
  keywords:
    "EEMA press, media coverage, EEMA in news, event industry news, EEMA articles, EEMA India press",

  openGraph: {
    title: "Press Coverage | EEMA India",
    description:
      "Explore how EEMA is making headlines in the event and entertainment industry through national and international media.",
    url: "https://eemaindia.com/press-coverage-eema",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Press Coverage - Media Mentions and Highlights",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Press Coverage | EEMA India",
    description:
      "Get the latest media coverage and news about EEMA’s contributions to India’s event industry.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function PressCoverageLayout({ children }) {
  return <>{children}</>;
}
