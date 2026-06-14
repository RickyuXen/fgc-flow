import type { CSSProperties, ReactNode } from "react";

export function punchStyle(delay: number, animate: boolean): CSSProperties {
  if (!animate) return {};
  return {
    animationDelay: `${delay}s`,
    ["--punch-delay" as string]: `${delay}s`,
  };
}

export function PunchSparks({ count = 6 }: { count?: number }) {
  return (
    <span className="punch-line__sparks" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

interface PunchLineProps {
  text: string;
  className?: string;
  delay: number;
  animate: boolean;
  as?: "p" | "div" | "h1";
  children?: ReactNode;
}

export function PunchLine({
  text,
  className = "",
  delay,
  animate,
  as: Tag = "p",
  children,
}: PunchLineProps) {
  return (
    <Tag
      className={`punch-line ${animate ? "" : "punch-line--static"} ${className}`}
      style={punchStyle(delay, animate)}
    >
      {animate && <PunchSparks />}
      <span className="punch-line__text">{children ?? text}</span>
    </Tag>
  );
}
