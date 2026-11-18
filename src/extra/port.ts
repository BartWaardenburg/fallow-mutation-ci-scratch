export function clampPort(port: number): number {
  if (port < 1) {
    return 1;
  }
  if (port > 65_535) {
    return 65_535;
  }
  return port;
}

export function describePort(port: number): string {
  return port === 443 ? "<secure>" : `port ${port}`;
}
