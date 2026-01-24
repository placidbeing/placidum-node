import { journalEntries } from '@/data/journalEntries';

// Sort entries by date descending
const sortedJournalEntries = [...journalEntries].sort((a, b) => b.date.localeCompare(a.date));

const Notes = () => {
  // Format date from YYYY.MM.DD to Latin and year below
  const formatDate = (dateStr: string) => {
    const parts = dateStr.split('.');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    const monthNamesLatin = ['Januarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Junii',
                             'Julii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
    
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

    // Handle year-only dates (e.g., "2014")
    if (!month || !day) {
      return {
        latin: '',
        year: toRoman(parseInt(year)),
        numerical: year
      };
    }
    
    const monthIndex = parseInt(month) - 1;
    const dayNum = parseInt(day);
    
    return {
      latin: `Die ${toRoman(dayNum)}. ${monthNamesLatin[monthIndex]}`,
      year: toRoman(parseInt(year)),
      numerical: `${day}.${month}.${year}`
    };
  };

  // Render content with quotes in italics
  const renderContent = (content: string) => {
    // Split by quotes (both "..." and «...»)
    const quotePattern = /("([^"]+)"|«([^»]+)»)/g;
    const parts: { text: string; isQuote: boolean }[] = [];
    let lastIndex = 0;
    let match;

    while ((match = quotePattern.exec(content)) !== null) {
      // Add text before the quote
      if (match.index > lastIndex) {
        parts.push({ text: content.slice(lastIndex, match.index), isQuote: false });
      }
      // Add the quote (including the quote marks)
      parts.push({ text: match[0], isQuote: true });
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push({ text: content.slice(lastIndex), isQuote: false });
    }

    return parts.map((part, i) => 
      part.isQuote ? (
        <em key={i} className="font-garamond">{part.text}</em>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
  };

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
        {sortedJournalEntries.map((item, index) => (
          <article key={index} className="note-entry relative py-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="font-mono text-sm leading-tight" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
                  {formatDate(item.date).latin && (
                    <div className="text-iron-oxide" style={{ opacity: 0.6 }}>
                      {formatDate(item.date).latin}
                    </div>
                  )}
                  <div className="text-iron-oxide" style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                    {formatDate(item.date).year}
                  </div>
                  <div className="text-iron-oxide" style={{ opacity: 0.4, fontSize: '0.85rem' }}>
                    {formatDate(item.date).numerical}
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                {item.title && (
                  <h2 className="text-xl serif font-medium">
                    {item.title}
                  </h2>
                )}
                {item.content && (
                  <div className={`serif leading-relaxed text-lg whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                    {item.isFullyItalic ? item.content : renderContent(item.content)}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
        
    </div>
  );
};

export default Notes;
