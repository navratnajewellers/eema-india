import WHeader from "../components/WHeader";

export const metadata = {
  title: "Knowledge Center | EEMA India",
  description: "EEMA India Organization",
};

export default function KnowledgeCenterLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
