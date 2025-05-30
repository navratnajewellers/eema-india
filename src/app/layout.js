import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import WHeader from "./components/WHeader";
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
  title: "EEMA India",
  description: "EEMA India Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <div className=" relative z-[2] bg-gray-50 ">{children}</div>

        <WFooter />
      </body>
    </html>
  );
}
