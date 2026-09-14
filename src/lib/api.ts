export type Provider = {
  id: string;
  name: string;
  available: boolean;
};

export type SetupResult = {
  webhookUrl: string;
  provider: string;
};

export const PROVIDERS: Provider[] = [
  { id: "sentry", name: "Sentry", available: true },
  { id: "grafana", name: "Grafana", available: false },
  { id: "datadog", name: "Datadog", available: false },
];

/**
 * Finishes setup for a fresh GitHub App installation: the backend generates
 * a webhook secret, records which alert provider this repo uses, and hands
 * back the URL to paste into that provider's alert settings.
 *
 * STUBBED — swap the body for a real `fetch` once the FastAPI endpoint
 * exists (e.g. POST `${API_BASE}/api/setup`). Keep the signature the same
 * so no caller has to change.
 */
export async function completeSetup(
  installationId: string,
  providerId: string,
): Promise<SetupResult> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const token = Math.random().toString(36).slice(2, 10);
  return {
    webhookUrl: `https://api.remedy.dev/webhook/${installationId}-${token}`,
    provider: providerId,
  };
}
