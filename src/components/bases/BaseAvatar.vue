<script setup>
import DefaulAvatar from '@/assets/images/avatar.png'
import { computed } from 'vue'
const props = defineProps({
  width: {
    type: String,
    default: '44px',
  },
  height: {
    type: String,
    default: '44px',
  },
  url: {
    default: DefaulAvatar,
  },
})

const containerStyle = computed(() => ({
  width: props.width,
  height: props.height,
}))
</script>
<template>
  <div class="avatar-container" :style="containerStyle" :class="props.variant">
    <img :src="props.url" alt="avatar" class="avatar-img" />
  </div>
</template>

<style scoped lang="scss">
.avatar-container {
  background-color: var(--c-orange-3);
  border-radius: 100%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & .avatar-img {
    width: 21px;
    height: 19px;
    object-fit: cover;
  }
}
</style>
