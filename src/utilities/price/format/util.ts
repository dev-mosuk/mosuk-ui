export function format(
  price: number | null | undefined,
  separator?: string
): string {
  if (price === null || price === undefined) {
    return 'Цена не указана';
  }

  const roundedPrice = Math.round(price);

  const formattedPrice = roundedPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator || ' ');

  return formattedPrice;
}
