import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import { createRoot } from "react-dom/client";
import { Link, createInertiaApp } from "@inertiajs/react";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "bg-white shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between h-16", children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-8", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/",
        className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors duration-200",
        children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Homepage" })
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/category1",
        className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors duration-200",
        children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category 1" })
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/category2",
        className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors duration-200",
        children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category 2" })
      }
    )
  ] }) }) }) }) });
}
createInertiaApp({
  resolve: async (name) => {
    const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./Pages/Category1.jsx": () => import("./assets/Category1-DRCvnZUA.js"), "./Pages/Category2.jsx": () => import("./assets/Category2-BZvlKJqN.js"), "./Pages/Home.jsx": () => import("./assets/Home-DrcvGsOm.js") }), `./Pages/${name}.jsx`, 3);
    return module.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(App, { ...props })
      ] })
    );
  }
});
