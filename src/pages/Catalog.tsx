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
      catalog: "PLUM7.",
      artist: "Situation",
      title: "Beautiful Situation",
      artwork: beautifulSituationCover,
      format: "DGT",
      year: "2025.03",
      status: "Available",
      price: "VAL.0010",
      marginNote: "Digital Release, Spring 2025",
      bandcampUrl: "https://placidum.bandcamp.com/album/beautiful-situation",
      description: "seventh release captures ephemeral moments through processed acoustic instruments.",
      tracks: [
        "1. Bind (night transfer)",
        "2. Horses (coal song)"
      ]
    },
    {
      catalog: "PLUM6.",
      artist: "Neptune",
      title: "Neptune",
      artwork: neptuneCover,
      format: "VNL",
      year: "2024.03",
      status: "Available",
      price: "VAL.0015",
      marginNote: "Dubplates, Spring 2024",
      bandcampUrl: "https://placidum.bandcamp.com/album/neptune",
      description: "sixth release journeys through oceanic depths with immersive soundscapes.",
      tracks: [
        "1. Her Conscious Drift to Neptune's Frozen Reliefs",
        "2. Leviatano",
        "3. Where Have We Met?",
        "4. Neptune"
      ]
    },
    {
      catalog: "PLUM5.",
      artist: "Interior",
      title: "Interior Rooms",
      artwork: interiorRoomsCover,
      format: "CS",
      year: "2023.06",
      status: "Available",
      price: "VAL.0012",
      marginNote: "Cassette Edition, Summer 2023",
      bandcampUrl: "https://placidum.bandcamp.com/album/interior-rooms",
      description: "fifth release explores intimate spaces through field recordings and processed electronics.",
      tracks: [
        "1. For the Wind",
        "2. Sanatoria",
        "3. Aquamentus",
        "4. Gin Dakota",
        "5. Java, Java"
      ]
    },
    {
      catalog: "PLUM4.",
      artist: "Midnight",
      title: "Nocturnal Solutions",
      artwork: nocturnalSolutionsCover,
      format: "CS",
      year: "2023.02",
      status: "Available",
      price: "VAL.0012",
      marginNote: "Limited Cassette, Winter 2023",
      bandcampUrl: "https://placidum.bandcamp.com/album/nocturnal-solutions",
      description: "fourth release delves into nocturnal ambient territories with subtle industrial influences.",
      tracks: [
        "1. Nocturnal Solutions",
        "2. Ocean (Existence)",
        "3. Cave (Extinction)", 
        "4. Ocean (Club)",
        "5. Ocean (EEE)"
      ]
    },
    {
      catalog: "PLUM3.",
      artist: "Shcaa",
      title: "Soft Signs",
      artwork: softSignsCover,
      format: "VNL",
      year: "2022.09",
      status: "Available",
      price: "VAL.0015",
      marginNote: "Limited Edition, Autumn 2022",
      bandcampUrl: "https://placidum.bandcamp.com/album/soft-signs",
      description: "third release explores the intersection of ambient textures and subtle rhythmic patterns.",
      tracks: [
        "1. Soft Signs",
        "2. Soft Signs, air"
      ]
    },
    {
      catalog: "PLUM2.",
      artist: "Shcaa",
      title: "Golconde",
      artwork: golcondeCover,
      format: "VNL",
      year: "2019.04",
      status: "Available",
      price: "VAL.0018",
      marginNote: "Vinyl Edition, Spring 2019",
      bandcampUrl: "https://placidum.bandcamp.com/album/golconde",
      description: "second release ventures into architectural minimalism through rhythmic sequences and spatial arrangements.",
      tracks: [
        "1. Polokus",
        "2. Kohinor", 
        "3. Scaphandrier",
        "4. Mimèsis",
        "5. Vesavi",
        "6. Darya",
        "7. Borneo",
        "8. Formosa",
        "9. Orloff",
        "10. Kert",
        "11. The Sky Was Pearl Grey (bonus track)"
      ]
    },
    {
      catalog: "PLUM1.",
      artist: "Ain°",
      title: "Hearts",
      artwork: heartsCover,
      format: "DGT",
      year: "2018.09",
      status: "Available",
      price: "VAL.0010",
      marginNote: "Digital Only, Autumn 2018",
      bandcampUrl: "https://placidum.bandcamp.com/album/hearts",
      description: "debut release explores delicate electronic textures and themes of vulnerability and connection.",
      tracks: [
        "1. Pleading for The Grand Illusion",
        "2. Up There, Bowls Are Spinning, Hands, Fragile"
      ]
    }
  ];

  const generateFilenameLine = (release: any) => {
    const titleFormatted = release.title.toUpperCase().replace(/\s+/g, '-');
    return `${release.catalog} _${titleFormatted}.${release.format}.${release.year}`;
  };

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
                
                {/* Abstract Folio Indexing */}
                <div className="space-y-6">
                  <div className="fragment">
                    {/* Catalog Number - Prominent */}
                    <div className="mb-6">
                      <span className="folio-number text-2xl">{release.catalog}</span>
                      <h2 className="mt-2">{release.title}</h2>
                    </div>
                    
                    {/* File-Name Line */}
                    <div className="font-mono text-sm mb-2 text-muted-foreground">
                      {generateFilenameLine(release)}
                    </div>
                    
                    {/* Value Line */}
                    <div className="font-mono text-sm mb-4 text-iron-oxide">
                      {release.price}
                    </div>
                    
                    <p className="leading-relaxed mb-4">{release.description}</p>
                  </div>
                  
                  {/* Tracklist - Readable, Poetic */}
                  <div className="fragment">
                    <div className="marginalia mb-3">Tracklist:</div>
                    <div className="space-y-1">
                      {release.tracks.map((track, index) => (
                        <div key={index} className="text-foreground font-serif">
                          {track}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Margin Notes */}
                  {release.marginNote && (
                    <div className="marginalia italic text-sm">
                      {release.marginNote}
                    </div>
                  )}

                  {/* Acquisition Info */}
                  <div className="fragment">
                    <div className="marginalia mb-2">Status: {release.status}</div>
                    
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