import {
  ArrowRight,
  ChevronRight,
  Mail,
  Menu,
  ShieldCheck,
  Workflow,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import atlasLockup from '@/assets/atlas-lockup.svg';
import atlasMarkLight from '@/assets/atlas-mark-light.svg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const navItems = [
  { label: 'Especialidades', href: '#capabilities' },
  { label: 'Cases', href: '#projects' },
  { label: 'Metodo', href: '#architecture' },
  { label: 'Contato', href: '#cta' },
];

const tickerItems = [
  'Posicionamento premium',
  'Cases orientados a resultado',
  'Prova social e autoridade',
  'UX clara para negocio',
  'Automacao com impacto real',
  'CTA com foco em conversao',
];

const capabilities = [
  {
    id: '01',
    title: 'Posicionamento que parece empresa de verdade',
    text: 'Hero com proposta de valor objetiva, linguagem de negocio e oferta clara para voce ser percebido como especialista, nao como freelancer improvisado.',
    tags: ['posicionamento', 'mensagem', 'oferta'],
  },
  {
    id: '02',
    title: 'Arquitetura de confianca',
    text: 'Narrativa completa com prova social, stacks, metodo e CTA recorrente para reduzir duvida e aumentar confianca em cada bloco da pagina.',
    tags: ['prova social', 'credibilidade', 'estrutura'],
  },
  {
    id: '03',
    title: 'Cases com maturidade comercial',
    text: 'Projetos deixam de ser so vitrine visual e passam a mostrar contexto, decisao tecnica e resultado mensuravel para o cliente.',
    tags: ['cases', 'resultado', 'decisoes'],
  },
  {
    id: '04',
    title: 'Estetica premium com leitura humana',
    text: 'Visual escuro e sofisticado, tipografia refinada e blocos escaneaveis para manter impacto sem sacrificar clareza.',
    tags: ['direcao de arte', 'ux writing', 'conversao'],
  },
];

const projects = [
  {
    id: 'CASE_001',
    title: 'Site institucional de autoridade',
    accent: 'B2B',
    description:
      'Reposicionamento completo do hero, servicos e prova social para transformar primeira impressao em reuniao qualificada.',
    tech: ['proposta de valor', 'prova social', 'cta recorrente'],
  },
  {
    id: 'CASE_002',
    title: 'Produto SaaS com narrativa de valor',
    accent: 'SaaS',
    description:
      'Estrutura inspirada em produto maduro: problema, modulo, ganho esperado, integracoes e evidencias de resultado.',
    tech: ['modulos', 'metricas', 'integracoes'],
  },
  {
    id: 'CASE_003',
    title: 'Portfolio tecnico com linguagem de negocio',
    accent: 'Senior',
    description:
      'As skills tecnicas continuam fortes, mas passam a ser apresentadas em formato que decisores entendem em menos de 30 segundos.',
    tech: ['stack contextualizada', 'impacto', 'clareza'],
  },
];

const processSteps = [
  {
    name: 'Posicionamento',
    desc: 'Definimos ICP, proposta de valor e tom de autoridade para a pagina comunicar maturidade desde o primeiro bloco.',
  },
  {
    name: 'Arquitetura',
    desc: 'Construimos a ordem das secoes com foco em decisao: oferta, prova, metodo, cases e chamada comercial.',
  },
  {
    name: 'Execucao',
    desc: 'Aplicamos direcao de arte premium, copy escaneavel e componentes com hierarquia clara em desktop e mobile.',
  },
  {
    name: 'Otimizacao',
    desc: 'Refinamos CTA, microcopy e blocos de confianca para aumentar conversao sem perder personalidade.',
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const capabilitiesRef = useIntersectionObserver();
  const projectsRef = useIntersectionObserver();
  const processRef = useIntersectionObserver();

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" className="flex items-center gap-3 text-white">
            <img src={atlasMarkLight} alt="Atlas Nexium Core" className="h-10 w-10 object-contain" />
            <div className="hidden sm:block">
              <p className="font-mono-ui text-[0.72rem] uppercase tracking-[0.34em] text-white/90">
                Atlas Nexium Core
              </p>
              <p className="text-[0.6rem] uppercase tracking-[0.45em] text-white/35">
                Saas Development
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono-ui text-[0.7rem] uppercase tracking-[0.24em] text-white/58 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden bg-primary px-5 py-2.5 font-mono-ui text-[0.7rem] uppercase tracking-[0.22em] text-white transition hover:bg-primary/90 md:inline-flex"
            >
              Iniciar conversa
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white md:hidden"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white/70"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/8 px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
        >
          <div className="atlas-grid" />
          <div className="hero-ambient hero-ambient-left" />
          <div className="hero-ambient hero-ambient-right" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 font-mono-ui text-[0.66rem] uppercase tracking-[0.34em] text-primary">
                <span className="h-px w-10 bg-primary" />
                portfolio reposicionado com padrao de estudio senior
              </div>

              <h1 className="font-display text-5xl uppercase leading-[0.94] text-white sm:text-6xl lg:text-[5.2rem]">
                Menos cara de teste, mais cara de empresa premium.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                Seu portfolio agora combina impacto visual, clareza comercial e narrativa de
                confianca. A pessoa entende o que voce resolve, como entrega e por que pode
                confiar em voce antes mesmo de chegar no fim da pagina.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white transition hover:bg-primary/90"
                >
                  ver os cases
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center border border-white/12 bg-white/5 px-6 py-3 font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
                >
                  explorar detalhes
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <HeroMetric value="+Autoridade" label="mensagem objetiva e posicionamento forte" />
                <HeroMetric value="+Confianca" label="provas, metodo e linguagem de negocio" />
                <HeroMetric value="+Conversao" label="cta estrategico em pontos criticos" />
              </div>
            </div>

            <div className="relative">
              <div className="border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 sm:p-6">
                <div className="border border-white/8 bg-[#080808] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono-ui text-[0.62rem] uppercase tracking-[0.32em] text-white/38">
                        estrutura de alta conversao
                      </p>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
                        Referencias de estudio criativo e SaaS B2B aplicadas no seu portfolio de
                        forma direta e sem perder identidade.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-mono-ui text-[0.62rem] uppercase tracking-[0.22em] text-primary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      ativo
                    </span>
                  </div>

                  <div className="mt-8 border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_48%),#050505] p-6 sm:p-8">
                    <img
                      src={atlasLockup}
                      alt="Atlas Nexium Core"
                      className="mx-auto w-full max-w-2xl object-contain"
                    />
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <InsightCard
                      icon={ShieldCheck}
                      title="Confianca imediata"
                      text="Oferta, prova e metodo aparecem cedo para reduzir friccao."
                    />
                    <InsightCard
                      icon={Workflow}
                      title="Jornada guiada"
                      text="Cada secao prepara a proxima ate o contato final."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker-bar">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <section
          id="capabilities"
          ref={capabilitiesRef.elementRef}
          className={`section-fade-in border-t border-white/8 bg-[#0b0b0b] px-5 py-20 sm:px-8 ${capabilitiesRef.hasBeenVisible ? 'visible' : ''}`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono-ui text-[0.66rem] uppercase tracking-[0.34em] text-primary">
                especialidades
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                Os pilares que deixam seu portfolio mais maduro.
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-primary shadow-[0_0_18px_rgba(255,0,0,0.25)]" />
              <p className="mt-6 text-base leading-8 text-white/62">
                O objetivo aqui e simples: manter seu DNA visual e elevar percepcao de valor com
                estrutura, argumento e acabamento de produto serio.
              </p>
            </div>

            <div className="grid gap-px bg-white/8 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <article
                  key={item.id}
                  className={`animate-fade-in-up stagger-${Math.min(index, 5)} capability-card bg-[#111111] p-8`}
                >
                  <p className="font-mono-ui text-[0.62rem] uppercase tracking-[0.28em] text-primary/70">
                    {item.id}
                  </p>
                  <h3 className="mt-6 font-display text-2xl uppercase text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/8 px-3 py-1 font-mono-ui text-[0.62rem] uppercase tracking-[0.18em] text-white/42"
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

        <section
          id="projects"
          ref={projectsRef.elementRef}
          className={`section-fade-in px-5 py-20 sm:px-8 ${projectsRef.hasBeenVisible ? 'visible' : ''}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="font-mono-ui text-[0.66rem] uppercase tracking-[0.34em] text-primary">
                  cases
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                  Exemplos de narrativa aplicada no seu portfolio.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/62">
                Cada case foi desenhado para mostrar contexto, decisao e impacto. Isso muda sua
                percepcao de "fazedor" para "parceiro estrategico".
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-white/8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`animate-fade-in-up stagger-${Math.min(index, 5)} project-card bg-[#0d0d0d]`}
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between gap-4 font-mono-ui text-[0.62rem] uppercase tracking-[0.24em] text-white/40">
                      <span>{project.id}</span>
                      <span className="inline-flex items-center gap-2 text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                        {project.accent}
                      </span>
                    </div>

                    <h3 className="mt-8 font-display text-[2rem] uppercase leading-none text-white">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-white/62">{project.description}</p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="border border-primary/20 bg-primary/[0.05] px-3 py-1 font-mono-ui text-[0.62rem] uppercase tracking-[0.18em] text-primary/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 font-mono-ui text-[0.66rem] uppercase tracking-[0.2em] text-white/56">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      leitura orientada a negocio
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="architecture"
          ref={processRef.elementRef}
          className={`section-fade-in border-y border-white/8 bg-[#0b0b0b] px-5 py-20 sm:px-8 ${processRef.hasBeenVisible ? 'visible' : ''}`}
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono-ui text-[0.66rem] uppercase tracking-[0.34em] text-primary">
                metodo
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                Como transformamos visual em percepcao de valor.
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-primary" />
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
                O processo combina estrategia de comunicacao, direcao visual e clareza tecnica.
                Resultado: portfolio elegante, confiante e pronto para vender projetos maiores.
              </p>

              <div className="mt-10 border border-white/8 bg-[#101010] p-7">
                <img
                  src={atlasMarkLight}
                  alt="Simbolo Atlas Nexium Core"
                  className="h-16 w-16 object-contain"
                />
                <p className="mt-5 text-sm leading-7 text-white/60">
                  Sua identidade continua protagonista, mas agora sustentada por uma estrutura de
                  negocio que gera reunioes e oportunidades.
                </p>
              </div>
            </div>

            <div className="space-y-0 border border-white/8 bg-[#101010]">
              {processSteps.map((step, index) => (
                <div
                  key={step.name}
                  className={`animate-fade-in-up stagger-${Math.min(index, 5)} flex gap-5 border-b border-white/8 p-7 last:border-b-0`}
                >
                  <div className="flex w-12 flex-shrink-0 flex-col items-center">
                    <div className="flex h-11 w-11 items-center justify-center border border-primary/40 bg-primary/[0.05] font-mono-ui text-xs uppercase tracking-[0.18em] text-primary">
                      0{index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="mt-3 h-full w-px bg-[linear-gradient(to_bottom,rgba(255,0,0,0.32),transparent)]" />
                    )}
                  </div>

                  <div className="pb-4">
                    <h3 className="font-display text-2xl uppercase text-white">{step.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="relative overflow-hidden px-5 py-24 text-center sm:px-8">
          <div className="cta-radial" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="font-mono-ui text-[0.66rem] uppercase tracking-[0.34em] text-primary">
              pronto para subir o nivel do portfolio
            </p>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              Transforme visitas em
              <span className="block text-white/18">projetos de maior valor</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              Aplicamos tecnicas de estudios criativos e produtos SaaS: narrativa clara, prova de
              maturidade e chamada para acao em todos os pontos decisivos.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contato@atlasnexiumcore.com"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white transition hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                contato@atlasnexiumcore.com
              </a>
              <a
                href="#hero"
                className="inline-flex items-center justify-center border border-white/12 bg-white/5 px-6 py-3 font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white/82 transition hover:bg-white/8 hover:text-white"
              >
                voltar ao topo
              </a>
            </div>

            <div className="mt-14 flex items-center justify-center gap-4 text-left">
              <img src={atlasMarkLight} alt="Atlas Nexium Core" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-mono-ui text-[0.72rem] uppercase tracking-[0.28em] text-white/84">
                  Atlas Nexium Core
                </p>
                <p className="text-sm text-white/42">Saas Development</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeroMetric({ value, label }) {
  return (
    <div className="border border-white/10 bg-white/[0.035] p-4">
      <p className="font-display text-2xl uppercase text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/56">{label}</p>
    </div>
  );
}

function InsightCard({ icon: Icon, title, text }) {
  return (
    <div className="border border-white/8 bg-white/[0.03] p-5">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="mt-4 font-display text-2xl uppercase text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
    </div>
  );
}
