import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, PartyPopper, ArrowLeft, UserRound, FileText, CheckCircle2, ArrowRight, Send, Upload, Building2 } from "lucide-react";
import { useState, useRef } from "react";
import { P as PublicLayout } from "./PublicLayout-bS74Op3v.js";
import { A as Avatar, B as Badge, b as formatDate, c as cn } from "./Badge-txxXTAF8.js";
import { d as Route, N as NotFound } from "./router-B2_hfGdf.js";
import { k as useJob, c as currentUser, d as institutionById, r as regions } from "./queries-OLKb4Xlw.js";
import { k as kindLabels } from "./display-Fco6ESdN.js";
import "@tanstack/react-query";
const steps = [{
  id: 1,
  label: "Informations",
  icon: UserRound
}, {
  id: 2,
  label: "CV",
  icon: FileText
}, {
  id: 3,
  label: "Lettre de motivation",
  icon: FileText
}, {
  id: 4,
  label: "Confirmation",
  icon: CheckCircle2
}];
function PostulerPage() {
  const {
    slug
  } = Route.useParams();
  const {
    data: job,
    isLoading
  } = useJob(slug);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone,
    regionId: currentUser.regionId,
    city: currentUser.city
  });
  const [cvFile, setCvFile] = useState(currentUser.cvFileName);
  const [letterFile, setLetterFile] = useState(null);
  const [letterText, setLetterText] = useState("");
  if (isLoading) {
    return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { className: "container-page flex min-h-[50vh] items-center justify-center", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-brand-600" }) }) });
  }
  if (!job) return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx(NotFound, {}) });
  const inst = institutionById(job.institutionId);
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
  if (done) {
    return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("div", { className: "container-page flex min-h-[70vh] items-center justify-center py-12", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.96
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "card max-w-lg p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-50 text-accent-600", children: /* @__PURE__ */ jsx(PartyPopper, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-2xl font-extrabold text-ink-900", children: "Candidature envoyée !" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-500", children: [
        "Votre candidature pour ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-700", children: job.title }),
        " ",
        "a bien été transmise à ",
        inst?.shortName,
        ". Vous recevrez un accusé de réception par e-mail."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 rounded-xl bg-ink-50 p-4 text-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "text-ink-500", children: "Référence de votre candidature" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 font-display text-lg font-bold text-brand-700", children: [
          "CAND-2026-",
          String(Math.floor(1e3 + Math.random() * 8999))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/tableau-de-bord", search: {
          section: "candidatures"
        }, className: "btn-primary", children: "Suivre ma candidature" }),
        /* @__PURE__ */ jsx(Link, { to: "/offres", className: "btn-secondary", children: "Voir d’autres offres" })
      ] })
    ] }) }) });
  }
  const canNext = step === 1 ? form.firstName && form.lastName && form.email && form.phone : step === 2 ? !!cvFile : step === 3 ? !!(letterFile || letterText.trim()) : true;
  return /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsxs("div", { className: "container-page max-w-4xl py-8", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/offres/$slug", params: {
      slug: job.slug
    }, className: "inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Retour à l’offre"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-4 flex items-center gap-4 p-5", children: [
      /* @__PURE__ */ jsx(Avatar, { initials: inst?.logoInitials ?? "TL", color: inst?.logoColor, size: "lg", className: "!rounded-xl" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "brand", children: kindLabels[job.kind] }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-400", children: [
            "Réf. ",
            job.reference
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 truncate font-display text-lg font-bold text-ink-900", children: job.title }),
        /* @__PURE__ */ jsxs("p", { className: "truncate text-sm text-ink-500", children: [
          inst?.name,
          " · Clôture le ",
          formatDate(job.deadline)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center last:flex-none", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("div", { className: cn("flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition", step > s.id ? "border-accent-600 bg-accent-600 text-white" : step === s.id ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-400"), children: step > s.id ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("span", { className: cn("hidden text-center text-xs font-medium sm:block", step >= s.id ? "text-ink-800" : "text-ink-400"), children: s.label })
      ] }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: cn("mx-2 h-0.5 flex-1 rounded-full transition", step > s.id ? "bg-accent-500" : "bg-ink-200") })
    ] }, s.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-6 p-6 sm:p-8", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
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
        step === 1 && /* @__PURE__ */ jsx(StepInfos, { form, setForm }),
        step === 2 && /* @__PURE__ */ jsx(StepUpload, { title: "Votre CV", description: "Déposez votre curriculum vitæ au format PDF (5 Mo max). Votre CV enregistré est pré-sélectionné.", fileName: cvFile, onFile: setCvFile, accept: ".pdf,.doc,.docx" }),
        step === 3 && /* @__PURE__ */ jsx(StepLetter, { fileName: letterFile, onFile: setLetterFile, text: letterText, onText: setLetterText }),
        step === 4 && /* @__PURE__ */ jsx(StepReview, { job, instName: inst?.name ?? "", form, cvFile, letterFile, letterText })
      ] }, step) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-ink-100 pt-5", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => Math.max(1, s - 1)), disabled: step === 1, className: "btn-ghost", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          " Précédent"
        ] }),
        step < 4 ? /* @__PURE__ */ jsxs("button", { onClick: () => setStep((s) => s + 1), disabled: !canNext, className: "btn-primary", children: [
          "Continuer ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) : /* @__PURE__ */ jsx("button", { onClick: submit, disabled: submitting, className: "btn-accent", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
          " Envoi…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
          " Envoyer ma candidature"
        ] }) })
      ] })
    ] })
  ] }) });
}
function StepInfos({
  form,
  setForm
}) {
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Informations personnelles" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: "Vérifiez et complétez vos coordonnées." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Prénom" }),
        /* @__PURE__ */ jsx("input", { className: "input", value: form.firstName, onChange: set("firstName") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Nom" }),
        /* @__PURE__ */ jsx("input", { className: "input", value: form.lastName, onChange: set("lastName") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Adresse e-mail" }),
        /* @__PURE__ */ jsx("input", { type: "email", className: "input", value: form.email, onChange: set("email") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Téléphone" }),
        /* @__PURE__ */ jsx("input", { className: "input", value: form.phone, onChange: set("phone") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Région" }),
        /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.regionId, onChange: set("regionId"), children: regions.map((r) => /* @__PURE__ */ jsx("option", { value: r.id, children: r.name }, r.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "label", children: "Ville" }),
        /* @__PURE__ */ jsx("input", { className: "input", value: form.city, onChange: set("city") })
      ] })
    ] })
  ] });
}
function StepUpload({
  title,
  description,
  fileName,
  onFile,
  accept
}) {
  const inputRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: description }),
    /* @__PURE__ */ jsxs("button", { onClick: () => inputRef.current?.click(), className: "mt-6 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50/50 px-6 py-12 text-center transition hover:border-brand-400 hover:bg-brand-50/40", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-semibold text-ink-800", children: "Cliquez pour téléverser un fichier" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: "PDF, DOC, DOCX — 5 Mo max" })
    ] }),
    /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept, className: "hidden", onChange: (e) => onFile(e.target.files?.[0]?.name ?? fileName) }),
    fileName && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 rounded-xl border border-accent-200 bg-accent-50 p-4", children: [
      /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-accent-600" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: fileName }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-accent-700", children: "Fichier prêt à être envoyé" })
      ] }),
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-accent-600" })
    ] })
  ] });
}
function StepLetter({
  fileName,
  onFile,
  text,
  onText
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Lettre de motivation" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: "Rédigez votre lettre ci-dessous ou téléversez un document." }),
    /* @__PURE__ */ jsx("textarea", { value: text, onChange: (e) => onText(e.target.value), rows: 8, placeholder: "Madame, Monsieur, c’est avec un grand intérêt que je vous soumets ma candidature…", className: "input mt-5 resize-none leading-relaxed" }),
    /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(StepUpload, { title: "", description: "", fileName, onFile, accept: ".pdf,.doc,.docx" }) })
  ] });
}
function StepReview({
  job,
  instName,
  form,
  cvFile,
  letterFile,
  letterText
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-lg font-bold text-ink-900", children: "Vérification & confirmation" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: "Relisez votre candidature avant de l’envoyer." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxs(ReviewBlock, { icon: /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }), title: "Poste", children: [
        job.title,
        " — ",
        instName
      ] }),
      /* @__PURE__ */ jsxs(ReviewBlock, { icon: /* @__PURE__ */ jsx(UserRound, { className: "h-4 w-4" }), title: "Candidat", children: [
        form.firstName,
        " ",
        form.lastName,
        " · ",
        form.email,
        " · ",
        form.phone
      ] }),
      /* @__PURE__ */ jsx(ReviewBlock, { icon: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), title: "CV", children: cvFile ?? "Aucun fichier" }),
      /* @__PURE__ */ jsx(ReviewBlock, { icon: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), title: "Lettre de motivation", children: letterFile ?? (letterText ? "Lettre rédigée en ligne" : "Aucune") })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "mt-6 flex items-start gap-2.5 text-sm text-ink-600", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: true, className: "mt-0.5 h-4 w-4 accent-brand-600" }),
      "Je certifie l’exactitude des informations fournies et j’accepte le traitement de mes données dans le cadre de cette candidature."
    ] })
  ] });
}
function ReviewBlock({
  icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-ink-100 bg-ink-50/50 p-4", children: [
    /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400", children: [
      icon,
      title
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-ink-800", children })
  ] });
}
export {
  PostulerPage as component
};
