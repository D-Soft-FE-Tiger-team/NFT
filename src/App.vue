<script setup>
import { RouterView } from 'vue-router'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import BaseInput from '@/components/bases/BaseInput.vue'
import BaseInputField from '@/components/bases/BaseInputField.vue'
import BaseButton from '@/components/bases/BaseButton.vue'
import BaseTextarea from '@/components/bases/BaseTextarea.vue'
import { RouterLink } from 'vue-router'
import { useForm } from 'vee-validate'

const { handleReset, handleSubmit, errors } = useForm({
  initialValues: {
    email: '',
  },
})

const handleSubmitForm = handleSubmit(values => {
  console.log(values)
})
</script>

<template>
  <LayoutDefault>
    <form @submit.prevent="handleSubmitForm">
      <BaseInputField label="Email address" name="email" placeholder="Enter price for one item (ETH)" />
      <BaseInputField label="Password" name="password" placeholder="Enter price for one item (ETH)" />
      <BaseTextarea name="description" placeholder="Enter price for one item (ETH)" />
      <div class="w">
        <BaseButton variant="grandient" fullWidth>Alo</BaseButton>
        <BaseButton variant="outlined">Alo</BaseButton>
        <BaseButton variant="filled">Alo</BaseButton>
        <BaseButton type="submit" variant="gradient">Submit</BaseButton>
      </div>
    </form>
  </LayoutDefault>
</template>

<style lang="scss" scoped>
.w {
  width: 600px;
}
</style>
