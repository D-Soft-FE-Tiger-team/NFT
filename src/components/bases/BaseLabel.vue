<script setup>
const props = defineProps({
  for: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <label :for="props.for" class="base-label">
    <slot />
    <span v-if="props.required" class="label-required">*</span>
  </label>
</template>

<style lang="scss" scoped>
.base-label {
  font-weight: 600;
  font-size: 15px;
  line-height: 18.75px;
  color: var(--c-black-1);

  .label-required {
    color: var(--c-red-1);
  }
}
</style>
