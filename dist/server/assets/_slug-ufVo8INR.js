import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight, Flame, Building2, MapPin, Layers, Clock, Eye, Target, Users, Briefcase, CheckCircle2, Banknote, CalendarClock, Globe, Send, Bookmark, Share2 } from "lucide-react";
import { P as PublicLayout } from "./PublicLayout-BiL6fBka.js";
import { A as Avatar } from "./Avatar-B3PdWdr4.js";
import { B as Badge } from "./Badge-Dz0Y8txN.js";
import { a as JobCardCompact } from "./JobCard-C5Aa-BnN.js";
import { S as Skeleton } from "./LoadingSkeleton-CJg3OLno.js";
import { f as Route, N as NotFound } from "./router-CdMBngvg.js";
import { e as useJob, h as useRelatedJobs } from "./queries-BcxZeW1T.js";
import { a as institutionById } from "./institutions-B27w5JL_.js";
import { a as regionName } from "./regions-CJF8QjG5.js";
import { a as categoryName } from "./categories-B2CZv2U0.js";
import { k as kindLabels, a as kindVariant, c as contractVariant } from "./display-Fco6ESdN.js";
import { d as deadlineLabel, t as timeAgo, f as formatNumber, e as formatSalary, b as formatDate, c as cn } from "./Logo-B678_UjR.js";
import "react";
import "./Modal-BMy7r_aJ.js";
import "./users-ad9wqLte.js";
import "@tanstack/react-query";
function JobDetailPage() {
  const {
    slug
  } = Route.useParams();
  const {
    data: job,
    isLoading
  } = useJob(slug);
  const {
    data: related
  } = useRelatedJobs(job);
  if (isLoading) return /* @__PURE__ */ jsx(JobDetailSkeleton, {});
  if (!job) return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx(NotFound, {}) });
  const inst = institutionById(job.institutionId);
  const deadline = deadlineLabel(job.deadline);
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-6", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-wrap items-center gap-1.5 text-xs text-ink-400", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-brand-600", children: "Accueil" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsx(Link, { to: "/offres", className: "hover:text-brand-600", children: "Offres" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsx("span", { className: "truncate text-ink-600", children: job.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col gap-5 sm:flex-row sm:items-start", children: [
        /* @__PURE__ */ jsx(Avatar, { initials: inst?.logoInitials ?? "TL", color: inst?.logoColor, size: "xl", className: "!rounded-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx(Badge, { variant: kindVariant[job.kind], children: kindLabels[job.kind] }),
            /* @__PURE__ */ jsx(Badge, { variant: contractVariant[job.contractType], children: job.contractType }),
            job.urgent && /* @__PURE__ */ jsx(Badge, { variant: "danger", icon: /* @__PURE__ */ jsx(Flame, { className: "h-3 w-3" }), children: "Urgent" }),
            job.featured && /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "À la une" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: job.title }),
          inst && /* @__PURE__ */ jsxs(Link, { to: "/organismes/$slug", params: {
            slug: inst.slug
          }, className: "mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 transition hover:text-brand-600", children: [
            /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
            inst.name
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-ink-400" }),
              " ",
              job.city,
              ", ",
              regionName(job.regionId)
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Layers, { className: "h-4 w-4 text-ink-400" }),
              " ",
              categoryName(job.categoryId)
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-ink-400" }),
              " Publié ",
              timeAgo(job.publishedAt)
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-ink-400" }),
              " ",
              formatNumber(job.views),
              " vues"
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 space-y-8", children: [
        /* @__PURE__ */ jsx(Section, { title: "Présentation du poste", children: /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-ink-600", children: job.description }) }),
        /* @__PURE__ */ jsx(ListSection, { title: "Missions principales", icon: /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }), items: job.missions, variant: "bullet" }),
        /* @__PURE__ */ jsx(ListSection, { title: "Profil recherché", icon: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }), items: job.profile, variant: "check" }),
        /* @__PURE__ */ jsx(ListSection, { title: "Conditions & déroulement", icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }), items: job.conditions, variant: "bullet" }),
        job.benefits.length > 0 && /* @__PURE__ */ jsx(Section, { title: "Avantages", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: job.benefits.map((b) => /* @__PURE__ */ jsx(Badge, { variant: "accent", className: "px-3 py-1.5 text-sm", children: b }, b)) }) }),
        inst && /* @__PURE__ */ jsx(Section, { title: "À propos de l’organisme", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: inst.logoInitials, color: inst.logoColor, size: "lg", className: "!rounded-2xl" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink-900", children: inst.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-ink-500", children: inst.description }),
            /* @__PURE__ */ jsxs(Link, { to: "/organismes/$slug", params: {
              slug: inst.slug
            }, className: "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800", children: [
              "Voir le profil de l’organisme",
              /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-5 lg:sticky lg:top-24 lg:self-start", children: [
        /* @__PURE__ */ jsx(ApplyCard, { job, deadlineUrgent: deadline.urgent, deadlineText: deadline.text, expired: deadline.expired }),
        related && related.length > 0 && /* @__PURE__ */ jsxs("div", { className: "card p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-sm font-bold text-ink-900", children: "Offres similaires" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-2.5", children: related.map((r) => /* @__PURE__ */ jsx(JobCardCompact, { job: r }, r.id)) })
        ] })
      ] })
    ] })
  ] });
}
function ApplyCard({
  job,
  deadlineText,
  deadlineUrgent,
  expired
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "card overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-5", children: [
      job.salary && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl bg-accent-50 p-3", children: [
        /* @__PURE__ */ jsx(Banknote, { className: "h-5 w-5 text-accent-600" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-accent-700", children: "Rémunération" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-accent-800", children: formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("dl", { className: "space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs(InfoRow, { icon: /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4" }), label: "Date limite", children: [
          /* @__PURE__ */ jsx("span", { className: cn("font-semibold", deadlineUrgent ? "text-red-600" : "text-ink-900"), children: formatDate(job.deadline) }),
          /* @__PURE__ */ jsx("span", { className: "block text-xs text-ink-400", children: deadlineText })
        ] }),
        /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }), label: "Type de contrat", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900", children: job.contractType }) }),
        /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), label: "Mode de travail", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900", children: job.workMode }) }),
        /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(Layers, { className: "h-4 w-4" }), label: "Expérience", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900", children: job.experienceLevel }) }),
        /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }), label: "Postes à pourvoir", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900", children: job.positions }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "rounded-lg bg-ink-50 px-3 py-2 text-center text-xs text-ink-500", children: [
        "Référence : ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-700", children: job.reference })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 border-t border-ink-100 p-5", children: [
      /* @__PURE__ */ jsxs("button", { disabled: expired, onClick: () => navigate({
        to: "/postuler/$slug",
        params: {
          slug: job.slug
        }
      }), className: "btn-primary w-full", children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        expired ? "Candidatures closes" : "Postuler maintenant"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxs("button", { className: "btn-secondary", children: [
          /* @__PURE__ */ jsx(Bookmark, { className: "h-4 w-4" }),
          " Sauver"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "btn-secondary", children: [
          /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
          " Partager"
        ] })
      ] })
    ] })
  ] });
}
function InfoRow({
  icon,
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("dt", { className: "inline-flex items-center gap-2 text-ink-500", children: [
      /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsx("dd", { className: "text-right", children })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { className: "card p-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children })
  ] });
}
function ListSection({
  title,
  icon,
  items,
  variant
}) {
  return /* @__PURE__ */ jsxs("section", { className: "card p-6", children: [
    /* @__PURE__ */ jsxs("h2", { className: "inline-flex items-center gap-2 font-display text-lg font-bold text-ink-900", children: [
      /* @__PURE__ */ jsx("span", { className: "text-brand-600", children: icon }),
      title
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm leading-relaxed text-ink-600", children: [
      variant === "check" ? /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent-600" }) : /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" }),
      item
    ] }, i)) })
  ] });
}
function JobDetailSkeleton() {
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-8", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-48" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-5", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-20 w-20 rounded-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-2/3" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px]", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: Array.from({
        length: 4
      }).map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full rounded-2xl" }, i)) }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-96 w-full rounded-2xl" })
    ] })
  ] });
}
export {
  JobDetailPage as component
};
