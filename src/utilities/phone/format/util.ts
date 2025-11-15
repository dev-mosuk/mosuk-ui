export function format(phone: string | number): string | null {
  try {
    if (!phone) return null;

    const cleaned = String(phone).replace(/\D/g, '');

    let normalizedNumber: string;

    if (cleaned.length === 11) {
      normalizedNumber = cleaned.startsWith('8')
        ? '7' + cleaned.slice(1)
        : cleaned;
    } else if (cleaned.length === 10) {
      normalizedNumber = '7' + cleaned;
    } else {
      return null;
    }

    const match = normalizedNumber.match(
      /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/
    );

    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    return null;
  } catch {
    return null;
  }
}
