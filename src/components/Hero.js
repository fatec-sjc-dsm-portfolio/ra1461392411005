import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-500" />
            Disponível para oportunidades
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Olá, eu sou <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted">
            <span className="font-semibold text-ink">{profile.role}.</span> {profile.subheadline}
          </p>

          <div className="mt-7 flex flex-col gap-3 text-sm text-muted">
            <span className="flex items-start gap-3">
              <FaGraduationCap className="mt-0.5 shrink-0 text-accent-400" />
              {profile.formation}
            </span>
            <span className="flex items-center gap-3">
              <FaMapMarkerAlt className="shrink-0 text-accent-400" />
              {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              Ver projetos <FaArrowRight />
            </a>
            <a href="#contato" className="btn-ghost">
              Entrar em contato
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent-400">
              <FaGithub size={22} />
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent-400">
              <FaLinkedin size={22} />
            </a>
            <a href={`mailto:${profile.contact.email}`} aria-label="E-mail" className="text-muted transition-colors hover:text-accent-400">
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-fit animate-fade-up">
          <div className="absolute inset-0 rounded-[2rem] bg-accent-gradient opacity-40 blur-2xl" aria-hidden="true" />
          <img
            src={`${process.env.PUBLIC_URL}/${profile.photo}`}
            alt={profile.name}
            className="relative h-72 w-72 rounded-[2rem] object-cover sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]"
          />
        </div>
      </div>
    </section>
  );
}
