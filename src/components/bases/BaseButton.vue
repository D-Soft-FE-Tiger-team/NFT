<script setup lang="ts">
import { computed, type PropType } from 'vue'

type ButtonTypes = 'button' | 'submit' | 'reset' | undefined
type VariantTypes = 'filled' | 'gradient' | 'outlined' | 'text' | 'icon' | undefined
type SizeTypes = 'large' | 'medium' | 'small' | 'extraSmall' | undefined

const props = defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  variant: {
    type: String as PropType<VariantTypes>,
    default: 'gradient',
    validator: (value: string) => ['filled', 'gradient', 'outlined', 'text', 'icon'].includes(value),
  },
  size: {
    type: String as PropType<SizeTypes>,
    default: 'medium',
    validator: (value: string) => ['large', 'medium', 'small', 'extraSmall'].includes(value),
  },
  rounded: {
    type: Boolean,
    default: true,
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
  classes: {
    type: String,
    required: false,
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
    case 'extraSmall':
      return 'extraSmall'
    default:
      return 'medium'
  }
})

const fullWidthClass = computed(() => (props.fullWidth ? 'fullWidth' : null))
const roundedClass = computed(() => (props.rounded ? 'rounded-full' : null))
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disable || props.loading"
    :class="['btn', variantClass, sizeClass, fullWidthClass, roundedClass, classes]"
    @click="emit('click')"
    v-bind="$attrs"
  >
    <component :is="props.leftIcon" v-if="!props.loading" class="btn-left-icon" />
    <span v-if="!props.loading" class="btn-text">
      <slot />
    </span>
    <component :is="props.rightIcon" v-if="!props.loading" class="btn-right-icon" />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  font-family: var(--ff-primary);
  cursor: pointer;

  .btn-text {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    align-content: center;
  }

  .btn-left-icon,
  .btn-right-icon {
    flex: none;
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
    padding: 10px 21px;
  }

  &.medium {
    width: 160px;
  }

  &.small {
    width: 140px;
  }

  &.extraSmall {
    width: 70px;
    height: 44px;
  }

  &.rounded-full {
    border-radius: 90px;
  }

  &.fullWidth {
    width: 100%;
  }

  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
}
</style>
