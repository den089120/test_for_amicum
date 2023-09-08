<template>
  <div class="content_item">
    <div class="text">{{ textInfo }}</div>
    <div class="icon">
      <slot class="icon_img"></slot>
      <div class="progressbar">
        <ProgressbarWidget background-color="var(--bg-color)" :full-number="fullNumber" :value-number="valueNumber" :color-icon="colorIcon"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressbarWidget from "@/components/widgets/ProgressbarWidget";

export default {
  name: "InfoEntity",
  components: {ProgressbarWidget},
  props: {
    colorIcon: {
      type: String,
      default: '#000'
    },
    fullNumber: {
      type: Number,
      default: 100
    },
    valueNumber: {
      type: Number,
      default: 3
    },
    textInfo: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.content_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14.5vw;
  height: 40.5vh;
  background: var(--bg-color-light);
  margin-bottom: 8.5%;
  border-radius: 5px;
  position: relative;
  max-height: 278px;
  min-height: 263px;
  min-width: 263px;
  max-width: 278px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  .text {
    margin-top: 5%;
    font-size: 128%;
    font-weight: bold;
  }
  .icon {
    width: 50%;
    height: 50%;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon_img {
      width: 65%;
      height: 65%;
    }
  }
}
</style>
