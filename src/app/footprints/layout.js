import WHeader from "../components/WHeader";

export const metadata = {
  title: "Footprints | EEMA India",
  description: "EEMA India Organization",
};

export default function FootprintsLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
