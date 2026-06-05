<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import hljs from "highlight.js";
import blogsService from "../../blogs/blogs";
const route = useRoute();
const blog = ref({
  title: "",
  date: "",
  description: "",
  content: "",
});

onMounted(() => {
  const { title } = route.params;
  blog.value = blogsService.getBlogByTitle(title as string) || {
    title: "Blog Not Found",
    date: "",
    description: "",
    content: "<p>Sorry, the blog you are looking for does not exist.</p>",
  };
  nextTick(() => {
    enhanceCodeBlocks();
  });
});

function enhanceCodeBlocks() {
  const contentEl = document.querySelector("article");
  if (!contentEl) return;

  // unwrap <hightlightcomponent> placeholders (rendered as unknown custom elements by v-html)
  contentEl.querySelectorAll("hightlightcomponent").forEach((el) => {
    while (el.firstChild) {
      el.parentNode!.insertBefore(el.firstChild, el);
    }
    el.remove();
  });

  contentEl.querySelectorAll("pre code").forEach((codeEl) => {
    const pre = codeEl.parentElement!;

    // skip if already enhanced
    if (pre.closest(".highlight-wrapper")) return;

    const code = codeEl as HTMLElement;

    // extract language
    const cls = code.className || "";
    const match = cls.match(/language-(\w+)/);
    const lang = match ? match[1] : "code";

    // extract raw text
    const text = code.textContent || "";

    // create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "highlight-wrapper";

    // create header
    const header = document.createElement("div");
    header.className = "highlight-header";

    const left = document.createElement("div");
    left.className = "header-left";
    left.innerHTML = `
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="highlight-lang">${lang}</span>
    `;

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "复制";
    copyBtn.addEventListener("click", () => {
      copyText(text, copyBtn);
    });

    header.appendChild(left);
    header.appendChild(copyBtn);

    // highlight
    hljs.highlightElement(code);

    // assemble
    pre.parentElement!.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
}

function copyText(text: string, btn: HTMLElement) {
  const orig = btn.textContent!;
  navigator.clipboard.writeText(text).then(
    () => {
      btn.textContent = "已复制";
      setTimeout(() => (btn.textContent = orig), 2000);
    },
    () => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btn.textContent = "已复制";
      setTimeout(() => (btn.textContent = orig), 2000);
    }
  );
}
</script>
<template>
  <div>
    <main>
      <article>
        <div v-html="blog.content"></div>
      </article>
    </main>
  </div>
</template>

<style lang="css" scoped>
main {
  padding: 16px;
}

article {
  max-width: 800px;
  margin: 0 auto;
}

.header-card {
  margin-bottom: 16px;
  width: 100%;
  height: auto;
}

.title {
  margin-bottom: 1em;
  padding: 1em 0;
  text-align: center;
  line-height: 1;
}

.date {
  color: var(--mdui-theme-text-secondary);
  margin-bottom: 0.5em;
}

/* ===== Code block enhancement ===== */
:deep(.highlight-wrapper) {
  margin: 16px 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--mdui-theme-divider, #333);
}

:deep(.highlight-header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #2d2d2d;
  border-bottom: 1px solid #444;
  font-size: 0.85rem;
}

:deep(.header-left) {
  display: flex;
  align-items: center;
  gap: 6px;
}

:deep(.dot) {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

:deep(.dot-red) {
  background: #ff5f57;
}

:deep(.dot-yellow) {
  background: #ffbd2e;
}

:deep(.dot-green) {
  background: #28c840;
}

:deep(.highlight-lang) {
  color: #aaa;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-left: 8px;
}

:deep(.copy-btn) {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

:deep(.copy-btn:hover) {
  background: #444;
  color: #fff;
}

:deep(pre) {
  margin: 0;
}

:deep(pre code) {
  padding: 16px;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
