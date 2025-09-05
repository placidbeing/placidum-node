import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "home" },
    { path: "/discography", label: "releases" },
    { path: "/podcasts", label: "podcasts" },
    { path: "/shop", label: "shop" },
    { path: "/about", label: "about" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl font-mono font-medium">
              your_label
            </Link>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-mono transition-colors hover:text-accent ${
                    location.pathname === item.path ? "text-accent" : "text-muted-foreground"
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
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 your_label</p>
            <p>contact@yourlabel.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;