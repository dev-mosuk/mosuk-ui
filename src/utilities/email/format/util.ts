export function format(email: string): string | null {
  try {
      if (!email) return null;

      const cleaned = email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return null;

      return cleaned;
  } catch {
      return null;
  }
}