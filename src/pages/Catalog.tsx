const Catalog = () => {
  const releases = [
    {
      catalog: "PLC001",
      artist: "Various Artists",
      title: "Inaugural Compilation",
      format: "Digital / Vinyl",
      year: "2024",
      status: "Available",
      price: "12.00 / 25.00",
      bandcampUrl: "#",
      description: "The first release introducing the placidum sound palette.",
    },
    {
      catalog: "PLC002",
      artist: "shcaa",
      title: "Minimal Sequences",
      format: "Digital / Cassette",
      year: "2024", 
      status: "Available",
      price: "8.00 / 15.00",
      bandcampUrl: "#",
      description: "Rhythmic explorations in minimal electronic music.",
    },
    {
      catalog: "PLC003",
      artist: "Field Studies",
      title: "Urban Ambient EP",
      format: "Digital",
      year: "2024",
      status: "Available", 
      price: "6.00",
      bandcampUrl: "#",
      description: "Environmental recordings transformed into ambient compositions.",
    },
    {
      catalog: "PLC004",
      artist: "Various Artists",
      title: "Ambient Studies",
      format: "Digital / Vinyl",
      year: "2024",
      status: "Pre-order",
      price: "10.00 / 28.00", 
      bandcampUrl: "#",
      description: "Eight artists exploring the boundaries of ambient music.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-8">Catalog</h1>
      
      <div className="mb-12">
        <p className="text-muted-foreground mb-4">
          All releases available through Bandcamp. Worldwide shipping for physical formats.
        </p>
        <a 
          href="#" 
          className="text-accent hover:underline font-mono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit placidum on Bandcamp →
        </a>
      </div>

      <div className="space-y-12">
        {releases.map((release) => (
          <div key={release.catalog} className="border-b border-border pb-12 last:border-b-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {/* Album Cover */}
              <div className="aspect-square bg-muted border border-border"></div>
              
              {/* Release Info */}
              <div className="md:col-span-2 space-y-3">
                <p className="text-sm font-mono text-muted-foreground">{release.catalog}</p>
                <h2 className="text-xl font-mono">{release.artist}</h2>
                <h3 className="text-lg text-muted-foreground">{release.title}</h3>
                <p className="text-sm text-muted-foreground">{release.description}</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{release.format}</p>
                  <p>{release.year}</p>
                </div>
              </div>
              
              {/* Purchase Info */}
              <div className="flex flex-col gap-3">
                <span className={`text-xs font-mono px-2 py-1 border w-fit ${
                  release.status === "Available" 
                    ? "border-accent text-accent" 
                    : "border-muted-foreground text-muted-foreground"
                }`}>
                  {release.status}
                </span>
                <div className="text-sm font-mono">
                  <p className="text-muted-foreground mb-1">Price:</p>
                  <p>${release.price}</p>
                </div>
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

      <div className="mt-16 border border-border p-6">
        <h2 className="text-xl font-mono mb-4">Demo Submissions</h2>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>• Send max 3 tracks via email</p>
          <p>• Include brief artist bio and track info</p>
          <p>• We listen to everything, responses within 4 weeks</p>
          <p>• contact@placidum.com</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;