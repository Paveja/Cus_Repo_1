import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-bold">No confetti here.</h1>
      <p className="text-muted-foreground">
        That page doesn’t exist. The celebration is back home.
      </p>
      <Link
        href="/"
        className="min-h-12 rounded-control bg-primary px-6 py-3 font-bold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Back to the celebration
      </Link>
    </main>
  );
}
