interface ParsedLocalePath {
  namespace: string;
  language: string;
}

export function parseLocalePath(filePath: string): ParsedLocalePath | null {
  const parts = filePath.split("/");

  const fileName = parts[parts.length - 1];
  const fileMatch = fileName.match(/^local\.(\w+)\.json$/);
  if (!fileMatch) return null;

  const language = fileMatch[1];

  const srcIndex = parts.lastIndexOf("src");
  if (srcIndex === -1 || parts.length - srcIndex < 3) return null;

  const slice = parts[srcIndex + 1].replace(/^\d+_/, "");
  const component = parts[parts.length - 2];

  return { namespace: `${slice}_${component}`, language };
}
