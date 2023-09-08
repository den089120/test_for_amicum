<template>
  <div :class="['app', { dark : isDark, light : !isDark}]">
    <SideBarComponent/>
    <div class="container_content">
      <div class="logo">
        <img src="../public/icons/logo_AMICUM.png" alt="logo">
      </div>
      <div class="main_page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "@/components/SideBarComponent";
import { mapState } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore'

export default {
  name: 'App',
  components: {
    SideBarComponent,
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  },
}
</script>

<style lang="scss">
.app {
  display: flex;
  width: 99%;
  height: 99%;
  background: var(--bg-color-light);
  .container_content {
    width: 63%;
    .logo {
      height: 20%;
      display: flex;
      justify-content: end;
      align-items: start;
      img {
        width: 15%;
        height: 30%;
        margin: 1%;
        padding: 1% 2%;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 10px;
      }
    }
    .main_page {
    }
  }
}

</style>
