"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { submitJson } from "@/lib/api";

type Program = {
  id: string;
  title: string;
};

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  program: "",
  preferredSchedule: "",
  background: "",
  referralSource: "",
};

export function AdmissionApplicationForm({ programs }: { programs: Program[] }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(name: keyof typeof INITIAL_FORM, value: string) {
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitJson("/admission/applications/", formData);
      setIsSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your application right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green-600/30 bg-green-600/10 p-10 text-center space-y-4">
        <div className="text-5xl">✅</div>
        <h3 className="text-2xl font-bold text-green-300">
          Application Received
        </h3>
        <p className="text-slate-300">
          Your details are now in the admissions queue. The team can follow up
          with next steps, schedule options, and cohort details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
          >
            Submit Another Application
          </button>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-6 py-3 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
          >
            Browse Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            First Name *
          </label>
          <input
            required
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Ama"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Last Name *
          </label>
          <input
            required
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Boateng"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Email Address *
        </label>
        <input
          required
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="ama@example.com"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => updateField("phoneNumber", e.target.value)}
          placeholder="+233 20 434 3066"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Country *
        </label>
        <input
          required
          type="text"
          value={formData.country}
          onChange={(e) => updateField("country", e.target.value)}
          placeholder="Ghana"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Program of Interest *
        </label>
        <select
          required
          value={formData.program}
          onChange={(e) => updateField("program", e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors"
        >
          <option value="" disabled>
            Select a program
          </option>
          {programs.map((program) => (
            <option key={program.id} value={program.title}>
              {program.title}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Preferred Schedule
        </label>
        <select
          value={formData.preferredSchedule}
          onChange={(e) => updateField("preferredSchedule", e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Daytime: 10 am to 3 pm">Daytime: 10 am to 3 pm</option>
          <option value="Evening option">Evening option</option>
          <option value="Weekend option">Weekend option</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Describe your background and why you want to join HiT *
        </label>
        <textarea
          required
          rows={5}
          value={formData.background}
          onChange={(e) => updateField("background", e.target.value)}
          placeholder="Tell us about yourself, your current skills, and what you hope to achieve..."
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-colors resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          How did you hear about HiT?
        </label>
        <select
          value={formData.referralSource}
          onChange={(e) => updateField("referralSource", e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500 transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Social media">Social media</option>
          <option value="Friend or colleague">Friend or colleague</option>
          <option value="Search engine">Search engine</option>
          <option value="Event or conference">Event or conference</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {errorMessage ? (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        Submit Application
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-slate-300">
          Privacy Policy
        </Link>
        . Your application will be stored in the admissions backend for
        follow-up.
      </p>
    </form>
  );
}
