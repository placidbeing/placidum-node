import { Link, useLocation } from "react-router-dom";
import placidumLogo from "@/assets/placidum-logo-white-transparent.png";
import placidumWordmark from "@/assets/placidum-wordmark.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "notes" },
    { path: "/corpus", label: "corpus" },
    { path: "/chronicles", label: "chronicles" },
    { path: "/principles", label: "principles" },
    { path: "/shcaa", label: "shcaa" },
  ];

  return (
    <div className="min-screen bg-background text-foreground">
      
      <header className="site-header">
        <div className="topline">
          <nav className="main-menu" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`ink-underline font-garamond lowercase tracking-wide transition-colors ${
                  location.pathname === item.path 
                    ? "active" 
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-year">MMXXVI</div>
        </div>

        <div className="logo-block">
          <Link to="/" className="ink-underline inline-block">
            <div className="flex items-stretch -gap-1">
              <img src={placidumLogo} alt="Placidum Logo" className="h-[54px] md:h-[67px] lg:h-[83px] w-auto brightness-[1.2] opacity-70 -mr-2" />
              <div className="flex flex-col justify-end gap-0 pb-1">
                <img src={placidumWordmark} alt="PLACIDUM" className="h-[var(--logo-size)] w-auto" />
                <div className="logo-motto font-garamond leading-none -mt-1">
                  <em>Vestigia Sonora, Memoriae Latentes</em>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="safe-area wrap stack mt-24">
        <div className="marginalia">
          <span className="folio-number text-2xl">Details</span>
        </div>
        <div className="py-12">
          <div className="grid cols-3 gap-8">
            <div>
              <h3 className="text-xl">Correspondence</h3>
              <p className="marginalia text-ultramarine">sacha@placidum.com</p>
              <Link to="/shcaa" className="inline-block mt-3 text-sm font-garamond tracking-wide text-iron-oxide hover:opacity-80 transition-opacity">
                Shcaa
              </Link>
            </div>
            <div>
              <h3 className="text-xl">Archives</h3>
              <p className="marginalia text-ultramarine">Est. MMXXVI</p>
            </div>
            <div>
              <p className="marginalia text-ultramarine">© 2026 Placidum</p>
              <p className="marginalia mt-2 text-ultramarine">
                Impressions preserved for posterity
              </p>
            </div>
          </div>
        </div>
        <div className="marginalia">
          <span className="folio-number">Finis</span>
        </div>
        <div className="mt-16 pb-4 font-serif text-[10px] leading-relaxed text-muted-foreground/40">
          <p className="mb-1">Mentions légales</p>
          <p>Éditeur : Sacha Alexandre Khalifé</p>
          <p>Statut : SASU — Paris, France</p>
          <p>SIRET : 894 199 181 00021</p>
          <p>Contact : sacha@placidum.com</p>
          <p>Hébergement : GitHub, Inc. — San Francisco, CA, USA</p>
          <p>Directeur de la publication : Sacha Alexandre Khalifé</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;