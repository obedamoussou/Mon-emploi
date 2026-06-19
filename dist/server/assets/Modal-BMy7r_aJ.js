import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { c as cn } from "./Logo-B678_UjR.js";
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md"
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  const maxW = { sm: "max-w-md", md: "max-w-lg", lg: "max-w-2xl" }[size];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute inset-0 bg-ink-950/50 backdrop-blur-sm",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        role: "dialog",
        "aria-modal": "true",
        className: cn(
          "relative z-10 w-full rounded-t-3xl bg-white shadow-card-hover sm:rounded-3xl",
          maxW
        ),
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.98 },
        transition: { type: "spring", damping: 26, stiffness: 320 },
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute right-4 top-4 rounded-lg p-1.5 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700",
              "aria-label": "Fermer",
              children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
            }
          ),
          (title || description) && /* @__PURE__ */ jsxs("div", { className: "border-b border-ink-100 px-6 py-5 pr-12", children: [
            title && /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-ink-900", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-ink-500", children: description })
          ] }),
          children && /* @__PURE__ */ jsx("div", { className: "px-6 py-5", children }),
          footer && /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-3 border-t border-ink-100 px-6 py-4", children: footer })
        ]
      }
    )
  ] }) });
}
export {
  Modal as M
};
