import WHeader from "../../components/WHeader";

export const metadata = {
  title: "Press Coverage | Posts | EEMA India",
  description: "EEMA India Organization",
};

export default function PostLayout({ children }) {
  return (
    <>
      <WHeader />

      <section className=" py-28 px-11 md:px-28 ">{children}</section>
    </>
  );
}
