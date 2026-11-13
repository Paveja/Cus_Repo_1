import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        A little off the beaten path.
      </h1>
      <p className="text-muted-foreground">
        The page you’re looking for isn’t here.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 text-primary-foreground"
      >
        Back to the showcase
      </Link>
    </main>
  );
}
