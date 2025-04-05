import { jsxs, jsx } from "react/jsx-runtime";
import "react";
function Home({ title, description, features, services }) {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: description }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: features.title }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2", children: features.items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "text-gray-700", children: item }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: services.title }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2", children: services.items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "text-gray-700", children: item }, index)) })
    ] })
  ] });
}
export {
  Home as default
};
