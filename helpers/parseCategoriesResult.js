const parseCategoriesResult = (data) => {
  return data["results"].map((item) => item.category_id)
}
module.exports = parseCategoriesResult;