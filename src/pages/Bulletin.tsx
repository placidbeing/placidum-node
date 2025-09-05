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
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-12">Bulletin</h1>
      
      <div className="space-y-12">
        {news.map((item, index) => (
          <article key={index} className="border-b border-border pb-8 last:border-b-0">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0">
                <time className="text-sm font-mono text-muted-foreground">{item.date}</time>
                <div className="mt-1">
                  <span className="text-xs font-mono px-2 py-1 border border-accent text-accent">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-mono mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm text-muted-foreground font-mono">
          Stay updated: contact@placidum.com
        </p>
      </div>
    </div>
  );
};

export default Bulletin;