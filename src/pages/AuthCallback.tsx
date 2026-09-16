import { Shell, StatusCard } from "../components/Shell";

/**
 * Reserved for GitHub's "Sign in with GitHub" OAuth flow (the User
 * authorization callback URL in the App settings). Not wired up yet —
 * Remedy only uses the installation flow (Setup.tsx) for repo access right
 * now, no user login. This page exists so the callback URL isn't a dead
 * link if that flow is ever enabled later.
 */
export function AuthCallback() {
  return (
    <Shell>
      <StatusCard
        title="Sign-in isn't available yet"
        body="Remedy doesn't require a GitHub login — installing the app on your repos is all that's needed. If you ended up here, you can close this page."
      />
    </Shell>
  );
}
