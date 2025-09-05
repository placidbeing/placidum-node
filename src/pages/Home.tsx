import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-mono mb-6 leading-tight">
          your_label_
        </h1>
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Independent electronic music label focusing on ambient, experimental, 
            and forward-thinking electronic music. Based in [location], 
            established 2024.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="default">
              <Link to="/discography">Browse Releases</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/shop">Shop</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="mb-20">
        <h2 className="text-2xl font-mono mb-8">Latest Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              artist: "Artist Name",
              title: "Album Title",
              catalog: "YL001",
              year: "2024",
            },
            {
              artist: "Another Artist",
              title: "EP Title",
              catalog: "YL002",
              year: "2024",
            },
            {
              artist: "Various Artists",
              title: "Compilation",
              catalog: "YL003",
              year: "2024",
            },
          ].map((release, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-muted mb-4 border border-border group-hover:border-accent transition-colors"></div>
              <div className="space-y-1">
                <p className="font-mono text-sm text-muted-foreground">{release.catalog}</p>
                <h3 className="font-mono">{release.artist}</h3>
                <p className="text-sm text-muted-foreground">{release.title}</p>
                <p className="text-xs text-muted-foreground">{release.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/discography">View All Releases</Link>
          </Button>
        </div>
      </section>

      {/* Latest Podcast */}
      <section>
        <h2 className="text-2xl font-mono mb-8">Latest Podcast</h2>
        <div className="border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-mono mb-2">Episode 001: Introduction</h3>
              <p className="text-sm text-muted-foreground">
                An introduction to the label and our philosophy on electronic music.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">Dec 2024</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/podcasts">Listen Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;