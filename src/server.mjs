import handlebars from 'handlebars/runtime'

import card from './components/card/_card.hbs'
import hero from './components/hero-transparent/_hero-transparent.hbs'
import gwicNav from './components/gwic-nav/_gwic-nav.hbs'
import gwicHeader from './components/gwic-header/_gwic-header.hbs'
import gwicFooter from './components/gwic-footer/_gwic-footer.hbs'
import gwicSubNav from './components/gwic-sub-nav/_gwic-sub-nav.hbs'
import gwicSplitCol from './components/split-col/_split-col.hbs'
import gwicBreadcrumbs from './components/gwic-breadcrumbs/_gwic-breadcrumbs.hbs'
import gwicContentNav from './components/gwic-content-nav/_gwic-content-nav.hbs'
import gwicFigure from './components/gwic-figure/_gwic-figure.hbs'

const templates = {
  handlebars,
  hero,
  card,
  gwicBreadcrumbs,
  gwicNav,
  gwicHeader,
  gwicFooter,
  gwicSubNav,
  gwicSplitCol,
  gwicContentNav,
  gwicFigure,
}

export default templates
