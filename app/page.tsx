import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  ExternalLink,
  FileJson,
  FolderGit2,
  GitBranch,
  Layers3,
  RefreshCw,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  LockKeyhole,
  GitPullRequest,
  Workflow,
} from "lucide-react";
import CopyButton from "@/components/copy-button";

const githubUrl = "https://github.com/PrathamRanka/RepoSync-SDK";
const features = [
  ["Repository discovery", "Find public repositories, or include private projects with a GitHub token.", FolderGit2],
  ["README intelligence", "Parse Markdown and GFM to extract introductions, technologies, features, demos, and images.", ScanSearch],
  ["Metadata precedence", "Combine GitHub metadata, README data, defaults, and explicit project overrides predictably.", Layers3],
  ["Quality analysis", "Preview missing fields with deterministic findings before generating portfolio data.", ShieldCheck],
  ["Multiple formats", "Generate JSON, TypeScript, YAML, or Markdown that fits your existing workflow.", FileJson],
  ["Incremental sync", "Track added, updated, unchanged, and removed projects without rewriting identical files.", RefreshCw],
  ["Scoped configuration", "Set global defaults, aliases, filters, concurrency, and per-project overrides.", Settings2],
  ["SDK and CLI", "Use the typed engine in an application or run the focused CLI commands from a terminal.", Code2],
] as const;

const codeExample = `import { RepoSync } from "@reposync/core";

const reposync = new RepoSync({
  username: "your-github-username",
  token: process.env.GITHUB_TOKEN,
  topics: ["portfolio"],
  filters: {
    topicMatch: "any",
    includeForks: false,
    includeArchived: false,
    minStars: 0,
  },
});

const projects = await reposync.discover();`;

function Logo() {
  return (
    <Link href="/" className="logo" aria-label="RepoSync home">
      <span className="logo-mark"><CircleDot size={17} strokeWidth={2.5} /></span>
      <span>RepoSync</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/docs">Documentation</Link>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a>
          <Link href="/roadmap">Roadmap</Link>
        </nav>
        <Link className="button button-small button-accent" href="/docs">Get started <ArrowRight size={14} /></Link>
      </div>
    </header>
  );
}

function TerminalCard() {
  return (
    <div className="terminal-card">
      <div className="terminal-top">
        <span className="terminal-dots"><i /><i /><i /></span>
        <span>reposync / workspace</span>
        <span className="terminal-status"><span /> ready</span>
      </div>
      <div className="terminal-body">
        <p><span className="prompt">$</span> pnpm exec reposync preview --json --quality</p>
        <p className="muted">Discovering repositories for <b>prathamranka</b>...</p>
        <p><span className="ok">✓</span> 12 repositories discovered <span className="dim">· 1.8s</span></p>
        <p><span className="ok">✓</span> README metadata extracted</p>
        <p><span className="ok">✓</span> quality report generated</p>
        <div className="terminal-rule" />
        <p className="terminal-output"><span className="accent">projects</span> 12 <span className="dim">·</span> <span className="accent">complete</span> 9 <span className="dim">·</span> <span className="warning">needs attention</span> 3</p>
        <p className="terminal-cursor"><span className="prompt">$</span> pnpm exec reposync sync --format json<span className="cursor" /></p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Open source developer infrastructure</div>
            <h1>Your GitHub repositories.<br /><em>Structured, understood,</em><br />ready to use.</h1>
            <p className="hero-lede">RepoSync discovers your repositories, extracts project metadata, and generates structured data for your portfolio and developer applications.</p>
            <div className="hero-actions">
              <Link className="button button-accent" href="/docs">Get started <ArrowRight size={16} /></Link>
              <a className="button button-ghost" href={githubUrl} target="_blank" rel="noreferrer"><GitBranch size={16} /> View on GitHub</a>
            </div>
            <p className="hero-note"><Check size={14} /> MIT licensed <span /> Built for TypeScript</p>
          </div>
          <TerminalCard />
        </section>

        <section className="trust-bar border-top">
          <div className="container trust-inner"><span>One source of truth for your project data</span><span className="trust-line" /><span>TypeScript native</span><span className="trust-line" /><span>Framework independent</span><span className="trust-line" /><span>Built for automation</span></div>
        </section>

        <section className="section container" id="features">
          <div className="section-intro"><div><p className="kicker">What it does</p><h2>From repository sprawl<br /><span>to reliable project data.</span></h2></div><p>Stop copying the same project details between GitHub, your portfolio, and every new application. RepoSync makes the process repeatable.</p></div>
          <div className="flow">
            {[[GitBranch, "GitHub repositories"], [Sparkles, "RepoSync"], [FileJson, "Structured data"], [Workflow, "Your portfolio"]].map(([Icon, label], index) => {
              const FlowIcon = Icon as typeof GitBranch;
              return <div className="flow-step" key={label as string}><div className="flow-icon"><FlowIcon size={20} /></div><span>{label as string}</span>{index < 3 && <ChevronRight className="flow-arrow" size={16} />}</div>;
            })}
          </div>
        </section>

        <section className="section container feature-section">
          <div className="section-heading-row"><div><p className="kicker">Capabilities</p><h2>Everything you need.<br /><span>Nothing you don’t.</span></h2></div><p className="section-side-copy">Focused primitives for turning repositories into data you can trust.</p></div>
          <div className="feature-grid">{features.map(([title, description, Icon]) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={18} /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="section container split-section">
          <div><p className="kicker">The SDK</p><h2>Use it where<br /><span>your code lives.</span></h2><p className="body-copy">The core engine is framework-independent and typed from discovery to output. Add RepoSync to a build pipeline, a portfolio generator, or any Node.js application.</p><div className="mini-list"><div><Check size={15} /> Stable <code>Project[]</code> output</div><div><Check size={15} /> Tokens never enter project data</div><div><Check size={15} /> Specific, typed error contracts</div></div></div>
          <div className="code-card"><div className="code-header"><span><Code2 size={14} /> quick-start.ts</span><CopyButton text={codeExample} /></div><pre><code>{codeExample.split("\n").map((line, i) => <span key={i} className="code-line"><i>{String(i + 1).padStart(2, "0")}</i><span>{line}</span></span>)}</code></pre></div>
        </section>

        <section className="section container proof-section">
          <div className="section-heading-row"><div><p className="kicker">See the output</p><h2>From README prose<br /><span>to usable data.</span></h2></div><Link className="text-link" href="/examples">Explore examples <ArrowRight size={14} /></Link></div>
          <div className="before-after">
            <div className="example-pane"><div className="pane-label"><span>README.md</span><span className="pane-muted">authored content</span></div><p className="readme-title">RepoSync</p><p className="readme-copy">Turn GitHub repositories into portfolio-ready data. Discover projects, extract metadata, and keep your project list synchronized.</p><div className="readme-heading">## Features</div><div className="readme-list">- GitHub repository discovery<br />- README metadata extraction<br />- JSON and TypeScript output</div></div>
            <div className="example-divider"><ArrowRight size={17} /></div>
            <div className="example-pane output-pane"><div className="pane-label"><span>projects.json</span><span className="pane-muted">generated output</span></div><pre>{`{
  "title": "RepoSync",
  "description": "Turn GitHub repositories into
    portfolio-ready data.",
  "technologies": ["TypeScript", "Node.js"],
  "features": ["Repository discovery",
    "Metadata extraction"],
  "source": "github"
}`}</pre></div>
          </div>
        </section>

        <section className="section container trust-section">
          <div className="section-heading-row"><div><p className="kicker">Built for trust</p><h2>Transparent by<br /><span>default.</span></h2></div><p className="section-side-copy">The details that matter when project data touches your private repositories and production workflows.</p></div>
          <div className="trust-grid"><article><LockKeyhole size={19} /><h3>Your token stays private</h3><p>Tokens are used for GitHub access and never included in normalized project output. Keep them in environment variables.</p><a href={`${githubUrl}#error-handling`} target="_blank" rel="noreferrer">Read the security notes <ExternalLink size={13} /></a></article><article><GitPullRequest size={19} /><h3>Review before you sync</h3><p>Preview normalized projects and deterministic quality findings before writing generated files or committing changes.</p><Link href="/docs#cli">See the workflow <ArrowRight size={13} /></Link></article><article><ShieldCheck size={19} /><h3>Open implementation</h3><p>Read the source, inspect the error contracts, and verify exactly how discovery and output work.</p><a href={githubUrl} target="_blank" rel="noreferrer">Inspect the repository <ExternalLink size={13} /></a></article></div>
        </section>

        <section className="section container ecosystem-section">
          <div className="section-heading-row"><div><p className="kicker">The ecosystem</p><h2>Small packages.<br /><span>Clear boundaries.</span></h2></div><p className="section-side-copy">Use the engine directly, or bring the complete workflow to your terminal.</p></div>
          <div className="package-grid"><a className="package-card" href="https://www.npmjs.com/package/@reposync/core" target="_blank" rel="noreferrer"><div className="package-top"><span className="package-icon"><Boxes size={21} /></span><ExternalLink size={15} /></div><h3>@reposync/core</h3><p>The reusable TypeScript engine for discovery, extraction, normalization, quality, and output.</p><span className="package-link">View on npm <ArrowRight size={14} /></span></a><a className="package-card" href="https://www.npmjs.com/package/@reposync/cli" target="_blank" rel="noreferrer"><div className="package-top"><span className="package-icon"><Terminal size={21} /></span><ExternalLink size={15} /></div><h3>@reposync/cli</h3><p>A focused command-line interface for init, validate, preview, list, sync, and doctor.</p><span className="package-link">View on npm <ArrowRight size={14} /></span></a></div>
          <div className="verified-facts"><span><Check size={13} /> MIT licensed</span><span><Check size={13} /> Node.js 24+</span><span><Check size={13} /> Version 2.0.1</span><span><Check size={13} /> Framework independent</span></div>
        </section>

        <section className="section container open-source-section">
          <div className="open-source-card"><div className="open-source-icon"><GitBranch size={27} /></div><div><p className="kicker">Open source by default</p><h2>Build on the source.</h2><p>Read the implementation, report an issue, or help shape what comes next. RepoSync is MIT licensed and built in public.</p></div><div className="open-source-links"><a href={githubUrl} target="_blank" rel="noreferrer">Explore the repository <ArrowUpRightIcon /></a><a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer">Report an issue <ArrowUpRightIcon /></a></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ArrowUpRightIcon() { return <ExternalLink size={14} />; }

function Footer() {
  return <footer className="footer border-top"><div className="container footer-inner"><div><Logo /><p>GitHub repositories, understood.</p></div><div className="footer-links"><div><span>Explore</span><Link href="/docs">Documentation</Link><Link href="/roadmap">Roadmap</Link><Link href="/about">About</Link></div><div><span>Connect</span><a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a><a href="https://www.npmjs.com/package/@reposync/core" target="_blank" rel="noreferrer">npm packages</a><a href={`${githubUrl}/issues`} target="_blank" rel="noreferrer">Issues</a></div></div></div><div className="container footer-bottom"><span>© 2026 RepoSync</span><span>MIT License <span className="footer-separator">·</span> Open source software</span></div></footer>;
}
