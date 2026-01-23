const Bulletin = () => {
  const entries = [
    {
      date: "Die VI. Aprilis MMXXV",
      title: "Brussels",
      content: "Raphael Rogiński. The Handover."
    },
    {
      date: "Die I. Decembris MMXXIV",
      title: "Madrid",
      content: "Francisco Goya's Black Paintings."
    },
    {
      date: "Die I. Novembris MMXXIV",
      title: "Lucy Railton",
      content: "Ghost pads. Wind sounds like boomerangs around the space. Organic wind then synthesized — like air displacing. Frequency selection."
    },
    {
      date: "Die I. Octobris MMXXIV",
      title: "Petits Bains",
      content: "Laurel Halo. Leila Bordreuil. Spectral harmony, complete ensemble. Underwater landscapes."
    },
    {
      date: "Die V. Septembris MMXXIV",
      title: "Recording: Dilos Dos Veces",
      content: ""
    },
    {
      date: "Die I. Maii MMXXIV",
      title: "The Jaguar",
      content: "Wanting to refine guitar approach. Looking for a Telecaster to perform in New York. Ended up with a vintage Jaguar — very acoustic, quite heavy. Indian feel.\n\nThat same day: Bi Gan's Kaili Blues at the theatre."
    },
    {
      date: "Die VII. Martii MMXXIV",
      title: "Anvers",
      content: "Jacob Bro. Midori Takada."
    },
    {
      date: "Die I. Julii MMXXIII",
      title: "Interior Rooms",
      content: "Released."
    },
    {
      date: "Die XVII. Junii MMXXIII",
      title: "Gypsy Night",
      content: "Never heard an acoustic instrument sound like this."
    },
    {
      date: "Die XXVI. Aprilis MMXXIII",
      title: "Kunsthistorisches Museum, Vienna",
      content: `Georg Baselitz — Towel - Beach Picture 6, 1980:

'The problem is not the object in the picture, but the picture as an object.' Simple, raw compositions in oil and egg tempera. Fierce, brusque pictures made alongside first sculptures. Enormous, unwieldy plasticity — but gaiety, occasionally comedy.

Mania, 2019:

Hands are an important motif. The hand of rulers, the hand of God. Blessing or damning, acting in isolation from golden ground. Later, Dürer and Parmigianino depicted their own hands to reassure themselves of their artistry.

Surrealism Is Moving, 2019:

'I paint a picture and I counterproof it. The counterproof is simply the lighter rendition, like a reflection. Just the illusion of it all.'

The Ice Skating Woman, 2019:

The canvas as an arena. Baselitz confidently plays with the method but does not relinquish the object. We are not looking at an ice skater floating across the lake at all — our entire vision begins to float.

Bill Frisell and Thomas Morgan — Vienna playlist: Misterioso. Mumbo Jumbo. It Should Have Happened a Long Time Ago. You Only Live Twice. Goldfinger.`
    },
    {
      date: "Die VIII. Februarii MMXXIII",
      title: "Michiyo Yagi Trio",
      content: "With Eivind Aarset & Jan Bang. Le Générateur, Gentilly.\n\nCold, feverish, walking out of Paris to suburban reaches. Streets quiet and comforting. Charles Lloyd's Sangam on the way. Concert extremely inspiring — mossy, full of life and shades.\n\nRecording."
    },
    {
      date: "Die I. Februarii MMXXIII",
      title: "Japan",
      content: "First trip. Recordings."
    },
    {
      date: "Die II. Februarii MMXXIII",
      title: "Leviathan",
      content: `Lorsque les torrents étreignent la rumeur. Que les idées cessent. Les torrents rassurent. Leur bruit blanc ne se répétera jamais. Leur respiration nous enracine.

Je ne souhaite plus écouter de battements imposés, séquencés. Le monde déborde d'énergies mais on y perd notre sensibilité. Un vacarme si organisé qu'il en devient inaudible. Les lumières bleues nous aveuglent.

J'ai besoin d'écouter les éléments, un environnement vide d'idées. Watson. Fennesz. Lloyd. Il y a des orages dans la nature — ils apaisent par leur force. Leur force n'est pas destructrice, elle ne disperse pas.`
    },
    {
      date: "Die I. Maii MMXXII",
      title: "Los Angeles",
      content: "Recording: Pink Lime."
    },
    {
      date: "MMXXI",
      title: "Thomas Mann — The Magic Mountain",
      content: `« Le monde de l'atome était extérieur et, de même, la planète Terre, que nous habitons, était selon toute probabilité un intérieur plein de profondeur, sur le plan organique. Un chercheur n'avait-il pas évoqué, dans son audace rêveuse, les « animaux de la Voie lactée », monstres cosmiques dont la chair, les os et le cerveau étaient composés de systèmes solaires? »

Les rideaux de pluie miroitante s'évanouirent : la mer s'étendait, c'était une mer du Sud, d'un bleu extrêmement profond, étincelant de lueurs argentées, avec une baie magnifique, dégagée et vaporeuse d'un côté, à demi sertie dans de vastes massifs montagneux dont le bleu allait en se délavant...`
    },
    {
      date: "Die XIX. Decembris MMXIX",
      title: "Hearts",
      content: "Released. First Placidum release."
    },
    {
      date: "Die I. Septembris MMXIX",
      title: "Black Midi",
      content: "Paris. Immediacy of music. Kaleidoscopic qualities. Strong narration."
    },
    {
      date: "Die XVII. Februarii MMXIX",
      title: "Recording: Time Apart",
      content: "Beirut."
    },
    {
      date: "Die XIV. Februarii MMXIX",
      title: "Fanar Birds",
      content: "Beirut."
    },
    {
      date: "Die XXII. Novembris MMXVIII",
      title: "Scout Niblett",
      content: "Transcended. Years before, a small note to myself compared her voice to Miles' trumpet on Bitches Brew. Both look like burning canyons."
    },
    {
      date: "Die XVI. Augusti MMXVIII",
      title: "Pharaoh's Birds",
      content: `It's like a storm inside
A weight to their songs
Obstructing the light
When the 23rd passes
The seventh, check five, four
Lost in the sublime, the subliminal

Like persistent dreams for coloured sins,
They praise the cage, delay its pulse, prey on affection,
Leaving me cold, vague, with sympathy for their melody.`
    },
    {
      date: "Die XVII. Aprilis MMXVIII",
      title: "Union Chapel",
      content: "Jan Jelinek and Midori Takada."
    },
    {
      date: "Die XI. Martii MMXVIII",
      title: "Reflection",
      content: "Recording: South East Asia."
    },
    {
      date: "Die I. Februarii MMXVIII",
      title: "South East Asia",
      content: "Opposition of high modernity and minimalism with luxuriant tropical atmosphere. Strong impact.\n\nSoundtrack: Basinski — Cascade. Low — Lullaby."
    },
    {
      date: "Die XV. Februarii MMXVIII",
      title: "",
      content: "Seagulls shortly after waking. A door has been opened somewhere — though hours fall at the same place, a stream runs beside me. Correspondence with the past. The one I missed. The strokes my name has to forget."
    },
    {
      date: "Die XIV. Octobris MMXVII",
      title: "MOMA",
      content: "Matana Roberts. Recording."
    },
    {
      date: "Die X. Octobris MMXVII",
      title: "Village Vanguard",
      content: "Bill Frisell & The Bad Plus.\n\nUnsung Heroes. Into the Animal Race. Let Me In. Rag. Live to Tell.\n\nPlacidum — concept laid down. Logo emerges through archive research."
    },
    {
      date: "Die XXV. Septembris MMXVII",
      title: "",
      content: "All I can is hope to meet her in the heights of a clear night, where bones of many salvations counsel my reality, blow life into the dearest passions. The one that cannot because it was never real — a most vivid fiction of the soul."
    },
    {
      date: "Die VII. Septembris MMXVII",
      title: "Dakota Dreams",
      content: "Weird retake. Recording."
    },
    {
      date: "Die I. Octobris MMXVII",
      title: "New York",
      content: "After the album's release. Finalisation of Hearts. Many inspiring acts, nighttime walks.\n\nBill Frisell. John Zorn. Tyshawn Sorey. Marc Ribot. Jimi Hendrix at the Bunker. Alan Vega exhibition. Matana Roberts. Cécile McLorin Salvant.\n\nEncountered Ryuichi Sakamoto in the street."
    },
    {
      date: "Die I. Septembris MMXVII",
      title: "Golconde",
      content: `Released. First album. Strong post-colonial influences — Joseph Conrad, Brazilian colors, surrealist themes.

As they were longing for these stones with their whole soul, incandescent gazes illuminated Southern Indian nights. Whispers would silence the nocturnal fury. Conspiracy fills the warm air. What appeared to his sight were countless blazing birds, slowly, carrying out their watch, through thick layers of rainforest. Their systems, their ambitions, their wild illusions, so many spheres of romance.

For an instant, the great luminaries took shelter within the most obscure earth, only to arise again, as a reflection, in the eyes of a Queen.`
    },
    {
      date: "Die I. Augusti MMXVII",
      title: "First Live Act",
      content: "Dordogne. Contours of what is to come. Improvisational collage: synthetic materials, field recordings, found audio. Improvised guitar along DSP. Solid body Gibson 335.\n\nOpening for E/tape and Nicolas Lutz. Among others that festival: Jan Jelinek, Chi Factory, Roedelius & Chaplin."
    },
    {
      date: "Die XI. Julii MMXVII",
      title: "Lunar Observation",
      content: `Cotton moon, in the naked angle, still remembers it was full. Behind, so far, a star, so strong — thought it was a plane. Then above my lingering place, a screen, white glow on the lava, twice every half a minute. Second lighthouse, truly, in my history. Quarter century.

Silver over marine blue. Pleased to contrast the astral lights, pleased to wear the abyss. Clusters of obscure mines.

Wind stopped. Time resets backward, recites common wonders. Perfect circle ruling the thousand sea grooves.

Faint call from the naked angle. My dream has paused, partially lost I suppose. Now eerie is this cotton sphere — its mines are none.`
    },
    {
      date: "Die XXVII. Februarii MMXVII",
      title: "",
      content: "Les mots se plissent, doucement, puis se voilent tant ces pensées sont réelles, trop grandes pour une âme sans courage. Elle arracha l'horloge du mur et brisa le verre. J'aimais les yeux fatigués, car ils ne récitent plus. C'est ça le jazz. La cadence des vents. Les cycles millénaires. La minute de trop."
    },
    {
      date: "Die II. Februarii MMXVII",
      title: "",
      content: `La brume ne songe qu'à nos rires
Elle sait voir nos leurs au déplaisir
Laisse s'étendre dans les passages étroits la lueur de cœurs inventés.
Personne ici n'a de cœur.
Nous sommes une foule qui ressent sans choisir.
Ses rues sont bordées d'incandescence qu'elle enrobe par bienveillance et obsession.`
    },
    {
      date: "Die XXV. Januarii MMXVII",
      title: "Recording: The Day the Wall Fell",
      content: ""
    },
    {
      date: "Die XV. Januarii MMXVII",
      title: "",
      content: `Le froid bleu de l'air qui nous retient

L'envie que chacun a d'observer en l'autre une réponse

Car les brûlures se font plus nettes encore que le temps

Quelle est la marque de l'attachement?

Lorsque une lumière vacille et qu'il se fait tard.`
    },
    {
      date: "Die I. Decembris MMXVI",
      title: "The Desert Guitar",
      content: "Bought a guitar in the desert. Named it Aino — reading Sándor Márai at the time. This instrument, that feeling, will become the embodiment of a series: Hearts, Interior Rooms, Latitudes. A decade of sonic evolution."
    },
    {
      date: "Die I. Octobris MMXVI",
      title: "Tatemix",
      content: "Recording session. Klee as reference. Mossy hues and textures that remain. Compositions will emerge from that grove."
    },
    {
      date: "Die XVIII. Septembris MMXVI",
      title: "Intrinsic London",
      content: "Opening for Hans Joachim Roedelius and Christopher Chaplin. Visual collaboration with Dream Rec. A new kind of set."
    },
    {
      date: "Die I. Augusti MMXVI",
      title: "Sicilia",
      content: "Many nights sleeping outside. Loren Connors on repeat. Epiphanies — the sparse guitar, uncertain tempo, hugely melancholic intertwined melodies against Mediterranean backdrop."
    },
    {
      date: "Die I. Julii MMXVI",
      title: "Golconde Sessions",
      content: "South of France. Guitars layered at night. Air saturated with pine needles. Small walks under yellowish artificial light — tricked myself into believing this was quiet America. This way of working will remain."
    },
    {
      date: "Die XXVII. Maii MMXVI",
      title: "Swell Music II-1",
      content: "Recording session."
    },
    {
      date: "Die I. Maii MMXVI",
      title: "Paul Klee Retrospective",
      content: `Pompidou. Enormous opening. Mystery, miniature, dream logic.

Stéphane Lambert on Klee:

« L'artiste-architecte attend le moment où la théorie ne répond plus pour échafauder la structure du rêve. C'est par exemple un Départ des bateaux (1927) sur une mer nocturne. Le moindre suffit pour planter le décor. Battre la mesure dans l'obscurité. Les couleurs vives flottent dans la nuit, qui pourraient être autant d'allusions allégoriques que de simples voiliers cherchant à s'orienter. Cette position intermédiaire charge l'œuvre d'une épaisseur inédite comme si elle s'était inscrite sur un palimpseste maintes fois effacé. Les époques se fondent en un courant identique. Deux petits cercles surplombent un fin rectangle : et un visage apparaît. Quelques triangles sur des croissants de lune : et nous voilà embarqués pour l'odyssée. Dans le sommeil de l'existence, des ombres œuvrent à notre navigation. Notre image se dilue dans les eaux sombres sur lesquelles nous voguons. »`
    },
    {
      date: "Die X. Januarii MMXVI",
      title: "Unwanted Studio Fragment",
      content: "Ennio Morricone, controfase."
    },
    {
      date: "Die X. Octobris MMXV",
      title: "Terry & Gian Riley",
      content: "Live. Incredibly touching."
    },
    {
      date: "Die I. Januarii MMXV",
      title: "Roma",
      content: "Mediterranean scents in an antique city. Mazy stairs."
    },
    {
      date: "MMXIV",
      title: "Spot Bleu",
      content: "A set that opened doors. Cross-contaminated curations since absorbed into my language. Could not see the crowd — the lights."
    },
    {
      date: "Die I. Julii MMXIII",
      title: "Recording: Chêne",
      content: "For Pluie Noir."
    },
    {
      date: "Die XV. Aprilis MMXIII",
      title: "Transmission: Iz Pepla",
      content: "For Pluie Noir."
    },
    {
      date: "Die XXI. Martii MMXIII",
      title: "Moscow, Early Spring",
      content: "Winter persists. A track called A dombon materializes. Tropical assumptions, vocoded French, a Dostoevskian shadow. Reading Tender Is the Night. A sentence yields \"Placid Strait.\" For now, a vague alias. Nothing more."
    },
    {
      date: "Die XV. Februarii MMXII",
      title: "Recording: Preface",
      content: "South of France. Wet soil, dead leaves, firewood smoke. Preface emerges — not pretentious, a collection of missing links. (See Chronicles.)"
    },
    {
      date: "Die XII. Februarii MMXII",
      title: "Praeludium",
      content: "London, third winter. End of a cycle, apparent now. High fever, things refusing alignment. Without knowing it, back where it began. A dream of chamber music — texture and hidden melodies in conversation. Time released. Later that season: trains ascending Swiss mountains, War & Peace open on my lap. Something behind the peak. Keep climbing."
    },
  ];

  return (
    <div className="notes-section safe-area wrap py-20">
      <header className="notes-header mb-16 text-left">
        <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
          Field Notes & Observations
        </h1>
        <div>
          <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-2xl">
            Accounts of recent activity—emergent works, field notes, and subtle deviations within the Placidum continuum.
          </p>
          <div className="marginalia">
            Research Updates: <a 
              href="mailto:notes@placidum.com" 
              className="ink-underline"
            >
              notes@placidum.com
            </a>
          </div>
        </div>
      </header>
      
      <div className="space-y-12">
        {entries.map((item, index) => (
          <article key={index} className="note-entry relative py-4 text-left">
            <div className="space-y-2">
              <div className="text-iron-oxide font-mono text-sm" style={{ opacity: 0.6, letterSpacing: '0.05em' }}>
                {item.date}
              </div>
              {item.title && (
                <h2 className="text-xl serif font-medium">
                  {item.title}
                </h2>
              )}
              {item.content && (
                <div className="serif leading-relaxed text-base whitespace-pre-line">
                  {item.content}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
        
    </div>
  );
};

export default Bulletin;
