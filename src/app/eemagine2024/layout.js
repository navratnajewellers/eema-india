import WHeader from "../components/WHeader";

export const metadata = {
  title: "Eemagine 2024 | EEMA India",
  description: "EEMA India Organization",
};

export default function Eemagine2024Layout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
