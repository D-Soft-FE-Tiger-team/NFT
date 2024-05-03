<!-- <script setup lang="ts">
import type { PropType } from 'vue'
import { useField } from 'vee-validate'

import BaseInput from './BaseInput.vue'
import BaseLabel from './BaseLabel.vue'

type InputType = 'text' | 'email' | 'password' | 'number' | undefined

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (value: string) => ['text', 'email', 'password', 'number'].includes(value),
  },
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const { errorMessage } = useField(() => props.name)
</script>

<template>
  <div class="text-field">
    <BaseLabel class="" :for="props.name" :required="props.required">
      {{ props.label }}
    </BaseLabel>
    <BaseInput :type="props.type" :id="props.id" :name="props.name" :placeholder="props.placeholder" />
    <span class="" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
.text-field {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
</style> -->
