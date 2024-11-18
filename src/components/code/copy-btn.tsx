"use client";

import clsx from "clsx";
import { Copy, CopyCheck } from "lucide-react";
import { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";

export const CopyButton = ({
  content,
  className = "",
}: {
  className?: string;
  content: string;
}) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = useCallback(() => {
    const formattedContent = content.trim();
    copyToClipboard(formattedContent);

    setCopied(true); // Set copied to true to show the CopyCheck icon

    // Set a timeout to revert back to the Copy icon after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [content, copyToClipboard]);

  return (
    <button
      className={clsx(className, "h-5 w-5 transition-colors")}
      onClick={handleCopyCode}
      type="button"
    >
      <span className="sr-only">Copy code</span>
      {copied ? (
        <CopyCheck className="h-5 w-5 text-slate-300" /> // Green check icon when copied
      ) : (
        <Copy className="h-5 w-5 text-slate-400" /> // Default copy icon
      )}
    </button>
  );
};
