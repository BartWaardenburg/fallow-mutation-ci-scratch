export function isNewParserEnabled(): boolean {
  return process.env.FEATURE_NEW_PARSER === "true";
}

export function legacyFlagHelper(): string {
  return "legacy";
}
