import 'kleur/colors';
import { e as decodeKey } from './chunks/astro/server_D-ifg4Gg.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DsOf3nr0.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/","cacheDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/node_modules/.astro/","outDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/dist/","srcDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/src/","publicDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/public/","buildClientDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/dist/client/","buildServerDir":"file:///C:/Users/faber/OneDrive/Documentos/React%20Projects/portfoliov1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.3.0_jiti@1.21.7_rollup@4.34.7_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CCjvemK1.css"},{"type":"inline","content":"@import\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css\";\n"}],"routeData":{"route":"/project/[id]","isIndex":false,"type":"page","pattern":"^\\/project\\/([^/]+?)\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/project/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CCjvemK1.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/pages/project/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/project/[id]@_@astro":"pages/project/_id_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.3.0_jiti@1.21.7_rollup@4.34.7_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/node_modules/.pnpm/astro@5.3.0_jiti@1.21.7_rollup@4.34.7_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CuMd2ee2.mjs","\u0000@astrojs-manifest":"manifest_Dlf1_BLx.mjs","C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.j4NtRphT.js","C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/components/ProjectsList.astro?astro&type=script&index=0&lang.ts":"_astro/ProjectsList.astro_astro_type_script_index_0_lang.Co1OxlLN.js","C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/components/Modal.astro?astro&type=script&index=0&lang.ts":"_astro/Modal.astro_astro_type_script_index_0_lang.tc39V1ca.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"colorSwitch\"),e=document.documentElement,o=\"theme\",n=localStorage.getItem(o);n&&e.classList.toggle(\"dark\",n===\"dark\"),t?.addEventListener(\"click\",()=>{const s=e.classList.toggle(\"dark\");localStorage.setItem(o,s?\"dark\":\"light\"),t.textContent=s?\"🌙\":\"☀️\"}),t&&(t.textContent=e.classList.contains(\"dark\")?\"🌙\":\"☀️\")});"],["C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/components/ProjectsList.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{window.location.pathname.startsWith(\"/project/\")||localStorage.removeItem(\"activeProject\");const o=localStorage.getItem(\"activeProject\");o&&window.location.pathname.startsWith(\"/project/\")&&document.querySelectorAll(\"a[href]\").forEach(t=>{if(t.getAttribute(\"href\")===`/project/${o}`){t.classList.add(\"text-light-500\",\"dark:text-dark-50\",\"font-semibold\");let e=t.closest(\"details\");e&&e.setAttribute(\"open\",\"true\")}}),document.querySelectorAll(\"a[href^='/project/']\").forEach(t=>{t.addEventListener(\"click\",()=>{const e=t.getAttribute(\"href\"),r=e?e.split(\"/\").pop():null;r&&localStorage.setItem(\"activeProject\",r)})})});"],["C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/components/Modal.astro?astro&type=script&index=0&lang.ts","(function(){const e=document.getElementById(\"settingsModal\");if(!e)return;const t=document.getElementById(\"closeModal\");t&&t.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")});const d=document.getElementById(\"lightTheme\");d&&d.addEventListener(\"click\",()=>{document.documentElement.classList.remove(\"dark\"),e.classList.add(\"hidden\"),localStorage.setItem(\"theme\",\"light\")});const n=document.getElementById(\"darkTheme\");n&&n.addEventListener(\"click\",()=>{document.documentElement.classList.add(\"dark\"),e.classList.add(\"hidden\"),localStorage.setItem(\"theme\",\"dark\")})})();"]],"assets":["/_astro/index.CCjvemK1.css","/bell.svg","/error.svg","/favicon.svg","/radio-tower.svg","/remote.svg","/rocket.svg","/warning.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Mzx/9wvC5jm8bqGfGxb7mL5wk4PYNekkP4UjopXi5wU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
