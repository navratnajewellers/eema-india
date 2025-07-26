export const metadata = {
  metadataBase: new URL("https://eemaindia.com"),
  title: "About EEMA | Event and Entertainment Management Association",
  description:
    "Learn about EEMA – the voice of the Indian event and experiential marketing industry, its journey, vision, and impact.",
  keywords:
    "About EEMA, EEMA India, Event Industry India, EEMA Vision, EEMA Journey, EEMA Leadership, Event Association India",
  openGraph: {
    title: "About EEMA | Event and Entertainment Management Association",
    description:
      "Explore EEMA’s journey, vision, key milestones, and how it empowers the Indian events and experiential sector.",
    url: "https://eemaindia.com/about",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg",
        width: 1200,
        height: 630,
        alt: "About EEMA India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EEMA | Event and Entertainment Management Association",
    description:
      "Discover the story behind EEMA, the association supporting India's vibrant event industry.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
