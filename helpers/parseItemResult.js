const decimals = (num) =>{
  return (parseFloat(num) % 1).toFixed(2).substring(2)
}

const parseItemResult = (data) => {
  return {
    "id": data['id'],
    "title": data['title'],
    "price": {
      "currency": data['currency_id'],
      "amount": Math.trunc(data['price']),
      "decimals": decimals(data['price']),
    },
    "picture": data['thumbnail'],
    "condition": data['condition'],
    "free_shipping": data['shipping']['free_shipping'],
    "sold_quantity": data['sold_quantity'],
    "description": data['descriptions'] !== undefined ? data['descriptions'] : undefined,
    "category_id": data['category_id']
  }
}

module.exports = parseItemResult
