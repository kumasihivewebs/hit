import { COMMUNITY_EVENTS, ALUMNI_SPOTLIGHT, COMMUNITY_STATS } from "@/constants/events";
import { OPEN_ROLES, PARTNER_COMPANIES, HIRING_STATS } from "@/constants/jobs";
import { PROGRAMS } from "@/constants/programs";
import { RESEARCH_AREAS, RECENT_PAPERS, RESEARCH_STATS } from "@/constants/research";

function getBackendBaseUrl() {
  const baseUrl =
    process.env.BACKEND_INTERNAL_URL?.trim() ||
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
    "http://localhost:8000/api";

  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

async function fetchBackendJson<T>(path: string): Promise<T> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${getBackendBaseUrl()}${normalizedPath}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Backend request failed for ${normalizedPath}`);
  }

  return response.json() as Promise<T>;
}

export type FrontendProgram = (typeof PROGRAMS)[number];
export type FrontendEvent = (typeof COMMUNITY_EVENTS)[number];
export type FrontendAlumni = (typeof ALUMNI_SPOTLIGHT)[number];
export type FrontendCommunityStat = (typeof COMMUNITY_STATS)[number];
export type FrontendRole = (typeof OPEN_ROLES)[number];
export type FrontendPartner = (typeof PARTNER_COMPANIES)[number];
export type FrontendHiringStat = (typeof HIRING_STATS)[number];
export type FrontendResearchArea = (typeof RESEARCH_AREAS)[number];
export type FrontendResearchPaper = (typeof RECENT_PAPERS)[number];
export type FrontendResearchStat = (typeof RESEARCH_STATS)[number];

type ProgramsResponse = {
  programs: Array<{
    program_id: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
    duration: string;
    fee: string;
    level: string;
    color: string;
    tagline: string;
    curriculum: string[];
    projects: string[];
    outcomes: string[];
    companies: string[];
    prerequisites: string;
  }>;
};

type ProgramDetailResponse = {
  program: ProgramsResponse["programs"][number];
};

type CommunityOverviewResponse = {
  events: Array<{
    title: string;
    slug: string;
    date: string;
    event_type: string;
    location: string;
    description: string;
    attendees: string;
    prize: string;
  }>;
  alumni: Array<{
    name: string;
    cohort: string;
    program: string;
    current_role: string;
    achievement: string;
    image_emoji: string;
  }>;
  stats: Array<{
    label: string;
    value: string;
    order: number;
  }>;
};

type CareersOverviewResponse = {
  roles: Array<{
    title: string;
    employment_type: string;
    location: string;
    department: string;
    description: string;
    requirements: string[];
    salary: string;
    order: number;
  }>;
  partners: Array<{
    name: string;
    logo_emoji: string;
    roles: string;
    order: number;
  }>;
  stats: Array<{
    label: string;
    value: string;
    order: number;
  }>;
};

type ResearchOverviewResponse = {
  areas: Array<{
    area_id: string;
    title: string;
    icon: string;
    description: string;
    tags: string[];
    lead: string;
    status: string;
    papers: number;
    order: number;
  }>;
  papers: Array<{
    paper_id: string;
    title: string;
    authors: string[];
    conference: string;
    year: number;
    area: string;
    link: string;
    order: number;
  }>;
  stats: Array<{
    label: string;
    value: string;
    order: number;
  }>;
};

type AdmissionContentResponse = {
  steps: Array<{
    step_code: string;
    title: string;
    description: string;
    order: number;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    order: number;
  }>;
};

export async function getProgramsContent(): Promise<FrontendProgram[]> {
  try {
    const data = await fetchBackendJson<ProgramsResponse>("/programs/");
    return data.programs.map((program) => ({
      id: program.program_id,
      slug: program.slug,
      title: program.title,
      description: program.description,
      icon: program.icon,
      duration: program.duration,
      fee: program.fee,
      level: program.level,
      color: program.color,
      tagline: program.tagline,
      curriculum: program.curriculum,
      projects: program.projects,
      outcomes: program.outcomes,
      companies: program.companies,
      prerequisites: program.prerequisites,
    }));
  } catch {
    return PROGRAMS;
  }
}

export async function getProgramDetailContent(slug: string): Promise<FrontendProgram | null> {
  try {
    const data = await fetchBackendJson<ProgramDetailResponse>(`/programs/${slug}/`);
    return {
      id: data.program.program_id,
      slug: data.program.slug,
      title: data.program.title,
      description: data.program.description,
      icon: data.program.icon,
      duration: data.program.duration,
      fee: data.program.fee,
      level: data.program.level,
      color: data.program.color,
      tagline: data.program.tagline,
      curriculum: data.program.curriculum,
      projects: data.program.projects,
      outcomes: data.program.outcomes,
      companies: data.program.companies,
      prerequisites: data.program.prerequisites,
    };
  } catch {
    return PROGRAMS.find((program) => program.slug === slug) ?? null;
  }
}

export async function getCommunityContent() {
  try {
    const data = await fetchBackendJson<CommunityOverviewResponse>("/community/overview/");
    return {
      events: data.events.map((event, index) => ({
        id: String(index + 1),
        title: event.title,
        date: event.date,
        type: event.event_type,
        location: event.location,
        description: event.description,
        attendees: event.attendees,
        prize: event.prize || null,
      })),
      alumni: data.alumni.map((alum, index) => ({
        id: String(index + 1),
        name: alum.name,
        cohort: alum.cohort,
        program: alum.program,
        currentRole: alum.current_role,
        achievement: alum.achievement,
        image: alum.image_emoji,
      })),
      stats: data.stats.map((stat) => ({
        label: stat.label,
        value: stat.value,
      })),
    };
  } catch {
    return {
      events: COMMUNITY_EVENTS,
      alumni: ALUMNI_SPOTLIGHT,
      stats: COMMUNITY_STATS,
    };
  }
}

export async function getCareersContent() {
  try {
    const data = await fetchBackendJson<CareersOverviewResponse>("/careers/overview/");
    return {
      roles: data.roles.map((role, index) => ({
        id: String(index + 1),
        title: role.title,
        type: role.employment_type,
        location: role.location,
        department: role.department,
        description: role.description,
        requirements: role.requirements,
        salary: role.salary,
      })),
      partners: data.partners.map((partner) => ({
        name: partner.name,
        logo: partner.logo_emoji,
        roles: partner.roles,
      })),
      stats: data.stats.map((stat) => ({
        label: stat.label,
        value: stat.value,
      })),
    };
  } catch {
    return {
      roles: OPEN_ROLES,
      partners: PARTNER_COMPANIES,
      stats: HIRING_STATS,
    };
  }
}

export async function getResearchContent() {
  try {
    const data = await fetchBackendJson<ResearchOverviewResponse>("/research/overview/");
    return {
      areas: data.areas.map((area) => ({
        id: area.area_id,
        title: area.title,
        icon: area.icon,
        description: area.description,
        tags: area.tags,
        lead: area.lead,
        status: area.status,
        papers: area.papers,
      })),
      papers: data.papers.map((paper, index) => ({
        id: paper.paper_id || String(index + 1),
        title: paper.title,
        authors: paper.authors,
        conference: paper.conference,
        year: paper.year,
        area: paper.area,
        link: paper.link,
      })),
      stats: data.stats.map((stat) => ({
        label: stat.label,
        value: stat.value,
      })),
    };
  } catch {
    return {
      areas: RESEARCH_AREAS,
      papers: RECENT_PAPERS,
      stats: RESEARCH_STATS,
    };
  }
}

export async function getAdmissionsContent() {
  try {
    const data = await fetchBackendJson<AdmissionContentResponse>("/admission/content/");
    return {
      steps: data.steps.map((step) => ({
        step: step.step_code,
        title: step.title,
        description: step.description,
      })),
      faqs: data.faqs.map((faq) => ({
        q: faq.question,
        a: faq.answer,
      })),
    };
  } catch {
    return {
      steps: [
        {
          step: "01",
          title: "Submit Application",
          description:
            "Share your contact details, course interest, background, and schedule preference.",
        },
        {
          step: "02",
          title: "Admissions Review",
          description:
            "Your application is saved in the admissions backend so the team can review fit, availability, and any follow-up questions.",
        },
        {
          step: "03",
          title: "Admissions Call",
          description:
            "The team can reach out to confirm your goals, answer questions, and explain available discount slots.",
        },
        {
          step: "04",
          title: "Enrollment",
          description:
            "Accepted applicants receive the next steps for payment, scheduling, and cohort onboarding.",
        },
      ],
      faqs: [
        {
          q: "Do I need prior experience to apply?",
          a: "Several courses are beginner friendly. IoT and fabrication benefit from curiosity about hardware or design, but the application is built to understand your goals rather than screen out new learners.",
        },
        { q: "How long are the courses?", a: "The short courses run for 3 months." },
        {
          q: "What is the cost of the programs?",
          a: "The current published fee in the HiT materials is GHC 1200 per short course. Early discount slots are available for selected applicants.",
        },
        {
          q: "Can I study part-time or remotely?",
          a: "School hours are listed as 10 am to 3 pm, with evening and weekend options also available. Speak to admissions to confirm the option for your course.",
        },
        {
          q: "Will I receive a certificate?",
          a: "The HiT materials reference certificates awarded through the KNUST pathway for these short courses.",
        },
        {
          q: "What happens after I submit?",
          a: "Your details are stored in the admissions backend and the team can follow up for review, scheduling, and next steps.",
        },
      ],
    };
  }
}
