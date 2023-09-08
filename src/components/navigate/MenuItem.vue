<template>
  <RouterLink :to="{ path: path}" class="btn_item">
    <div class="text">{{ nameItem }}</div>
    <div class="icon">
      <slot></slot>
    </div>
    <div v-if="countMessage" class="item_message">{{ countMessage }}</div>
  </RouterLink>
</template>

<script>

export default {
  name: "MenuItem",
  props: {
    nameItem: {
      type: String
    },
    countMessage: {
      type: String,
      default: null
    },
    path: {
      type: String
    }
  },
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.btn_item {
  width: 100%;
  height: 100%;
  background: var(--bg-color-menu);
  border-radius: 7px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
  .text {
    font-size: 150%;
    font-weight: bold;
    margin: 10%;
    color: var(--text-color);
  }
  .icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 6%;
  }
  .item_message {
    position: absolute;
    top: -6%;
    right: -6%;
    width: 15%;
    height: 15%;
    border-radius: 50%;
    font-size: 150%;
    font-weight: bold;
    background: rgba(101, 225, 18, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
