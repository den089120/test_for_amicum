<template>
  <svg :height="heightIcon" viewBox="0 0 30 30" :width="widthIcon" :fill="colorIcon" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 0C7.678 0 7 .678 7 1.5v6c0 .665 1 .67 1 0v-6c0-.286.214-.5.5-.5h20c.286 0 .5.214.5.5v27c0 .286-.214.5-.5.5h-20c-.286 0-.5-.214-.5-.5v-7c0-.66-1-.654-1 0v7c0 .822.678 1.5 1.5 1.5h20c.822 0 1.5-.678 1.5-1.5v-27c0-.822-.678-1.5-1.5-1.5zm-4 19c.45 0 .643-.563.354-.854L1.207 14.5l3.647-3.646c.442-.426-.254-1.16-.708-.708l-4 4c-.195.196-.195.512 0 .708l4 4c.095.097.22.146.354.146zm13-4h-14c-.277 0-.5-.223-.5-.5s.223-.5.5-.5h14c.277 0 .5.223.5.5s-.223.5-.5.5z"/>
  </svg>
</template>

<script>
export default {
  name: "LogoutIcon",
  props: {
    widthIcon: {
      type: String,
      default: '30'
    },
    heightIcon: {
      type: String,
      default: '30'
    },
    colorIcon: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style scoped>

</style>
