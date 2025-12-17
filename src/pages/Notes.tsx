const Bulletin = () => {
  // Format date from YYYY.MM.DD to Latin and year below
  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('.');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    const monthNamesLatin = ['Januarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Junii',
                             'Julii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
    
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
      latin: `Die ${toRoman(dayNum)}. ${monthNamesLatin[monthIndex]}`,
      year: toRoman(parseInt(year)),
      numerical: `${day}.${month}.${year}`
    };
  };

  const news = [
    {
      date: "2024.12.15",
      title: "Resonance Studies: Year-End Reflections",
      content: "As the year draws to a close, we find ourselves contemplating the sonic territories traversed. The label has expanded into unexpected dimensions—field recordings from abandoned industrial sites, generative compositions derived from astronomical data, and collaborative works spanning three continents. Each release has contributed to an evolving dialogue about the nature of ambient music in an increasingly fragmented world. We remain committed to works that demand patient listening, that reveal their structures slowly, like fog lifting from a landscape.",
      category: "Reflection",
    },
    {
      date: "2024.11.28",
      title: "New Submission Guidelines for 2025",
      content: "The window for demo submissions opens January 15th. We seek works that exist in the spaces between—neither purely electronic nor acoustic, neither meditation nor noise. Send only completed works; we do not develop projects from sketches. Include a brief statement of intent, no longer than 200 words. Technical specifications: lossless audio, minimum 16-bit/44.1kHz. Response time varies from two weeks to several months. Patience is appreciated.",
      category: "Administrative",
    },
    {
      date: "2024.11.12",
      title: "Field Recording Expedition: Northern Territories",
      content: "Returned yesterday from three weeks documenting the sonic environment of subarctic regions. The recordings capture phenomena rarely heard: ice singing as temperatures shift, the subsonic hum of aurora activity translated into audible frequencies, wind patterns across frozen lakes creating natural drone compositions. These materials will inform several upcoming releases. The isolation proved generative—without the constant interruption of connectivity, deeper listening becomes possible. We are reminded that silence itself is a fiction; even in the most remote locations, the world speaks continuously to those who attend.",
      category: "Field Notes",
    },
    {
      date: "2024.10.30",
      title: "Collaborative Work with Visual Artists",
      content: "Announced today: a partnership with three visual artists working in different media. The project explores synaesthetic translation—how sound might become form, how image might become duration. Each artist will respond to a different release from our archive, creating works that exist in dialogue rather than illustration. The results will be exhibited in spring 2025, with an accompanying publication documenting the process.",
      category: "Collaboration",
    },
    {
      date: "2024.10.15",
      title: "On the Question of Format",
      content: "We receive frequent inquiries about physical releases. Our position remains unchanged: digital distribution allows works to exist without the environmental cost of manufacturing, shipping, and eventual disposal. The ritual of the physical object is not without value, but we have chosen to redirect those resources toward artist compensation and archival preservation. Each release exists in multiple formats within our archive—uncompressed masters, high-resolution files, and documentation of the creative process. These materials will outlast any plastic disc.",
      category: "Philosophy",
    },
    {
      date: "2024.09.22",
      title: "Autumn Equinox Programming",
      content: "Today marks the balance point—equal measures of light and dark. We observe this transition with a 24-hour stream of works selected from the archive, organized not chronologically but by tonal center, creating a continuous harmonic journey. The stream begins at sunrise local time and continues through the following dawn. No announcements, no interruptions, no commentary. Simply music moving through time as the planet tilts toward winter.",
      category: "Event",
    },
    {
      date: "2024.09.08",
      title: "Technical Notes: Mastering for Quiet Listening",
      content: "A question we often address: why are our releases mastered at lower levels than contemporary standards? The loudness war has claimed countless casualties—dynamic range compressed into oblivion, subtle details sacrificed for immediate impact. We master for the conditions we imagine our listeners inhabiting: quiet rooms, late hours, attentive ears. This requires trust—trust that listeners will adjust their playback systems appropriately, that they will meet the music halfway. Not everything needs to compete for attention; some works invite you to lean closer.",
      category: "Technical",
    },
    {
      date: "2024.08.25",
      title: "Archive Restoration Project: Phase One Complete",
      content: "The first phase of our archive restoration is finished. Thirty-seven early recordings, previously available only as low-bitrate files, have been recovered from original masters and reprocessed using contemporary techniques while preserving their original character. These works document the label's formative period—experiments that led nowhere, sketches that contained seeds of later developments, failed collaborations that nonetheless produced valuable material. Not all will be released publicly, but all will be preserved.",
      category: "Archive",
    },
    {
      date: "2024.08.10",
      title: "Summer Silence",
      content: "The label observes a period of reduced activity during August. This is not cessation but recalibration. Creative work requires periods of apparent dormancy—time for ideas to settle, for perspective to shift, for the accumulated weight of continuous production to dissipate. We encourage our artists to disconnect, to allow silence to become generative. New work will emerge in autumn; for now, we tend the archive and prepare the soil.",
      category: "Notice",
    },
    {
      date: "2024.07.18",
      title: "On Duration and Attention",
      content: "Contemporary listening habits favor brevity. Streaming platforms optimize for quick engagement, algorithmic recommendations prioritize novelty over depth. We resist this tendency not from contrarianism but from conviction: certain musical experiences require duration to unfold. A twenty-minute piece is not four five-minute pieces concatenated; it is a different kind of object entirely, demanding different modes of attention. We will continue to release works that respect their own temporal requirements, regardless of platform preferences.",
      category: "Philosophy",
    },
    {
      date: "2024.06.30",
      title: "Mid-Year Inventory",
      content: "Six releases in the first half of 2024. Each found its audience—some larger, some smaller, all appropriate to the work. We do not measure success by numbers alone; a piece that reaches one hundred truly attentive listeners has achieved more than one that washes over ten thousand as background. Our metrics, such as they are, track different values: completion rates, return listens, geographic distribution. The patterns that emerge tell stories about how music moves through the world.",
      category: "Report",
    },
    {
      date: "2024.06.12",
      title: "Workshop: Generative Systems",
      content: "Next month we host a three-day workshop on generative composition. The focus will be practical—participants will leave with functioning systems, not merely theoretical understanding. Topics include probability distributions in melodic generation, spectral analysis for timbral evolution, and the ethics of algorithmic authorship. Limited to twelve participants. Details forthcoming.",
      category: "Education",
    },
    {
      date: "2024.05.28",
      title: "New Release: Cartographies of Absence",
      content: "Today we present a work five years in development. The composer documented sounds from locations that no longer exist—demolished buildings, drained wetlands, extinct ecosystems reconstructed from archival recordings. The result is neither documentary nor elegy but something stranger: a map of negative space, territories defined by what has vanished. The piece runs forty-seven minutes and rewards patient, focused listening.",
      category: "Release",
    },
    {
      date: "2024.05.05",
      title: "Correspondence: On Influence and Originality",
      content: "A letter arrived questioning our release criteria. The writer suggested we publish only wholly original work, free from audible influence. We disagree with this premise. All music exists in conversation with what came before; to deny influence is to misunderstand creativity itself. What we seek is not originality but authenticity—work that emerges from genuine necessity rather than imitation or market calculation. The most derivative work is often that which tries hardest to appear novel.",
      category: "Correspondence",
    },
    {
      date: "2024.04.20",
      title: "Equipment Notes: The Virtues of Limitation",
      content: "Our studio operates with deliberately constrained resources. A small selection of instruments, carefully chosen. Limited processing options. No preset libraries. This scarcity breeds invention—when you cannot reach for the obvious solution, unexpected paths reveal themselves. We advise emerging artists: acquire less, learn more deeply. A single synthesizer understood thoroughly will serve you better than a thousand plugins barely explored.",
      category: "Technical",
    },
    {
      date: "2024.04.02",
      title: "Spring Catalog Update",
      content: "The catalog pages have been reorganized for easier navigation. Works are now grouped by conceptual affinity rather than chronology, creating constellations of related releases. This reflects our understanding of the archive not as a timeline but as a territory—listeners might approach from many directions, following thematic threads rather than historical sequence.",
      category: "Administrative",
    },
    {
      date: "2024.03.15",
      title: "Collaboration Announcement: Electromagnetic Landscapes",
      content: "We are pleased to announce a collaboration with researchers studying electromagnetic phenomena in remote locations. Their instruments detect radio emissions from geological processes, atmospheric disturbances, and solar activity. These signals, translated into audible frequencies, will form the basis of a series of releases exploring the hidden sonic dimension of planetary processes. The first installment arrives in summer.",
      category: "Announcement",
    },
    {
      date: "2024.02.28",
      title: "On Naming",
      content: "Titles matter more than many acknowledge. A name shapes expectation, creates context, guides interpretation. We spend considerable time on nomenclature—testing how words interact with sound, whether associations clarify or obscure. Some works arrive with names already attached; others resist naming until the final moment. A few remain untitled, their blankness itself a statement about the limits of language to contain sonic experience.",
      category: "Philosophy",
    },
    {
      date: "2024.02.10",
      title: "Winter Residency Report",
      content: "The winter residency concluded last week. Three artists spent six weeks in relative isolation, developing new work without external pressure or deadline. The results exceeded expectation—not in quantity but in depth. Extended, uninterrupted time produces different work than the fragmented hours most creators can manage. We will continue this program annually, providing what contemporary life rarely offers: the luxury of sustained attention.",
      category: "Report",
    },
    {
      date: "2024.01.22",
      title: "Archive Access Expanded",
      content: "Beginning next month, the complete archive becomes available to subscribers. This includes not only finished releases but working materials: early drafts, rejected mixes, correspondence between artists and label. The purpose is not nostalgia but education—understanding how work develops, how decisions shape outcomes, how apparent failures often contain the seeds of later success.",
      category: "Announcement",
    },
    {
      date: "2024.01.05",
      title: "New Year, Continued Practice",
      content: "We make no resolutions. The work continues as it has, one piece at a time, each release building upon what came before. Goals for the year are modest: maintain quality, support artists, preserve the archive. Revolution is not our aim; evolution serves better. Small changes accumulate into transformation, but only if patience sustains the effort.",
      category: "Reflection",
    },
    {
      date: "2023.12.18",
      title: "Year-End Transmission",
      content: "Twelve releases this year. Each represented months or years of work; each found listeners who needed what it offered. We remain grateful for the community that has formed around this endeavor—not fans in the conventional sense but fellow travelers, individuals whose relationship with sound mirrors our own. May the coming year bring continued discovery.",
      category: "Reflection",
    },
    {
      date: "2023.11.30",
      title: "On Silence in Composition",
      content: "The most powerful moments in our catalog are often those containing nothing. Silence is not absence but presence of a different kind—space in which listening itself becomes audible. We encourage composers to consider what they remove as carefully as what they include. The pause between sounds can carry more meaning than the sounds themselves.",
      category: "Philosophy",
    },
    {
      date: "2023.11.08",
      title: "Technical Difficulties Resolved",
      content: "The streaming issues affecting certain releases have been corrected. We apologize for the interruption and thank those who reported problems. Our infrastructure remains deliberately simple—complexity introduces failure points. When issues arise, we address them directly rather than hiding behind automated systems.",
      category: "Technical",
    },
    {
      date: "2023.10.22",
      title: "Autumn Sessions Complete",
      content: "The recording sessions concluded yesterday. Material for three releases captured over two weeks—an unusual density of production made possible by extensive preparation. The artists knew precisely what they wanted; our role was to provide the conditions for execution. Sometimes the best thing a label can do is stay out of the way.",
      category: "Production",
    },
    {
      date: "2023.09.15",
      title: "Equipment Acquisition: Tape Machines",
      content: "Two vintage tape machines have joined the studio. Not for nostalgia but for specific sonic characteristics unavailable in digital systems—the particular saturation, the subtle pitch instabilities, the way high frequencies soften. These are tools with personalities, demanding attention and maintenance but rewarding patience with irreplaceable textures.",
      category: "Technical",
    },
    {
      date: "2023.08.28",
      title: "Field Recording Workshop Results",
      content: "The workshop produced unexpected results. Participants approached familiar environments with fresh ears, discovering sonic worlds in overlooked locations: ventilation systems, electrical substations, agricultural machinery. The recordings will be compiled into a collaborative release, demonstrating that extraordinary sound exists everywhere for those willing to listen.",
      category: "Education",
    },
    {
      date: "2023.08.05",
      title: "Midsummer Pause",
      content: "Operations reduce through August as the collective rests and reflects. This is not laziness but necessity—sustainable practice requires rhythm, alternation between activity and recovery. The archive remains accessible; inquiries will be answered upon return.",
      category: "Notice",
    },
    {
      date: "2023.07.12",
      title: "Thoughts on Collaboration",
      content: "Most of our releases emerge from solitary practice, but collaboration offers something solo work cannot: the friction of differing visions, the surprise of unexpected combinations. We are developing a framework for collaborative releases that preserves individual voices while allowing genuine integration. Results forthcoming.",
      category: "Philosophy",
    },
    {
      date: "2023.06.20",
      title: "Solstice Broadcast",
      content: "The longest day will be marked with continuous transmission—dawn to dawn, curated selections from the archive interspersed with unreleased material. No announcements, no schedule published in advance. Simply sound moving through the hours as light persists beyond its usual boundaries.",
      category: "Event",
    },
    {
      date: "2023.05.30",
      title: "New Release: Tidal Patterns",
      content: "A composition derived entirely from oceanographic data. Wave heights, tidal cycles, water temperatures—translated through algorithmic processes into musical parameters. The result sounds nothing like the sea yet contains its rhythms, its vast temporal scales compressed into human duration. Available now.",
      category: "Release",
    },
    {
      date: "2023.05.08",
      title: "On Critical Reception",
      content: "Reviews arrive occasionally. We read them with interest but without attachment—the work exists independent of interpretation. Praise and criticism alike reflect the reviewer more than the reviewed. What matters is whether the music reaches those for whom it was made; metrics beyond that are secondary.",
      category: "Reflection",
    },
    {
      date: "2023.04.15",
      title: "Archive Milestone: 100 Releases",
      content: "With this month's publication, the archive reaches one hundred releases. We mark this not with celebration but with renewed commitment. Each number represents countless hours of creative labor; each found its way to listeners who needed what it offered. The next hundred await.",
      category: "Milestone",
    },
    {
      date: "2023.03.22",
      title: "Equinox Reflection",
      content: "Balance returns—equal night and day. We use this moment to assess the year thus far. Three releases in the first quarter, each distinct in character yet connected by shared values: patience, attention, craft. Spring brings new work; the cycle continues.",
      category: "Reflection",
    },
    {
      date: "2023.02.28",
      title: "Interview Archive Published",
      content: "Ten years of artist interviews, previously scattered across various publications, have been collected and made available. These conversations document the thinking behind the work—influences, methods, doubts, discoveries. Reading them chronologically reveals evolution; reading them thematically reveals continuity.",
      category: "Archive",
    },
    {
      date: "2023.01.15",
      title: "Decade Retrospective",
      content: "Ten years since the first release. Looking back, patterns emerge that were invisible in the moment. The label has developed not according to plan but through accumulated decisions, each building on what came before. We did not know where we were going; we still do not. The journey continues.",
      category: "Milestone",
    },
    {
      date: "2022.12.01",
      title: "Winter Transmission Schedule",
      content: "December brings a series of curated broadcasts, each exploring a different corner of the archive. Themes include: long-form works, field recording-based compositions, and pieces featuring acoustic instruments. Schedule available on request.",
      category: "Event",
    },
    {
      date: "2022.10.18",
      title: "Collaborative Release Announcement",
      content: "A work developed over two years by artists on three continents, never in the same room, communicating only through sound. Each contributed layers to an evolving composition, responding to what came before without discussion or planning. The result defies individual authorship while bearing the marks of distinct creative personalities.",
      category: "Announcement",
    },
    {
      date: "2022.08.25",
      title: "Equipment Philosophy",
      content: "Questions about our equipment choices arrive regularly. The answer is always the same: we use what serves the work, nothing more. Expensive gear does not guarantee quality; inexpensive gear does not preclude it. The relationship between tool and user matters more than specifications. Learn your instruments deeply; they will reward attention.",
      category: "Technical",
    },
    {
      date: "2022.06.30",
      title: "Mid-Year Assessment",
      content: "Six months complete. The pace has been slower than anticipated—quality demands time that efficiency cannot compress. Better to release less work of lasting value than more work of temporary interest. The archive is not a race; it is a garden requiring careful cultivation.",
      category: "Report",
    },
    {
      date: "2022.04.12",
      title: "New Submission Process",
      content: "The submission process has been streamlined. Send links only—no attachments. Include a brief description and any relevant context. Response times remain variable; the review process cannot be rushed. We listen to everything received, but responses are sent only to work we wish to discuss further.",
      category: "Administrative",
    },
    {
      date: "2022.02.20",
      title: "On Digital Preservation",
      content: "All releases are archived in multiple formats across distributed storage systems. This redundancy ensures longevity—formats become obsolete, storage media fails, but distributed copies persist. We take seriously our role as custodians; the work entrusted to us deserves protection extending beyond our individual lifespans.",
      category: "Technical",
    },
    {
      date: "2021.11.15",
      title: "Autumn Catalog Notes",
      content: "The catalog has been reorganized. Releases are now tagged by sonic characteristics rather than genre—useful for listeners seeking specific qualities (sparse, dense, melodic, textural) rather than categorical labels that often obscure more than they reveal.",
      category: "Administrative",
    },
    {
      date: "2021.08.08",
      title: "Summer Silence",
      content: "August brings reduced activity. The team disperses, tends to other aspects of life, returns refreshed for autumn. This rhythm has proven sustainable; year-round intensity produces diminishing returns. Rest is productive, even when it produces nothing visible.",
      category: "Notice",
    },
    {
      date: "2021.05.22",
      title: "Field Recording Ethics",
      content: "A note on our approach to field recording: we do not capture sounds without consideration of context. Recording in public spaces raises questions of consent and privacy; recording natural environments carries responsibility toward the ecosystems documented. Our field recordists operate with awareness of their presence as potential disturbance.",
      category: "Philosophy",
    },
    {
      date: "2021.02.10",
      title: "Pandemic Reflections",
      content: "A year into global disruption. The forced stillness produced unexpected creative dividends—artists with time to explore, listeners with attention to give. Our releases found audiences larger than anticipated, perhaps because the world finally had space for music demanding patience. Silver linings amid catastrophe.",
      category: "Reflection",
    },
    {
      date: "2020.09.30",
      title: "Streaming Considerations",
      content: "We have reconsidered our relationship with major streaming platforms. The economics remain unfavorable—fractions of cents per play, algorithms prioritizing engagement over quality. For now, releases remain available on these services but our primary distribution channel is direct. Listeners who value the work are encouraged to purchase rather than stream.",
      category: "Administrative",
    },
    {
      date: "2020.05.15",
      title: "Isolation Productions",
      content: "The first releases created entirely during lockdown arrive this month. The conditions shaped the work—solitude audible in every decision, the absence of collaboration producing distinctive character. These pieces document a specific moment; future listeners will hear the isolation even if they do not recognize its source.",
      category: "Release",
    },
    {
      date: "2019.12.20",
      title: "Decade Close",
      content: "The decade ends. Looking back: growth beyond expectation, connections across continents, work we remain proud to have released. The next ten years are unwritten; we approach them with curiosity rather than plans. What emerges will surprise us; that is the nature of genuine creative practice.",
      category: "Reflection",
    },
    {
      date: "2019.07.28",
      title: "Summer Workshop Series",
      content: "Three workshops this summer. Topics: spectral composition, extended microphone techniques, generative systems. Each limited to eight participants. Applications due by month end.",
      category: "Education",
    },
    {
      date: "2018.10.05",
      title: "Five-Year Archive",
      content: "Five years of operation. Fifty-three releases. Countless hours of music preserved and distributed. The archive grows; so does our understanding of what it contains and what it might become. Anniversaries invite reflection but the work continues regardless of calendar milestones.",
      category: "Milestone",
    },
    {
      date: "2017.06.12",
      title: "Distribution Expansion",
      content: "New distribution agreements extend our reach into territories previously inaccessible. The work now flows through channels spanning six continents. Listeners find us in unexpected places; the network grows organically, without advertising or promotion, simply through the gravitational pull of shared sensibility.",
      category: "Administrative",
    },
    {
      date: "2016.03.08",
      title: "Label Philosophy Refined",
      content: "After three years, our mission crystallizes: to preserve and distribute music that rewards sustained attention. Not background, not entertainment, but work demanding presence. This is not elitism but specificity—knowing what we are and what we are not allows clearer communication with potential collaborators and listeners.",
      category: "Philosophy",
    },
    {
      date: "2014.11.22",
      title: "Second Anniversary",
      content: "Two years since the first release. The catalog now numbers eighteen works. Each taught us something; each found its audience. We remain small, deliberately so. Growth for its own sake is not our aim; quality demands attention that scale would dilute.",
      category: "Milestone",
    },
    {
      date: "2013.04.15",
      title: "Infrastructure Notes",
      content: "The technical systems supporting the label are now stable. After months of experimentation, we have settled on approaches that balance accessibility with quality. Releases are available in multiple formats; the archive is backed up redundantly. The foundation is solid; building can proceed.",
      category: "Technical",
    },
    {
      date: "2012.12.01",
      title: "First Transmissions",
      content: "Today the first release enters the world. Years of preparation distilled into a single publication. We make no claims for its significance—only that it exists, that it represents sincere effort, that it begins a conversation we hope will continue. The archive opens with a single entry; may it grow into something worth preserving.",
      category: "Milestone",
    },
    {
      date: "2012.11.15",
      title: "Foundations",
      content: "The infrastructure is nearly complete. A name, a visual identity, a distribution system, a small catalog of work awaiting release. What remains is the courage to begin—to make public what has existed only in private, to invite judgment and indifference alike. Soon.",
      category: "Notice",
    },
    {
      date: "2012.10.28",
      title: "On Naming the Label",
      content: "After months of deliberation, a name emerges. It will be revealed shortly. The process taught us that naming is not labeling but invocation—the right name does not describe but calls forth, creates a space for what does not yet exist. We believe we have found it.",
      category: "Philosophy",
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
      
      <div className="space-y-16">
        {news.map((item, index) => (
          <article key={index} className="note-entry relative py-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="font-mono text-sm leading-tight" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
                  <div className="text-iron-oxide" style={{ opacity: 0.6 }}>
                    {formatDate(item.date).latin}
                  </div>
                  <div className="text-iron-oxide" style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                    {formatDate(item.date).year}
                  </div>
                  <div className="text-iron-oxide" style={{ opacity: 0.4, fontSize: '0.85rem' }}>
                    {formatDate(item.date).numerical}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <h2 className="annotation-hover text-xl serif" data-annotation={`Entry ${index + 1}`}>
                  {item.title}
                </h2>
                <div className="serif leading-relaxed text-base">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
        
    </div>
  );
};

export default Bulletin;
