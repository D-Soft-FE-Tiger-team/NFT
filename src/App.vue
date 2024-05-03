<script setup>
import { storeToRefs } from 'pinia'
import useThemeStore from './stores/theme'
import { Themes } from './types'
import { watch } from 'vue'

const { currentTheme } = storeToRefs(useThemeStore())
const htmlElement = document.documentElement

watch(
  currentTheme,
  value => {
    htmlElement.classList.toggle('dark', value === Themes.Dark)
    htmlElement.classList.toggle('light', value !== Themes.Dark)
  },
  { immediate: true },
)
</script>
<template>
  <RouterView />
</template>
