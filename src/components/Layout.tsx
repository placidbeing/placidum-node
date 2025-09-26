import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "notes" },
    { path: "/catalog", label: "corpus" },
    { path: "/chronicles", label: "speculations" },
    { path: "/shcaa", label: "principles" },
  ];

  return (
    <div className="min-screen bg-background text-foreground">
      
      <header className="site-header">
        <div className="topline">
          <div className="header-index">Index</div>
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
          <div className="header-year">MMXXIV</div>
        </div>

        <div className="logo-block">
          <Link to="/" className="ink-underline inline-block">
            <div className="logo-wordmark font-garamond tracking-wide">
              PLACIDUM
            </div>
          </Link>
          <div className="logo-motto font-garamond">
            <em>Observationes circa Impressionum Naturam</em>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="safe-area wrap stack journal-entry mt-24">
        <div className="marginalia">
          <span className="folio-number">Contact</span>
        </div>
        <div className="py-12">
          <div className="grid cols-3 gap-8">
            <div className="relative">
              <div className="contact-geometric-form correspondence-form"></div>
              <h3>Correspondence</h3>
              <p className="marginalia">sacha@placidum.com</p>
            </div>
            <div className="relative">
              <div className="contact-geometric-form archives-form"></div>
              <h3>Archives</h3>
              <p className="marginalia">Est. MMXXIV</p>
            </div>
            <div className="relative">
              <div className="contact-geometric-form copyrights-form"></div>
              <p className="marginalia">© 2024 Placidum</p>
              <p className="marginalia mt-2">
                Impressions preserved for posterity
              </p>
            </div>
          </div>
        </div>
        <div className="marginalia">
          <span className="folio-number">Finis</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;