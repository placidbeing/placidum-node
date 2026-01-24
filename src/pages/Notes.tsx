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
                {item.contentBlocks && item.contentBlocks.map((block: ContentBlock, blockIndex: number) => (
                  block.type === 'text' && block.text ? (
                    block.text.startsWith('http') ? (
                      <div key={blockIndex} className="my-4">
                        <a 
                          href={block.text} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                        >
                          {block.text}
                        </a>
                      </div>
                    ) : (
                      <div key={blockIndex} className={`serif leading-relaxed text-[1.1875rem] whitespace-pre-line ${item.isFullyItalic ? 'font-garamond italic' : ''}`}>
                        {item.isFullyItalic ? block.text : renderContent(block.text)}
                      </div>
                    )
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
                    <figure key={blockIndex} className="flex flex-col gap-4 my-6 max-w-lg">
                      {block.images.map((src: string, imgIndex: number) => (
                        <div key={imgIndex} className="w-full overflow-hidden">
                          <ImageLightbox 
                            src={src} 
                            alt={block.caption || `Gallery image ${imgIndex + 1}`}
                            className="w-full h-auto object-contain grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ))}
                      {block.caption && (
                        <figcaption className="text-sm text-muted-foreground font-mono italic opacity-70 whitespace-pre-line">
                          {block.captionLink ? (
                            <a href={block.captionLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                              {block.caption}
                            </a>
                          ) : (
                            block.caption
                          )}
                        </figcaption>
                      )}
                    </figure>
                  ) : block.type === 'audio' && block.audioSrc ? (
                    <figure key={blockIndex} className="my-6 max-w-lg">
                      <div className="bg-muted/30 border border-muted p-4 space-y-3">
                        <div className="space-y-1">
                          {block.audioTitle && (
                            <div className="font-mono text-sm font-medium">{block.audioTitle}</div>
                          )}
                          {block.audioSubtitle && (
                            <div className="font-mono text-xs text-muted-foreground italic">{block.audioSubtitle}</div>
                          )}
                        </div>
                        <audio 
                          src={block.audioSrc} 
                          controls 
                          className="w-full h-10 opacity-80"
                          preload="metadata"
                        />
                        <a 
                          href={block.audioSrc} 
                          download 
                          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          Download
                        </a>
                      </div>
                    </figure>
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
