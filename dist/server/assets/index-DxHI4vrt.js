import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LayoutDashboard, Target, Users, Building2, Briefcase, GraduationCap, FileText, Settings, UserCheck, TrendingUp, BarChart3, Activity, BadgeCheck, Eye, Trash2, Plus, Search, MoreVertical, CheckCircle2, Ban } from "lucide-react";
import { D as DashboardShell } from "./DashboardShell-BpKgXSVz.js";
import { A as Avatar } from "./Avatar-CEdpIxOh.js";
import { B as Badge } from "./Badge-Q0U1gXN-.js";
import { I as Icon } from "./Icon-R_uPxe6u.js";
import { b as institutions, i as institutionById } from "./institutions-CeyynnsY.js";
import { a as jobs, b as applications, j as jobById } from "./applications-pkD4SWq_.js";
import { t as trainings } from "./trainings-j3e0QMRw.js";
import { u as userById } from "./users-D7mwnC__.js";
import { r as regionName } from "./regions-BTAjTKaz.js";
import { a as categoryName } from "./categories-B2CZv2U0.js";
import { k as kindLabels, s as statusVariant } from "./display-Fco6ESdN.js";
import { f as formatNumber, c as cn, i as initials, t as timeAgo } from "./Logo-Nf2y5-j_.js";
import { d as Route } from "./router-BsMxc6_M.js";
import "@tanstack/react-query";
const adminCandidates = [
  { id: "cand-001", name: "Aïcha Diallo", title: "Ingénieure Logicielle", domain: "Numérique & Informatique", regionId: "reg-cap", email: "aicha.diallo@email.bj", phone: "+229 90 12 34 56", avatarColor: "#1f47e6", status: "Actif", registeredDaysAgo: 2, cvFileName: "CV_Aicha_Diallo.pdf" },
  { id: "cand-002", name: "Koffi Mensah", title: "Gestionnaire Administratif", domain: "Administration", regionId: "reg-littoral", email: "koffi.mensah@email.bj", phone: "+229 91 22 33 44", avatarColor: "#059669", status: "Actif", registeredDaysAgo: 3, cvFileName: "CV_Koffi_Mensah.pdf" },
  { id: "cand-003", name: "Fatou Camara", title: "Médecin Généraliste", domain: "Santé & Action sociale", regionId: "reg-centre", email: "fatou.camara@email.bj", phone: "+229 92 55 66 77", avatarColor: "#dc2626", status: "Actif", registeredDaysAgo: 5, cvFileName: "CV_Fatou_Camara.pdf" },
  { id: "cand-004", name: "Ibrahim Touré", title: "Ingénieur Énergies", domain: "Ingénierie & BTP", regionId: "reg-littoral", email: "ibrahim.toure@email.bj", phone: "+229 93 44 55 66", avatarColor: "#ea580c", status: "En attente", registeredDaysAgo: 1, cvFileName: "CV_Ibrahim_Toure.pdf" },
  { id: "cand-005", name: "Awa Bah", title: "Professeure de Lycée", domain: "Éducation & Recherche", regionId: "reg-ouest", email: "awa.bah@email.bj", phone: "+229 94 11 22 33", avatarColor: "#7c3aed", status: "Actif", registeredDaysAgo: 7, cvFileName: "CV_Awa_Bah.pdf" },
  { id: "cand-006", name: "Marc Houngbé", title: "Juriste Public", domain: "Droit & Justice", regionId: "reg-cap", email: "marc.houngbe@email.bj", phone: "+229 95 66 77 88", avatarColor: "#0891b2", status: "Suspendu", registeredDaysAgo: 18, cvFileName: "CV_Marc_Houngbe.pdf" },
  { id: "cand-007", name: "Nadia Sossou", title: "Chargée de Communication", domain: "Communication & Médias", regionId: "reg-maritime", email: "nadia.sossou@email.bj", phone: "+229 96 33 44 55", avatarColor: "#db2777", status: "Actif", registeredDaysAgo: 9, cvFileName: "CV_Nadia_Sossou.pdf" },
  { id: "cand-008", name: "Yao Adjovi", title: "Technicien Réseau", domain: "Numérique & Informatique", regionId: "reg-sud", email: "yao.adjovi@email.bj", phone: "+229 97 88 99 00", avatarColor: "#16a34a", status: "En attente", registeredDaysAgo: 1, cvFileName: "CV_Yao_Adjovi.pdf" }
];
const activityFeed = [
  { id: "a1", type: "candidat", text: "Yao Adjovi s’est inscrit comme candidat (Technicien Réseau).", daysAgo: 0 },
  { id: "a2", type: "offre", text: "Nouvelle offre publiée par le Ministère de la Santé Publique.", daysAgo: 0 },
  { id: "a3", type: "organisme", text: "La Mairie de Cotonou a été vérifiée et activée.", daysAgo: 1 },
  { id: "a4", type: "candidature", text: "128 nouvelles candidatures reçues sur l’ensemble de la plateforme.", daysAgo: 1 },
  { id: "a5", type: "formation", text: "Formation « Cybersécurité » ajoutée par l’Agence Nationale du Numérique.", daysAgo: 2 },
  { id: "a6", type: "candidat", text: "Ibrahim Touré s’est inscrit comme candidat (Ingénieur Énergies).", daysAgo: 2 }
];
const signupsTrend = [
  { month: "Jan", value: 320 },
  { month: "Fév", value: 410 },
  { month: "Mar", value: 380 },
  { month: "Avr", value: 520 },
  { month: "Mai", value: 610 },
  { month: "Juin", value: 740 }
];
const accountStatusVariant = {
  Actif: "accent",
  "En attente": "gold",
  Suspendu: "danger"
};
function AdminDashboard() {
  const {
    section = "overview"
  } = Route.useSearch();
  const navigate = useNavigate({
    from: Route.fullPath
  });
  const pendingCandidates = adminCandidates.filter((c) => c.status === "En attente").length;
  const items = [{
    key: "overview",
    label: "Vue d’ensemble",
    icon: LayoutDashboard
  }, {
    key: "matching",
    label: "Profils par offre",
    icon: Target
  }, {
    key: "candidats",
    label: "Candidats",
    icon: Users,
    badge: adminCandidates.length
  }, {
    key: "administrations",
    label: "Administrations",
    icon: Building2,
    badge: institutions.length
  }, {
    key: "offres",
    label: "Offres & concours",
    icon: Briefcase,
    badge: jobs.length
  }, {
    key: "formations",
    label: "Formations",
    icon: GraduationCap,
    badge: trainings.length
  }, {
    key: "candidatures",
    label: "Candidatures",
    icon: FileText,
    badge: applications.length
  }, {
    key: "parametres",
    label: "Paramètres",
    icon: Settings
  }];
  return /* @__PURE__ */ jsxs(DashboardShell, { brandLabel: "Super Admin", items, active: section, onSelect: (key) => navigate({
    search: {
      section: key
    }
  }), user: {
    name: "Super Administrateur",
    subtitle: "Plateforme nationale",
    initials: "SA",
    color: "#111a4a"
  }, children: [
    section === "overview" && /* @__PURE__ */ jsx(OverviewPanel, { pending: pendingCandidates }),
    section === "candidats" && /* @__PURE__ */ jsx(CandidatesPanel, {}),
    section === "administrations" && /* @__PURE__ */ jsx(AdministrationsPanel, {}),
    section === "offres" && /* @__PURE__ */ jsx(OffresPanel, {}),
    section === "matching" && /* @__PURE__ */ jsx(MatchingPanel, {}),
    section === "formations" && /* @__PURE__ */ jsx(FormationsPanel, {}),
    section === "candidatures" && /* @__PURE__ */ jsx(CandidaturesPanel, {}),
    section === "parametres" && /* @__PURE__ */ jsx(SettingsPanel, {})
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
function OverviewPanel({
  pending
}) {
  const totalApplicants = jobs.reduce((s, j) => s + j.applicants, 0);
  const kpis = [{
    label: "Candidats inscrits",
    value: formatNumber(adminCandidates.length),
    icon: "Users",
    delta: "+12 cette semaine",
    color: "bg-brand-50 text-brand-600"
  }, {
    label: "Administrations",
    value: formatNumber(institutions.length),
    icon: "Building2",
    delta: "+3 ce mois",
    color: "bg-accent-50 text-accent-700"
  }, {
    label: "Offres & concours",
    value: formatNumber(jobs.length),
    icon: "Briefcase",
    delta: "+8 cette semaine",
    color: "bg-gold-400/15 text-gold-600"
  }, {
    label: "Candidatures",
    value: formatNumber(totalApplicants),
    icon: "FileText",
    delta: "+18 %",
    color: "bg-brand-50 text-brand-600"
  }];
  const max = Math.max(...signupsTrend.map((d) => d.value));
  const topOrgs = [...institutions].sort((a, b) => b.jobCount - a.jobCount).slice(0, 5);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Vue d’ensemble", subtitle: "Pilotage global de la plateforme nationale de l’emploi." }),
    pending > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-4", children: [
      /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 text-gold-600", children: /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("p", { className: "flex-1 text-sm text-ink-700", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
          pending,
          " compte(s) candidat"
        ] }),
        " en attente de validation."
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/admin", search: {
        section: "candidats"
      }, className: "btn-secondary", children: "Examiner" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: kpis.map((k, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: i * 0.06
    }, className: "card p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: cn("flex h-10 w-10 items-center justify-center rounded-xl", k.color), children: /* @__PURE__ */ jsx(Icon, { name: k.icon, className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-accent-600", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
          k.delta
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-2xl font-extrabold text-ink-900", children: k.value }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: k.label })
    ] }, k.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("h3", { className: "inline-flex items-center gap-2 font-display font-bold text-ink-900", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-brand-600" }),
            " Inscriptions candidats"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-ink-400", children: "6 derniers mois" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex h-52 flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-end gap-3", children: signupsTrend.map((d, i) => /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 items-end", children: /* @__PURE__ */ jsx(motion.div, { initial: {
            height: 0
          }, animate: {
            height: `${d.value / max * 100}%`
          }, transition: {
            delay: i * 0.08,
            duration: 0.5
          }, className: "w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400", title: `${d.value} inscriptions` }) }, d.month)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 flex gap-3", children: signupsTrend.map((d) => /* @__PURE__ */ jsx("span", { className: "flex-1 text-center text-xs text-ink-400", children: d.month }, d.month)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "inline-flex items-center gap-2 font-display font-bold text-ink-900", children: [
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-brand-600" }),
          " Activité récente"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: activityFeed.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-700", children: a.text }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-400", children: a.daysAgo === 0 ? "Aujourd'hui" : `il y a ${a.daysAgo} j` })
          ] })
        ] }, a.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Administrations les plus actives" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: topOrgs.map((o) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Avatar, { initials: o.logoInitials, color: o.logoColor, className: "!rounded-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: o.name }),
          /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: o.type })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "shrink-0 text-sm font-bold text-accent-700", children: [
          o.jobCount,
          " offres"
        ] })
      ] }, o.id)) })
    ] })
  ] });
}
function Kebab({
  actions
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setOpen((v) => !v), className: cn("flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-700", open && "bg-ink-100 text-ink-700"), "aria-label": "Actions", children: /* @__PURE__ */ jsx(MoreVertical, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-30", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.96,
        y: -4
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.96,
        y: -4
      }, transition: {
        duration: 0.14
      }, className: "absolute right-0 z-40 mt-1 w-48 overflow-hidden rounded-xl border border-ink-100 bg-white p-1.5 shadow-card-hover", children: actions.map((a, i) => /* @__PURE__ */ jsxs("button", { onClick: () => {
        a.onClick();
        setOpen(false);
      }, className: cn("flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition", a.danger ? "text-red-600 hover:bg-red-50" : "text-ink-700 hover:bg-ink-50"), children: [
        /* @__PURE__ */ jsx(a.icon, { className: "h-4 w-4" }),
        a.label
      ] }, i)) })
    ] }) })
  ] });
}
function CandidatesPanel() {
  const [list, setList] = useState(adminCandidates);
  const [q, setQ] = useState("");
  const filtered = list.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.title.toLowerCase().includes(q.toLowerCase()) || c.domain.toLowerCase().includes(q.toLowerCase()));
  const setStatus = (id, status) => setList((prev) => prev.map((c) => c.id === id ? {
    ...c,
    status
  } : c));
  const remove = (id) => setList((prev) => prev.filter((c) => c.id !== id));
  const actions = (c) => [{
    label: "Voir le profil",
    icon: Eye,
    onClick: () => {
    }
  }, c.status === "Suspendu" ? {
    label: "Réactiver",
    icon: CheckCircle2,
    onClick: () => setStatus(c.id, "Actif")
  } : c.status === "En attente" ? {
    label: "Valider le compte",
    icon: CheckCircle2,
    onClick: () => setStatus(c.id, "Actif")
  } : {
    label: "Suspendre",
    icon: Ban,
    onClick: () => setStatus(c.id, "Suspendu")
  }, {
    label: "Supprimer",
    icon: Trash2,
    onClick: () => remove(c.id),
    danger: true
  }];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Candidats", subtitle: `${list.length} candidats inscrits sur la plateforme.` }),
    /* @__PURE__ */ jsx(SearchInput, { value: q, onChange: setQ, placeholder: "Rechercher un candidat…" }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-4 hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,1.4fr)_1fr_120px_120px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400", children: [
        /* @__PURE__ */ jsx("span", { children: "Candidat" }),
        /* @__PURE__ */ jsx("span", { children: "Domaine" }),
        /* @__PURE__ */ jsx("span", { children: "Statut" }),
        /* @__PURE__ */ jsx("span", { children: "Inscrit" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Actions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-ink-100", children: filtered.map((c) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,1.4fr)_1fr_120px_120px_44px] items-center gap-4 px-5 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: initials(c.name), color: c.avatarColor }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: c.name }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: c.title })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "truncate text-sm text-ink-600", children: c.domain }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { variant: accountStatusVariant[c.status], children: c.status }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-500", children: [
          "il y a ",
          c.registeredDaysAgo,
          " j"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Kebab, { actions: actions(c) }) })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3 md:hidden", children: filtered.map((c) => /* @__PURE__ */ jsx("div", { className: "card p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Avatar, { initials: initials(c.name), color: c.avatarColor, size: "lg", className: "!h-11 !w-11" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate font-semibold text-ink-900", children: c.name }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm text-ink-500", children: c.title })
          ] }),
          /* @__PURE__ */ jsx(Kebab, { actions: actions(c) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 truncate text-xs text-ink-400", children: [
          c.domain,
          " · ",
          regionName(c.regionId)
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Badge, { variant: accountStatusVariant[c.status], children: c.status }) })
      ] })
    ] }) }, c.id)) })
  ] });
}
function AdministrationsPanel() {
  const [list, setList] = useState(institutions);
  const [q, setQ] = useState("");
  const filtered = list.filter((o) => o.name.toLowerCase().includes(q.toLowerCase()) || o.type.toLowerCase().includes(q.toLowerCase()));
  const toggleVerified = (id) => setList((prev) => prev.map((o) => o.id === id ? {
    ...o,
    verified: !o.verified
  } : o));
  const remove = (id) => setList((prev) => prev.filter((o) => o.id !== id));
  const actions = (o) => [{
    label: "Voir la fiche",
    icon: Eye,
    onClick: () => {
    }
  }, o.verified ? {
    label: "Retirer la vérif.",
    icon: Ban,
    onClick: () => toggleVerified(o.id)
  } : {
    label: "Vérifier",
    icon: BadgeCheck,
    onClick: () => toggleVerified(o.id)
  }, {
    label: "Supprimer",
    icon: Trash2,
    onClick: () => remove(o.id),
    danger: true
  }];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Administrations", subtitle: `${list.length} organismes enregistrés.` }),
    /* @__PURE__ */ jsx(SearchInput, { value: q, onChange: setQ, placeholder: "Rechercher une administration…" }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-4 hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,1.6fr)_1fr_100px_120px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400", children: [
        /* @__PURE__ */ jsx("span", { children: "Organisme" }),
        /* @__PURE__ */ jsx("span", { children: "Type" }),
        /* @__PURE__ */ jsx("span", { className: "text-right", children: "Offres" }),
        /* @__PURE__ */ jsx("span", { children: "Statut" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Actions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-ink-100", children: filtered.map((o) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,1.6fr)_1fr_100px_120px_44px] items-center gap-4 px-5 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: o.logoInitials, color: o.logoColor, className: "!rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: o.shortName }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: regionName(o.regionId) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "truncate text-sm text-ink-600", children: o.type }),
        /* @__PURE__ */ jsx("p", { className: "text-right text-sm font-semibold text-ink-800", children: o.jobCount }),
        /* @__PURE__ */ jsx("div", { children: o.verified ? /* @__PURE__ */ jsx(Badge, { variant: "accent", icon: /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3" }), children: "Vérifié" }) : /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "En attente" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Kebab, { actions: actions(o) }) })
      ] }, o.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3 md:hidden", children: filtered.map((o) => /* @__PURE__ */ jsx("div", { className: "card p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Avatar, { initials: o.logoInitials, color: o.logoColor, size: "lg", className: "!h-11 !w-11 !rounded-lg" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate font-semibold text-ink-900", children: o.shortName }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-500", children: o.type })
          ] }),
          /* @__PURE__ */ jsx(Kebab, { actions: actions(o) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: [
          o.verified ? /* @__PURE__ */ jsx(Badge, { variant: "accent", icon: /* @__PURE__ */ jsx(BadgeCheck, { className: "h-3 w-3" }), children: "Vérifié" }) : /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "En attente" }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-500", children: [
            o.jobCount,
            " offres"
          ] })
        ] })
      ] })
    ] }) }, o.id)) })
  ] });
}
function OffresPanel() {
  const navigate = useNavigate();
  const [list, setList] = useState(jobs);
  const [q, setQ] = useState("");
  const filtered = list.filter((j) => j.title.toLowerCase().includes(q.toLowerCase()));
  const remove = (id) => setList((prev) => prev.filter((j) => j.id !== id));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Offres & concours", subtitle: `${list.length} annonces publiées sur la plateforme.` }),
    /* @__PURE__ */ jsx(SearchInput, { value: q, onChange: setQ, placeholder: "Rechercher une offre…" }),
    /* @__PURE__ */ jsxs("div", { className: "card mt-4 hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,2fr)_1fr_110px_90px_44px] items-center gap-4 border-b border-ink-100 bg-ink-50/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-400", children: [
        /* @__PURE__ */ jsx("span", { children: "Offre" }),
        /* @__PURE__ */ jsx("span", { children: "Type" }),
        /* @__PURE__ */ jsx("span", { className: "text-right", children: "Candidats" }),
        /* @__PURE__ */ jsx("span", { children: "Publiée" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Actions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-ink-100", children: filtered.map((j) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[minmax(0,2fr)_1fr_110px_90px_44px] items-center gap-4 px-5 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: j.title }),
          /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-400", children: j.reference })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { variant: "brand", children: kindLabels[j.kind] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-right text-sm font-semibold text-ink-800", children: j.applicants }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: timeAgo(j.publishedAt) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Kebab, { actions: [{
          label: "Voir l’offre",
          icon: Eye,
          onClick: () => navigate({
            to: "/offres/$slug",
            params: {
              slug: j.slug
            }
          })
        }, {
          label: "Retirer",
          icon: Trash2,
          onClick: () => remove(j.id),
          danger: true
        }] }) })
      ] }, j.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3 md:hidden", children: filtered.map((j) => /* @__PURE__ */ jsxs("div", { className: "card p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate font-semibold text-ink-900", children: j.title }),
          /* @__PURE__ */ jsx("p", { className: "truncate text-xs text-ink-400", children: j.reference })
        ] }),
        /* @__PURE__ */ jsx(Kebab, { actions: [{
          label: "Voir l’offre",
          icon: Eye,
          onClick: () => navigate({
            to: "/offres/$slug",
            params: {
              slug: j.slug
            }
          })
        }, {
          label: "Retirer",
          icon: Trash2,
          onClick: () => remove(j.id),
          danger: true
        }] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "brand", children: kindLabels[j.kind] }),
        /* @__PURE__ */ jsxs("span", { children: [
          j.applicants,
          " candidats"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Publiée ",
          timeAgo(j.publishedAt)
        ] })
      ] })
    ] }, j.id)) })
  ] });
}
const TOKEN_STOP = /* @__PURE__ */ new Set(["fonction", "publique", "action", "sociale"]);
function tokenize(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z]+/).filter((w) => w.length > 3 && !TOKEN_STOP.has(w));
}
function matchScore(candidate, job) {
  const jobTokens = new Set(tokenize(categoryName(job.categoryId)));
  const overlap = tokenize(candidate.domain).filter((t) => jobTokens.has(t)).length;
  let score = 52 + overlap * 23;
  if (candidate.regionId === job.regionId) score += 11;
  const h = [...candidate.id].reduce((a, ch) => a + ch.charCodeAt(0), 0);
  score += h % 9 - 4;
  return Math.max(44, Math.min(99, score));
}
function matchTier(score) {
  if (score >= 85) return {
    label: "Excellent",
    variant: "accent"
  };
  if (score >= 70) return {
    label: "Bon profil",
    variant: "brand"
  };
  return {
    label: "Moyen",
    variant: "neutral"
  };
}
function MatchingPanel() {
  const [jobId, setJobId] = useState(jobs[0]?.id ?? "");
  const [onlyStrong, setOnlyStrong] = useState(false);
  const job = jobById(jobId);
  const ranked = job ? adminCandidates.map((c) => ({
    candidate: c,
    score: matchScore(c, job)
  })).filter((r) => onlyStrong ? r.score >= 70 : true).sort((a, b) => b.score - a.score) : [];
  const inst = job ? institutionById(job.institutionId) : void 0;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Profils par offre", subtitle: "Sélectionnez une offre pour découvrir les candidats qui y correspondent le mieux." }),
    /* @__PURE__ */ jsxs("div", { className: "card p-4 sm:p-5", children: [
      /* @__PURE__ */ jsx("label", { className: "label", children: "Offre ciblée" }),
      /* @__PURE__ */ jsx("select", { value: jobId, onChange: (e) => setJobId(e.target.value), className: "input cursor-pointer", children: jobs.map((j) => {
        const o = institutionById(j.institutionId);
        return /* @__PURE__ */ jsxs("option", { value: j.id, children: [
          j.title,
          " — ",
          o?.shortName ?? ""
        ] }, j.id);
      }) }),
      job && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink-100 pt-4 text-sm text-ink-600", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: inst?.logoInitials ?? "TL", color: inst?.logoColor, className: "!h-8 !w-8 !rounded-lg !text-xs" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-900", children: inst?.shortName })
        ] }),
        /* @__PURE__ */ jsx(Badge, { variant: "brand", children: kindLabels[job.kind] }),
        /* @__PURE__ */ jsx(Badge, { variant: "neutral", children: job.contractType }),
        /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: categoryName(job.categoryId) }),
        /* @__PURE__ */ jsxs("span", { className: "text-ink-500", children: [
          "· ",
          regionName(job.regionId)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 mt-5 flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-ink-600", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-ink-900", children: ranked.length }),
        " profil(s) correspondant(s)"
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center gap-2 text-sm text-ink-600", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: onlyStrong, onChange: (e) => setOnlyStrong(e.target.checked), className: "h-4 w-4 accent-brand-600" }),
        "Correspondance ≥ 70 %"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      ranked.map(({
        candidate: c,
        score
      }, i) => {
        const tier = matchTier(score);
        return /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: Math.min(i * 0.04, 0.25)
        }, className: "card flex flex-wrap items-center gap-4 p-4", children: [
          /* @__PURE__ */ jsx(Avatar, { initials: initials(c.name), color: c.avatarColor, size: "lg", className: "!h-12 !w-12" }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate font-semibold text-ink-900", children: c.name }),
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm text-ink-500", children: c.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-0.5 truncate text-xs text-ink-400", children: [
              c.domain,
              " · ",
              regionName(c.regionId)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex w-28 shrink-0 flex-col items-end gap-1", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg font-extrabold text-brand-700", children: [
              score,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-ink-100", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500", style: {
              width: `${score}%`
            } }) }),
            /* @__PURE__ */ jsx(Badge, { variant: tier.variant, children: tier.label })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "btn-secondary w-full sm:w-auto", children: [
            /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
            " Voir le profil"
          ] })
        ] }, c.id);
      }),
      ranked.length === 0 && /* @__PURE__ */ jsx("div", { className: "card p-10 text-center text-sm text-ink-500", children: "Aucun profil ne correspond aux critères pour cette offre." })
    ] })
  ] });
}
function FormationsPanel() {
  const [list, setList] = useState(trainings);
  const remove = (id) => setList((prev) => prev.filter((t) => t.id !== id));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Formations", subtitle: `${list.length} opportunités de formation publiées.`, action: /* @__PURE__ */ jsxs("button", { className: "btn-primary", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Ajouter"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: list.map((t) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-col p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl text-white", style: {
          backgroundColor: t.color
        }, children: /* @__PURE__ */ jsx(Icon, { name: t.icon, className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx(Kebab, { actions: [{
          label: "Modifier",
          icon: Eye,
          onClick: () => {
          }
        }, {
          label: "Supprimer",
          icon: Trash2,
          onClick: () => remove(t.id),
          danger: true
        }] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 line-clamp-2 font-display text-sm font-bold text-ink-900", children: t.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-xs text-ink-500", children: t.provider }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-1.5 border-t border-ink-100 pt-3", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "brand", children: t.category }),
        t.free ? /* @__PURE__ */ jsx(Badge, { variant: "accent", children: "Gratuit" }) : /* @__PURE__ */ jsx(Badge, { variant: "gold", children: "Payant" })
      ] })
    ] }, t.id)) })
  ] });
}
function CandidaturesPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Candidatures", subtitle: `${applications.length} candidatures suivies sur la plateforme.` }),
    /* @__PURE__ */ jsx("div", { className: "card divide-y divide-ink-100", children: applications.map((a) => {
      const job = jobById(a.jobId);
      const user = userById(a.userId);
      return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 px-5 py-4", children: [
        /* @__PURE__ */ jsx(Avatar, { initials: user ? initials(`${user.firstName} ${user.lastName}`) : "?", color: user?.avatarColor }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold text-ink-900", children: user ? `${user.firstName} ${user.lastName}` : "Candidat" }),
          /* @__PURE__ */ jsxs("p", { className: "truncate text-xs text-ink-500", children: [
            job?.title ?? "Offre",
            " · ",
            a.reference
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden text-xs text-ink-400 sm:block", children: timeAgo(a.submittedAt) }),
        /* @__PURE__ */ jsx(Badge, { variant: statusVariant[a.status], className: "px-3 py-1.5", children: a.status })
      ] }, a.id);
    }) })
  ] });
}
function SettingsPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Paramètres de la plateforme", subtitle: "Configuration générale et accès." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Informations générales" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Nom de la plateforme", defaultValue: "Président de la République du Bénin — Portail de l’Emploi" }),
          /* @__PURE__ */ jsx(Field, { label: "E-mail de contact", defaultValue: "contact@mon-emploi.bj" }),
          /* @__PURE__ */ jsx(Field, { label: "Téléphone du support", defaultValue: "+229 21 00 00 00" }),
          /* @__PURE__ */ jsx(Field, { label: "Région par défaut", defaultValue: "District de la Capitale" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-primary mt-5", children: "Enregistrer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Modération" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx(Toggle, { label: "Validation manuelle des comptes candidats" }),
          /* @__PURE__ */ jsx(Toggle, { label: "Vérification obligatoire des administrations", defaultChecked: true }),
          /* @__PURE__ */ jsx(Toggle, { label: "Modération des offres avant publication", defaultChecked: true })
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
function Toggle({
  label,
  defaultChecked
}) {
  return /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center justify-between rounded-xl border border-ink-100 p-3.5", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-ink-700", children: label }),
    /* @__PURE__ */ jsxs("span", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked, className: "peer sr-only" }),
      /* @__PURE__ */ jsx("span", { className: "h-6 w-11 rounded-full bg-ink-200 transition peer-checked:bg-brand-600" }),
      /* @__PURE__ */ jsx("span", { className: "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" })
    ] })
  ] });
}
function SearchInput({
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsx("div", { className: "max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" }),
    /* @__PURE__ */ jsx("input", { value, onChange: (e) => onChange(e.target.value), placeholder, className: "input pl-10" })
  ] }) });
}
export {
  AdminDashboard as component
};
