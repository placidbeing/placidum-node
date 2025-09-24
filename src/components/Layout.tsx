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
    <div className="min-h-screen bg-background text-foreground">
      <header className="journal-entry">
        <div className="notebook-grid">
          <div className="marginalia">
            <span className="folio-number">Index</span>
          </div>
          <nav className="flex items-center justify-between py-8">
            <Link to="/" className="ink-underline">
              <h1 className="text-2xl font-garamond tracking-wide">
                Placidum
              </h1>
              <div className="marginalia mt-1">
                Observationes circa Impressionum Naturam
              </div>
            </Link>
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`ink-underline font-garamond text-sm lowercase tracking-wide ${
                    location.pathname === item.path 
                      ? "text-accent font-medium" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="marginalia text-right">
            <span className="folio-number">MMXXIV</span>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="journal-entry mt-24">
        <div className="notebook-grid">
          <div className="marginalia">
            <span className="folio-number">Contact</span>
          </div>
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="fragment">
                <h3>Correspondence</h3>
                <p className="marginalia">sacha@placidum.com</p>
              </div>
              <div className="fragment">
                <h3>Archives</h3>
                <p className="marginalia">Est. MMXXIV</p>
              </div>
              <div className="fragment">
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
        </div>
      </footer>
    </div>
  );
};

export default Layout;