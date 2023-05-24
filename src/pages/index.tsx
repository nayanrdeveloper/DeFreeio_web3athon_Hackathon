import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Services from "@/components/Services/Services";
import Freelancer from "@/components/Freelancer/Freelancer";
import Category from "@/components/Category/Category";
import Projects from "@/components/Projects/Projects";
import FreelancerBanner from "@/components/FreelanceBanner/FreelancerBanner";
import WorkFlow from "@/components/WorkFlow/WorkFlow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Freelancer />
      <Category />
      <WorkFlow />
      <Projects />
      <Services />
      <FreelancerBanner />
    </main>
  );
}
