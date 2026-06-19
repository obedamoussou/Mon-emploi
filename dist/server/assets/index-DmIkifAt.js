import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SlidersHorizontal, RotateCcw, X, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { P as PublicLayout } from "./PublicLayout-BiL6fBka.js";
import { J as JobCard } from "./JobCard-C5Aa-BnN.js";
import { J as JobListSkeleton } from "./LoadingSkeleton-CJg3OLno.js";
import { E as EmptyState } from "./EmptyState-B865f-8B.js";
import { c as cn, f as formatNumber } from "./Logo-B678_UjR.js";
import { r as regions } from "./regions-CJF8QjG5.js";
import { c as categories } from "./categories-B2CZv2U0.js";
import { b as institutionTypes, i as institutions } from "./institutions-B27w5JL_.js";
import { k as kindLabels } from "./display-Fco6ESdN.js";
import { d as defaultFilters, c as useJobs } from "./queries-BcxZeW1T.js";
import { b as Route } from "./router-CdMBngvg.js";
import "./Avatar-B3PdWdr4.js";
import "./Modal-BMy7r_aJ.js";
import "./users-ad9wqLte.js";
import "./Badge-Dz0Y8txN.js";
import "@tanstack/react-query";
function pageItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("…");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("…");
  items.push(total);
  return items;
}
function Pagination({
  page,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) return null;
  const items = pageItems(page, totalPages);
  return /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-center gap-1.5", "aria-label": "Pagination", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn-secondary h-9 w-9 !px-0",
        onClick: () => onPageChange(page - 1),
        disabled: page <= 1,
        "aria-label": "Page précédente",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
      }
    ),
    items.map(
      (it, i) => it === "…" ? /* @__PURE__ */ jsx("span", { className: "px-1.5 text-sm text-ink-400", children: "…" }, `e${i}`) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(it),
          "aria-current": it === page ? "page" : void 0,
          className: cn(
            "inline-flex h-9 min-w-9 items-center justify-center rounded-xl px-2 text-sm font-semibold transition",
            it === page ? "bg-brand-600 text-white shadow-sm" : "text-ink-700 hover:bg-ink-100"
          ),
          children: it
        },
        it
      )
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn-secondary h-9 w-9 !px-0",
        onClick: () => onPageChange(page + 1),
        disabled: page >= totalPages,
        "aria-label": "Page suivante",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      }
    )
  ] });
}
const kinds = ["emploi", "stage", "concours", "appel-candidature"];
const contracts = [
  "CDI",
  "CDD",
  "Stage",
  "Concours",
  "Vacation",
  "Apprentissage",
  "Mission"
];
const datePostedOptions = [
  { value: "all", label: "Toutes les dates" },
  { value: "24h", label: "Dernières 24 h" },
  { value: "7d", label: "7 derniers jours" },
  { value: "30d", label: "30 derniers jours" }
];
function FiltersPanel({
  value,
  onChange,
  onReset,
  activeCount
}) {
  return /* @__PURE__ */ jsxs("aside", { className: "rounded-2xl border border-ink-100 bg-white shadow-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-ink-100 px-5 py-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "inline-flex items-center gap-2 font-display text-sm font-bold text-ink-900", children: [
        /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-4 w-4 text-brand-600" }),
        "Filtres",
        activeCount > 0 && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold text-white", children: activeCount })
      ] }),
      activeCount > 0 && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onReset,
          className: "inline-flex items-center gap-1 text-xs font-medium text-ink-500 transition hover:text-brand-600",
          children: [
            /* @__PURE__ */ jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
            "Réinitialiser"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "divide-y divide-ink-100", children: [
      /* @__PURE__ */ jsx(Section, { title: "Type d’opportunité", defaultOpen: true, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: kinds.map((k) => /* @__PURE__ */ jsx(
        ChipToggle,
        {
          active: value.kind === k,
          onClick: () => onChange({ kind: value.kind === k ? null : k }),
          children: kindLabels[k]
        },
        k
      )) }) }),
      /* @__PURE__ */ jsx(Section, { title: "Type de contrat", defaultOpen: true, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: contracts.map((c) => /* @__PURE__ */ jsx(
        ChipToggle,
        {
          active: value.contractType === c,
          onClick: () => onChange({ contractType: value.contractType === c ? null : c }),
          children: c
        },
        c
      )) }) }),
      /* @__PURE__ */ jsx(Section, { title: "Domaine", children: /* @__PURE__ */ jsx(
        SelectFilter,
        {
          value: value.categoryId ?? "",
          onChange: (v) => onChange({ categoryId: v || null }),
          placeholder: "Tous les domaines",
          options: categories.map((c) => ({ value: c.id, label: c.name }))
        }
      ) }),
      /* @__PURE__ */ jsx(Section, { title: "Région", children: /* @__PURE__ */ jsx(
        SelectFilter,
        {
          value: value.regionId ?? "",
          onChange: (v) => onChange({ regionId: v || null }),
          placeholder: "Toutes les régions",
          options: regions.map((r) => ({ value: r.id, label: r.name }))
        }
      ) }),
      /* @__PURE__ */ jsx(Section, { title: "Type d’organisme", children: /* @__PURE__ */ jsx(
        SelectFilter,
        {
          value: value.institutionType ?? "",
          onChange: (v) => onChange({ institutionType: v || null }),
          placeholder: "Tous les organismes",
          options: institutionTypes.map((t) => ({ value: t, label: t }))
        }
      ) }),
      /* @__PURE__ */ jsx(Section, { title: "Institution", children: /* @__PURE__ */ jsx(
        SelectFilter,
        {
          value: value.institutionId ?? "",
          onChange: (v) => onChange({ institutionId: v || null }),
          placeholder: "Toutes les institutions",
          options: institutions.slice().sort((a, b) => a.shortName.localeCompare(b.shortName)).map((i) => ({ value: i.id, label: i.shortName }))
        }
      ) }),
      /* @__PURE__ */ jsx(Section, { title: "Date de publication", defaultOpen: true, children: /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: datePostedOptions.map((opt) => /* @__PURE__ */ jsxs(
        "label",
        {
          className: "flex cursor-pointer items-center gap-2.5 text-sm text-ink-700",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                name: "datePosted",
                checked: value.datePosted === opt.value,
                onChange: () => onChange({ datePosted: opt.value }),
                className: "h-4 w-4 accent-brand-600"
              }
            ),
            opt.label
          ]
        },
        opt.value
      )) }) })
    ] })
  ] });
}
function Section({
  title,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs("div", { className: "px-5 py-4", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "flex w-full items-center justify-between text-sm font-semibold text-ink-800",
        children: [
          title,
          /* @__PURE__ */ jsx("span", { className: cn("text-ink-400 transition-transform", open && "rotate-180"), children: "⌄" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "overflow-hidden pt-3",
        children
      }
    )
  ] });
}
function ChipToggle({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition",
        active ? "border-brand-600 bg-brand-600 text-white shadow-sm" : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
      ),
      children
    }
  );
}
function SelectFilter({
  value,
  onChange,
  options,
  placeholder
}) {
  return /* @__PURE__ */ jsxs("select", { value, onChange: (e) => onChange(e.target.value), className: "input cursor-pointer", children: [
    /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
    options.map((o) => /* @__PURE__ */ jsx("option", { value: o.value, children: o.label }, o.value))
  ] });
}
const sortLabels = {
  recent: "Plus récentes",
  deadline: "Date limite proche",
  popularity: "Plus consultées",
  relevance: "Pertinence"
};
function OffresPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({
    from: Route.fullPath
  });
  const [mobileFilters, setMobileFilters] = useState(false);
  const filters = useMemo(() => ({
    ...defaultFilters,
    query: search.q ?? "",
    regionId: search.region ?? null,
    categoryId: search.categorie ?? null,
    contractType: search.contrat ?? null,
    kind: search.type ?? null,
    institutionType: search.organisme ?? null,
    institutionId: search.institution ?? null,
    datePosted: search.date ?? "all",
    sort: search.tri ?? "recent",
    page: search.page ?? 1
  }), [search]);
  const {
    data,
    isLoading,
    isFetching
  } = useJobs(filters);
  const filterValue = {
    kind: filters.kind,
    contractType: filters.contractType,
    categoryId: filters.categoryId,
    regionId: filters.regionId,
    institutionType: filters.institutionType,
    institutionId: filters.institutionId,
    datePosted: filters.datePosted
  };
  const activeCount = [filters.kind, filters.contractType, filters.categoryId, filters.regionId, filters.institutionType, filters.institutionId, filters.datePosted !== "all" ? filters.datePosted : null].filter(Boolean).length;
  function patchFilters(patch) {
    navigate({
      search: (prev) => ({
        ...prev,
        type: "kind" in patch ? patch.kind ?? void 0 : prev.type,
        contrat: "contractType" in patch ? patch.contractType ?? void 0 : prev.contrat,
        categorie: "categoryId" in patch ? patch.categoryId ?? void 0 : prev.categorie,
        region: "regionId" in patch ? patch.regionId ?? void 0 : prev.region,
        organisme: "institutionType" in patch ? patch.institutionType ?? void 0 : prev.organisme,
        institution: "institutionId" in patch ? patch.institutionId ?? void 0 : prev.institution,
        date: "datePosted" in patch ? patch.datePosted ?? void 0 : prev.date,
        page: 1
      })
    });
  }
  function resetFilters() {
    navigate({
      search: (prev) => ({
        q: prev.q,
        tri: prev.tri
      })
    });
  }
  function setSort(tri) {
    navigate({
      search: (prev) => ({
        ...prev,
        tri,
        page: 1
      })
    });
  }
  function setQuery(q) {
    navigate({
      search: (prev) => ({
        ...prev,
        q: q || void 0,
        page: 1
      })
    });
  }
  function setPage(page) {
    navigate({
      search: (prev) => ({
        ...prev,
        page
      })
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: "Offres, stages & concours" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-ink-500", children: "Parcourez toutes les opportunités du secteur public et postulez en ligne." }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 max-w-2xl", children: /* @__PURE__ */ jsx(SearchInput, { value: filters.query, onSubmit: setQuery }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-6 py-8 lg:grid-cols-[290px_1fr]", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "sticky top-24", children: /* @__PURE__ */ jsx(FiltersPanel, { value: filterValue, onChange: patchFilters, onReset: resetFilters, activeCount }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-600", children: [
            data ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-ink-900", children: formatNumber(data.total) }),
              " ",
              "opportunité",
              data.total > 1 ? "s" : "",
              " trouvée",
              data.total > 1 ? "s" : ""
            ] }) : "Recherche…",
            isFetching && !isLoading && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-brand-500", children: "Actualisation…" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setMobileFilters(true), className: "btn-secondary lg:hidden", children: [
              /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-4 w-4" }),
              "Filtres",
              activeCount > 0 && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-brand-600 px-1.5 text-[10px] font-bold text-white", children: activeCount })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden text-ink-500 sm:inline", children: "Trier :" }),
              /* @__PURE__ */ jsx("select", { value: filters.sort, onChange: (e) => setSort(e.target.value), className: "input w-auto cursor-pointer py-2", children: Object.keys(sortLabels).map((s) => /* @__PURE__ */ jsx("option", { value: s, children: sortLabels[s] }, s)) })
            ] })
          ] })
        ] }),
        isLoading ? /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: /* @__PURE__ */ jsx(JobListSkeleton, { count: 6 }) }) : data && data.items.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: data.items.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job, index: i }, job.id)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(Pagination, { page: data.page, totalPages: data.totalPages, onPageChange: setPage }) })
        ] }) : /* @__PURE__ */ jsx(EmptyState, { title: "Aucune opportunité trouvée", description: "Essayez d’élargir vos critères de recherche ou réinitialisez les filtres.", action: /* @__PURE__ */ jsx("button", { onClick: resetFilters, className: "btn-primary", children: "Réinitialiser les filtres" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: mobileFilters && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[90] lg:hidden", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "absolute inset-0 bg-ink-950/50 backdrop-blur-sm", onClick: () => setMobileFilters(false) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        x: "-100%"
      }, animate: {
        x: 0
      }, exit: {
        x: "-100%"
      }, transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }, className: "absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto bg-ink-50 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display font-bold text-ink-900", children: "Filtres" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setMobileFilters(false), className: "rounded-lg p-1.5 text-ink-500 hover:bg-ink-100", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsx(FiltersPanel, { value: filterValue, onChange: patchFilters, onReset: resetFilters, activeCount }),
        /* @__PURE__ */ jsx("button", { onClick: () => setMobileFilters(false), className: "btn-primary mt-4 w-full", children: "Voir les résultats" })
      ] })
    ] }) })
  ] });
}
function SearchInput({
  value,
  onSubmit
}) {
  const [local, setLocal] = useState(value);
  return /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    onSubmit(local);
  }, className: "relative", children: [
    /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" }),
    /* @__PURE__ */ jsx("input", { value: local, onChange: (e) => setLocal(e.target.value), placeholder: "Métier, mot-clé, organisme…", className: cn("input h-12 pl-12 pr-28 text-[15px]") }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary absolute right-1.5 top-1.5 h-9", children: "Rechercher" })
  ] });
}
export {
  OffresPage as component
};
