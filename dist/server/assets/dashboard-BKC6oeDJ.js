import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { L as Logo, A as Avatar, c as cn } from "./Badge-txxXTAF8.js";
function DashboardShell({
  items,
  active,
  onSelect,
  user,
  brandLabel,
  children
}) {
  const [mobileNav, setMobileNav] = useState(false);
  const activeItem = items.find((i) => i.key === active);
  const NavList = () => /* @__PURE__ */ jsx("nav", { className: "space-y-1", children: items.map((item) => {
    const isActive = item.key === active;
    return /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          onSelect(item.key);
          setMobileNav(false);
        },
        className: cn(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
          isActive ? "bg-brand-600 text-white shadow-sm" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: cn("h-5 w-5", isActive ? "text-white" : "text-ink-400") }),
          /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: item.label }),
          item.badge != null && item.badge > 0 && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                isActive ? "bg-white/20 text-white" : "bg-brand-100 text-brand-700"
              ),
              children: item.badge
            }
          )
        ]
      },
      item.key
    );
  }) });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-ink-50", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("span", { className: "hidden rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 md:inline", children: brandLabel })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600", children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        "Retour au site"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-6 py-6 lg:grid-cols-[260px_1fr]", children: [
      /* @__PURE__ */ jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "card flex items-center gap-3 p-4", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: user.initials, color: user.color, size: "lg" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-bold text-ink-900", children: user.name }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: user.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "card p-3", children: /* @__PURE__ */ jsx(NavList, {}) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setMobileNav((v) => !v),
            className: "btn-secondary w-full justify-between",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
                activeItem && /* @__PURE__ */ jsx(activeItem.icon, { className: "h-4 w-4 text-brand-600" }),
                activeItem?.label ?? "Menu"
              ] }),
              /* @__PURE__ */ jsx("span", { className: cn("transition-transform", mobileNav && "rotate-180"), children: "⌄" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileNav && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "card mt-2 overflow-hidden p-3",
            children: /* @__PURE__ */ jsx(NavList, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "min-w-0", children })
    ] })
  ] });
}
const notifications = [
  {
    id: "n1",
    type: "application",
    title: "Entretien programmé",
    body: "La Société Nationale d’Électricité vous convie à un entretien pour le poste d’Ingénieur DevOps.",
    daysAgo: 0,
    read: false
  },
  {
    id: "n2",
    type: "application",
    title: "Candidature présélectionnée",
    body: "Votre candidature au stage Développeur Front-End a été présélectionnée.",
    daysAgo: 1,
    read: false
  },
  {
    id: "n3",
    type: "alert",
    title: "Nouvelle offre correspondant à votre profil",
    body: "3 nouvelles offres « Numérique & Informatique » dans le District de la Capitale.",
    daysAgo: 2,
    read: false
  },
  {
    id: "n4",
    type: "message",
    title: "Message du Ministère de la Santé",
    body: "Merci de compléter votre dossier avant le 30 du mois en cours.",
    daysAgo: 4,
    read: true
  },
  {
    id: "n5",
    type: "system",
    title: "Profil à 85 % complété",
    body: "Ajoutez une certification pour atteindre 100 % et booster votre visibilité.",
    daysAgo: 6,
    read: true
  }
];
const coverLetters = [
  {
    id: "cl1",
    title: "Lettre — Ingénierie & Numérique",
    updatedDaysAgo: 3,
    excerpt: "Madame, Monsieur, forte d’une solide expérience en développement logiciel, je souhaite mettre mes compétences au service de la transformation numérique de l’administration…"
  },
  {
    id: "cl2",
    title: "Lettre — Fonction publique (concours)",
    updatedDaysAgo: 12,
    excerpt: "Madame, Monsieur, profondément attachée aux valeurs du service public, je me présente au concours afin de contribuer à la modernisation de nos institutions…"
  },
  {
    id: "cl3",
    title: "Lettre — Gestion de projet",
    updatedDaysAgo: 28,
    excerpt: "Madame, Monsieur, ma maîtrise des méthodes agiles et mon sens de l’organisation me permettront de piloter efficacement vos projets stratégiques…"
  }
];
const orgStats = [
  { label: "Offres actives", value: "38", delta: "+4 ce mois", trend: "up", icon: "Briefcase" },
  { label: "Candidatures reçues", value: "1 246", delta: "+18 %", trend: "up", icon: "Users" },
  { label: "Entretiens planifiés", value: "52", delta: "+7", trend: "up", icon: "CalendarCheck" },
  { label: "Taux de réponse", value: "94 %", delta: "+2 pts", trend: "up", icon: "Activity" }
];
const orgOffers = [
  { id: "o1", title: "Ingénieur DevOps Senior", ref: "SNE-2026-031", status: "Active", applicants: 86, views: 4120, daysLeft: 12 },
  { id: "o2", title: "Chargé de communication digitale", ref: "SNE-2026-029", status: "Active", applicants: 142, views: 6890, daysLeft: 5 },
  { id: "o3", title: "Technicien réseau électrique", ref: "SNE-2026-027", status: "Active", applicants: 67, views: 2980, daysLeft: 21 },
  { id: "o4", title: "Assistant administratif", ref: "SNE-2026-024", status: "En pause", applicants: 54, views: 1870, daysLeft: 0 },
  { id: "o5", title: "Comptable confirmé", ref: "SNE-2026-019", status: "Clôturée", applicants: 203, views: 9120, daysLeft: 0 }
];
const orgCandidates = [
  { id: "c1", name: "Aïcha Diallo", role: "Ingénieure Logicielle", offer: "Ingénieur DevOps Senior", status: "Entretien", matchScore: 94, avatarColor: "#1f47e6", appliedDaysAgo: 3 },
  { id: "c2", name: "Moussa Koné", role: "Administrateur Système", offer: "Ingénieur DevOps Senior", status: "Présélectionné", matchScore: 88, avatarColor: "#059669", appliedDaysAgo: 4 },
  { id: "c3", name: "Nadia Traoré", role: "Community Manager", offer: "Chargé de communication digitale", status: "Nouveau", matchScore: 82, avatarColor: "#dc2626", appliedDaysAgo: 1 },
  { id: "c4", name: "Yao Adjovi", role: "Technicien Électricité", offer: "Technicien réseau électrique", status: "Présélectionné", matchScore: 79, avatarColor: "#ea580c", appliedDaysAgo: 6 },
  { id: "c5", name: "Sophie Mensah", role: "Cheffe de projet digital", offer: "Chargé de communication digitale", status: "Nouveau", matchScore: 76, avatarColor: "#7c3aed", appliedDaysAgo: 2 }
];
const orgMessages = [
  { id: "m1", from: "Aïcha Diallo", role: "Candidate — DevOps", preview: "Bonjour, je vous confirme ma disponibilité pour l’entretien de jeudi…", daysAgo: 0, unread: true, avatarColor: "#1f47e6" },
  { id: "m2", from: "Nadia Traoré", role: "Candidate — Communication", preview: "Merci pour votre retour, voici les éléments complémentaires demandés…", daysAgo: 1, unread: true, avatarColor: "#dc2626" },
  { id: "m3", from: "Direction des RH", role: "Interne", preview: "Validation du calendrier de recrutement du trimestre.", daysAgo: 2, unread: false, avatarColor: "#059669" },
  { id: "m4", from: "Moussa Koné", role: "Candidat — DevOps", preview: "Je reste à votre disposition pour tout complément d’information.", daysAgo: 3, unread: false, avatarColor: "#7c3aed" }
];
const applicationsTrend = [
  { month: "Jan", value: 120 },
  { month: "Fév", value: 168 },
  { month: "Mar", value: 145 },
  { month: "Avr", value: 210 },
  { month: "Mai", value: 256 },
  { month: "Juin", value: 312 }
];
export {
  DashboardShell as D,
  orgCandidates as a,
  orgOffers as b,
  coverLetters as c,
  applicationsTrend as d,
  orgStats as e,
  notifications as n,
  orgMessages as o
};
