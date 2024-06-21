import { useNamespace } from './cacheWithNamespace'

const catCacheKey = Symbol('catCacheKey')
const { get, set } = useNamespace(catCacheKey)

function catCategorizer(cat) {
  let catTaxonomy = get(cat.id)
  if (!catTaxonomy) {
    catTaxonomy = complexCatAnalysis() // of course "complextCatAnalysis()" doesn't exist, just an example
    set(cat.id, catTaxonomy)
  }

  return catTaxonomy
}
