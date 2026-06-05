# LYBF的个人博客

基于 Vue 3 + MDUI 2 构建的个人博客网站，支持中英文国际化、明暗主题切换、代码高亮。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API, `<script setup>`) |
| UI 库 | [MDUI](https://www.mdui.org/) — Material Design 组件库 |
| 路由 | Vue Router 5 |
| 国际化 | vue-i18n（中文 / English） |
| 代码高亮 | highlight.js + @highlightjs/vue-plugin |
| 构建 | Vite 8 + TypeScript 6 + vue-tsc |

## 功能

- **响应式布局** — 适配移动端与桌面端
- **多语言** — 中英文界面切换，按需加载
- **明暗主题** — 支持 light / dark 模式切换，跟随系统主题
- **代码高亮** — 代码块带三点标题栏、语言标识、一键复制
- **Material Design** — 使用 MDUI 组件实现 TopAppBar、Card、Tabs 等

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```
