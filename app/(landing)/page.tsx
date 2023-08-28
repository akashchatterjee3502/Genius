import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import Image from "next/image";
const LandingPage = () => {
  return (
    <div className="h-full">
      <Image
        width={2000}
        height={1000}
        src={"/bggif.gif"}
        alt="bg-image"
        className="fixed -z-10 h-full"
      />
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
