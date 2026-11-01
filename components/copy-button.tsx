"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return <button className="copy-button" type="button" onClick={copy} aria-label={copied ? "Copied" : "Copy code"}>{copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}</button>;
}
