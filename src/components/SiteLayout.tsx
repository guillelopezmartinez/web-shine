import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.svg.asset.json";
import { Button } from "@/components/ui/button";

const nav = [["Empresa", "/empresa"], ["Servicios", "/servicios"], ["Proyectos", "/proyectos"], ["Publicaciones", "/publicaciones"], ["Contacto", "/contacto"]] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen overflow-hidden bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="liquid-glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-[1.25rem] px-4 sm:px-6">
        <Link to="/" aria-label="Voltae, inicio"><img src={logo.url} alt="Voltae Engineering" className="h-8 w-auto" /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">{nav.map(([label,to]) => <Link key={to} to={to} className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">{label}</Link>)}</nav>
        <Button asChild variant="hero" className="hidden rounded-full sm:inline-flex"><Link to="/contacto">Hablar con un experto <ArrowUpRight /></Link></Button>
        <Button variant="glass" size="icon" className="rounded-full lg:hidden" aria-label="Abrir menú"><Menu /></Button>
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-deep px-6 py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div><img src={logo.url} alt="Voltae Engineering" className="h-9 w-auto brightness-0 invert"/><p className="mt-5 max-w-md text-sm text-primary-foreground/65">Ingeniería y consultoría especializada en energía y agua. Presencia en España, México, Colombia, Chile e Italia.</p></div>
        <div className="flex flex-wrap gap-5 text-sm text-primary-foreground/70"><Link to="/empresa">Empresa</Link><Link to="/servicios">Servicios</Link><Link to="/proyectos">Proyectos</Link><Link to="/contacto">Contacto</Link></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45"><span>© 2026 Voltae Engineering</span><span>Privacidad · Cookies · Aviso legal · Código ético</span></div>
    </footer>
  </div>;
}