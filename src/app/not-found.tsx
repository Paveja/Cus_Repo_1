import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-6 px-6 py-16">
      <p className="text-muted-foreground text-sm">404 / Page not found</p>
      <h1 className="font-heading text-4xl font-normal">
        Nothing here just yet.
      </h1>
      <p className="text-muted-foreground text-pretty">
        The page you’re looking for doesn’t exist. Return to the watch showcase.
      </p>
      <Link
        href="/"
        className="rounded-control bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-ring inline-flex min-h-12 items-center px-6 py-3 font-medium transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98]"
      >
        Return to the watch
      </Link>
    </main>
  );
}
