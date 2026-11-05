import { repairTurkishText } from "./text-repair";

function headerKey(line: string, legacy: boolean) {
  const raw = line.trim();
  if (raw.length > 100 || !/^(?:\d+\s+.+|.+\s+\d+)$/u.test(raw)) return null;
  const text = repairTurkishText(raw, legacy).trim();
  const title = text.replace(/^\d+\s+|\s+\d+$/gu, "").trim();
  if ((title.match(/[\p{L}]+/gu) || []).length < 2) return null;
  return title.toLocaleLowerCase("tr-TR").replace(/\s+/gu, " ");
}
export function detectRunningHeaders(text: string, legacy: boolean) {
  const numbers = new Map<string, Set<string>>();
  for (const line of text.split("\n")) {
    const key = headerKey(line, legacy);
    const number =
      line.trim().match(/(?:^|\s)(\d+)\s*$/u)?.[1] ||
      line.trim().match(/^(\d+)\s/u)?.[1];
    if (!key || !number) continue;
    if (!numbers.has(key)) numbers.set(key, new Set());
    numbers.get(key)!.add(number);
  }
  return new Set(
    [...numbers].filter(([, values]) => values.size >= 3).map(([key]) => key),
  );
}
export function isRunningHeader(
  line: string,
  headers: Set<string>,
  legacy: boolean,
) {
  const key = headerKey(line, legacy);
  return key !== null && headers.has(key);
}
export function stripRunningHeaders(
  text: string,
  headers: Set<string>,
  legacy: boolean,
) {
  return text
    .split("\n")
    .filter((line) => !isRunningHeader(line, headers, legacy))
    .join("\n")
    .trim();
}
export function maskRunningHeaders(
  text: string,
  headers: Set<string>,
  legacy: boolean,
) {
  // Preserve UTF-16 offsets, so every quote still points into untouched raw source.
  return text
    .split("\n")
    .map((line) =>
      isRunningHeader(line, headers, legacy) ? " ".repeat(line.length) : line,
    )
    .join("\n");
}
