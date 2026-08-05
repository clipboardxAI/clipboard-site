import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRoute, useData } from 'vitepress'
import AdvancedHome from './AdvancedHome.vue'
import MarketplaceView from './MarketplaceView.vue'
import HomeActions from './HomeActions.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute()
    const isHomePage = route.path === '/'
    // Matches /marketplace, /zh-CN/marketplace, /zh-TW/marketplace, /ja/marketplace
    const isMarketplace = /^\/(zh-CN|zh-TW|ja)?\/?(marketplace)(\/.*)?$/.test(route.path)

    if (isHomePage) {
      return h(AdvancedHome, { data: useData().frontmatter.value })
    }

    if (isMarketplace) {
      return h(MarketplaceView)
    }

    return h(DefaultTheme.Layout, {
      sidebar: false
    }, {
      'home-hero-info-after': () => h(HomeActions),
    })
  },
}
