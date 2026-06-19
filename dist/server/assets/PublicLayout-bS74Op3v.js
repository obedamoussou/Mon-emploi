import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Building2, LayoutDashboard, Search, Bell, X, Menu, MapPin, Phone, Mail, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { L as Logo, A as Avatar, c as cn } from "./Badge-txxXTAF8.js";
import { c as currentUser } from "./queries-OLKb4Xlw.js";
const navLinks = [
  { to: "/offres", label: "Offres & concours", icon: Briefcase },
  { to: "/organismes", label: "Organismes", icon: Building2 },
  { to: "/tableau-de-bord", label: "Espace candidat", icon: LayoutDashboard }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "hidden bg-ink-950 text-white/80 md:block", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex h-9 items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-accent-400" }),
        "Service public officiel — République de Téli"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsx(Link, { to: "/organismes", className: "transition hover:text-white", children: "Vous êtes un organisme ?" }),
        /* @__PURE__ */ jsx("span", { className: "text-white/30", children: "|" }),
        /* @__PURE__ */ jsx("a", { href: "#aide", className: "transition hover:text-white", children: "Aide & contact" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(
      "header",
      {
        className: cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled ? "border-ink-100 bg-white/85 backdrop-blur-xl shadow-sm" : "border-transparent bg-white"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsx(Logo, {}),
            /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: navLinks.map((l) => /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                className: "rounded-xl px-3.5 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-50 hover:text-ink-900 [&.active]:bg-brand-50 [&.active]:text-brand-700",
                children: l.label
              },
              l.to
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/offres",
                  className: "hidden h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100 hover:text-ink-800 sm:flex",
                  "aria-label": "Rechercher",
                  children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/tableau-de-bord",
                  search: { section: "notifications" },
                  className: "relative hidden h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100 hover:text-ink-800 sm:flex",
                  "aria-label": "Notifications",
                  children: [
                    /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5" }),
                    /* @__PURE__ */ jsx("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(Link, { to: "/tableau-de-bord", className: "hidden items-center gap-2 rounded-xl py-1 pl-1 pr-3 transition hover:bg-ink-50 sm:flex", children: [
                /* @__PURE__ */ jsx(Avatar, { initials: "AD", color: currentUser.avatarColor, size: "sm" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-ink-800", children: currentUser.firstName })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/espace-organisme", className: "btn-primary hidden lg:inline-flex", children: "Espace organisme" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition hover:bg-ink-100 lg:hidden",
                  onClick: () => setMobileOpen((v) => !v),
                  "aria-label": "Menu",
                  children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "overflow-hidden border-t border-ink-100 bg-white lg:hidden",
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.22 },
              children: /* @__PURE__ */ jsxs("div", { className: "container-page space-y-1 py-4", children: [
                navLinks.map((l) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: l.to,
                    onClick: () => setMobileOpen(false),
                    className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 transition hover:bg-ink-50 [&.active]:bg-brand-50 [&.active]:text-brand-700",
                    children: [
                      /* @__PURE__ */ jsx(l.icon, { className: "h-5 w-5 text-ink-400" }),
                      l.label
                    ]
                  },
                  l.to
                )),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/espace-organisme",
                    onClick: () => setMobileOpen(false),
                    className: "btn-primary mt-2 w-full",
                    children: "Espace organisme"
                  }
                )
              ] })
            }
          ) })
        ]
      }
    )
  ] });
}
const columns = [
  {
    title: "Candidats",
    links: [
      { label: "Rechercher une offre", to: "/offres" },
      { label: "Concours publics", to: "/offres" },
      { label: "Mon tableau de bord", to: "/tableau-de-bord" },
      { label: "Mes candidatures", to: "/tableau-de-bord" }
    ]
  },
  {
    title: "Organismes",
    links: [
      { label: "Publier une offre", to: "/espace-organisme" },
      { label: "Espace organisme", to: "/espace-organisme" },
      { label: "Annuaire des organismes", to: "/organismes" },
      { label: "Devenir partenaire", to: "/organismes" }
    ]
  },
  {
    title: "La plateforme",
    links: [
      { label: "À propos", to: "/" },
      { label: "Aide & FAQ", to: "/" },
      { label: "Mentions légales", to: "/" },
      { label: "Protection des données", to: "/" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-20 border-t border-ink-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-ink-500", children: "Le portail national officiel de l’emploi public. Toutes les offres, stages, concours et appels à candidatures des institutions de la République, au même endroit." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-2 text-sm text-ink-500", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-brand-500" }),
            " Cité Administrative, Nseba"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-brand-500" }),
            " +228 22 00 00 00"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-brand-500" }),
            " contact@teli-emploi.gouv.tl"
          ] })
        ] })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-ink-900", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2.5", children: col.links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            className: "text-sm text-ink-500 transition hover:text-brand-600",
            children: l.label
          }
        ) }, l.label)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-ink-400", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Téli Emploi — République de Téli. Tous droits réservés."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: [Twitter, Linkedin, Facebook].map((I, i) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: "flex h-9 w-9 items-center justify-center rounded-xl bg-ink-50 text-ink-500 transition hover:bg-brand-50 hover:text-brand-600",
          "aria-label": "Réseau social",
          children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" })
        },
        i
      )) })
    ] })
  ] }) });
}
function PublicLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-ink-50", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PublicLayout as P
};
