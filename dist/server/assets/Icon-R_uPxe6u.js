import { jsx, jsxs } from "react/jsx-runtime";
import * as Lucide from "lucide-react";
function ShieldCog({ className, size = 24 }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "m10.929 14.467-.383.924" }),
        /* @__PURE__ */ jsx("path", { d: "M10.929 8.923 10.546 8" }),
        /* @__PURE__ */ jsx("path", { d: "M13.225 8.923 13.608 8" }),
        /* @__PURE__ */ jsx("path", { d: "m13.607 15.391-.382-.924" }),
        /* @__PURE__ */ jsx("path", { d: "m14.849 10.547.923-.383" }),
        /* @__PURE__ */ jsx("path", { d: "m14.849 12.843.923.383" }),
        /* @__PURE__ */ jsx("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }),
        /* @__PURE__ */ jsx("path", { d: "m9.305 10.547-.923-.383" }),
        /* @__PURE__ */ jsx("path", { d: "m9.305 12.843-.923.383" }),
        /* @__PURE__ */ jsx("circle", { cx: "12.077", cy: "11.695", r: "3" })
      ]
    }
  );
}
const customIcons = {
  ShieldCog
};
function Icon({ name, ...props }) {
  const Custom = customIcons[name];
  if (Custom) return /* @__PURE__ */ jsx(Custom, { ...props });
  const Cmp = Lucide[name];
  if (!Cmp) return /* @__PURE__ */ jsx(Lucide.Circle, { ...props });
  return /* @__PURE__ */ jsx(Cmp, { ...props });
}
export {
  Icon as I
};
