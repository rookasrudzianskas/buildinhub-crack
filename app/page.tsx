export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
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
      {/* gentle vignette so the headline sits in light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <h1
          className="rise text-6xl font-black leading-[0.92] tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.05s" }}
        >
          buildinhub
          <br />
          is DEAD{" "}
          <span aria-label="heart" className="align-middle text-white/90">
            &lt;3
          </span>
        </h1>

        <p
          className="rise mt-8 max-w-xl text-balance text-lg leading-relaxed text-white/55 sm:text-xl"
          style={{ animationDelay: "0.18s" }}
        >
          buildinhub engineers got mad at each other, so xD
        </p>

        <p
          className="rise mt-10 text-base font-medium tracking-wide text-white/85 sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          Don&apos;t use it anymore.
        </p>

        <div
          className="rise mt-12 w-full max-w-md border-t border-white/15 pt-8"
          style={{ animationDelay: "0.42s" }}
        >
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            Ask Stripe for a chargeback for all months.
          </p>
          <a
            href="https://support.stripe.com/charge-lookup"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors duration-200 hover:bg-white hover:text-black"
          >
            Look up your charge
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </a>
        </div>

        <p
          className="rise mt-16 text-sm font-medium uppercase tracking-[0.4em] text-white/35"
          style={{ animationDelay: "0.54s" }}
        >
          THX
        </p>
      </div>
    </main>
  );
}
