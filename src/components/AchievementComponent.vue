<template>
  <div class="content_job">
    <BackItem :path="routePath.Main" :name-btn="$t('back')"/>
    <div >Это компонент про достижения</div>
  </div>
</template>

<script>
import BackItem from "@/components/navigate/BackItem";
import {RoutesPath} from "@/router/RouterPaths";
export default {
  name: "AchievementComponent",
  components: {BackItem},
  computed: {
    routePath () {
      return RoutesPath
    }
  }
}
</script>

<style scoped lang="scss">
.content_job {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 30%;
    font-size: 120%;
  }
  div {
    font-size: 200%;
    color: var(--text-color);
  }
}
</style>
