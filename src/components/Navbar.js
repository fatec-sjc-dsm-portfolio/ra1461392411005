import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { profile } from "../data/profile";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#curriculo", label: "Currículo" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-night-900/80 py-3 backdrop-blur-xl" : "py-5"
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <a
          href="#inicio"
          onClick={handleClick}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Eduardo<span className="gradient-text"> Fontes</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                active === link.href ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-gradient" />
              )}
            </a>
          ))}

          <span className="mx-3 h-5 w-px bg-white/[0.15]" />

          <div className="flex items-center gap-1">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-muted transition-colors hover:text-accent-400"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-muted transition-colors hover:text-accent-400"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="E-mail"
              className="rounded-lg p-2 text-muted transition-colors hover:text-accent-400"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
          className="rounded-lg border border-white/10 p-2 text-ink md:hidden"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-white/10 bg-night-900/95 backdrop-blur-xl" : "max-h-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                active === link.href ? "bg-white/5 text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex justify-center gap-5 border-t border-white/10 pt-4">
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
        </div>
      </div>
    </header>
  );
}
