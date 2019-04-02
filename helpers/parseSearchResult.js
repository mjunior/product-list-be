const parseCategoriesResult = require('./parseCategoriesResult');

const parseSearchResult = (data) => {
  categories = parseCategoriesResult(data);
  return {
    author: {
      name: 'Mauricio',
      last_name: 'Junior' 
    },
    categories: categories,
    items: data["results"]
  }
}

module.exports = parseSearchResult