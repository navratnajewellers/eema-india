export const metadata = {
  title: "Regional Initiatives | EEMA India",
  description:
    "Discover EEMA's regional initiatives aimed at empowering members across India through zone-specific programs, networking, and growth platforms.",
  keywords:
    "EEMA regional initiatives, EEMA zones, EEMA north zone, EEMA south zone, EEMA west zone, EEMA east zone, EEMA regional activities, EEMA outreach",

  openGraph: {
    title: "Regional Initiatives | EEMA India",
    description:
      "Explore how EEMA supports regional growth and member engagement through strategic zone-based initiatives across India.",
    url: "https://eemaindia.com/eema-regional-initiatives",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Regional Initiatives",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Regional Initiatives | EEMA India",
    description:
      "Learn about EEMA’s active regional presence and efforts in strengthening the experiential industry across different zones.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function RegionalInitiativesLayout({ children }) {
  return <>{children}</>;
}
