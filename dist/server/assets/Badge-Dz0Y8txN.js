import { jsxs } from "react/jsx-runtime";
import { c as cn } from "./Logo-B678_UjR.js";
const variants = {
  neutral: "bg-ink-100 text-ink-700",
  brand: "bg-brand-50 text-brand-700",
  accent: "bg-accent-50 text-accent-700",
  gold: "bg-gold-400/15 text-gold-600",
  danger: "bg-red-50 text-red-600",
  outline: "border border-ink-200 bg-white text-ink-600"
};
function Badge({
  children,
  variant = "neutral",
  className,
  icon
}) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold leading-none",
        variants[variant],
        className
      ),
      children: [
        icon,
        children
      ]
    }
  );
}
export {
  Badge as B
};
