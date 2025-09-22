const Shcaa = () => {
  const releases = [
    {
      catalog: "PLC002",
      title: "Minimal Sequences",
      year: "2024",
      format: "Digital / Cassette", 
      bandcampUrl: "#",
    },
    {
      catalog: "PLC005",
      title: "Rhythmic Studies EP",
      year: "2024",
      format: "Digital",
      bandcampUrl: "#",
    },
  ];

  const liveShows = [
    {
      date: "2024.12.22",
      venue: "Minimal Electronic Festival",
      location: "Berlin",
      status: "Upcoming",
    },
    {
      date: "2024.11.15", 
      venue: "Club Undefined",
      location: "Amsterdam",
      status: "Completed",
    },
    {
      date: "2024.10.08",
      venue: "Electronic Sundays",
      location: "London",
      status: "Completed", 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-garamond mb-8">Shcaa</h1>
      
      <div className="mb-16">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Personal explorations in minimal electronic music, focusing on rhythmic patterns 
          and textural soundscapes. Based between analog and digital processes, creating 
          hypnotic sequences for focused listening and dance floor environments.
        </p>
        <p className="text-muted-foreground">
          Available for live performances and collaborations.
        </p>
      </div>

      {/* Releases */}
      <section className="mb-16">
        <h2 className="text-xl font-mono mb-8">Releases</h2>
        <div className="space-y-8">
          {releases.map((release) => (
            <div key={release.catalog} className="border-b border-border pb-8 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div className="aspect-square bg-muted border border-border"></div>
                
                <div className="md:col-span-2 space-y-2">
                  <p className="text-sm font-mono text-muted-foreground">{release.catalog}</p>
                  <h3 className="text-lg font-mono">{release.title}</h3>
                  <p className="text-sm text-muted-foreground">{release.format}</p>
                  <p className="text-sm text-muted-foreground">{release.year}</p>
                </div>
                
                <div className="flex flex-col justify-start">
                  <a 
                    href={release.bandcampUrl}
                    className="text-sm font-mono text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen / Buy →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Shows */}
      <section className="mb-16">
        <h2 className="text-xl font-mono mb-8">Live Shows</h2>
        <div className="space-y-4">
          {liveShows.map((show, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 last:border-b-0">
              <div className="space-y-1">
                <p className="font-mono">{show.venue}</p>
                <p className="text-sm text-muted-foreground">{show.location}</p>
              </div>
              <div className="flex flex-col md:items-end space-y-1">
                <p className="text-sm font-mono">{show.date}</p>
                <span className={`text-xs font-mono px-2 py-1 border w-fit ${
                  show.status === "Upcoming" 
                    ? "border-accent text-accent" 
                    : "border-muted-foreground text-muted-foreground"
                }`}>
                  {show.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <div className="border border-border p-6">
        <h2 className="text-xl font-mono mb-4">Bookings & Collaborations</h2>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>• Available for live performances</p>
          <p>• Open to remix and collaboration projects</p>
          <p>• Technical rider available upon request</p>
          <p>• sacha@placidum.com</p>
        </div>
      </div>
    </div>
  );
};

export default Shcaa;