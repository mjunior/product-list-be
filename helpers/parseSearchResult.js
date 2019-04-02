const parseCategoriesResult = require('./parseCategoriesResult');
const parseItemResult = require('./parseItemResult');

const parseSearchResult = (data) => {
  categories = parseCategoriesResult(data);
  return {
    author: {
      name: 'Mauricio',
      last_name: 'Junior' 
    },
    categories: categories,
    items: data["results"].map((item) => parseItemResult(item))
  }
}

module.exports = parseSearchResult