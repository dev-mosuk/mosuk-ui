export function format(
  price: number | null | undefined,
  currency: string,
  separator?: string
): string {
  if (price === null || price === undefined || price <= 0) {
    return 'Цена не указана';
  }

  const roundedPrice = Math.round(price);

  const formattedPrice =
    roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator || ' ') +
    ' ' +
    (currency || '₽');

  return formattedPrice;
}
