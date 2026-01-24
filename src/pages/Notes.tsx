import { journalEntries, ContentBlock } from '@/data/journalEntries';
import JournalMedia from '@/components/JournalMedia';
import ImageLightbox from '@/components/ImageLightbox';

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
                  <div className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                    {item.isFullyItalic ? item.content : renderContent(item.content)}
                  </div>
                )}
                {/* Render content blocks (mixed text and galleries) */}
                {item.contentBlocks && item.contentBlocks.map((block: ContentBlock, blockIndex: number) => (
                  block.type === 'text' && block.text ? (
                    <div key={blockIndex} className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                      {item.isFullyItalic ? block.text : renderContent(block.text)}
                    </div>
                  ) : block.type === 'gallery' && block.images ? (
                    <div key={blockIndex} className="flex gap-3 my-5">
                      {block.images.map((src: string, imgIndex: number) => (
                        <div key={imgIndex} className="flex-shrink-0 w-32 h-32 overflow-hidden">
                          <ImageLightbox 
                            src={src} 
                            alt={`Gallery image ${imgIndex + 1}`}
                            className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : block.type === 'vertical-gallery' && block.images ? (
                    <div key={blockIndex} className="flex flex-col gap-4 my-6 max-w-lg">
                      {block.images.map((src: string, imgIndex: number) => (
                        <div key={imgIndex} className="w-full aspect-video overflow-hidden">
                          <ImageLightbox 
                            src={src} 
                            alt={`Gallery image ${imgIndex + 1}`}
                            className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null
                ))}
                {/* Render inline media between content sections */}
                {item.media && item.media.filter(m => m.position === 'inline').length > 0 && (
                  <div className="journal-media-inline">
                    {item.media.filter(m => m.position === 'inline').map((mediaItem, mediaIndex) => (
                      <JournalMedia key={mediaIndex} media={mediaItem} />
                    ))}
                  </div>
                )}
                {/* Render content after inline media */}
                {item.contentAfterMedia && (
                  <div className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                    {item.isFullyItalic ? item.contentAfterMedia : renderContent(item.contentAfterMedia)}
                  </div>
                )}
                {/* Render media after content - Sebald style (default position) */}
                {item.media && item.media.filter(m => m.position !== 'inline').length > 0 && (
                  <div className="journal-media-container mt-6 space-y-4">
                    {item.media.filter(m => m.position !== 'inline').map((mediaItem, mediaIndex) => (
                      <JournalMedia key={mediaIndex} media={mediaItem} />
                    ))}
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
