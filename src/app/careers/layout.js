export const metadata = {
  title: "Careers | EEMA India",
  description:
    "Explore exciting career opportunities at EEMA – India’s leading Event and Entertainment Management Association. Join us in shaping the future of the event industry.",
  keywords:
    "EEMA careers, event jobs India, entertainment careers, EEMA hiring, event industry opportunities",
  openGraph: {
    title: "Careers at EEMA | Join the Event & Entertainment Leaders",
    description:
      "Passionate about events and entertainment? Discover open roles and grow your career with EEMA India.",
    url: "https://eemaindia.com/careers",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26231.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Careers at EEMA India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Careers at EEMA",
    description:
      "Join the vibrant and dynamic team at EEMA. We are hiring passionate individuals to drive innovation in India's event industry.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"], // Replace with actual image
  },
};

export default function CareerLayout({ children }) {
  return <>{children}</>;
}
