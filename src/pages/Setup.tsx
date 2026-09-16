import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CopyField } from "../components/CopyField";
import { Shell, StatusCard } from "../components/Shell";
import { completeSetup, PROVIDERS, type SetupResult } from "../lib/api";

export function Setup() {
  const [params] = useSearchParams();
  const installationId = params.get("installation_id");

  const [providerId, setProviderId] = useState<string>("sentry");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [result, setResult] = useState<SetupResult | null>(null);

  async function handleFinish() {
    if (!installationId) return;
    setStatus("loading");
    const res = await completeSetup(installationId);
    setResult(res);
    setStatus("done");
  }

  if (!installationId) {
    return (
      <Shell>
        <StatusCard
          title="No installation found"
          body="This page is only meaningful right after installing the GitHub App — it reads an installation_id from the URL that GitHub adds automatically. Head back and install first."
        />
      </Shell>
    );
  }

  if (status === "done" && result) {
    return (
      <Shell>
        <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            Connected
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-ink">
            You're all set
          </h1>
          <p className="mt-2 text-ink/60">
            Paste this URL into your{" "}
            <span className="font-medium text-ink">
              GLITCHTIP
            </span>{" "}
            alert settings — Remedy starts working the next time something
            breaks.
          </p>

          <div className="mt-6">
            <CopyField value={result.webhookUrl} />
          </div>

          <div className="mt-8 rounded-xl bg-paper p-5 text-sm text-ink/60">
            <p className="font-medium text-ink/80">
              Where to paste it in GLITCHTIP
            </p>
            <p className="mt-1 leading-relaxed">
              Settings → Alerts → create a new Alert Rule → Add Action →
              Send a notification via a Webhook, then drop this URL in.
            </p>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
        <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          Installed
        </span>
        <h1 className="mt-4 text-2xl font-semibold text-ink">
          One more thing
        </h1>
        <p className="mt-2 text-ink/60">
          Which alert provider watches this repo? We'll give you a webhook
          URL built for it.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {PROVIDERS.map((provider) => (
            <button
              key={provider.id}
              disabled={!provider.available}
              onClick={() => setProviderId(provider.id)}
              className={[
                "rounded-xl border p-4 text-left transition",
                provider.available
                  ? "cursor-pointer hover:border-ink/30"
                  : "cursor-not-allowed opacity-50",
                providerId === provider.id
                  ? "border-accent bg-accent-soft"
                  : "border-ink/10",
              ].join(" ")}
            >
              <span className="font-medium text-ink">{provider.name}</span>
              {!provider.available && (
                <span className="mt-1 block text-xs text-ink/40">
                  Coming soon
                </span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleFinish}
          disabled={status === "loading"}
          className="mt-8 w-full rounded-xl bg-ink px-6 py-3.5 text-base font-medium text-white transition hover:bg-ink/90 disabled:opacity-60"
        >
          {status === "loading" ? "Setting up…" : "Finish setup"}
        </button>
      </div>
    </Shell>
  );
}

