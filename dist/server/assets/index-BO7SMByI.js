import { jsxs, jsx } from "react/jsx-runtime";
import { P as PublicLayout } from "./PublicLayout-BiL6fBka.js";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Tag, Sparkles, BadgeCheck, Building2, TrendingUp, ArrowRight, ArrowUpRight, UserPlus, FileText, Send, Quote, Star, LifeBuoy, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { r as regions } from "./regions-CJF8QjG5.js";
import { c as categories } from "./categories-B2CZv2U0.js";
import { c as cn, a as compactNumber, f as formatNumber, i as initials } from "./Logo-B678_UjR.js";
import { J as JobCard } from "./JobCard-C5Aa-BnN.js";
import { J as JobListSkeleton } from "./LoadingSkeleton-CJg3OLno.js";
import { u as useFeaturedJobs } from "./queries-BcxZeW1T.js";
import { I as Icon } from "./Icon-CFlu58Vi.js";
import { I as InstitutionCard } from "./InstitutionCard-BnQdmEnr.js";
import { i as institutions } from "./institutions-B27w5JL_.js";
import { A as Avatar } from "./Avatar-B3PdWdr4.js";
import "./Modal-BMy7r_aJ.js";
import "./users-ad9wqLte.js";
import "./Badge-Dz0Y8txN.js";
import "./display-Fco6ESdN.js";
import "@tanstack/react-query";
function SearchBar({
  variant = "hero",
  initialQuery = "",
  className
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [regionId, setRegionId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  function submit(e) {
    e.preventDefault();
    navigate({
      to: "/offres",
      search: {
        q: query || void 0,
        region: regionId || void 0,
        categorie: categoryId || void 0,
        page: 1
      }
    });
  }
  if (variant === "compact") {
    return /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: cn("relative", className), children: [
      /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Rechercher un poste, un organisme…",
          className: "input pl-10"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: submit,
      className: cn(
        "grid gap-2 rounded-2xl bg-white p-2 shadow-card-hover ring-1 ring-ink-100 md:grid-cols-[1.6fr_1fr_1fr_auto]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-brand-500" }), children: /* @__PURE__ */ jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: "Métier, mot-clé, organisme…",
            className: "h-full w-full bg-transparent text-sm font-medium text-ink-900 placeholder:text-ink-400 focus:outline-none",
            "aria-label": "Mots-clés"
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-brand-500" }), divider: true, children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: regionId,
            onChange: (e) => setRegionId(e.target.value),
            className: "h-full w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink-700 focus:outline-none",
            "aria-label": "Région",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Toutes les régions" }),
              regions.map((r) => /* @__PURE__ */ jsx("option", { value: r.id, children: r.name }, r.id))
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Field, { icon: /* @__PURE__ */ jsx(Tag, { className: "h-5 w-5 text-brand-500" }), divider: true, children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: categoryId,
            onChange: (e) => setCategoryId(e.target.value),
            className: "h-full w-full cursor-pointer appearance-none bg-transparent text-sm font-medium text-ink-700 focus:outline-none",
            "aria-label": "Domaine",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Tous les domaines" }),
              categories.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id))
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary h-12 px-7 text-[15px]", children: [
          /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Rechercher" })
        ] })
      ]
    }
  );
}
function Field({
  icon,
  children,
  divider
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex h-12 items-center gap-2.5 rounded-xl px-3.5",
        divider && "md:border-l md:border-ink-100"
      ),
      children: [
        icon,
        /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children })
      ]
    }
  );
}
const platformStats = [
  { label: "Offres publiées", value: 1240, suffix: "+", icon: "Briefcase" },
  { label: "Organismes partenaires", value: 320, suffix: "+", icon: "Building2" },
  { label: "Candidats inscrits", value: 48e4, suffix: "+", icon: "Users" },
  { label: "Recrutements réussis", value: 26500, suffix: "+", icon: "CheckCircle2" }
];
const testimonials = [
  {
    id: "test-1",
    name: "Mariam Sow",
    role: "Attachée d’administration",
    institution: "Ministère de la Fonction Publique",
    avatarColor: "#1f47e6",
    quote: "Grâce à la plateforme, j'ai trouvé et réussi le concours de la fonction publique. Le processus était clair et entièrement dématérialisé. Un vrai progrès pour notre pays.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Ibrahim Touré",
    role: "Ingénieur Énergies",
    institution: "Société Nationale d’Électricité",
    avatarColor: "#ea580c",
    quote: "J'ai postulé en quelques minutes et suivi ma candidature en temps réel. Aujourd'hui je contribue à l'électrification de zones rurales. Une fierté.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Awa Bah",
    role: "Professeure de Lycée",
    institution: "Ministère de l’Éducation Nationale",
    avatarColor: "#059669",
    quote: "Une plateforme moderne et transparente. Toutes les offres publiques au même endroit, c'est exactement ce qu'il manquait aux jeunes diplômés.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Dr. Samuel Eto",
    role: "Directeur des Ressources Humaines",
    institution: "Ministère de la Santé Publique",
    avatarColor: "#dc2626",
    quote: "Côté organisme, nous gérons nos recrutements de bout en bout. La qualité des candidatures reçues a nettement augmenté. Un outil indispensable.",
    rating: 5
  }
];
const faqItems = [
  {
    id: "faq-1",
    category: "Candidats",
    question: "Comment créer un compte sur la plateforme ?",
    answer: "La création de compte est gratuite. Cliquez sur « Créer un compte », renseignez vos informations personnelles et validez votre adresse e-mail. Vous pourrez ensuite compléter votre profil et déposer votre CV."
  },
  {
    id: "faq-2",
    category: "Candidats",
    question: "Comment postuler à une offre ?",
    answer: "Depuis la page de détail d'une offre, cliquez sur « Postuler ». Vous serez guidé à travers un formulaire en plusieurs étapes : informations personnelles, dépôt du CV et de la lettre de motivation, puis confirmation. Vous recevez un accusé de réception immédiat."
  },
  {
    id: "faq-3",
    category: "Candidats",
    question: "Puis-je suivre l’état de mes candidatures ?",
    answer: "Oui. Depuis votre tableau de bord candidat, l'onglet « Mes candidatures » affiche en temps réel le statut de chaque dossier : envoyée, en cours d'examen, présélectionnée, entretien, acceptée ou refusée."
  },
  {
    id: "faq-4",
    category: "Concours",
    question: "Comment fonctionnent les concours de la fonction publique ?",
    answer: "Les concours sont publiés par les ministères et organismes habilités. Chaque annonce précise les conditions d'éligibilité, les épreuves, les dates et les centres d'examen. L'inscription se fait directement en ligne."
  },
  {
    id: "faq-5",
    category: "Organismes",
    question: "Comment publier une offre en tant qu’organisme public ?",
    answer: "Les institutions publiques, mairies, entreprises publiques, ONG et universités peuvent demander un compte organisme vérifié. Après validation, elles accèdent à un espace de gestion pour publier leurs offres et traiter les candidatures."
  },
  {
    id: "faq-6",
    category: "Général",
    question: "La plateforme est-elle gratuite ?",
    answer: "Oui, la consultation des offres et la candidature sont entièrement gratuites pour les citoyens. La plateforme est un service public national au bénéfice de l'emploi."
  },
  {
    id: "faq-7",
    category: "Général",
    question: "Mes données personnelles sont-elles protégées ?",
    answer: "Absolument. La plateforme respecte la réglementation nationale sur la protection des données personnelles. Vos informations ne sont partagées qu'avec les organismes auprès desquels vous postulez."
  },
  {
    id: "faq-8",
    category: "Candidats",
    question: "Puis-je postuler depuis mon téléphone ?",
    answer: "Oui, la plateforme est entièrement responsive et optimisée pour mobile, tablette et ordinateur. Vous pouvez consulter les offres et postuler depuis n'importe quel appareil."
  }
];
const faqCategories = ["Tous", "Candidats", "Concours", "Organismes", "Général"];
const popularSearches = [
  "Enseignant",
  "Médecin",
  "Concours fonction publique",
  "Ingénieur",
  "Stage",
  "Administration"
];
function Hero() {
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
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold-400" }),
              "Portail national officiel de l’emploi public"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-balance font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl", children: [
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
          className: "mx-auto mt-9 max-w-4xl",
          children: [
            /* @__PURE__ */ jsx(SearchBar, { variant: "hero" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/60", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-white/80", children: "Recherches fréquentes :" }),
              popularSearches.map((s) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/offres",
                  search: { q: s },
                  className: "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white",
                  children: s
                },
                s
              ))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4 text-accent-400" }),
              compactNumber(platformStats[2]?.value ?? 0),
              " candidats inscrits"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-brand-300" }),
              platformStats[1]?.value,
              "+ organismes vérifiés"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-gold-400" }),
              compactNumber(platformStats[0]?.value ?? 0),
              " offres actives"
            ] })
          ]
        }
      )
    ] })
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
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(JobListSkeleton, { count: 6 }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: data?.map((job, i) => /* @__PURE__ */ jsx(JobCard, { job, index: i }, job.id)) }) })
  ] });
}
function PopularCategories() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-ink-100 bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Domaines",
        title: "Explorez par secteur d’activité",
        description: "Des milliers d’opportunités réparties dans tous les domaines du service public.",
        action: { label: "Tous les domaines", to: "/offres" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: categories.map((cat, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.3, delay: Math.min(i * 0.03, 0.25) },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/offres",
            search: { categorie: cat.id },
            className: "group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { name: cat.icon, className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-sm font-bold text-ink-900 transition group-hover:text-brand-700", children: cat.name }),
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-brand-600" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 line-clamp-2 text-xs text-ink-500", children: cat.description }),
                /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs font-semibold text-accent-700", children: [
                  formatNumber(cat.jobCount),
                  " offres"
                ] })
              ] })
            ]
          }
        )
      },
      cat.id
    )) })
  ] }) });
}
function PartnerInstitutions() {
  const top = [...institutions].sort((a, b) => b.jobCount - a.jobCount).slice(0, 8);
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Ils recrutent",
        title: "Organismes partenaires",
        description: "Ministères, mairies, entreprises publiques, universités et ONG qui recrutent sur la plateforme.",
        action: { label: "Tout l’annuaire", to: "/organismes" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: top.map((inst, i) => /* @__PURE__ */ jsx(InstitutionCard, { institution: inst, index: i }, inst.id)) })
  ] });
}
function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { value, ref };
}
function StatsSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-brand-700 py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/40 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container-page relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl", children: "La plateforme de l’emploi public en chiffres" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-brand-100", children: "Une communauté nationale qui grandit chaque jour, au service de l’emploi et de l’égalité des chances." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: platformStats.map((stat, i) => /* @__PURE__ */ jsx(StatCard, { stat, index: i }, stat.label)) })
    ] })
  ] });
}
function StatCard({
  stat,
  index
}) {
  const { value, ref } = useCountUp(stat.value);
  const display = stat.value >= 1e4 ? compactNumber(value) : formatNumber(value);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.08 },
      className: "rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white", children: /* @__PURE__ */ jsx(Icon, { name: stat.icon, className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl", children: [
          /* @__PURE__ */ jsx("span", { ref, children: display }),
          /* @__PURE__ */ jsx("span", { className: "text-brand-200", children: stat.suffix })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium text-brand-100", children: stat.label })
      ]
    }
  );
}
const steps = [
  {
    icon: UserPlus,
    title: "Créez votre profil",
    text: "Inscrivez-vous gratuitement et complétez votre profil candidat en quelques minutes."
  },
  {
    icon: Search,
    title: "Trouvez l’opportunité",
    text: "Recherchez et filtrez parmi les offres, stages et concours de tout le secteur public."
  },
  {
    icon: FileText,
    title: "Préparez votre dossier",
    text: "Déposez votre CV et votre lettre de motivation, réutilisables pour toutes vos candidatures."
  },
  {
    icon: Send,
    title: "Postulez & suivez",
    text: "Candidatez en ligne et suivez l’avancement de chaque dossier en temps réel."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-ink-100 bg-white py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        align: "center",
        eyebrow: "Simple & transparent",
        title: "Postulez en 4 étapes",
        description: "Un parcours entièrement dématérialisé, de l’inscription au suivi de candidature."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" }),
      steps.map((step, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.1 },
          className: "relative text-center",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow", children: [
              /* @__PURE__ */ jsx(step.icon, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs font-extrabold text-ink-900 ring-2 ring-white", children: i + 1 })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-base font-bold text-ink-900", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-xs text-sm text-ink-500", children: step.text })
          ]
        },
        step.title
      ))
    ] })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxs("section", { className: "container-page py-16 sm:py-20", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        align: "center",
        eyebrow: "Témoignages",
        title: "Ils ont trouvé leur place dans le service public",
        description: "Des parcours réels rendus possibles par la plateforme nationale de recrutement."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.4, delay: Math.min(i * 0.06, 0.3) },
        className: "flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card",
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 text-brand-200" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 flex gap-0.5", children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-gold-400 text-gold-400" }, s)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "mt-3 flex-1 text-sm leading-relaxed text-ink-700", children: [
            "« ",
            t.quote,
            " »"
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 flex items-center gap-3 border-t border-ink-100 pt-4", children: [
            /* @__PURE__ */ jsx(Avatar, { initials: initials(t.name), color: t.avatarColor }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-ink-900", children: t.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
                t.role,
                " · ",
                t.institution
              ] })
            ] })
          ] })
        ]
      },
      t.id
    )) })
  ] });
}
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
function CtaSection() {
  return /* @__PURE__ */ jsx("section", { className: "container-page py-16 sm:py-20", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: "relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-14 text-center sm:px-12",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-2xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl", children: "Prêt à donner du sens à votre carrière ?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/70", children: "Rejoignez des centaines de milliers de citoyens qui construisent l’avenir du service public. Inscription gratuite, candidature en quelques clics." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/offres", className: "btn-primary h-12 px-6 text-[15px]", children: [
              /* @__PURE__ */ jsx(UserPlus, { className: "h-5 w-5" }),
              "Trouver une opportunité",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/espace-organisme",
                className: "btn h-12 border border-white/20 bg-white/5 px-6 text-[15px] text-white backdrop-blur hover:bg-white/10",
                children: [
                  /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                  "Je suis un organisme"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(FeaturedJobs, {}),
    /* @__PURE__ */ jsx(PopularCategories, {}),
    /* @__PURE__ */ jsx(StatsSection, {}),
    /* @__PURE__ */ jsx(PartnerInstitutions, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(FaqSection, {}),
    /* @__PURE__ */ jsx(CtaSection, {})
  ] });
}
export {
  HomePage as component
};
