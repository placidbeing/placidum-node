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
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-4xl font-serif mb-4">Catalog</h1>
        <p className="text-muted-foreground font-mono mb-6 max-w-2xl">
          A curated collection of electronic specimens, each entry documented and preserved for study. 
          All specimens available through Bandcamp with worldwide distribution.
        </p>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-mono text-sm text-muted-foreground mb-2">Collection Access</p>
          <a 
            href="#" 
            className="text-accent hover:underline font-mono underline decoration-dotted"
            target="_blank"
            rel="noopener noreferrer"
          >
            placidum.bandcamp.com →
          </a>
        </div>
      </div>

      <div className="space-y-16">
        {releases.map((release) => (
          <article key={release.catalog} className="border-2 border-border bg-card p-8 hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Specimen Image */}
              <div className="lg:col-span-2">
                <div className="aspect-square bg-muted border-2 border-border relative">
                  <div className="absolute bottom-4 right-4">
                    <span className="specimen-label">{release.catalog}</span>
                  </div>
                </div>
              </div>
              
              {/* Taxonomical Classification */}
              <div className="lg:col-span-2 space-y-4">
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-serif mb-2">{release.artist}</h2>
                  <h3 className="text-lg font-serif italic text-muted-foreground mb-3">{release.title}</h3>
                  <p className="text-sm leading-relaxed">{release.description}</p>
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground">Format:</span>
                      <p className="classification">{release.format}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year:</span>
                      <p className="classification">{release.year}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Catalog No.:</span>
                    <p className="classification">{release.catalog}</p>
                  </div>
                </div>
              </div>
              
              {/* Acquisition Info */}
              <div className="space-y-4">
                <div className="border border-border p-4 bg-secondary/50">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Status</div>
                  <span className={`specimen-label ${
                    release.status === "Available" 
                      ? "text-accent border-accent" 
                      : "text-muted-foreground border-muted-foreground"
                  }`}>
                    {release.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Acquisition</div>
                  <div className="font-mono text-sm">
                    <p className="text-muted-foreground">Price:</p>
                    <p className="font-medium">${release.price}</p>
                  </div>
                  <a 
                    href={release.bandcampUrl}
                    className="inline-block text-sm font-mono text-accent hover:underline underline decoration-dotted mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acquire specimen →
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Submission Guidelines */}
      <div className="mt-20 border-2 border-border bg-card p-8">
        <h2 className="text-2xl font-serif mb-6">Specimen Submission Protocol</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">Requirements</h3>
            <div className="space-y-2 text-sm">
              <p>• Maximum 3 specimens per submission</p>
              <p>• Include detailed taxonomical information</p>
              <p>• Provide artist classification and specimen provenance</p>
              <p>• All submissions reviewed within 4 weeks</p>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">Contact</h3>
            <p className="text-accent" style={{ fontFamily: 'cursive' }}>sacha@placidum.com</p>
            <p className="text-sm text-muted-foreground mt-2">Include "SPECIMEN SUBMISSION" in subject line</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;