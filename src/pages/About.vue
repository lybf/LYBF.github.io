<script setup lang="ts">
// import type { Divider } from "mdui/components/divider.js";
</script>
<template>
  <div>
    <main>
      <article>
        <mdui-card class="about-header-card">
          <img
            src="../assets/bg2.png"
            alt="About Image"
            style="width: 100%; height: auto"
          />
        </mdui-card>
        <!-- title start -->
        <div class="title">
          <div class="date">
            <time datetime="2026-06-01T00:00:00.000Z"> June 1, 2026 </time>
          </div>
          <h1>{{ $t("message.aboutme") }}</h1>
          <mdui-divider></mdui-divider>
        </div>
        <!-- title end -->
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

.about-header-card {
  margin-bottom: 16px;
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
</style>
