"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="h-screen mx-auto flex max-w-2xl flex-1 flex-col gap-4 justify-center px-4">
      <h1 className="text-[var(--text-color-primary)] text-2xl font-semibold">
        Something went wrong
      </h1>
      <p className="text-[var(--text-color-secondary)]">
        An unexpected error occurred.
      </p>
      <button
        onClick={reset}
        className="text-[var(--text-color-tertiary)] underline text-left"
      >
        Try again
      </button>
    </main>
  );
}
