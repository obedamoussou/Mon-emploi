import { jsxs, jsx } from "react/jsx-runtime";
import { SearchX } from "lucide-react";
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-200 bg-white px-6 py-16 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600", children: icon ?? /* @__PURE__ */ jsx(SearchX, { className: "h-7 w-7" }) }),
    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-ink-900", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-1.5 max-w-sm text-sm text-ink-500", children: description }),
    action && /* @__PURE__ */ jsx("div", { className: "mt-6", children: action })
  ] });
}
export {
  EmptyState as E
};
