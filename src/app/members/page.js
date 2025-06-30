import TestimonialsSection from "../components/home/TestimonialsSection";
import WHeader from "../components/WHeader";
import MemberListSection from "./memberComponent/MemberListSection";
import MemberVideoGrid from "./memberComponent/MemberVideoGrid";
import WhyJoinSection from "./memberComponent/WhyJoinSection";

export default function MembersPage() {
  return (
    <>
      <WHeader />

      <MemberVideoGrid />

      <WhyJoinSection />

      <TestimonialsSection />

      <MemberListSection />
    </>
  );
}
