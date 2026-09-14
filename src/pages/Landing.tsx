import { GITHUB_APP_INSTALL_URL } from "../config";

const steps = [
  {
    title: "Connect a repo",
    body: "Install the Remedy GitHub App and choose which repositories it can read and open pull requests on.",
  },
  {
    title: "Point your alerts at it",
    body: "Pick your monitoring provider and paste the webhook URL we give you into its alert settings.",
  },
  {
    title: "Wake up to a fix",
    body: "When something breaks, Remedy reads the incident, finds the real cause in your code, and opens a reviewable PR.",
  },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-ink" />
          <span className="text-lg font-semibold tracking-tight">remedy</span>
        </div>
        <a
          href="https://github.com"
          className="text-sm font-medium text-ink/60 transition hover:text-ink"
        >
          GitHub ↗
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-32 pt-16 text-center">
        <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          Incidents in, pull requests out
        </span>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Your incidents fix
          <br />
          themselves.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
          Remedy connects your error monitoring to your codebase. When
          something breaks in production, it reads the real code, diagnoses
          the cause, and opens a pull request — before you've finished your
          coffee.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={GITHUB_APP_INSTALL_URL}
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-ink/10 transition hover:bg-ink/90 active:scale-[0.98]"
          >
            <GitHubMark />
            Install on GitHub
          </a>
          <span className="text-sm text-ink/40">
            Free to connect · takes about a minute
          </span>
        </div>

        <div className="mt-28 grid gap-6 text-left sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-ink/5 py-8 text-center text-sm text-ink/40">
        remedy — built for engineers who'd rather review a PR than a stack trace
      </footer>
    </div>
  );
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}
