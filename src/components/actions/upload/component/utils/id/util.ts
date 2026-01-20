export function generateUniqueId(): string {
  return `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
