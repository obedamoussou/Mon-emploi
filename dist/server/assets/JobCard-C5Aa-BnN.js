import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame, ArrowUpRight, MapPin, Users, Clock, Bookmark } from "lucide-react";
import { A as Avatar } from "./Avatar-B3PdWdr4.js";
import { B as Badge } from "./Badge-Dz0Y8txN.js";
import { a as institutionById } from "./institutions-B27w5JL_.js";
import { a as regionName } from "./regions-CJF8QjG5.js";
import { k as kindLabels, a as kindVariant, c as contractVariant } from "./display-Fco6ESdN.js";
import { d as deadlineLabel, t as timeAgo, c as cn, e as formatSalary } from "./Logo-B678_UjR.js";
function JobCard({ job, index = 0 }) {
  const inst = institutionById(job.institutionId);
  const deadline = deadlineLabel(job.deadline);
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.35, delay: Math.min(index * 0.04, 0.24) },
      className: "group relative",
      children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/offres/$slug",
            params: { slug: job.slug },
            className: "block rounded-2xl border border-ink-100 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover sm:p-5",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    initials: inst?.logoInitials ?? "ME",
                    color: inst?.logoColor,
                    size: "lg",
                    className: "!h-11 !w-11 !rounded-xl !text-sm sm:!h-14 sm:!w-14 sm:!text-base"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Badge, { variant: kindVariant[job.kind], children: kindLabels[job.kind] }),
                    job.urgent && /* @__PURE__ */ jsx(Badge, { variant: "danger", icon: /* @__PURE__ */ jsx(Flame, { className: "h-3 w-3" }), children: "Urgent" }),
                    job.featured && /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "À la une" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-2 line-clamp-2 font-display text-[15px] font-bold text-ink-900 transition group-hover:text-brand-700 sm:text-base", children: job.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-0.5 truncate text-sm text-ink-500", children: inst?.name })
                ] }),
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-ink-300 transition group-hover:text-brand-600" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-2 text-sm leading-relaxed text-ink-500", children: job.summary }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-500 sm:mt-4 sm:gap-x-4", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-ink-400" }),
                  /* @__PURE__ */ jsxs("span", { className: "truncate", children: [
                    job.city,
                    ", ",
                    regionName(job.regionId)
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Badge, { variant: contractVariant[job.contractType], children: job.contractType }),
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-ink-400" }),
                  job.applicants,
                  " candidats"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3.5 flex items-center justify-between gap-2 border-t border-ink-100 pt-3 sm:mt-4", children: [
                /* @__PURE__ */ jsxs("span", { className: "truncate text-xs text-ink-400", children: [
                  "Publié ",
                  timeAgo(job.publishedAt)
                ] }),
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: cn(
                      "inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold",
                      deadline.expired ? "text-ink-400" : deadline.urgent ? "text-red-600" : "text-ink-600"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
                      deadline.text
                    ]
                  }
                )
              ] }),
              job.salary && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-semibold text-accent-700", children: formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute right-3 top-[4.4rem] hidden rounded-lg p-1.5 text-ink-300 transition hover:bg-brand-50 hover:text-brand-600 sm:right-4 sm:top-[4.6rem] sm:block",
            "aria-label": "Sauvegarder l’offre",
            onClick: (e) => e.preventDefault(),
            children: /* @__PURE__ */ jsx(Bookmark, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
}
function JobCardCompact({ job }) {
  const inst = institutionById(job.institutionId);
  const deadline = deadlineLabel(job.deadline);
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/offres/$slug",
      params: { slug: job.slug },
      className: "flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-3 transition hover:border-brand-200 hover:bg-brand-50/30",
      children: [
        /* @__PURE__ */ jsx(Avatar, { initials: inst?.logoInitials ?? "TL", color: inst?.logoColor, className: "!rounded-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: job.title }),
          /* @__PURE__ */ jsxs("p", { className: "truncate text-xs text-ink-500", children: [
            inst?.shortName,
            " · ",
            job.city
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "shrink-0 text-xs font-medium text-ink-400", children: deadline.text })
      ]
    }
  );
}
export {
  JobCard as J,
  JobCardCompact as a
};
