import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "bulletin" },
    { path: "/catalog", label: "catalogue" },
    { path: "/chronicles", label: "chronicles" },
    { path: "/shcaa", label: "shcaa" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b-2 border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-serif font-semibold tracking-wide">
              Placidum
              <span className="block text-xs font-serif italic text-muted-foreground mt-1" style={{ fontFamily: 'cursive' }}>
                Observationes circa Impressionum Naturam
              </span>
            </Link>
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-typewriter tracking-wider transition-colors hover:text-accent border-b-2 pb-1 ${
                    location.pathname === item.path 
                      ? "text-accent border-accent" 
                      : "text-muted-foreground border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-border mt-24 bg-card">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg mb-3">Contact</h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'cursive' }}>sacha@placidum.com</p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-3">Archives</h3>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'cursive' }}>Est. MMXXIV</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'cursive' }}>© 2024 Placidum</p>
              <p className="text-xs text-muted-foreground mt-2" style={{ fontFamily: 'cursive' }}>
                Impressions preserved for posterity
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;