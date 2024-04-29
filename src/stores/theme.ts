import { Themes } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useThemeStore = defineStore("theme", () => {
    const isDark = ref(false);
    
    const initTheme = () => {
                        const storedTheme = localStorage.getItem("theme");
        isDark.value = storedTheme === Themes.Dark;
    };

    const toggleDark = () => {
        isDark.value = !isDark.value;
        localStorage.setItem("theme", isDark.value ? Themes.Dark : Themes.Light);
    };

    const currentTheme = computed(() => {
        return isDark.value ? "dark-theme" : "light-theme";
    });

    initTheme();

    return {
        isDark,
        toggleDark,
        currentTheme
    };
});

export default useThemeStore;
