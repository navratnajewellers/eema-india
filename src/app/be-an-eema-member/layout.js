import WHeader from "../components/WHeader";

export const metadata = {
  title: "Become a Member | EEMA Membership | EEMA India",
  description:
    "Join EEMA and be part of India’s premier network for event and entertainment professionals. Enjoy exclusive benefits, industry recognition, and growth opportunities.",
  keywords:
    "EEMA membership, join EEMA, become a member, event association India, entertainment professionals, EEMA benefits",

  openGraph: {
    title: "Become a Member | EEMA India",
    description:
      "Gain access to a powerful community of event professionals, resources, recognition, and more. Join EEMA today.",
    url: "https://eemaindia.com/be-an-eema-member",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "Join EEMA – India's Event Leadership Community",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Become a Member | EEMA India",
    description:
      "Join the leading association for India’s event and experiential industry. Discover the advantages of EEMA membership.",
    images: ["/images/eemagine2024/freepik__retouch__26221.jpg"],
  },
};

export default function BecomeMemberLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
