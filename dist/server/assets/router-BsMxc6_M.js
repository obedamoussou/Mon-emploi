import { jsxs, jsx } from "react/jsx-runtime";
import { Link, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AlertTriangle, RotateCcw, Compass, Home } from "lucide-react";
import "react";
const appCss = "/assets/app-LVS5NUZq.css";
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
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Talent-Bénin — Plateforme nationale de mobilisation des talents."
      },
      // {
      //   name: 'description',
      //   content:
      //     'Mon Emploi, le portail national de l’emploi public au Bénin : offres, stages, concours et appels à candidatures des ministères, mairies, entreprises publiques, ONG et universités.',
      // },
      { name: "theme-color", content: "#1f47e6" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  component: RootComponent
});
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
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
const $$splitComponentImporter$b = () => import("./index-CDXlTZkG.js");
const Route$b = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./index-C5Iis0sK.js");
const Route$a = createFileRoute("/tableau-de-bord/")({
  validateSearch: (search) => ({
    section: search.section ?? void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-CTkaLK-6.js");
const Route$9 = createFileRoute("/organismes/")({
  validateSearch: (search) => ({
    q: typeof search.q === "string" ? search.q : void 0,
    type: search.type
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-B7vS8kAF.js");
const Route$8 = createFileRoute("/offres/")({
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
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-CBsyhzUT.js");
const Route$7 = createFileRoute("/espace-organisme/")({
  validateSearch: (search) => ({
    section: search.section ?? void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-DxHI4vrt.js");
const Route$6 = createFileRoute("/admin/")({
  validateSearch: (search) => ({
    section: search.section ?? void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./_slug-6GRAO9_z.js");
const Route$5 = createFileRoute("/postuler/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./_slug-Cg9VZ6Nb.js");
const Route$4 = createFileRoute("/organismes/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./_slug-C2k6XqfO.js");
const Route$3 = createFileRoute("/offres/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./organisation-G2UkXhtj.js");
const Route$2 = createFileRoute("/inscription/organisation")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./candidat-Baipnbek.js");
const Route$1 = createFileRoute("/inscription/candidat")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
function AuthShell({
  children,
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsx("div", { className: "container-page flex justify-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl", children: [
    title && /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
      eyebrow && /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-500", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "card p-6 sm:p-8", children })
  ] }) });
}
const $$splitComponentImporter = () => import("./nouvelle-offre-DKAnz4OV.js");
const Route = createFileRoute("/espace-organisme/nouvelle-offre")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const TableauDeBordIndexRoute = Route$a.update({
  id: "/tableau-de-bord/",
  path: "/tableau-de-bord/",
  getParentRoute: () => Route$c
});
const OrganismesIndexRoute = Route$9.update({
  id: "/organismes/",
  path: "/organismes/",
  getParentRoute: () => Route$c
});
const OffresIndexRoute = Route$8.update({
  id: "/offres/",
  path: "/offres/",
  getParentRoute: () => Route$c
});
const EspaceOrganismeIndexRoute = Route$7.update({
  id: "/espace-organisme/",
  path: "/espace-organisme/",
  getParentRoute: () => Route$c
});
const AdminIndexRoute = Route$6.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$c
});
const PostulerSlugRoute = Route$5.update({
  id: "/postuler/$slug",
  path: "/postuler/$slug",
  getParentRoute: () => Route$c
});
const OrganismesSlugRoute = Route$4.update({
  id: "/organismes/$slug",
  path: "/organismes/$slug",
  getParentRoute: () => Route$c
});
const OffresSlugRoute = Route$3.update({
  id: "/offres/$slug",
  path: "/offres/$slug",
  getParentRoute: () => Route$c
});
const InscriptionOrganisationRoute = Route$2.update({
  id: "/inscription/organisation",
  path: "/inscription/organisation",
  getParentRoute: () => Route$c
});
const InscriptionCandidatRoute = Route$1.update({
  id: "/inscription/candidat",
  path: "/inscription/candidat",
  getParentRoute: () => Route$c
});
const EspaceOrganismeNouvelleOffreRoute = Route.update({
  id: "/espace-organisme/nouvelle-offre",
  path: "/espace-organisme/nouvelle-offre",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  EspaceOrganismeNouvelleOffreRoute,
  InscriptionCandidatRoute,
  InscriptionOrganisationRoute,
  OffresSlugRoute,
  OrganismesSlugRoute,
  PostulerSlugRoute,
  AdminIndexRoute,
  EspaceOrganismeIndexRoute,
  OffresIndexRoute,
  OrganismesIndexRoute,
  TableauDeBordIndexRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
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
  AuthShell as A,
  NotFound as N,
  Route$a as R,
  Route$9 as a,
  Route$8 as b,
  Route$7 as c,
  Route$6 as d,
  Route$5 as e,
  Route$4 as f,
  Route$3 as g,
  router as r
};
