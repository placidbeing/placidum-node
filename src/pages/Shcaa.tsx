import { useEffect } from 'react';

const Shcaa = () => {
  useEffect(() => {
    document.title = "Shcaa — Sacha Alexandre Khalifé | Placidum";
  }, []);

  return (
    <div className="safe-area wrap py-20">
      <div className="space-y-20 max-w-3xl">

        {/* Bio */}
        <section className="space-y-6">
          <h1 className="text-2xl font-garamond font-normal mb-8 text-left codex-title uppercase">SHCAA</h1>


          <div className="space-y-4 text-foreground leading-loose text-lg">
            <p>
              <strong className="font-semibold">Sacha Alexandre Khalifé aka Shcaa</strong> is a French-Lebanese artist and composer based in Paris. He works with guitar, fragments of environmental recordings and digital processing to shape abstract ballads and impressionist collages.
            </p>
            <p>
              His expression inhabits a space where blues-informed improvisation meets the patience of electroacoustic composition. While proficient within electronic composition systems — granular attention to sound, unhurried studio practice, autonomy of process — Shcaa's voice could be defined as organic, even naturalistic, and is nourished by a wide inheritance of musical traditions, past and present. His approach is shaped by a poetic sensibility and relies on the correspondances between sound and image to structure a dense and personal language. Recurring themes, cinematic instincts and insistent colour palettes are the threads that hold his work together.
            </p>
            <p>
              Shcaa first emerged through rhythm-based electronic music, releasing on labels such as R&S and Apollo. But the pulse was always a carrier for something else — a means of reaching the texture beneath the groove. Over the past decade his work has drifted steadily toward what might be called speculative folk: music that draws on distant cultural memory and recasts it through improvisation and patient accumulation.
            </p>
          </div>
        </section>

        {/* Discography — Albums */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Albums</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Title</th>
                  <th className="pb-2 font-normal">Label</th>
                  <th className="pb-2 font-normal">Format</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["Golconde", "Sharingtones", "Vinyl", "2017"],
                  ["No Moon at All, What a Night", "Apollo (R&S)", "Vinyl / Digital", "2020"],
                ].map(([title, label, format, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4">{title}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{label}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{format}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Discography — Placidum */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Placidum</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Cat.</th>
                  <th className="pb-2 font-normal">Artist</th>
                  <th className="pb-2 font-normal">Title</th>
                  <th className="pb-2 font-normal">Format</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["PLUM1.", "Ain°", "Hearts", "Digital", "2018"],
                  ["PLUM2.", "Shcaa", "Golconde", "Digital (reissue)", "2019"],
                  ["PLUM3.", "Shcaa", "Soft Signs", "Digital", "2022"],
                  ["PLUM4.", "Nocturnal Solutions", "Nocturnal Solutions", "Digital", "2023"],
                  ["PLUM5.", "Ain°", "Interior Rooms", "Digital", "2023"],
                  ["PLUM6.", "Shcaa", "Neptune", "Digital", "2024"],
                  ["PLUM7.", "Shcaa", "Beautiful Situation", "Digital", "2025"],
                  ["PLUM8.", "Ain°", "Latitudes", "Cassette (Ltd. 50) + Digital", "2026"],
                ].map(([cat, artist, title, format, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4 text-muted-foreground font-mono text-xs">{cat}</td>
                    <td className="py-2 pr-4">{artist}</td>
                    <td className="py-2 pr-4">{title}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{format}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* EPs & Singles */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">EPs & Singles — Other Labels</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Title</th>
                  <th className="pb-2 font-normal">Label</th>
                  <th className="pb-2 font-normal">Format</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["The Void Is Blue", "Chic Marionnette", "Digital", "2011"],
                  ["Venise", "Chic Marionnette", "Digital", "2011"],
                  ["Prose", "Chic Marionnette", "Digital / CD", "2012"],
                  ["Dunes", "5050 World", "Digital", "2012"],
                  ["L'écorce des Astres", "Archipel", "Digital", "2013"],
                  ["No Love in Paris", "Chic Marionnette", "Digital", "2013"],
                  ["Variant EP (Part 2)", "HDNSM", "Digital", "2015"],
                  ["Blank Slate 009 (I Want You / The Way You Look At Things)", "Blank Slate", "Vinyl / Digital", "2015"],
                  ["Catharsis", "Grow", "Vinyl / Digital", "2015"],
                  ["Camera Obscura", "Archipel", "Digital", "2016"],
                  ["Prelude (with Traian Chereches)", "Oxmose", "Digital", "2017"],
                  ["An Ungrateful Death / Pacific Gold", "R&S Records", "Vinyl / Digital", "2019"],
                  ["Silver EP", "Automatic Writing", "Vinyl / Digital", "2023"],
                ].map(([title, label, format, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4">{title}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{label}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{format}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Compilations */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Compilations & Appearances</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Release</th>
                  <th className="pb-2 font-normal">Label</th>
                  <th className="pb-2 font-normal">Track</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["Tulipa027 PETALTWO", "Tulipa Recordings", "Evaporée", "2012"],
                  ["White Ribbon", "Sharingtones", "What Goes On", "2013"],
                  ["Kollektiv Artists Volume 9", "MusicKollektiv", "Atlantic", "2013"],
                  ["Geometric Parts Compilation 2", "Doma Musique", "Syracuse", "2013"],
                  ["Blank Slate 006", "Blank Slate", "Remorse", "2014"],
                  ["Thoughts on Sight and Sound Vol. I", "Pluie Noir", "Chêne (as Placid Strait)", "2014"],
                  ["Pale Fire", "Sharingtones", "An Ungrateful Death", "2016"],
                  ["Billy Milligan Trio", "Lowlife Cartel", "The Sky Was Pearl Grey", "2018"],
                  ["Scenarii Vol. 2", "Automatic Writing", "Muse Tragis", "2021"],
                  ["Eternal Poet", "Misbits Recordings", "Locked Grooves (×2)", "2022"],
                ].map(([release, label, track, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4">{release}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{label}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{track}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Remixes by Shcaa */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Remixes by Shcaa</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Original Artist</th>
                  <th className="pb-2 font-normal">Track</th>
                  <th className="pb-2 font-normal">Label</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["Herzel", "Brown Paper Bag (Shcaa Remix)", "Filter Label", "2013"],
                  ["Kaitaro", "Smoke (Shcaa Cold Fire Visualisation)", "Flügel", "2015"],
                  ["PierroX", "Sad Deepness (Shcaa Remix)", "Schizophrenic Records", "2016"],
                  ["Otzeki", "Touch (Shcaa Remix)", "Discophorus", "2016"],
                  ["Todd Sines", "Coast (Shcaa Diffusion Remix)", "Undefined Music", "2017"],
                  ["Palm Honey", "Hot Simian Weather (Shcaa Remodel)", "Untitled (Recs)", "2018"],
                ].map(([artist, track, label, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4">{artist}</td>
                    <td className="py-2 pr-4">{track}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{label}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Remixes of Shcaa */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Remixes of Shcaa</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Original</th>
                  <th className="pb-2 font-normal">Remixer</th>
                  <th className="pb-2 font-normal">Label</th>
                  <th className="pb-2 font-normal">Year</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["No Love in Paris", "Faster", "Trazable Recordings", "2013"],
                  ["Catharsis", "Denis Kaznacheev", "Grow", "2015"],
                  ["Coffee", "Traian Chereches", "Archipel", "2020"],
                  ["Panthère", "Pheek", "Archipel", "2020"],
                ].map(([original, remixer, label, year], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4">{original}</td>
                    <td className="py-2 pr-4">{remixer}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{label}</td>
                    <td className="py-2 text-muted-foreground">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notable Performances */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Notable Performances & Work</h2>
          <div className="table-wrap">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 text-muted-foreground text-left">
                  <th className="pb-2 font-normal">Year</th>
                  <th className="pb-2 font-normal">Event</th>
                  <th className="pb-2 font-normal">Details</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["2016", "Tate Museum — MixTate 14", "Shcaa on Paul Klee. Curated mix responding to Klee's A Young Lady's Adventure (1922)."],
                  ["2016", "Experiment Intrinsic, London", "Live performance alongside Hans-Joachim Roedelius & Christopher Chaplin."],
                  ["2017", "Experiment Intrinsic, Dordogne", "Live performance alongside E/TAPE and Nicholas Lutz."],
                  ["2022", "Fluxus Temporis", "Live performance alongside Romeo Poirier and Jan Jelinek."],
                  ["2024", "XLR8R Podcast 856", "Studio mix and extended interview."],
                ].map(([year, event, details], i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-2 pr-4 text-muted-foreground">{year}</td>
                    <td className="py-2 pr-4">{event}</td>
                    <td className="py-2 text-muted-foreground">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Press */}
        <section className="space-y-6">
          <h2 className="text-xl font-garamond font-normal codex-title italic">Selected Press & Features</h2>
          <ul className="space-y-3 text-sm text-foreground">
            <li><strong className="font-semibold">XLR8R</strong> <span className="text-muted-foreground">— Podcast 856 (2024). Studio mix and interview.</span></li>
            <li><strong className="font-semibold">Gilles Peterson, BBC Radio 6</strong> <span className="text-muted-foreground">— "If You Fall" featured, January 9th 2021.</span></li>
            <li><strong className="font-semibold">Bandcamp</strong> <span className="text-muted-foreground">— Moralia featured in Bandcamp Weekly selection, 13 October 2020.</span></li>
            <li><strong className="font-semibold">FIP</strong> <span className="text-muted-foreground">— Auguries in regular rotation since 2020.</span></li>
            <li><strong className="font-semibold">Radio Nova</strong> <span className="text-muted-foreground">— An Ungrateful Death featured, Nova Club by David Blot.</span></li>
            <li><strong className="font-semibold">Hotel Costes</strong> <span className="text-muted-foreground">— If You Fall & Siskor featured in "Saint-Honoré Love" & "Costes #1220" playlists.</span></li>
            <li><strong className="font-semibold">Tate Museum</strong> <span className="text-muted-foreground">— MixTate 14: Shcaa on Paul Klee. Essay and mix.</span></li>
            <li><strong className="font-semibold">Phonica Records</strong> <span className="text-muted-foreground">— Featured release: An Ungrateful Death (R&S).</span></li>
            <li><strong className="font-semibold">15 Questions</strong> <span className="text-muted-foreground">— Extended interview on listening, sound, silence, and creative philosophy.</span></li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Shcaa;
