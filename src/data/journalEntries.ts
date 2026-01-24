export interface JournalMedia {
  type: 'image' | 'audio';
  src: string; // Path to asset or URL
  caption?: string; // Optional caption below media
  position?: 'inline' | 'after'; // 'inline' interrupts text, 'after' appears at end (default: 'after')
}

export interface JournalEntry {
  date: string; // YYYY.MM.DD format, or YYYY for year-only entries
  title: string;
  content: string;
  isFullyItalic?: boolean;
  media?: JournalMedia[]; // Optional media attachments
}

export const journalEntries: JournalEntry[] = [
  {
    date: "2026.01.01",
    title: "",
    content: `"We know that a true meeting has taken place when there is change in us. We made room for the other and room for a part of ourselves hitherto unknown.

There can be no meeting except in the unexpected. Beauty is always bizarre. The sudden emergence of a presence."`,
    isFullyItalic: true
  },
  {
    date: "2025.12.15",
    title: "",
    content: `Dylan:

"Folk music was a reality of a more brilliant dimension. It exceeded all human understanding, and if it called out to you, you could disappear and be sucked into it. It was so real, so more true to life than life itself. It was life magnified."

Sebald:

"For hours I gazed at the specimens of stones in the display cases, the pyrite crystals, the dark green Siberian malachites, the Bohemian micas, granites and quartzes, jet-black basalts and isabeline calcite, and wondered on what foundations our world is built."`
  },
  {
    date: "2025.12.01",
    title: "",
    content: `Sebald, Austerlitz:

"The study of history, so Hilary's thesis ran, was merely a matter of pre-formed images fixed inside our heads, on which we keep our eyes while the truth lies elsewhere, somewhere apart, in a place no one has yet discovered."

"It was to this sort of phenomenon, to these spurious incursions of the unreal into the real world, to certain effects of light in a landscape spread out before us, to the reflection in a beloved person's eye, that our deepest feelings were kindled, or what we took for such."`
  },
  {
    date: "2025.11.15",
    title: "",
    content: `Dylan:

"A folk song has over a thousand faces and you must meet them all if you want to play this stuff."

Hassell:

"Vertical listening: listening to 'what's happening NOW' — letting your inner ear parse out the entire spectrum of sound, asking yourself what kinds of 'shapes' are being manifested."

"I've gone past the stage where questioning the nature of music, of sound, was the subject matter of my work, and am content to simply try to make beautiful things according to certain rules."`
  },
  {
    date: "2025.11.01",
    title: "",
    content: `Hassell, Atmospherics:

"See music as a painting with layers, retouchings, second thoughts, with new layers erased in places so that the under-painting shows through."

Pentimento — The reappearance in a painting of images, forms, or strokes that have been changed and are used as elements of a final composition.`
  },
  {
    date: "2025.10.15",
    title: "",
    content: `Dylan, Chronicles:

"Songs, to me, were more important than just light entertainment. They were my preceptor and guide into some altered consciousness of reality, some different republic, some liberated republic."`
  },
  {
    date: "2025.10.01",
    title: "Pantelleria",
    content: `Rûmi, Le livre du dedans:

"Comment pourrait-on parvenir à la perle en regardant simplement la mer ? Il faut un plongeur pour trouver la perle."

Óscar Hahn:

Les jours passeront comme passent tous les mauvais jours de la vie. Les vents néfastes faibliront. Le sang de ta plaie stagnera. L'âme errante regagnera son nid. Ce qui hier était perdu reparaîtra.

Et tu diras face à la mer: Comment ai-je pu inondé sans boussole et perdu arriver à bon port toutes voiles déchirées?

Une voix te dira: Tu ne le sais donc pas? Le vent qui a brisé tes vaisseaux est le même que celui qui fait voler les mouettes.

Films: Lou Ye — Suzhou River. Wong Kar Wai — Fallen Angels. Jacques Rivette — La Belle Noiseuse. Tarkovsky — The Sacrifice. Cassavetes — Love Streams.

Taste of Cherry: "My love I am flying off come to me, I'm hounded from my friend's garden, come to me. Tell me. We barely know each other. You go, I'm your friend. You stay, I'm your friend."`
  },
  {
    date: "2025.05.09",
    title: "De retour du Japon",
    content: `Yoshino.

"Il est dit que la vie est un flux, une rivière, un voyage. Nous avançons perpétuellement et il n'y a pas de destination."

The past can be a weight, but also a well of fresh water — it contains our future, especially the most distant. Water as a vector to travel back in time.

In the bathroom at Yoshino, crouching, helped by turquoise touches, I remembered the small bathroom of my childhood. Mine alone, where my mother washed me and spoke to me. It seemed slightly outside the apartment. The exterior could enter but I was without fear. This simplicity is still there, part of me.

Otto Benson — Another Long Day

At Yoshino, I realize the small bathroom is still there. It's up to me to remember it. To let it appear in the river — it will gently push away the voracious and authoritarian memories.

Paul Motian: "Playing the music is real, physically and whole. Then it's gone. But it's still there, in the air, in the mind, it exists. It's not part of technology, it's not recorded. It's part of the soul. It's there."

In the plane — Films: A Real Pain. Death Stranding. Listening: Terre Thaemlitz — Elevatorium.`
  },
  {
    date: "2025.04.15",
    title: "Blue On Velvet",
    content: `Coltrane — Crescent. Gabor Szabo — Galatea's Guitar, Fire Dance, My Foolish Heart. The Doors — Indian Summer. Grateful Dead — Dark Star. Eden Ahbez — The Wanderer. Chico Hamilton Quintet — Blue Sands. Paul Motian Trio — It Should've Happened a Long Time Ago. Nana Mouskouri — No Moon at All. Velvet Underground — I Found a Reason. Sly and the Family Stone — In Time. Santana — Evil Ways. Fairuz — Le Beirut. Marianne Faithfull — Corrine Corina. Mel Tormé — The Windmills of Your Mind. Peggy Lee — Is That All There Is?. Vanilla Fudge — Keep Me Hangin' On. The Wings — Let Me Roll It. The Beatles — Dear Prudence. Bob Dylan — One More Cup of Coffee. Scott Walker — It's Raining Today. Jacques Brel — Les Marquises, Je suis un soir d'été. Yo La Tengo — Nowhere Near. Lewis Taylor — Lucky. Marvin Gaye — I Want You, Come Live with Me Angel. Alain Bashung — Kalabougie (rough mix).`
  },
  {
    date: "2025.04.06",
    title: "Brussels — BRDCST",
    content: `Church of Notre Dame aux Riches Claires, curated by Stetson. Raphael Rogiński. The Handover.

The day before: Abel Ghekiere «In de verte, dit uitzicht»`
  },
  {
    date: "2024.12.01",
    title: "Madrid",
    content: `Several days immersed in the intrigues of Hideo Kojima. Stop trying to understand, let yourself be carried.

Goya's Black Paintings. Incomplete, removed from their natural state, reinterpreted. Yet the balance is there, the nuances magnificent.

"If you look for a meaning, you will miss everything that happens." — Nietzsche

Joshua Edelman at Central Cafe (student of Barry Harris, played with Chuck Israel).

Cuban music: Instruments interchange roles. Percussive and tonal. Rhythm constant but never repeating. Dance crystallizes melodies, the pulsing heart, grants harmonic freedom. Leaving tonality without losing communion.

Making music — not propositions about music, but the most complete form there is. Melodies, textures, harmonic progressions, narration, organic and dense rhythms, emergent spaces. Memories. A song, a piece.

Bucolico — No more eclecticism, no standards, no stylistic posturing. A richness of evocations, yes, but one single recurring purpose. The ability to name.`
  },
  {
    date: "2024.11.25",
    title: "Perfect Days",
    content: `Kondo a kondo / Ima wa ima

"Ophir is the arrival to the safe place, now I need to bring all things past, those of great value, through the desert."`
  },
  {
    date: "2024.11.15",
    title: "Livre du Réel",
    content: `"We are gardeners who have a plot at the back of our house. We take what we have to magnify it, to elevate it and twist it in sometimes very surprising ways."

"I wish to live entirely in the real, accept its limits, the cracks in our body, accept seeing things degrade or crumble without fear."`
  },
  {
    date: "2024.11.01",
    title: "Lucy Railton",
    content: "Ghost pads. Wind like boomerangs around space. Organic then synthesized — like air displacing. Intense frequency selection."
  },
  {
    date: "2024.10.01",
    title: "Petits Bains",
    content: "Laurel Halo. Leila Bordreuil. Spectral harmonies, cohesive sonic ensemble. Underwater landscapes."
  },
  {
    date: "2024.09.05",
    title: "Recording: Dilos Dos Veces",
    content: ""
  },
  {
    date: "2024.05.01",
    title: "The Jaguar",
    content: `Wanting to refine guitar approach. Looking for a Telecaster to perform in New York. Ended up with a vintage Jaguar — very acoustic, quite heavy. Indian feel.

That same day: Bi Gan's Kaili Blues at the theatre.`
  },
  {
    date: "2024.03.31",
    title: "De retour à Paris",
    content: `Lecture de Sebald, Les Émigrants, au spa du RM. Bi Gan vu le week-end précédent.

"As I finished reading, I was searching for the truth of these stories. I wanted deeply to believe in them, for they were proof to me of the beauty of the real. Despite the speculative and composite nature of Sebald's writings, the authenticity of the stories remains intact for me."

Les personnages sont habités de fantômes, ils cherchent sans trouver. L'éloignement spatial et temporel de leur patrie leur fait ressentir un manque qui dépasse, de manière métaphysique, leur condition vécue. Ils ressentent la hauteur et la profondeur de la vie, de l'existence, et se savent alors relativement immobiles dans cette immensité. Une hypersensibilité à la vérité et au possible.

Je crois profondément au poids du passé lointain. Les humains et leur esprit, n'ayant aucune limite, laissent des sillages par leurs actions. Notre situation dans le sud de la France nous était d'autant plus intenable que nous y sommes revenus à chaque génération et ce depuis quatre générations. Nous n'y étions pas de simples étrangers mais des messagers à notre insu.

Sans que je le sache, mes terres d'accueil devinrent virtuelles, résidant dans mes pensées, elles étaient mon vrai point d'ancrage et m'emmenèrent très loin du présent et de la réalité.

Le temps passant ma vie s'est simplifiée et éclaircie.

Film: The Scent of Green Papaya`
  },
  {
    date: "2024.03.07",
    title: "Anvers — Blauwe Zaal",
    content: "Jakob Bro / Midori Takada / Jesper Zeuthen / Marilyn Mazur."
  },
  {
    date: "2023.08.01",
    title: "Rick Rubin — The Creative Act",
    content: `"Nature transcends our tendencies to label and classify, to reduce and limit. The natural world is unfathomably more rich, interwoven, and complicated than we are taught, and so much more mysterious and beautiful."

"The closer we can get to the natural world, the sooner we start to realise we are not separate. And that when we create, we are not just expressing our unique individuality, but our seamless connection to an infinite oneness."

"It is said the ocean provides a closer reflection of who we are than any mirror."`
  },
  {
    date: "2023.07.01",
    title: "Interior Rooms",
    content: "Released."
  },
  {
    date: "2023.06.17",
    title: "Gypsy Night",
    content: "Never heard an acoustic instrument sound like this."
  },
  {
    date: "2023.04.26",
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
    date: "2023.02.08",
    title: "Michiyo Yagi Trio",
    content: `With Eivind Aarset & Jan Bang. Le Générateur, Gentilly.

Cold, feverish, walking out of Paris to suburban reaches. Streets quiet and comforting. Charles Lloyd's Sangam on the way. Concert extremely inspiring — mossy, full of life and shades.

Recording.`
  },
  {
    date: "2023.02.05",
    title: "",
    content: `Bachelard, L'Air et les songes:

"We always think of the imagination as the faculty that forms images. On the contrary, it deforms what we perceive; it is, above all, the faculty that frees us from immediate images and changes them."`
  },
  {
    date: "2023.02.02",
    title: "Leviathan",
    content: `Braque: "Le vase donne une forme au vide et la musique au silence."

Lorsque les torrents étreignent la rumeur. Que les idées cessent. Les torrents rassurent. Leur bruit blanc ne se répétera jamais. Leur respiration nous enracine.

Je ne souhaite plus écouter de battements imposés, séquencés. Le monde déborde d'énergies mais on y perd notre sensibilité. Un vacarme si organisé qu'il en devient inaudible. Les lumières bleues nous aveuglent.

J'ai besoin d'écouter les éléments, un environnement vide d'idées. Watson. Fennesz. Lloyd. Il y a des orages dans la nature — ils apaisent par leur force. Leur force n'est pas destructrice, elle ne disperse pas.`
  },
  {
    date: "2023.02.01",
    title: "Japan",
    content: `First trip.

La nature, brute, bleue-gris. Sculptée mais pas par le vent — de l'intérieur. Industrialisation précise, dense, sens du design.

Rêve: un tsunami remplit la terre d'eau. Escalade sans fin de montagnes pour échapper à la noyade. Villages de montagne abandonnés. On découvre une vie possible très haut. Les montagnes sont vertes, fleuries, tempérées.

Rêve (avion du retour, au-dessus de la Mongolie glacée): Escale à Venise. Visite d'un immeuble où j'aurais vécu pendant mes années d'études. La vue sur le fleuve. Les appartements sont sublimes et spacieux. Une Venise idéale. Poissons énormes et multicolores.

Sebald: "Those voices that traverse the ether once dusk has fallen, which only a few can pick up, have a life of their own like bats, and shun the light of day."

Recordings.`
  },
  {
    date: "2023.01.01",
    title: "",
    content: `Sebald:

"Mice and moles, and small mammals in general, also spend their sleeping hours in a world that exists purely within themselves, and who knows, perhaps the mites dream too, or the lettuce gazing up at the moon by night."`
  },
  {
    date: "2022.11.15",
    title: "",
    content: `Stéphane Lambert sur Klee:

"Klee is literally fascinated by this miracle that brings the living out of their non-existence."

"There is permanently in Klee a subliminal bridge between unreality and materiality."

"In Klee's compositions, this alloy reaches such a level of concentration that it gives off sometimes dizzying exhalations. The painter advances on the path of the unknowable until the vanishing of reason."

"It is not colours that inhabit the works of Paul Klee, but the murmur of the spectres we shall become."`
  },
  {
    date: "2022.08.01",
    title: "",
    content: `Sebald, Austerlitz:

"Alphonso once remarked that it seemed to him as if all the colours had faded, as if everything beautiful was disappearing and could only be found in places where no one looked for it anymore, in underwater gardens, dozens of fathoms below the surface of the sea."`
  },
  {
    date: "2022.05.01",
    title: "Los Angeles",
    content: "Recording: Pink Lime."
  },
  {
    date: "2021",
    title: "Thomas Mann — The Magic Mountain",
    content: `« Le monde de l'atome était extérieur et, de même, la planète Terre, que nous habitons, était selon toute probabilité un intérieur plein de profondeur, sur le plan organique. Un chercheur n'avait-il pas évoqué, dans son audace rêveuse, les « animaux de la Voie lactée », monstres cosmiques dont la chair, les os et le cerveau étaient composés de systèmes solaires? »

Les rideaux de pluie miroitante s'évanouirent : la mer s'étendait, c'était une mer du Sud, d'un bleu extrêmement profond, étincelant de lueurs argentées, avec une baie magnifique, dégagée et vaporeuse d'un côté, à demi sertie dans de vastes massifs montagneux dont le bleu allait en se délavant…`
  },
  {
    date: "2019.12.19",
    title: "Hearts",
    content: "Released. First Placidum release."
  },
  {
    date: "2019.09.01",
    title: "Black Midi",
    content: "Paris. Immediacy of music. Kaleidoscopic qualities. Strong narration."
  },
  {
    date: "2019.02.17",
    title: "Recording: Time Apart",
    content: "Beirut."
  },
  {
    date: "2019.02.14",
    title: "Fanar Birds",
    content: "Beirut."
  },
  {
    date: "2018.11.22",
    title: "Scout Niblett",
    content: "Transcended. Years before, a small note to myself compared her voice to Miles' trumpet on Bitches Brew. Both look like burning canyons."
  },
  {
    date: "2018.08.16",
    title: "Faroh's Birds",
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
    date: "2018.04.17",
    title: "Union Chapel",
    content: "Jan Jelinek and Midori Takada."
  },
  {
    date: "2018.03.11",
    title: "Reflection",
    content: "Recording: South East Asia."
  },
  {
    date: "2018.02.15",
    title: "",
    content: "Seagulls shortly after waking. A door has been opened somewhere — though hours fall at the same place, a stream runs beside me. Correspondence with the past. The one I missed. The strokes my name has to forget."
  },
  {
    date: "2018.02.01",
    title: "South East Asia",
    content: `Opposition of high modernity and minimalism with luxuriant tropical atmosphere. Strong impact.

Soundtrack: Basinski — Cascade. Low — Lullaby.`
  },
  {
    date: "2017.10.14",
    title: "MOMA",
    content: "Matana Roberts. Recording."
  },
  {
    date: "2017.10.10",
    title: "Village Vanguard",
    content: `Bill Frisell & The Bad Plus.

Unsung Heroes. Into the Animal Race. Let Me In. Rag. Live to Tell.

Placidum — concept laid down. Logo emerges through archive research.`
  },
  {
    date: "2017.10.01",
    title: "New York",
    content: `After the album's release. Finalisation of Hearts. Many inspiring acts, nighttime walks.

Bill Frisell. John Zorn. Tyshawn Sorey. Marc Ribot. Jimi Hendrix at the Bunker. Alan Vega exhibition. Matana Roberts. Cécile McLorin Salvant.

Encountered Ryuichi Sakamoto in the street.`
  },
  {
    date: "2017.09.25",
    title: "1 Semaine à NY",
    content: `"Les derniers jours m'ont submergé d'un sentiment de plénitude, effaçant le vide, repoussant l'obscurité pressante de mes rêves éphémères.

Plusieurs fois j'ai tenté d'écrire car mon cœur débordait, mais je restais, immobile sur le canapé délavé, orangé, du petit salon. Cette pièce en contrebas est abritée de toutes parts par un beau jardin rempli d'oiseaux."`
  },
  {
    date: "2017.09.07",
    title: "Dakota Dreams",
    content: "Weird retake. Recording."
  },
  {
    date: "2017.09.01",
    title: "Golconde",
    content: `Released. First album. Strong post-colonial influences — Joseph Conrad, Brazilian colors, surrealist themes.

As they were longing for these stones with their whole soul, incandescent gazes illuminated Southern Indian nights. Whispers would silence the nocturnal fury. Conspiracy fills the warm air. What appeared to his sight were countless blazing birds, slowly, carrying out their watch, through thick layers of rainforest. Their systems, their ambitions, their wild illusions, so many spheres of romance.

For an instant, the great luminaries took shelter within the most obscure earth, only to arise again, as a reflection, in the eyes of a Queen.`
  },
  {
    date: "2017.08.01",
    title: "First Live Act",
    content: `Dordogne. Contours of what is to come. Improvisational collage: synthetic materials, field recordings, found audio. Improvised guitar along DSP. Solid body Gibson 335.

Opening for E/tape and Nicolas Lutz. Among others that festival: Jan Jelinek, Chi Factory, Roedelius & Chaplin.`
  },
  {
    date: "2017.07.11",
    title: "Lunar Observation",
    content: `Cotton moon, in the naked angle, still remembers it was full. Behind, so far, a star, so strong — thought it was a plane. Then above my lingering place, a screen, white glow on the lava, twice every half a minute. Second lighthouse, truly, in my history. Quarter century.

Silver over marine blue. Pleased to contrast the astral lights, pleased to wear the abyss. Clusters of obscure mines.

Wind stopped. Time resets backward, recites common wonders. Perfect circle ruling the thousand sea grooves.

Faint call from the naked angle. My dream has paused, partially lost I suppose. Now eerie is this cotton sphere — its mines are none.`
  },
  {
    date: "2017.02.27",
    title: "",
    content: "Les mots se plissent, doucement, puis se voilent tant ces pensées sont réelles, trop grandes pour une âme sans courage. Elle arracha l'horloge du mur et brisa le verre. J'aimais les yeux fatigués, car ils ne récitent plus. C'est ça le jazz. La cadence des vents. Les cycles millénaires. La minute de trop."
  },
  {
    date: "2017.02.15",
    title: "",
    content: `Baudelaire, Les Paradis artificiels — III. Le Théâtre de Séraphin:

"Votre œil se fixe sur un arbre harmonieux courbé par le vent ; dans quelques secondes, ce qui serait dans le cerveau d'un poète qu'une comparaison fort naturelle deviendra dans le vôtre une réalité."

"Au-dessus de ma tête voltigeaient des oiseaux brillants et tourbillonnants, et, comme mon œil percevait le son des cloches au cou des chevaux qui cheminaient au loin sur la grande route, les deux sens fondant leur impression en une idée unique ; j'attribue aux oiseaux ce chant mystérieux de cuivre, et je croyais qu'ils chantaient avec un gosier de métal."`
  },
  {
    date: "2017.02.02",
    title: "",
    content: "La brume ne songe qu'à nos rires. Elle sait voir nos leurs au déplaisir. Laisse s'étendre dans les passages étroits la lueur de cœurs inventés. Personne ici n'a de cœur. Nous sommes une foule qui ressent sans choisir. Ses rues sont bordées d'incandescence qu'elle enrobe par bienveillance et obsession."
  },
  {
    date: "2017.01.25",
    title: "Recording: The Day the Wall Fell",
    content: ""
  },
  {
    date: "2017.01.15",
    title: "",
    content: "Le froid bleu de l'air qui nous retient. L'envie que chacun a d'observer en l'autre une réponse. Car les brûlures se font plus nettes encore que le temps. Quelle est la marque de l'attachement? Lorsque une lumière vacille et qu'il se fait tard."
  },
  {
    date: "2016.12.01",
    title: "The Desert Guitar",
    content: "Bought a guitar in the desert. Named it Aino — reading Sándor Márai at the time. This instrument, that feeling, will become the embodiment of a series: Hearts, Interior Rooms, Latitudes. A decade of sonic evolution."
  },
  {
    date: "2016.11.21",
    title: "",
    content: `"Ce jour d'août la main pesait sur moi, la sève de ma vie s'était asséchée comme dans la chaleur sèche de l'été."

Baudelaire, Les Paradis artificiels — Le goût de l'infini:

"Il est des jours où l'homme s'éveille avec un génie jeune et vigoureux ; ses paupières à peine déchargées du sommeil qui les scellait, le monde s'offre à lui avec un relief puissant, une netteté de contours, une richesse de couleurs admirables ; le monde moral ouvre ses vastes perspectives pleines de clartés nouvelles."`
  },
  {
    date: "2016.10.15",
    title: "",
    content: `Baudelaire, Les Paradis artificiels — Le poème du Hachisch, I. Le goût de l'infini:

"Ceux qui savent s'observer eux-mêmes et qui gardent la mémoire de leurs impressions, ceux-là qui ont su, comme Hoffmann, construire leur baromètre spirituel, ont eu parfois à noter, dans l'observatoire de leur pensée, de belles saisons, d'heureuses journées, de délicieuses minutes."`
  },
  {
    date: "2016.10.01",
    title: "Tatemix",
    content: "Recording session. Klee as reference. Mossy hues and textures that remain. Compositions will emerge from that grove."
  },
  {
    date: "2016.09.18",
    title: "Intrinsic London",
    content: "Opening for Hans Joachim Roedelius and Christopher Chaplin. Visual collaboration with Dream Rec. A new kind of set."
  },
  {
    date: "2016.08.15",
    title: "",
    content: `Baudelaire, dédicace à J.G.F. des Paradis artificiels:

"Toutefois il est évident que comme le 'monde matériel' n'existe que dans le spirituel, hors des patries, et concourt ainsi à opérer cet amalgame indéterminable que nous nommons notre individualité, la femme est l'être qui projette la plus grande ombre ou la plus grande lumière dans nos rêves."

"La femme est fatalement suggestive ; elle vit d'une autre vie que la sienne propre ; elle vit spirituellement dans les imaginations qu'elle hante et qu'elle féconde."`
  },
  {
    date: "2016.08.09",
    title: "",
    content: `Second sonic collage is recorded, « A Silent Spectator » (see chronicles)`
  },
  {
    date: "2016.08.01",
    title: "Sicilia",
    content: "Many nights sleeping outside. Loren Connors on repeat. Epiphanies — the sparse guitar, uncertain tempo, hugely melancholic intertwined melodies against Mediterranean backdrop."
  },
  {
    date: "2016.07.01",
    title: "Golconde Sessions",
    content: `South of France. Guitars layered at night. Air saturated with pine needles. Small walks under yellowish artificial light — tricked myself into believing this was quiet America. This way of working will remain.

Mémoires: "Doors opened very early, onto universes I could not understand but whose grandeur I felt."

Arlequin. The jungle, woody and exotic mysteries (the back of my grandparents' house). The reptile aquariums.`
  },
  {
    date: "2016.05.27",
    title: "Swell Music II-1",
    content: "Recording session."
  },
  {
    date: "2016.05.01",
    title: "Paul Klee Retrospective",
    content: `Pompidou. Enormous opening. Mystery, miniature, dream logic.

Stéphane Lambert on Klee:

« L'artiste-architecte attend le moment où la théorie ne répond plus pour échafauder la structure du rêve. C'est par exemple un Départ des bateaux (1927) sur une mer nocturne. Le moindre suffit pour planter le décor. Battre la mesure dans l'obscurité. Les couleurs vives flottent dans la nuit, qui pourraient être autant d'allusions allégoriques que de simples voiliers cherchant à s'orienter. Cette position intermédiaire charge l'œuvre d'une épaisseur inédite comme si elle s'était inscrite sur un palimpseste maintes fois effacé. Les époques se fondent en un courant identique. Deux petits cercles surplombent un fin rectangle : et un visage apparaît. Quelques triangles sur des croissants de lune : et nous voilà embarqués pour l'odyssée. Dans le sommeil de l'existence, des ombres œuvrent à notre navigation. Notre image se dilue dans les eaux sombres sur lesquelles nous voguons.»`
  },
  {
    date: "2016.01.10",
    title: "Unwanted Studio Fragment",
    content: "Ennio Morricone, controfase."
  },
  {
    date: "2015.10.10",
    title: "Terry & Gian Riley",
    content: "Live. Incredibly touching."
  },
  {
    date: "2015.01.01",
    title: "Roma",
    content: "Mediterranean scents in an antique city. Mazy stairs."
  },
  {
    date: "2014",
    title: "Spot Bleu",
    content: "A set that opened doors. Cross-contaminated curations since absorbed into my language. Could not see the crowd — the lights."
  },
  {
    date: "2013.07.01",
    title: "Recording: Chêne",
    content: "For Pluie Noir."
  },
  {
    date: "2013.04.15",
    title: "Transmission: Iz Pepla",
    content: `For Pluie Noir.

https://soundcloud.com/pluie-noir/pluie-noir-podcast-028`
  },
  {
    date: "2013.03.21",
    title: "Moscow, Early Spring",
    content: `Winter persists. A track called A dombon materializes. Tropical assumptions, vocoded French, a Dostoevskian shadow. Reading Tender Is the Night. A sentence yields "Placid Strait." For now, a vague alias. Nothing more.`
  },
  {
    date: "2012.02.15",
    title: "Recording: Preface",
    content: "South of France. Wet soil, dead leaves, firewood smoke. Preface emerges — not pretentious, a collection of missing links. (See Chronicles.)"
  },
  {
    date: "2012.02.12",
    title: "Praeludium",
    content: "London, third winter. End of a cycle, apparent now. High fever, things refusing alignment. Without knowing it, back where it began. A dream of chamber music — texture and hidden melodies in conversation. Time released. Later that season: trains ascending Swiss mountains, War & Peace open on my lap. Something behind the peak. Keep climbing."
  }
];
