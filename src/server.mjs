import handlebars from 'handlebars/runtime'

import card from './components/card/_card.hbs'
import gwicNav from './components/gwic-nav/_gwic-nav.hbs'
import gwicHeader from './components/gwic-header/_gwic-header.hbs'
import gwicFooter from './components/gwic-footer/_gwic-footer.hbs'
import gwicSubNav from './components/gwic-sub-nav/_gwic-sub-nav.hbs'
import gwicSplitCol from './components/split-col/_split-col.hbs'
import breadcrumbs from './components/breadcrumbs/_breadcrumbs.hbs'

const templates = {
  handlebars,
  card,
  breadcrumbs,
  gwicNav,
  gwicHeader,
  gwicFooter,
  gwicSubNav,
  gwicSplitCol,
}

export default templates
