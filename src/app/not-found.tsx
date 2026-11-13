import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="min-h-12 rounded-control bg-primary px-6 py-3 text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Open calculator
      </Link>
    </main>
  );
}
