import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Users, CalendarDays, ChevronRight, BadgeCheck, MapPin, Building2, Mail, Phone, Globe } from "lucide-react";
import { P as PublicLayout } from "./PublicLayout-bS74Op3v.js";
import { f as formatNumber, A as Avatar, B as Badge } from "./Badge-txxXTAF8.js";
import { J as JobCard } from "./JobCard-DMHoNNBS.js";
import { E as EmptyState } from "./EmptyState-B865f-8B.js";
import { S as Skeleton } from "./LoadingSkeleton-C8n0RdN-.js";
import { e as Route, N as NotFound } from "./router-B2_hfGdf.js";
import { l as useInstitution, m as useInstitutionJobs, b as regionName } from "./queries-OLKb4Xlw.js";
import "react";
import "./display-Fco6ESdN.js";
import "@tanstack/react-query";
function InstitutionPage() {
  const {
    slug
  } = Route.useParams();
  const {
    data: inst,
    isLoading
  } = useInstitution(slug);
  const {
    data: jobs
  } = useInstitutionJobs(inst?.id);
  if (isLoading) {
    return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs("div", { className: "container-page py-10", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-48 w-full rounded-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: Array.from({
        length: 3
      }).map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-40 rounded-2xl" }, i)) })
    ] }) });
  }
  if (!inst) return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx(NotFound, {}) });
  const stats = [{
    icon: Briefcase,
    label: "Offres ouvertes",
    value: formatNumber(inst.jobCount)
  }, {
    icon: Users,
    label: "Agents",
    value: formatNumber(inst.employees)
  }, {
    icon: CalendarDays,
    label: "Depuis",
    value: String(inst.foundedYear)
  }];
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden border-b border-ink-100 bg-ink-950", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-30 blur-3xl", style: {
        backgroundColor: inst.logoColor
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container-page relative py-10", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-1.5 text-xs text-white/50", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white", children: "Accueil" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsx(Link, { to: "/organismes", className: "hover:text-white", children: "Organismes" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsx("span", { className: "truncate text-white/80", children: inst.shortName })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-5 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: inst.logoInitials, color: inst.logoColor, size: "xl", className: "!h-24 !w-24 !rounded-3xl !text-3xl ring-4 ring-white/10" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "brand", children: inst.type }),
              inst.verified && /* @__PURE__ */ jsx(Badge, { variant: "accent", icon: /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3" }), children: "Organisme vérifié" })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl", children: inst.name }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1.5 inline-flex items-center gap-1.5 text-sm text-white/60", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
              " ",
              inst.city,
              ", ",
              regionName(inst.regionId),
              " · Secteur",
              " ",
              inst.sector
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid max-w-2xl gap-3 sm:grid-cols-3", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5 text-brand-300" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-xl font-bold text-white", children: s.value }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-white/50", children: s.label })
        ] }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-8 py-8 lg:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 space-y-8", children: [
        /* @__PURE__ */ jsxs(motion.section, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "card p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Présentation" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-ink-600", children: inst.presentation })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-display text-lg font-bold text-ink-900", children: [
              "Offres publiées",
              jobs ? ` (${jobs.length})` : ""
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/offres", search: {
              institution: inst.id
            }, className: "inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800", children: [
              "Tout voir ",
              /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            ] })
          ] }),
          jobs && jobs.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: jobs.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job, index: i }, job.id)) }) : /* @__PURE__ */ jsx(EmptyState, { icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-7 w-7" }), title: "Aucune offre en cours", description: "Cet organisme n’a pas d’offre ouverte pour le moment." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("aside", { className: "lg:sticky lg:top-24 lg:self-start", children: /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900", children: [
          /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-brand-600" }),
          " Coordonnées"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "Adresse", children: inst.address }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), label: "E-mail", children: /* @__PURE__ */ jsx("a", { href: `mailto:${inst.email}`, className: "text-brand-700 hover:underline", children: inst.email }) }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "Téléphone", children: inst.phone }),
          /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), label: "Site web", children: /* @__PURE__ */ jsx("a", { href: `https://${inst.website}`, target: "_blank", rel: "noreferrer", className: "text-brand-700 hover:underline", children: inst.website }) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/offres", search: {
          institution: inst.id
        }, className: "btn-primary mt-6 w-full", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
          " Voir les offres"
        ] })
      ] }) })
    ] })
  ] });
}
function ContactRow({
  icon,
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-ink-400", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-0.5 break-words text-ink-700", children })
    ] })
  ] });
}
export {
  InstitutionPage as component
};
