import prefaceCover from "@/assets/Preface_Duchamp.jpg";
import chapterICover from "@/assets/Chapter_I_Klee.jpg";

const Chronicles = () => {
  const episodes = [
    {
      episode: "003",
      title: "Chapter 2: Resonance Fields",
      date: "2024.12.10",
      duration: "45:32",
      description: "Exploring how minimal artists create immersive environments through texture and spatial arrangement.",
      guests: ["Field Studies", "Ambient Collective"],
      audioUrl: "#",
      podcast: "Silent Spectator",
      artwork: null // No artwork yet
    },
    {
      episode: "002", 
      title: "Chapter I: A Silent Spectator",
      date: "2024.11.15",
      duration: "38:47",
      description: "A deep dive into the role of rhythm in minimal electronic music with Shcaa.",
      guests: ["Shcaa"],
      audioUrl: "#",
      podcast: "Silent Spectator",
      artwork: chapterICover
    },
    {
      episode: "001",
      title: "Preface", 
      date: "2024.10.20",
      duration: "42:18",
      description: "The inaugural episode discussing the vision behind Placidum and the minimal electronic scene.",
      guests: [],
      audioUrl: "#",
      podcast: "Preface",
      artwork: prefaceCover
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
          Phonic Chronicles
        </h1>
        <div className="fragment">
          <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-2xl">
            Two podcast series exploring electronic music culture: <em>Preface</em> focuses on 
            foundational conversations, while <em>Silent Spectator</em> examines the creative process 
            through deep listening sessions.
          </p>
          <div className="marginalia">
            Available on all major podcast platforms
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {episodes.map((episode) => (
          <div key={episode.episode} className="relative py-6 border-l-2 border-verdigris/40 pl-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Episode Artwork */}
              <div className="w-full md:w-32 aspect-square bg-muted border border-border flex-shrink-0">
                {episode.artwork ? (
                  <img 
                    src={episode.artwork} 
                    alt={`${episode.title} episode artwork`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                    Artwork TBD
                  </div>
                )}
              </div>
              
              {/* Episode Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="specimen-label text-accent border-accent">
                    {episode.podcast}
                  </span>
                  <span className="text-sm font-mono text-muted-foreground">
                    Episode {episode.episode}
                  </span>
                  <span className="text-sm font-mono text-muted-foreground">
                    {episode.duration}
                  </span>
                </div>
                
                <h2 className="text-xl font-mono">{episode.title}</h2>
                <p className="text-sm text-muted-foreground">{episode.date}</p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {episode.description}
                </p>
                
                {episode.guests.length > 0 && (
                  <div>
                    <p className="text-sm font-mono text-muted-foreground mb-1">
                      Guests:
                    </p>
                    <p className="text-sm">
                      {episode.guests.join(", ")}
                    </p>
                  </div>
                )}
                
                {/* Simple Audio Player Placeholder */}
                <div className="mt-4 p-3 bg-muted border border-border">
                  <div className="flex items-center justify-between">
                    <button className="text-sm font-mono text-accent hover:underline">
                      ▶ Play Episode
                    </button>
                    <a 
                      href={episode.audioUrl}
                      className="text-sm font-mono text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download →
                    </a>
                  </div>
                  <div className="mt-2 w-full bg-border h-1">
                    <div className="bg-accent h-1 w-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          New episodes monthly • Subscribe on your preferred platform
        </p>
      </div>
    </div>
  );
};

export default Chronicles;