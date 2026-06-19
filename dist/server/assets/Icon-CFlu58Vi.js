import { jsx } from "react/jsx-runtime";
import * as Lucide from "lucide-react";
function Icon({ name, ...props }) {
  const Cmp = Lucide[name];
  if (!Cmp) return /* @__PURE__ */ jsx(Lucide.Circle, { ...props });
  return /* @__PURE__ */ jsx(Cmp, { ...props });
}
export {
  Icon as I
};
