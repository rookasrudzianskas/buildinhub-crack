export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* subtle grid backdrop, monochrome */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
          Notice
        </span>

        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          buildinhub
          <br />
          is <span className="text-white">DEAD</span>{" "}
          <span aria-label="heart" className="align-middle">
            &lt;3
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Don&apos;t use it anymore.
        </p>

        <div className="mt-12 w-full max-w-md border-t border-white/15 pt-8">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Ask Stripe for a chargeback for all months.
          </p>
        </div>

        <p className="mt-16 text-sm font-medium uppercase tracking-[0.4em] text-white/40">
          THX
        </p>
      </div>
    </main>
  );
}
