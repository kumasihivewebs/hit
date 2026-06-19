import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommunityPageContent } from "@/components/pages/CommunityPageContent";
import { getCommunityContent } from "@/lib/content-api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — HiT",
  description:
    "Join the HiT community through events, mentor sessions, project demos, and practical learner connections centered in Kumasi.",
};

export default async function CommunityPage() {
  const communityContent = await getCommunityContent();

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main id="main-content" className="flex-1">
        <CommunityPageContent
          events={communityContent.events}
          alumni={communityContent.alumni}
          stats={communityContent.stats}
        />
      </main>
      <Footer />
    </div>
  );
}
