import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, PartyPopper, FileText, ListChecks, Settings2, Rocket, CalendarClock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { L as Logo, c as cn } from "./Logo-B1bRgxRh.js";
import { B as Badge } from "./Badge-DEqXy-r-.js";
import { S as Stepper } from "./Stepper-CGkZ-Pzf.js";
import { a as regions } from "./regions-BTAjTKaz.js";
import { c as categories } from "./categories-B2CZv2U0.js";
import { k as kindLabels } from "./display-Fco6ESdN.js";
const steps = [{
  id: 1,
  label: "Informations",
  icon: FileText
}, {
  id: 2,
  label: "Description",
  icon: ListChecks
}, {
  id: 3,
  label: "Profil",
  icon: Settings2
}, {
  id: 4,
  label: "Publication",
  icon: Rocket
}];
const kinds = ["emploi", "stage", "concours", "appel-candidature"];
const contracts = ["CDI", "CDD", "Stage", "Concours", "Vacation", "Apprentissage", "Mission"];
const workModes = ["Présentiel", "Hybride", "Télétravail"];
const levels = ["Débutant", "Junior", "Confirmé", "Senior", "Expert"];
function NewOfferPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    title: "",
    kind: "emploi",
    contractType: "CDI",
    categoryId: categories[0]?.id ?? "",
    regionId: regions[0]?.id ?? "",
    city: "",
    positions: 1,
    workMode: "Présentiel",
    level: "Confirmé",
    summary: "",
    missions: "",
    profile: "",
    conditions: "",
    benefits: "",
    deadline: "",
    salaryMin: "",
    salaryMax: "",
    urgent: false,
    featured: false
  });
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const step1Valid = form.title && form.city && form.positions > 0;
  const step2Valid = form.summary.trim() && form.missions.trim();
  const step4Valid = !!form.deadline;
  function submit() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1400);
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-ink-50", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx(Logo, {}),
      /* @__PURE__ */ jsxs(Link, { to: "/espace-organisme", search: {
        section: "offres"
      }, className: "inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Retour à l’espace organisme"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container-page max-w-3xl py-10", children: done ? /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.96
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "card p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600", children: /* @__PURE__ */ jsx(PartyPopper, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-2xl font-extrabold text-ink-900", children: "Offre publiée !" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-500", children: [
        "Votre annonce ",
        /* @__PURE__ */ jsxs("span", { className: "font-semibold text-ink-700", children: [
          "« ",
          form.title,
          " »"
        ] }),
        " est désormais visible par les candidats. Vous recevrez les candidatures dans votre espace."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/espace-organisme", search: {
          section: "offres"
        }, className: "btn-primary", children: "Voir mes offres" }),
        /* @__PURE__ */ jsx(Link, { to: "/offres", className: "btn-secondary", children: "Voir le rendu public" })
      ] })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: "Publier une offre" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: "Créez une annonce attractive en quelques étapes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6 sm:p-8", children: [
        /* @__PURE__ */ jsx(Stepper, { steps, current: step }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          x: 12
        }, animate: {
          opacity: 1,
          x: 0
        }, exit: {
          opacity: 0,
          x: -12
        }, transition: {
          duration: 0.22
        }, children: [
          step === 1 && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Intitulé du poste", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.title, onChange: set("title"), placeholder: "Ingénieur DevOps Senior" }) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Type d’opportunité", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.kind, onChange: set("kind"), children: kinds.map((k) => /* @__PURE__ */ jsx("option", { value: k, children: kindLabels[k] }, k)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Type de contrat", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.contractType, onChange: set("contractType"), children: contracts.map((c) => /* @__PURE__ */ jsx("option", { value: c, children: c }, c)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Domaine", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.categoryId, onChange: set("categoryId"), children: categories.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Niveau d’expérience", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.level, onChange: set("level"), children: levels.map((l) => /* @__PURE__ */ jsx("option", { value: l, children: l }, l)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Région", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.regionId, onChange: set("regionId"), children: regions.map((r) => /* @__PURE__ */ jsx("option", { value: r.id, children: r.name }, r.id)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Ville", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.city, onChange: set("city"), placeholder: "Cotonou" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Mode de travail", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.workMode, onChange: set("workMode"), children: workModes.map((w) => /* @__PURE__ */ jsx("option", { value: w, children: w }, w)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Nombre de postes", children: /* @__PURE__ */ jsx("input", { type: "number", min: 1, className: "input", value: form.positions, onChange: (e) => setForm((f) => ({
              ...f,
              positions: Math.max(1, Number(e.target.value) || 1)
            })) }) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx(Field, { label: "Résumé de l’offre", hint: "Une phrase d’accroche affichée dans les listes.", children: /* @__PURE__ */ jsx("textarea", { className: "input resize-none", rows: 2, value: form.summary, onChange: set("summary"), placeholder: "Rejoignez notre équipe pour…" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Missions principales", hint: "Une mission par ligne.", children: /* @__PURE__ */ jsx("textarea", { className: "input resize-none leading-relaxed", rows: 5, value: form.missions, onChange: set("missions"), placeholder: "Concevoir et maintenir l’infrastructure\nAutomatiser les déploiements\n…" }) })
          ] }),
          step === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx(Field, { label: "Profil recherché", hint: "Un critère par ligne.", children: /* @__PURE__ */ jsx("textarea", { className: "input resize-none leading-relaxed", rows: 4, value: form.profile, onChange: set("profile"), placeholder: "Bac+5 en informatique\n3 ans d’expérience minimum\n…" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Conditions", hint: "Une condition par ligne.", children: /* @__PURE__ */ jsx("textarea", { className: "input resize-none leading-relaxed", rows: 3, value: form.conditions, onChange: set("conditions"), placeholder: "Contrat à temps plein\nPrise de poste immédiate\n…" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Avantages", hint: "Un avantage par ligne (facultatif).", children: /* @__PURE__ */ jsx("textarea", { className: "input resize-none leading-relaxed", rows: 3, value: form.benefits, onChange: set("benefits"), placeholder: "Assurance santé\nFormation continue\n…" }) })
          ] }),
          step === 4 && /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsx(Field, { label: "Date limite de candidature", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(CalendarClock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
                /* @__PURE__ */ jsx("input", { type: "date", className: "input pl-10", value: form.deadline, onChange: set("deadline") })
              ] }) }),
              /* @__PURE__ */ jsx(Field, { label: "Salaire min. (FCFA)", hint: "Facultatif", children: /* @__PURE__ */ jsx("input", { type: "number", className: "input", value: form.salaryMin, onChange: set("salaryMin"), placeholder: "350000" }) }),
              /* @__PURE__ */ jsx(Field, { label: "Salaire max. (FCFA)", hint: "Facultatif", children: /* @__PURE__ */ jsx("input", { type: "number", className: "input", value: form.salaryMax, onChange: set("salaryMax"), placeholder: "600000" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Check, { label: "Marquer comme urgent", checked: form.urgent, onChange: (v) => setForm((f) => ({
                ...f,
                urgent: v
              })) }),
              /* @__PURE__ */ jsx(Check, { label: "Mettre en avant (offre à la une)", checked: form.featured, onChange: (v) => setForm((f) => ({
                ...f,
                featured: v
              })) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-ink-100 bg-ink-50/60 p-5", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-ink-400", children: "Aperçu" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "brand", children: kindLabels[form.kind] }),
                /* @__PURE__ */ jsx(Badge, { variant: "neutral", children: form.contractType }),
                form.urgent && /* @__PURE__ */ jsx(Badge, { variant: "danger", children: "Urgent" }),
                form.featured && /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "À la une" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-lg font-bold text-ink-900", children: form.title || "Intitulé du poste" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-500", children: [
                form.city || "Ville",
                ", ",
                regions.find((r) => r.id === form.regionId)?.name,
                " ·",
                " ",
                form.positions,
                " poste",
                form.positions > 1 ? "s" : ""
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ink-600", children: form.summary || "Résumé de l’offre…" })
            ] })
          ] })
        ] }, step) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-ink-100 pt-5", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => Math.max(1, s - 1)), disabled: step === 1, className: "btn-ghost", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
            " Précédent"
          ] }),
          step < 4 ? /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => s + 1), disabled: step === 1 ? !step1Valid : step === 2 ? !step2Valid : false, className: "btn-primary", children: [
            "Continuer ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) : /* @__PURE__ */ jsx("button", { onClick: submit, disabled: submitting || !step4Valid, className: "btn-accent", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
            " Publication…"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" }),
            " Publier l’offre"
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "label", children: label }),
    children,
    hint && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: hint })
  ] });
}
function Check({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxs("label", { className: cn("flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition", checked ? "border-brand-300 bg-brand-50/50" : "border-ink-100"), children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-ink-700", children: label }),
    /* @__PURE__ */ jsxs("span", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", checked, onChange: (e) => onChange(e.target.checked), className: "peer sr-only" }),
      /* @__PURE__ */ jsx("span", { className: "h-6 w-11 rounded-full bg-ink-200 transition peer-checked:bg-brand-600" }),
      /* @__PURE__ */ jsx("span", { className: "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" })
    ] })
  ] });
}
export {
  NewOfferPage as component
};
