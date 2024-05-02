<script setup>
import { storeToRefs } from 'pinia'
import useThemeStore from '@/stores/theme'

const { currentTheme } = storeToRefs(useThemeStore())
const { toggleDark } = useThemeStore()
</script>

<template>
  <div class="wrapper" :class="[currentTheme]">
    <main>
      <button @click="toggleDark">Change Theme</button>
      <slot />
    </main>
  </div>
</template>
<style lang="scss"></style>
