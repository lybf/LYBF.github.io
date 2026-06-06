<script setup lang="ts">
import { useRouter } from "vue-router";
import { posts } from "@/blogs/index";

const router = useRouter();

const goto = (blogTitle: string) => {
  router.push({ name: "blog", params: { title: blogTitle } });
};
</script>
<template>
  <div>
    <main>
      <article>
        <mdui-card class="header-card">
          <img
            src="@/assets/hero.png"
            alt="Background Image"
            style="width: 100%; height: auto"
          />
        </mdui-card>
        <!-- title start -->
        <div class="title">
          <h1>{{ $t("message.blogs") }}</h1>
          <mdui-divider></mdui-divider>
        </div>
        <!-- title end -->

        <div class="blog-list">
          <mdui-card
            v-for="blog in posts"
            :key="blog.title"
            class="blog-card"
            @click="goto(blog.blogTitle)"
          >
            <div class="blog-card-inner">
              <div class="blog-card-image">
                <img src="@/assets/bg2.jpg" alt="Blog Image" />
              </div>
              <div class="blog-card-content">
                <h3>{{ blog.title }}</h3>
                <p class="date">{{ blog.date }}</p>
                <p>{{ blog.description }}</p>
              </div>
            </div>
          </mdui-card>
        </div>
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
  width: 40vw;
  height: auto;
  transform: translateX(50%);
}
.title{
  margin: 4px;
}

.date {
  color: var(--mdui-theme-text-secondary);
  margin-bottom: 0.5em;
}

/* ===== Blog List ===== */
.blog-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.blog-card {
  overflow: hidden;
}

.blog-card-inner {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.blog-card-image {
  flex-shrink: 0;
  width: 160px;
  overflow: hidden;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blog-card-content {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-card-content h3 {
  margin: 0 0 4px 0;
  font-size: 1.1rem;
}

/* tablet / desktop — 两栏，上下布局 */
@media (min-width: 768px) {
  .blog-list {
    grid-template-columns: 1fr 1fr;
  }

  .blog-card-inner {
    flex-direction: column;
  }

  .blog-card-image {
    width: 100%;
    height: 180px;
  }
}
</style>
