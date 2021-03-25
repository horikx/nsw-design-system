// import * as handlebarsRuntime from 'handlebars/runtime'
import handlebars from 'handlebars'
// import helpers from 'handlebars-helpers'
// import 'handlebars/runtime.js'
import capitalize from './global/handlebars/helpers/capitalize.js'
import changeExt from './global/handlebars/helpers/change-extention.js'
import debug from './global/handlebars/helpers/debug.js'
import encodeUrl from './global/handlebars/helpers/encodeUrl.js'
import ifEquals from './global/handlebars/helpers/if-equals.js'
import orHelper from './global/handlebars/helpers/or.js'

handlebars.registerHelper(capitalize)
handlebars.registerHelper(changeExt)
handlebars.registerHelper(debug)
handlebars.registerHelper(encodeUrl)
handlebars.registerHelper(ifEquals)
handlebars.registerHelper(orHelper)

const templates = {
  card: handlebars.compile(require('./components/card/_card.hbs'))
}

export {
  handlebars,
  templates,
}
