<script setup>
import { storeToRefs } from 'pinia'
import useThemeStore from '@/stores/theme'
import PageHeader from '@/components/layouts/PageHeader.vue'

const { currentTheme } = storeToRefs(useThemeStore())
const { toggleDark } = useThemeStore()
</script>

<template>
  <div class="wrapper" :class="[currentTheme]">
    <PageHeader />
    <main>
      <button @click="toggleDark">Theme</button>
      <slot />
    </main>
  </div>
</template>
<style lang="scss"></style>
