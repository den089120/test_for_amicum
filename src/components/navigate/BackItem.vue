<template>
  <RouterLink class="btn" :to="{ path: path }">{{ nameBtn }}</RouterLink>
</template>

<script>
import {RoutesPath} from "@/router/RouterPaths";

export default {
  name: "BackItem",
  props: {
    path: {
      type: String
    },
    nameBtn: {
      type: String
    }
  },
  computed: {
    routePath () {
      return RoutesPath
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  display: block;
  border: 2px solid var(--text-color);
  background: var(--bg-color);
  border-radius: 7px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  color: var(--text-color);
  width: 12%;
  height: 30px;
  text-align: center;
}
</style>
