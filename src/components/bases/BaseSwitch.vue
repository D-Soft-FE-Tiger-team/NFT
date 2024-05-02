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
})

const emit = defineEmits(['handleToggleSwitch'])
</script>

<template>
  <div class="base-switch" @click="emit('handleToggleSwitch')">
    <input type="checkbox" :checked="isChecked" hidden class="checkbox" />
    <span class="slider"></span>
  </div>
</template>

<style lang="scss" scoped>
.base-switch {
  position: relative;
  width: 72px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #792d1080;
  background-color: var(--c-white-1);
  cursor: pointer;

  .slider:before {
    position: absolute;
    content: '';
    left: 4px;
    bottom: 4px;
    background-color: #c0542b;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: 0.25s;
  }

  input:checked + .slider:before {
    transform: translateX(32px);
  }
}
</style>
