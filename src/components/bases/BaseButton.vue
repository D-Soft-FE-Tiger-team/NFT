<script setup lang="ts">
import { computed, type PropType } from 'vue'

type ButtonType = 'button' | 'submit' | 'reset' | undefined
type VariantType = 'filled' | 'gradient' | 'outlined' | 'text' | undefined
type SizeType = 'large' | 'medium' | 'small' | undefined

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  variant: {
    type: String as PropType<VariantType>,
    default: 'gradient',
    validator: (value: string) => ['filled', 'gradient', 'outlined', 'text'].includes(value),
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium',
    validator: (value: string) => ['large', 'medium', 'small'].includes(value),
  },
  leftIcon: {
    type: Object,
    required: false,
    default: () => {},
  },
  rightIcon: {
    type: Object,
    required: false,
    default: () => {},
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click', 'mouseleave'])

const variantClass = computed(() => {
  switch (props.variant) {
    case 'filled':
      return 'filled'
    case 'gradient':
      return 'gradient'
    case 'outlined':
      return 'outlined'
    case 'text':
      return 'text'
    default:
      return 'gradient'
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'large':
      return 'large'
    case 'medium':
      return 'medium'
    case 'small':
      return 'small'
    default:
      return 'medium'
  }
})

const fullWidthClass = computed(() => (props.fullWidth ? 'fullWidth' : null))
</script>

<template>
  <button
    :class="['btn', variantClass, sizeClass, fullWidthClass]"
    :disabled="props.disable || props.loading"
    @click="emit('click')"
    v-bind="$attrs"
  >
    <component :is="props.leftIcon" v-if="!props.loading" />
    <span v-if="!props.loading" class="btn-text">
      <slot />
    </span>
    <component :is="props.rightIcon" v-if="!props.loading" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 6px 24px;
  height: 50px;
  border-radius: 90px;
  gap: 8px;
  cursor: pointer;

  .btn-text {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    align-content: center;
  }

  &.filled {
    background-color: var(--c-black-1);
    color: var(--c-white-1);
  }

  &.gradient {
    background-image: var(--c-brand-1);
    color: var(--c-white-1);
  }

  &.outlined {
    background-color: var(--c-white-1);
    border: 2px solid var(--c-gray-3);
    color: var(--c-black-1);
  }

  &.large {
    width: 200px;
  }

  &.medium {
    width: 160px;
  }

  &.small {
    width: 140px;
  }

  &.fullWidth {
    width: 100%;
  }
}
</style>
