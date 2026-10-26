import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, visible] = useReveal();

  const links = [
    { icon: FaGithub, label: "GitHub", value: "@DuuhZero", href: profile.contact.github },
    { icon: FaLinkedin, label: "LinkedIn", value: "in/eduardo-da-silva-fontes", href: profile.contact.linkedin },
    { icon: FaEnvelope, label: "E-mail", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  ];

  return (
    <section id="contato" className="relative py-16 sm:py-20">
      <div ref={ref} className={`container-page reveal ${visible ? "is-visible" : ""}`}>
        <div className="card-surface overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Contato</span>
              <h2 className="section-heading mt-4">Vamos conversar</h2>
              <p className="mt-4 max-w-lg text-muted">
                Estou aberto a oportunidades de estágio e desenvolvimento, além de colaborações em
                projetos. Fique à vontade para entrar em contato pelas redes ou por e-mail.
              </p>
              <a href={`mailto:${profile.contact.email}`} className="btn-primary mt-7">
                <FaPaperPlane /> Enviar e-mail
              </a>
            </div>

            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent-400 transition-transform duration-300 group-hover:scale-110">
                    <link.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-muted">{link.label}</span>
                    <span className="block truncate text-sm font-medium text-ink">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
