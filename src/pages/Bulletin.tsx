const Bulletin = () => {
  const news = [
    {
      date: "2024.12.15",
      title: "New Release: PLC004 - Ambient Studies",
      content: "Our latest ambient compilation featuring 8 artists exploring minimal soundscapes. Available now on Bandcamp.",
      category: "Release",
    },
    {
      date: "2024.12.10", 
      title: "Chronicles Episode 03 Now Live",
      content: "Deep dive into the creative process behind our recent releases with guest interviews.",
      category: "Podcast",
    },
    {
      date: "2024.12.01",
      title: "Label Showcase at Minimal Festival",
      content: "placidum artists performing live at the upcoming Minimal Electronic Festival. Dec 20-22.",
      category: "Event",
    },
    {
      date: "2024.11.28",
      title: "Submissions Open for 2025",
      content: "Now accepting demo submissions for 2025 releases. Check submission guidelines in the catalog section.",
      category: "News",
    },
  ];

  return (
    <div className="notebook-grid py-20">
      <div className="marginalia">
        <span className="folio-number">Observationes</span>
      </div>
      <div>
        <header className="mb-16">
          <h1>field notes & observations</h1>
          <div className="fragment">
            <p className="max-w-2xl">
              Documentation of recent activities, specimen discoveries, and taxonomical updates 
              from the placidum collection.
            </p>
          </div>
        </header>
        
        <div className="space-y-16">
          {news.map((item, index) => (
            <article key={index} className="relative py-8 border-l-2 border-verdigris/40 pl-8">
              <div className="notebook-grid-wide">
                <div className="marginalia">
                  <div className="folio-number">{item.date}</div>
                  <div className="marginalia mt-2">{item.category}</div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="annotation-hover" data-annotation={`Entry ${index + 1}`}>
                    {item.title}
                  </h2>
                  <div className="fragment">
                    <p className="leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <footer className="journal-entry mt-20 p-8 text-center">
          <div className="fragment">
            <h3>Research Updates</h3>
            <div className="marginalia">
              Subscribe to field notes and specimen announcements
            </div>
            <div className="marginalia mt-4">
              <a href="mailto:sacha@placidum.com" className="ink-underline">
                sacha@placidum.com
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="marginalia">
        <span className="folio-number">Continuatur</span>
      </div>
    </div>
  );
};

export default Bulletin;