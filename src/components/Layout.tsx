import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { path: "/", label: "notes" },
    { path: "/catalog", label: "corpus" },
    { path: "/chronicles", label: "speculations" },
    { path: "/shcaa", label: "principles" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-screen bg-background text-foreground">
      <header className="navbar safe-area journal-entry">
        <div className="wrap row between center">
          <Link to="/" className="ink-underline">
            <h1 className="text-2xl font-garamond tracking-wide">
              Placidum
            </h1>
            <div className="marginalia mt-1 hidden md:block">
              Observationes circa Impressionum Naturam
            </div>
          </Link>
          <button 
            className="nav-toggle font-garamond text-sm" 
            aria-expanded={isNavOpen} 
            aria-controls="site-nav"
            onClick={toggleNav}
          >
            Menu
          </button>
        </div>
        <nav 
          id="site-nav" 
          className="nav wrap stack" 
          data-open={isNavOpen}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`ink-underline font-garamond text-sm lowercase tracking-wide ${
                location.pathname === item.path 
                  ? "text-accent font-medium" 
                  : "text-muted-foreground"
              }`}
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="marginalia text-right hidden md:block">
          <span className="folio-number">MMXXIV</span>
        </div>
      </header>
      <main>{children}</main>
      <footer className="safe-area wrap stack journal-entry mt-24">
        <div className="marginalia">
          <span className="folio-number">Contact</span>
        </div>
        <div className="py-12">
          <div className="grid cols-3 gap-8">
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
      </footer>
    </div>
  );
};

export default Layout;