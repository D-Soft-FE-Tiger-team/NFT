<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import IconBrand from '@/components/icons/IconBrand.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconDown from '@/components/icons/IconDown.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconCart from '@/components/icons/IconCart.vue'
import IconWallet from '@/components/icons/IconWallet.vue'


import BaseButton from '@/components/bases/BaseButton.vue'
import BaseSwitch from '@/components/bases/BaseSwitch.vue'
import BaseAvatar from '@/components/bases/BaseAvatar.vue'
import useThemeStore from '@/stores/theme'
import { NAVBAR_ITEMS } from '@/constants/constant.ts'

const { isDark } = storeToRefs(useThemeStore())
const { toggleDark } = useThemeStore()

const isShowMenu = ref(false)

const handleToggleShowMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
</script>

<template>
  <header class="page-header container">
    <div class="header-container">
      <div class="header-left">
        <RouterLink to="/">
          <IconBrand />
        </RouterLink>
        <BaseSwitch :isChecked="isDark" :leftIcon="IconMoon" :rightIcon="IconSun" @handleToggleSwitch="toggleDark" />
        <nav>
          <ul class="header-nav">
            <li v-for="navbarItem in NAVBAR_ITEMS" :key="navbarItem.id" class="header-nav-item">
              <template v-if="navbarItem.type === 'link'">
                <RouterLink :to="navbarItem.name" class="header-nav-title">{{ navbarItem.title }}</RouterLink>
              </template>
              <template v-else-if="navbarItem.type === 'menu'">
                <div class="header-nav-menu" @click="handleToggleShowMenu">
                  <div class="header-nav-title">
                    {{ navbarItem.title }}
                    <IconDown />
                  </div>
                  <ul v-show="isShowMenu" class="submenu">
                    <li v-for="childItem in navbarItem.childrens" :key="childItem.id" class="submenu-item">
                      <RouterLink :to="childItem.name" class="header-nav-title">{{ childItem.title }}</RouterLink>
                    </li>
                  </ul>
                </div>
              </template>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-right">
        <div class="header-search">
          <div class="search-group">
            <IconSearch />
            <input placeholder="Seach..." class="search-input" />
          </div>
        </div>
        <BaseButton size="large" :leftIcon="IconWallet">Connect Wallet</BaseButton>
        <BaseAvatar/>
        <RouterLink><IconCart /></RouterLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 28px;
  height: 100px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 28px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 32px;

      .header-nav {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      .header-nav-title {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
        color: var(--text-c-primary);
      }

      .header-nav-menu {
        position: relative;
        cursor: pointer;
      }

      .submenu {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 56px;
        gap: 24px;
        padding: 30px;
        background-color: var(--bg-c-primary);
        border: 1px solid var(--text-c-secondary);

        .submenu-item {
          background-color: var(--bg-c-primary);
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          text-align: left;
          white-space: nowrap;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 8px;

      .header-search {
        width: 192px;
        height: auto;
        border-radius: 90px;
        border: 1px solid var(--c-gray-1);

        .search-group {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;

          .search-input {
            background-color: transparent;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
