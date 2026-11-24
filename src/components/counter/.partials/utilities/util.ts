export function counterFractionDigits(value: number): number {
  const match = String(value).match(/(?:\.(\d+))?$/);

  return match?.[1]?.length ?? 0;
}

export function counterFormatValue(
  value: number,
  maximumFractionDigits: number,
  locale: string,
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(value);
}
