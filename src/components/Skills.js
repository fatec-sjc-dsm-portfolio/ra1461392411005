import React from "react";
import { techStack } from "../data/projects";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative py-16 sm:py-20">
      <div ref={ref} className={`container-page reveal ${visible ? "is-visible" : ""}`}>
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Hard skills</span>
          <h2 className="section-heading mt-4">Habilidades técnicas</h2>
          <p className="mt-3 text-muted">
            Tecnologias e ferramentas que já utilizei em projetos acadêmicos e pessoais.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
