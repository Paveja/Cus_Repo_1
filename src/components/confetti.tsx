import type { CSSProperties } from "react";

export const colors = [
  "party-blue",
  "party-pink",
  "party-yellow",
  "party-green",
  "party-purple",
];
export type Particle = { id: string; style: CSSProperties };

export function makeParticles(): Particle[] {
  return Array.from({ length: 160 }, (_, index) => ({
    id: crypto.randomUUID(),
    style: {
      "--drift": `${(Math.random() - 0.5) * 150}vw`,
      "--rise": `${-25 - Math.random() * 65}vh`,
      "--spin": `${(Math.random() - 0.5) * 1600}deg`,
      "--duration": `${2.2 + Math.random() * 1.4}s`,
      "--delay": `${Math.random() * 0.2}s`,
      backgroundColor: `var(--color-${colors[index % colors.length]})`,
      borderRadius: index % 3 === 0 ? "50%" : "2px",
      width: `${6 + Math.random() * 6}px`,
      height: `${8 + Math.random() * 8}px`,
    } as CSSProperties,
  }));
}

export default function Confetti({ particles }: { particles: Particle[] }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={particle.style}
          className="absolute top-1/2 left-1/2 block animate-confetti motion-reduce:hidden"
        />
      ))}
    </div>
  );
}
