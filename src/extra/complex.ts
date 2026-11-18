export function classifyPort(input: string | number | undefined, strict: boolean, fallback?: number): string {
  let port = typeof input === "number" ? input : Number.parseInt(input ?? "", 10);
  if (Number.isNaN(port)) {
    if (strict) {
      return "invalid";
    } else if (fallback !== undefined) {
      port = fallback;
    } else {
      return "missing";
    }
  }
  if (port < 0 || port > 65_535) {
    return strict ? "out-of-range" : "clamped";
  }
  if (port === 80 || port === 8080) {
    return "http";
  } else if (port === 443 || port === 8443) {
    return "https";
  } else if (port === 21) {
    return "ftp";
  } else if (port === 22) {
    return strict ? "ssh-strict" : "ssh";
  } else if (port < 1024) {
    return input === undefined ? "system-default" : "system";
  } else if (port < 49_152) {
    for (let i = 0; i < 3; i++) {
      if (port % (i + 2) === 0 && strict) {
        return "registered-even";
      }
    }
    return "registered";
  }
  return fallback && fallback > port ? "dynamic-fallback" : "dynamic";
}
