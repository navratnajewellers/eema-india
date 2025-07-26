export const metadata = {
  title: "Members | EEMA India",
  description:
    "Discover the vibrant community of EEMA members – industry leaders, innovators, and professionals shaping the events and entertainment industry.",
  keywords:
    "EEMA members, event professionals, entertainment industry, EEMA network, event management association",

  openGraph: {
    title: "Members | EEMA India",
    description:
      "Explore our diverse community of EEMA members who drive excellence and innovation in the events and entertainment sector.",
    url: "https://eemaindia.com/members",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Members",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Members | EEMA India",
    description:
      "Meet the members who make EEMA the leading association for the event and entertainment industry.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function MembersLayout({ children }) {
  return <>{children}</>;
}
