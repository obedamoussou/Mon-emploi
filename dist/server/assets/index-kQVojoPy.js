import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { UserRound, FileText, Pencil, Briefcase, Bell, Settings, Bookmark, Mail, Phone, MapPin, GraduationCap, Download, Trash2, Upload, Plus, CheckCircle2, CalendarClock, LayoutDashboard } from "lucide-react";
import { n as notifications, D as DashboardShell, c as coverLetters } from "./dashboard-BKC6oeDJ.js";
import { i as initials, A as Avatar, c as cn, B as Badge, t as timeAgo } from "./Badge-txxXTAF8.js";
import { E as EmptyState } from "./EmptyState-B865f-8B.js";
import { a as useUserApplications, c as currentUser, b as regionName, j as jobById, d as institutionById } from "./queries-OLKb4Xlw.js";
import { s as statusVariant } from "./display-Fco6ESdN.js";
import { R as Route } from "./router-B2_hfGdf.js";
import "react";
import "@tanstack/react-query";
function CandidateDashboard() {
  const {
    section = "profil"
  } = Route.useSearch();
  const navigate = useNavigate({
    from: Route.fullPath
  });
  const {
    data: applications = []
  } = useUserApplications(currentUser.id);
  const unread = notifications.filter((n) => !n.read).length;
  const items = [{
    key: "profil",
    label: "Profil",
    icon: UserRound
  }, {
    key: "cv",
    label: "Mon CV",
    icon: FileText
  }, {
    key: "lettres",
    label: "Lettres de motivation",
    icon: Pencil
  }, {
    key: "candidatures",
    label: "Mes candidatures",
    icon: Briefcase,
    badge: applications.length
  }, {
    key: "notifications",
    label: "Notifications",
    icon: Bell,
    badge: unread
  }, {
    key: "parametres",
    label: "Paramètres",
    icon: Settings
  }];
  return /* @__PURE__ */ jsxs(DashboardShell, { brandLabel: "Espace candidat", items, active: section, onSelect: (key) => navigate({
    search: {
      section: key
    }
  }), user: {
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    subtitle: currentUser.title,
    initials: initials(`${currentUser.firstName} ${currentUser.lastName}`),
    color: currentUser.avatarColor
  }, children: [
    section === "profil" && /* @__PURE__ */ jsx(ProfilePanel, { applications }),
    section === "cv" && /* @__PURE__ */ jsx(CvPanel, {}),
    section === "lettres" && /* @__PURE__ */ jsx(LettersPanel, {}),
    section === "candidatures" && /* @__PURE__ */ jsx(ApplicationsPanel, { applications }),
    section === "notifications" && /* @__PURE__ */ jsx(NotificationsPanel, {}),
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
function ProfilePanel({
  applications
}) {
  const u = currentUser;
  const quick = [{
    label: "Candidatures",
    value: applications.length,
    icon: Briefcase,
    color: "text-brand-600 bg-brand-50"
  }, {
    label: "Offres sauvées",
    value: u.savedJobs.length,
    icon: Bookmark,
    color: "text-accent-700 bg-accent-50"
  }, {
    label: "Notifications",
    value: notifications.filter((n) => !n.read).length,
    icon: Bell,
    color: "text-gold-600 bg-gold-400/15"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "card overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "h-24 bg-gradient-to-r from-brand-600 to-brand-800" }),
      /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "-mt-10 flex flex-wrap items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-4", children: [
            /* @__PURE__ */ jsx(Avatar, { initials: initials(`${u.firstName} ${u.lastName}`), color: u.avatarColor, size: "xl", className: "ring-4 ring-white" }),
            /* @__PURE__ */ jsxs("div", { className: "pb-1", children: [
              /* @__PURE__ */ jsxs("h2", { className: "font-display text-lg font-bold text-ink-900", children: [
                u.firstName,
                " ",
                u.lastName
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500", children: u.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "btn-secondary", children: [
            /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }),
            " Modifier le profil"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-500", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-ink-400" }),
            u.email
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-ink-400" }),
            u.phone
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-ink-400" }),
            u.city,
            ", ",
            regionName(u.regionId)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 rounded-xl bg-ink-50 p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-ink-700", children: "Complétion du profil" }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-brand-700", children: [
              u.completion,
              " %"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 h-2 overflow-hidden rounded-full bg-ink-200", children: /* @__PURE__ */ jsx(motion.div, { className: "h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700", initial: {
            width: 0
          }, animate: {
            width: `${u.completion}%`
          }, transition: {
            duration: 0.8
          } }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: quick.map((q) => /* @__PURE__ */ jsxs("div", { className: "card flex items-center gap-4 p-5", children: [
      /* @__PURE__ */ jsx("div", { className: cn("flex h-11 w-11 items-center justify-center rounded-xl", q.color), children: /* @__PURE__ */ jsx(q.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-2xl font-extrabold text-ink-900", children: q.value }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: q.label })
      ] })
    ] }, q.label)) }),
    /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "À propos" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-ink-600", children: u.bio })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Compétences" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: u.skills.map((s) => /* @__PURE__ */ jsx(Badge, { variant: "brand", className: "px-3 py-1.5", children: s }, s)) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display font-bold text-ink-900", children: "Langues" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: u.languages.map((l) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-ink-700", children: l.name }),
          /* @__PURE__ */ jsx("span", { className: "text-ink-500", children: l.level })
        ] }, l.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Expériences" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-4", children: u.experiences.map((exp, i) => /* @__PURE__ */ jsxs("li", { className: "border-l-2 border-brand-100 pl-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink-900", children: exp.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
            exp.organization,
            " · ",
            exp.startYear,
            " – ",
            exp.endYear ?? "présent"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-600", children: exp.description })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("h3", { className: "mt-6 inline-flex items-center gap-2 font-display font-bold text-ink-900", children: [
          /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4 text-brand-600" }),
          " Formation"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: u.education.map((ed, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-800", children: ed.degree }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-500", children: [
            ed.school,
            " · ",
            ed.year
          ] })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function CvPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Mon CV", subtitle: "Gérez le curriculum vitæ utilisé pour vos candidatures." }),
    /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "truncate font-semibold text-ink-900", children: currentUser.cvFileName }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-ink-500", children: "PDF · 412 Ko · mis à jour il y a 8 jours" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { className: "btn-secondary", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
            " Télécharger"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "btn-ghost text-red-600 hover:bg-red-50", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "mt-5 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-ink-50/40 px-6 py-10 text-center transition hover:border-brand-400 hover:bg-brand-50/40", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-semibold text-ink-800", children: "Téléverser un nouveau CV" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: "PDF, DOC, DOCX — 5 Mo max" })
      ] })
    ] })
  ] });
}
function LettersPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Lettres de motivation", subtitle: "Réutilisez vos lettres types pour candidater plus vite.", action: /* @__PURE__ */ jsxs("button", { className: "btn-primary", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Nouvelle lettre"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: coverLetters.map((cl) => /* @__PURE__ */ jsxs("div", { className: "card flex flex-col p-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600", children: /* @__PURE__ */ jsx(Pencil, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-ink-400", children: [
          "Modifiée ",
          cl.updatedDaysAgo,
          "j"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-semibold text-ink-900", children: cl.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 line-clamp-3 flex-1 text-sm text-ink-500", children: cl.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2 border-t border-ink-100 pt-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "btn-secondary flex-1", children: [
          /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }),
          " Modifier"
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-ghost text-red-600 hover:bg-red-50", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, cl.id)) })
  ] });
}
function ApplicationsPanel({
  applications
}) {
  if (applications.length === 0) {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(PanelHeader, { title: "Mes candidatures" }),
      /* @__PURE__ */ jsx(EmptyState, { icon: /* @__PURE__ */ jsx(Briefcase, { className: "h-7 w-7" }), title: "Aucune candidature", description: "Parcourez les offres et postulez pour les retrouver ici.", action: /* @__PURE__ */ jsx(Link, { to: "/offres", className: "btn-primary", children: "Voir les offres" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Mes candidatures", subtitle: `${applications.length} dossiers suivis en temps réel.` }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: applications.map((app) => {
      const job = jobById(app.jobId);
      const inst = job ? institutionById(job.institutionId) : void 0;
      return /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "card p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Avatar, { initials: inst?.logoInitials ?? "TL", color: inst?.logoColor, size: "lg", className: "!rounded-xl" }),
            /* @__PURE__ */ jsxs("div", { children: [
              job ? /* @__PURE__ */ jsx(Link, { to: "/offres/$slug", params: {
                slug: job.slug
              }, className: "font-display font-bold text-ink-900 hover:text-brand-700", children: job.title }) : /* @__PURE__ */ jsx("p", { className: "font-display font-bold text-ink-900", children: "Offre archivée" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-ink-500", children: inst?.name }),
              /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs text-ink-400", children: [
                "Réf. ",
                app.reference,
                " · Envoyée ",
                timeAgo(app.submittedAt)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: statusVariant[app.status], className: "px-3 py-1.5", children: app.status })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex items-center gap-1 overflow-x-auto pb-1", children: app.timeline.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center last:flex-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 px-1", children: [
            /* @__PURE__ */ jsx("div", { className: cn("flex h-7 w-7 items-center justify-center rounded-full", t.done ? "bg-accent-100 text-accent-700" : "bg-ink-100 text-ink-400"), children: t.done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("span", { className: cn("whitespace-nowrap text-[10px]", t.done ? "text-ink-700" : "text-ink-400"), children: t.label })
          ] }),
          i < app.timeline.length - 1 && /* @__PURE__ */ jsx("div", { className: cn("mx-1 h-0.5 min-w-6 flex-1 rounded-full", t.done ? "bg-accent-400" : "bg-ink-200") })
        ] }, i)) })
      ] }, app.id);
    }) })
  ] });
}
const notifIcon = {
  application: /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5" }),
  message: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
  alert: /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }),
  system: /* @__PURE__ */ jsx(LayoutDashboard, { className: "h-5 w-5" })
};
function NotificationsPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Notifications", subtitle: "Suivez l’actualité de vos candidatures et vos alertes emploi.", action: /* @__PURE__ */ jsx("button", { className: "btn-ghost text-sm", children: "Tout marquer comme lu" }) }),
    /* @__PURE__ */ jsx("div", { className: "card divide-y divide-ink-100", children: notifications.map((n) => /* @__PURE__ */ jsxs("div", { className: cn("flex gap-4 p-4", !n.read && "bg-brand-50/40"), children: [
      /* @__PURE__ */ jsx("div", { className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", n.read ? "bg-ink-100 text-ink-500" : "bg-brand-100 text-brand-700"), children: notifIcon[n.type] }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink-900", children: n.title }),
          !n.read && /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-brand-600" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-ink-600", children: n.body }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-ink-400", children: n.daysAgo === 0 ? "Aujourd'hui" : `il y a ${n.daysAgo} jour(s)` })
      ] })
    ] }, n.id)) })
  ] });
}
function SettingsPanel() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PanelHeader, { title: "Paramètres", subtitle: "Gérez votre compte et vos préférences." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Informations du compte" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Prénom", defaultValue: currentUser.firstName }),
          /* @__PURE__ */ jsx(Field, { label: "Nom", defaultValue: currentUser.lastName }),
          /* @__PURE__ */ jsx(Field, { label: "E-mail", defaultValue: currentUser.email }),
          /* @__PURE__ */ jsx(Field, { label: "Téléphone", defaultValue: currentUser.phone })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-primary mt-5", children: "Enregistrer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-ink-900", children: "Préférences de notification" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsx(Toggle, { label: "Alertes emploi personnalisées", defaultChecked: true }),
          /* @__PURE__ */ jsx(Toggle, { label: "Suivi de mes candidatures par e-mail", defaultChecked: true }),
          /* @__PURE__ */ jsx(Toggle, { label: "Lettre d’information mensuelle" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card border-red-100 p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-red-600", children: "Zone de danger" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: "La suppression du compte est définitive." }),
        /* @__PURE__ */ jsxs("button", { className: "btn mt-4 border border-red-200 bg-white text-red-600 hover:bg-red-50", children: [
          /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }),
          " Supprimer mon compte"
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
export {
  CandidateDashboard as component
};
