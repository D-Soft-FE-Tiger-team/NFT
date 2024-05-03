<script setup lang="ts">
import { type PropType } from 'vue'

type SwitchType = 'large' | 'medium' | undefined

const props = defineProps({
  isChecked: {
    type: Boolean,
    required: true,
    default: false,
  },
  size: {
    type: String as PropType<SwitchType>,
    default: 'medium',
    validator: (value: string) => ['large', 'medium'].includes(value),
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
})

const emit = defineEmits(['handleToggleSwitch'])
</script>

<template>
  <div class="base-switch" @click="emit('handleToggleSwitch')">
    <component :is="props.leftIcon" v-if="props.leftIcon" class="left-icon" />
    <input type="checkbox" :checked="isChecked" hidden class="input-checkbox" />
    <span class="slider"></span>
    <component :is="props.rightIcon" v-if="props.rightIcon" class="right-icon" />
  </div>
</template>

<style lang="scss" scoped>
.base-switch {
  position: relative;
  width: 72px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #792d1080;
  background-color: var(--bg-c-primary);

  .left-icon,
  .right-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .left-icon {
    left: 4px;
  }

  .right-icon {
    right: 4px;
  }

  .slider:before {
    position: absolute;
    z-index: 1;
    content: '';
    left: 4px;
    bottom: 4px;
    background-color: var(--c-primary);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: 0.25s;
  }

  .input-checkbox:checked + .slider:before {
    transform: translateX(32px);
  }
}
</style>
