import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QPageContainer,
  QPage,
  QHeader,
  QFooter,
  QDrawer,
  QPageSticky,
  QPageScroller,
  QInput,
  QMarkupTable,
  QIcon,
  QCard,
  QCardSection,
  QCardActions
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  components: {
    QLayout,
    QPageContainer,
    QPage,
    QHeader,
    QFooter,
    QDrawer,
    QPageSticky,
    QPageScroller,
    QInput,
    QMarkupTable,
    QIcon,
    QCard,
    QCardSection,
    QCardActions
  }
})
