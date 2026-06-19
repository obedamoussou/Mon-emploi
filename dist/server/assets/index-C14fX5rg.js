import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { Building2, Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { P as PublicLayout } from "./PublicLayout-BiL6fBka.js";
import { I as InstitutionCard } from "./InstitutionCard-BnQdmEnr.js";
import { I as InstitutionCardSkeleton } from "./LoadingSkeleton-CJg3OLno.js";
import { E as EmptyState } from "./EmptyState-B865f-8B.js";
import { b as useInstitutions } from "./queries-BcxZeW1T.js";
import { b as institutionTypes } from "./institutions-B27w5JL_.js";
import { f as formatNumber, c as cn } from "./Logo-B678_UjR.js";
import { a as Route } from "./router-CdMBngvg.js";
import "framer-motion";
import "./Avatar-B3PdWdr4.js";
import "./Modal-BMy7r_aJ.js";
import "./users-ad9wqLte.js";
import "./Badge-Dz0Y8txN.js";
import "./regions-CJF8QjG5.js";
import "@tanstack/react-query";
function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
function OrganismesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({
    from: Route.fullPath
  });
  const [query, setQuery] = useState(search.q ?? "");
  const debounced = useDebouncedValue(query, 250);
  const {
    data,
    isLoading
  } = useInstitutions(debounced);
  const filtered = useMemo(() => {
    if (!data) return [];
    return search.type ? data.filter((i) => i.type === search.type) : data;
  }, [data, search.type]);
  const totalJobs = filtered.reduce((sum, i) => sum + i.jobCount, 0);
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-brand-600", children: [
        /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wide", children: "Annuaire officiel" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: "Organismes & institutions partenaires" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 max-w-2xl text-ink-500", children: "Découvrez les ministères, mairies, entreprises publiques, ONG et universités qui recrutent sur la plateforme nationale." }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" }),
        /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Rechercher un organisme, un secteur…", className: "input h-12 pl-12 text-[15px]" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsx(TypeChip, { active: !search.type, onClick: () => navigate({
          search: (p) => ({
            ...p,
            type: void 0
          })
        }), children: "Tous" }),
        institutionTypes.map((t) => /* @__PURE__ */ jsx(TypeChip, { active: search.type === t, onClick: () => navigate({
          search: (p) => ({
            ...p,
            type: t
          })
        }), children: t }, t))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page py-8", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-5 text-sm text-ink-600", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-ink-900", children: filtered.length }),
        " organismes ·",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-bold text-accent-700", children: formatNumber(totalJobs) }),
        " offres au total"
      ] }),
      isLoading ? /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: Array.from({
        length: 8
      }).map((_, i) => /* @__PURE__ */ jsx(InstitutionCardSkeleton, {}, i)) }) : filtered.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((inst, i) => /* @__PURE__ */ jsx(InstitutionCard, { institution: inst, index: i }, inst.id)) }) : /* @__PURE__ */ jsx(EmptyState, { icon: /* @__PURE__ */ jsx(Building2, { className: "h-7 w-7" }), title: "Aucun organisme trouvé", description: "Modifiez votre recherche ou changez de catégorie." })
    ] })
  ] });
}
function TypeChip({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsx("button", { onClick, className: cn("rounded-full border px-3.5 py-1.5 text-xs font-semibold transition", active ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700"), children });
}
export {
  OrganismesPage as component
};
