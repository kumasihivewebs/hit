import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-950">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="section-container text-center space-y-8 max-w-xl mx-auto">
          <div className="space-y-2">
            <p className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              404
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">Page Not Found</h1>
            <p className="text-slate-300 text-lg">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
