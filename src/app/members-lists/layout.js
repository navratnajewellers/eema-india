import WHeader from "../components/WHeader";

export const metadata = {
  title: "Members List | EEMA India",
  description: "EEMA India Organization",
};

export default function MemberListLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
