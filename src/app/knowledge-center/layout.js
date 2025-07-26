import WHeader from "../components/WHeader";

export const metadata = {
  title: "Knowledge Center | EEMA India",
  description:
    "Explore insights, videos, and images from EEMA’s Knowledge Center. Stay updated with the latest trends, ideas, and industry practices.",
  keywords:
    "EEMA Knowledge Center, industry insights, event case studies, event videos, event gallery, EEMA resources, learning center",

  openGraph: {
    title: "Knowledge Center | EEMA India",
    description:
      "Dive into a curated collection of knowledge resources including videos, galleries, and case studies from the event industry, powered by EEMA.",
    url: "https://eemaindia.com/knowledge-center",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Knowledge Center - Videos and Resources",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Knowledge Center | EEMA India",
    description:
      "Access videos, images, and insights from EEMA’s Knowledge Center to stay ahead in the event and entertainment industry.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function KnowledgeCenterLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
