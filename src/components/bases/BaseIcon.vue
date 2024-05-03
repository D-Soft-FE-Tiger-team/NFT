<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { icons, type IconType } from '../icons';
import { storeToRefs } from 'pinia';
import useThemeStore from '@/stores/theme';

enum colorThemeIcon {
    Light = '#555555',
    Dark = '#ffffff'
}

const { isDark } = storeToRefs(useThemeStore())
const props = defineProps({
    name: {
        type: String as PropType<IconType['icon']>,
        required: true,
        validator(value: string) {
            return Object.prototype.hasOwnProperty.call(icons, value)
        }
    },
    fill: {
        type: String
    }
})

const iconComponent = computed(() => {
    return icons[props.name as IconType['icon']];
})


const currentColor = computed(() => {
    return isDark.value ? colorThemeIcon.Dark : colorThemeIcon.Light
})

</script>
<template>
    <component :is="iconComponent" :fill="currentColor" />
</template>