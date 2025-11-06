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
      
      <div className="space-y-8">
        {news.map((item, index) => (
          <p key={index} className="serif leading-relaxed text-base">
            <span className="text-iron-oxide" style={{ opacity: 0.6 }}>
              {formatDate(item.date).latin}
            </span>
            {' '}
            {item.content}
          </p>
        ))}
      </div>
        
    </div>
  );
};

export default Bulletin;