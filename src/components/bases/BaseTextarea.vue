<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
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
  <textarea
    v-model="value"
    :id="props.id"
    :name="props.name"
    v-bind="$attrs"
    spellcheck="false"
    class="base-textarea"
  ></textarea>
</template>

<style lang="scss" scoped>
.base-textarea {
  background-color: var(--c-gray-4);
  font-size: 500;
  line-height: 18.75px;
  font-family: var(--ff-primary);
  padding: 16px 20px;
  resize: none;

  &::placeholder {
    color: var(--c-gray-1);
  }
}
</style>
