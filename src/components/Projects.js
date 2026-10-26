import React from "react";
import { projetosAcademicos, projetosPessoais } from "../data/projects";
import ProjectCard from "./ProjectCard";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projetos" className="relative py-16 sm:py-20">
      <div ref={ref} className={`container-page reveal ${visible ? "is-visible" : ""}`}>
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Projetos</span>
          <h2 className="section-heading mt-4">Projetos Acadêmicos (API)</h2>
          <p className="mt-3 text-muted">
            Projetos integradores desenvolvidos ao longo do curso, cada semestre em parceria com uma
            empresa ou instituição real — do problema à solução entregue.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projetosAcademicos.map((project) => (
            <ProjectCard key={project.id} project={project} kind="academic" />
          ))}
        </div>

        <div className="mb-10 mt-16 max-w-3xl">
          <h2 className="section-heading">Projetos Pessoais</h2>
          <p className="mt-3 text-muted">
            Trabalhos próprios que reforçam competências técnicas e a curiosidade por novas áreas,
            como dados, mobile e inteligência artificial.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projetosPessoais.map((project) => (
            <ProjectCard key={project.id} project={project} kind="personal" />
          ))}
        </div>
      </div>
    </section>
  );
}
