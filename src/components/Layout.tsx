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
      {/* Index reference at top left */}
      <div className="fixed top-4 left-4 z-50">
        <span className="font-garamond text-xs text-iron-oxide tracking-wide">Index</span>
        <span className="block w-8 h-px bg-iron-oxide mt-1"></span>
      </div>
      
      {/* MMXXIV at top right */}
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <span className="folio-number">MMXXIV</span>
      </div>
      
      <header className="safe-area journal-entry pt-16 pb-8">
        <div className="wrap text-center">
          <div className="marginalia text-sm mb-2">
            Observationes circa Impressionum Naturam
          </div>
          <Link to="/" className="ink-underline inline-block">
            <h1 className="text-3xl font-garamond tracking-wide">
              Placidum
            </h1>
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
          className="nav wrap text-center mt-8" 
          data-open={isNavOpen}
        >
          <div className="flex flex-wrap justify-center gap-8">
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
          </div>
        </nav>
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