import WFooter from "../../components/WFooter";
import WHeader from "../../components/WHeader";

export const metadata = {
  title: "Post | EEMA India",
  description: "EEMA India Organization",
};

export default function PostLayout({ children }) {
  return (
    <>
      {/* <div className=" relative z-[2] bg-gray-50 ">
        <WHeader />

        {children}
      </div>

      <WFooter /> */}

      <>
        <WHeader />

        {children}
      </>
    </>
  );
}
