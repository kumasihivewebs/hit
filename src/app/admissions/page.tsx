import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdmissionsPageContent } from "@/components/pages/AdmissionsPageContent";
import { getAdmissionsContent, getProgramsContent } from "@/lib/content-api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions — HiT",
  description:
    "Apply to HiT's practical short courses and let the admissions team guide you toward the right program, schedule, and next step.",
};

export default async function AdmissionsPage() {
  const [admissionsContent, programs] = await Promise.all([
    getAdmissionsContent(),
    getProgramsContent(),
  ]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        <AdmissionsPageContent
          steps={admissionsContent.steps}
          faqs={admissionsContent.faqs}
          programs={programs}
        />
      </main>
      <Footer />
    </div>
  );
}
