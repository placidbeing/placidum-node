import prefaceCover from "@/assets/Preface_Duchamp.jpg";
import chapterICover from "@/assets/Chapter_I_Klee.jpg";

const Chronicles = () => {
  const formatDuration = (duration: string) => {
    const parts = duration.split(':');
    if (parts.length === 3) {
      // Format: HH:MM:SS
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);
      const seconds = parseInt(parts[2]);
      const totalMinutes = hours * 60 + minutes;
      return `${totalMinutes} min. ${seconds.toString().padStart(2, '0')} sec.`;
    } else {
      // Format: MM:SS
      const minutes = parseInt(parts[0]);
      const seconds = parts[1];
      return `${minutes} min. ${seconds.padStart(2, '0')} sec.`;
    }
  };

  const episodes = [
    {
      episode: "003",
      title: "II: Resonance Fields",
      latinTitle: "Campus Resonantiae",
      date: "Die X Decembris MMXXIV",
      duration: "45:32",
      quote: "In silence, all sounds converge.",
      audioUrl: "#",
      artwork: null // No artwork yet
    },
    {
      episode: "002", 
      title: "I: A Silent Spectator",
      latinTitle: "Spectator Silentis",
      date: "Die IX Augusti MMXVI",
      duration: "42:22",
      quote: "Give me that man That is not passion's slave and I will wear him In my heart's core, ay, in my heart of heart, As I do thee.",
      audioUrl: "#",
      artwork: chapterICover,
      artworkMeta: {
        title: "Ad Parnassum",
        artist: "Paul Klee", 
        year: "1932",
        medium: "Oil and casein on canvas"
      }
    },
    {
      episode: "001",
      title: "Preface", 
      latinTitle: "Praefatio",
      date: "Die XXII Decembris MMXII",
      duration: "01:01:55",
      quote: "The wind has stopped.",
      audioUrl: "#",
      artwork: prefaceCover,
      artworkMeta: {
        title: "The Passage from Virgin to Bride",
        artist: "Marcel Duchamp",
        year: "1912", 
        medium: "Oil on canvas"
      }
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
          Phonic Chronicles
        </h1>
        <div className="fragment">
          <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-2xl italic">
            Sonic meditations on the nature of listening and creation.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {episodes.map((episode) => (
          <div key={episode.episode} className="relative py-8 border-l-2 border-verdigris/40 pl-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Episode Artwork */}
              <div className="w-full md:w-48 flex-shrink-0">
                <div className="aspect-square bg-muted border border-border mb-4">
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
                
                {/* Artwork Metadata */}
                {episode.artworkMeta && (
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                      {episode.artworkMeta.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {episode.artworkMeta.artist}, {episode.artworkMeta.year}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {episode.artworkMeta.medium}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Episode Info */}
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-mono text-muted-foreground">{episode.date}</p>
                  <h2 className="text-ink">
                    <span className="font-cormorant text-lg leading-relaxed">
                      {episode.title}
                    </span>
                    <span className="font-cormorant italic text-sm text-muted-foreground ml-2" style={{ opacity: 0.7 }}>
                      {episode.latinTitle}
                    </span>
                  </h2>
                  <p className="font-cormorant text-lg leading-relaxed">{formatDuration(episode.duration)}</p>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic border-l-2 border-accent/30 pl-4">
                  "{episode.quote}"
                </blockquote>
                
                {/* Simple Audio Player Placeholder */}
                <div className="mt-6 p-4 bg-muted border border-border">
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
      
    </div>
  );
};

export default Chronicles;