import { z } from "zod";

const numberInput = z
  .string()
  .trim()
  .min(1, "Enter both numbers.")
  .regex(/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i, "Enter valid numbers.")
  .transform(Number)
  .pipe(z.number().finite("Use numbers within the supported range."));

const additionInput = z.object({ first: numberInput, second: numberInput });

export type AdditionResult =
  { success: true; value: number } | { success: false; error: string };

export function addNumbers(first: string, second: string): AdditionResult {
  const parsed = additionInput.safeParse({ first, second });
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Enter valid numbers.",
    };
  }

  const sum = parsed.data.first + parsed.data.second;
  if (!Number.isFinite(sum)) {
    return {
      success: false,
      error: "The result is too large. Try smaller numbers.",
    };
  }

  return { success: true, value: Object.is(sum, -0) ? 0 : sum };
}

export function formatSum(value: number): string {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 15,
  }).format(value);
}
