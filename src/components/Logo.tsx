export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="url(#logo-gradient)" />
        <path
          d="M12 27V13l16 14V13"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="logo-gradient" x1="2" y1="2" x2="38" y2="38">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#312e81" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-none">
        <div className="font-display text-lg font-bold tracking-tight">
          nice<span className="text-brand">.</span>
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Computers
        </div>
      </div>
    </div>
  );
}
