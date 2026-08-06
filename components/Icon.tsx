/**
 * One drawn icon set: 24×24, 1.6 stroke, round caps and joins.
 * Everything on the page uses these; no emoji, no unicode glyphs standing in.
 */

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export type IconName =
  | "phone"
  | "arrow-up-right"
  | "menu"
  | "close"
  | "pin"
  | "clock"
  | "instagram"
  | "calendar"
  | "chevron-right";

const PATHS: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M6.3 3.5h3l1.5 3.75-1.9 1.15a11.4 11.4 0 0 0 5.2 5.2l1.15-1.9 3.75 1.5v3a1.8 1.8 0 0 1-1.96 1.8C10.2 17.4 5.6 12.8 4.5 5.46A1.8 1.8 0 0 1 6.3 3.5Z" />
  ),
  "arrow-up-right": (
    <>
      <path d="M7.5 16.5 16.5 7.5" />
      <path d="M9 7.5h7.5V15" />
    </>
  ),
  menu: (
    <>
      <path d="M3.5 7.5h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 16.5h17" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.4 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.75" />
      <circle cx="12" cy="12" r="3.75" />
      <path d="M16.9 7.1h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.75" y="5.25" width="16.5" height="15" rx="2.5" />
      <path d="M3.75 10h16.5" />
      <path d="M8.25 3.75v3" />
      <path d="M15.75 3.75v3" />
    </>
  ),
  "chevron-right": <path d="M9.5 5.5 16 12l-6.5 6.5" />,
};

export default function Icon({ name, className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

/** A filled five-point star, drawn: used for the rating. */
export function Star({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 2.6 2.86 5.8 6.4.93-4.63 4.51 1.09 6.38L12 17.2l-5.72 3.01 1.09-6.38L2.74 9.33l6.4-.93L12 2.6Z" />
    </svg>
  );
}

/** Five stars in a row, with the accessible label supplied by the caller. */
export function Stars({ label }: { label: string }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} />
      ))}
    </span>
  );
}
