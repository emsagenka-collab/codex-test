import { gunzipSync } from "node:zlib";
import { compressedWordForms } from "./data";

let dictionary: { rows: Buffer; start: number; endings: Map<string, string[]> };
const results = new Map<string, boolean>();

function load() {
  if (!dictionary) {
    const rows = gunzipSync(Buffer.from(compressedWordForms, "base64"));
    const newline = rows.indexOf(10);
    const endings = new Map<string, string[]>();
    const suffixes: Record<string, string> = JSON.parse(
      rows.toString("utf8", 0, newline),
    );
    for (const [flag, suffix] of Object.entries(suffixes)) {
      if (!endings.has(suffix)) endings.set(suffix, []);
      endings.get(suffix)!.push(flag);
    }
    dictionary = { rows, start: newline + 1, endings };
  }
  return dictionary;
}

/** Find one explicitly listed stem and its licensed endings, without parsing
 * the entire inventory into JS objects or freely concatenating suffixes. */
function flagsFor(word: string): string | undefined {
  const { rows, start } = load();
  const needle = Buffer.from(word);
  let low = start;
  let high = rows.length;
  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    const line = rows.lastIndexOf(10, middle - 1) + 1;
    const divider = rows.indexOf(124, line);
    const end = rows.indexOf(10, divider);
    const comparison = Buffer.compare(rows.subarray(line, divider), needle);
    if (comparison === 0) return rows.toString("ascii", divider + 1, end);
    if (comparison < 0) low = end + 1;
    else high = line;
  }
  return undefined;
}

/** Offline lookup for PDF reconstruction only. This does not change spelling,
 * supply definitions, add learning words, or claim a current TDK confirmation. */
export function isKnownTurkishWordForm(word: string): boolean {
  const key = word
    .normalize("NFC")
    .toLocaleLowerCase("tr-TR")
    .replace(/['’]/gu, "")
    .replaceAll("â", "a")
    .replaceAll("î", "i")
    .replaceAll("û", "u");
  if (!/^\p{L}{2,80}$/u.test(key)) return false;
  if (results.has(key)) return results.get(key)!;
  let valid = flagsFor(key) !== undefined;
  if (!valid) {
    const { endings } = load();
    for (let at = 1; at < key.length; at++) {
      const allowed = endings.get(key.slice(at));
      if (!allowed) continue;
      const flags = flagsFor(key.slice(0, at));
      if (flags === undefined) continue;
      if (
        allowed.some((flag) => ("," + flags + ",").includes("," + flag + ","))
      ) {
        valid = true;
        break;
      }
    }
  }
  if (results.size >= 8192) results.delete(results.keys().next().value!);
  results.set(key, valid);
  return valid;
}
