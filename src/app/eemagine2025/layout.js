import WHeader from "../components/WHeader";

export const metadata = {
  title: "Eemagine 2025 | EEMA India",
  description: "EEMA India Organization",
};

export default function Eemagine2025Layout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
