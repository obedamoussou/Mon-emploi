import { jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2 } from "lucide-react";
import { c as cn } from "./Logo-B1bRgxRh.js";
function Stepper({ steps, current }) {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center last:flex-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition",
            current > s.id ? "border-accent-600 bg-accent-600 text-white" : current === s.id ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200 bg-white text-ink-400"
          ),
          children: current > s.id ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(s.icon, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(
            "hidden text-center text-xs font-medium sm:block",
            current >= s.id ? "text-ink-800" : "text-ink-400"
          ),
          children: s.label
        }
      )
    ] }),
    i < steps.length - 1 && /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "mx-2 h-0.5 flex-1 rounded-full transition",
          current > s.id ? "bg-accent-500" : "bg-ink-200"
        )
      }
    )
  ] }, s.id)) });
}
export {
  Stepper as S
};
