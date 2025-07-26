export const metadata = {
  title: "Contact Us | EEMA India",
  description:
    "Get in touch with the Event and Entertainment Management Association (EEMA). Reach out for partnerships, memberships, or inquiries.",
  keywords:
    "EEMA contact, EEMA India, EEMA email, event industry contact, entertainment industry India",
  openGraph: {
    title: "Contact EEMA | Event and Entertainment Management Association",
    description:
      "Need to connect with EEMA? Reach out for support, queries, or collaborations with India’s leading event management association.",
    url: "https://eemaindia.com/contact",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg", // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: "Contact EEMA India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EEMA | India’s Leading Event Industry Body",
    description:
      "Reach out to EEMA for queries, collaborations, or support in the events and experiential marketing industry.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"], // Replace with actual image
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
