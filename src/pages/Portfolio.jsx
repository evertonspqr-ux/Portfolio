import {
  ArrowRight,
  Check,
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
  { label: 'Capacidades', href: '#capabilities' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Processo', href: '#architecture' },
  { label: 'Contato', href: '#cta' },
];

const tickerItems = [
  'Sites institucionais',
  'Sistemas sob medida',
  'Automacao de processos',
  'Interfaces claras',
  'Marca aplicada com consistencia',
  'Experiencia premium',
];

const capabilities = [
  {
    id: '01',
    title: 'Presenca digital elegante',
    text: 'Paginas que transmitem credibilidade sem exagerar no tom tecnico, com mais clareza para quem esta conhecendo a marca.',
    tags: ['branding', 'site', 'copy'],
  },
  {
    id: '02',
    title: 'Experiencia mais intuitiva',
    text: 'Organizacao visual, respiro e hierarquia para guiar a leitura com naturalidade, sem cansar ou intimidar o visitante.',
    tags: ['ux', 'layout', 'mobile'],
  },
  {
    id: '03',
    title: 'Automacao com linguagem simples',
    text: 'A parte tecnica continua forte, mas apresentada de um jeito que o cliente entende o valor antes de se preocupar com jargoes.',
    tags: ['automacao', 'processos', 'valor'],
  },
  {
    id: '04',
    title: 'Identidade aplicada do jeito certo',
    text: 'Sua logo oficial passa a ser a protagonista, com encaixe real no site e coerencia visual com o restante da comunicacao.',
    tags: ['logo', 'consistencia', 'marca'],
  },
];

const projects = [
  {
    id: 'PRJ_001',
    title: 'Landing',
    accent: 'Premium',
    description:
      'Visual escuro, sofisticado e com mais refinamento tipografico, preservando a energia da marca sem parecer agressivo.',
    tech: ['Atlas lockup', 'CTA claro', 'hero em grid'],
  },
  {
    id: 'PRJ_002',
    title: 'Fluxo',
    accent: 'Clareza',
    description:
      'A estrutura ficou mais parecida com a proposta do Claude, mas com texto e ritmo visual mais acolhedores para publico nao tecnico.',
    tech: ['ticker', 'cards', 'sticky intro'],
  },
  {
    id: 'PRJ_003',
    title: 'Marca',
    accent: 'Oficial',
    description:
      'O simbolo improvisado saiu de cena. Agora o site usa seus arquivos reais e reforca a assinatura da Atlas Nexium Core.',
    tech: ['svg oficial', 'logo real', 'footer alinhado'],
  },
];

const processSteps = [
  {
    name: 'Diagnostico',
    desc: 'Entendemos a marca, o publico e qual impressao o site precisa causar nos primeiros segundos.',
  },
  {
    name: 'Composicao',
    desc: 'Misturamos o layout impactante do conceito original com tipografia mais refinada e leitura mais suave.',
  },
  {
    name: 'Ajuste fino',
    desc: 'Organizamos copy, contraste, blocos de informacao e chamadas para manter o site forte sem ficar hostil.',
  },
  {
    name: 'Entrega',
    desc: 'A pagina final conversa melhor com pessoas reais, sem perder a sofisticacao e a autoridade da sua marca.',
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
                fusao entre o conceito do claude e sua marca real
              </div>

              <h1 className="font-display text-5xl uppercase leading-[0.94] text-white sm:text-6xl lg:text-[5.2rem]">
                Visual forte, mas com leitura mais humana.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                Mantivemos a estrutura premium e o impacto visual do layout original, mas agora com
                a logo oficial da Atlas Nexium Core, tipografia mais equilibrada e uma experiencia
                menos agressiva para quem nao e programador.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 font-mono-ui text-[0.72rem] uppercase tracking-[0.24em] text-white transition hover:bg-primary/90"
                >
                  ver a fusao
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
                <HeroMetric value="Logo oficial" label="no lugar do simbolo improvisado" />
                <HeroMetric value="Tipografia nova" label="mais elegante e menos dura" />
                <HeroMetric value="Layout preservado" label="com a estrutura forte do conceito" />
              </div>
            </div>

            <div className="relative">
              <div className="border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 sm:p-6">
                <div className="border border-white/8 bg-[#080808] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono-ui text-[0.62rem] uppercase tracking-[0.32em] text-white/38">
                        identidade aplicada
                      </p>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/58">
                        Mesmo clima premium do conceito inicial, agora com mais refinamento e
                        aderencia a sua marca.
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
                      title="Mais confianca"
                      text="O visitante entende valor antes de sentir o peso tecnico."
                    />
                    <InsightCard
                      icon={Workflow}
                      title="Mais direcao"
                      text="A pagina conduz o olhar com mais fluidez e menos atrito."
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
                capacidades
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                O mesmo formato impactante, com outra sensacao.
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-primary shadow-[0_0_18px_rgba(255,0,0,0.25)]" />
              <p className="mt-6 text-base leading-8 text-white/62">
                Aqui entra a fusao: o esqueleto visual forte do Claude continua, mas com pesos,
                copy e ritmo que conversam melhor com publico geral.
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
                  projetos
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                  A pagina agora vende melhor a sofisticacao da marca.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/62">
                Em vez de parecer um painel tecnico agressivo, o site passou a comunicar
                clareza, estrutura e confianca. Ainda premium, ainda escuro, ainda marcante.
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
                      ajuste fino visual
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
                processo
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                Como essa fusao funciona.
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-primary" />
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
                A estrutura do Claude serviu como base de composicao. A partir dela, refinamos a
                marca, a leitura e o tom para chegar num resultado mais convincente.
              </p>

              <div className="mt-10 border border-white/8 bg-[#101010] p-7">
                <img
                  src={atlasMarkLight}
                  alt="Simbolo Atlas Nexium Core"
                  className="h-16 w-16 object-contain"
                />
                <p className="mt-5 text-sm leading-7 text-white/60">
                  O simbolo oficial volta a ocupar o centro da composicao, em vez de uma releitura
                  aproximada feita dentro do codigo.
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
              pronto para ajustar o resto
            </p>
            <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              Sua marca
              <span className="block text-white/18">mais forte, mais clara</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              O site agora junta o melhor dos dois lados: a estrutura premium e ousada do conceito
              inicial com uma apresentacao mais refinada, real e alinhada com a Atlas Nexium Core.
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
