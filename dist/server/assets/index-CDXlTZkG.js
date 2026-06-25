import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { C as CandidateRegisterModal, P as PublicLayout } from "./PublicLayout-CT1D-ugE.js";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Mail, Lock, Loader2, LogIn, UserPlus, Award, MonitorPlay, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { M as Modal } from "./Modal-B9Mmt53J.js";
import { J as JobCard } from "./JobCard-Cbpjuw0X.js";
import { J as JobListSkeleton } from "./LoadingSkeleton-4Z4mgl7O.js";
import { u as useFeaturedJobs } from "./queries-DzS9T9xg.js";
import { B as Badge } from "./Badge-Q0U1gXN-.js";
import { I as Icon } from "./Icon-R_uPxe6u.js";
import { t as trainings } from "./trainings-j3e0QMRw.js";
import "./Logo-Nf2y5-j_.js";
import "./categories-B2CZv2U0.js";
import "./Avatar-CEdpIxOh.js";
import "./institutions-CeyynnsY.js";
import "./regions-BTAjTKaz.js";
import "./display-Fco6ESdN.js";
import "@tanstack/react-query";
import "./applications-pkD4SWq_.js";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: align === "center" ? "mx-auto max-w-2xl text-center" : "flex flex-wrap items-end justify-between gap-4",
      children: [
        /* @__PURE__ */ jsxs("div", { className: align === "center" ? "" : "max-w-2xl", children: [
          eyebrow && /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700", children: eyebrow }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 text-balance font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink-500", children: description })
        ] }),
        action && /* @__PURE__ */ jsxs(
          Link,
          {
            to: action.to,
            className: "group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-800",
            children: [
              action.label,
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })
            ]
          }
        )
      ]
    }
  );
}
function AdminLoginModal({
  open,
  onClose
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const valid = email.trim() && password.length >= 1;
  function submit(e) {
    e.preventDefault();
    if (!valid) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      navigate({ to: "/espace-organisme" });
    }, 1100);
  }
  return /* @__PURE__ */ jsx(
    Modal,
    {
      open,
      onClose,
      title: "Connexion administration",
      description: "Accédez à votre espace de gestion des offres et candidatures.",
      children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl bg-brand-50 p-3 text-sm text-brand-800", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 shrink-0" }),
          "Réservé aux institutions, ministères et organismes partenaires vérifiés."
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "label", children: "Adresse e-mail professionnelle" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Mail, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                className: "input pl-10",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "recrutement@organisme.bj"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("label", { className: "label mb-0", children: "Mot de passe" }),
            /* @__PURE__ */ jsx("button", { type: "button", className: "text-xs font-medium text-brand-700 hover:underline", children: "Mot de passe oublié ?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative mt-1.5", children: [
            /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                className: "input pl-10",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                placeholder: "••••••••"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: !valid || submitting, className: "btn-primary w-full", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
          " Connexion…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(LogIn, { className: "h-4 w-4" }),
          " Se connecter"
        ] }) })
      ] })
    }
  );
}
function Hero() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-ink-950", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.18]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 top-20 h-96 w-80 rounded-full bg-accent-500/20 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-50 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "container-page relative pb-28 pt-16 sm:pt-24", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mx-auto max-w-3xl text-center",
          children: /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-balance font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl", children: [
            "Plateforme nationale",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent", children: "de mobilisation des talents." })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.12 },
          className: "mx-auto mt-20 flex max-w-md flex-col items-center gap-3",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setRegisterOpen(true),
                className: "btn-primary h-14 w-full text-base",
                children: [
                  /* @__PURE__ */ jsx(UserPlus, { className: "h-5 w-5" }),
                  "Talent - J'enregitrer mon profil",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setLoginOpen(true),
                className: "btn h-12 w-full border border-white/20 bg-white/5 text-[15px] text-white backdrop-blur transition hover:bg-white/10",
                children: [
                  /* @__PURE__ */ jsx(LogIn, { className: "h-5 w-5" }),
                  "Entité publique - Je formule un besoin"
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(CandidateRegisterModal, { open: registerOpen, onClose: () => setRegisterOpen(false) }),
    /* @__PURE__ */ jsx(AdminLoginModal, { open: loginOpen, onClose: () => setLoginOpen(false) })
  ] });
}
function FeaturedJobs() {
  const { data, isLoading } = useFeaturedJobs(4);
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        title: "Opportunités à la une",
        description: "Les offres et concours mis en avant par les institutions partenaires cette semaine."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(JobListSkeleton, { count: 4 }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: data?.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job, index: i, minimal: true }, job.id)) }) })
  ] });
}
function TrainingOpportunities() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-ink-100 bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        title: "Opportunités de formation",
        description: "Certifications et formations professionnelles pour booster votre profil : cybersécurité, data, gestion de projet et bien plus."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: trainings.map((t, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.35, delay: Math.min(i * 0.05, 0.3) },
        className: "group flex min-w-0 flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white",
                style: { backgroundColor: t.color },
                children: /* @__PURE__ */ jsx(Icon, { name: t.icon, className: "h-6 w-6" })
              }
            ),
            t.free ? /* @__PURE__ */ jsx(Badge, { variant: "accent", children: "Gratuit" }) : /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "Payant" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "brand", children: t.category }),
            t.certifying && /* @__PURE__ */ jsx(Badge, { variant: "neutral", icon: /* @__PURE__ */ jsx(Award, { className: "h-3 w-3" }), children: "Certifiante" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 line-clamp-2 font-display text-base font-bold text-ink-900 transition group-hover:text-brand-700", children: t.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-sm text-ink-500", children: t.provider }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink-100 pt-3 text-xs text-ink-500", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(MonitorPlay, { className: "h-3.5 w-3.5 text-ink-400" }),
              " ",
              t.mode
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 text-ink-400" }),
              " ",
              t.duration
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-ink-400" }),
              " ",
              t.seats,
              " places"
            ] })
          ] })
        ]
      },
      t.id
    )) })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(FeaturedJobs, {}),
    /* @__PURE__ */ jsx(TrainingOpportunities, {})
  ] });
}
export {
  HomePage as component
};
