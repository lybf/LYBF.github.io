<script setup lang="ts">
//components
import "mdui/components/button-icon.js";

import Footer from "./components/Footer.vue";

//icons
import "@mdui/icons/language.js";
import "@mdui/icons/menu.js";
import "@mdui/icons/light-mode.js";
import "@mdui/icons/dark-mode.js";
import "@mdui/icons/check.js";
import "@mdui/icons/person.js";
import "@mdui/icons/more-vert.js";
import "@mdui/icons/link.js";
//import mdui
import { setTheme, getTheme } from "mdui";

//import vue
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router"

const route = useRoute();
//@ts-ignore
let menuBtnState = ref(false);

let setTheme0 = (theme: string) => {
  setTheme(theme as "light" | "dark");
  currentTheme.value = theme as "light" | "dark";
};

let currentTheme = ref(getTheme());

const { locale } = useI18n();

const changeLocale = (newLocale: string) => {
  localStorage.setItem("locale", newLocale);
  locale.value = newLocale;
};
</script>

<style lang="css" scoped>
mdui-dropdown mdui-button {
  width: 2.5rem;
  height: 2.5rem;
}

mdui-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-layout-main {
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.app-layout-main> :first-child {
  flex: 1;
}

.app-top-app-bar {
  z-index: 9999;
}


.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  text-decoration: none;
  padding: 0.375rem 0.5rem;
  color: inherit;
  position: relative;
  display: inline-block;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.5rem;
  right: 0.5rem;
  height: 2px;
  background-color: rgb(var(--mdui-color-primary));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

.nav-links a.link-active::after {
  transform: scaleX(1);
}
</style>

<template>
  <mdui-layout class="mdui-layout">
    <mdui-top-app-bar class="app-top-app-bar" scroll-behavior="elevate" scroll-target=".app-layout-main">
      <mdui-top-app-bar-title class="app-top-app-bar-title">LYBF</mdui-top-app-bar-title>
      <!-- tabs -->
      <div class="nav-links">
        <RouterLink to="/" :class="{ 'link-active': route.path === '/' }">{{ $t("message.home") }}</RouterLink>
        <RouterLink to="/blogs" :class="{ 'link-active': route.path.startsWith('/blogs') }">{{ $t("message.blogs") }}</RouterLink>
        <RouterLink to="/about" :class="{ 'link-active': route.path === '/about' }">{{ $t("message.about") }}</RouterLink>
      </div>

      <mdui-dropdown>
        <mdui-button slot="trigger" variant="standard">
          <mdui-icon-language></mdui-icon-language>
        </mdui-button>

        <mdui-menu selects="single" value="zh">
          <mdui-menu-item @click="changeLocale('zh')" value="zh">
            <mdui-icon-language></mdui-icon-language>
            中文
          </mdui-menu-item>
          <mdui-menu-item @click="changeLocale('en')" value="en">
            <mdui-icon-language></mdui-icon-language>
            English
          </mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>

      <mdui-dropdown>
        <mdui-button slot="trigger" variant="standard">
          <mdui-icon-light-mode v-if="currentTheme == 'light'"></mdui-icon-light-mode>
          <mdui-icon-dark-mode v-else></mdui-icon-dark-mode>
        </mdui-button>

        <mdui-menu selects="single" value="light">
          <mdui-menu-item @click="setTheme0('light')" value="light">
            <mdui-icon-light-mode></mdui-icon-light-mode>
          </mdui-menu-item>
          <mdui-menu-item @click="setTheme0('dark')" value="dark">
            <mdui-icon-dark-mode></mdui-icon-dark-mode>
          </mdui-menu-item>
        </mdui-menu>
      </mdui-dropdown>
    </mdui-top-app-bar>
    <mdui-layout-main class="app-layout-main">
      <router-view></router-view>
      <Footer></Footer>
    </mdui-layout-main>
  </mdui-layout>
</template>
