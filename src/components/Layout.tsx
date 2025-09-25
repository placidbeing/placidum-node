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
    { path: "/chronicles", label: "phonic chronicles" },
    { path: "/shcaa", label: "principles" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-screen bg-background text-foreground">
      
      <header className="site-header">
        <div className="topline">
          <div className="header-index">Index</div>
          <nav className="main-menu" id="site-nav" data-open={isNavOpen}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`ink-underline font-garamond lowercase tracking-wide transition-colors ${
                  location.pathname === item.path 
                    ? "active" 
                    : "text-muted-foreground hover:text-accent"
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-year">MMXXIV</div>
        </div>

        <div className="logo-block">
          <Link to="/" className="ink-underline inline-block">
            <h1 className="logo-wordmark font-garamond tracking-wide text-ultramarine">
              Placidum
            </h1>
          </Link>
          <p className="logo-motto font-garamond text-muted-foreground">
            <em>Observationes circa Impressionum Naturam</em>
          </p>
        </div>

        {/* Mobile Menu Toggle - only visible on mobile */}
        <button 
          className="lg:hidden nav-toggle font-garamond text-sm bg-accent text-accent-foreground px-4 py-2 rounded mt-4" 
          aria-expanded={isNavOpen} 
          aria-controls="site-nav"
          onClick={toggleNav}
        >
          Menu
        </button>
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