"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitJson } from "@/lib/api";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phoneNumber: "",
  interestType: "Community membership",
  eventName: "",
  message: "",
};

export function CommunityInterestForm({
  selectedEvent,
}: {
  selectedEvent?: string;
}) {
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
      const payload = {
        ...formData,
        interestType: selectedEvent ? "Event registration" : formData.interestType,
        eventName: selectedEvent || formData.eventName,
      };

      await submitJson("/community/interest/", payload);
      setSuccessMessage(
        "Your interest has been recorded. The HiT team can follow up with event or community details.",
      );
      setFormData({
        ...INITIAL_FORM,
        interestType: "Community membership",
        eventName: "",
      });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not submit your request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8"
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
            placeholder="Kwame Owusu"
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
            placeholder="kwame@example.com"
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
            placeholder="+233 24 000 0000"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-300">
            Interest Type *
          </label>
          <select
            required
            value={selectedEvent ? "Event registration" : formData.interestType}
            onChange={(e) => updateField("interestType", e.target.value)}
            disabled={Boolean(selectedEvent)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-orange-500"
          >
            <option value="Community membership">Community membership</option>
            <option value="Event registration">Event registration</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Event Name
        </label>
        <input
          type="text"
          value={selectedEvent || formData.eventName}
          onChange={(e) => updateField("eventName", e.target.value)}
          placeholder="Optional event or program name"
          disabled={Boolean(selectedEvent)}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-300">
          Message
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell the team what you want to join, attend, or discuss."
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
        Submit Interest
      </Button>
    </form>
  );
}
