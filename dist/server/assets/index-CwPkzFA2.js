import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutDashboard, Briefcase, Users, MessageSquare, Settings, Plus, TrendingUp, BarChart3, Eye, Pencil, Pause, MoreHorizontal, Search, Mail } from "lucide-react";
import { o as orgMessages, a as orgCandidates, D as DashboardShell, b as orgOffers, d as applicationsTrend, e as orgStats } from "./dashboard-BKC6oeDJ.js";
import { c as cn, A as Avatar, i as initials, B as Badge, f as formatNumber } from "./Badge-txxXTAF8.js";
import { I as Icon } from "./Icon-CFlu58Vi.js";
import { c as Route } from "./router-B2_hfGdf.js";
import "react";
import "@tanstack/react-query";
const ORG = {
  name: "Société Nationale d’Électricité",
  short: "SNE",
  color: "#ea580c"
};
function OrgDashboard() {
  const {
    section = "stats"
  } = Route.useSearch();
  const navigate = useNavigate({
    from: Route.fullPath
  });
  const unreadMsg = orgMessages.filter((m) => m.unread).length;
  const newCandidates = orgCandidates.filter((c) => c.status === "Nouveau").length;
  const items = [{
    key: "stats",
    label: "Tableau de bord",
    icon: LayoutDashboard
  }, {
    key: "offres",
    label: "Gestion des offres",
    icon: Briefcase,
    badge: orgOffers.length
  }, {
    key: "candidatures",
    label: "Candidatures",
    icon: Users,
    badge: newCandidates
  }, {
    key: "messages",
    label: "Messages",
    icon: MessageSquare,
    badge: unreadMsg
  }, {
    key: "parametres",
    label: "Paramètres",
    icon: Settings
  }];
  return /* @__PURE__ */ jsxs(DashboardShell, { brandLabel: "Espace organisme", items, active: section, onSelect: (key) => navigate({
    search: {
      section: key
    }
  }), user: {
    name: ORG.name,
    subtitle: "Organisme vérifié",
    initials: ORG.short,
    color: ORG.color
  }, children: [
    section === "stats" && /* @__PURE__ */ jsx(StatsPanel, {}),
    section === "offres" && /* @__PURE__ */ jsx(OffersPanel, {}),
    section === "candidatures" && /* @__PURE__ */ jsx(CandidatesPanel, {}),
    section === "messages" && /* @__PURE__ */ jsx(MessagesPanel, {}),
    section === "parametres" && /* @__PURE__ */ jsx(OrgSettingsPanel, {})
  ] });
}
function PanelHeader({
  title,
  subtitle,
  action
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-5 flex flex-wrap items-end justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-xl font-extrabold text-ink-900", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: subtitle })
    ] }),
    action
  ] });
}
function StatsPanel() {
  const max = Math.max(...applicationsTrend.map((d) => d.value));
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Tableau de bord", subtitle: "Vue d’ensemble de votre activité de recrutement.", action: /* @__PURE__ */ jsxs("button", { className: "btn-primary", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Publier une offre"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: orgStats.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.06
    }, className: "card p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600", children: /* @__PURE__ */ jsx(Icon, { name: s.icon, className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("span", { className: cn("inline-flex items-center gap-1 text-xs font-semibold", s.trend === "up" ? "text-accent-600" : "text-red-500"), children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
          s.delta
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-2xl font-extrabold text-ink-900", children: s.value }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("h3", { className: "inline-flex items-center gap-2 font-display font-bold text-ink-900", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-brand-600" }),
            " Candidatures reçues"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-ink-400", children: "6 derniers mois" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex h-48 items-end gap-3", children: applicationsTrend.map((d, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(motion.div, { initial: {
            height: 0
          }, animate: {
            height: `${d.value / max * 100}%`
          }, transition: {
            delay: i * 0.08,
            duration: 0.5
          }, className: "w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400", title: `${d.value} candidatures` }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-ink-400", children: d.month })
        ] }, d.month)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Candidats récents" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: orgCandidates.slice(0, 4).map((c) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: initials(c.name), color: c.avatarColor }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: c.name }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: c.role })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-accent-700", children: [
            c.matchScore,
            "%"
          ] })
        ] }, c.id)) })
      ] })
    ] })
  ] });
}
const offerStatusVariant = {
  Active: "accent",
  "En pause": "gold",
  Clôturée: "neutral"
};
function OffersPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Gestion des offres", subtitle: "Créez, modifiez et suivez la performance de vos annonces.", action: /* @__PURE__ */ jsxs("button", { className: "btn-primary", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Nouvelle offre"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "card overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400 md:grid", children: [
        /* @__PURE__ */ jsx("span", { children: "Offre" }),
        /* @__PURE__ */ jsx("span", { children: "Statut" }),
        /* @__PURE__ */ jsx("span", { children: "Candidats" }),
        /* @__PURE__ */ jsx("span", { children: "Vues" }),
        /* @__PURE__ */ jsx("span", {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-ink-100", children: orgOffers.map((o) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3 px-5 py-4 md:grid-cols-[2fr_1fr_1fr_1fr_auto] md:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900", children: o.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-400", children: [
            "Réf. ",
            o.ref,
            o.daysLeft > 0 && o.status === "Active" && ` · ${o.daysLeft} j restants`
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { variant: offerStatusVariant[o.status], children: o.status }) }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 text-sm text-ink-700", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-ink-400 md:hidden" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: o.applicants }),
          /* @__PURE__ */ jsx("span", { className: "text-ink-400 md:hidden", children: "candidats" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 text-sm text-ink-700", children: [
          /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-ink-400 md:hidden" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatNumber(o.views) }),
          /* @__PURE__ */ jsx("span", { className: "text-ink-400 md:hidden", children: "vues" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(IconBtn, { icon: Pencil, label: "Modifier" }),
          /* @__PURE__ */ jsx(IconBtn, { icon: Pause, label: "Mettre en pause" }),
          /* @__PURE__ */ jsx(IconBtn, { icon: MoreHorizontal, label: "Plus" })
        ] })
      ] }, o.id)) })
    ] })
  ] });
}
function IconBtn({
  icon: I,
  label
}) {
  return /* @__PURE__ */ jsx("button", { className: "flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-700", "aria-label": label, title: label, children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" }) });
}
const candidateStatusVariant = {
  Nouveau: "brand",
  "Présélectionné": "accent",
  Entretien: "gold",
  "Refusé": "danger"
};
function CandidatesPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Candidatures", subtitle: "Évaluez et faites avancer les candidats dans votre pipeline." }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
      /* @__PURE__ */ jsx("input", { placeholder: "Rechercher un candidat…", className: "input pl-10" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: orgCandidates.map((c) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-wrap items-center gap-4 p-4", children: [
      /* @__PURE__ */ jsx(Avatar, { initials: initials(c.name), color: c.avatarColor, size: "lg" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900", children: c.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500", children: c.role }),
        /* @__PURE__ */ jsxs("p", { className: "mt-0.5 text-xs text-ink-400", children: [
          "Postule à : ",
          c.offer,
          " · il y a ",
          c.appliedDaysAgo,
          "j"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-display text-lg font-extrabold text-accent-700", children: [
          c.matchScore,
          "%"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wide text-ink-400", children: "match" })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: candidateStatusVariant[c.status], className: "px-3 py-1.5", children: c.status }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { className: "btn-secondary", children: "Voir le profil" }),
        /* @__PURE__ */ jsx("button", { className: "btn-primary", children: "Contacter" })
      ] })
    ] }, c.id)) })
  ] });
}
function MessagesPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Messages", subtitle: "Échangez avec les candidats et votre équipe." }),
    /* @__PURE__ */ jsx("div", { className: "card divide-y divide-ink-100", children: orgMessages.map((m) => /* @__PURE__ */ jsxs("button", { className: cn("flex w-full items-center gap-4 p-4 text-left transition hover:bg-ink-50", m.unread && "bg-brand-50/40"), children: [
      /* @__PURE__ */ jsx(Avatar, { initials: initials(m.from), color: m.avatarColor, size: "lg" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900", children: m.from }),
          /* @__PURE__ */ jsx("span", { className: "shrink-0 text-xs text-ink-400", children: m.daysAgo === 0 ? "auj." : `${m.daysAgo}j` })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400", children: m.role }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-sm text-ink-600", children: m.preview })
      ] }),
      m.unread && /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 shrink-0 rounded-full bg-brand-600" })
    ] }, m.id)) })
  ] });
}
function OrgSettingsPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Paramètres de l’organisme", subtitle: "Gérez le profil public et l’équipe." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: ORG.short, color: ORG.color, size: "xl", className: "!rounded-2xl" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink-900", children: ORG.name }),
            /* @__PURE__ */ jsx(Badge, { variant: "accent", className: "mt-1", children: "Organisme vérifié" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Nom de l’organisme", defaultValue: ORG.name }),
          /* @__PURE__ */ jsx(Field, { label: "Secteur", defaultValue: "Énergie" }),
          /* @__PURE__ */ jsx(Field, { label: "E-mail de recrutement", defaultValue: "recrutement@sne.gouv.tl" }),
          /* @__PURE__ */ jsx(Field, { label: "Téléphone", defaultValue: "+228 22 00 40 40" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-primary mt-5", children: "Enregistrer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Équipe de recrutement" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          ["Dr. Samuel Eto · DRH", "Mariam Sow · Chargée RH", "Ibrahim Touré · Recruteur"].map((member) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-ink-100 p-3", children: [
            /* @__PURE__ */ jsx(Avatar, { initials: initials(member.split(" · ")[0] ?? member), color: "#1f47e6" }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-sm font-medium text-ink-700", children: member }),
            /* @__PURE__ */ jsx("button", { className: "btn-ghost text-sm", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) })
          ] }, member)),
          /* @__PURE__ */ jsxs("button", { className: "btn-secondary w-full", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
            " Inviter un membre"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  defaultValue
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "label", children: label }),
    /* @__PURE__ */ jsx("input", { className: "input", defaultValue })
  ] });
}
export {
  OrgDashboard as component
};
