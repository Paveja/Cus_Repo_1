import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-heading text-5xl">A page yet to be written.</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        We couldn’t find that page. Let’s take you back to the beginning.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-control bg-primary px-6 py-4 text-primary-foreground"
      >
        Back to Paper & Form
      </Link>
    </main>
  );
}
