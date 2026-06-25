import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { L as Logo, c as cn } from "./Logo-Nf2y5-j_.js";
import { A as Avatar } from "./Avatar-CEdpIxOh.js";
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
export {
  DashboardShell as D
};
