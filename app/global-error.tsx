"use client";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main style={{ padding: "2rem" }}>
          <h1>Something went critically wrong</h1>
          <button onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}
