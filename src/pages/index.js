import AppNavbar from "@/components/organisms/Navbar";
import MainPageBanner from "@/components/organisms/MainPageBanner";
import CoursesOffered from "@/components/organisms/CoursesOffered";
import WhyNLTI from "@/components/organisms/WhyNLTI";
import SpecialHeader from "@/components/organisms/SpecialHeader";
import { TopStudentsSection } from "@/components/organisms/TopStudents";
import MarqueeStrip from "@/components/organisms/MarqueeStrip";
import Testiomonials from "@/components/organisms/Testimonials";
import OurNumbers from "@/components/organisms/OurNumbers";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <SpecialHeader />
      <AppNavbar />
      <MainPageBanner />
      <TopStudentsSection />
      <CoursesOffered />
      <WhyNLTI />
      <MarqueeStrip />
      <Testiomonials />
      <OurNumbers />
    </div>
  );
}
