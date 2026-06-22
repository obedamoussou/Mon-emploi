import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
function formatNumber(value) {
  return new Intl.NumberFormat("fr-FR").format(value);
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
const blasonBenin = "/assets/blason-benin-B_eVDPn_.svg";
function Logo({
  variant = "dark",
  className
}) {
  const isLight = variant === "light";
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/",
      className: cn("group flex items-center gap-2.5", className),
      "aria-label": "Président de la République du Bénin — accueil",
      children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-100 bg-white p-1 shadow-sm", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: blasonBenin,
            alt: "Armoiries de la République du Bénin",
            className: "h-full w-full object-contain",
            width: 40,
            height: 40
          }
        ) }),
        /* @__PURE__ */ jsxs("span", { className: "flex max-w-[12.5rem] flex-col leading-tight sm:max-w-none", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "font-display text-[13px] font-extrabold leading-tight tracking-tight sm:text-sm",
                isLight ? "text-white" : "text-ink-900"
              ),
              children: "Président de la République du Bénin"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em]",
                isLight ? "text-white/60" : "text-ink-400"
              ),
              children: "Portail National de l’Emploi"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Logo as L,
  formatDate as a,
  formatSalary as b,
  cn as c,
  deadlineLabel as d,
  delay as e,
  formatNumber as f,
  daysUntil as g,
  initials as i,
  slugify as s,
  timeAgo as t
};
