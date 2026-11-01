import { matches } from "@/lib/learning";
export function Highlight({ text, word }: { text: string; word: string }) {
  return (
    <>
      {text
        .split(/([\p{L}]+)/u)
        .map((part, i) =>
          matches(part, word) ? <mark key={i}>{part}</mark> : part,
        )}
    </>
  );
}
export function formatDate(value: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(value + "T12:00:00Z"));
}

export const difficulty = ["", "Mittel", "Anspruchsvoll", "Sehr anspruchsvoll"];
