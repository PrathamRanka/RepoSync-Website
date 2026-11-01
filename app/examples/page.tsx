/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ArrowRight, Check, CircleDot, ExternalLink, GitBranch } from "lucide-react";
import CopyButton from "@/components/copy-button";

const config = `import { defineConfig } from "@reposync/core";

export default defineConfig({
  username: "your-github-username",
  topics: ["portfolio"],
  filters: {
    includeForks: false,
    includeArchived: false,
  },
  output: {
    file: "projects.json",
    format: "json",
  },
});`;

export default function ExamplesPage() {
  return <><Header /><main><section className="inner-hero container"><p className="kicker">Examples</p><h1>See the data<br /><em>before you ship it.</em></h1><p>Real patterns from RepoSync's documented workflow, showing how configuration becomes stable project data.</p></section><section className="examples-list container"><article className="example-detail"><div><p className="kicker">01 / Configure</p><h2>Make your rules explicit.</h2><p>Use a typed configuration file for filters, aliases, defaults, concurrency, and output. Invalid values fail before discovery starts.</p></div><div className="code-card"><div className="code-header"><span>reposync.config.ts</span><CopyButton text={config} /></div><pre><code>{config}</code></pre></div></article><article className="example-detail"><div><p className="kicker">02 / Preview</p><h2>Inspect quality before writing.</h2><p>The quality preview reports missing configured fields and gives a remediation suggestion. It does not invent or overwrite metadata.</p></div><div className="example-result"><div className="result-header"><span>preview --json --quality</span><span className="result-ok"><Check size={13} /> deterministic</span></div><div><span className="result-key">"quality"</span>: {"{"}<br /><span className="result-indent">"score"</span>: <b>75</b>,<br /><span className="result-indent">"findings"</span>: [<br /><span className="result-indent result-indent-2">{"{"} "field": "demoUrl",</span><br /><span className="result-indent result-indent-2">"message": "Add a live demo URL" {"}"}</span><br /><span className="result-indent">]</span><br />{"}"}</div></div></article><article className="example-detail"><div><p className="kicker">03 / Sync</p><h2>Generate only what changed.</h2><p>Sync writes atomically, skips identical content, and tracks added, updated, unchanged, and removed repositories in versioned state.</p></div><div className="sync-result"><div><span className="sync-count green">+ 2</span><span>added</span></div><div><span className="sync-count blue">~ 1</span><span>updated</span></div><div><span className="sync-count gray">= 8</span><span>unchanged</span></div><div><span className="sync-count red">- 0</span><span>removed</span></div></div></article></section><section className="container examples-cta"><GitBranch size={19} /><div><h2>Want the complete source?</h2><p>Read the implementation and verified documentation on GitHub.</p></div><a href="https://github.com/PrathamRanka/RepoSync-SDK" target="_blank" rel="noreferrer">Open repository <ExternalLink size={14} /></a></section></main><Footer /></>;
}
function Header() { return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="logo"><span className="logo-mark"><CircleDot size={17} /></span> RepoSync</Link><nav className="desktop-nav"><Link href="/">Home</Link><Link href="/docs">Documentation</Link><Link href="/roadmap">Roadmap</Link><a href="https://github.com/PrathamRanka/RepoSync-SDK" target="_blank" rel="noreferrer"><GitBranch size={13} /> GitHub</a></nav><Link className="button button-small button-accent" href="/docs">Get started <ArrowRight size={14} /></Link></div></header>; }
function Footer() { return <footer className="footer border-top"><div className="container footer-inner"><div><Link href="/" className="logo"><span className="logo-mark"><CircleDot size={17} /></span> RepoSync</Link><p>GitHub repositories, understood.</p></div><div className="footer-links"><div><span>Explore</span><Link href="/docs">Documentation</Link><Link href="/examples">Examples</Link><Link href="/roadmap">Roadmap</Link></div><div><span>Connect</span><a href="https://github.com/PrathamRanka/RepoSync-SDK" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.npmjs.com/package/@reposync/core" target="_blank" rel="noreferrer">npm packages</a></div></div></div><div className="container footer-bottom"><span>© 2026 RepoSync</span><span>MIT License · Open source software</span></div></footer>; }
