const fetch = require('node-fetch');
const mostUsedCategory = require('./mostUserCategory');

const parseBreadcrumbResult = async(results) => {
  category = mostUsedCategory(results['categories'])
  response = await fetch(`https://api.mercadolibre.com/categories/${category}`)
  category_json = await response.json()
  results['breadcrumb'] = category_json['path_from_root']
  return results
}

module.exports = parseBreadcrumbResult