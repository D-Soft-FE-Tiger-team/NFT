<script setup>
import PageHeader from '@/components/layouts/PageHeader.vue'
import PageFooter from '@/components/layouts/PageFooter.vue'
import BaseDotBg from '@/components/bases/BaseDotBg.vue'
</script>
<template>
  <div class="wrapper">
    <PageHeader />
    <main>
      <slot />
    </main>
    <PageFooter />
    <BaseDotBg top="-350px" left="-350px" />
    <BaseDotBg top="200px" right="100px" />
  </div>
</template>
<style lang="scss"></style>
