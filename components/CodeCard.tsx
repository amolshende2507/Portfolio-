"use client";

import { useEffect, useState } from "react";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: 'name: "Amol Sachin Shende",' },
  { indent: 1, text: 'role: "Full Stack Developer",' },
  { indent: 1, text: "stack: [" },
  { indent: 2, text: '"Next.js", "FastAPI", "MongoDB"' },
  { indent: 1, text: "]," },
  { indent: 1, text: "interests: [\"AI Integration\"]," },
  { indent: 1, text: "status: () => \"shipping 🚀\"," },
  { indent: 0, text: "};" },
];

function useTypedLines(lines: typeof codeLines, speed = 22, restartDelay = 2200) {
  const [visible, setVisible] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => {
        setVisible([]);
        setLineIndex(0);
        setCharIndex(0);
      }, restartDelay);
      return () => clearTimeout(t);
    }

    const current = lines[lineIndex].text;

    if (charIndex <= current.length) {
      const t = setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 160);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, lines, speed, restartDelay]);

  return { visible, lineIndex, done: lineIndex >= lines.length };
}

export default function CodeCard() {
  const { visible, lineIndex, done } = useTypedLines(codeLines);

  return (
    <div className="glass-card mx-auto w-full max-w-md overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-ink-muted">profile.ts</span>
      </div>

      <div className="px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
        {codeLines.map((line, i) => {
          const text = visible[i] ?? "";
          const isCurrent = i === lineIndex && !done;
          if (i > lineIndex) return null;
          return (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.1}rem` }}>
              <span className="text-ink-primary">{colorize(text)}</span>
              {isCurrent && (
                <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-accent-blue align-middle" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function colorize(text: string) {
  const keyMatch = text.match(/^([a-zA-Z]+)(:)/);
  if (keyMatch) {
    return (
      <>
        <span className="text-accent-cyan">{keyMatch[1]}</span>
        <span className="text-ink-secondary">:</span>
        <span>{text.slice(keyMatch[0].length)}</span>
      </>
    );
  }
  return <span>{text}</span>;
}
