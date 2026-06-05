<template>
  <div class="highlight-wrapper" ref="wrapperRef">
    <div class="highlight-header">
      <div class="header-left">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
        <span class="highlight-lang">{{ langLabel }}</span>
      </div>
      <button class="copy-btn" @click="copyCode">{{ copied ? "已复制" : "复制" }}</button>
    </div>
    <div class="highlight-body" ref="bodyRef">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import hljs from "highlight.js";

const bodyRef = ref<HTMLElement>();

const codeText = ref("");
const langLabel = ref("code");
const copied = ref(false);

onMounted(() => {
  nextTick(() => {
    const pre = bodyRef.value?.querySelector("pre");
    const code = pre?.querySelector("code");
    if (!code) return;

    // extract language from class like "language-html"
    const cls = code.className || "";
    const match = cls.match(/language-(\w+)/);
    if (match) langLabel.value = match[1];

    // extract raw code text
    codeText.value = code.textContent || "";

    // apply highlight.js
    hljs.highlightElement(code as HTMLElement);
  });
});

const copyCode = async () => {
  const text = codeText.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  }
};
</script>

<style scoped>
.highlight-wrapper {
  margin: 16px 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--mdui-theme-divider, #333);
}

.highlight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #2d2d2d;
  border-bottom: 1px solid #444;
  font-size: 0.85rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red {
  background: #ff5f57;
}

.dot-yellow {
  background: #ffbd2e;
}

.dot-green {
  background: #28c840;
}

.highlight-lang {
  color: #aaa;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-left: 8px;
}

.copy-btn {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: #444;
  color: #fff;
}
</style>
