import { Themes } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useThemeStore = defineStore("theme", () => {
    const isDark = ref<boolean>(false);
    
    const init = () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === Themes.Dark) {
            isDark.value = true;
        } else if (storedTheme === Themes.Light) {
            isDark.value = false;
        }
    };

    const toggleDark = () => {
        isDark.value = !isDark.value;
        localStorage.setItem("theme", isDark.value ? Themes.Dark : Themes.Light);
    };

    const currentTheme = computed(() => {
        return isDark.value ? "dark-theme" : "light-theme";
    });

    init();

    return {
        isDark,
        toggleDark,
        currentTheme
    };
});

export default useThemeStore;