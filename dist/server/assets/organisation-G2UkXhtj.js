import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Plus, Building2, UserCog, CheckCircle2, Lock, ArrowLeft, ArrowRight, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { P as PublicLayout } from "./PublicLayout-CT1D-ugE.js";
import { S as Stepper } from "./Stepper-BoQWQQ2U.js";
import { A as AuthShell } from "./router-BsMxc6_M.js";
import { a as regions } from "./regions-BTAjTKaz.js";
import { a as institutionTypes } from "./institutions-CeyynnsY.js";
import "./Logo-Nf2y5-j_.js";
import "./Modal-B9Mmt53J.js";
import "./categories-B2CZv2U0.js";
import "@tanstack/react-query";
const steps = [{
  id: 1,
  label: "Organisation",
  icon: Building2
}, {
  id: 2,
  label: "Responsable",
  icon: UserCog
}, {
  id: 3,
  label: "Confirmation",
  icon: CheckCircle2
}];
function OrganisationSignup() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    orgName: "",
    type: institutionTypes[0],
    sector: "",
    regionId: regions[0]?.id ?? "",
    city: "",
    website: "",
    managerName: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    confirm: ""
  });
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const step1Valid = form.orgName && form.sector && form.city;
  const step2Valid = form.managerName && form.role && form.email && form.phone && form.password.length >= 6 && form.password === form.confirm;
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
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600", children: /* @__PURE__ */ jsx(PartyPopper, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-2xl font-extrabold text-ink-900", children: "Demande enregistrée !" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-500", children: [
        "Le compte de ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-700", children: form.orgName }),
        " a été créé. Après vérification de votre organisme, vous pourrez publier vos offres. En attendant, créez votre première annonce."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/espace-organisme/nouvelle-offre", className: "btn-primary", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
          " Publier une offre"
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/espace-organisme", className: "btn-secondary", children: "Accéder à l’espace organisme" })
      ] })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs(AuthShell, { eyebrow: "Espace organisme", title: "Inscrire votre organisation", subtitle: "Ministères, mairies, entreprises publiques, ONG et universités — recrutez sur la plateforme nationale.", children: [
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
        /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Nom de l’organisation", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.orgName, onChange: set("orgName"), placeholder: "Ministère de la Santé, Mairie de Cotonou…" }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Type d’organisme", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.type, onChange: set("type"), children: institutionTypes.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Secteur d’activité", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.sector, onChange: set("sector"), placeholder: "Santé, Éducation, Énergie…" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Région", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.regionId, onChange: set("regionId"), children: regions.map((r) => /* @__PURE__ */ jsx("option", { value: r.id, children: r.name }, r.id)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Ville", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.city, onChange: set("city"), placeholder: "Cotonou" }) }),
        /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Site web", hint: "Facultatif", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.website, onChange: set("website"), placeholder: "www.organisme.bj" }) }) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Nom du responsable", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.managerName, onChange: set("managerName"), placeholder: "Nom et prénom" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Fonction", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.role, onChange: set("role"), placeholder: "Directeur des ressources humaines" }) }),
        /* @__PURE__ */ jsx(Field, { label: "E-mail professionnel", children: /* @__PURE__ */ jsx("input", { type: "email", className: "input", value: form.email, onChange: set("email"), placeholder: "recrutement@organisme.bj" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Téléphone", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.phone, onChange: set("phone"), placeholder: "+229 ..." }) }),
        /* @__PURE__ */ jsx(Field, { label: "Mot de passe", hint: "6 caractères minimum", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
          /* @__PURE__ */ jsx("input", { type: "password", className: "input pl-10", value: form.password, onChange: set("password"), placeholder: "••••••" })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Confirmer le mot de passe", error: form.confirm.length > 0 && form.confirm !== form.password ? "Les mots de passe ne correspondent pas." : void 0, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
          /* @__PURE__ */ jsx("input", { type: "password", className: "input pl-10", value: form.confirm, onChange: set("confirm"), placeholder: "••••••" })
        ] }) })
      ] }),
      step === 3 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Vérifiez votre demande" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxs(Recap, { label: "Organisation", children: [
            form.orgName,
            " · ",
            form.type
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Secteur & localisation", children: [
            form.sector,
            " · ",
            form.city,
            ", ",
            regions.find((r) => r.id === form.regionId)?.name
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Responsable", children: [
            form.managerName,
            " — ",
            form.role
          ] }),
          /* @__PURE__ */ jsxs(Recap, { label: "Contact", children: [
            form.email,
            " · ",
            form.phone
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-xl bg-brand-50 p-4 text-sm text-brand-800", children: "Votre organisme sera vérifié par nos services avant la publication de vos offres." }),
        /* @__PURE__ */ jsxs("label", { className: "mt-4 flex items-start gap-2.5 text-sm text-ink-600", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: true, className: "mt-0.5 h-4 w-4 accent-brand-600" }),
          "Je certifie être habilité à représenter cet organisme et j’accepte les conditions."
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
        " Envoi…"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        " Créer le compte organisme"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-sm text-ink-500", children: [
      "Vous êtes un candidat ?",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/inscription/candidat", className: "font-semibold text-brand-700 hover:underline", children: "Créez un compte candidat" })
    ] })
  ] }) });
}
function Field({
  label,
  hint,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "label", children: label }),
    children,
    error ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-red-600", children: error }) : hint ? /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: hint }) : null
  ] });
}
function Recap({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-ink-100 bg-ink-50/50 p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-ink-400", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-ink-800", children })
  ] });
}
export {
  OrganisationSignup as component
};
