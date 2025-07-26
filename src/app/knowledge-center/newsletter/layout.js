export const metadata = {
  title: "Newsletter | Knowledge Center | EEMA India",
  description:
    "Browse the latest EEMA newsletters and stay informed on industry updates, trends, and organizational news straight from the Knowledge Center.",
  keywords:
    "EEMA Newsletter, EEMA India Newsletter, event industry updates, knowledge center, newsletters, event trends, EEMA news",

  openGraph: {
    title: "Newsletter | Knowledge Center | EEMA India",
    description:
      "Explore EEMA's monthly and quarterly newsletters featuring industry news, expert opinions, and member highlights.",
    url: "https://eemaindia.com/knowledge-center/newsletter",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Newsletter",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Newsletter | Knowledge Center | EEMA India",
    description:
      "Catch up on the latest editions of the EEMA Newsletter, featuring updates from the event and entertainment industry.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function KcNewsletterLayout({ children }) {
  return <>{children}</>;
}
