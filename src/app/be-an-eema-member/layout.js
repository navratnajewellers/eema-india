import WHeader from "../components/WHeader";

export const metadata = {
  title: "EEMA Membership | EEMA India",
  description: "EEMA India Organization",
};

export default function BecomeMemberLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
