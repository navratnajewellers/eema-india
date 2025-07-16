import WHeader from "../components/WHeader";

export const metadata = {
  title: "Privacy | EEMA India",
  description: "EEMA India Organization",
};

export default function PrivacyLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
