import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import WFooter from "./components/WFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://eemaindia.com"),
  title: "Event and Entertainment Management Association | EEMA India",
  description:
    "EEMA is the premier association representing India's event and experiential marketing industry. Discover our vision, members, and landmark initiatives that are shaping the future of live experiences.",
  keywords:
    "EEMA, Event Association India, Experiential Marketing, Event Management India, EEMAGINE, EEMAX, EEMA Membership, EEMA Events, Indian Event Industry",
  openGraph: {
    title: "Event and Entertainment Management Association | EEMA India",
    description:
      "India’s leading event and experiential marketing association, connecting agencies, professionals, and creators behind unforgettable live experiences.",
    url: "https://eemaindia.com",
    siteName: "EEMA India",
    images: [
      {
        url: "/images/eemagine2024/freepik__retouch__26221.jpg",
        width: 1200,
        height: 630,
        alt: "EEMA India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event and Entertainment Management Association | EEMA India",
    description:
      "Discover the association powering India's event and experiential marketing ecosystem. Join, collaborate, and grow with EEMA.",
    images: ["/images/eemagine2024/freepik__retouch__26231.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <div className=" relative z-[2] bg-gray-50 text-black ">{children}</div>

        <WFooter />
      </body>
    </html>
  );
}
