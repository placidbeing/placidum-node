const Podcasts = () => {
  const episodes = [
    {
      number: "001",
      title: "Introduction to the Label",
      description: "An introduction to our philosophy and approach to electronic music. Featuring tracks from our first three releases and insights into the creative process.",
      duration: "45:32",
      date: "Dec 2024",
      audioUrl: "#",
    },
    {
      number: "002",
      title: "Ambient Textures",
      description: "Exploring the world of ambient and experimental electronic music. Guest appearances from label artists discussing their creative processes.",
      duration: "52:18",
      date: "Nov 2024",
      audioUrl: "#",
    },
    {
      number: "003",
      title: "Field Recordings & Sound Design",
      description: "A deep dive into the use of field recordings and sound design in contemporary electronic music production.",
      duration: "38:45",
      date: "Oct 2024",
      audioUrl: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-8">Podcasts</h1>
      
      <div className="mb-12">
        <p className="text-muted-foreground mb-4">
          Regular podcast series exploring electronic music, sound design, and the creative process. 
          Available on all major podcast platforms.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-accent hover:underline font-mono">Spotify →</a>
          <a href="#" className="text-accent hover:underline font-mono">Apple Podcasts →</a>
          <a href="#" className="text-accent hover:underline font-mono">RSS Feed →</a>
        </div>
      </div>

      <div className="space-y-8">
        {episodes.map((episode) => (
          <div key={episode.number} className="border border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-mono text-muted-foreground">
                    Episode {episode.number}
                  </span>
                  <span className="text-xs text-muted-foreground">{episode.date}</span>
                  <span className="text-xs text-muted-foreground">{episode.duration}</span>
                </div>
                <h2 className="text-xl font-mono mb-3">{episode.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {episode.description}
                </p>
              </div>
            </div>
            
            {/* Simple Audio Player Placeholder */}
            <div className="flex items-center gap-4 mt-4 p-4 bg-muted/50 border border-border">
              <button className="w-8 h-8 border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                ▶
              </button>
              <div className="flex-1 h-1 bg-border relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-accent"></div>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                00:00 / {episode.duration}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          Subscribe for new episodes...
        </p>
      </div>
    </div>
  );
};

export default Podcasts;