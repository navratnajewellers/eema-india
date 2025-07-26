import WHeader from "../components/WHeader";

export const metadata = {
  title: "Refund & Cancellation Policy | EEMA India",
  description:
    "Read the Event and Entertainment Management Association's (EEMA) policy on refunds and cancellations for membership fees, event registrations, and services.",
  keywords:
    "EEMA refund policy, cancellation policy, event refund, membership refund, cancellation terms, EEMA India",
  openGraph: {
    title: "Refund & Cancellation Policy | EEMA India",
    description:
      "Learn about EEMA's guidelines for refunds and cancellations related to events and memberships.",
    url: "https://eemaindia.com/refund-and-cancellation-policy",
    siteName: "EEMA India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | EEMA India",
    description:
      "Learn about EEMA's guidelines for refunds and cancellations related to events and memberships.",
  },
};

export default function RefundPolicyLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
