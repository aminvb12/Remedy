import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="h-6 w-6 rounded-md bg-ink" />
          <span className="font-semibold tracking-tight text-ink">
            remedy
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function StatusCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-8 text-center shadow-sm">
      <h1 className="text-xl font-semibold text-ink">{title}</h1>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{body}</p>
    </div>
  );
}
