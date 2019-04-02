const fetch = require('node-fetch');

const getDescriptionItem = async(id) => {
  response = await fetch(`${process.env.API_BASE_URL}/items/${id}/description`)
  response_json = await response.json()
  console.log(response_json.plain_text)
  return response_json.plain_text
}

module.exports = getDescriptionItem