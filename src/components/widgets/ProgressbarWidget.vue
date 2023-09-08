<template>
  <div class="progressbar">
    <svg>
      <circle
          :r="iconR"
          :cx="iconX"
          :cy="iconY"
          fill="none"
          stroke-width="10px"
          :stroke="backgroundColor"
      />
    </svg>
    <svg>
      <circle
          :r="iconR"
          :cx="iconX"
          :cy="iconY"
          fill="none"
          stroke-width="10px"
          :stroke="colorIcon"
          stroke-linecap="round"
          :stroke-dasharray="`${((2*(parseInt(iconR))*Math.PI)/fullNumber)*valueNumber}% 1000`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ProgressbarWidget",
  props: {
    iconX: {
      type: String,
      default: '50%'
    },
    iconY: {
      type: String,
      default: '50%'
    },
    iconR: {
      type: String,
      default: '45%'
    },
    colorIcon: {
      type: String,
      default: '#000'
    },
    backgroundColor: {
      type: String,
      default: 'currentColor'
    },
    fullNumber: {
      type: Number,
      default: 100
    },
    valueNumber: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style scoped lang="scss">
.progressbar {
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    circle {
      transform-origin: center;
      transform: rotate(-90deg);
    }
  }
}

</style>
