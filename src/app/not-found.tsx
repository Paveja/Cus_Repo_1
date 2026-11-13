import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24">
      <h1 className="font-heading text-4xl">An unwritten page.</h1>
      <p className="my-6 text-muted-foreground">
        This page isn’t in our collection, but another story is waiting for you.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 py-3 text-primary-foreground"
      >
        Back to the bookstore
      </Link>
    </main>
  );
}
