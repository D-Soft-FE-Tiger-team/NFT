<script setup lang="ts">
import { computed, type PropType } from 'vue'

type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | undefined

const props = defineProps({
  tag: {
    type: String as PropType<TagTypes>,
    default: 'p',
    validator: (value: string) => ['h1', 'h2', 'h3', 'h4', 'p', 'span'].includes(value),
  },
  classes: {
    type: String,
    required: false,
  },
})

const tagClass = computed(() => {
  switch (props.tag) {
    case 'h1':
      return 'heading-1'
    case 'h2':
      return 'heading-2'
    case 'h3':
      return 'heading-3'
    case 'h4':
      return 'heading-4'
    case 'span':
      return 'text-span'
    default:
      return 'paragraph'
  }
})
</script>

<template>
  <component :is="props.tag" :class="['base-typography', tagClass, props.classes]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.base-typography {
  &.heading-1 {
  }

  &.heading-2 {
    color: var(--c-black-1);
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
  }

  &.heading-3 {
    color: var(--c-black-1);
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
  }

  &.heading-4 {
    color: var(--c-black-1);
    font-size: 424px;
    line-height: 30px;
    font-weight: 700;
  }

  &.text-span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--c-gray-1);
  }

  &.paragraph {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    color: var(--c-gray-2);
  }
}
</style>
