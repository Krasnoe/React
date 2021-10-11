export const totalPriceItems = order => order.price * order.count;

export const rub = (item) => {
  return item.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})
}