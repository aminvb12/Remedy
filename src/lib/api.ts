import {API_BASE_URL} from "./config.ts";

export type Provider = {
  id: string;
  name: string;
  available: boolean;
};

export type SetupResult = {
  webhookUrl: string;
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
 */
export async function completeSetup(
  installationId: string,
): Promise<SetupResult> {
  const response = await fetch(`${API_BASE_URL}/webhooks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      installation_id: installationId,
      alert_provider: 'GLITCHTIP'
    }),
  });

  if (!response.ok) {
    throw new Error(`Setup failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
