import { jsx } from "react/jsx-runtime";
import { c as cn } from "./Logo-Nf2y5-j_.js";
const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-2xl"
};
function Avatar({
  initials,
  color = "#1f47e6",
  size = "md",
  className,
  ring
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex shrink-0 select-none items-center justify-center rounded-full font-bold text-white",
        sizes[size],
        ring && "ring-2 ring-white",
        className
      ),
      style: { backgroundColor: color },
      "aria-hidden": true,
      children: initials
    }
  );
}
export {
  Avatar as A
};
