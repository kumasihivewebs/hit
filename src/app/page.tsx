import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { getProgramsContent } from "@/lib/content-api";

export default async function Home() {
  const programs = await getProgramsContent();

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        {programs.length > 0 ? <ProgramsSection programs={programs} /> : null}
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}
