<script setup>
import BaseTypography from '@/components/bases/BaseTypography.vue'
import IconBrand from '@/components/icons/IconBrand.vue'
import BaseIcon from '@/components/bases/BaseIcon.vue'
import { FOOTER_LINKS, LINKS_SOCIAL_MEDIA } from '@/constants/constant.ts'
import { computed } from 'vue'

const footerlinks = computed(() => FOOTER_LINKS)
</script>

<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-top">
        <div class="footer-top-left">
          <RouterLink to="/">
            <IconBrand />
          </RouterLink>
          <BaseTypography classes="description"
            >Join our Discord channel or follow us on Twitter to keep up to date with our latest work and announcements.
          </BaseTypography>
          <div class="footer-social">
            <template v-for="item in LINKS_SOCIAL_MEDIA" :key="item.id">
              <RouterLink :href="item.url" target="_blank">
                <BaseIcon :name="item.name" />
              </RouterLink>
            </template>
          </div>
        </div>
        <div class="footer-top-right">
          <div class="footer-top-right-links" v-for="(section, index) in footerlinks" :key="index">
            <div class="title">{{ Object.keys(section)[0] }}</div>
            <ul class="links">
              <li v-for="(link, linkIndex) in Object.values(section)[0]" :key="linkIndex">
                <RouterLink :to="link.path">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <BaseTypography classes="copyright"> Copyright © 2024 NFT. All Rights Reserves</BaseTypography>
        </div>
        <div class="footer-bottom-right">
          <BaseTypography classes="copyright"> Privacy Policy</BaseTypography>
          <BaseTypography classes="copyright"> Term & Condition</BaseTypography>
          <BaseIcon name="chevron-up" />
        </div>
      </div>
    </div>
    <div class="border-container"></div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-container {
  border-top: 1px solid var(--c-gray-1);

  & .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;

    & .footer-top-left {
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 444px;

      & .description {
        font-size: 16px;
      }

      & .footer-social {
        display: flex;
        gap: 16px;
      }
    }

    & .footer-top-right {
      display: flex;
      gap: 138px;

      & .footer-top-right-links {
        & .title {
          font-size: 24px;
          font-weight: 700;
          line-height: 20px;
          text-align: left;
          color: var(--text-c-primary);
        }

        & .links {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-direction: column;
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          text-align: left;

          & a {
            cursor: pointer;
            color: var(--text-c-primary);
          }
        }
      }
    }
  }

  & .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 72px 0 44px 0;
    & .footer-bottom-right {
      display: flex;
      gap: 32px;
    }
    & .copyright {
      font-size: 14px;
    }
  }

  & .border-container {
    height: 5px;
    background-image: var(--c-brand-3);
  }
}
</style>
