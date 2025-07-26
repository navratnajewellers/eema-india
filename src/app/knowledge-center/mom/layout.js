export const metadata = {
  title: "Minutes of Meeting | Knowledge Center | EEMA India",
  description:
    "Access the official Minutes of Meeting (MoM) from EEMA sessions, capturing key decisions, discussions, and action points.",
  keywords:
    "EEMA Minutes of Meeting, EEMA MOM, knowledge center, meeting records, event management decisions, EEMA discussions",

  openGraph: {
    title: "Minutes of Meeting | Knowledge Center | EEMA India",
    description:
      "Review formal records of discussions and decisions made during EEMA meetings, ensuring transparency and organizational alignment.",
    url: "https://eemaindia.com/knowledge-center/mom",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Minutes of Meeting",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Minutes of Meeting | Knowledge Center | EEMA India",
    description:
      "Explore official MoM records from EEMA, summarizing key discussions and resolutions from various meetings.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function MomNecLayout({ children }) {
  return <>{children}</>;
}
