const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I to avoid misreading

/** Reference ticket like MW-SRN-2026-7KQ4. */
export function generateTicketId(date = new Date()): string {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const code = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
  return `MW-SRN-${date.getFullYear()}-${code}`;
}
