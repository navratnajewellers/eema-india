export const metadata = {
  title: "Events | Knowledge Center | EEMA India",
  description:
    "Explore key knowledge-sharing events conducted by EEMA across zones and nationally, featuring event galleries and recordings.",
  keywords:
    "EEMA events, knowledge center events, EEMA India events, industry learning, event gallery, EEMA zone events, national events",

  openGraph: {
    title: "Events | Knowledge Center | EEMA India",
    description:
      "Dive into zone-wise and national-level EEMA events curated under the Knowledge Center, including videos and photo galleries.",
    url: "https://eemaindia.com/knowledge-center/events",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Knowledge Center Events",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Events | Knowledge Center | EEMA India",
    description:
      "Access videos, photos, and highlights from past EEMA knowledge-driven events held across zones and nationally.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function EventsLayout({ children }) {
  return <>{children}</>;
}
