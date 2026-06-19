import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MapPin, Briefcase } from "lucide-react";
import { A as Avatar } from "./Avatar-B3PdWdr4.js";
import { B as Badge } from "./Badge-Dz0Y8txN.js";
import { a as regionName } from "./regions-CJF8QjG5.js";
function InstitutionCard({
  institution,
  index = 0
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-40px" },
      transition: { duration: 0.35, delay: Math.min(index * 0.05, 0.3) },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/organismes/$slug",
          params: { slug: institution.slug },
          className: "group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  initials: institution.logoInitials,
                  color: institution.logoColor,
                  size: "lg",
                  className: "!rounded-2xl"
                }
              ),
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 text-ink-300 transition group-hover:text-brand-600" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("h3", { className: "line-clamp-1 font-display text-base font-bold text-ink-900 transition group-hover:text-brand-700", children: institution.shortName }),
              institution.verified && /* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4 shrink-0 text-brand-500" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 line-clamp-2 text-sm text-ink-600", children: institution.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-500", children: institution.description }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "brand", children: institution.type }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-ink-500", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-ink-400" }),
                regionName(institution.regionId)
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "ml-auto inline-flex items-center gap-1 text-xs font-semibold text-accent-700", children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "h-3.5 w-3.5" }),
                institution.jobCount,
                " offres"
              ] })
            ] })
          ]
        }
      )
    }
  );
}
export {
  InstitutionCard as I
};
