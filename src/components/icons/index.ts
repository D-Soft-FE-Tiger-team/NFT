import IconChevronUp from './IconChevronUp.vue'
import IconFacebook from './IconFacebook.vue'
import IconInstagram from './IconInstagram.vue'
import IconTelegram from './IconTelegram.vue'
import IconTiktok from './IconTiktok.vue'
import IconTwitter from './IconTwitter.vue'
import IconYoutube from './IconYoutube.vue'

export const icons = {
  facebook: IconFacebook,
  instagram: IconInstagram,
  twitter: IconTwitter,
  tiktok: IconTiktok,
  youtube: IconYoutube,
  telegram: IconTelegram,
  'chevron-up': IconChevronUp,
}

export type IconType = {
  icon: keyof typeof icons
}
