import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen mx-auto flex max-w-2xl flex-1 flex-col gap-4 justify-center px-4">
      <h1 className="text-[var(--text-color-primary)] text-2xl font-semibold">
        404
      </h1>
      <p className="text-[var(--text-color-secondary)]">
        This page doesn't exist.
      </p>
      <Link href="/" className="text-[var(--text-color-tertiary)] underline">
        Go home
      </Link>
    </main>
  );
}
