import beautifulSituationCover from "@/assets/Beautiful_Situation_Cover_LD.jpg";
import neptuneCover from "@/assets/Neptune_Cover.jpg";
import interiorRoomsCover from "@/assets/IR_Cover.jpg";
import softSignsCover from "@/assets/soft_signs_is_LD.jpg";
import golcondeCover from "@/assets/Golconde_Cover.png";
import heartsCover from "@/assets/placid_I_HEARTS_naked.jpg";
import nocturnalSolutionsCover from "@/assets/Nocturnal_Solutions_Cover.jpg";
import latitudesCover from "@/assets/Latitudes_Cover.jpg";

const Catalog = () => {
  // Format date from YYYYMMDD to Latin and numerical notation
  const formatDate = (dateStr: string) => {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    
    const monthNamesLatin = ['Januarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Junii',
                             'Julii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
    const romanMonths = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    
    const monthIndex = parseInt(month) - 1;
    const dayNum = parseInt(day);
    
    // Convert numbers to Roman numerals
    const toRoman = (num: number): string => {
      const romanNumerals: [number, string][] = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
      ];
      let result = '';
      for (const [value, numeral] of romanNumerals) {
        while (num >= value) {
          result += numeral;
          num -= value;
        }
      }
      return result;
    };
    
    return {
      latin: `Die ${toRoman(dayNum)}. ${monthNamesLatin[monthIndex]} ${toRoman(parseInt(year))}.`,
      numerical: `${day}.${month}.${year}`
    };
  };

  // Fixed bandcamp embed rendering
  const releases = [
    {
      catalog: "PLUM8.",
      date: "20260104",
      artist: "Ain°",
      title: "Latitudes",
      artwork: latitudesCover,
      totalDuration: "32 min. 22 sec.",
      technicalSpecs: "scriptum ad 48 milia vibrationes / 24 puncta claritatis",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 373px;" src="https://bandcamp.com/EmbeddedPlayer/album=0/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/latitudes">Latitudes by Ain°</a></iframe>',
      tracks: [
        { title: "Blues Profundo", duration: "4 min. 36 sec.", gloss: "profunditas caerulea" },
        { title: "Cobalt", duration: "4 min. 19 sec.", gloss: "color cobalti" },
        { title: "Ronces", duration: "3 min. 13 sec.", gloss: "spinae silvae" },
        { title: "Sufficiently", duration: "2 min. 24 sec.", gloss: "satis esse" },
        { title: "Espoir", duration: "5 min. 12 sec.", gloss: "spes futuri" },
        { title: "Fontana", duration: "2 min. 27 sec.", gloss: "fons aquarum" },
        { title: "Kama", duration: "2 min. 17 sec.", gloss: "desiderium" },
        { title: "La Serre", duration: "2 min. 42 sec.", gloss: "hortus vitreus" },
        { title: "Romance", duration: "2 min. 52 sec.", gloss: "amor cantus" }
      ]
    },
    {
      catalog: "PLUM7.",
      date: "20250315",
      artist: "Shcaa",
      title: "Beautiful Situation",
      artwork: beautifulSituationCover,
      totalDuration: "13 min. 36 sec.",
      technicalSpecs: "scriptum ad 96 milia vibrationes / 24 puncta claritatis",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 208px;" src="https://bandcamp.com/EmbeddedPlayer/album=1894036141/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/beautiful-situation">Beautiful Situation by Shcaa</a></iframe>',
      tracks: [
        { title: "Bind (night transfer)", duration: "6 min. 59 sec.", gloss: "vinculum nocturnum" },
        { title: "Horses (coal song)", duration: "6 min. 37 sec.", gloss: "equus carbonis" }
      ]
    },
    {
      catalog: "PLUM6.",
      date: "20240320",
      artist: "Shcaa",
      title: "Neptune",
      artwork: neptuneCover,
      totalDuration: "21 min. 31 sec.",
      technicalSpecs: "sonus captus ad 48 milia vibrationes / 24 partes subtilissimae",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=2314905344/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/neptune">Neptune by Shcaa</a></iframe>',
      tracks: [
        { title: "Her Conscious Drift to Neptune's Frozen Reliefs", duration: "6 min. 38 sec.", gloss: "tractus unitatis" },
        { title: "Leviatano", duration: "6 min. 00 sec.", gloss: "sonus profundus" },
        { title: "Where Have We Met?", duration: "5 min. 17 sec.", gloss: "motus memoriae" },
        { title: "Neptune", duration: "3 min. 35 sec.", gloss: "imago aquarum" }
      ]
    },
    {
      catalog: "PLUM5.",
      date: "20230610",
      artist: "Ain°",
      title: "Interior Rooms",
      artwork: interiorRoomsCover,
      totalDuration: "27 min. 36 sec.",
      technicalSpecs: "memoria impressa ad 48 milia vibrationes / 24 gradus artis",
      bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=231561383/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/interior-rooms">Interior Rooms by Ain°</a></iframe>',
      tracks: [
        { title: "For the Wind", duration: "5 min. 46 sec.", gloss: "pro vento" },
        { title: "Sanatoria", duration: "5 min. 30 sec.", gloss: "cura animae" },
        { title: "Aquamentus", duration: "7 min. 33 sec.", gloss: "aqua figurata" },
        { title: "Gin Dakota", duration: "3 min. 26 sec.", gloss: "poculum occidens" },
        { title: "Java, Java", duration: "5 min. 19 sec.", gloss: "iter aromatum" }
      ]
    },
    {
      catalog: "PLUM4.",
      date: "20230325",
      artist: "Nocturnal Solutions",
      title: "Nocturnal Solutions",
      artwork: nocturnalSolutionsCover,
      totalDuration: "40 min. 32 sec.",
      technicalSpecs: "figura soni: 48 milia vibrationes / 24 rationes artis",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=971037456/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/nocturnal-solutions">Nocturnal Solutions by Nocturnal Solutions</a></iframe>',
      tracks: [
        { title: "Nocturnal Solutions", duration: "6 min. 48 sec.", gloss: "solutio tenebrarum" },
        { title: "Ocean (Existence)", duration: "6 min. 39 sec.", gloss: "mare existentiae" },
        { title: "Cave (Extinction)", duration: "6 min. 01 sec.", gloss: "antrum exstinctum" },
        { title: "Ocean (Club)", duration: "10 min. 48 sec.", gloss: "mare concursus" },
        { title: "Ocean (EEE)", duration: "10 min. 14 sec.", gloss: "mare electricae" }
      ]
    },
    {
      catalog: "PLUM3.",
      date: "20220812",
      artist: "Shcaa",
      title: "Soft Signs",
      artwork: softSignsCover,
      totalDuration: "19 min. 48 sec.",
      technicalSpecs: "auditus servatus ad 48 milia vibrationes / 24 lineae subtilitatis",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 208px;" src="https://bandcamp.com/EmbeddedPlayer/album=947788755/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/soft-signs">Soft Signs by Shcaa</a></iframe>',
      tracks: [
        { title: "Soft Signs", duration: "14 min. 29 sec.", gloss: "signa mollia" },
        { title: "Signs, air", duration: "5 min. 18 sec.", gloss: "signa aeris" }
      ]
    },
    {
      catalog: "PLUM2.",
      date: "20190905",
      artist: "Shcaa",
      title: "Golconde",
      artwork: golcondeCover,
      totalDuration: "52 min. 54 sec.",
      technicalSpecs: "sonus captus ad 44,1 milia vibrationes / 24 partes subtilissimae",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2860195605/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/golconde">Golconde by Shcaa</a></iframe>',
      tracks: [
        { title: "Polokus", duration: "4 min. 45 sec.", gloss: "figura somnii" },
        { title: "Kohinor", duration: "4 min. 29 sec.", gloss: "lapis clarus" },
        { title: "Scaphandrier", duration: "6 min. 05 sec.", gloss: "homo sub aqua" },
        { title: "Mimèsis", duration: "3 min. 15 sec.", gloss: "ars similitudinis" },
        { title: "Vesavi", duration: "2 min. 45 sec.", gloss: "ignis montis" },
        { title: "Darya", duration: "1 min. 55 sec.", gloss: "vox arcana" },
        { title: "Borneo", duration: "3 min. 47 sec.", gloss: "insula viridis" },
        { title: "Formosa", duration: "1 min. 24 sec.", gloss: "figura pulchra" },
        { title: "Orloff", duration: "2 min. 54 sec.", gloss: "gemma alba" },
        { title: "Kert", duration: "5 min. 42 sec.", gloss: "via orientis" },
        { title: "The Sky Was Pearl Grey", duration: "11 min. 01 sec.", gloss: "caelum cinereum" }
      ]
    },
    {
      catalog: "PLUM1.",
      date: "20180622",
      artist: "Ain°",
      title: "Hearts",
      artwork: heartsCover,
      totalDuration: "55 min. 50 sec.",
      technicalSpecs: "scriptura ad 44,1 milia vibrationes / 16 partes tenuitatis",
      bandcampEmbed: '<iframe style="border: 0; width: 350px; height: 208px;" src="https://bandcamp.com/EmbeddedPlayer/album=2082775441/size=large/bgcol=000000/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="https://placidum.bandcamp.com/album/hearts">Hearts by Ain°</a></iframe>',
      tracks: [
        { title: "Pleading for The Grand Illusion", duration: "22 min. 56 sec.", gloss: "illusio magna" },
        { title: "Up There, Bowls Are Spinning, Hands, Fragile", duration: "32 min. 54 sec.", gloss: "manus fragiles" }
      ]
    }
  ];

  return (
    <div className="safe-area wrap py-20">
      <div className="mb-16 text-left">
          <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
            Archive of Digital Folios
          </h1>
          <div>
            <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-2xl">
              A collection of sound inscribed for those who come after - each release notated with precision, aware of the uncertainty within every trace.
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
            <article key={release.catalog} id={release.catalog.toLowerCase().replace('.', '')} className="py-8">
              <div className="flex flex-col space-y-8">
                {/* Folio Image - Full width on mobile */}
                <div className="w-full">
                  <div 
                    className="catalog-artwork aspect-square bg-muted relative overflow-hidden annotation-hover max-w-md mx-auto md:mx-0"
                    data-annotation={`${release.catalog} - ${release.totalDuration}`}
                  >
                    <img 
                      src={release.artwork} 
                      alt={`${release.artist} - ${release.title} folio illustration`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Folio Content - Below image */}
                <div className="space-y-6 max-w-2xl">
                  <div className="fragment">
                    {/* Catalog Number and Date */}
                    <div className="mb-6">
                      <div className="mb-1">
                        <div className="font-mono text-sm text-iron-oxide" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
                          {release.catalog}
                        </div>
                        <div className="font-mono text-sm leading-tight" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
                          <div className="text-iron-oxide" style={{ opacity: 0.6 }}>
                            {formatDate(release.date).latin}
                          </div>
                          <div className="text-iron-oxide" style={{ opacity: 0.4, fontSize: '0.85rem' }}>
                            {formatDate(release.date).numerical}
                          </div>
                        </div>
                      </div>
                      <h2 className="font-cormorant text-2xl text-iron-oxide" style={{ fontWeight: 300, textTransform: 'uppercase' }}>
                        {release.artist} - {release.title}
                      </h2>
                    </div>
                    
                    {/* Leonardo-style Metadata */}
                    <div className="mb-6 space-y-0.5">
                      <div className="font-cormorant italic text-base text-muted-foreground" style={{ letterSpacing: '0.1em' }}>
                        tempus totius operis: {release.totalDuration}
                      </div>
                      <div className="font-cormorant italic text-sm text-muted-foreground" style={{ letterSpacing: '0.05em' }}>
                        {release.technicalSpecs}
                      </div>
                    </div>
                    
                    {/* Tracklist - Leonardo Style */}
                    <div className="space-y-4 mb-6">
                      {release.tracks.map((track, index) => (
                        <div key={index} className="text-ink">
                          <div>
                            <span className="font-cormorant text-base leading-relaxed">
                              {track.title}
                            </span>
                            <span className="font-cormorant italic text-sm text-muted-foreground ml-2" style={{ opacity: 0.7 }}>
                              {track.gloss}
                            </span>
                          </div>
                          <p className="font-cormorant italic text-sm text-muted-foreground">{track.duration}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bandcamp Embed */}
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: release.bandcampEmbed }} />
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