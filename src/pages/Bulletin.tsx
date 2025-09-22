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
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-4xl font-typewriter mb-4 tracking-wider">bulletin</h1>
        <p className="text-muted-foreground max-w-2xl">
          Documentation of recent activities, specimen discoveries, and taxonomical updates 
          from the placidum collection.
        </p>
      </header>
      
      <div className="space-y-12">
        {news.map((item, index) => (
          <article key={index} className="border-l-4 border-accent pl-8 hover:border-primary transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  <time className="specimen-label block w-fit">{item.date}</time>
                  <span className="specimen-label text-accent border-accent">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-serif mb-4 leading-tight">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">{item.content}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <footer className="mt-20 border-2 border-border bg-card p-8 text-center">
        <h3 className="font-serif text-lg mb-3">Research Updates</h3>
        <p className="text-sm text-muted-foreground font-mono mb-2">
          Subscribe to field notes and specimen announcements
        </p>
        <p className="text-accent" style={{ fontFamily: 'cursive' }}>sacha@placidum.com</p>
      </footer>
    </div>
  );
};

export default Bulletin;