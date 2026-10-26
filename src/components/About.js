import React from "react";
import { FaCode, FaClipboardCheck, FaQuoteLeft, FaGraduationCap, FaBullseye } from "react-icons/fa";
import { profile } from "../data/profile";
import useReveal from "../hooks/useReveal";

const iconMap = { FaCode, FaClipboardCheck };

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="sobre" className="relative py-16 sm:py-20">
      <div ref={ref} className={`container-page reveal ${visible ? "is-visible" : ""}`}>
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">Apresentação</span>
          <h2 className="section-heading mt-4">Um pouco sobre mim</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink sm:text-base">
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <figure className="glass mt-6 border-l-2 border-l-accent p-6">
              <FaQuoteLeft className="mb-3 text-accent-400" />
              <blockquote className="font-display text-lg italic text-ink">
                {profile.quote.text}
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted">— {profile.quote.author}</figcaption>
            </figure>
          </div>

          <div className="space-y-5">
            <article className="card-surface p-6">
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
                <FaGraduationCap className="text-accent-400" /> Objetivos acadêmicos
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{profile.objectives.academic}</p>
            </article>
            <article className="card-surface p-6">
              <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
                <FaBullseye className="text-accent-400" /> Objetivos profissionais
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{profile.objectives.professional}</p>
            </article>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 font-display text-2xl font-semibold text-ink">Áreas de interesse</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            {profile.interests.map((interest) => {
              const Icon = iconMap[interest.icon] || FaCode;
              return (
                <div key={interest.title} className="card-surface group p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-accent-soft p-3 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-semibold text-ink">{interest.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
