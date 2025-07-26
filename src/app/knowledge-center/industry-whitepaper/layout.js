export const metadata = {
  title: "Industry Whitepapers | Knowledge Center | EEMA India",
  description:
    "Explore detailed whitepapers and research reports curated by EEMA, providing insights into the event and experiential marketing industry.",
  keywords:
    "EEMA whitepapers, industry research, event industry reports, experiential marketing, knowledge center, EEMA insights",

  openGraph: {
    title: "Industry Whitepapers | Knowledge Center | EEMA India",
    description:
      "Access industry-focused whitepapers authored and curated by EEMA, offering valuable analysis, trends, and innovations in event management.",
    url: "https://eemaindia.com/knowledge-center/industry-whitepaper",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Industry Whitepapers",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industry Whitepapers | Knowledge Center | EEMA India",
    description:
      "Stay ahead with in-depth whitepapers and publications from EEMA, covering trends and innovations in the event industry.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function WhitepaperLayout({ children }) {
  return <>{children}</>;
}
