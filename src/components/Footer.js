import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-800/60">
      <div className="container-page flex flex-col items-center gap-5 py-10 text-center">
        <a href="#inicio" className="font-display text-lg font-bold text-ink">
          Eduardo<span className="gradient-text"> Fontes</span>
        </a>
        <p className="max-w-md text-sm text-muted">
          Portfólio acadêmico — {profile.role}, Desenvolvimento de Software Multiplataforma · FATEC São José dos Campos.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent-400">
            <FaGithub size={20} />
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent-400">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profile.contact.email}`} aria-label="E-mail" className="text-muted hover:text-accent-400">
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
