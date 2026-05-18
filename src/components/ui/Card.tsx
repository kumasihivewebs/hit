"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = false,
}: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 ${
        hover
          ? "transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const ProgramCard = ({
  title,
  description,
  icon,
  slug,
}: {
  title: string;
  description: string;
  icon: string;
  slug?: string;
}) => {
  return (
    <Card hover>
      <div className="space-y-4">
        <div className="text-5xl">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
        <div className="pt-4">
          {slug ? (
            <Link
              href={`/programs/${slug}`}
              className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors"
            >
              Learn more <span>→</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 text-orange-400 font-semibold">
              Learn more <span>→</span>
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
}) => {
  return (
    <Card hover>
      <div className="space-y-4">
        <div className="text-6xl">{image}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold bg-orange-600/20 text-orange-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const TestimonialCard = ({
  content,
  name,
  role,
  image,
}: {
  content: string;
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <Card>
      <div className="space-y-4">
        <div className="text-5xl">{image}</div>
        <p className="text-slate-100 italic">&quot;{content}&quot;</p>
        <div className="pt-4 border-t border-white/10">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </Card>
  );
};
