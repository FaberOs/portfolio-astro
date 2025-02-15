/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D-ifg4Gg.mjs';
import 'kleur/colors';
import { B as BASE_URL, G as GITHUB_USER, $ as $$Layout } from '../../chunks/Layout_DXIJ2KHm.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(`${BASE_URL}/repos/${GITHUB_USER}/${id}`);
  if (!res.ok) {
    throw new Error("Proyecto no encontrado");
  }
  const project = await res.json();
  const languagesRes = await fetch(
    `${BASE_URL}/repos/${GITHUB_USER}/${id}/languages`
  );
  const languagesData = await languagesRes.json();
  const languages = Object.keys(languagesData);
  const deviconMap = {
    JavaScript: "devicon-javascript-plain colored",
    TypeScript: "devicon-typescript-plain colored",
    Python: "devicon-python-plain colored",
    Java: "devicon-java-plain colored",
    Ruby: "devicon-ruby-plain colored",
    Kotlin: "devicon-kotlin-plain colored",
    CSS: "devicon-css3-plain colored",
    HTML: "devicon-html5-plain colored",
    React: "devicon-react-original colored",
    NextJS: "devicon-nextjs-plain"
  };
  const filteredLanguages = languages.filter((lang) => deviconMap[lang]);
  if (languages.includes("JavaScript") && languages.includes("HTML") && languages.includes("CSS")) {
    filteredLanguages.push("React");
  }
  if (languages.includes("TypeScript") && languages.includes("CSS")) {
    filteredLanguages.push("NextJS");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.name, "data-astro-cid-iejuj6pp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto py-10 px-6" data-astro-cid-iejuj6pp> <h1 class="text-3xl font-bold text-light-900 dark:text-dark-50" data-astro-cid-iejuj6pp> ${project.name} </h1> <p class="text-sm text-light-500 dark:text-dark-300 mt-2" data-astro-cid-iejuj6pp> ${new Date(project.created_at).toLocaleDateString()} </p> ${project.description && renderTemplate`<p class="mt-4 text-light-600 dark:text-dark-200 text-base" data-astro-cid-iejuj6pp> ${project.description} </p>`} <div class="mt-6 text-light-500 dark:text-dark-300 text-sm" data-astro-cid-iejuj6pp> ${filteredLanguages.length > 0 && renderTemplate`<div class="mt-4" data-astro-cid-iejuj6pp> <div class="flex gap-4 mt-2" data-astro-cid-iejuj6pp> ${filteredLanguages.map((lang) => renderTemplate`<div class="flex items-center gap-2" data-astro-cid-iejuj6pp> <i${addAttribute(`${deviconMap[lang]} text-base ${lang === "NextJS" ? "dark:text-light-50" : ""}`, "class")} data-astro-cid-iejuj6pp></i> <span class="text-sm text-light-500 dark:text-dark-200" data-astro-cid-iejuj6pp> ${lang} </span> </div>`)} </div> </div>`} </div> <a${addAttribute(project.html_url, "href")} target="_blank" class="inline-block mt-6 px-4 py-2 bg-light-500 dark:bg-dark-400 text-light-50 dark:text-dark-50 rounded-md hover:bg-light-600 dark:hover:bg-dark-500 transition" data-astro-cid-iejuj6pp>
Ver en GitHub
</a> </div> ` })} `;
}, "C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/pages/project/[id].astro", void 0);

const $$file = "C:/Users/faber/OneDrive/Documentos/React Projects/portfoliov1/src/pages/project/[id].astro";
const $$url = "/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
