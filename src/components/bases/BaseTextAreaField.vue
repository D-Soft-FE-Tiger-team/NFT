<script setup lang="ts">
import { useField } from 'vee-validate'

import BaseTextarea from './BaseTextarea.vue'
import BaseLabel from './BaseLabel.vue'

const props = defineProps({
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
    <BaseTextarea :id="props.id" :name="props.name" :placeholder="props.placeholder" />
    <span class="" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style lang="scss" scoped>
.text-field {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
</style>
