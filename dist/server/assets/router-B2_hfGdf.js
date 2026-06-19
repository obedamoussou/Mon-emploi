import { jsxs, jsx } from "react/jsx-runtime";
import { Link, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AlertTriangle, RotateCcw, Compass, Home } from "lucide-react";
const appCss = "/assets/app--cimirGC.css";
function DefaultCatchBoundary({ error }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[70vh] flex-col items-center justify-center px-4 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8" }) }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl font-bold text-ink-900", children: "Une erreur est survenue" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md text-ink-500", children: "Nous n’avons pas pu afficher cette page. Veuillez réessayer ou revenir à l’accueil." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => window.location.reload(), className: "btn-primary", children: [
        /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" }),
        "Réessayer"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-secondary", children: "Retour à l’accueil" })
    ] })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[70vh] flex-col items-center justify-center px-4 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600", children: /* @__PURE__ */ jsx(Compass, { className: "h-8 w-8" }) }),
    /* @__PURE__ */ jsx("p", { className: "font-display text-6xl font-extrabold text-brand-600", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl font-bold text-ink-900", children: "Page introuvable" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md text-ink-500", children: "La page que vous recherchez n’existe pas ou a été déplacée. Revenez à l’accueil pour poursuivre votre recherche d’opportunités." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-primary", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }),
        "Retour à l’accueil"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/offres", className: "btn-secondary", children: "Voir les offres" })
    ] })
  ] });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Téli Emploi — Plateforme Nationale de Recrutement Public"
      },
      {
        name: "description",
        content: "Téli Emploi, le portail national de l’emploi public : offres, stages, concours et appels à candidatures des ministères, mairies, entreprises publiques, ONG et universités."
      },
      { name: "theme-color", content: "#1f47e6" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  component: RootComponent
});
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./index-DJkowlQf.js");
const Route$7 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-kQVojoPy.js");
const Route$6 = createFileRoute("/tableau-de-bord/")({
  validateSearch: (search) => ({
    section: search.section ?? void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-DL0APVsL.js");
const Route$5 = createFileRoute("/organismes/")({
  validateSearch: (search) => ({
    q: typeof search.q === "string" ? search.q : void 0,
    type: search.type
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-InUOhs2S.js");
const Route$4 = createFileRoute("/offres/")({
  validateSearch: (search) => ({
    q: typeof search.q === "string" ? search.q : void 0,
    region: typeof search.region === "string" ? search.region : void 0,
    categorie: typeof search.categorie === "string" ? search.categorie : void 0,
    contrat: search.contrat,
    type: search.type,
    organisme: search.organisme,
    institution: typeof search.institution === "string" ? search.institution : void 0,
    date: search.date,
    tri: search.tri,
    page: typeof search.page === "number" ? search.page : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-CwPkzFA2.js");
const Route$3 = createFileRoute("/espace-organisme/")({
  validateSearch: (search) => ({
    section: search.section ?? void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./_slug-CZhEwTO8.js");
const Route$2 = createFileRoute("/postuler/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./_slug-Dmu69FDy.js");
const Route$1 = createFileRoute("/organismes/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-DVYP7NuN.js");
const Route = createFileRoute("/offres/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const TableauDeBordIndexRoute = Route$6.update({
  id: "/tableau-de-bord/",
  path: "/tableau-de-bord/",
  getParentRoute: () => Route$8
});
const OrganismesIndexRoute = Route$5.update({
  id: "/organismes/",
  path: "/organismes/",
  getParentRoute: () => Route$8
});
const OffresIndexRoute = Route$4.update({
  id: "/offres/",
  path: "/offres/",
  getParentRoute: () => Route$8
});
const EspaceOrganismeIndexRoute = Route$3.update({
  id: "/espace-organisme/",
  path: "/espace-organisme/",
  getParentRoute: () => Route$8
});
const PostulerSlugRoute = Route$2.update({
  id: "/postuler/$slug",
  path: "/postuler/$slug",
  getParentRoute: () => Route$8
});
const OrganismesSlugRoute = Route$1.update({
  id: "/organismes/$slug",
  path: "/organismes/$slug",
  getParentRoute: () => Route$8
});
const OffresSlugRoute = Route.update({
  id: "/offres/$slug",
  path: "/offres/$slug",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  OffresSlugRoute,
  OrganismesSlugRoute,
  PostulerSlugRoute,
  EspaceOrganismeIndexRoute,
  OffresIndexRoute,
  OrganismesIndexRoute,
  TableauDeBordIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1e3,
        refetchOnWindowFocus: false
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {})
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  NotFound as N,
  Route$6 as R,
  Route$5 as a,
  Route$4 as b,
  Route$3 as c,
  Route$2 as d,
  Route$1 as e,
  Route as f,
  router as r
};
