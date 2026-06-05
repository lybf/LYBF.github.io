<script setup lang="ts"></script>

<style lang="css" scoped>
.home-layout {
  padding: 16px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.home-header {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/bg.jpg");
}

.home-header-card {
  width: 50vw;
  height: 30vh;
  padding: 16px;
}

.home-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
<template>
  <mdui-layout class="home-layout">
    <div class="home-header">
      <mdui-card class="home-header-card">
        <mdui-card-content class="home-desc">
          <h2>{{ $t("message.home") }}</h2>
          <p>{{ $t("message.homeDesc") }}</p>
        </mdui-card-content>
      </mdui-card>
    </div>
  </mdui-layout>
</template>
