import ApplySteps from "./MemberComponents/ApplySteps";
import FAQSection from "./MemberComponents/FAQSection";
import HeroSection from "./MemberComponents/MemberHero";

import MembershipCategoriesSection from "./MemberComponents/MembershipCategoriesSection";
import NewMemberHeroSection from "./MemberComponents/NewMemberHeroSection";
import WhyJoin from "./MemberComponents/WhyJoin";

export default function BecomeMemberPage() {
  return (
    <main>
      <HeroSection />
      <NewMemberHeroSection />
      <WhyJoin />
      <MembershipCategoriesSection />
      <ApplySteps />
      <FAQSection />
    </main>
  );
}
