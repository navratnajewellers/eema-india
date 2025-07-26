import WHeader from "../components/WHeader";

export const metadata = {
  title: "Privacy Policy | EEMA India",
  description:
    "Learn how the Event and Entertainment Management Association (EEMA) collects, uses, and protects your data. Your privacy is important to us.",
  keywords:
    "EEMA privacy policy, data protection, user information, cookies, data usage, EEMA India",
  openGraph: {
    title: "Privacy Policy | EEMA India",
    description:
      "Understand how EEMA handles your personal information and data privacy.",
    url: "https://eemaindia.com/privacy",
    siteName: "EEMA India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | EEMA India",
    description:
      "Understand how EEMA handles your personal information and data privacy.",
  },
};

export default function PrivacyLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
