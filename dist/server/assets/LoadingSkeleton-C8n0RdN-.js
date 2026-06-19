import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./Badge-txxXTAF8.js";
function Skeleton({ className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-lg bg-ink-100",
        "after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer",
        "after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent",
        className
      )
    }
  );
}
function JobCardSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "card p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-12 rounded-xl" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-1/2" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-5/6" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-20 rounded-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24 rounded-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16 rounded-full" })
    ] })
  ] });
}
function JobListSkeleton({ count = 6 }) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(JobCardSkeleton, {}, i)) });
}
function InstitutionCardSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "card p-6", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-14 w-14 rounded-2xl" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "mt-4 h-4 w-2/3" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "mt-2 h-3 w-1/3" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "mt-5 h-3 w-full" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "mt-2 h-3 w-4/5" })
  ] });
}
export {
  InstitutionCardSkeleton as I,
  JobListSkeleton as J,
  Skeleton as S
};
