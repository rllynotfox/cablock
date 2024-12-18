"use strict";
importScripts("sw-toolbox.js"); toolbox.precache(['index.html','style/style.css', "assets/index-DluX18Pp.css", "assets/index-B0dlCBzT.js", "assets/fa-brands-400-D_cYUPeE.woff2", "assets/fa-brands-400-D1LuMI3I.ttf", "assets/fa-regular-400-BjRzuEpd.woff2", "assets/fa-regular-400-DZaxPHgR.ttf", "assets/fa-solid-900-CTAAxXor.woff2", "assets/fa-solid-900-D0aA9rwL.ttf", "assets/fa-v4compatibility-C9RhG_FT.woff2", "assets/fa-v4compatibility-CCth-dXg.ttf"]); toolbox.router.get("/images/*", toolbox.cacheFirst); toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5});
// if (!self.define) {
//   let e,
//     s = {};
//   const i = (i, n) => (
//     (i = new URL(i + ".js", n).href),
//     s[i] ||
//       new Promise((s) => {
//         if ("document" in self) {
//           const e = document.createElement("script");
//           (e.src = i), (e.onload = s), document.head.appendChild(e);
//         } else (e = i), importScripts(i), s();
//       }).then(() => {
//         let e = s[i];
//         if (!e) throw new Error(`Module ${i} didn’t register its module`);
//         return e;
//       })
//   );
//   self.define = (n, r) => {
//     const t =
//       e ||
//       ("document" in self ? document.currentScript.src : "") ||
//       location.href;
//     if (s[t]) return;
//     let o = {};
//     const l = (e) => i(e, t),
//       d = { module: { uri: t }, exports: o, require: l };
//     s[t] = Promise.all(n.map((e) => d[e] || l(e))).then((e) => (r(...e), o));
//   };
// }
// define(["./workbox-e3490c72"], function (e) {
//   "use strict";
//   self.addEventListener("message", (e) => {
//     e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
//   }),
//     e.precacheAndRoute(
//       [
//         { url: "cablock/assets/index-B0dlCBzT.js", revision: null },
//         { url: "cablock/assets/fa-brands-400-D_cYUPeE.woff2", revision: null},
//         { url: "cablock/assets/fa-brands-400-D1LuMI3I.ttf", revision: null},
//         { url: "cablock/assets/fa-regular-400-BjRzuEpd.woff2", revision: null},
//         { url: "cablock/assets/fa-regular-400-DZaxPHgR.ttf", revision: null},
//         { url: "cablock/assets/fa-solid-900-CTAAxXor.woff2", revision: null},
//         { url: "cablock/assets/fa-solid-900-D0aA9rwL.ttf", revision: null},
//         { url: "cablock/assets/fa-v4compatibility-C9RhG_FT.woff2", revision: null},
//         { url: "cablock/assets/fa-v4compatibility-CCth-dXg.ttf", revision: null},
//         { url: "cablock/assets/index-DluX18Pp.css", revision: null },
//         { url: "cablock/index.html", revision: "6eb66072bd5f004ebbb90ed6297160a8" },
//         { url: "cablock/registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
//         {
//           url: "manifest.webmanifest",
//           revision: "1ee3d3f307aa9572c6fabf0b8928e9cd",
//         },
//       ],
//       {}
//     ),
//     e.cleanupOutdatedCaches(),
//     e.registerRoute(
//       new e.NavigationRoute(e.createHandlerBoundToURL("cablock/index.html"))
//     );
// });
