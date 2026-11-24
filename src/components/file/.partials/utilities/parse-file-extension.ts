export function parseFileExtension(input: string): string | null {
  const trimmed = input.trim();

  if (!trimmed) {
    return null;
  }

  const withoutHash = trimmed.split('#')[0] ?? trimmed;
  const withoutQuery = withoutHash.split('?')[0] ?? withoutHash;
  const segments = withoutQuery.split(/[/\\]/);
  const basename = segments[segments.length - 1] ?? '';
  const dot = basename.lastIndexOf('.');

  if (dot <= 0 || dot === basename.length - 1) {
    return null;
  }

  return basename.slice(dot + 1).toLowerCase();
}
