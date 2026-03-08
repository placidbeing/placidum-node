import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="safe-area wrap py-20 min-h-[60vh] flex flex-col justify-center">
      <div className="space-y-8 max-w-xl">
        <div className="font-mono text-sm text-muted-foreground" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
          <span className="text-iron-oxide" style={{ opacity: 0.5 }}>CDIV</span>
        </div>
        <h1 className="font-cormorant text-5xl text-iron-oxide" style={{ fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Terra Incognita
        </h1>
        <p className="font-garamond text-lg text-foreground leading-relaxed italic opacity-70">
          "The path you seek has not yet been inscribed."
        </p>
        <div className="font-mono text-sm text-muted-foreground opacity-50">
          <span className="break-all">{location.pathname}</span>
          <span className="mx-2">—</span>
          <span>not found</span>
        </div>
        <div className="pt-4">
          <Link 
            to="/" 
            className="font-mono text-sm text-accent hover:underline transition-opacity"
            style={{ letterSpacing: '0.05em' }}
          >
            ← Return to known territories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
