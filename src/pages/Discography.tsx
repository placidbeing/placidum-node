const Discography = () => {
  const releases = [
    {
      catalog: "YL001",
      artist: "Artist Name",
      title: "Debut Album",
      format: "Digital / Vinyl",
      year: "2024",
      status: "Available",
      bandcampUrl: "#",
    },
    {
      catalog: "YL002",
      artist: "Another Artist",
      title: "Experimental EP",
      format: "Digital",
      year: "2024",
      status: "Available",
      bandcampUrl: "#",
    },
    {
      catalog: "YL003",
      artist: "Various Artists",
      title: "Label Compilation Vol. 1",
      format: "Digital / Cassette",
      year: "2024",
      status: "Pre-order",
      bandcampUrl: "#",
    },
    {
      catalog: "YL004",
      artist: "Sound Designer",
      title: "Ambient Works",
      format: "Digital",
      year: "2023",
      status: "Available",
      bandcampUrl: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-12">Discography</h1>
      
      <div className="space-y-8">
        {releases.map((release) => (
          <div key={release.catalog} className="border-b border-border pb-8 last:border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {/* Album Cover Placeholder */}
              <div className="aspect-square bg-muted border border-border"></div>
              
              {/* Release Info */}
              <div className="md:col-span-2 space-y-2">
                <p className="text-sm font-mono text-muted-foreground">{release.catalog}</p>
                <h2 className="text-xl font-mono">{release.artist}</h2>
                <h3 className="text-lg text-muted-foreground">{release.title}</h3>
                <p className="text-sm text-muted-foreground">{release.format}</p>
                <p className="text-sm text-muted-foreground">{release.year}</p>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col gap-2">
                <span className={`text-xs font-mono px-2 py-1 border w-fit ${
                  release.status === "Available" 
                    ? "border-accent text-accent" 
                    : "border-muted-foreground text-muted-foreground"
                }`}>
                  {release.status}
                </span>
                <a 
                  href={release.bandcampUrl}
                  className="text-sm font-mono text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Bandcamp →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          More releases coming soon...
        </p>
      </div>
    </div>
  );
};

export default Discography;