const fetch = require('node-fetch');

const getBreadcrumb = async(category) => {
  response = await fetch(`${process.env.API_BASE_URL}/categories/${category}`)
  category_json = await response.json()
  return category_json['path_from_root'].map((item) => item['name'])
}

module.exports = getBreadcrumb