export function legacySegments35(path: string): string[] {
  const segments = path.split("/").filter(Boolean);
  const result: string[] = [];
  for (const segment of segments) {
    if (segment === ".") {
      continue;
    }
    if (segment === "..") {
      result.pop();
      continue;
    }
    result.push(decodeURIComponent(segment).toLowerCase().trim());
  }
  return result.length > 0 ? result : ["/"];
}
