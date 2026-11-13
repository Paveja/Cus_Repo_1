export default function PartyIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-muted"
    >
      <svg viewBox="0 0 128 128" className="h-32 w-32" fill="none">
        <path d="M30 100 46 48 83 85Z" className="fill-party-yellow" />
        <path
          d="m36 80 29 12M41 64l38 20"
          className="stroke-party-pink"
          strokeWidth="8"
        />
        <ellipse
          cx="65"
          cy="65"
          rx="12"
          ry="27"
          transform="rotate(-45 65 65)"
          className="fill-party-purple"
        />
        <path
          d="M67 43c-5-13 12-9 9-22M85 63c17 4 4 15 20 16"
          className="stroke-party-blue"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="m92 28 4 7 8 1-6 5 1 8-7-4-7 4 1-8-6-5 8-1Z"
          className="fill-party-yellow"
        />
        <circle cx="104" cy="58" r="4" className="fill-party-green" />
        <circle cx="49" cy="24" r="4" className="fill-party-pink" />
        <path
          d="m85 51 8-7M55 38l-2-6"
          className="stroke-party-pink"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
