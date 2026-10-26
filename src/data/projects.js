// Projetos Acadêmicos (API)   roteiro 2.2.1
export const projetosAcademicos = [
  {
    id: "smartfarming",
    title: "Smart Farming",
    semester: "1º semestre",
    year: "2024",
    partner: "Grupo Inove (Manufatura Avançada)",
    role: "Scrum Master",
    image: "smartfarm.png",
    summary:
      "Site que integra os sensores da estufa e transforma os dados em dashboards e gráficos automáticos.",
    problem:
      "Os dados coletados pelos sensores da estufa eram tratados de forma manual, sem uma visão consolidada e sujeitos a erro, o que dificultava o acompanhamento e a tomada de decisão no cuidado com a plantação.",
    solution:
      "Desenvolvi, junto da equipe, um site que se integra aos sensores e realiza o tratamento dos dados de forma totalmente automática, com uma interface amigável e gráficos que tornam os indicadores fáceis de entender.",
    technologies: ["JavaScript", "Python", "Flask", "Pandas", "MySQL", "Docker", "Bootstrap", "HTML", "CSS"],
    contributions: [
      "Atuei como Scrum Master, coordenando sprints e facilitando a comunicação da equipe.",
      "Desenvolvi o back-end em Python, implementando APIs e a lógica de tratamento dos dados dos sensores.",
      "Criei todos os gráficos de visualização de dados do zero, em JavaScript puro (sem bibliotecas prontas).",
      "Implementei a containerização da aplicação com Docker.",
    ],
    hardSkills: ["JavaScript", "Python", "Docker", "MySQL"],
    softSkills: [
      { name: "Liderança (Servant Leadership)", description: "Conduzi dailies, plannings e retrospectivas, removendo impedimentos e mantendo o time focado nas metas de cada sprint." },
      { name: "Organização", description: "Equilibrei as responsabilidades de gestão com as entregas técnicas, mantendo o projeto em movimento." },
      { name: "Versatilidade técnica", description: "Transitei entre back-end, front-end, dados e infraestrutura para cobrir gaps da equipe." },
    ],
    github: "https://github.com/CyberScrums/Projeto-Smart-Farming",
  },
  {
    id: "prostock",
    title: "ProStock",
    semester: "2º semestre",
    year: "2024",
    partner: "Prof. Claudio Lima (FATEC)",
    role: "Dev Team",
    image: "prostock.png",
    summary:
      "Sistema web de gestão de estoque com movimentações, fornecedores, relatórios e alertas.",
    problem:
      "O controle de estoque era feito manualmente, gerando erros e inconsistências nos registros, e havia falta de centralização das informações de produtos, fornecedores e movimentações   o que prejudicava decisões de compra e planejamento.",
    solution:
      "Construímos um sistema web de controle de estoque com registro de produtos, entradas e saídas, cadastro de fornecedores, relatórios estratégicos e alertas automáticos de estoque mínimo e validade, aumentando a eficiência operacional e reduzindo erros manuais.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "JavaScript", "Figma", "Jira"],
    contributions: [
      "Desenvolvi a página de geração de relatórios, com filtros avançados e exportação de dados.",
      "Criei o sistema de histórico utilizando tabelas dinâmicas e responsivas.",
      "Implementei toda a interface de configuração de usuários, com gestão de permissões.",
      "Estabeleci a padronização completa da estilização do sistema (design system) e componentes reutilizáveis.",
      "Atuei tanto no front-end (React/TypeScript) quanto no back-end (Prisma/Node.js).",
    ],
    hardSkills: ["React", "TypeScript", "Node.js / Prisma", "UI/UX", "Design System"],
    softSkills: [
      { name: "Atenção aos detalhes", description: "A criação do design system exigiu cuidado com espaçamento, cores, tipografia e consistência entre todas as telas." },
      { name: "Protagonismo", description: "Tornei-me referência da equipe em front-end e UX, com a padronização que criei sendo adotada por todos." },
      { name: "Visão full stack", description: "Trabalhei além do front-end, entendendo a aplicação de ponta a ponta para criar soluções mais integradas." },
    ],
    github: "https://github.com/EquipeSkyfall/API_2Semestre",
  },
  {
    id: "nectopoint",
    title: "NectoPoint",
    semester: "3º semestre",
    year: "2025",
    partner: "Necto Systems",
    role: "Dev Team",
    image: "nectopoint.png",
    summary:
      "Sistema de ponto eletrônico com marcações, solicitações e fluxo de aprovação para gestores.",
    problem:
      "O registro de ponto era manual e sujeito a falhas, e a gestão de horas extras, férias e folgas ficava pulverizada, sem centralização   comprometendo a rastreabilidade das horas trabalhadas e a comunicação entre setores.",
    solution:
      "Desenvolvemos um sistema de gestão e controle de ponto eletrônico com registro de marcações, cálculo de horas extras, solicitações de férias/folgas/abonos e um fluxo de aprovação para gestores, com relatórios e alertas de conformidade trabalhista.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "Prisma", "Figma", "Jira"],
    contributions: [
      "Desenvolvi as interfaces utilizando React e TypeScript.",
      "Criei o sistema de solicitações   férias, folgas, abonos e ajustes de ponto.",
      "Implementei o sistema de aprovação de solicitações voltado para gestores.",
      "Projetei barras de navegação personalizadas para diferentes perfis de usuário.",
      "Realizei a integração com a API REST construída em Java pela equipe de back-end.",
    ],
    hardSkills: ["React", "TypeScript", "Integração com API REST", "Java / Spring Boot"],
    softSkills: [
      { name: "Proatividade", description: "Evoluí bastante ao longo das sprints: do início mais lento para uma postura claramente mais ativa nas entregas críticas." },
      { name: "Comunicação", description: "Trabalhei a interação entre front-end e back-end, um ponto de melhoria coletivo do time ao longo do projeto." },
      { name: "Trabalho em equipe", description: "Mantive-me disponível para ajudar e pedir ajuda, adaptando-me à mudança de Scrum Master." },
    ],
    github: "https://github.com/Equipe-Skyfall/nectopoint",
  },
  {
    id: "skytrack",
    title: "SkyTrack",
    semester: "4º semestre",
    year: "2025",
    partner: "Tecsus",
    role: "Product Owner",
    image: "skytrack.png",
    summary:
      "Sistema de coleta de dados meteorológicos em tempo real, com dashboards, alertas e modelo dinâmico de estações.",
    problem:
      "O cliente não dispunha de dados meteorológicos em tempo real e tinha dificuldade em antecipar riscos como enchentes e deslizamentos. Além disso, estações e sensores seguiam padrões diferentes, dificultando a integração de múltiplas fontes em um único sistema.",
    solution:
      "Como Product Owner, ajudei a construir um sistema de coleta de dados meteorológicos em tempo real focado na prevenção de desastres, com modelo dinâmico para receber diferentes tipos de estações, dashboards interativos e um sistema de alertas automáticos baseado nas medições.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "MongoDB", "PostgreSQL", "Arduino", "Vercel"],
    contributions: [
      "Desenvolvi a arquitetura completa do sistema e o modelo de entidade e relacionamento do banco de dados.",
      "Implementei práticas de DevOps com foco em Requirement Tracking de ponta a ponta.",
      "Organizei o product backlog e os sprint backlogs para as 3 sprints de desenvolvimento.",
      "Criei o roadmap detalhado e priorizei o backlog para entregar um MVP de alto valor.",
      "Atuei como ponte entre o cliente (Tecsus) e a equipe de desenvolvimento.",
    ],
    hardSkills: ["Arquitetura de Software", "Modelagem de Dados", "Scrum / Gestão de Backlog", "DevOps"],
    softSkills: [
      { name: "Visão de produto", description: "Traduzi as necessidades da Tecsus em uma visão clara, priorizando funcionalidades por valor de negócio e impacto na prevenção de desastres." },
      { name: "Comunicação com stakeholders", description: "Mantive contato constante com o cliente para alinhar expectativas e eliminar ambiguidades." },
      { name: "Pensamento arquitetural", description: "Desenhei a arquitetura e o modelo de dados considerando escalabilidade, tempo real e integração com múltiplas fontes." },
    ],
    github: "https://github.com/Equipe-Skyfall/skytrack",
  },
  {
    id: "themis",
    title: "Themis",
    semester: "5º semestre",
    year: "2026",
    partner: "Xertica",
    role: "Dev Team",
    image: "themisbanner.png",
    summary:
      "Plataforma de análise jurídica com IA que analisa petições e identifica precedentes relevantes.",
    problem:
      "Havia um grande volume de decisões judiciais dispersas entre diversos tribunais, o que tornava lento e incerto encontrar precedentes realmente relevantes para um caso   exigindo a leitura de decisões completas e sem qualquer análise automática de similaridade.",
    solution:
      "Construímos uma plataforma inteligente de análise jurídica em nuvem que usa aprendizado de máquina e processamento de linguagem natural para analisar petições, gerar um resumo do caso, consultar bases de precedentes e apresentar decisões aplicáveis com percentual de similaridade e classificação de aplicabilidade.",
    technologies: ["Flutter", "Python", "FastAPI", "MongoDB", "Figma", "Docker"],
    contributions: [
      "Atuei com alta influência tanto no back-end quanto no front-end da plataforma.",
      "Contribuí na construção da API REST com FastAPI.",
      "Integrei modelos de NLP para extração de informações jurídicas das petições.",
      "Desenvolvi o aplicativo mobile em Flutter.",
      "O fluxo permite enviar petições em PDF e receber automaticamente uma análise com precedentes classificados por aplicabilidade, resumos gerados por IA e minutas de petições e sentenças.",
      "Projeto desenvolvido em parceria com a Xertica, como API do 5º semestre do curso DSM na FATEC São José dos Campos.",
    ],
    hardSkills: ["Flutter", "Python / FastAPI", "MongoDB"],
    softSkills: [
      { name: "Trabalho em equipe", description: "Atuei em conjunto com a equipe em um projeto de alta complexidade, integrando app e back-end." },
      { name: "Aprendizado contínuo", description: "Mergulhei em um domínio novo (jurídico) e em novas tecnologias, como Flutter e PLN." },
      { name: "Organização", description: "Mantive as entregas alinhadas ao planejamento das sprints." },
    ],
    github: "https://github.com/Equipe-Skyfall/themis",
  },
  {
    id: "chatin",
    title: "Chatin",
    semester: "6º semestre",
    year: "2026",
    partner: "GSW",
    role: "Dev Team",
    image: "chatinbanner.png",
    summary:
      "Coach de estudos via chat com IA para o ENEM, com resumos, questionários e acompanhamento de progresso.",
    problem:
      "O estudante tinha dificuldade em identificar seu nível real de conhecimento, não sabia o que estudar a cada momento e não tinha acompanhamento contínuo da evolução nem feedback imediato   o que levava à perda de motivação.",
    solution:
      "Desenvolvemos o CHATin, um coach de estudos via chat com IA focado no ENEM: o estudante conversa livremente, o sistema reconhece matéria e tópico, gera resumos salvos numa biblioteca, cria e corrige questionários automaticamente, ajusta a dificuldade e recomenda o próximo passo, com gamificação (XP) e acompanhamento em tela de desempenho.",
    technologies: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Google Gemini", "Figma", "Vercel"],
    contributions: [
      "Desenvolvi grande parte do front-end em Next.js e Tailwind CSS   estrutura inicial do app, menu de navegação e o chat do CHATin (com suporte a KaTeX e preview de markdown na conversa).",
      "Implementei autenticação e segurança, com sessão em cookie HttpOnly, proteção de rotas e bloqueio de acesso indevido por URL.",
      "Construí as telas de administração para o CRUD de conteúdo (matérias, temas e módulos) e o chat do administrador.",
      "Implementei recursos do produto: biblioteca de resumos com exportação em PDF, quiz personalizado, gamificação (XP), seletor de módulo e o estado de indisponibilidade da IA.",
      "Cuidei de responsividade para telas pequenas, validações de formulário, acessibilidade e do fluxo de consentimento LGPD com as páginas legais.",
      "Atuei na revisão e integração de pull requests da equipe (trilhas de estudo, matéria didática, redesign, entre outros).",
    ],
    hardSkills: ["Next.js / React", "Tailwind CSS", "Python / FastAPI", "PostgreSQL"],
    softSkills: [
      { name: "Colaboração", description: "Trabalhei de forma próxima ao time em um produto com front e back fortemente integrados." },
      { name: "Foco no usuário", description: "Contribuí para uma experiência pensada no estudante, priorizando clareza e engajamento." },
      { name: "Adaptabilidade", description: "Lidei com tecnologias e requisitos que evoluíram ao longo das sprints." },
    ],
    github: "https://github.com/Equipe-Skyfall/chatin",
  },
];

// Projetos Pessoais   roteiro 2.2.3
export const projetosPessoais = [
  {
    id: "mljobtrend",
    title: "MLJobTrend",
    subtitle: "Análise do mercado de Machine Learning",
    summary:
      "Análise de um dataset de vagas de Machine Learning nos EUA, com gráficos que revelam tendências do mercado.",
    highlights: [
      "Análise exploratória de dados de vagas de Machine Learning nos Estados Unidos.",
      "Tratamento de dados com Python e Pandas e visualizações com Matplotlib.",
      "Gráficos comparando a evolução de Engenheiro de ML com áreas correlatas.",
      "Identificação das empresas que mais contratam e das tendências do período.",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Análise de Dados"],
    hardSkills: ["Python", "Pandas", "Matplotlib", "Análise de Dados"],
    github: "https://github.com/DuuhZero/Machine-Learning-Job-Trend",
  },
  {
    id: "fuelnavigator",
    title: "Fuel Navigator",
    subtitle: "App de gestão de consumo de combustível",
    summary:
      "Aplicativo Android para estimar consumo e gasto de combustível em rotas, com relatórios e suporte offline.",
    highlights: [
      "CRUD completo de usuários e veículos.",
      "Sistema de navegação com busca e salvamento de rotas (online e offline).",
      "Algoritmo de cálculo de consumo baseado em distância e características do veículo.",
      "Relatórios semanais/mensais com exportação e autenticação segura.",
    ],
    technologies: ["Android", "Java", "MongoDB", "React Native", "OpenRouteService API", "Material Design"],
    hardSkills: ["Android / Java", "React Native", "MongoDB", "Material Design"],
    github: "https://github.com/DuuhZero/Fuel-Navigator",
  },
  {
    id: "llmbusinessrules",
    title: "LLM Business Rules",
    subtitle: "Tradutor de regras de negócio para código",
    summary:
      "Agente com LLM que interpreta regras de negócio em linguagem natural e as converte em código Python.",
    highlights: [
      "Integração com Ollama (modelo Mistral) para geração de código.",
      "Interface de chat com Gradio para conversão de regras em funções Python.",
      "Prompt engineering com exemplos de domínios específicos (descontos, frete, impostos).",
      "Validação para garantir que o código gerado seja executável.",
    ],
    technologies: ["Python", "Ollama", "Mistral AI", "Gradio", "LLM", "NLP"],
    hardSkills: ["Python", "LLM / Prompt Engineering", "NLP", "Gradio"],
    github: "https://github.com/DuuhZero/llm-business-rules",
  },
];

// Habilidades técnicas gerais (stack)   seção de skills
export const techStack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Node.js",
  "FastAPI",
  "Spring Boot",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Flutter",
  "Git / GitHub",
  "Figma",
];
