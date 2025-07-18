import WHeader from "../components/WHeader";

export const metadata = {
  title: "Refund and Cancellation Policy | EEMA India",
  description: "EEMA India Organization",
};

export default function RefundPolicyLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
