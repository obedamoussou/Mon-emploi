import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, FileText, Upload, Loader2, UserPlus, Briefcase, Building2, ShieldCheck, X, Menu, MapPin, Phone, Mail, Twitter, Linkedin, Facebook } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { c as cn, L as Logo } from "./Logo-B1bRgxRh.js";
import { M as Modal } from "./Modal-BCXPU8FW.js";
import { c as categories } from "./categories-B2CZv2U0.js";
function CandidateRegisterModal({
  open,
  onClose
}) {
  const inputRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    categoryId: categories[0]?.id ?? ""
  });
  const [cvName, setCvName] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const valid = form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.phone.trim() && !!cvName;
  function reset() {
    setDone(false);
    setSubmitting(false);
    setForm({ firstName: "", lastName: "", email: "", phone: "", categoryId: categories[0]?.id ?? "" });
    setCvName(null);
  }
  function handleClose() {
    onClose();
    setTimeout(reset, 200);
  }
  function submit() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1300);
  }
  return /* @__PURE__ */ jsx(
    Modal,
    {
      open,
      onClose: handleClose,
      title: done ? void 0 : "Inscription candidat",
      description: done ? void 0 : "Renseignez vos informations et déposez votre CV.",
      size: "lg",
      footer: done ? /* @__PURE__ */ jsx("button", { onClick: handleClose, className: "btn-primary", children: "Terminer" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("button", { onClick: handleClose, className: "btn-secondary", children: "Annuler" }),
        /* @__PURE__ */ jsx("button", { onClick: submit, disabled: !valid || submitting, className: "btn-primary", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
          " Envoi…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4" }),
          " M’inscrire"
        ] }) })
      ] }),
      children: done ? /* @__PURE__ */ jsxs("div", { className: "py-2 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600", children: /* @__PURE__ */ jsx(BadgeCheck, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg font-bold text-ink-900", children: "Inscription enregistrée !" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1.5 text-sm text-ink-500", children: [
          "Merci ",
          form.firstName,
          ". Votre candidature a bien été reçue. Les organismes pourront vous contacter via les coordonnées fournies."
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Prénom", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.firstName, onChange: set("firstName"), placeholder: "Aïcha" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Nom", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.lastName, onChange: set("lastName"), placeholder: "Diallo" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Adresse e-mail", children: /* @__PURE__ */ jsx("input", { type: "email", className: "input", value: form.email, onChange: set("email"), placeholder: "vous@email.bj" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Téléphone", children: /* @__PURE__ */ jsx("input", { className: "input", value: form.phone, onChange: set("phone"), placeholder: "+229 ..." }) }),
        /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Field, { label: "Domaine d’activité", children: /* @__PURE__ */ jsx("select", { className: "input cursor-pointer", value: form.categoryId, onChange: set("categoryId"), children: categories.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id)) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { className: "label", children: "Curriculum vitæ (CV)" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => inputRef.current?.click(),
              className: cn(
                "flex w-full items-center gap-3 rounded-xl border-2 border-dashed px-4 py-4 text-left transition",
                cvName ? "border-accent-300 bg-accent-50" : "border-ink-200 bg-ink-50/50 hover:border-brand-400 hover:bg-brand-50/40"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      cvName ? "bg-accent-100 text-accent-700" : "bg-brand-50 text-brand-600"
                    ),
                    children: cvName ? /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("span", { className: "block truncate text-sm font-semibold text-ink-800", children: cvName ?? "Téléverser votre CV" }),
                  /* @__PURE__ */ jsx("span", { className: "block text-xs text-ink-400", children: "PDF, DOC, DOCX — 5 Mo max" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: ".pdf,.doc,.docx",
              className: "hidden",
              onChange: (e) => setCvName(e.target.files?.[0]?.name ?? null)
            }
          )
        ] })
      ] })
    }
  );
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "label", children: label }),
    children
  ] });
}
const navLinks = [
  { to: "/offres", label: "Offres & concours", icon: Briefcase },
  { to: "/organismes", label: "Organismes", icon: Building2 }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
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
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setRegisterOpen(true),
                  className: "btn-primary hidden lg:inline-flex",
                  children: [
                    /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4" }),
                    "S’inscrire"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(Link, { to: "/espace-organisme", className: "btn-secondary hidden lg:inline-flex", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
                "Espace admin"
              ] }),
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
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2 pt-2", children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => {
                        setMobileOpen(false);
                        setRegisterOpen(true);
                      },
                      className: "btn-primary w-full",
                      children: [
                        /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4" }),
                        "S’inscrire"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/espace-organisme",
                      onClick: () => setMobileOpen(false),
                      className: "btn-secondary w-full",
                      children: [
                        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
                        "Espace admin"
                      ]
                    }
                  )
                ] })
              ] })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(CandidateRegisterModal, { open: registerOpen, onClose: () => setRegisterOpen(false) })
  ] });
}
const columns = [
  {
    title: "Candidats",
    links: [
      { label: "Rechercher une offre", to: "/offres" },
      { label: "Concours publics", to: "/offres" },
      { label: "Opportunités de formation", to: "/" },
      { label: "Annuaire des organismes", to: "/organismes" }
    ]
  },
  {
    title: "Administrations",
    links: [
      { label: "Espace administration", to: "/espace-organisme" },
      { label: "Publier une offre", to: "/espace-organisme" },
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
            " Cité Administrative, Cotonou"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-brand-500" }),
            " +229 21 00 00 00"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-brand-500" }),
            " contact@mon-emploi.bj"
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
        " Mon Emploi — République du Bénin. Tous droits réservés."
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
  CandidateRegisterModal as C,
  PublicLayout as P
};
