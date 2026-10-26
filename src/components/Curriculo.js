import React from "react";
import { FaGraduationCap, FaCertificate, FaTrophy, FaIdBadge, FaCalendarAlt } from "react-icons/fa";
import { formacoes, certificacoes, eventos } from "../data/curriculo";
import useReveal from "../hooks/useReveal";

function TimelineItem({ icon: Icon, title, institution, period, description, credential }) {
  return (
    <div className="relative pl-12">
      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-accent-soft text-accent-400">
        <Icon size={16} />
      </span>
      <span className="absolute left-4 top-10 h-[calc(100%-2rem)] w-px bg-white/10" />
      <div className="pb-2">
        <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm font-medium text-accent-400">{institution}</p>
        <p className="mt-1 flex items-center gap-2 text-xs text-muted">
          <FaCalendarAlt /> {period}
        </p>
        {description && <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>}
        {credential && (
          <p className="mt-2 flex items-center gap-2 text-xs text-muted">
            <FaIdBadge /> Credencial: <span className="text-ink/80">{credential}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Curriculo() {
  const [ref, visible] = useReveal();

  return (
    <section id="curriculo" className="relative py-16 sm:py-20">
      <div ref={ref} className={`container-page reveal ${visible ? "is-visible" : ""}`}>
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Informações curriculares</span>
          <h2 className="section-heading mt-4">Formação & Certificações</h2>
          <p className="mt-3 text-muted">
            Trajetória acadêmica, certificações técnicas e demais informações relevantes ao curso.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-xl font-semibold text-ink">
              <FaGraduationCap className="text-accent-400" /> Formação
            </h3>
            <div className="space-y-8">
              {formacoes.map((item) => (
                <TimelineItem key={item.title} icon={FaGraduationCap} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-3 font-display text-xl font-semibold text-ink">
              <FaCertificate className="text-accent-400" /> Certificações
            </h3>
            {certificacoes.length > 0 ? (
              <div className="space-y-8">
                {certificacoes.map((item) => (
                  <TimelineItem key={item.title} icon={FaCertificate} {...item} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Nenhuma certificação cadastrada ainda.</p>
            )}

            {eventos.length > 0 && (
              <>
                <h3 className="mb-8 mt-12 flex items-center gap-3 font-display text-xl font-semibold text-ink">
                  <FaTrophy className="text-accent-400" /> Eventos & Publicações
                </h3>
                <div className="space-y-8">
                  {eventos.map((item) => (
                    <TimelineItem key={item.title} icon={FaTrophy} {...item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
