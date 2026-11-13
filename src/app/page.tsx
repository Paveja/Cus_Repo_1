import Calculator from "@/components/calculator";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance">
        Calculator
      </h1>
      <Calculator />
      <p className="max-w-sm text-center text-base text-pretty text-muted-foreground">
        Use your keyboard or tap the keys. Enter to calculate, Esc to clear.
      </p>
    </main>
  );
}
