import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { C as CandidateRegisterModal, P as PublicLayout } from "./PublicLayout-VbPsKMuc.js";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail, Lock, Loader2, LogIn, UserPlus, ArrowRight, Award, MonitorPlay, Clock, Users, LifeBuoy, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { M as Modal } from "./Modal-BCXPU8FW.js";
import { J as JobCard } from "./JobCard-83y8t4xV.js";
import { J as JobListSkeleton } from "./LoadingSkeleton-h7Y8p6Xy.js";
import { u as useFeaturedJobs } from "./queries-B_TLj2Z7.js";
import { B as Badge } from "./Badge-DEqXy-r-.js";
import { I as Icon } from "./Icon-CFlu58Vi.js";
import { c as cn } from "./Logo-B1bRgxRh.js";
import "./categories-B2CZv2U0.js";
import "./Avatar-Dm5AWFgm.js";
import "./institutions-CP_CKc0f.js";
import "./regions-BTAjTKaz.js";
import "./display-Fco6ESdN.js";
import "@tanstack/react-query";
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
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 top-20 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-50 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "container-page relative pb-28 pt-16 sm:pt-24", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mx-auto max-w-3xl text-center",
          children: [
            /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-balance font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl", children: [
              "Servez votre pays.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-brand-300 via-brand-400 to-accent-400 bg-clip-text text-transparent", children: "Trouvez votre vocation." })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-pretty text-base text-white/70 sm:text-lg", children: "Toutes les offres d’emploi, stages, concours et appels à candidatures des ministères, mairies, entreprises publiques, ONG et universités — réunis sur une seule plateforme." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.12 },
          className: "mx-auto mt-10 flex max-w-md flex-col items-center gap-3",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setRegisterOpen(true),
                className: "btn-primary h-14 w-full text-base",
                children: [
                  /* @__PURE__ */ jsx(UserPlus, { className: "h-5 w-5" }),
                  "S’inscrire comme candidat",
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
                  "Connexion administration"
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
function FeaturedJobs() {
  const { data, isLoading } = useFeaturedJobs(6);
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Sélection officielle",
        title: "Opportunités à la une",
        description: "Les offres et concours mis en avant par les institutions partenaires cette semaine.",
        action: { label: "Voir toutes les offres", to: "/offres" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(JobListSkeleton, { count: 6 }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: data?.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job, index: i, minimal: true }, job.id)) }) })
  ] });
}
const trainings = [
  {
    id: "form-cyber",
    title: "Cybersécurité & protection des systèmes d’information",
    provider: "Agence Nationale du Numérique",
    category: "Numérique",
    level: "Intermédiaire",
    mode: "Hybride",
    duration: "8 semaines",
    certifying: true,
    free: true,
    icon: "ShieldCheck",
    color: "#1f47e6",
    seats: 40
  },
  {
    id: "form-data",
    title: "Data Analyse & tableaux de bord décisionnels",
    provider: "Institut National de la Statistique",
    category: "Données",
    level: "Intermédiaire",
    mode: "En ligne",
    duration: "6 semaines",
    certifying: true,
    free: true,
    icon: "BarChart3",
    color: "#059669",
    seats: 60
  },
  {
    id: "form-gestion",
    title: "Gestion de projet & méthodes agiles",
    provider: "École Nationale d’Administration",
    category: "Management",
    level: "Tous niveaux",
    mode: "Présentiel",
    duration: "4 semaines",
    certifying: true,
    free: false,
    icon: "Workflow",
    color: "#ea580c",
    seats: 30
  },
  {
    id: "form-marches",
    title: "Marchés publics & passation des contrats",
    provider: "Ministère de l’Économie et des Finances",
    category: "Juridique",
    level: "Avancé",
    mode: "Hybride",
    duration: "5 semaines",
    certifying: true,
    free: true,
    icon: "Scale",
    color: "#7c3aed",
    seats: 25
  },
  {
    id: "form-bureautique",
    title: "Bureautique avancée & outils collaboratifs",
    provider: "Centre de Formation de la Fonction Publique",
    category: "Numérique",
    level: "Débutant",
    mode: "En ligne",
    duration: "3 semaines",
    certifying: true,
    free: true,
    icon: "MonitorSmartphone",
    color: "#0891b2",
    seats: 120
  },
  {
    id: "form-langues",
    title: "Anglais professionnel & communication",
    provider: "Institut des Langues de Cotonou",
    category: "Langues",
    level: "Tous niveaux",
    mode: "Hybride",
    duration: "10 semaines",
    certifying: true,
    free: false,
    icon: "Languages",
    color: "#dc2626",
    seats: 50
  }
];
function TrainingOpportunities() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-ink-100 bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Montée en compétences",
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
const faqItems = [
  {
    id: "faq-1",
    category: "Candidats",
    question: "Comment m’inscrire en tant que candidat ?",
    answer: "Cliquez sur « S’inscrire comme candidat », puis renseignez vos nom, prénom, adresse e-mail, numéro de téléphone et domaine d’activité, et déposez votre CV. Aucune création de mot de passe n’est nécessaire : votre profil est aussitôt visible des organismes recruteurs."
  },
  {
    id: "faq-2",
    category: "Candidats",
    question: "Comment consulter les offres et les concours ?",
    answer: "Rendez-vous dans la rubrique « Offres & concours ». Vous pouvez rechercher et filtrer les opportunités par ministère, institution, région, type de contrat, domaine et date de publication."
  },
  {
    id: "faq-3",
    category: "Candidats",
    question: "Que deviennent mes informations après mon inscription ?",
    answer: "Vos informations et votre CV sont transmis aux organismes recruteurs du secteur public. Ceux dont les besoins correspondent à votre profil vous contactent directement via les coordonnées que vous avez fournies."
  },
  {
    id: "faq-4",
    category: "Formations",
    question: "Comment accéder aux opportunités de formation ?",
    answer: "La section « Opportunités de formation » de l’accueil regroupe des formations professionnelles et certifiantes (cybersécurité, data, gestion de projet, marchés publics, langues…). Plusieurs d’entre elles sont entièrement gratuites."
  },
  {
    id: "faq-5",
    category: "Administrations",
    question: "Comment publier une offre en tant qu’administration ?",
    answer: "Cliquez sur « Connexion administration » et accédez à votre espace de gestion. Vous pouvez y publier vos offres, stages et concours, puis suivre et traiter les candidatures reçues."
  },
  {
    id: "faq-6",
    category: "Administrations",
    question: "Qui peut disposer d’un espace administration ?",
    answer: "Les ministères, mairies, entreprises publiques, ONG, universités et organismes partenaires vérifiés disposent d’un espace d’administration pour gérer leurs recrutements de bout en bout."
  },
  {
    id: "faq-7",
    category: "Général",
    question: "La plateforme est-elle gratuite ?",
    answer: "Oui. L’inscription, la consultation des offres et l’accès aux opportunités sont entièrement gratuits pour les citoyens. La plateforme est un service public national au bénéfice de l’emploi."
  },
  {
    id: "faq-8",
    category: "Général",
    question: "Puis-je utiliser la plateforme depuis mon téléphone ?",
    answer: "Oui, la plateforme est entièrement responsive et optimisée pour mobile, tablette et ordinateur. Vous pouvez vous inscrire et consulter les opportunités depuis n’importe quel appareil."
  }
];
const faqCategories = ["Tous", "Candidats", "Formations", "Administrations", "Général"];
function FaqSection() {
  const [category, setCategory] = useState("Tous");
  const [open, setOpen] = useState(faqItems[0]?.id ?? null);
  const filtered = useMemo(
    () => category === "Tous" ? faqItems : faqItems.filter((f) => f.category === category),
    [category]
  );
  return /* @__PURE__ */ jsx("section", { id: "aide", className: "border-t border-ink-100 bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Aide", title: "Questions fréquentes" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink-500", children: "Tout ce qu’il faut savoir pour candidater, suivre vos dossiers et utiliser la plateforme en toute sérénité." }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: faqCategories.map((c) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCategory(c),
          className: cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
            category === c ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700"
          ),
          children: c
        },
        c
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white", children: /* @__PURE__ */ jsx(LifeBuoy, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink-900", children: "Besoin d’aide ?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: "Contactez le support au +229 21 00 00 00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: filtered.map((item) => {
      const isOpen = open === item.id;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "overflow-hidden rounded-2xl border border-ink-100 bg-white",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : item.id),
                className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-ink-900", children: item.question }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: cn(
                        "h-5 w-5 shrink-0 text-ink-400 transition-transform",
                        isOpen && "rotate-180 text-brand-600"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsx("p", { className: "px-5 pb-5 text-sm leading-relaxed text-ink-600", children: item.answer })
              }
            ) })
          ]
        },
        item.id
      );
    }) })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(FeaturedJobs, {}),
    /* @__PURE__ */ jsx(TrainingOpportunities, {}),
    /* @__PURE__ */ jsx(FaqSection, {})
  ] });
}
export {
  HomePage as component
};
