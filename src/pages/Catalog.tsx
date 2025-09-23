import beautifulSituationCover from "@/assets/Beautiful_Situation_Cover_LD.jpg";
import neptuneCover from "@/assets/Neptune_Cover.jpg";
import interiorRoomsCover from "@/assets/IR_Cover.jpg";
import softSignsCover from "@/assets/soft_signs_is_LD.jpg";
import golcondeCover from "@/assets/Golconde_Cover.png";
import heartsCover from "@/assets/placid_I_HEARTS_naked.jpg";
import nocturnalSolutionsCover from "@/assets/Nocturnal_Solutions_Cover.jpg";

const Catalog = () => {
  const releases = [
    {
      catalog: "PLUM7",
      artist: "Shcaa", 
      title: "Beautiful Situation",
      artwork: beautifulSituationCover,
      format: "Digital",
      year: "2025",
      status: "Available",
      price: "6.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/beautiful-situation",
      description: "Nocturnal electronic narratives exploring themes of transition and memory.",
      tracks: [
        "Bind (night transfer)",
        "Horses (coal song)"
      ]
    },
    {
      catalog: "PLUM6",
      artist: "Shcaa",
      title: "Neptune",
      artwork: neptuneCover,
      format: "Digital / Vinyl",
      year: "2024",
      status: "Available",
      price: "9.00 / 23.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/neptune",
      description: "Celestial ambient techno journey through frozen planetary reliefs.",
      tracks: [
        "Her Conscious Drift to Neptune's Frozen Reliefs",
        "Leviatano",
        "Where Have We Met?",
        "Neptune"
      ]
    },
    {
      catalog: "PLUM5",
      artist: "Ain°",
      title: "Interior Rooms",
      artwork: interiorRoomsCover,
      format: "Digital",
      year: "2023",
      status: "Available",
      price: "7.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/interior-rooms",
      description: "Intimate electronic compositions mapping internal emotional landscapes.",
      tracks: [
        "For the Wind",
        "Sanatoria",
        "Aquamentus",
        "Gin Dakota",
        "Java, Java"
      ]
    },
    {
      catalog: "PLUM4",
      artist: "Nocturnal Solutions",
      title: "Nocturnal Solutions",
      artwork: nocturnalSolutionsCover,
      format: "Digital / Cassette",
      year: "2023",
      status: "Available",
      price: "8.00 / 15.00", 
      bandcampUrl: "https://placidum.bandcamp.com/album/nocturnal-solutions",
      description: "Deep techno meditations on existence and extinction in aquatic environments.",
      tracks: [
        "Nocturnal Solutions",
        "Ocean (Existence)",
        "Cave (Extinction)", 
        "Ocean (Club)",
        "Ocean (EEE)"
      ]
    },
    {
      catalog: "PLUM3",
      artist: "Shcaa",
      title: "Soft Signs",
      artwork: softSignsCover,
      format: "Digital",
      year: "2022",
      status: "Available", 
      price: "5.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/soft-signs",
      description: "Minimal ambient explorations focusing on subtle environmental textures.",
      tracks: [
        "Soft Signs",
        "Soft Signs, air"
      ]
    },
    {
      catalog: "PLUM2",
      artist: "Shcaa",
      title: "Golconde",
      artwork: golcondeCover,
      format: "Digital / Vinyl",
      year: "2019",
      status: "Available",
      price: "10.00 / 25.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/golconde",
      description: "An exploration of architectural minimalism through rhythmic sequences and spatial arrangements.",
      tracks: [
        "Polokus",
        "Kohinor", 
        "Scaphandrier",
        "Mimèsis",
        "Vesavi",
        "Darya",
        "Borneo",
        "Formosa",
        "Orloff",
        "Kert",
        "The Sky Was Pearl Grey (bonus track)"
      ]
    },
    {
      catalog: "PLUM1",
      artist: "Ain°",
      title: "Hearts",
      artwork: heartsCover,
      format: "Digital",
      year: "2018",
      status: "Available",
      price: "7.00",
      bandcampUrl: "https://placidum.bandcamp.com/album/hearts",
      description: "Delicate electronic textures exploring themes of vulnerability and connection.",
      tracks: [
        "Pleading for The Grand Illusion",
        "Up There, Bowls Are Spinning, Hands, Fragile"
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-4xl font-garamond mb-4">catalogue</h1>
        <p className="text-muted-foreground font-mono mb-6 max-w-2xl">
          A curated collection of electronic specimens, each entry documented and preserved for study. 
          All specimens available through Bandcamp with worldwide distribution.
        </p>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-mono text-sm text-muted-foreground mb-2">Collection Access</p>
          <a 
            href="https://placidum.bandcamp.com" 
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
          <article key={release.catalog} className="bg-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Specimen Image */}
              <div className="lg:col-span-2">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={release.artwork} 
                    alt={`${release.artist} - ${release.title} album cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Taxonomical Classification */}
              <div className="lg:col-span-2 space-y-4">
                <div className="border-b border-border pb-4">
                  <h2 className="text-2xl font-serif mb-2">{release.artist}</h2>
                  <h3 className="text-lg font-serif italic text-muted-foreground mb-3">{release.title}</h3>
                  <p className="text-sm leading-relaxed">{release.description}</p>
                </div>
                
                <div className="space-y-4">
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
                      <p className="classification">{release.catalog}.</p>
                    </div>
                  </div>
                  
                  {/* Track Listing */}
                  <div className="border-t border-border pt-4">
                    <span className="text-muted-foreground text-sm font-mono">Tracklist:</span>
                    <ol className="mt-2 space-y-1 text-sm font-sans">
                      {release.tracks.map((track, index) => (
                        <li key={index} className="text-muted-foreground">
                          {String(index + 1).padStart(2, '0')}. {track}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
              
              {/* Acquisition Info */}
              <div className="space-y-4">
                <div className="p-4 bg-secondary/50">
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
                    Listen / Buy on Bandcamp →
                  </a>
                  
                  {/* Bandcamp Embed Preview */}
                  <div className="mt-4 p-4 bg-muted/50">
                    <iframe 
                      style={{ border: 0, width: '100%', height: '120px' }} 
                      src={`${release.bandcampUrl.replace('/album/', '/EmbeddedPlayer/album=')}}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`}
                      seamless
                      title={`${release.artist} - ${release.title}`}
                    >
                      <a href={release.bandcampUrl}>{release.title} by {release.artist}</a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};

export default Catalog;