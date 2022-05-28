<template>
  <RouterView />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import headerComponent from "./components/general-header.component.vue";
export default {
  name: "app",
  components: {
    HomeView,
    headerComponent,
  },
};
</script>

<style>
@import "@/assets/base.css";
#app {
  margin: 0 auto;
  font-weight: normal;
}
.button {
  padding: 26px;
}
a {
  text-decoration: none;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.home {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a:first-of-type {
  border: 0;
}
</style>