import React, { useState } from "react";
import {
  FaGithub,
  FaChevronDown,
  FaBuilding,
  FaUserTag,
  FaCalendarAlt,
  FaLightbulb,
  FaCheckCircle,
  FaTools,
  FaHeart,
} from "react-icons/fa";
import useReveal from "../hooks/useReveal";

function HardSkills({ skills }) {
  return (
    <div>
      <h4 className="mb-4 flex items-center gap-2 font-semibold text-ink">
        <FaTools className="text-accent-400" /> Conhecimentos técnicos (hard skills)
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function SoftSkills({ skills }) {
  return (
    <div>
      <h4 className="mb-4 flex items-center gap-2 font-semibold text-ink">
        <FaHeart className="text-accent-400" /> Habilidades pessoais e sociais (soft skills)
      </h4>
      <div className="grid gap-3 md:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent p-4">
            <h5 className="text-sm font-semibold text-accent-400">{skill.name}</h5>
            <p className="mt-1 text-sm leading-relaxed text-muted">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, kind }) {
  const [open, setOpen] = useState(false);
  const [ref, visible] = useReveal();
  const isAcademic = kind === "academic";

  return (
    <article ref={ref} className={`reveal ${visible ? "is-visible" : ""} card-surface overflow-hidden`}>
      <div className="flex flex-col md:flex-row">
        <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-56 lg:w-72">
          {project.image ? (
            <img
              src={`${process.env.PUBLIC_URL}/${project.image}`}
              alt={project.title}
              className="h-full w-full object-cover opacity-85"
            />
          ) : (
            <div className="flex h-full min-h-[12rem] w-full items-center justify-center bg-accent-soft">
              <span className="font-display text-5xl font-bold text-white/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-night-700/80 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {isAcademic ? (
            <div className="flex flex-wrap gap-2">
              <span className="chip">
                <FaCalendarAlt className="mr-1.5 text-accent-400" /> {project.semester} · {project.year}
              </span>
              <span className="chip">
                <FaBuilding className="mr-1.5 text-accent-400" /> {project.partner}
              </span>
              <span className="chip">
                <FaUserTag className="mr-1.5 text-accent-400" /> {project.role}
              </span>
            </div>
          ) : (
            <p className="text-sm font-medium uppercase tracking-wider text-accent-400">
              {project.subtitle}
            </p>
          )}

          <h3 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="btn-ghost !py-2.5 !text-xs"
              aria-expanded={open}
            >
              {open ? "Mostrar menos" : isAcademic ? "Detalhes do projeto" : "Ver mais"}
              <FaChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !text-xs"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div className="space-y-7 border-t border-white/10 bg-white/[0.02] p-6 sm:p-7">
          {isAcademic ? (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                    <FaLightbulb className="text-accent-400" /> Problema
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                    <FaCheckCircle className="text-accent-400" /> Solução desenvolvida
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
                </div>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                  <FaUserTag className="text-accent-400" /> Minhas contribuições
                </h4>
                <ul className="grid gap-2 md:grid-cols-2">
                  {project.contributions.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                <FaLightbulb className="text-accent-400" /> Destaques
              </h4>
              <ul className="grid gap-2 md:grid-cols-2">
                {project.highlights.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <HardSkills skills={project.hardSkills} />
          {project.softSkills && <SoftSkills skills={project.softSkills} />}
        </div>
      )}
    </article>
  );
}
