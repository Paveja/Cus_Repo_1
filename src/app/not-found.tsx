import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Nothing to see here.
      </h1>
      <p className="text-muted-foreground">Let’s get you back to the lineup.</p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 text-background"
      >
        Back to the showcase
      </Link>
    </main>
  );
}
