<script setup>
import { computed } from 'vue'

const props = defineProps({
  top: {
    type: String,
  },
  left: {
    type: String,
  },
  right: {
    type: String,
  },
})

const containerStyle = computed(() => ({
  top: props.top,
  left: props.left,
  right: props.right,
}))
</script>
<template>
  <div class="dot-bg-container" :style="containerStyle" v-bind="$attrs"></div>
</template>
<style lang="scss" scoped>
.dot-bg-container {
  position: absolute;
  opacity: 0.7;
  width: 500px;
  height: 500px;
  background-image: var(--bg-c-dot-bg);
  border-radius: 100%;
  filter: blur(200px);
}

@media (max-width: 1080px) {
  .dot-bg-container {
    width: 300px;
    height: 300px;
    filter: blur(150px);
  }
}

@media (max-width: 768px) {
  .dot-bg-container {
    width: 200px;
    height: 200px;
    filter: blur(100px);
  }
}
</style>
