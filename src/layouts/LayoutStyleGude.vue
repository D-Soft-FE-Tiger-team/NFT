<script setup>
import BaseInputField from '@/components/bases/BaseInputField.vue'
import BaseButton from '@/components/bases/BaseButton.vue'
import BaseSwitch from '@/components/bases/BaseSwitch.vue'
import BaseTypography from '@/components/bases/BaseTypography.vue'
import BaseTextAreaField from '@/components/bases/BaseTextAreaField.vue'
import { useForm } from 'vee-validate'
import IconImage from '@/components/icons/IconImage.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconShare from '@/components/icons/IconShare.vue'

import { ref } from 'vue'

const isChecked = ref(false)

const handleToggleSwitch = () => {
  isChecked.value = !isChecked.value
}

const { handleSubmit } = useForm({
  initialValues: {
    email: '',
  },
})

const handleSubmitForm = handleSubmit(values => {
  console.log(values)
})
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmitForm">
      <BaseInputField label="Email address" name="email" placeholder="Enter price for one item (ETH)" required />
      <BaseInputField label="Password" name="password" placeholder="Enter price for one item (ETH)" />
      <BaseTextAreaField label="Description" name="password" placeholder="Enter price for one item (ETH)" />
      <div class="w">
        <BaseButton variant="gradient" fullWidth>Alo</BaseButton>
        <BaseButton variant="outlined" size="small">Alo</BaseButton>
        <BaseButton variant="filled" size="large">Alo</BaseButton>
        <BaseButton type="submit" variant="gradient" disabled classes="hello">Submit</BaseButton>
        <BaseButton size="extraSmall" :leftIcon="IconPlus" :rightIcon="IconImage"></BaseButton>
        <BaseButton variant="outlined" fullWidth :leftIcon="IconFacebook">Connect to Faceboook</BaseButton>
        <BaseButton variant="icon" :leftIcon="IconShare"> </BaseButton>
      </div>
      <BaseSwitch :isChecked="isChecked" @handleToggleSwitch="handleToggleSwitch" />
      <BaseTypography tag="h3">Join the Conversation </BaseTypography>
      <BaseTypography tag="p"
        >Explore more than 60 official Telegram groups on a variety of topics, from trading and NFTs to platform
        announcements and more. Find your community with more than 40 multilingual Telegram groups designed to bring
        together local communities. Of course, we’re not just on Telegram. Follow us on Twitter, Facebook, Instagram,
        Reddit and more for the latest news, updates, and crypto memes.
      </BaseTypography>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.w {
  width: 800px;
}

.hello {
  height: 44px;
}
</style>
