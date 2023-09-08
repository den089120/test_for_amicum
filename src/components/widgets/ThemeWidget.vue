<template>
  <div class="theme">
    <div class="progress_theme">
      <SunIcon :class="{ ic_dark : isDark, ic_light : !isDark}" color-icon="var(--text-color)"/>
    </div>
  </div>
</template>

<script>
import SunIcon from "@/components/IconComponents/SunIcon";
import {mapState} from "pinia";
import {useGlobalStore} from "@/store/GlobalStore";
export default {
  name: "ThemeWidget",
  components: {SunIcon},
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  },
}
</script>

<style scoped>
.theme {
  width: 10%;
  margin-left: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
.progress_theme {
  background: var(--bg-color-light);
  width: 63px;
  height: 20px;
  border-radius: 10px;
  position: relative;
}
.progress_theme .ic_dark {
  position: absolute;
  left: -16px;
  top: -17px;
  transition: left 0.5s;
}
.progress_theme .ic_light {
  position: absolute;
  left: 25px;
  top: -17px;
  transition: left 0.5s;
}
</style>
