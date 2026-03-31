import { useEffect, useState } from 'react';
import {
  ArrowDown,
  BookOpen,
  ChartColumn,
  CircleCheck,
  Cpu,
  Gift,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Shield,
  Sun,
  Target,
  Users,
  X,
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formacao', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
];

const atividades = [
  'Controle de entrada e saida de equipamentos e materiais',
  'Cadastro de crachas e controle de acessos',
  'Montagem e manutencao de computadores',
  'Suporte a servidores e impressoras',
  'Elaboracao de relatorios administrativos para assinatura',
  'Controle de estoque, inventario e conferencia fisico x sistema',
  'Atualizacao de planilhas e organizacao de dados',
];

const projetos = [
  {
    title: 'Controle de Estoque em Excel',
    description:
      'Sistema simples para controle de entrada, saida e inventario com organizacao de dados e reducao de erros.',
    tags: ['Excel', 'Organizacao', 'Controle'],
    icon: FileSpreadsheetIcon,
  },
  {
    title: 'Dashboard Power BI',
    description:
      'Visualizacao de dados financeiros e operacionais com graficos simples e analise basica de indicadores.',
    tags: ['Power BI', 'Dados', 'Analise'],
    icon: ChartColumn,
  },
  {
    title: 'Manutencao de Computadores',
    description:
      'Montagem, diagnostico e manutencao de hardware com otimizacao de desempenho e solucao de problemas.',
    tags: ['Hardware', 'Suporte', 'TI'],
    icon: Cpu,
  },
];

const formacaoAcademica = [
  {
    title: 'Tecnologo em Gestao Financeira',
    subtitle: 'Uninter',
    status: 'Cursando',
    highlighted: true,
  },
  {
    title: 'Ensino Medio',
    subtitle: 'Colegio Elite',
    status: 'Concluido em 2024',
  },
  {
    title: 'Tecnico em Administracao',
    subtitle: '1 ano cursado',
    status: 'Nao concluido',
  },
];

const cursosMilitares = [
  'Estagio de Educacao Financeira - SEF/IEFEx',
  'SPED 3.0 (Usuario/Administrador) - CITEx/CTA',
  'Administracao de Pessoal (Direitos Remuneratorios e Pagamento)',
  'Curso de Formacao de Soldados - 11o GAC',
  'Nivelamento Operacional T55/25 - Tactical Drill',
];

const cursosComplementares = [
  'Power BI',
  'Informatica (Excel, Word, PowerPoint)',
  'Gestao Empresarial',
  'Administracao e Financas Pessoais',
  'Design Thinking',
  'Inteligencia Artificial',
];

const habilidades = [
  { label: 'Pacote Office', value: 90 },
  { label: 'Organizacao e controle de dados', value: 95 },
  { label: 'Suporte tecnico', value: 85 },
  { label: 'Trabalho em equipe', value: 90 },
  { label: 'Disciplina e responsabilidade', value: 95 },
  { label: 'Facilidade de aprendizado', value: 90 },
];

const voluntariado = [
  {
    icon: Gift,
    text: 'Participacao em campanhas de doacao de alimentos, sangue e livros',
  },
  {
    icon: Users,
    text: 'Organizacao de acoes sociais e eventos beneficentes',
  },
  {
    icon: Heart,
    text: 'Desenvolvimento de lideranca e trabalho em equipe',
  },
];

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const sobreRef = useIntersectionObserver();
  const experienciaRef = useIntersectionObserver();
  const projetosRef = useIntersectionObserver();
  const formacaoRef = useIntersectionObserver();
  const voluntariadoRef = useIntersectionObserver();
  const habilidadesRef = useIntersectionObserver();
  const contatoRef = useIntersectionObserver();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    if (isDarkMode === null) {
      return;
    }

    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      setParallaxOffset(window.scrollY * 0.5);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'border-b border-border bg-background/92 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#hero" className="text-lg font-semibold tracking-tight">
              ESB
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDarkMode((currentTheme) => !currentTheme)}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-background/85 px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                <span className="hidden sm:inline">{isDarkMode ? 'Claro' : 'Escuro'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen((currentState) => !currentState)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="border-t border-border bg-background/95 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div 
            className="parallax-bg absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              transform: `translateY(${parallaxOffset * 0.3}px)`,
            }}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 text-center sm:px-6 lg:px-8">
            <p className="animate-fade-in-down mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio Profissional
            </p>
            <h1 className="animate-fade-in-up stagger-1 mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everton Da Silva Barbosa
            </h1>
            <p className="animate-fade-in-up stagger-2 mb-6 text-lg font-medium text-muted-foreground sm:text-xl">
              Administrativo | Financeiro | Tecnologia da Informacao
            </p>
            <p className="animate-fade-in-up stagger-3 mx-auto mb-10 max-w-2xl leading-relaxed text-muted-foreground">
              Experiencia pratica em ambiente militar, com foco em organizacao, controle de dados
              e suporte tecnico.
            </p>

            <div className="animate-fade-in-up stagger-4 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#projetos"
                className="hover-lift inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="hover-lift inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="h-4 w-4" />
                Contato
              </a>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <a href="#sobre" className="text-muted-foreground transition-colors hover:text-foreground">
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" ref={sobreRef.elementRef} className={`section-fade-in bg-secondary/30 py-24 ${sobreRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Sobre Mim</p>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Quem sou eu</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Profissional com experiencia no Exercito Brasileiro, atuando nas areas de
                informatica, administracao e almoxarifado. Possuo forte disciplina, organizacao e
                capacidade de adaptacao, com foco em controle de dados, suporte tecnico e rotinas
                administrativas. Atualmente em formacao na area financeira, buscando crescimento
                profissional e estabilidade.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={Shield}
                title="Disciplina"
                description="Formacao militar com foco em responsabilidade"
                delay={0}
              />
              <FeatureCard
                icon={Target}
                title="Organizacao"
                description="Controle rigoroso de processos e dados"
                delay={1}
              />
              <FeatureCard
                icon={Lightbulb}
                title="Adaptacao"
                description="Aprendizado rapido e versatilidade"
                delay={2}
              />
            </div>
          </div>
        </section>

        <section id="experiencia" ref={experienciaRef.elementRef} className={`section-fade-in py-24 ${experienciaRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Trajetoria</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Experiencia Profissional</h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="hover-lift rounded-xl border border-border bg-card p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1 shadow-sm">
                    <img
                      src="https://media.base44.com/images/public/69b9bef659ad1ac6a28ced70/b5eff8645_1cgcfex.png"
                      alt="1a CGCFEx"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Exercito Brasileiro - 1a CGCFEx</h3>
                    <p className="font-medium text-primary">Militar Temporario</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Informatica, Administracao e Almoxarifado
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Principais Atividades
                  </h4>
                  <ul className="space-y-3">
                    {atividades.map((item, index) => (
                      <li key={item} className={`animate-fade-in-up stagger-${index} flex items-start gap-3`}>
                        <CircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" ref={projetosRef.elementRef} className={`section-fade-in bg-secondary/30 py-24 ${projetosRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Portfolio</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Projetos</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {projetos.map((project, index) => (
                <article
                  key={project.title}
                  className={`animate-fade-in-scale stagger-${index} hover-lift group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" ref={formacaoRef.elementRef} className={`section-fade-in py-24 ${formacaoRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Qualificacoes
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Formacao & Cursos</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="hover-lift animate-fade-in-up stagger-0 rounded-xl border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Formacao Academica</h3>
                </div>

                <div className="space-y-4">
                  {formacaoAcademica.map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-lg p-3 ${
                        item.highlighted
                          ? 'border border-primary/20 bg-primary/5'
                          : 'bg-secondary/50'
                      }`}
                    >
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                      <span
                        className={`text-xs ${
                          item.highlighted ? 'font-medium text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hover-lift animate-fade-in-up stagger-1 rounded-xl border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white p-0.5">
                    <img
                      src="https://media.base44.com/images/public/69b9bef659ad1ac6a28ced70/c8774ca30_Coat_of_arms_of_the_Brazilian_Armysvg.png"
                      alt="Exercito Brasileiro"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Cursos Militares</h3>
                </div>

                <ul className="space-y-2">
                  {cursosMilitares.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hover-lift animate-fade-in-up stagger-2 rounded-xl border border-border bg-card p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Cursos Complementares</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cursosComplementares.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={voluntariadoRef.elementRef} className={`section-fade-in bg-secondary/30 py-24 ${voluntariadoRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                  Voluntariado
                </p>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Atividades Filantropicas</h2>
                <div className="mb-4 flex justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center animate-fade-in-scale">
                    <img
                      src="https://media.base44.com/images/public/69b9bef659ad1ac6a28ced70/e91d42f9e_Brasaoatual.jpg"
                      alt="Ordem DeMolay"
                      className="h-24 w-24 object-contain"
                    />
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, transparent 50%, rgb(243, 244, 246) 80%)',
                      }}
                    />
                  </div>
                </div>
                <p className="font-medium text-muted-foreground">Membro da Ordem DeMolay</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {voluntariado.map((item, index) => (
                  <div
                    key={item.text}
                    className={`animate-fade-in-up stagger-${index} hover-lift rounded-xl border border-border bg-card p-5 text-center`}
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={habilidadesRef.elementRef} className={`section-fade-in py-24 ${habilidadesRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Competencias
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">Habilidades</h2>
            </div>

            <div className="mx-auto grid max-w-2xl gap-6">
              {habilidades.map((skill, index) => (
                <div key={skill.label} className={`animate-fade-in-up stagger-${Math.min(index, 5)}`}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.label}</span>
                    <span className="text-xs text-muted-foreground">{skill.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-1000"
                      style={{ width: habilidadesRef.hasBeenVisible ? `${skill.value}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" ref={contatoRef.elementRef} className={`section-fade-in bg-secondary/30 py-24 ${contatoRef.hasBeenVisible ? 'visible' : ''}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Vamos Conversar
              </p>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Entre em Contato</h2>
              <p className="mx-auto max-w-md text-muted-foreground">
                Estou disponivel para novas oportunidades profissionais. Entre em contato para
                conversarmos.
              </p>
            </div>

            <div className="mx-auto max-w-lg">
              <div className="hover-lift animate-fade-in-scale rounded-xl border border-border bg-card p-8">
                <div className="space-y-6">
                  <ContactLink
                    href="mailto:evertonspqr@gmail.com"
                    icon={Mail}
                    label="Email"
                    value="evertonspqr@gmail.com"
                  />
                  <ContactLink
                    href="tel:+5521977048314"
                    icon={Phone}
                    label="Telefone"
                    value="(21) 97704-8314"
                  />
                  <div className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Localizacao
                      </p>
                      <p className="font-medium">Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <a
                    href="mailto:evertonspqr@gmail.com"
                    className="hover-lift inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Enviar Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              (c) 2026 Everton Da Silva Barbosa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:evertonspqr@gmail.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
              <a
                href="tel:+5521977048314"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Telefone
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <div className={`animate-fade-in-up stagger-${delay} hover-lift rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-lg bg-secondary/50 p-4 transition-colors hover:bg-secondary"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
}

function FileSpreadsheetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  );
}
