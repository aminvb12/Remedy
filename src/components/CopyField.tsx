import { useState } from "react";

export function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white p-2 pl-4 shadow-sm">
      <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-ink/80">
        {value}
      </code>
      <button
        onClick={handleCopy}
        className="shrink-0 rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white transition hover:bg-ink/90 active:scale-95"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}
