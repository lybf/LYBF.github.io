<script setup lang="ts">
</script>
<template>
  <div>
    <main class="blogs-main">
      <router-view></router-view>
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
.blogs-main {
  display: flex;
  flex-direction: column;
}
.blogs-main:first-child {
  flex: 1;
}

.date {
  color: var(--mdui-theme-text-secondary);
  margin-bottom: 0.5em;
}
</style>
