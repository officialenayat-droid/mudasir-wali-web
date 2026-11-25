import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "paper" | "white" | "ink";
  children: ReactNode;
};

const tones = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-paper",
};

export function Section({ id, eyebrow, title, lede, tone = "paper", children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${tones[tone]} px-4 py-20 sm:px-6 md:py-28`}>
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className={`eyebrow ${tone === "ink" ? "text-accent-soft!" : ""}`}>{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
          {lede && <p className={`mt-4 text-lg ${tone === "ink" ? "text-slate-300" : "text-slate-600"}`}>{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
