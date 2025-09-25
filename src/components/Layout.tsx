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
      
      <header className="safe-area pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Main Title */}
            <Link to="/" className="ink-underline inline-block">
              <h1 className="text-4xl md:text-5xl font-garamond tracking-wide text-center text-ultramarine">
                Placidum
              </h1>
            </Link>
            
            {/* Subtitle */}
            <div className="text-center">
              <p className="text-sm md:text-base font-garamond italic text-muted-foreground">
                Observationes circa Impressionum Naturam
              </p>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden nav-toggle font-garamond text-sm bg-accent text-accent-foreground px-4 py-2 rounded" 
              aria-expanded={isNavOpen} 
              aria-controls="site-nav"
              onClick={toggleNav}
            >
              Menu
            </button>

            {/* Navigation */}
            <nav 
              id="site-nav" 
              className="nav w-full" 
              data-open={isNavOpen}
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`ink-underline font-garamond text-sm md:text-base lowercase tracking-wide transition-colors ${
                      location.pathname === item.path 
                        ? "text-accent font-medium" 
                        : "text-muted-foreground hover:text-accent"
                    }`}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
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