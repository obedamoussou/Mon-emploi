import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
function formatNumber(value) {
  return new Intl.NumberFormat("fr-FR").format(value);
}
function compactNumber(value) {
  return new Intl.NumberFormat("fr-FR", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);
}
function formatSalary(min, max, currency = "FCFA", period = "mois") {
  const fmt = (n) => new Intl.NumberFormat("fr-FR").format(n);
  return `${fmt(min)} – ${fmt(max)} ${currency} / ${period}`;
}
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
const MS_DAY = 1e3 * 60 * 60 * 24;
function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / MS_DAY);
  if (days <= 0) return "aujourd'hui";
  if (days === 1) return "hier";
  if (days < 7) return `il y a ${days} jours`;
  if (days < 30) return `il y a ${Math.floor(days / 7)} sem.`;
  if (days < 365) return `il y a ${Math.floor(days / 30)} mois`;
  return `il y a ${Math.floor(days / 365)} an(s)`;
}
function daysUntil(iso) {
  return Math.ceil((new Date(iso).getTime() - Date.now()) / MS_DAY);
}
function deadlineLabel(iso) {
  const days = daysUntil(iso);
  if (days < 0) return { text: "Clôturée", urgent: false, expired: true };
  if (days === 0) return { text: "Dernier jour !", urgent: true, expired: false };
  if (days === 1) return { text: "Expire demain", urgent: true, expired: false };
  if (days <= 5) return { text: `${days} jours restants`, urgent: true, expired: false };
  return { text: `${days} jours restants`, urgent: false, expired: false };
}
function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
}
function slugify(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function Logo({
  variant = "dark",
  className
}) {
  const isLight = variant === "light";
  return /* @__PURE__ */ jsxs(Link, { to: "/", className: cn("group flex items-center gap-2.5", className), "aria-label": "Mon Emploi — accueil", children: [
    /* @__PURE__ */ jsx("span", { className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "h-5 w-5 text-white", fill: "none", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 2L3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4z",
          fill: "currentColor",
          fillOpacity: "0.18"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 2L3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "m8.5 12 2.3 2.3L15.5 9.7", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-none", children: [
      /* @__PURE__ */ jsxs(
        "span",
        {
          className: cn(
            "font-display text-[17px] font-extrabold tracking-tight",
            isLight ? "text-white" : "text-ink-900"
          ),
          children: [
            "Mon",
            /* @__PURE__ */ jsx("span", { className: "text-brand-500", children: " Emploi" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "text-[10px] font-medium uppercase tracking-[0.14em]",
            isLight ? "text-white/60" : "text-ink-400"
          ),
          children: "Portail National de l’Emploi"
        }
      )
    ] })
  ] });
}
export {
  Logo as L,
  compactNumber as a,
  formatDate as b,
  cn as c,
  deadlineLabel as d,
  formatSalary as e,
  formatNumber as f,
  delay as g,
  daysUntil as h,
  initials as i,
  slugify as s,
  timeAgo as t
};
