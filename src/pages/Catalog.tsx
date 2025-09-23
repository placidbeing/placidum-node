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
    <div className="notebook-grid py-20">
      <div className="marginalia">
        <span className="folio-number">Catalogus</span>
      </div>
      <div>
        <div className="mb-16">
          <h1>catalogue</h1>
          <div className="fragment">
            <p className="font-mono mb-6 max-w-2xl">
              A curated collection of electronic specimens, each entry documented and preserved for study. 
              All specimens available through Bandcamp with worldwide distribution.
            </p>
            <div className="marginalia">
              Collection Access: <a 
                href="https://placidum.bandcamp.com" 
                className="ink-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                placidum.bandcamp.com
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {releases.map((release) => (
            <article key={release.catalog} className="journal-entry p-8">
              <div className="notebook-grid-wide">
                {/* Specimen Image */}
                <div>
                  <div 
                    className="aspect-square bg-muted relative overflow-hidden annotation-hover"
                    data-annotation={`${release.catalog} - ${release.year}`}
                  >
                    <img 
                      src={release.artwork} 
                      alt={`${release.artist} - ${release.title} album cover`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Taxonomical Classification */}
                <div className="space-y-6">
                  <div className="fragment">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="folio-number">{release.catalog}</span>
                      <div>
                        <h2>{release.artist}</h2>
                        <h3 className="italic text-muted-foreground">{release.title}</h3>
                      </div>
                    </div>
                    <p className="leading-relaxed mb-4">{release.description}</p>
                  </div>
                  
                  <div className="notebook-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="marginalia">
                      Format: {release.format}
                    </div>
                    <div className="marginalia">
                      Year: {release.year}
                    </div>
                  </div>
                  
                  {/* Track Listing */}
                  <div className="fragment">
                    <div className="marginalia mb-3">Tracklist:</div>
                    <ol className="space-y-1 font-mono text-sm">
                      {release.tracks.map((track, index) => (
                        <li key={index} className="text-muted-foreground">
                          {String(index + 1).padStart(2, '0')}. {track}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Acquisition Info */}
                  <div className="fragment">
                    <div className="marginalia mb-2">Status: {release.status}</div>
                    <div className="marginalia mb-4">Price: ${release.price}</div>
                    
                    <a 
                      href={release.bandcampUrl}
                      className="ink-underline font-mono text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Listen / Buy on Bandcamp
                    </a>
                    
                    {/* Bandcamp Embed Preview */}
                    <div className="mt-6 p-4 bg-muted/30">
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
      <div className="marginalia">
        <span className="folio-number">Collection Complete</span>
      </div>
    </div>
  );
};

export default Catalog;