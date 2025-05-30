import WFooter from "../../components/WFooter";
import WHeader from "../../components/WHeader";

export const metadata = {
  title: "Post | EEMA India",
  description: "EEMA India Organization",
};

export default function PostLayout({ children }) {
  return (
    <>
      <WHeader />

      {children}
    </>
  );
}
