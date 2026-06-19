"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitJson } from "@/lib/api";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phoneNumber: "",
  roleInterest: "",
  portfolioUrl: "",
  message: "",
};

export function CareerInquiryForm({ roles }: { roles: string[] }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(name: keyof typeof INITIAL_FORM, value: string) {
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await submitJson("/careers/inquiries/", formData);
      setSuccessMessage(
        "Your introduction has been sent to the hiring backend. The team can review it alongside open roles.",
      );
      setFormData(INITIAL_FORM);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your introduction right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8 text-left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Full Name *
          </label>
          <input
            required
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="Akosua Mensimah"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Email *
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="akosua@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            placeholder="+233 55 000 0000"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Role Interest
          </label>
          <select
            value={formData.roleInterest}
            onChange={(e) => updateField("roleInterest", e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500"
          >
            <option value="">General introduction</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Portfolio or LinkedIn URL
        </label>
        <input
          type="url"
          value={formData.portfolioUrl}
          onChange={(e) => updateField("portfolioUrl", e.target.value)}
          placeholder="https://linkedin.com/in/your-name"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          What would you contribute? *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Share your background, what role interests you, and the kind of work you want to do with HiT."
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 resize-none"
        />
      </div>

      {successMessage ? (
        <div className="rounded-lg border border-green-600/30 bg-green-600/10 px-4 py-3 text-sm text-green-200">
          {successMessage}
        </div>
      ) : null}
      {errorMessage ? (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        Send Introduction
      </Button>
    </form>
  );
}
