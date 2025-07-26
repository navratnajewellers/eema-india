import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMA Members List | EEMA India",
  description:
    "Explore the official list of EEMA members across India. Connect with leading professionals from the events and experiential industry.",
  keywords:
    "EEMA members, EEMA members list, event professionals India, EEMA network, entertainment industry members",

  openGraph: {
    title: "EEMA Members List | EEMA India",
    description:
      "Browse through EEMA’s verified list of members including top event agencies, professionals, and companies across India.",
    url: "https://eemaindia.com/members-list",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA Official Members Directory",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EEMA Members List | EEMA India",
    description:
      "Get to know the professionals and organizations shaping India’s event and entertainment industry.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function MemberListLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
