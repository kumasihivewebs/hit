import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { LearningPhilosophySection } from "@/components/sections/LearningPhilosophySection";
import { InnovationLabsSection } from "@/components/sections/InnovationLabsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StartupSection } from "@/components/sections/StartupSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <LearningPhilosophySection />
        <InnovationLabsSection />
        <ProjectsSection />
        <StartupSection />
        <StatsSection />
        <TestimonialsSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}
