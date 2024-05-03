<script setup lang="ts">
import { type PropType } from 'vue'
import { useField } from 'vee-validate'

type InputType = 'text' | 'email' | 'password' | 'number' | undefined

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (value: string) => ['text', 'email', 'password', 'number'].includes(value),
  },
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
})

const { value } = useField(() => props.name)
</script>

<template>
  <input
    :type="props.type"
    v-model="value"
    :id="props.id"
    :name="props.name"
    v-bind="$attrs"
    spellcheck="false"
    class="base-input"
  />
</template>

<style lang="scss" scoped>
.base-input {
  background-color: var(--c-gray-4);
  font-size: 500;
  line-height: 18.75px;
  font-family: var(--ff-primary);
  padding: 16px 20px;

  &::placeholder {
    color: var(--c-gray-1);
  }
}
</style>
