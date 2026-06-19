import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, Briefcase, UserRound, CheckCircle2, Lock, ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { P as PublicLayout } from "./PublicLayout-BiL6fBka.js";
import { S as Stepper } from "./Stepper-DX3dRNoL.js";
import { r as regions } from "./regions-CJF8QjG5.js";
import { c as categories } from "./categories-B2CZv2U0.js";
import { c as cn } from "./Logo-B678_UjR.js";
import "./Avatar-B3PdWdr4.js";
import "./Modal-BMy7r_aJ.js";
import "./users-ad9wqLte.js";
const steps = [{
  id: 1,
  label: "Compte",
  icon: UserRound
}, {
  id: 2,
  label: "Profil",
  icon: Briefcase
}, {
  id: 3,
  label: "Confirmation",
  icon: CheckCircle2
}];
const levels = ["Débutant", "Junior", "Confirmé", "Senior", "Expert"];
function CandidateSignup() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    title: "",
    regionId: regions[0]?.id ?? "",
    city: "",
    categoryId: categories[0]?.id ?? "",
    level: "Junior"
  });
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const step1Valid = form.firstName && form.lastName && form.email && form.phone && form.password.length >= 6 && form.password === form.confirm;
  const step2Valid = form.title && form.city;
  function submit() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1300);
  }
  if (done) {
    return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx(AuthShell, { children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.96
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600", children: /* @__PURE__ */ jsx(BadgeCheck, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-2xl font-extrabold text-ink-900", children: [
        "Bienvenue, ",
        form.firstName,
        " !"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: "Votre compte candidat a été créé. Vous pouvez dès maintenant rechercher des offres et postuler en ligne." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/offres", className: "btn-primary", children: [
          /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
          " Découvrir les offres"
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/tableau-de-bord", className: "btn-secondary", children: "Accéder à mon espace" })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(AuthShell, { eyebrow: "Espace candidat", title: "Créer un compte candidat", subtitle: "Quelques informations pour commencer votre recherche d’emploi public.", children: [
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
        /* @__PURE__ */ jsx(FormField, { label: "Prénom", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.firstName, onChange: set("firstName"), placeholder: "Aïcha" }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Nom", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.lastName, onChange: set("lastName"), placeholder: "Diallo" }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Adresse e-mail", children: /* @__PURE__ */ jsx("input", { type: "email", className: "input", value: form.email, onChange: set("email"), placeholder: "vous@email.bj" }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Téléphone", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.phone, onChange: set("phone"), placeholder: "+229 ..." }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Mot de passe", hint: "6 caractères minimum", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
          /* @__PURE__ */ jsx("input", { type: "password", className: "input pl-10", value: form.password, onChange: set("password"), placeholder: "••••••" })
        ] }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Confirmer le mot de passe", error: form.confirm.length > 0 && form.confirm !== form.password ? "Les mots de passe ne correspondent pas." : void 0, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
          /* @__PURE__ */ jsx("input", { type: "password", className: "input pl-10", value: form.confirm, onChange: set("confirm"), placeholder: "••••••" })
        ] }) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(FormField, { label: "Intitulé de poste / métier", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.title, onChange: set("title"), placeholder: "Ingénieure logicielle, Médecin, Enseignant…" }) }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Domaine principal", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.categoryId, onChange: set("categoryId"), children: categories.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id)) }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Niveau d’expérience", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.level, onChange: set("level"), children: levels.map((l) => /* @__PURE__ */ jsx("option", { value: l, children: l }, l)) }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Région", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.regionId, onChange: set("regionId"), children: regions.map((r) => /* @__PURE__ */ jsx("option", { value: r.id, children: r.name }, r.id)) }) }),
        /* @__PURE__ */ jsx(FormField, { label: "Ville", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.city, onChange: set("city"), placeholder: "Cotonou" }) })
      ] }),
      step === 3 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Vérifiez vos informations" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxs(Recap, { label: "Identité", children: [
            form.firstName,
            " ",
            form.lastName
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Contact", children: [
            form.email,
            " · ",
            form.phone
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Profil", children: [
            form.title,
            " · ",
            categories.find((c) => c.id === form.categoryId)?.name,
            " · ",
            form.level
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Localisation", children: [
            form.city,
            ", ",
            regions.find((r) => r.id === form.regionId)?.name
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "mt-5 flex items-start gap-2.5 text-sm text-ink-600", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: true, className: "mt-0.5 h-4 w-4 accent-brand-600" }),
          "J’accepte les conditions d’utilisation et la politique de protection des données."
        ] })
      ] })
    ] }, step) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-ink-100 pt-5", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => Math.max(1, s - 1)), disabled: step === 1, className: "btn-ghost", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Précédent"
      ] }),
      step < 3 ? /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => s + 1), disabled: step === 1 ? !step1Valid : !step2Valid, className: "btn-primary", children: [
        "Continuer ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) : /* @__PURE__ */ jsx("button", { onClick: submit, disabled: submitting, className: "btn-accent", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
        " Création…"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        " Créer mon compte"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-sm text-ink-500", children: [
      "Vous êtes une organisation ?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/inscription/organisation", className: "font-semibold text-brand-700 hover:underline", children: "Inscrivez votre organisme" })
    ] })
  ] }) });
}
function AuthShell({
  children,
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsx("div", { className: "container-page flex justify-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl", children: [
    title && /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
      eyebrow && /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "card p-6 sm:p-8", children })
  ] }) });
}
function FormField({
  label,
  hint,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    label && /* @__PURE__ */ jsx("label", { className: "label", children: label }),
    children,
    error ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-red-600", children: error }) : hint ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: hint }) : null
  ] });
}
function Recap({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("rounded-xl border border-ink-100 bg-ink-50/50 p-4"), children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-ink-400", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-ink-800", children })
  ] });
}
export {
  AuthShell,
  CandidateSignup as component
};
