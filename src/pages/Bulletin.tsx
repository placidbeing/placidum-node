const Bulletin = () => {
  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('.');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    
    const monthIndex = parseInt(month) - 1;
    const classical = `${day}.${romanNumerals[monthIndex]}.${year}`;
    const modern = `${day} ${monthNames[monthIndex]} ${year}`;
    
    return { classical, modern };
  };

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
    <div className="notes-section py-20 max-w-4xl mx-auto px-6">
      <header className="notes-header mb-16 text-left">
        <h1 className="font-cormorant text-4xl font-bold mb-6 codex-title text-ink" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
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
                <div className="folio-number leading-tight">
                  <div style={{ opacity: 0.6 }}>{formatDate(item.date).classical}</div>
                  <div style={{ opacity: 0.4, fontSize: '0.85rem' }}>{formatDate(item.date).modern}</div>
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